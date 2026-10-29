/**
 * Règle absolue de contenu (docs/REDACTION.md) : aucun contenu sexuel et aucun produit « pour adultes »,
 * pour rester éligible à Amazon Partenaires et à AdSense. Contrôlé par tests/mots-interdits.test.ts
 * sur tous les textes du site (articles, produits, Top 10, rubriques, lexique).
 *
 * Recherche sans majuscules ni accents, sur des mots entiers (« sexe » ne trouve pas « Essex »).
 * Pour ajouter un mot : une expression par ligne, écrite sans accents.
 */

/** Mots bloquants : le test échoue et le site n'est pas publié. */
export const MOTS_BLOQUANTS = [
  "sexe?s?",
  "sexuel(le)?s?",
  "sexualite",
  "sexy",
  "sex[- ]?toys?",
  "godemiches?",
  "vibromasseurs?",
  "lubrifiants?",
  "preservatifs?",
  "orgasmes?",
  "erotiques?",
  "erotisme",
  "porno(graphiques?|graphie)?s?",
  "nudite",
  "denude(e)?s?",
  "seins? nus?",
  "fesses?",
  "libido",
  "aphrodisiaques?",
  "viagra",
  "fellations?",
  "penetrations?",
  "masturbations?",
  "kama[- ]?sutra",
  "strip[- ]?teases?",
  "bdsm",
  "fetichis(me|tes?)",
  "coquin(e)?s?",
  "pour adultes",
  "x{3}",
];

/** Mots à surveiller : simple avertissement (relire la phrase), le test ne bloque pas. */
export const MOTS_A_SURVEILLER = [
  "intimes?",
  "intimite",
  "nuits? de noces",
  "excitant(e)?s?",
  "torrides?",
  "charnel(le)?s?",
  // Allégations de santé (karité, huiles, perles de taille) : interdites sans preuve.
  "soignen?t?",
  "guerit|guerir|guerison",
  "miracles?",
  "minceur|maigrir",
];

/** Texte en minuscules, sans accents, apostrophes droites. */
export function normaliser(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’‘]/g, "'")
    .toLowerCase();
}

/** Mots de la liste trouvés dans le texte (forme trouvée, sans doublon). */
export function trouverMots(texte: string, liste: readonly string[]): string[] {
  const t = normaliser(texte);
  const trouves = new Set<string>();
  for (const motif of liste) for (const m of t.matchAll(new RegExp(`(?<![a-z0-9])(?:${motif})(?![a-z0-9])`, "g"))) trouves.add(m[0]);
  return [...trouves];
}
