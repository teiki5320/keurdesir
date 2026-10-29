import type { Produit } from "./types";

/** Programme Partenaires Amazon : identifiant de suivi de Keur Désir, ajouté à tous les liens vers Amazon.fr. */
export const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "keurdesir-21";

/**
 * Emplacements des boutons marchands :
 * - fiche : fiche produit ;
 * - top : pages Top 10 ;
 * - conseil : articles ;
 * - rubrique : pages rubriques et liste d'envies.
 */
export type Emplacement = "fiche" | "top" | "conseil" | "rubrique";

/**
 * Table unique des codes de suivi Amazon, un par emplacement : c'est le seul endroit à modifier quand
 * des codes propres à chaque emplacement auront été créés dans Amazon Partenaires.
 */
export const AMAZON_TAGS: Record<Emplacement, string> = {
  fiche: AMAZON_TAG,
  top: AMAZON_TAG,
  conseil: AMAZON_TAG,
  rubrique: AMAZON_TAG,
};

/** Etsy via Awin : identifiant d'éditeur Awin et identifiant du programme Etsy FR. Vides = aucun bouton Etsy. */
export const AWIN_AFFID = process.env.NEXT_PUBLIC_AWIN_AFFID || "";
export const AWIN_ETSY_MID = process.env.NEXT_PUBLIC_AWIN_ETSY_MID || "";

/** Lien Amazon : la fiche si l'ASIN est vérifié, sinon une recherche Amazon.fr. */
export function amazonUrl(p: Pick<Produit, "amazon" | "recherche">, emplacement: Emplacement): string {
  const tag = AMAZON_TAGS[emplacement];
  if (p.amazon) return `https://www.amazon.fr/dp/${encodeURIComponent(p.amazon.asin)}?tag=${tag}`;
  return `https://www.amazon.fr/s?k=${encodeURIComponent(p.recherche)}&tag=${tag}`;
}

/** Lien Etsy par Awin : l'annonce si elle est vérifiée, sinon une recherche Etsy. null tant qu'Awin n'est pas réglé. */
export function etsyUrl(p: Pick<Produit, "etsy" | "recherche">): string | null {
  if (!AWIN_AFFID || !AWIN_ETSY_MID) return null;
  const cible = p.etsy?.url ?? `https://www.etsy.com/fr/search?q=${encodeURIComponent(p.recherche)}`;
  return `https://www.awin1.com/cread.php?awinmid=${AWIN_ETSY_MID}&awinaffid=${AWIN_AFFID}&ued=${encodeURIComponent(cible)}`;
}

export interface LienMarchand {
  boutique: "amazon" | "etsy";
  href: string;
  libelle: string;
}

/** Boutons d'un produit, dans l'ordre de sa liste « boutiques » (Etsy absent tant qu'Awin n'est pas réglé). */
export function liensMarchands(p: Pick<Produit, "boutiques" | "amazon" | "etsy" | "recherche">, emplacement: Emplacement): LienMarchand[] {
  return p.boutiques.flatMap((b): LienMarchand[] => {
    if (b === "amazon") return [{ boutique: b, href: amazonUrl(p, emplacement), libelle: "Voir sur Amazon" }];
    const href = etsyUrl(p);
    return href ? [{ boutique: b, href, libelle: "Voir sur Etsy" }] : [];
  });
}

/** Mention obligatoire du programme Partenaires Amazon. */
export const AMAZON_DISCLOSURE =
  "En tant que Partenaire Amazon, Keur Désir réalise un bénéfice sur les achats remplissant les conditions requises.";

/** Mention des liens affiliés Etsy (programme Etsy sur Awin). */
export const ETSY_DISCLOSURE =
  "Certains liens vers Etsy sont des liens affiliés (programme Etsy sur Awin) : Keur Désir peut percevoir une commission sur les achats, sans surcoût pour vous.";
