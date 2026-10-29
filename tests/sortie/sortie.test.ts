/**
 * Contrôle du site construit (dossier out/), juste avant chaque mise en ligne (.github/workflows/deploy.yml).
 * Lancement : npm run build, puis npm run test:sortie.
 * Modèle : Keurbook (tests/sortie/sortie.test.ts).
 */
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { AMAZON_TAGS, AWIN_AFFID, AWIN_ETSY_MID } from "../../src/lib/liens";
import { MOTS_BLOQUANTS, trouverMots } from "../../src/lib/mots-interdits";
import { RUBRIQUES } from "../../src/lib/rubriques";

const out = join(import.meta.dirname, "..", "..", "out");

function htmlFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === "_next" ? [] : htmlFiles(p);
    return f.endsWith(".html") ? [p] : [];
  });
}

/** Entités HTML décodées (pour compter les vrais caractères et lire les adresses). */
function decoder(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

const titre = (html: string) => {
  const m = html.match(/<title>([^<]*)<\/title>/);
  return m ? decoder(m[1]) : null;
};

const nom = (file: string) => file.slice(out.length + 1);
const pages = htmlFiles(out).map((f) => ({ file: nom(f), html: readFileSync(f, "utf8") }));
const erreur = (file: string) => file === "404.html" || file === "_not-found.html";
const indexable = (html: string) => !/<meta name="robots" content="[^"]*noindex/.test(html);
/** Texte visible d'une page (sans scripts, styles ni balises). */
const texte = (html: string) => decoder(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "));

function fautives(test: (p: { file: string; html: string }) => string | null): string[] {
  return pages.flatMap((p) => {
    const r = test(p);
    return r ? [`${p.file} : ${r}`] : [];
  });
}

describe("Site construit (out/)", () => {
  it("le dossier out/ existe et contient le site", () => {
    assert.ok(existsSync(join(out, "index.html")), "lancer npm run build avant npm run test:sortie");
    assert.ok(pages.length > 15, `${pages.length} pages seulement`);
    for (const r of RUBRIQUES) assert.ok(existsSync(join(out, `${r.slug}.html`)), `rubrique ${r.slug} absente`);
  });

  it("chaque page a un seul titre h1", () => {
    assert.deepEqual(fautives(({ html }) => {
      const n = (html.match(/<h1[\s>]/g) ?? []).length;
      return n === 1 ? null : `${n} h1`;
    }).slice(0, 10), []);
  });

  it("chaque page a une balise title de 60 caractères au plus", () => {
    assert.deepEqual(fautives(({ html }) => {
      const t = titre(html);
      if (!t) return "sans title";
      return t.length <= 60 ? null : `${t.length} caractères (« ${t} »)`;
    }).slice(0, 10), []);
  });

  it("chaque page indexable a une description et une adresse canonique sur keurdesir.com", () => {
    assert.deepEqual(fautives(({ file, html }) => {
      if (erreur(file) || !indexable(html)) return null;
      if (!/<meta name="description" content="[^"]{50,}"/.test(html)) return "description absente ou trop courte";
      if (!/<link rel="canonical" href="https:\/\/keurdesir\.com[^"]*"/.test(html)) return "canonique absente";
      return null;
    }).slice(0, 10), []);
  });

  it("toutes les données structurées (JSON-LD) se lisent", () => {
    assert.deepEqual(fautives(({ html }) => {
      for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
        try {
          JSON.parse(m[1]);
        } catch (e) {
          return `JSON-LD illisible (${(e as Error).message})`;
        }
      }
      return null;
    }).slice(0, 10), []);
  });

  it("les images en plusieurs tailles (srcset) et les images de partage existent", () => {
    const vus = new Set<string>();
    for (const { html } of pages) {
      for (const m of html.matchAll(/srcSet="([^"]+)"/g))
        for (const part of m[1].split(",")) {
          const url = part.trim().split(/\s+/)[0];
          if (url.startsWith("/")) vus.add(url);
        }
      for (const m of html.matchAll(/<meta property="og:image" content="https:\/\/keurdesir\.com(\/[^"]+)"/g)) vus.add(m[1]);
    }
    const manquantes = [...vus].filter((u) => !existsSync(join(out, decodeURIComponent(u))));
    assert.deepEqual(manquantes.slice(0, 10), []);
  });

  it("aucun mot bloquant dans le texte des pages construites", () => {
    assert.deepEqual(fautives(({ html }) => {
      const mots = trouverMots(texte(html), MOTS_BLOQUANTS);
      return mots.length ? mots.join(", ") : null;
    }).slice(0, 10), []);
  });

  it("l'accueil porte le code AdSense", () => {
    const html = readFileSync(join(out, "index.html"), "utf8");
    assert.match(html, /<meta name="google-adsense-account" content="ca-pub-\d+"/);
    assert.match(html, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-\d+/);
  });

  it("robots.txt annonce le plan du site, qui contient les rubriques avec leur date", () => {
    assert.match(readFileSync(join(out, "robots.txt"), "utf8"), /Sitemap: https:\/\/keurdesir\.com\/sitemap\.xml/);
    const plan = readFileSync(join(out, "sitemap.xml"), "utf8");
    assert.match(plan, /<loc>https:\/\/keurdesir\.com\/djongue<\/loc>\s*<lastmod>\d{4}-\d{2}-\d{2}/);
    // Aucune page non indexée dans le plan du site.
    for (const m of plan.matchAll(/<loc>https:\/\/keurdesir\.com([^<]*)<\/loc>/g)) {
      const file = m[1] === "" ? "index.html" : `${m[1].slice(1)}.html`;
      const p = pages.find((x) => x.file === file);
      assert.ok(p, `${m[1]} : page absente de out/`);
      assert.ok(indexable(p.html), `${m[1]} : page en noindex dans le plan du site`);
    }
  });

  it("les fichiers ads.txt et de clé IndexNow sont bien publiés", () => {
    assert.match(readFileSync(join(out, "ads.txt"), "utf8"), /google\.com, pub-\d+, DIRECT/);
    assert.ok(readdirSync(out).some((f) => /^[0-9a-f]{32}\.txt$/.test(f)), "fichier de clé IndexNow absent");
  });
});

