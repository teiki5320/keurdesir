import type { RubriqueSlug } from "./rubriques";

/** Petit lexique du djongué (/lexique) : définitions courtes, écrites par nous, vérifiées avant publication. */
export interface MotLexique {
  mot: string;
  /** Autres graphies courantes. */
  variantes?: string[];
  definition: string;
  rubrique: RubriqueSlug;
}

export const LEXIQUE: MotLexique[] = [
  {
    mot: "Djongué",
    variantes: ["jongué", "diongué", "djongé"],
    definition:
      "Au Sénégal, l'art de plaire et de séduire, surtout dans la vie de couple : savoir accueillir, parler avec douceur et créer une ambiance chaleureuse chez soi. Il passe par l'encens, les perles et les petits pagnes, mais d'abord par une manière d'être.",
    rubrique: "djongue",
  },
  {
    mot: "Badiène",
    variantes: ["bàjjan", "bajjan"],
    definition:
      "La tante paternelle, sœur du père. Figure respectée et proche, elle conseille et bénit sa nièce aux grands moments de la vie, notamment lors des cérémonies qui précèdent le départ de la mariée vers son nouveau foyer.",
    rubrique: "djongue",
  },
  {
    mot: "Teranga",
    variantes: ["teraanga"],
    definition:
      "L'hospitalité sénégalaise, souvent présentée comme une valeur nationale. Dans le djongué, elle se traduit par le soin apporté à l'accueil : une maison parfumée, un plateau préparé avec attention, une hôtesse disponible.",
    rubrique: "djongue",
  },
  {
    mot: "Sutura",
    definition:
      "La discrétion et la pudeur, valeur importante de la culture wolof. Elle explique pourquoi tant de gestes du djongué restent cachés : les perles se portent sous les vêtements et les recettes d'encens se gardent pour soi.",
    rubrique: "djongue",
  },
  {
    mot: "Céet",
    definition:
      "Dans le mariage wolof, l'arrivée de la mariée dans son nouveau foyer, accompagnée de ses amies et de membres de sa famille. C'est un moment de fête, qui suit le mariage religieux et la veillée du départ.",
    rubrique: "djongue",
  },
  {
    mot: "Xaxar",
    definition:
      "Chants des femmes qui accueillent la nouvelle mariée dans la cour de sa belle-famille. Faits de taquineries et de moqueries feintes, auxquelles répondent les amies de la mariée, ils se terminent par son intégration parmi les femmes de la maison.",
    rubrique: "djongue",
  },
  {
    mot: "Yebbi",
    definition:
      "Ensemble de cadeaux offerts par la mariée et sa famille à la belle-famille lors des cérémonies. Considéré comme une contrepartie de la dot, il symbolise la réciprocité entre les deux familles ; sa surenchère fait aujourd'hui débat.",
    rubrique: "coffrets-cadeaux",
  },
  {
    mot: "Bine-bine",
    variantes: ["bin-bin", "binbin"],
    definition:
      "Rangs de perles fines portés autour de la taille, sous les vêtements. Parure traditionnelle des femmes sénégalaises, offerte dès l'enfance, elle symbolise la féminité et la discrétion ; son léger tintement fait partie de l'art du djongué.",
    rubrique: "bine-bine",
  },
  {
    mot: "Baya",
    definition:
      "Autre nom des perles de taille, très employé en France et que l'on rattache souvent aux pays mandingues, comme le Mali ou la Guinée. Il désigne la même famille de bijoux que les bine-bine.",
    rubrique: "bine-bine",
  },
  {
    mot: "Dial-diali",
    variantes: ["dial-dialy", "djal-djali"],
    definition:
      "Grosses perles, souvent en bois, portées sur les hanches et traditionnellement associées aux femmes plus mûres. Leur nom imite le petit bruit qu'elles font à chaque pas ; on les parfume volontiers à l'encens.",
    rubrique: "bine-bine",
  },
  {
    mot: "Béthio",
    variantes: ["bethio", "petit pagne"],
    definition:
      "Petit pagne souvent tricoté, ajouré ou brodé à la main, en coton ou en soie. Autrefois porté par les grands-mères comme dessous, il est devenu une pièce d'élégance de la maison, traditionnellement offerte à la jeune mariée.",
    rubrique: "tenues-de-nuit",
  },
  {
    mot: "Wax",
    definition:
      "Tissu de coton imprimé à la cire, né au XIXe siècle aux Pays-Bas pour imiter le batik de Java. Adopté en Afrique de l'Ouest au point d'en devenir un emblème, il habille aussi les petits pagnes et les tenues de nuit.",
    rubrique: "tenues-de-nuit",
  },
  {
    mot: "Thiouraye",
    variantes: ["thiouray"],
    definition:
      "L'encens traditionnel sénégalais. Chaque femme a ses mélanges, à base de plantes odorantes comme le gowé, de résines ou de gomme arabique, parfois enrichis de parfums. Il parfume la maison et les vêtements, et signe l'accueil.",
    rubrique: "thiouraye-encens",
  },
  {
    mot: "Gowé",
    variantes: ["goowé"],
    definition:
      "Encens tiré d'une plante odorante, le souchet (Cyperus rotundus), vendu en petites boules sombres. Brûlé seul ou mêlé à d'autres ingrédients, il entre dans de nombreux mélanges de thiouraye.",
    rubrique: "thiouraye-encens",
  },
  {
    mot: "Némali",
    variantes: ["nemali"],
    definition:
      "Encens parfumé très apprécié au Sénégal, que l'on saupoudre sur les braises de l'encensoir. Il sert aussi à parfumer les perles de taille.",
    rubrique: "thiouraye-encens",
  },
  {
    mot: "Bakhour",
    variantes: ["bakhoor", "bkhour"],
    definition:
      "Encens d'origine arabe, fait le plus souvent de copeaux de bois imprégnés d'huiles parfumées, que l'on chauffe sur un charbon ou dans un brûle-parfum électrique. Il parfume la maison et les tissus.",
    rubrique: "thiouraye-encens",
  },
  {
    mot: "Ande thiouraye",
    variantes: ["ande"],
    definition:
      "Nom wolof de l'encensoir traditionnel, en terre cuite ou en métal, où l'on pose l'encens sur les braises. Il s'installe souvent dans un coin de la maison ; on l'utilise toujours dans une pièce aérée.",
    rubrique: "encensoirs",
  },
  {
    mot: "Karité",
    definition:
      "Beurre tiré des noix d'un arbre de la savane ouest-africaine (Vitellaria paradoxa). Sa fabrication reste en grande partie un savoir-faire de femmes ; on l'utilise comme soin de beauté pour le corps et les cheveux.",
    rubrique: "karite-soins",
  },
];
