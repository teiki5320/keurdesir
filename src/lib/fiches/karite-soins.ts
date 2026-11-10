/**
 * Fiches détaillées de la rubrique « Karité, huiles et soins » (20 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - beurre-karite-brut-burkina — Beurre de karité brut non raffiné du Burkina Faso
 *   - beurre-karite-brut-ghana — Beurre de karité brut du Ghana
 *   - beurre-karite-bio-non-raffine — Beurre de karité bio non raffiné
 *   - beurre-karite-jaune — Beurre de karité jaune non raffiné
 *   - beurre-karite-cooperative-femmes — Beurre de karité artisanal de coopérative de femmes
 *   - beurre-karite-brut-mali — Beurre de karité brut du Mali
 *   - beurre-karite-brut-grand-format — Beurre de karité brut en grand format (1 kg)
 *   - beurre-karite-fouette-nature — Beurre de karité fouetté sans parfum
 *   - beurre-karite-fouette-parfume — Beurre de karité fouetté parfumé
 *   - baume-karite-coco — Baume corps karité et coco
 *   - huile-baobab-vierge — Huile de baobab vierge
 *   - huile-ricin-noire — Huile de ricin noire
 *   - huile-ricin-vierge — Huile de ricin vierge pressée à froid
 *   - huile-moringa-vierge — Huile de moringa vierge
 *   - huile-coco-vierge — Huile de coco vierge
 *   - huile-coco-fractionnee — Huile de coco fractionnée
 *   - huile-karite — Huile de karité
 *   - huile-nigelle-vierge — Huile de nigelle vierge
 *   - huile-avocat-vierge — Huile d'avocat vierge
 *   - huile-sesame-vierge — Huile de sésame vierge pour le corps
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "beurre-karite-brut-burkina",
  "beurre-karite-brut-ghana",
  "beurre-karite-bio-non-raffine",
  "beurre-karite-jaune",
  "beurre-karite-cooperative-femmes",
  "beurre-karite-brut-mali",
  "beurre-karite-brut-grand-format",
  "beurre-karite-fouette-nature",
  "beurre-karite-fouette-parfume",
  "baume-karite-coco",
  "huile-baobab-vierge",
  "huile-ricin-noire",
  "huile-ricin-vierge",
  "huile-moringa-vierge",
  "huile-coco-vierge",
  "huile-coco-fractionnee",
  "huile-karite",
  "huile-nigelle-vierge",
  "huile-avocat-vierge",
  "huile-sesame-vierge",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {};
