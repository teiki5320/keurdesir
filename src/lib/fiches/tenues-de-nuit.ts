/**
 * Fiches détaillées de la rubrique « Tenues de nuit » (15 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - petit-pagne-wax-brode — Petit pagne en wax brodé
 *   - bethio-coton-ajoure — Bethio en coton ajouré
 *   - petit-pagne-bazin-brode — Petit pagne en bazin brodé
 *   - nuisette-coton-wax — Nuisette en coton wax
 *   - chemise-de-nuit-longue-wax — Chemise de nuit longue en wax
 *   - kimono-interieur-wax — Kimono d'intérieur en wax
 *   - peignoir-wax-double-satin — Peignoir en wax doublé de satin
 *   - pyjama-wax-short-chemise — Pyjama en wax, chemise et short
 *   - pantalon-detente-wax — Pantalon de détente en wax
 *   - boubou-interieur-coton-brode — Boubou d'intérieur en coton brodé
 *   - caftan-interieur-bazin — Caftan d'intérieur en bazin
 *   - chemise-de-nuit-coton-brode — Chemise de nuit en voile de coton brodé
 *   - chemise-de-nuit-coton-dentelle — Chemise de nuit en coton et dentelle
 *   - bonnet-satin-wax — Bonnet de nuit en wax doublé de satin
 *   - pareo-wax — Paréo en wax
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "petit-pagne-wax-brode",
  "bethio-coton-ajoure",
  "petit-pagne-bazin-brode",
  "nuisette-coton-wax",
  "chemise-de-nuit-longue-wax",
  "kimono-interieur-wax",
  "peignoir-wax-double-satin",
  "pyjama-wax-short-chemise",
  "pantalon-detente-wax",
  "boubou-interieur-coton-brode",
  "caftan-interieur-bazin",
  "chemise-de-nuit-coton-brode",
  "chemise-de-nuit-coton-dentelle",
  "bonnet-satin-wax",
  "pareo-wax",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {};
