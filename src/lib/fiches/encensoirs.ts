/**
 * Fiches détaillées de la rubrique « Encensoirs et brûle-parfums » (12 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - encensoir-terre-cuite-ande — Encensoir en terre cuite façon andé
 *   - encensoir-terre-cuite-peint — Encensoir en terre cuite peint à la main
 *   - mabkhara-bois-metal — Mabkhara en bois et métal
 *   - encensoir-laiton-cisele — Encensoir en laiton ciselé à couvercle
 *   - encensoir-ceramique-couvercle — Encensoir en céramique à couvercle ajouré
 *   - brule-parfum-electrique-bakhour — Brûle-parfum électrique pour bakhour
 *   - brule-encens-electrique-rechargeable — Brûle-encens électrique rechargeable
 *   - brule-encens-pierre-a-savon — Brûle-encens en pierre à savon sculptée
 *   - encensoir-chaines-laiton — Encensoir à chaînes en laiton
 *   - pince-charbon-encens — Pince à charbon pour encensoir
 *   - sable-pour-encensoir — Sable pour encensoir
 *   - encensoir-coffret-bakhour — Coffret encensoir et bakhour
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "encensoir-terre-cuite-ande",
  "encensoir-terre-cuite-peint",
  "mabkhara-bois-metal",
  "encensoir-laiton-cisele",
  "encensoir-ceramique-couvercle",
  "brule-parfum-electrique-bakhour",
  "brule-encens-electrique-rechargeable",
  "brule-encens-pierre-a-savon",
  "encensoir-chaines-laiton",
  "pince-charbon-encens",
  "sable-pour-encensoir",
  "encensoir-coffret-bakhour",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {};
