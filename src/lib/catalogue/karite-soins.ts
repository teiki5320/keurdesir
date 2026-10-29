import type { Produit } from "../types";

const commun = {
  rubrique: "karite-soins",
  amazon: null,
  etsy: null,
  image: null,
  ajoute_le: "2026-10-29",
  isPublished: true,
} as const;

/** Produits de la rubrique « karite-soins » (règles : src/lib/catalogue/produits.ts et docs/REDACTION.md). */
export const kariteSoins: Produit[] = [
  // --- Beurres de karité ---
  {
    ...commun,
    slug: "beurre-karite-brut-burkina",
    nom: "Beurre de karité brut non raffiné du Burkina Faso",
    type: "beurre de karité",
    matieres: ["beurre de karité brut (Vitellaria paradoxa)"],
    couleurs: ["ivoire", "beige"],
    resume:
      "C'est le beurre de karité tel qu'on le connaît au pays : extrait des noix de l'arbre à karité, sans blanchiment ni désodorisation. Au Burkina Faso, l'un des grands pays du karité, sa fabrication reste en grande partie un savoir-faire de femmes, de la collecte des fruits au barattage. Sa couleur va de l'ivoire au beige et il garde une odeur douce de noisette fumée. Sa texture ferme fond au contact de la main.",
    pourquoi: [
      "Un beurre entier, qui garde sa couleur, son odeur et sa texture d'origine.",
      "Un seul ingrédient, à utiliser sur la peau, les mains, les lèvres et les cheveux.",
      "Le geste de beauté des grands-mères, que l'on retrouve avec plaisir.",
    ],
    usage:
      "Prélevez une noisette de beurre avec une spatule propre et réchauffez-la entre vos paumes jusqu'à ce qu'elle devienne huileuse. Appliquez-la sur la peau encore légèrement humide après la douche, ou sur les pointes des cheveux. Conservez le pot fermé, à l'abri de la chaleur et de la lumière.",
    boutiques: ["amazon"],
    recherche: "beurre de karité brut non raffiné Burkina Faso",
  },
  {
    ...commun,
    slug: "beurre-karite-brut-ghana",
    nom: "Beurre de karité brut du Ghana",
    type: "beurre de karité",
    matieres: ["beurre de karité brut"],
    couleurs: ["ivoire", "jaune pâle"],
    resume:
      "Le nord du Ghana compte parmi les grandes régions productrices de karité d'Afrique de l'Ouest. Ce beurre brut y est obtenu à partir des amandes séchées, broyées puis barattées à l'eau. Non raffiné, il conserve une couleur crème et un parfum naturel discret. On le trouve souvent en pot ou en bloc, parfois sous l'appellation anglaise « raw shea butter ».",
    pourquoi: [
      "Une texture riche et onctueuse, qui fond vite sur la peau.",
      "Un classique des rayons de beauté de la diaspora, facile à trouver.",
    ],
    usage:
      "Faites fondre une petite quantité entre vos mains avant de l'appliquer sur les zones sèches comme les coudes, les genoux et les talons. Sur les cheveux, utilisez-le en très petite quantité sur les longueurs pour sceller l'hydratation après un soin.",
    boutiques: ["amazon"],
    recherche: "raw shea butter Ghana beurre de karité brut",
  },
  {
    ...commun,
    slug: "beurre-karite-bio-non-raffine",
    nom: "Beurre de karité bio non raffiné",
    type: "beurre de karité",
    matieres: ["beurre de karité issu de l'agriculture biologique"],
    couleurs: ["ivoire"],
    resume:
      "Ce beurre de karité non raffiné porte un label d'agriculture biologique, ce qui garantit un cadre de production contrôlé. Il est issu de karités sauvages des savanes d'Afrique de l'Ouest, où l'arbre pousse sans culture. Sa couleur ivoire et son odeur légère en font un bon choix pour celles qui découvrent le karité brut. C'est le format le plus répandu en France, en pot de taille moyenne.",
    pourquoi: [
      "Un label bio qui rassure, sans renoncer au caractère du karité brut.",
      "Une odeur plus discrète que certains beurres artisanaux.",
      "Un pot pratique pour toute la famille.",
    ],
    usage:
      "Utilisez-le pur, chaque jour, sur le corps et les mains. Il peut aussi servir de base à vos préparations maison, fondu au bain-marie avec quelques gouttes d'huile végétale.",
    boutiques: ["amazon"],
    recherche: "beurre de karité bio non raffiné",
  },
  {
    ...commun,
    slug: "beurre-karite-jaune",
    nom: "Beurre de karité jaune non raffiné",
    type: "beurre de karité",
    matieres: ["beurre de karité brut", "racine végétale pour la couleur"],
    couleurs: ["jaune d'or"],
    resume:
      "Le karité jaune est un beurre brut dont la couleur dorée vient traditionnellement d'une racine végétale ajoutée pendant la fabrication. Très présent dans les boutiques afro, il est apprécié pour son aspect chaleureux. Sa texture est la même que celle du karité ivoire, avec une odeur légèrement plus marquée. Vérifiez la liste des ingrédients : la couleur doit venir d'une plante, et non d'un colorant.",
    pourquoi: [
      "Une belle couleur d'or, qui rappelle les marchés d'Afrique de l'Ouest.",
      "La même onctuosité que le karité brut classique.",
    ],
    usage:
      "Appliquez-le sur le corps en petite quantité, en le faisant bien pénétrer pour éviter les traces de couleur sur les vêtements clairs. Réservez-le de préférence aux soins du soir.",
    boutiques: ["amazon"],
    recherche: "beurre de karité jaune non raffiné",
  },
  {
    ...commun,
    slug: "beurre-karite-cooperative-femmes",
    nom: "Beurre de karité artisanal de coopérative de femmes",
    type: "beurre de karité",
    matieres: ["beurre de karité brut fait à la main"],
    couleurs: ["beige", "ivoire"],
    resume:
      "Dans les zones de savane d'Afrique de l'Ouest, le karité est surnommé « l'or des femmes », car ce sont elles qui le récoltent et le transforment. Des coopératives vendent aujourd'hui leur beurre directement, souvent en petits pots ou en sachets. Fabriqué à la main, il varie un peu d'un lot à l'autre, en couleur comme en odeur. C'est un achat qui a du sens, à condition de lire la fiche du vendeur sur l'origine du beurre.",
    pourquoi: [
      "Un beurre fait à la main, qui garde l'empreinte de chaque village.",
      "Un achat qui soutient le travail des femmes qui le fabriquent.",
      "Un cadeau qui raconte une histoire.",
    ],
    usage:
      "Utilisez-le comme tout beurre brut, en réchauffant une noisette entre vos mains avant de l'appliquer. Gardez-le au frais en été, car un beurre artisanal peut ramollir et changer de texture à la chaleur.",
    boutiques: ["etsy", "amazon"],
    recherche: "beurre de karité artisanal coopérative femmes",
  },
  {
    ...commun,
    slug: "beurre-karite-brut-mali",
    nom: "Beurre de karité brut du Mali",
    type: "beurre de karité",
    matieres: ["beurre de karité brut"],
    couleurs: ["beige"],
    resume:
      "Au Mali, le karité fait partie du paysage, des champs aux cuisines, et son beurre se prépare encore dans de nombreux villages. Ce beurre brut, non raffiné, a une texture dense et une odeur caractéristique, légèrement fumée. Il se vend souvent en bloc ou en grand pot. C'est un beurre de caractère, pour celles qui aiment le karité authentique.",
    pourquoi: [
      "Une texture dense, idéale pour les peaux et les cheveux très secs.",
      "Le parfum du karité traditionnel, sans artifice.",
    ],
    usage:
      "Grattez une petite quantité du bloc avec une cuillère, puis faites-la fondre entre vos mains. Appliquez-la le soir sur le corps, ou sur les pointes des cheveux avant une coiffure protectrice.",
    boutiques: ["amazon"],
    recherche: "beurre de karité brut Mali",
  },
  {
    ...commun,
    slug: "beurre-karite-brut-grand-format",
    nom: "Beurre de karité brut en grand format (1 kg)",
    type: "beurre de karité",
    matieres: ["beurre de karité brut"],
    couleurs: ["ivoire", "beige"],
    resume:
      "Le grand format en seau ou en bloc est le choix des familles et des passionnées de cosmétique maison. On y trouve un beurre brut non raffiné, à répartir ensuite dans de petits pots. C'est aussi la façon la plus économique d'utiliser le karité tous les jours. Il faut seulement prévoir un endroit frais et sec pour le conserver.",
    pourquoi: [
      "De quoi en mettre partout : corps, mains, cheveux, pour toute la maison.",
      "Idéal pour remplir de petits pots à offrir ou à glisser dans un sac.",
    ],
    usage:
      "Dès réception, répartissez le beurre dans des pots propres et bien fermés, en n'en gardant qu'un seul ouvert. Rangez le reste à l'abri de la chaleur et de la lumière. Prélevez toujours avec une spatule propre.",
    boutiques: ["amazon"],
    recherche: "beurre de karité brut 1 kg",
  },
  {
    ...commun,
    slug: "beurre-karite-fouette-nature",
    nom: "Beurre de karité fouetté sans parfum",
    type: "beurre de karité",
    matieres: ["beurre de karité non raffiné", "huile végétale"],
    couleurs: ["blanc crème"],
    resume:
      "Fouetté au batteur, souvent avec un peu d'huile végétale, le karité prend une texture de chantilly légère, beaucoup plus facile à étaler. Cette version sans parfum garde l'odeur naturelle et discrète du beurre. Elle convient à celles qui trouvent le karité brut trop ferme. On la trouve surtout chez des artisanes qui la préparent en petites quantités.",
    pourquoi: [
      "Une texture aérienne qui s'étale en un geste, même en hiver.",
      "Sans parfum ajouté, pour profiter du karité tel quel.",
    ],
    usage:
      "Appliquez directement une petite quantité sur la peau, sans la réchauffer. Gardez le pot au frais : à la chaleur, le beurre fouetté peut retomber, sans perdre ses qualités.",
    boutiques: ["etsy", "amazon"],
    recherche: "beurre de karité fouetté sans parfum",
  },
  {
    ...commun,
    slug: "beurre-karite-fouette-parfume",
    nom: "Beurre de karité fouetté parfumé",
    type: "beurre de karité",
    matieres: ["beurre de karité non raffiné", "huiles végétales", "parfum"],
    couleurs: ["blanc crème", "rose pâle", "ivoire"],
    resume:
      "Le karité fouetté parfumé est l'une des créations préférées des artisanes de la diaspora. Le beurre, battu avec des huiles végétales, devient mousseux et se pare de notes de vanille, de coco, de fleur ou d'épices. On l'utilise comme une crème pour le corps, pour le plaisir de la texture et du parfum. Il se décline souvent en coffrets de plusieurs senteurs.",
    pourquoi: [
      "Une texture gourmande et un parfum qui reste sur la peau.",
      "Un joli cadeau, souvent présenté dans des pots soignés.",
      "Une façon douce d'adopter le karité au quotidien.",
    ],
    usage:
      "Appliquez-le après la douche sur une peau sèche, en lissant doucement. Si votre peau est sensible aux parfums, essayez-le d'abord sur une petite zone, au creux du coude.",
    boutiques: ["etsy", "amazon"],
    recherche: "beurre de karité fouetté parfumé",
  },
  {
    ...commun,
    slug: "baume-karite-coco",
    nom: "Baume corps karité et coco",
    type: "baume pour le corps",
    matieres: ["beurre de karité non raffiné", "huile de coco vierge"],
    couleurs: ["ivoire"],
    resume:
      "Ce baume réunit deux classiques des tropiques : le beurre de karité non raffiné et l'huile de coco vierge. Le mélange est plus souple que le karité pur et dégage une agréable odeur de noix de coco. Il fond vite sur la peau et laisse un fini satiné. Préparé par de petites marques artisanales, il existe souvent en version solide, à faire fondre dans la main.",
    pourquoi: [
      "L'onctuosité du karité et le parfum de la coco, dans un seul pot.",
      "Une texture plus facile à étaler que le karité brut.",
    ],
    usage:
      "Prenez une petite quantité, laissez-la fondre au creux de la main et appliquez-la sur le corps encore tiède après la douche. Par temps chaud, il devient presque liquide : refermez bien le pot.",
    boutiques: ["etsy", "amazon"],
    recherche: "baume karité coco corps",
  },

  // --- Huiles végétales ---
  {
    ...commun,
    slug: "huile-baobab-vierge",
    nom: "Huile de baobab vierge",
    type: "huile végétale",
    matieres: ["huile de graines de baobab (Adansonia digitata)"],
    couleurs: ["jaune doré"],
    resume:
      "Le baobab, arbre emblème du Sénégal, donne des fruits dont les graines sont pressées à froid pour obtenir cette huile. Vierge, elle garde une couleur dorée et une odeur très légère. Sa texture est fine et pénètre bien, sans laisser de film gras. On la trouve souvent avec une origine Sénégal, Mali ou Afrique australe.",
    pourquoi: [
      "L'huile de l'arbre le plus symbolique de l'Afrique de l'Ouest.",
      "Une texture fine, agréable sur le corps comme sur les cheveux.",
      "Une odeur presque neutre, facile à adopter.",
    ],
    usage:
      "Appliquez quelques gouttes sur la peau après la douche, ou mélangez-la à votre crème pour le corps. Sur les cheveux, utilisez-en une petite quantité sur les pointes. Conservez le flacon à l'abri de la lumière.",
    boutiques: ["amazon"],
    recherche: "huile de baobab vierge pressée à froid",
  },
  {
    ...commun,
    slug: "huile-ricin-noire",
    nom: "Huile de ricin noire",
    type: "huile végétale",
    matieres: ["huile de graines de ricin torréfiées"],
    couleurs: ["brun foncé"],
    resume:
      "L'huile de ricin noire, souvent appelée « Jamaican black castor oil », est obtenue à partir de graines de ricin torréfiées avant d'être transformées, ce qui lui donne sa couleur sombre et son odeur fumée. Elle est très épaisse, bien plus qu'une huile ordinaire. C'est un incontournable des routines capillaires de la diaspora, pour les cheveux crépus et bouclés. On l'utilise aussi en très petite quantité sur les sourcils et les cils.",
    pourquoi: [
      "Une huile épaisse qui gaine et fait briller les cheveux crépus.",
      "Un grand classique des routines afro, transmis de sœur en sœur.",
    ],
    usage:
      "Appliquez-la en petite quantité sur le cuir chevelu et les longueurs, en bain d'huile avant le shampooing. Comme elle est très épaisse, vous pouvez la mélanger avec une huile plus légère, comme la coco ou le baobab.",
    boutiques: ["amazon"],
    recherche: "huile de ricin noire jamaïcaine",
  },
  {
    ...commun,
    slug: "huile-ricin-vierge",
    nom: "Huile de ricin vierge pressée à froid",
    type: "huile végétale",
    matieres: ["huile de graines de ricin"],
    couleurs: ["jaune très pâle", "transparent"],
    resume:
      "Version claire de l'huile de ricin, elle est pressée à froid à partir de graines non torréfiées. Elle est presque incolore et sans odeur marquée, mais tout aussi épaisse que la ricin noire. On la choisit pour les mêmes usages capillaires, quand on préfère une huile plus discrète. Elle se vend en flacon, souvent avec une pipette ou un petit applicateur.",
    pourquoi: [
      "Une huile très riche, sans l'odeur fumée de la ricin noire.",
      "Pratique pour les sourcils et les pointes, avec un petit applicateur.",
    ],
    usage:
      "Appliquez quelques gouttes sur les longueurs et les pointes, de préférence mélangées à une huile plus fluide. Le soir, déposez-en une très petite quantité sur les sourcils à l'aide d'une brosse propre.",
    boutiques: ["amazon"],
    recherche: "huile de ricin vierge pressée à froid",
  },
  {
    ...commun,
    slug: "huile-moringa-vierge",
    nom: "Huile de moringa vierge",
    type: "huile végétale",
    matieres: ["huile de graines de moringa (Moringa oleifera)"],
    couleurs: ["jaune pâle"],
    resume:
      "Le moringa, que l'on appelle « nébédaye » au Sénégal, est un arbre très présent dans les cours et les jardins d'Afrique de l'Ouest. Ses graines donnent une huile légère, appelée autrefois « huile de ben ». Elle a une odeur douce et une texture fluide qui pénètre vite. Elle se garde bien, ce qui en fait une bonne huile du quotidien.",
    pourquoi: [
      "Une huile légère, qui ne laisse pas la peau grasse.",
      "Un arbre familier au Sénégal, sous son nom wolof de nébédaye.",
    ],
    usage:
      "Appliquez quelques gouttes sur le visage ou le corps, seule ou mélangée à votre crème. Elle peut aussi servir de base pour diluer un parfum ou une huile plus épaisse.",
    boutiques: ["amazon"],
    recherche: "huile de moringa vierge bio",
  },
  {
    ...commun,
    slug: "huile-coco-vierge",
    nom: "Huile de coco vierge",
    type: "huile végétale",
    matieres: ["huile de noix de coco vierge"],
    couleurs: ["blanc", "transparent quand elle fond"],
    resume:
      "L'huile de coco vierge est extraite de la chair fraîche de la noix de coco, sans raffinage. Elle est solide et blanche sous 24 °C environ, puis devient liquide et transparente à la chaleur. Elle garde une odeur gourmande de coco. On l'aime pour le corps, les cheveux et en démaquillant doux.",
    pourquoi: [
      "Un parfum de coco naturel et une texture qui fond sur la peau.",
      "Une huile à tout faire, du corps aux longueurs des cheveux.",
      "Facile à trouver et à utiliser au quotidien.",
    ],
    usage:
      "Prélevez une petite quantité et laissez-la fondre dans vos mains avant de l'appliquer. En bain d'huile, posez-la sur les longueurs une heure avant le shampooing. Choisissez la mention « vierge » ou « pressée à froid » sur l'étiquette.",
    boutiques: ["amazon"],
    recherche: "huile de coco vierge bio pressée à froid",
  },
  {
    ...commun,
    slug: "huile-coco-fractionnee",
    nom: "Huile de coco fractionnée",
    type: "huile végétale",
    matieres: ["huile de coco fractionnée"],
    couleurs: ["transparent"],
    resume:
      "L'huile de coco fractionnée est une huile de coco dont on a retiré la partie qui fige au froid. Elle reste donc liquide toute l'année, transparente et quasiment sans odeur. Sa texture très fluide en fait une huile sèche agréable pour le corps. Elle sert aussi de base aux huiles parfumées faites maison.",
    pourquoi: [
      "Toujours liquide, même en hiver, et sans odeur de coco.",
      "Un fini léger, qui laisse vite la place aux vêtements.",
    ],
    usage:
      "Appliquez-la sur la peau après la douche, en flacon pompe pour plus de confort. Ajoutez-y quelques gouttes de votre parfum préféré pour une huile de corps personnalisée.",
    boutiques: ["amazon"],
    recherche: "huile de coco fractionnée",
  },
  {
    ...commun,
    slug: "huile-karite",
    nom: "Huile de karité",
    type: "huile végétale",
    matieres: ["fraction liquide du beurre de karité"],
    couleurs: ["jaune pâle"],
    resume:
      "L'huile de karité est la partie liquide du beurre, séparée de la partie solide. On y retrouve l'esprit du karité dans une texture fluide, beaucoup plus simple à étaler. Elle est presque inodore et convient bien à celles que l'odeur du beurre brut dérange. Ce n'est pas un produit brut : c'est une huile transformée, mais très pratique.",
    pourquoi: [
      "Le karité en version fluide, prêt à l'emploi.",
      "Une odeur discrète et une texture qui pénètre vite.",
    ],
    usage:
      "Utilisez-la sur le corps comme une huile sèche, ou sur les cheveux pour les faire briller. Elle se mélange facilement avec d'autres huiles végétales.",
    boutiques: ["amazon"],
    recherche: "huile de karité liquide",
  },
  {
    ...commun,
    slug: "huile-nigelle-vierge",
    nom: "Huile de nigelle vierge",
    type: "huile végétale",
    matieres: ["huile de graines de nigelle (Nigella sativa)"],
    couleurs: ["brun doré"],
    resume:
      "L'huile de nigelle, ou huile de cumin noir, est pressée à partir de petites graines noires très utilisées en Afrique de l'Ouest et au Maghreb. Elle a une odeur poivrée et puissante, qu'on aime ou qu'on n'aime pas. Dans les routines de beauté, elle s'utilise surtout mélangée à d'autres huiles, pour la peau et les cheveux. C'est une huile de tradition, présente dans beaucoup de foyers de la diaspora.",
    pourquoi: [
      "Une huile de tradition, au parfum épicé très reconnaissable.",
      "Parfaite en petite quantité dans un mélange d'huiles maison.",
    ],
    usage:
      "Mélangez quelques gouttes d'huile de nigelle à une huile plus douce, comme la coco ou le baobab, avant de l'appliquer. Testez d'abord le mélange sur une petite zone de peau.",
    boutiques: ["amazon"],
    recherche: "huile de nigelle vierge pressée à froid",
  },
  {
    ...commun,
    slug: "huile-avocat-vierge",
    nom: "Huile d'avocat vierge",
    type: "huile végétale",
    matieres: ["huile de pulpe d'avocat"],
    couleurs: ["vert"],
    resume:
      "Pressée à partir de la pulpe du fruit, l'huile d'avocat vierge a une belle couleur verte et une odeur végétale. Sa texture est riche, entre l'huile fluide et le beurre fondu. Elle convient bien aux peaux sèches et aux cheveux épais en hiver. Elle se marie très bien avec le karité dans les préparations maison.",
    pourquoi: [
      "Une huile riche et enveloppante pour les saisons froides.",
      "Une alliée naturelle du karité dans les mélanges maison.",
    ],
    usage:
      "Appliquez-la sur le corps encore humide, ou mélangez-la à du karité fondu pour un baume maison. Sur les cheveux, utilisez-la en bain d'huile avant le shampooing.",
    boutiques: ["amazon"],
    recherche: "huile d'avocat vierge bio",
  },
  {
    ...commun,
    slug: "huile-sesame-vierge",
    nom: "Huile de sésame vierge pour le corps",
    type: "huile végétale",
    matieres: ["huile de graines de sésame non grillées"],
    couleurs: ["jaune clair"],
    resume:
      "Le sésame est cultivé dans plusieurs pays d'Afrique de l'Ouest, dont le Burkina Faso, qui en est un grand producteur. L'huile de sésame vierge, pressée à partir de graines non grillées, a une couleur claire et une odeur douce. Elle est fluide et s'étale facilement sur tout le corps. Attention à choisir une huile cosmétique ou non grillée, et non l'huile de sésame toastée de la cuisine.",
    pourquoi: [
      "Une huile fluide et douce pour tout le corps.",
      "Une graine cultivée en Afrique de l'Ouest, loin des huiles exotiques importées.",
    ],
    usage:
      "Tiédissez le flacon entre vos mains, puis appliquez l'huile sur la peau après la douche. Elle peut aussi servir de base pour diluer des huiles plus épaisses comme la ricin.",
    boutiques: ["amazon"],
    recherche: "huile de sésame vierge cosmétique corps",
  },
];
