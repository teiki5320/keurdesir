/** Outils communs aux tests de contenu. */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { isPublished, parseConseil, todayInParis, type Conseil } from "../src/lib/conseils/article";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { RUBRIQUES } from "../src/lib/rubriques";
import { TOP10S } from "../src/lib/top10/sujets";

export const racine = join(import.meta.dirname, "..");

/** Tous les articles de content/conseils (publiés ou programmés). */
export function tousLesConseils(): Conseil[] {
  const dir = join(racine, "content", "conseils");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseConseil(f.replace(/\.md$/, ""), readFileSync(join(dir, f), "utf8")));
}

/** Nombre de phrases d'un texte (fin de phrase : . ! ? ou …). */
export const phrases = (t: string) => t.split(/(?<=[.!?…])\s+/).filter((s) => s.trim().length > 0).length;

export const DATE = /^\d{4}-\d{2}-\d{2}$/;
export const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Prix, notes ou avis : interdits dans les textes (seules les boutiques font foi). */
export const PRIX_OU_NOTE = /(\d\s?(€|euros?)\b|\bprix\s*:|\d([.,]\d)?\s?\/\s?(5|10)\b|\b\d\s?étoiles?\b|\bavis (clients?|vérifiés?)\b)/i;

/** Adresses internes valides à une date donnée (un article ne lie pas un article futur). */
export function pagesInternes(jour = todayInParis()): Set<string> {
  const publies = PRODUITS.filter((p) => p.isPublished);
  return new Set([
    "/",
    ...RUBRIQUES.map((r) => `/${r.slug}`),
    "/conseils",
    ...tousLesConseils().filter((c) => isPublished(c, jour)).map((c) => `/conseils/${c.slug}`),
    "/top-10",
    ...TOP10S.map((t) => `/top-10/${t.slug}`),
    ...publies.map((p) => `/produit/${p.slug}`),
    "/lexique",
    "/a-propos",
    "/mes-envies",
    "/mentions-legales",
    "/confidentialite",
    "/conditions",
  ]);
}

/** Liens internes « [texte](/chemin) » d'un texte. */
export const liensInternes = (t: string) => [...t.matchAll(/\]\((\/[^)\s#?]*)[^)]*\)/g)].map((m) => m[1]);
