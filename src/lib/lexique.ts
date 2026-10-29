import type { RubriqueSlug } from "./rubriques";

/** Petit lexique du djongué (/lexique) : définitions courtes, écrites par nous, vérifiées avant publication. */
export interface MotLexique {
  mot: string;
  /** Autres graphies courantes. */
  variantes?: string[];
  definition: string;
  rubrique: RubriqueSlug;
}

export const LEXIQUE: MotLexique[] = [];
