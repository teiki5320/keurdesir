/** Crédit d'une photo libre de droits (Wikimedia Commons) : affiché sous l'image de l'article, comme l'exigent CC BY et CC BY-SA. */
export interface CreditImage {
  auteur: string;
  /** Nom court de la licence (« CC BY-SA 4.0 », « CC0 »). */
  licence: string;
  licenceUrl: string;
  /** Page d'origine de la photo, sur Wikimedia Commons. */
  source: string;
}

const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/deed.fr";
const BY = "https://creativecommons.org/licenses/by/4.0/deed.fr";
const BY_SA = "https://creativecommons.org/licenses/by-sa/4.0/deed.fr";
const commons = (fichier: string) => `https://commons.wikimedia.org/wiki/File:${fichier}`;

/**
 * Photos libres de droits, par slug d'article (public/conseils/<slug>.webp, recadrées en 1200 × 800).
 * Un article absent de cette liste porte une illustration Keur Désir créée par IA.
 * Règles : jamais d'image payante ni générée par IA pour les nouveaux articles ; auteur, licence et page d'origine relevés sur la page source.
 */
export const CREDITS_IMAGES: Record<string, CreditImage> = {
  "thiouraye-gowe-ou-bakhour-lequel-choisir": {
    auteur: "Mashoodmj",
    licence: "CC BY 4.0",
    licenceUrl: BY,
    source: commons("Ararrabi_(West_African_Frankincense_powder).jpg"),
  },
  "comment-choisir-un-beurre-de-karite-non-raffine": {
    auteur: "Achiri Bitamsimli",
    licence: "CC BY-SA 4.0",
    licenceUrl: BY_SA,
    source: commons("Shea_butter_4.jpg"),
  },
  "comment-choisir-et-entretenir-ses-bine-bine": {
    auteur: "Warmglow",
    licence: "CC BY-SA 4.0",
    licenceUrl: BY_SA,
    source: commons("Ghanaian_K%C9%94fi_beads_or_Koffi_beads.jpg"),
  },
  "quel-encensoir-choisir-pour-bruler-son-encens": {
    auteur: "Neek-Theri",
    licence: "CC BY-SA 4.0",
    licenceUrl: BY_SA,
    source: commons("Censer,_Incense_burner.jpg"),
  },
  "black-friday-que-viser-cote-djongue-et-encens": {
    auteur: "ਮਨਜੀਤ ਸਿੰਘ",
    licence: "CC BY-SA 4.0",
    licenceUrl: BY_SA,
    source: commons("Smoke_from_Incense_Sticks_2.jpg"),
  },
  "wax-bazin-ou-coton-brode-quelle-tenue-de-nuit": {
    auteur: "Warmglow",
    licence: "CC0",
    licenceUrl: CC0,
    source: commons("Different_Kente_cloth,_Tafi,_Volta_region.jpg"),
  },
  "quels-cadeaux-de-noel-offrir-autour-du-djongue": {
    auteur: "TracyWeru",
    licence: "CC BY-SA 4.0",
    licenceUrl: BY_SA,
    source: commons("A_Symphony_of_Tradition_The_Ankara-Adorned_Gift_box.jpg"),
  },
  "quelle-huile-vegetale-choisir-pour-le-corps-en-hiver": {
    auteur: "saponifier",
    licence: "CC0",
    licenceUrl: CC0,
    source: commons("Baobab-oil-1020957_1280.jpg"),
  },
  "comment-creer-une-ambiance-chaleureuse-pour-l-hiver": {
    auteur: "PattayaPatrol",
    licence: "CC BY-SA 4.0",
    licenceUrl: BY_SA,
    source: commons(
      "DFC_6183_A_single_tealight_glows_warmly_inside_a_glass_holder_surrounded_by_scattered_pink_and_purple_bougainvillea_petals.jpg",
    ),
  },
};
