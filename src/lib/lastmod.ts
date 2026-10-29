/**
 * Dates de dernière modification du plan du site (sitemap.xml), page par page.
 * Chaque page a une empreinte de son contenu ; src/lib/lastmod.json garde, pour chaque page,
 * l'empreinte connue et le jour où elle a changé pour la dernière fois.
 * Mise à jour du registre : npx tsx scripts/lastmod.mjs (lancé tout seul avant chaque build).
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PRODUITS } from "./catalogue/produits";
import { RUBRIQUES } from "./rubriques";
import type { Produit } from "./types";

export type Ledger = Record<string, { h: string; d: string }>;

const hash = (value: unknown) => createHash("sha1").update(JSON.stringify(value)).digest("hex").slice(0, 16);

/**
 * Empreinte de chaque page : « produit/<slug> », « <rubrique> » (rubrique, son guide et ses produits),
 * « conseils/<slug> » (fichier de l'article), « top-10/<slug> » (sélection et ses produits).
 */
export function pageHashes(produits: Produit[], conseils: Record<string, string>, tops: Array<{ slug: string; items: Array<{ slug: string }> }> = [], guides: Record<string, string> = {}): Record<string, string> {
  const out: Record<string, string> = {};
  const publies = produits.filter((p) => p.isPublished);
  const h = new Map(publies.map((p) => [p.slug, hash(p)]));
  for (const p of publies) out[`produit/${p.slug}`] = h.get(p.slug)!;
  for (const r of RUBRIQUES) out[r.slug] = hash([r, guides[r.slug] ?? null, publies.filter((p) => p.rubrique === r.slug).map((p) => h.get(p.slug))]);
  for (const [slug, text] of Object.entries(conseils)) out[`conseils/${slug}`] = hash(text);
  for (const t of tops) out[`top-10/${t.slug}`] = hash([t, t.items.map((i) => h.get(i.slug) ?? null)]);
  return out;
}

/** Fichiers Markdown d'un dossier de content/ (articles, guides des rubriques), texte brut par adresse. */
export function readConseils(dir = join(process.cwd(), "content", "conseils")): Record<string, string> {
  return Object.fromEntries(
    readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => [f.replace(/\.md$/, ""), readFileSync(join(dir, f), "utf8")]),
  );
}

/** Empreintes du contenu actuel. */
export async function currentHashes(): Promise<Record<string, string>> {
  const { TOP10S } = await import("./top10/sujets");
  return pageHashes(PRODUITS, readConseils(), TOP10S, readConseils(join(process.cwd(), "content", "rubriques")));
}

/** Registre des dates (src/lib/lastmod.json). */
export function readLedger(file = join(process.cwd(), "src", "lib", "lastmod.json")): Ledger {
  try {
    return JSON.parse(readFileSync(file, "utf8")) as Ledger;
  } catch {
    return {};
  }
}
