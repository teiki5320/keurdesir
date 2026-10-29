import type { Produit } from "../types";

const base = {
  rubrique: "coffrets-cadeaux",
  amazon: null,
  etsy: null,
  image: null,
  ajoute_le: "2026-10-29",
  isPublished: true,
} as const;

/** Produits de la rubrique « coffrets-cadeaux » (règles : src/lib/catalogue/produits.ts et docs/REDACTION.md). */
export const coffretsCadeaux: Produit[] = [
  {
    ...base,
    slug: "coffret-thiouraye-encensoir",
    nom: "Coffret thiouraye et encensoir",
    type: "coffret d'encens",
    matieres: ["thiouraye", "terre cuite ou métal", "charbons"],
    couleurs: ["terre", "noir", "doré"],
    resume:
      "Ce coffret réunit l'essentiel pour parfumer une maison à la sénégalaise : un pot de thiouraye, un encensoir et quelques charbons. Le thiouraye est un encens à base de bois et de résines, que l'on fait chauffer sur un charbon plutôt que de le brûler directement. Les coffrets artisanaux sont souvent présentés dans un panier ou une boîte en wax. C'est le cadeau du djongué par excellence, prêt à être offert.",
    pourquoi: [
      "Tout y est pour commencer, même sans rien connaître à l'encens.",
      "C'est un présent chargé de sens dans la culture sénégalaise.",
      "Il fait un très beau cadeau de mariage ou de crémaillère.",
    ],
    usage:
      "Allumez un charbon, posez-le dans l'encensoir et attendez qu'il blanchisse. Déposez alors une petite pincée de thiouraye et laissez la fumée parfumer la pièce. Ne laissez jamais un charbon allumé sans surveillance et posez l'encensoir sur un support qui ne craint pas la chaleur.",
    boutiques: ["etsy", "amazon"],
    recherche: "coffret thiouraye encensoir",
  },
  {
    ...base,
    slug: "coffret-thiouraye-bine-bine",
    nom: "Coffret thiouraye et bine-bine",
    type: "coffret cadeau",
    matieres: ["thiouraye", "perles de verre", "fil"],
    couleurs: ["multicolore", "blanc", "doré"],
    resume:
      "Ce coffret associe deux symboles du djongué : un pot de thiouraye et un ou plusieurs rangs de bine-bine, les perles de taille. Les créatrices de la diaspora le composent souvent à la main, avec un choix de couleurs de perles. Certaines proposent de personnaliser le coffret sur demande. C'est un cadeau très apprécié pour un mariage ou un anniversaire.",
    pourquoi: [
      "Il réunit l'encens et la parure, deux piliers du djongué.",
      "Beaucoup de créatrices acceptent de le composer à la demande.",
    ],
    usage:
      "Demandez à la créatrice les couleurs de perles et le parfum de thiouraye disponibles. Prévoyez un délai de fabrication pour les coffrets composés à la main.",
    boutiques: ["etsy", "amazon"],
    recherche: "coffret thiouraye bine bine",
  },
  {
    ...base,
    slug: "coffret-soins-karite",
    nom: "Coffret de soins au karité",
    type: "coffret de soins",
    matieres: ["beurre de karité", "huiles végétales"],
    couleurs: ["ivoire", "beige"],
    resume:
      "Le coffret de soins au karité réunit plusieurs produits autour de ce beurre végétal d'Afrique de l'Ouest : beurre pur, crème pour les mains, savon ou lait pour le corps. On en trouve de toutes sortes, des coffrets de marques aux compositions artisanales. Le karité est apprécié pour sa texture riche et le confort qu'il laisse sur la peau. C'est un cadeau sûr, qui plaît à presque tout le monde.",
    pourquoi: [
      "Le karité est un classique des rituels de beauté ouest-africains.",
      "Un coffret varié permet de découvrir plusieurs textures.",
      "C'est un cadeau qui convient à tous les âges.",
    ],
    usage:
      "Lisez la liste des ingrédients pour vérifier la part de karité et la présence de parfum. Le beurre pur se réchauffe entre les mains avant de l'appliquer. Conservez les pots à l'abri de la chaleur.",
    boutiques: ["amazon", "etsy"],
    recherche: "coffret cadeau beurre de karité",
  },
  {
    ...base,
    slug: "ecrin-bine-bine",
    nom: "Écrin de bine-bine",
    type: "bine-bine",
    matieres: ["perles de verre", "fil de coton ou nylon"],
    couleurs: ["blanc", "rouge", "turquoise", "doré", "multicolore"],
    resume:
      "Les bine-bine sont des rangs de perles portés autour de la taille, l'une des parures les plus anciennes d'Afrique de l'Ouest. Présentés dans un écrin ou une pochette en tissu, ils deviennent un cadeau prêt à offrir. Les artisanes les enfilent à la main, en mêlant tailles et couleurs de perles. On choisit souvent plusieurs rangs aux couleurs assorties.",
    pourquoi: [
      "C'est une parure profondément liée à la culture du djongué.",
      "L'écrin ou la pochette en fait un cadeau prêt à offrir.",
    ],
    usage:
      "Vérifiez la longueur proposée et si le fil se noue ou se ferme par un fermoir. Rangez les rangs à plat dans leur écrin pour éviter qu'ils s'emmêlent.",
    boutiques: ["etsy", "amazon"],
    recherche: "bine bine perles de taille coffret",
  },
  {
    ...base,
    slug: "bougie-parfumee-oud-ambre",
    nom: "Bougie parfumée oud et ambre",
    type: "bougie parfumée",
    matieres: ["cire végétale", "verre ou céramique", "mèche en coton"],
    couleurs: ["ambre", "noir", "doré"],
    resume:
      "Les notes d'oud, d'ambre et de bois rappellent les encens que l'on brûle dans les maisons sénégalaises. Une bougie parfumée offre ces senteurs chaudes sans charbon ni fumée, ce qui la rend facile à vivre en appartement. On la trouve en pot de verre ou de céramique, souvent coulée à la main. C'est un cadeau simple et chaleureux pour les soirées d'hiver.",
    pourquoi: [
      "Ses notes boisées évoquent l'ambiance des encens d'Afrique de l'Ouest.",
      "Pas de charbon ni de fumée : idéale en appartement.",
    ],
    usage:
      "Laissez-la brûler la première fois jusqu'à ce que toute la surface de cire soit fondue. Coupez la mèche à environ 5 mm avant chaque allumage. Ne la laissez jamais brûler sans surveillance.",
    boutiques: ["amazon", "etsy"],
    recherche: "bougie parfumée oud ambre",
  },
  {
    ...base,
    slug: "coffret-bougies-parfumees",
    nom: "Coffret de bougies parfumées boisées",
    type: "coffret de bougies",
    matieres: ["cire végétale", "verre", "mèche en coton"],
    couleurs: ["ambre", "blanc", "bois"],
    resume:
      "Ce coffret réunit plusieurs petites bougies aux senteurs différentes : santal, ambre, vanille ou fleur d'oranger. C'est une bonne façon de découvrir plusieurs parfums avant de choisir son préféré. Les petits formats se glissent facilement dans un panier cadeau. Cherchez de préférence des cires végétales comme le soja ou le colza.",
    pourquoi: [
      "Plusieurs parfums pour varier les ambiances selon les pièces.",
      "Les petits formats complètent très bien un panier cadeau.",
    ],
    usage:
      "Allumez une bougie différente selon le moment, une senteur fraîche le matin, une senteur boisée le soir. Éloignez-les des rideaux et ne les laissez pas brûler plus de quelques heures d'affilée.",
    boutiques: ["amazon", "etsy"],
    recherche: "coffret bougies parfumées santal",
  },
  {
    ...base,
    slug: "trousse-toilette-wax",
    nom: "Trousse de toilette en wax",
    type: "trousse de toilette",
    matieres: ["coton wax", "doublure imperméable"],
    couleurs: ["multicolore", "bleu et jaune", "rouge et vert"],
    resume:
      "La trousse de toilette en wax est un accessoire du quotidien que l'on prend plaisir à sortir de son sac. Les modèles cousus en atelier, au Sénégal ou en France, sont souvent matelassés et doublés d'un tissu facile à nettoyer. Elle se décline en plusieurs tailles, de la pochette au grand vanity. C'est un petit cadeau coloré qui accompagne bien un coffret de soins.",
    pourquoi: [
      "Elle apporte une touche de wax à un objet de tous les jours.",
      "Beaucoup de modèles sont cousus dans des ateliers à Dakar ou en France.",
      "Elle sert d'emballage original pour un coffret de soins.",
    ],
    usage:
      "Glissez-y quelques soins pour en faire un cadeau complet. Lavez-la à l'eau froide, à la main ou en cycle délicat, et laissez-la sécher ouverte.",
    boutiques: ["etsy", "amazon"],
    recherche: "trousse de toilette wax",
  },
  {
    ...base,
    slug: "panier-senegalais-tresse",
    nom: "Panier sénégalais tressé",
    type: "panier",
    matieres: ["herbes tressées", "lanières de plastique recyclé"],
    couleurs: ["naturel", "multicolore", "noir et blanc"],
    resume:
      "Les paniers sénégalais sont tressés à la main, souvent par des vannières de la région de Thiès. Ils associent des fibres végétales et des lanières de plastique coloré, dans des motifs géométriques très reconnaissables. Avec ou sans couvercle, ils servent à ranger linge, tissus ou petits objets. C'est un cadeau décoratif et utile, qui sert aussi d'écrin pour d'autres présents.",
    pourquoi: [
      "Chaque panier est tressé à la main et donc unique.",
      "Il fait un très bel emballage pour un trousseau ou un coffret.",
    ],
    usage:
      "Garnissez-le de pagnes pliés, d'encens et de soins pour composer un panier cadeau. Dépoussiérez-le avec un chiffon sec et évitez de le laisser en plein soleil.",
    boutiques: ["etsy", "amazon"],
    recherche: "panier sénégalais tressé main",
  },
  {
    ...base,
    slug: "pagne-wax-6-yards",
    nom: "Pagne de wax de 6 yards",
    type: "tissu",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "selon le motif"],
    resume:
      "Le pagne entier de wax mesure 6 yards, soit environ 5,50 mètres, de quoi tailler une tenue complète. En Afrique de l'Ouest, offrir un pagne est un geste ancien, que l'on retrouve à l'occasion des mariages, des naissances et des fêtes. Celle qui le reçoit choisit ensuite le modèle à faire coudre. Vérifiez bien la composition annoncée, car certains tissus imprimés ne sont pas en coton.",
    pourquoi: [
      "Offrir un pagne est un geste très ancré dans la culture ouest-africaine.",
      "La personne qui le reçoit choisit librement le modèle à faire coudre.",
    ],
    usage:
      "Pliez-le avec soin et présentez-le dans un panier ou noué d'un ruban. Lavez le tissu avant la couture pour éviter les surprises au premier lavage.",
    boutiques: ["amazon", "etsy"],
    recherche: "pagne wax 6 yards coton",
  },
  {
    ...base,
    slug: "coupon-bazin-riche",
    nom: "Coupon de bazin riche",
    type: "tissu",
    matieres: ["bazin riche (damassé de coton)"],
    couleurs: ["blanc", "bleu roi", "fuchsia", "vert", "saumon"],
    resume:
      "Le bazin riche est un damassé de coton haut de gamme, apprécié pour son éclat et sa tenue. C'est le tissu des grandes occasions au Sénégal et au Mali, que l'on fait coudre en grand boubou ou en tenue de cérémonie. Un coupon d'environ 5 mètres suffit en général pour une tenue complète. À l'approche de la Tabaski, offrir de quoi faire coudre une tenue neuve est un très beau geste.",
    pourquoi: [
      "C'est le tissu de cérémonie par excellence en Afrique de l'Ouest.",
      "Il permet d'offrir une tenue sur mesure, cousue au goût de chacune.",
    ],
    usage:
      "Offrez-le assez tôt, car les couturiers sont très demandés avant les fêtes. Lavez le bazin à l'eau froide, à la main, pour préserver sa couleur.",
    boutiques: ["amazon", "etsy"],
    recherche: "tissu bazin riche coupon",
  },
  {
    ...base,
    slug: "foulard-tete-wax",
    nom: "Foulard de tête en wax",
    type: "foulard",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "jaune et noir", "bleu et orange"],
    resume:
      "Le foulard de tête en wax se noue en turban ou en mouchoir de tête, à la manière des grandes élégantes d'Afrique de l'Ouest. Il est assez long pour réaliser des nœuds volumineux. Certains modèles sont doublés de satin pour protéger les cheveux. C'est un accessoire facile à offrir, car il n'y a pas de taille à deviner.",
    pourquoi: [
      "Pas de taille à choisir, c'est un cadeau sans risque.",
      "Il se noue de nombreuses façons, du turban simple au grand nœud.",
    ],
    usage:
      "Repassez-le avant de le nouer pour obtenir des plis nets. Lavez-le à 30 °C et faites-le sécher à l'ombre.",
    boutiques: ["etsy", "amazon"],
    recherche: "foulard tête wax africain",
  },
  {
    ...base,
    slug: "sac-cabas-wax",
    nom: "Sac cabas en wax",
    type: "sac",
    matieres: ["coton wax", "toile", "anses en coton ou cuir"],
    couleurs: ["multicolore", "rouge et bleu", "vert et jaune"],
    resume:
      "Le sac cabas en wax est un grand sac de tous les jours, solide et coloré. Il est souvent doublé d'une toile unie et muni d'une poche intérieure. Les créatrices en proposent de nombreuses tailles et formes, du cabas de plage au sac de ville. C'est un cadeau pratique, que l'on utilise tout de suite.",
    pourquoi: [
      "Il est utile au quotidien, pour les courses comme pour le bureau.",
      "Il peut servir de premier emballage à un cadeau plus petit.",
    ],
    usage:
      "Glissez-y le reste de votre cadeau, encens ou soins, pour une double surprise. Lavez-le à la main à l'eau froide si les anses sont en cuir.",
    boutiques: ["etsy", "amazon"],
    recherche: "sac cabas wax africain",
  },
  {
    ...base,
    slug: "coffret-huiles-vegetales",
    nom: "Coffret d'huiles végétales pour le corps",
    type: "coffret de soins",
    matieres: ["huiles végétales", "flacons en verre"],
    couleurs: ["ambre", "doré"],
    resume:
      "Ce coffret réunit plusieurs huiles végétales en petits flacons : baobab, coco, ricin ou amande douce, selon les compositions. Il permet d'essayer différentes textures pour le corps et les cheveux. Les flacons en verre teinté protègent les huiles de la lumière. C'est un cadeau de bien-être apprécié des amatrices de soins naturels.",
    pourquoi: [
      "Plusieurs huiles à découvrir dans un seul coffret.",
      "Les flacons en verre teinté conservent mieux les huiles.",
    ],
    usage:
      "Appliquez quelques gouttes sur une peau encore humide après la douche. Conservez les flacons à l'abri de la chaleur et de la lumière, bien refermés.",
    boutiques: ["amazon", "etsy"],
    recherche: "coffret huiles végétales corps",
  },
  {
    ...base,
    slug: "coffret-savon-noir-karite",
    nom: "Coffret savon noir africain et karité",
    type: "coffret de soins",
    matieres: ["savon noir africain", "beurre de karité"],
    couleurs: ["brun", "ivoire"],
    resume:
      "Le savon noir africain est un savon traditionnel d'Afrique de l'Ouest, fabriqué à partir de cendres de végétaux et d'huiles ou de beurres. Associé à un pot de beurre de karité, il compose un petit rituel de soin complet. On le trouve en pain ou en pâte, souvent emballé simplement. C'est un cadeau authentique et plein de caractère.",
    pourquoi: [
      "Deux classiques des soins ouest-africains dans un même coffret.",
      "Des produits simples, au plus près des recettes traditionnelles.",
    ],
    usage:
      "Faites mousser le savon entre vos mains plutôt que directement sur la peau. Laissez-le sécher sur un porte-savon bien égoutté entre deux utilisations.",
    boutiques: ["amazon", "etsy"],
    recherche: "coffret savon noir africain karité",
  },
  {
    ...base,
    slug: "calebasse-decorative-gravee",
    nom: "Calebasse décorative gravée",
    type: "calebasse",
    matieres: ["calebasse"],
    couleurs: ["naturel", "brun", "ocre"],
    resume:
      "La calebasse est un fruit séché et évidé, utilisé depuis des siècles en Afrique comme récipient. Gravée ou pyrogravée de motifs géométriques, elle devient un objet de décoration à part entière. On en trouve de toutes les tailles, du petit bol au grand plat. C'est un cadeau original pour celles et ceux qui aiment l'artisanat africain.",
    pourquoi: [
      "Chaque calebasse est unique, par sa forme comme par ses gravures.",
      "C'est un objet de décoration chargé d'histoire.",
    ],
    usage:
      "Utilisez-la comme vide-poche, corbeille à fruits secs ou simple objet décoratif. Évitez de la laver à grande eau : un chiffon sec suffit.",
    boutiques: ["etsy", "amazon"],
    recherche: "calebasse décorative africaine",
  },
  {
    ...base,
    slug: "housse-coussin-wax",
    nom: "Housse de coussin en wax",
    type: "housse de coussin",
    matieres: ["coton wax"],
    couleurs: ["multicolore", "bleu", "orange", "vert"],
    resume:
      "La housse de coussin en wax est la façon la plus simple d'apporter ces motifs dans un salon. Elle se ferme le plus souvent par une fermeture éclair cachée. On peut en associer plusieurs, d'imprimés différents mais de couleurs proches. C'est un cadeau de crémaillère très apprécié.",
    pourquoi: [
      "Elle change l'allure d'un canapé en un instant.",
      "C'est une idée simple pour une crémaillère ou un anniversaire.",
    ],
    usage:
      "Vérifiez les dimensions avant de commander pour qu'elles correspondent à votre garnissage. Lavez-la à 30 °C sur l'envers, fermeture fermée.",
    boutiques: ["etsy", "amazon"],
    recherche: "housse coussin wax",
  },
  {
    ...base,
    slug: "carnet-couverture-wax",
    nom: "Carnet à couverture en wax",
    type: "carnet",
    matieres: ["papier", "couverture en coton wax"],
    couleurs: ["multicolore"],
    resume:
      "Ce carnet est recouvert de tissu wax, sur une couverture rigide. Les relieuses artisanales en proposent de plusieurs formats, du petit carnet de sac au grand cahier. Il sert de journal, de carnet de recettes ou de livre de souvenirs. C'est un petit cadeau personnel, à accompagner d'un mot écrit à la main.",
    pourquoi: [
      "Un objet du quotidien qui devient unique grâce au tissu.",
      "Idéal pour écrire un message sur la première page.",
    ],
    usage:
      "Écrivez quelques mots sur la première page avant de l'offrir. Conservez-le à l'abri de l'humidité pour protéger le tissu.",
    boutiques: ["etsy", "amazon"],
    recherche: "carnet couverture tissu wax",
  },
  {
    ...base,
    slug: "bracelet-perles-krobo",
    nom: "Bracelet en perles krobo",
    type: "bracelet",
    matieres: ["perles de verre recyclé", "fil élastique"],
    couleurs: ["multicolore", "bleu", "jaune", "rouge"],
    resume:
      "Les perles krobo sont fabriquées au Ghana à partir de verre recyclé, fondu dans des moules puis décoré. Leur aspect légèrement irrégulier fait tout leur charme. Montées en bracelet élastique, elles se portent seules ou par plusieurs rangs. C'est un bijou coloré et chargé d'histoire, facile à offrir.",
    pourquoi: [
      "Un savoir-faire ghanéen ancien, à partir de verre recyclé.",
      "Le bracelet élastique convient à la plupart des poignets.",
    ],
    usage:
      "Portez-le seul ou associé à d'autres bracelets de perles. Retirez-le avant la douche pour préserver le fil élastique.",
    boutiques: ["etsy", "amazon"],
    recherche: "bracelet perles krobo",
  },
  {
    ...base,
    slug: "eventail-wax",
    nom: "Éventail en wax",
    type: "éventail",
    matieres: ["coton wax", "bois ou cuir"],
    couleurs: ["multicolore", "selon le motif"],
    resume:
      "L'éventail en wax est un éventail pliant, le plus souvent rond, monté sur un manche en bois ou en cuir. On en trouve fabriqués au Sénégal, au Ghana ou en Côte d'Ivoire. Très pratique lors des cérémonies d'été, il apporte aussi une touche de couleur à une tenue. Il se commande facilement en plusieurs exemplaires.",
    pourquoi: [
      "Pratique et élégant lors des cérémonies en plein été.",
      "Il peut s'offrir aux invitées ou aux demoiselles d'honneur.",
    ],
    usage:
      "Choisissez un wax assorti aux couleurs de la cérémonie si vous en commandez plusieurs. Rangez-le plié, à l'abri de l'humidité.",
    boutiques: ["etsy", "amazon"],
    recherche: "éventail wax africain",
  },
  {
    ...base,
    slug: "coffret-bakhour-brule-parfum",
    nom: "Coffret bakhour et brûle-parfum",
    type: "coffret d'encens",
    matieres: ["bakhour", "brûle-parfum en métal ou céramique"],
    couleurs: ["doré", "noir", "argenté"],
    resume:
      "Le bakhour est un encens d'origine arabe, fait de copeaux de bois imprégnés d'huiles parfumées. Ce coffret l'associe à un brûle-parfum, à charbon ou électrique selon les modèles. Les versions électriques évitent le charbon et conviennent bien aux appartements. C'est un cadeau élégant pour parfumer la maison et les tissus.",
    pourquoi: [
      "Le brûle-parfum électrique est simple et sans charbon.",
      "Le bakhour parfume la maison comme les vêtements.",
    ],
    usage:
      "Déposez quelques copeaux sur la plaque ou le charbon et laissez la fumée se diffuser. Vérifiez sur la notice que l'appareil convient au bakhour, car certains ne supportent pas les résines.",
    boutiques: ["amazon", "etsy"],
    recherche: "coffret bakhour brûle encens",
  },
];
