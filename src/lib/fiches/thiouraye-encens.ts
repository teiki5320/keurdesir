/**
 * Fiches détaillées de la rubrique « Thiouraye, bakhour et encens » (20 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - thiouraye-artisanal-sachet — Thiouraye artisanal en sachet
 *   - thiouraye-en-bocal — Thiouraye en bocal de verre
 *   - thiouraye-au-musc — Thiouraye aux notes de musc
 *   - thiouraye-au-oud — Thiouraye au oud
 *   - thiouraye-au-santal — Thiouraye au bois de santal
 *   - gowe-en-grains — Gowé en grains
 *   - thiouraye-assortiment-sachets — Assortiment de thiouraye en petits sachets
 *   - thiouraye-coffret-avec-encensoir — Kit découverte thiouraye et encensoir
 *   - bakhour-oud-copeaux — Bakhour au oud en copeaux
 *   - bakhour-pastilles-moulees — Bakhour en pastilles moulées
 *   - bakhour-boite-decoree — Bakhour en boîte décorée
 *   - bakhour-ambre — Bakhour à l'ambre
 *   - bakhour-rose — Bakhour à la rose
 *   - copeaux-bois-oud-naturel — Copeaux de bois de oud naturel
 *   - copeaux-bois-de-santal — Copeaux de bois de santal
 *   - oliban-en-grains — Oliban en grains
 *   - benjoin-en-morceaux — Benjoin en morceaux
 *   - pastilles-charbon-encens — Pastilles de charbon pour encens
 *   - charbon-noix-de-coco — Charbon naturel de noix de coco
 *   - batonnets-encens-oud — Bâtonnets d'encens au oud
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "thiouraye-artisanal-sachet",
  "thiouraye-en-bocal",
  "thiouraye-au-musc",
  "thiouraye-au-oud",
  "thiouraye-au-santal",
  "gowe-en-grains",
  "thiouraye-assortiment-sachets",
  "thiouraye-coffret-avec-encensoir",
  "bakhour-oud-copeaux",
  "bakhour-pastilles-moulees",
  "bakhour-boite-decoree",
  "bakhour-ambre",
  "bakhour-rose",
  "copeaux-bois-oud-naturel",
  "copeaux-bois-de-santal",
  "oliban-en-grains",
  "benjoin-en-morceaux",
  "pastilles-charbon-encens",
  "charbon-noix-de-coco",
  "batonnets-encens-oud",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {};
