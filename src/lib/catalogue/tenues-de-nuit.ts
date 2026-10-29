import type { Produit } from "../types";

const base = {
  rubrique: "tenues-de-nuit",
  amazon: null,
  etsy: null,
  image: null,
  ajoute_le: "2026-10-29",
  isPublished: true,
} as const;

/** Produits de la rubrique « tenues-de-nuit » (règles : src/lib/catalogue/produits.ts et docs/REDACTION.md). */
export const tenuesDeNuit: Produit[] = [
  {
    ...base,
    slug: "petit-pagne-wax-brode",
    nom: "Petit pagne en wax brodé",
    type: "petit pagne",
    matieres: ["coton wax", "fil à broder"],
    couleurs: ["multicolore", "rouge et or", "bleu et blanc"],
    resume:
      "Le petit pagne est une pièce phare de l'élégance à la maison au Sénégal. Celui-ci est taillé dans un wax en coton, ce tissu imprimé à la cire aux couleurs franches, puis rehaussé d'une broderie sur l'ourlet. Beaucoup de couturières le proposent en version réversible ou avec un lien à nouer. C'est un modèle que l'on trouve surtout chez les créatrices, souvent cousu à la commande.",
    pourquoi: [
      "Le wax de coton garde ses couleurs et prend de la souplesse au fil des lavages.",
      "La broderie de l'ourlet donne une finition soignée qui distingue les pièces faites main.",
      "Il se plie dans un rien de place et s'offre très bien dans un trousseau.",
    ],
    usage:
      "Il se noue simplement, comme un paréo, et se porte pour être à l'aise chez soi. Lavez-le à la main ou en cycle délicat à l'eau froide, sur l'envers pour protéger la broderie. Repassez-le encore légèrement humide pour retrouver le tombé du wax.",
    boutiques: ["etsy", "amazon"],
    recherche: "petit pagne wax brodé",
  },
  {
    ...base,
    slug: "bethio-coton-ajoure",
    nom: "Bethio en coton ajouré",
    type: "bethio",
    matieres: ["coton", "voile de coton"],
    couleurs: ["blanc", "rose poudré", "bleu ciel", "multicolore"],
    resume:
      "Le bethio est le nom wolof du petit pagne, une pièce que les Sénégalaises se transmettent et s'offrent volontiers. On le reconnaît à ses motifs ajourés ou brodés, découpés ou piqués à la main dans un coton léger. Chaque modèle est un petit travail de couture, et les couleurs vont du blanc classique aux teintes les plus vives. C'est une pièce d'élégance et de tradition, plus qu'un simple vêtement.",
    pourquoi: [
      "Les jours ajourés sont un vrai savoir-faire de couturière sénégalaise.",
      "Le coton léger reste agréable toute l'année.",
      "C'est un cadeau très attaché à la culture du djongué.",
    ],
    usage:
      "Le bethio se noue autour de la taille et se porte à la maison. Lavez-le à la main, à l'eau tiède, sans le tordre, pour ne pas abîmer les jours. Faites-le sécher à plat, à l'abri du soleil direct.",
    boutiques: ["etsy", "amazon"],
    recherche: "bethio pagne sénégalais",
  },
  {
    ...base,
    slug: "petit-pagne-bazin-brode",
    nom: "Petit pagne en bazin brodé",
    type: "petit pagne",
    matieres: ["bazin (damassé de coton)", "fil à broder"],
    couleurs: ["blanc", "fuchsia", "turquoise", "or"],
    resume:
      "Le bazin est un damassé de coton, teint puis battu pour lui donner son éclat caractéristique. Taillé en petit pagne et brodé, il devient une pièce de fête à garder pour les grandes occasions à la maison. Sa tenue un peu ferme met en valeur la broderie, souvent ton sur ton ou dorée. On le trouve chez les couturières qui travaillent aussi les boubous en bazin.",
    pourquoi: [
      "Le brillant du bazin donne une allure de fête, même chez soi.",
      "La broderie est souvent assortie aux boubous de cérémonie.",
    ],
    usage:
      "Nouez-le comme un pagne classique et réservez-le aux moments où vous recevez ou célébrez. Lavez-le à la main, à l'eau froide, car le bazin teint peut dégorger les premières fois. Repassez-le sur l'envers pour garder son éclat.",
    boutiques: ["etsy", "amazon"],
    recherche: "pagne bazin brodé femme",
  },
  {
    ...base,
    slug: "nuisette-coton-wax",
    nom: "Nuisette en coton wax",
    type: "nuisette",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "orange et bleu", "vert et jaune"],
    resume:
      "Cette nuisette reprend une coupe simple et fluide, à fines bretelles ou à manches courtes selon les modèles. Elle est taillée dans un wax en coton, ce qui lui donne des couleurs joyeuses et une matière qui respire. Les créatrices africaines et de la diaspora en proposent beaucoup, parfois avec un bonnet ou un peignoir assorti. C'est une pièce de confort, pensée pour se sentir belle chez soi.",
    pourquoi: [
      "Le coton est agréable à porter et facile à entretenir.",
      "Les motifs wax rendent une tenue d'intérieur gaie et élégante.",
      "Elle existe souvent en ensemble avec bonnet ou peignoir.",
    ],
    usage:
      "Choisissez la taille d'après le guide de la créatrice, car les coupes varient d'un atelier à l'autre. Lavez-la à 30 °C sur l'envers, avec des couleurs proches. Faites-la sécher à l'ombre pour garder l'éclat du wax.",
    boutiques: ["etsy", "amazon"],
    recherche: "nuisette wax africaine coton",
  },
  {
    ...base,
    slug: "chemise-de-nuit-longue-wax",
    nom: "Chemise de nuit longue en wax",
    type: "chemise de nuit",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "bleu et blanc", "bordeaux et or"],
    resume:
      "La chemise de nuit longue en wax reprend l'esprit du boubou, avec une coupe ample et des manches larges. Le wax en coton lui donne de la tenue sans être lourd, et ses motifs en font une vraie pièce de garde-robe. Certaines créatrices ajoutent une encolure brodée ou un passepoil contrasté. C'est le choix des amatrices de confort et de longues soirées tranquilles.",
    pourquoi: [
      "Sa coupe ample inspirée du boubou est très confortable.",
      "Les finitions brodées en font une pièce que l'on garde longtemps.",
    ],
    usage:
      "Portez-la pour dormir ou pour traîner le dimanche matin. Lavez-la à 30 °C en cycle délicat, puis repassez-la sur l'envers. Le wax s'assouplit au fil des lavages.",
    boutiques: ["etsy", "amazon"],
    recherche: "chemise de nuit wax africain",
  },
  {
    ...base,
    slug: "kimono-interieur-wax",
    nom: "Kimono d'intérieur en wax",
    type: "kimono",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "jaune et bleu", "rouge et noir"],
    resume:
      "Le kimono en wax est devenu un classique des créatrices africaines et de la diaspora. Sa coupe droite et ses manches larges se portent ouvertes ou fermées par une ceinture à nouer. En tissu wax de coton, il fait office de veste d'intérieur colorée, par-dessus un pyjama ou une tenue simple. On en trouve des versions courtes ou longues, et parfois bicolores.",
    pourquoi: [
      "Une seule pièce suffit à rendre une tenue d'intérieur élégante.",
      "Le coton wax est solide et se lave facilement.",
      "Il se porte aussi dehors, sur un jean, aux beaux jours.",
    ],
    usage:
      "Enfilez-le ouvert le matin ou noué avec sa ceinture pour recevoir chez vous. Lavez-le à 30 °C sur l'envers et repassez-le légèrement humide.",
    boutiques: ["etsy", "amazon"],
    recherche: "kimono wax femme",
  },
  {
    ...base,
    slug: "peignoir-wax-double-satin",
    nom: "Peignoir en wax doublé de satin",
    type: "peignoir",
    matieres: ["coton wax", "satin"],
    couleurs: ["multicolore", "noir et or", "vert et orange"],
    resume:
      "Ce peignoir associe un extérieur en wax de coton et une doublure en satin, douce et lisse. Certains modèles inversent les deux, avec un satin uni bordé de wax aux poignets et au col. Il se ferme par une ceinture à nouer et se décline en longueurs courte ou longue. C'est une pièce de confort raffinée, très appréciée en cadeau de mariage.",
    pourquoi: [
      "Le satin intérieur est doux et le wax extérieur apporte la couleur.",
      "Il fait un très beau cadeau pour une future mariée.",
    ],
    usage:
      "Portez-le au sortir de la douche ou pour vos moments de détente. Lavez-le à la main ou en cycle délicat à l'eau froide, car le satin est fragile. Évitez le sèche-linge et repassez à basse température côté satin.",
    boutiques: ["etsy", "amazon"],
    recherche: "peignoir wax satin africain",
  },
  {
    ...base,
    slug: "pyjama-wax-short-chemise",
    nom: "Pyjama en wax, chemise et short",
    type: "pyjama",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "vert, jaune et rouge", "bleu"],
    resume:
      "Ce pyjama se compose d'une chemise boutonnée à manches courtes et d'un short à taille élastique ou à cordon. Taillé dans un wax de coton, il change agréablement des pyjamas unis du commerce. Les ateliers le proposent souvent en plusieurs imprimés, avec un passepoil contrasté sur le col. C'est un ensemble pratique, pour tous les jours.",
    pourquoi: [
      "Le coton wax respire et convient bien à la mi-saison.",
      "La chemise boutonnée et le short à cordon sont faciles à porter.",
    ],
    usage:
      "Il se porte pour dormir comme pour les matinées à la maison. Lavez-le à 30 °C sur l'envers, avec des couleurs proches. Le wax perd sa raideur après quelques lavages et devient très souple.",
    boutiques: ["etsy", "amazon"],
    recherche: "pyjama wax africain femme",
  },
  {
    ...base,
    slug: "pantalon-detente-wax",
    nom: "Pantalon de détente en wax",
    type: "pantalon d'intérieur",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "bleu et orange", "noir et blanc"],
    resume:
      "Large et fluide, ce pantalon en wax de coton se porte aussi bien à la maison qu'en ville. Sa taille élastique avec cordon et ses poches latérales en font une pièce très pratique. Beaucoup de créatrices le présentent comme assez confortable pour servir de bas de pyjama. Il s'associe facilement à un simple tee-shirt uni.",
    pourquoi: [
      "La taille élastique et les poches le rendent très pratique.",
      "Il passe de la maison à la rue sans changer de tenue.",
    ],
    usage:
      "Associez-le à un haut uni pour laisser parler le motif. Lavez-le à 30 °C sur l'envers et faites-le sécher à l'ombre.",
    boutiques: ["etsy", "amazon"],
    recherche: "pantalon wax femme coton",
  },
  {
    ...base,
    slug: "boubou-interieur-coton-brode",
    nom: "Boubou d'intérieur en coton brodé",
    type: "boubou",
    matieres: ["coton", "fil à broder"],
    couleurs: ["blanc", "indigo", "ocre", "vert d'eau"],
    resume:
      "Le boubou est une longue robe ample, portée dans toute l'Afrique de l'Ouest. En coton léger, avec une broderie à l'encolure, il devient une tenue d'intérieur à la fois simple et distinguée. Les modèles en coton batik ou teint à la main sont particulièrement réussis. C'est la tenue idéale pour recevoir chez soi avec élégance.",
    pourquoi: [
      "Sa coupe ample laisse une grande liberté de mouvement.",
      "La broderie de l'encolure lui donne un vrai cachet.",
      "Le coton léger le rend agréable même en été.",
    ],
    usage:
      "Portez-le seul, à la maison, ou avec un foulard assorti pour recevoir. Lavez-le à 30 °C, sur l'envers pour protéger la broderie. Les cotons teints à la main se lavent séparément les premières fois.",
    boutiques: ["etsy", "amazon"],
    recherche: "boubou coton brodé femme",
  },
  {
    ...base,
    slug: "caftan-interieur-bazin",
    nom: "Caftan d'intérieur en bazin",
    type: "caftan",
    matieres: ["bazin (damassé de coton)"],
    couleurs: ["jaune moutarde", "bleu roi", "blanc", "bordeaux"],
    resume:
      "Le caftan en bazin est une longue robe droite, plus ajustée qu'un grand boubou mais toujours confortable. Le bazin lui donne un léger brillant et une belle tenue. Certaines versions sont taillées dans un tissu dit « effet bazin », plus souple et plus facile à entretenir. C'est une tenue de maison habillée, parfaite pour les jours de fête en famille.",
    pourquoi: [
      "Le léger brillant du bazin habille sans effort.",
      "Il se porte pour recevoir, à la maison, les jours de fête.",
    ],
    usage:
      "Réservez-le aux moments où vous recevez ou aux fêtes de famille. Lavez-le à la main à l'eau froide et repassez-le sur l'envers.",
    boutiques: ["etsy", "amazon"],
    recherche: "caftan bazin femme",
  },
  {
    ...base,
    slug: "chemise-de-nuit-coton-brode",
    nom: "Chemise de nuit en voile de coton brodé",
    type: "chemise de nuit",
    matieres: ["voile de coton", "broderie anglaise"],
    couleurs: ["blanc", "écru", "bleu pâle"],
    resume:
      "La chemise de nuit en voile de coton brodé est un grand classique, léger et frais. Sa broderie, souvent de type broderie anglaise, orne l'empiècement ou le bas de la robe. Elle se marie très bien avec un kimono ou un peignoir en wax pour un mélange de styles. C'est une pièce intemporelle que l'on trouve aussi bien chez les artisanes que dans le commerce.",
    pourquoi: [
      "Le voile de coton est très léger, idéal quand il fait chaud.",
      "La broderie blanche s'accorde avec tous les imprimés wax.",
    ],
    usage:
      "Portez-la seule ou avec un kimono en wax par-dessus. Lavez-la à 30 °C dans un filet pour protéger la broderie. Repassez-la à température moyenne, sur l'envers.",
    boutiques: ["amazon", "etsy"],
    recherche: "chemise de nuit coton brodé",
  },
  {
    ...base,
    slug: "chemise-de-nuit-coton-dentelle",
    nom: "Chemise de nuit en coton et dentelle",
    type: "chemise de nuit",
    matieres: ["coton", "dentelle"],
    couleurs: ["blanc", "ivoire", "rose pâle", "bleu nuit"],
    resume:
      "Cette chemise de nuit associe un corps en coton doux et des finitions en dentelle au col, aux bretelles ou à l'ourlet. Le mélange des deux matières lui donne un air romantique et délicat. Elle se décline en version courte ou longue, à manches ou sans manches. C'est un cadeau classique et raffiné, qui trouve toujours sa place dans un trousseau.",
    pourquoi: [
      "Le coton reste doux et la dentelle apporte une touche de raffinement.",
      "Les teintes ivoire et blanches en font un joli cadeau de mariage.",
    ],
    usage:
      "Lavez-la à la main ou dans un filet à 30 °C, pour préserver la dentelle. Faites-la sécher à plat et évitez le sèche-linge.",
    boutiques: ["amazon", "etsy"],
    recherche: "chemise de nuit coton dentelle femme",
  },
  {
    ...base,
    slug: "bonnet-satin-wax",
    nom: "Bonnet de nuit en wax doublé de satin",
    type: "bonnet de nuit",
    matieres: ["coton wax", "satin"],
    couleurs: ["multicolore", "rouge et jaune", "bleu et vert"],
    resume:
      "Le bonnet de nuit doublé de satin est un accessoire précieux pour protéger sa coiffure pendant la nuit. L'extérieur en wax le rend aussi beau que pratique, et beaucoup de modèles sont réversibles. Il existe des versions à élastique, à cordon ou à nouer, et des tailles larges pour les tresses et les cheveux volumineux. On le trouve souvent assorti à une nuisette ou à un pyjama.",
    pourquoi: [
      "La doublure en satin limite les frottements sur les cheveux.",
      "Les modèles réversibles offrent deux imprimés en un.",
      "C'est un petit cadeau utile, à glisser avec une tenue assortie.",
    ],
    usage:
      "Choisissez une taille large si vous portez des tresses ou des locks. Lavez-le à la main à l'eau froide, puis laissez-le sécher à l'air.",
    boutiques: ["etsy", "amazon"],
    recherche: "bonnet satin wax africain",
  },
  {
    ...base,
    slug: "pareo-wax",
    nom: "Paréo en wax",
    type: "paréo",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "orange et vert", "bleu et blanc"],
    resume:
      "Le paréo en wax est un rectangle de tissu ourlé, à nouer de mille façons. À la maison, il fait office de pagne, de jupe longue ou d'étole sur les épaules. Il se coupe le plus souvent dans un demi-pagne de wax, ce qui laisse le choix parmi des centaines de motifs. C'est la pièce la plus simple de cette sélection, et l'une des plus utiles.",
    pourquoi: [
      "Une seule pièce se noue en pagne, en jupe ou en étole.",
      "Le choix de motifs wax est presque infini.",
    ],
    usage:
      "Nouez-le à la taille comme un pagne ou posez-le sur les épaules les soirs frais. Lavez-le à 30 °C et repassez-le légèrement humide.",
    boutiques: ["etsy", "amazon"],
    recherche: "paréo wax africain",
  },
];
