import type { RubriqueSlug } from "./rubriques";

/** Boutiques partenaires vers lesquelles un produit peut renvoyer. */
export type Boutique = "amazon" | "etsy";

/**
 * Produit présenté sur le site (fiche /produit/<slug>). Textes écrits par nous ; jamais de prix, de note ni d'avis.
 * ASIN et annonce Etsy ne sont remplis qu'après ouverture de la page marchande (sinon null : lien de recherche).
 */
export interface Produit {
  slug: string;
  nom: string;
  rubrique: RubriqueSlug;
  /** Nature du produit, au singulier (« bine-bine », « encensoir », « beurre de karité »). */
  type: string;
  matieres: string[];
  couleurs: string[];
  /** Présentation : 3 à 5 phrases. */
  resume: string;
  /** « Pourquoi on l'aime » : 2 ou 3 phrases courtes. */
  pourquoi: string[];
  /** « Comment l'utiliser » ou « Comment le porter » : 2 à 4 phrases. */
  usage: string;
  /** Boutiques où le chercher, dans l'ordre d'affichage des boutons. */
  boutiques: Boutique[];
  /** Fiche Amazon.fr vérifiée à la main (AAAA-MM-JJ), sinon null. */
  amazon: { asin: string; verifie_le: string } | null;
  /** Annonce Etsy vérifiée à la main, sinon null. */
  etsy: { url: string; boutique: string; verifie_le: string } | null;
  /** Mots de la recherche de repli sur Amazon ou Etsy (« bine bine perles de taille »). */
  recherche: string;
  /** Visuel d'ambiance Keur Désir : /produits/<slug>.webp, ou null. */
  image: string | null;
  ajoute_le: string;
  isPublished: boolean;
}

/** Question fréquente d'une fiche détaillée (affichée, et donnée FAQPage pour Google). */
export interface FicheQuestion {
  question: string;
  reponse: string;
}

/**
 * Fiche détaillée d'un produit (section « En détail » de /produit/<slug>, règles docs/FICHES.md).
 * Textes simples, paragraphes séparés par une ligne vide, liens internes « [texte](/chemin) » seulement.
 * Texte propre de la page entière (présentation, raisons, usage et fiche détaillée) : 500 à 700 mots.
 */
export interface FicheLongue {
  /** Origine et tradition : ce qu'est l'objet ou le produit, d'où il vient, quelle place il a dans la culture. */
  origine: string;
  /** Comment bien le choisir, en le comparant aux produits voisins de la boutique (liens /produit/…). */
  choisir: string;
  /** Entretien (objets, tissus) ou conservation (soins, encens). */
  entretien: string;
  /** Pour qui, pour quelle occasion : à offrir, à garder, à quel moment. */
  pourQui: string;
  /** 2 ou 3 questions fréquentes qui finissent par « ? ». */
  faq: FicheQuestion[];
}
