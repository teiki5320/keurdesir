import { PRODUITS } from "@/lib/catalogue/produits";
import { liensMarchands, type Emplacement, type LienMarchand } from "@/lib/liens";
import type { Produit } from "@/lib/types";

/** Produits publiés, dans l'ordre du catalogue. */
export function getProduits(): Produit[] {
  return PRODUITS.filter((p) => p.isPublished);
}

export function getProduit(slug: string): Produit | null {
  return getProduits().find((p) => p.slug === slug) ?? null;
}

export function getProduitsDeRubrique(rubrique: string): Produit[] {
  return getProduits().filter((p) => p.rubrique === rubrique);
}

/** Données d'une carte produit (listes, Top 10, articles, liste d'envies). */
export interface ProduitCarte {
  slug: string;
  nom: string;
  type: string;
  rubrique: string;
  path: string;
  image: string | null;
  accroche: string;
  liens: LienMarchand[];
}

export function toCarte(p: Produit, emplacement: Emplacement): ProduitCarte {
  return {
    slug: p.slug,
    nom: p.nom,
    type: p.type,
    rubrique: p.rubrique,
    path: `/produit/${p.slug}`,
    image: p.image,
    accroche: p.pourquoi[0] ?? "",
    liens: liensMarchands(p, emplacement),
  };
}
