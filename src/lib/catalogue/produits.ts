import type { Produit } from "../types";

/**
 * Produits du site. Règles (docs/REDACTION.md) : textes écrits par nous ; jamais de prix, de note ni d'avis ;
 * `amazon` et `etsy` restent à null tant que la page marchande n'a pas été ouverte et vérifiée.
 * Aucun produit « pour adultes » : seules les 7 rubriques du site (src/lib/rubriques.ts).
 */
export const PRODUITS: Produit[] = [];
