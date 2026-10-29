import type { Produit } from "../types";
import { bineBine } from "./bine-bine";
import { coffretsCadeaux } from "./coffrets-cadeaux";
import { encensoirs } from "./encensoirs";
import { kariteSoins } from "./karite-soins";
import { tenuesDeNuit } from "./tenues-de-nuit";
import { thiourayeEncens } from "./thiouraye-encens";

/**
 * Produits du site, un fichier par rubrique. Règles (docs/REDACTION.md) : textes écrits par nous ; jamais de prix,
 * de note ni d'avis ; `amazon` et `etsy` restent à null tant que la page marchande n'a pas été ouverte et vérifiée.
 * Aucun produit « pour adultes » : seules les 7 rubriques du site (src/lib/rubriques.ts).
 */
export const PRODUITS: Produit[] = [...bineBine, ...thiourayeEncens, ...encensoirs, ...kariteSoins, ...tenuesDeNuit, ...coffretsCadeaux];
