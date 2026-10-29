import { getProduit, toCarte, type ProduitCarte } from "@/lib/data/produits";
import { typo } from "@/lib/format";
import { TOP10S } from "@/lib/top10/sujets";
import type { Top10 } from "@/lib/top10/types";

/** Espaces insécables françaises dans tous les textes d'une sélection. */
function soigner(t: Top10): Top10 {
  return {
    ...t,
    intro: typo(t.intro),
    start: typo(t.start),
    items: t.items.map((i) => ({ ...i, why: typo(i.why) })),
    faq: t.faq.map((f) => ({ q: typo(f.q), a: typo(f.a) })),
  };
}

export function getTop10s(): Top10[] {
  return TOP10S.map(soigner);
}

export function getTop10BySlug(slug: string): Top10 | null {
  return getTop10s().find((t) => t.slug === slug) ?? null;
}

export function getTop10sDeRubrique(rubrique: string): Top10[] {
  return getTop10s().filter((t) => t.rubrique === rubrique);
}

export type Top10Produit = ProduitCarte & { rank: number; why: string };

/** Les 10 produits d'une sélection, complétés depuis leur fiche. */
export function getTop10Produits(top: Top10): Top10Produit[] {
  return top.items.flatMap((item, i) => {
    const p = getProduit(item.slug);
    return p ? [{ ...toCarte(p, "top"), rank: i + 1, why: item.why }] : [];
  });
}
