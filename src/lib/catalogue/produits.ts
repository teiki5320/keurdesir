import type { Produit } from "../types";
import asins from "./asins.json";
import { bineBine } from "./bine-bine";
import { coffretsCadeaux } from "./coffrets-cadeaux";
import { encensoirs } from "./encensoirs";
import { kariteSoins } from "./karite-soins";
import { tenuesDeNuit } from "./tenues-de-nuit";
import { thiourayeEncens } from "./thiouraye-encens";

/**
 * Fiches Amazon.fr relevées pour chaque produit (src/lib/catalogue/asins.json, modèle Keur Kado) :
 * { slug: { asin, verifie_le, titre } }. Un ASIN n'y entre qu'après lecture de la page Amazon (recherche ou fiche),
 * jamais deviné ; `npm run verifier-produits` contrôle ensuite le bouton d'achat. Sans ASIN : recherche Amazon.
 */
const ASINS = asins as Record<string, { asin: string; verifie_le: string; titre: string }>;

/**
 * Produits du site, un fichier par rubrique. Règles (docs/REDACTION.md) : textes écrits par nous ; jamais de prix,
 * de note ni d'avis. Aucun produit « pour adultes » : seules les 7 rubriques du site (src/lib/rubriques.ts).
 */
export const PRODUITS: Produit[] = [...bineBine, ...thiourayeEncens, ...encensoirs, ...kariteSoins, ...tenuesDeNuit, ...coffretsCadeaux].map((p) => {
  const a = ASINS[p.slug];
  return a && !p.amazon ? { ...p, amazon: { asin: a.asin, verifie_le: a.verifie_le } } : p;
});
