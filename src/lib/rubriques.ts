/**
 * Les 7 rubriques du site, chacune avec sa page (/<slug>), ses produits, ses Top 10 et ses articles.
 * Seuls ces univers sont autorisés : aucun produit « pour adultes » (voir docs/REDACTION.md).
 */
export const RUBRIQUES = [
  {
    slug: "djongue",
    nom: "Le djongué",
    court: "Djongué",
    description:
      "Le djongué, art sénégalais de la séduction : son histoire, ses traditions, sa transmission entre femmes et l'art de créer une ambiance chez soi.",
    chapo:
      "Au Sénégal, le djongué désigne l'art de plaire et de prendre soin de soi, que les femmes se transmettent de génération en génération. Parfums, parures, tenues et attentions : c'est une culture de l'élégance et du charme, que nous racontons ici avec fierté.",
  },
  {
    slug: "bine-bine",
    nom: "Bine-bine et baya",
    court: "Bine-bine",
    description:
      "Bine-bine et baya, les perles de taille d'Afrique de l'Ouest : styles, couleurs, matières et conseils pour bien les choisir et les porter.",
    chapo:
      "Rangs de perles portés autour de la taille, sous les vêtements, les bine-bine sont l'une des parures les plus anciennes d'Afrique de l'Ouest. Couleurs, matières, longueur : voici de quoi choisir les vôtres, ou les offrir.",
  },
  {
    slug: "thiouraye-encens",
    nom: "Thiouraye et encens",
    court: "Encens",
    description:
      "Thiouraye, gowé et bakhour : choisir son encens, le faire brûler correctement et composer une ambiance parfumée à la maison.",
    chapo:
      "Le thiouraye parfume les maisons et les vêtements, et signe l'accueil d'une maîtresse de maison. Avec le bakhour et les autres encens, il compose une ambiance : voici comment les choisir et les utiliser.",
  },
  {
    slug: "encensoirs",
    nom: "Encensoirs et brûle-parfums",
    court: "Encensoirs",
    description:
      "Encensoirs en terre cuite, en métal ou en céramique, brûle-parfums électriques et charbons : bien choisir son matériel pour brûler l'encens.",
    chapo:
      "Un bon encensoir fait toute la différence : il diffuse le parfum sans le brûler trop vite et décore la pièce. Terre cuite, métal ciselé ou modèle électrique, voici nos repères pour bien choisir.",
  },
  {
    slug: "karite-soins",
    nom: "Karité, huiles et soins",
    court: "Soins",
    description:
      "Beurre de karité, huiles végétales et rituels de soin du corps venus d'Afrique de l'Ouest : comment les choisir et les utiliser au quotidien.",
    chapo:
      "Le beurre de karité et les huiles végétales sont au cœur des rituels de beauté d'Afrique de l'Ouest. Bruts ou raffinés, parfumés ou non : nos conseils pour choisir des soins de qualité.",
  },
  {
    slug: "tenues-de-nuit",
    nom: "Petits pagnes et tenues de nuit",
    court: "Tenues",
    description:
      "Petits pagnes, nuisettes et tenues de nuit en wax ou brodées : une sélection élégante de pièces artisanales, souvent faites à la main.",
    chapo:
      "Le petit pagne et les tenues de nuit font partie de l'élégance à la maison. Wax, coton brodé, dentelle : une sélection de pièces artisanales choisies pour leur beauté et leur confort.",
  },
  {
    slug: "coffrets-cadeaux",
    nom: "Coffrets et idées cadeaux",
    court: "Cadeaux",
    description:
      "Idées cadeaux et coffrets autour du djongué pour un mariage, la Saint-Valentin, la Tabaski ou un anniversaire : encens, perles et soins.",
    chapo:
      "Un encensoir et son thiouraye, des bine-bine, un pot de karité : les cadeaux du djongué se transmettent et s'offrent. Nos idées pour un mariage, une fête ou un anniversaire.",
  },
] as const;

export type Rubrique = (typeof RUBRIQUES)[number];
export type RubriqueSlug = Rubrique["slug"];

export const isRubrique = (v: string): v is RubriqueSlug => RUBRIQUES.some((r) => r.slug === v);
export const getRubrique = (slug: string): Rubrique | undefined => RUBRIQUES.find((r) => r.slug === slug);
