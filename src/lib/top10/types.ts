import type { RubriqueSlug } from "../rubriques";

/** Une sélection « Top 10 » : une page /top-10/<slug>. */
export interface Top10 {
  slug: string;
  /** Nom court de l'onglet et de la pastille. */
  tab: string;
  rubrique: RubriqueSlug;
  /** « Top 10 des … ». */
  title: string;
  /** Description pour Google (70 à 160 caractères). */
  description: string;
  /** 2 ou 3 phrases : le critère de la sélection et le n° 1. */
  intro: string;
  /** Exactement 10 produits du site, du n° 1 au n° 10, avec 3 ou 4 phrases chacun. */
  items: Array<{ slug: string; why: string }>;
  /** « Par où commencer » (liens internes « [texte](/chemin) » permis). */
  start: string;
  /** 3 questions fréquentes. */
  faq: Array<{ q: string; a: string }>;
  /** Jour de la dernière mise à jour (AAAA-MM-JJ). */
  updated: string;
}
