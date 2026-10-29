import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { titrePage } from "../src/lib/metadata";
import { isRubrique } from "../src/lib/rubriques";
import { TOP10S } from "../src/lib/top10/sujets";
import { DATE, PRIX_OU_NOTE, SLUG, liensInternes, pagesInternes, phrases } from "./aide";

const publies = new Set(PRODUITS.filter((p) => p.isPublished).map((p) => p.slug));

describe("Sélections Top 10", () => {
  it("slugs et onglets uniques", () => {
    assert.equal(new Set(TOP10S.map((t) => t.slug)).size, TOP10S.length);
    assert.equal(new Set(TOP10S.map((t) => t.tab)).size, TOP10S.length);
    for (const t of TOP10S) assert.match(t.slug, SLUG);
  });

  it("exactement 10 produits publiés, sans doublon", () => {
    for (const t of TOP10S) {
      assert.equal(t.items.length, 10, t.slug);
      assert.equal(new Set(t.items.map((i) => i.slug)).size, 10, `${t.slug} : doublon`);
      for (const i of t.items) assert.ok(publies.has(i.slug), `${t.slug} : produit « ${i.slug} » absent ou non publié`);
    }
  });

  it("titre, description, intro, raisons, « Par où commencer » et 3 questions", () => {
    for (const t of TOP10S) {
      assert.ok(isRubrique(t.rubrique), t.slug);
      assert.match(t.title, /^Top 10 des /, t.slug);
      assert.ok(titrePage(t.title).length <= 60, `${t.slug} : titre trop long`);
      assert.ok(t.description.length >= 70 && t.description.length <= 160, `${t.slug} : description de ${t.description.length} caractères`);
      const n = phrases(t.intro);
      assert.ok(n >= 2 && n <= 3, `${t.slug} : intro de ${n} phrase(s)`);
      for (const i of t.items) {
        const w = phrases(i.why);
        assert.ok(w >= 3 && w <= 4, `${t.slug}/${i.slug} : ${w} phrase(s)`);
      }
      assert.ok(t.start.trim(), `${t.slug} : « Par où commencer » vide`);
      assert.equal(t.faq.length, 3, `${t.slug} : ${t.faq.length} question(s)`);
      assert.match(t.updated, DATE, t.slug);
    }
  });

  it("liens internes valides, aucun prix ni note", () => {
    const pages = pagesInternes();
    for (const t of TOP10S) {
      const texte = [t.intro, t.start, ...t.items.map((i) => i.why), ...t.faq.flatMap((f) => [f.q, f.a])].join(" ");
      for (const l of liensInternes(texte)) assert.ok(pages.has(l), `${t.slug} : lien « ${l} » introuvable`);
      assert.doesNotMatch(texte, PRIX_OU_NOTE, t.slug);
    }
  });

  it("un produit dans 2 sélections au plus", () => {
    const vus = new Map<string, number>();
    for (const t of TOP10S) for (const i of t.items) vus.set(i.slug, (vus.get(i.slug) ?? 0) + 1);
    for (const [slug, n] of vus) assert.ok(n <= 2, `${slug} : dans ${n} sélections`);
  });
});