describe("Liens partenaires des pages construites", () => {
  const codes = new Set(Object.values(AMAZON_TAGS));
  const liens = (html: string) => [...html.replace(/<script[\s\S]*?<\/script>/g, "").matchAll(/<a\b[^>]*href="(https:\/\/www\.(?:amazon\.fr|awin1\.com|etsy\.com)[^"]*)"[^>]*>/g)];

  it("Amazon : tag de la table ; Etsy : passage par Awin ; toujours rel sponsored nofollow noopener et nouvel onglet", () => {
    const erreurs = fautives(({ html }) => {
      for (const [balise, brut] of liens(html)) {
        const href = decoder(brut);
        const u = new URL(href);
        if (u.hostname === "www.etsy.com") return `lien Etsy sans Awin (${href})`;
        if (u.hostname === "www.amazon.fr" && !codes.has(u.searchParams.get("tag") ?? "")) return `tag absent ou hors table (${href})`;
        if (u.hostname === "www.awin1.com" && (u.searchParams.get("awinaffid") !== AWIN_AFFID || u.searchParams.get("awinmid") !== AWIN_ETSY_MID)) return `identifiants Awin inattendus (${href})`;
        if (!/rel="sponsored nofollow noopener"/.test(balise) || !/target="_blank"/.test(balise)) return `rel ou target manquant (${href})`;
      }
      return null;
    });
    assert.deepEqual(erreurs.slice(0, 10), []);
  });

  it("aucun lien marchand sur l'accueil", () => {
    assert.equal(liens(readFileSync(join(out, "index.html"), "utf8")).length, 0);
  });

  it("« Nos coups de cœur », s'il est affiché, mène à 4 fiches internes ou plus", () => {
    const html = readFileSync(join(out, "index.html"), "utf8");
    const bloc = html.match(/<section id="coups-de-coeur"[\s\S]*?<\/section>/)?.[0];
    if (!bloc) return;
    const fiches = new Set([...bloc.matchAll(/href="(\/produit\/[^"]+)"/g)].map((m) => m[1]));
    assert.ok(fiches.size >= 4, `${fiches.size} produit(s) seulement`);
  });
});

describe("En-têtes Cloudflare (out/_headers)", () => {
  it("les .txt internes de Next.js sont en noindex, mais pas ads.txt, robots.txt ni la clé IndexNow", () => {
    const headers = readFileSync(join(out, "_headers"), "utf8");
    assert.match(headers, /^\/\*\.txt\n {2}X-Robots-Tag: noindex$/m);
    const publics = readdirSync(out).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
    for (const f of ["ads.txt", "robots.txt", ...publics]) {
      assert.match(headers, new RegExp(`^/${f.replace(/\./g, "\\.")}\\n {2}! X-Robots-Tag$`, "m"), f);
    }
  });
});

