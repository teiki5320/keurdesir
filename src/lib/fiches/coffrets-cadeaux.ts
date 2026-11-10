/**
 * Fiches détaillées de la rubrique « Coffrets, cadeaux et objets wax » (20 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - coffret-thiouraye-encensoir — Coffret thiouraye et encensoir
 *   - coffret-thiouraye-bine-bine — Coffret thiouraye et bine-bine
 *   - coffret-soins-karite — Coffret de soins au karité
 *   - ecrin-bine-bine — Écrin de bine-bine
 *   - bougie-parfumee-oud-ambre — Bougie parfumée oud et ambre
 *   - coffret-bougies-parfumees — Coffret de bougies parfumées boisées
 *   - trousse-toilette-wax — Trousse de toilette en wax
 *   - panier-senegalais-tresse — Panier sénégalais tressé
 *   - pagne-wax-6-yards — Pagne de wax de 6 yards
 *   - coupon-bazin-riche — Coupon de bazin riche
 *   - foulard-tete-wax — Foulard de tête en wax
 *   - sac-cabas-wax — Sac cabas en wax
 *   - coffret-huiles-vegetales — Coffret d'huiles végétales pour le corps
 *   - coffret-savon-noir-karite — Coffret savon noir africain et karité
 *   - calebasse-decorative-gravee — Calebasse décorative gravée
 *   - housse-coussin-wax — Housse de coussin en wax
 *   - carnet-couverture-wax — Carnet à couverture en wax
 *   - bracelet-perles-krobo — Bracelet en perles krobo
 *   - eventail-wax — Éventail en wax
 *   - coffret-bakhour-brule-parfum — Coffret bakhour et brûle-parfum
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "coffret-thiouraye-encensoir",
  "coffret-thiouraye-bine-bine",
  "coffret-soins-karite",
  "ecrin-bine-bine",
  "bougie-parfumee-oud-ambre",
  "coffret-bougies-parfumees",
  "trousse-toilette-wax",
  "panier-senegalais-tresse",
  "pagne-wax-6-yards",
  "coupon-bazin-riche",
  "foulard-tete-wax",
  "sac-cabas-wax",
  "coffret-huiles-vegetales",
  "coffret-savon-noir-karite",
  "calebasse-decorative-gravee",
  "housse-coussin-wax",
  "carnet-couverture-wax",
  "bracelet-perles-krobo",
  "eventail-wax",
  "coffret-bakhour-brule-parfum",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {};
