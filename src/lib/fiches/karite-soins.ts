/**
 * Fiches détaillées de la rubrique « Karité, huiles et soins » (20 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - beurre-karite-brut-burkina — Beurre de karité brut non raffiné du Burkina Faso
 *   - beurre-karite-brut-ghana — Beurre de karité brut du Ghana
 *   - beurre-karite-bio-non-raffine — Beurre de karité bio non raffiné
 *   - beurre-karite-jaune — Beurre de karité jaune non raffiné
 *   - beurre-karite-cooperative-femmes — Beurre de karité artisanal de coopérative de femmes
 *   - beurre-karite-brut-mali — Beurre de karité brut du Mali
 *   - beurre-karite-brut-grand-format — Beurre de karité brut en grand format (1 kg)
 *   - beurre-karite-fouette-nature — Beurre de karité fouetté sans parfum
 *   - beurre-karite-fouette-parfume — Beurre de karité fouetté parfumé
 *   - baume-karite-coco — Baume corps karité et coco
 *   - huile-baobab-vierge — Huile de baobab vierge
 *   - huile-ricin-noire — Huile de ricin noire
 *   - huile-ricin-vierge — Huile de ricin vierge pressée à froid
 *   - huile-moringa-vierge — Huile de moringa vierge
 *   - huile-coco-vierge — Huile de coco vierge
 *   - huile-coco-fractionnee — Huile de coco fractionnée
 *   - huile-karite — Huile de karité
 *   - huile-nigelle-vierge — Huile de nigelle vierge
 *   - huile-avocat-vierge — Huile d'avocat vierge
 *   - huile-sesame-vierge — Huile de sésame vierge pour le corps
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "beurre-karite-brut-burkina",
  "beurre-karite-brut-ghana",
  "beurre-karite-bio-non-raffine",
  "beurre-karite-jaune",
  "beurre-karite-cooperative-femmes",
  "beurre-karite-brut-mali",
  "beurre-karite-brut-grand-format",
  "beurre-karite-fouette-nature",
  "beurre-karite-fouette-parfume",
  "baume-karite-coco",
  "huile-baobab-vierge",
  "huile-ricin-noire",
  "huile-ricin-vierge",
  "huile-moringa-vierge",
  "huile-coco-vierge",
  "huile-coco-fractionnee",
  "huile-karite",
  "huile-nigelle-vierge",
  "huile-avocat-vierge",
  "huile-sesame-vierge",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {
  "beurre-karite-brut-burkina": {
    origine:
      "Le karité pousse à l'état sauvage dans la savane d'Afrique de l'Ouest, et le Burkina Faso en est l'un des cœurs. Les noix tombées de l'arbre sont ramassées, séchées, concassées, grillées, puis broyées en une pâte que l'on bat avec de l'eau jusqu'à ce que le beurre remonte à la surface. Ce travail, long et physique, reste en grande partie confié aux femmes, d'où le surnom d'« or des femmes » souvent donné au karité.\n\nUn beurre brut n'a subi ni blanchiment ni désodorisation : il garde donc sa couleur d'ivoire à beige et son parfum de noisette légèrement fumée. Cette odeur n'est pas un défaut, c'est la signature d'un beurre resté proche de son origine.",
    choisir:
      "Ce beurre se distingue du [beurre de karité brut du Ghana](/produit/beurre-karite-brut-ghana), plus crémeux et d'odeur plus discrète, par son caractère affirmé et sa texture ferme. Si vous tenez à un cadre de production certifié, regardez plutôt le [beurre de karité bio non raffiné](/produit/beurre-karite-bio-non-raffine). Et si la fermeté d'un beurre brut vous rebute, le [beurre fouetté sans parfum](/produit/beurre-karite-fouette-nature) s'étale sans effort. Pour comparer plusieurs références avant de vous décider, notre [Top 10 des beurres de karité non raffinés](/top-10/beurres-karite-non-raffines) est un bon point de départ.",
    entretien:
      "Gardez le pot bien fermé, dans un placard frais, à l'abri de la chaleur et de la lumière. Prélevez toujours avec une spatule ou une cuillère propre plutôt qu'avec les doigts mouillés, pour que l'eau ne s'invite pas dans le pot. Un beurre brut peut ramollir en été puis reprendre, avec parfois un grain léger : c'est normal et sans conséquence sur son usage cosmétique.",
    pourQui:
      "Il s'adresse à celles qui aiment le karité tel qu'il se prépare au pays, avec son odeur franche, et qui apprécient un produit à un seul ingrédient. C'est un bon pot de salle de bain à avoir sous la main pour les mains, les coudes et les pointes des cheveux. Il fait aussi un cadeau sincère pour une personne attachée à ses racines, accompagné d'un [petit pagne en wax brodé](/produit/petit-pagne-wax-brode) si vous voulez composer un présent plus complet.",
    faq: [
      { question: "Pourquoi ce beurre sent-il la noisette fumée ?", reponse: "Parce qu'il n'est pas désodorisé : les amandes sont traditionnellement grillées avant d'être broyées, ce qui laisse une note fumée. L'odeur s'estompe vite sur la peau." },
      { question: "Comment faire fondre le beurre facilement ?", reponse: "Prélevez une noisette, roulez-la entre vos paumes quelques secondes : la chaleur des mains suffit à la rendre huileuse avant de l'appliquer." },
    ],
  },
  "beurre-karite-brut-ghana": {
    origine:
      "Le nord du Ghana, avec ses savanes de Tamale et de Bolgatanga, est une grande région du karité. On y parle de « shea butter », nom anglais qui a fait le tour du monde des rayons de beauté. Les amandes séchées sont broyées, malaxées avec de l'eau, puis le beurre est recueilli et refroidi : la méthode générale est la même qu'ailleurs en Afrique de l'Ouest, mais chaque village a son tour de main.\n\nLe beurre brut ghanéen est souvent décrit comme crémeux, de couleur ivoire à jaune pâle, avec un parfum naturel discret. Il se présente fréquemment en pot ou en bloc, sous la mention « raw shea butter ».",
    choisir:
      "Face au [beurre de karité brut du Burkina Faso](/produit/beurre-karite-brut-burkina), plus marqué en odeur, celui-ci séduit par sa discrétion et sa fonte rapide. Il se rapproche du [beurre du Mali](/produit/beurre-karite-brut-mali), plus dense, qui conviendra mieux aux amatrices de textures fermes. Pour un beurre déjà préparé et très léger, tournez-vous vers le [baume corps karité et coco](/produit/baume-karite-coco). Lisez l'étiquette : la mention « brut » ou « non raffiné » et une liste d'ingrédients réduite au seul karité sont les bons repères.",
    entretien:
      "Rangez le pot fermé, loin d'une fenêtre ou d'un radiateur. Le karité aime la fraîcheur, et la lumière finit par ternir sa couleur. Une spatule propre à chaque prélèvement suffit à le garder agréable. Sa texture peut changer selon la saison, plus souple l'été et plus ferme l'hiver, sans que cela soit un souci.",
    pourQui:
      "Ce beurre convient à celles qui débutent avec le karité brut et veulent un parfum doux. Appliqué en petite quantité sur les coudes, les genoux et les talons, il fait partie des gestes simples du quotidien. Sur les cheveux, une noisette sur les longueurs, après votre routine habituelle, suffit. C'est aussi un choix pratique pour une famille qui partage le même pot.",
    faq: [
      { question: "Que veut dire « raw shea butter » ?", reponse: "C'est l'expression anglaise pour karité brut, c'est-à-dire non raffiné. Elle s'emploie beaucoup pour les beurres du Ghana." },
      { question: "Peut-on l'utiliser sur les cheveux ?", reponse: "Oui, en très petite quantité sur les longueurs, car il est riche. Un excès alourdit vite la chevelure : mieux vaut commencer par peu." },
      { question: "Le beurre ghanéen est-il plus clair que les autres ?", reponse: "Souvent oui, il tire vers l'ivoire ou le jaune pâle, mais la couleur varie selon les lots et la façon de le préparer. Elle ne dit rien de plus sur son usage au quotidien." },
    ],
  },
  "beurre-karite-bio-non-raffine": {
    origine:
      "Le beurre de karité biologique provient des mêmes arbres que les autres, des karités sauvages des savanes ouest-africaines, que l'on ne plante ni n'arrose. La mention bio renvoie à un cahier des charges de collecte et de fabrication contrôlé par un organisme extérieur, et non à une recette différente : la matière reste le beurre de l'amande de karité.\n\nNon raffiné, il garde sa couleur ivoire et une odeur plutôt légère. C'est pour cette raison qu'on le recommande souvent à celles qui découvrent le karité brut et craignent un parfum trop prononcé.",
    choisir:
      "Comparez-le au [beurre de karité brut du Burkina Faso](/produit/beurre-karite-brut-burkina), plus rustique, et au [beurre de karité artisanal de coopérative de femmes](/produit/beurre-karite-cooperative-femmes), fait main et variable d'un lot à l'autre. Le bio apporte surtout une garantie de cadre, la régularité d'un produit à l'autre et un pot facile à ranger. Vérifiez sur l'emballage le logo et la mention du certificateur plutôt que de vous fier à un simple mot bio. Notre [Top 10 des beurres de karité non raffinés](/top-10/beurres-karite-non-raffines) vous aide à situer chaque option.",
    entretien:
      "Conservez le pot dans un endroit frais et sec, fermé après chaque usage, à l'abri de la chaleur et de la lumière directe. Utilisez une spatule propre. Si vous souhaitez le fondre pour une préparation maison, faites-le doucement au bain-marie sans le chauffer fort, puis laissez-le refroidir lentement pour limiter les grains.",
    pourQui:
      "C'est le beurre du quotidien pour toute la maisonnée : mains, corps, pointes des cheveux. Il convient aux personnes qui veulent un seul pot polyvalent et rassurant. Les amatrices de cosmétique maison l'apprécient comme base, fondu avec une huile végétale comme l'[huile d'avocat vierge](/produit/huile-avocat-vierge). À offrir à quelqu'un qui découvre le karité sans vouloir se tromper.\\n\\nSa discrétion en fait aussi un bon pot de départ avant d'essayer des beurres plus marqués, comme le karité du Mali, ou plus artisanaux. Si vous l'aimez, vous saurez ensuite ce que vous cherchez dans un beurre plus rustique.",
    faq: [
      { question: "Bio veut-il dire plus doux ?", reponse: "Pas forcément : le label décrit le mode de production, pas la texture. L'odeur peut varier d'un lot à l'autre." },
      { question: "Peut-on le mélanger à une huile ?", reponse: "Oui, c'est un usage courant : fondu doucement avec une huile végétale puis refroidi, il devient plus souple." },
      { question: "Peut-on offrir ce beurre dans un coffret ?", reponse: "Oui, son odeur légère et son pot discret le rendent facile à offrir. Il s'accorde bien avec un coffret de soins ou une huile végétale, pour un cadeau simple qui plaît sans surprise." },
    ],
  },
  "beurre-karite-jaune": {
    origine:
      "Le karité jaune est une particularité des boutiques afro. Sa couleur dorée vient traditionnellement d'une racine végétale, que l'on ajoute au cours de la fabrication du beurre ; on en croise une liée au nom de borututu dans certains pays d'Afrique de l'Ouest. Ce n'est donc pas un autre karité, mais un beurre brut coloré par une plante.\n\nSa texture reste celle du beurre de karité habituel : ferme dans le pot, onctueuse dès qu'elle touche la chaleur de la main. L'odeur peut être un peu plus marquée, avec une pointe végétale qui évoque la racine.",
    choisir:
      "Si vous aimez la couleur chaude d'un beurre d'or, il se distingue du [beurre de karité brut du Ghana](/produit/beurre-karite-brut-ghana), de ton crème, et du [beurre bio non raffiné](/produit/beurre-karite-bio-non-raffine), ivoire. Lisez bien la liste des ingrédients : la teinte doit venir d'une plante, et non d'un colorant ajouté. Pensez aussi à l'usage : la couleur peut marquer légèrement les tissus clairs, ce qui oriente plutôt vers le soir ou vers une application bien massée. Pour un beurre clair, tournez-vous vers le [beurre de karité fouetté sans parfum](/produit/beurre-karite-fouette-nature).",
    entretien:
      "Rangez le pot fermé, à l'abri de la chaleur et de la lumière, car la couleur peut pâlir si le beurre reste exposé. Prélevez avec une spatule propre. Si un peu de beurre jaune tache un tissu, lavez-le rapidement ; mieux vaut ne pas laisser un pagne ou une nuisette en coton clair contre la peau juste après l'application.",
    pourQui:
      "Il plaît aux personnes qui aiment l'aspect traditionnel du karité et sa belle teinte, et à celles qui souhaitent un beurre brut un peu différent des classiques ivoire. C'est un soin du soir idéal, appliqué avant de dormir, en laissant au beurre le temps de se fondre dans la peau. Un joli cadeau pour quelqu'un qui collectionne les produits de beauté africains, glissé avec un [bonnet en satin wax](/produit/bonnet-satin-wax) pour la nuit.\\n\\nChoisi pour sa couleur, il garde aussi la simplicité du karité : un beurre, un pot, quelques gestes. Il se prête bien à un petit rituel du soir, quand on a le temps d'étaler lentement, plutôt qu'à une application pressée du matin.",
    faq: [
      { question: "Le beurre jaune tache-t-il les vêtements ?", reponse: "Il peut laisser une légère trace sur les tissus clairs si l'on en met trop. Une petite quantité bien massée limite ce risque." },
      { question: "Pourquoi ce beurre est-il jaune ?", reponse: "Sa couleur vient traditionnellement d'une racine végétale ajoutée pendant la fabrication du beurre, d'après les producteurs qui le préparent." },
      { question: "Peut-on le mélanger à un beurre ivoire ?", reponse: "Oui, certaines personnes fondent ensemble deux beurres pour adoucir la teinte et l'odeur. Faites-le doucement, laissez refroidir lentement et gardez le mélange dans un pot propre, bien fermé." },
    ],
  },
  "beurre-karite-cooperative-femmes": {
    origine:
      "Dans les villages de savane, le karité est d'abord une affaire de femmes : ce sont elles qui ramassent les fruits tombés, préparent les amandes et battent le beurre. Pour mieux vendre leur production, beaucoup se sont regroupées en coopératives et proposent leur beurre en petits pots ou en sachets, souvent avec le nom du village ou de l'association.\n\nFait à la main, ce beurre n'est jamais tout à fait identique d'un lot à l'autre. La couleur va du beige à l'ivoire, l'odeur varie selon le grillage des amandes, et la texture peut être plus ou moins granuleuse.",
    choisir:
      "Le charme de ce beurre tient justement à ces différences, là où le [beurre de karité bio non raffiné](/produit/beurre-karite-bio-non-raffine) vise la régularité. Comparez-le aussi au [beurre brut du Burkina Faso](/produit/beurre-karite-brut-burkina), plus courant en boutique. Pour qu'il ait du sens, lisez la présentation du vendeur : nom de la coopérative, pays, façon de fabriquer. Les mentions vagues, sans origine précise, appellent à la prudence. Le [Top 10 des beurres de karité non raffinés](/top-10/beurres-karite-non-raffines) peut vous aider à repérer les repères utiles.",
    entretien:
      "Un beurre artisanal supporte moins bien la chaleur qu'un produit industriel : gardez-le au frais en été, pot fermé, à l'abri de la lumière. Il peut ramollir, suinter ou prendre un aspect granuleux sans perdre son usage. Si cela vous gêne, faites-le fondre doucement puis laissez-le prendre au réfrigérateur pour retrouver un aspect lisse.",
    pourQui:
      "C'est le bon choix pour un cadeau qui raconte quelque chose, à offrir pour un anniversaire ou une fête, ou pour soi quand on souhaite un achat réfléchi. Il plaira à celles qui aiment savoir d'où vient ce qu'elles utilisent. Associez-le à un [coffret de soins au karité](/produit/coffret-soins-karite) si vous voulez offrir un ensemble plus complet.",
    faq: [
      { question: "Pourquoi ce beurre varie-t-il d'un pot à l'autre ?", reponse: "Parce qu'il est fait à la main, avec des amandes et des gestes qui changent selon les lots. Cette variation est normale." },
      { question: "Comment vérifier l'origine ?", reponse: "En lisant la fiche du vendeur : pays, nom de la coopérative, mode de fabrication. Un vendeur sérieux les indique." },
      { question: "Ce beurre convient-il à un usage quotidien ?", reponse: "Oui, comme tout beurre brut : une petite quantité suffit chaque jour sur le corps ou les mains. Si la texture change avec la chaleur, replacez le pot au frais avant de l'utiliser." },
    ],
  },
  "beurre-karite-brut-mali": {
    origine:
      "Le Mali figure parmi les grands pays du karité, dont l'arbre est protégé dans les champs, aux abords des villages. La préparation du beurre y est souvent un travail de groupe : les amandes sont lavées, séchées, grillées, pilées, puis la pâte est malaxée avec de l'eau. Le beurre qui en sort est mis à refroidir en pains ou en blocs, que l'on trouve ensuite sur les marchés.\n\nCe beurre brut est connu pour sa texture dense et son odeur franche, légèrement fumée. Sa couleur reste beige, sans blanchiment, et son aspect peut être un peu moins lisse que celui d'un beurre industriel.",
    choisir:
      "Il est plus ferme que le [beurre de karité brut du Ghana](/produit/beurre-karite-brut-ghana) et plus rustique que le [beurre bio non raffiné](/produit/beurre-karite-bio-non-raffine). Il demande donc quelques secondes de plus entre les mains pour fondre, mais offre une belle tenue sur les peaux sèches. S'il vous faut une texture plus souple dès l'ouverture, regardez le [beurre de karité fouetté sans parfum](/produit/beurre-karite-fouette-nature). Le grand bloc se prête aussi à un partage entre plusieurs personnes, comme le [beurre brut en grand format](/produit/beurre-karite-brut-grand-format).",
    entretien:
      "Gardez le bloc dans un récipient fermé, au frais, à l'abri de la chaleur et de la lumière. Grattez-en la quantité utile avec une cuillère propre au lieu d'y plonger les doigts. Si un bloc se couvre d'une fine pellicule plus claire ou prend un grain, c'est un effet de température, sans lien avec la qualité de l'usage cosmétique.",
    pourQui:
      "Il convient aux personnes qui aiment un karité de caractère, à celles dont la peau ou les cheveux aiment les textures riches, et à celles qui préparent leurs mélanges maison. Le soir, une petite noisette sur le corps ou sur les pointes avant une coiffure protectrice est un geste habituel. Pour un cadeau, il fonctionne bien auprès de quelqu'un qui aime les produits de tradition.\\n\\nSi vous aimez les beurres qui ont de la personnalité, ce karité est un excellent terrain d'essai. Sa tenue en fait aussi un bon candidat pour les mélanges fondus, qui gardent ensuite une texture ferme.",
    faq: [
      { question: "Ce beurre est-il difficile à étaler ?", reponse: "Il est ferme au départ, mais fond entre les mains. Réchauffez-en une petite quantité avant de l'appliquer." },
      { question: "Peut-on le fondre pour un mélange ?", reponse: "Oui, doucement au bain-marie, avec une huile végétale par exemple. Laissez refroidir lentement pour garder une texture plus lisse." },
      { question: "Quelle différence entre le karité du Mali et celui du Ghana ?", reponse: "Le beurre malien est en général décrit comme plus dense et d'odeur plus fumée, celui du Ghana comme plus crémeux et discret. Ces nuances dépendent surtout des lots et de la préparation." },
    ],
  },
  "beurre-karite-brut-grand-format": {
    origine:
      "Le grand format est la façon la plus pratique d'utiliser le karité sans compter : un seau ou un bloc de beurre brut, non raffiné, que l'on répartit soi-même. C'est un usage ancien dans les familles d'Afrique de l'Ouest, où le beurre s'achetait en gros sur le marché avant d'être réparti entre foyers pour la maison, les enfants et les cheveux.\n\nLa matière est la même que celle d'un petit pot : du beurre issu de l'amande de l'arbre à karité, avec sa couleur ivoire à beige et son parfum de noisette. Seule la quantité change, et avec elle la manière de le ranger.",
    choisir:
      "Ce format s'adresse à qui l'utilise tous les jours. Pour un usage plus occasionnel, un pot comme le [beurre de karité bio non raffiné](/produit/beurre-karite-bio-non-raffine) évite de conserver un grand volume longtemps. Si vous voulez un beurre déjà souple, le [karité fouetté sans parfum](/produit/beurre-karite-fouette-nature) est plus simple. Pour un style de beurre précis, comparez avec le [beurre brut du Burkina Faso](/produit/beurre-karite-brut-burkina). Notre [Top 10 des beurres de karité non raffinés](/top-10/beurres-karite-non-raffines) classe les types de beurre selon l'usage.",
    entretien:
      "La conservation est le point clé d'un grand format. Répartissez le beurre dans des pots propres et secs, en n'en ouvrant qu'un à la fois, et rangez le reste fermé, au frais, à l'abri de la chaleur et de la lumière. Utilisez toujours une spatule propre. Plus le contenant est ouvert souvent, plus il vieillit vite : c'est la raison de ce partage en petits pots.",
    pourQui:
      "Il plaît aux familles, aux passionnées de cosmétique maison et à celles qui souhaitent offrir plusieurs petits pots faits à partir d'un même bloc. Vous pouvez en glisser un dans un sac, un autre dans la salle de bain et un dernier dans un cadeau. C'est un achat de fond de placard, pour l'année.",
    faq: [
      { question: "Faut-il tout fondre pour le répartir ?", reponse: "Ce n'est pas nécessaire : on peut le gratter à la cuillère. Si vous le fondez, faites-le doucement, puis laissez-le refroidir." },
      { question: "Où ranger un grand format ?", reponse: "Dans un placard frais et sec, fermé, loin de la chaleur et de la lumière, avec un seul pot ouvert à la fois." },
      { question: "Quelle quantité faut-il prélever à chaque usage ?", reponse: "Une noisette suffit en général pour les mains, deux pour un bras ou une jambe. Mieux vaut commencer petit : on peut toujours en reprendre, et le beurre ne s'efface pas d'un geste." },
    ],
  },
  "beurre-karite-fouette-nature": {
    origine:
      "Le karité fouetté est une invention d'artisanes plus récente que le beurre brut : on bat le beurre, souvent avec un peu d'huile végétale, jusqu'à ce qu'il devienne aérien, presque comme une crème chantilly. Le procédé ne change pas la matière première, qui reste du beurre de karité non raffiné, mais il en change radicalement la texture.\n\nSans parfum ajouté, cette version garde l'odeur naturelle et discrète du beurre. Sa couleur est un blanc crème, et il se maintient souple, même par temps froid.",
    choisir:
      "Sa légèreté le distingue du [beurre de karité brut du Burkina Faso](/produit/beurre-karite-brut-burkina), plus ferme, et du [beurre fouetté parfumé](/produit/beurre-karite-fouette-parfume), qui ajoute des senteurs. Si vous voulez un karité sans odeur ajoutée à étaler d'un geste, c'est lui. Regardez la liste des ingrédients : une huile végétale est normale, mais mieux vaut éviter les listes très longues. Si vous préférez une texture encore plus fluide, l'[huile de karité](/produit/huile-karite) est l'option liquide.",
    entretien:
      "Gardez le pot au frais, fermé, à l'abri de la chaleur et de la lumière. À la chaleur, la texture aérée peut retomber et devenir plus dense, ce qui n'a pas d'incidence sur l'usage : il suffit de le replacer au frais. Utilisez une spatule propre et évitez de laisser le pot ouvert dans une salle de bain humide.",
    pourQui:
      "Il convient à celles qui trouvent le karité brut trop ferme, à celles qui veulent une texture prête à étaler après la douche, et à celles qui aiment les produits sans parfum ajouté. Le matin, il se prête bien aux mains et aux bras, car il pénètre sans effort. Un cadeau simple et doux pour quelqu'un qui découvre le karité.\\n\\nIl se range volontiers dans un sac ou une trousse, car il est facile d'en prendre un peu du bout des doigts. C'est un bon compagnon pour la mauvaise saison, quand les mains aiment une crème prête à l'emploi.",
    faq: [
      { question: "Pourquoi le beurre fouetté retombe-t-il ?", reponse: "La chaleur fait perdre l'air incorporé : il devient plus dense. Un passage au frais lui rend un peu de légèreté." },
      { question: "Est-il vraiment sans parfum ?", reponse: "Aucun parfum n'est ajouté, mais il garde l'odeur naturelle du karité, douce et discrète, qui s'efface assez vite sur la peau." },
      { question: "Peut-on fouetter soi-même un karité brut ?", reponse: "Oui, certaines personnes le font au batteur après l'avoir laissé ramollir, avec un peu d'huile végétale. Le résultat dépend du beurre de départ, et il se conserve mieux au frais." },
    ],
  },
  "beurre-karite-fouette-parfume": {
    origine:
      "Le karité fouetté parfumé est un bel exemple de la créativité des artisanes de la diaspora. Le beurre est battu avec des huiles végétales jusqu'à devenir mousseux, puis relevé de senteurs de vanille, de coco, de fleurs ou d'épices. La base reste le beurre de karité, mais l'objet prend des allures de crème gourmande.\n\nCette version est devenue un grand classique des boutiques en ligne artisanales. Les couleurs vont du blanc crème au rose pâle, selon les ingrédients, et les pots sont souvent soignés.",
    choisir:
      "Si vous aimez le parfum, il se distingue du [karité fouetté sans parfum](/produit/beurre-karite-fouette-nature) par ses notes ajoutées, et du [baume corps karité et coco](/produit/baume-karite-coco), plus solide et à l'odeur unique de coco. Lisez l'étiquette pour savoir si le parfum est naturel ou de synthèse, et choisissez une senteur que vous aimez vraiment : elle reste sur la peau plusieurs heures. Pour un coffret de plusieurs senteurs, vous pouvez aussi regarder le [coffret de soins au karité](/produit/coffret-soins-karite).",
    entretien:
      "Conservez le pot fermé, dans un endroit frais, à l'abri de la chaleur et de la lumière. La texture mousseuse est sensible à la température : elle peut s'affaisser en été, sans que l'usage change. Le parfum s'atténue avec le temps si le pot reste souvent ouvert. Prélevez avec une spatule propre.",
    pourQui:
      "Il s'adresse à celles qui voient dans la crème pour le corps un moment de plaisir, et à celles qui aiment les textures gourmandes. C'est aussi un cadeau apprécié pour un anniversaire ou la fête des mères, surtout en coffret de plusieurs parfums. Par précaution, un essai sur le creux du coude avant la première utilisation convient aux personnes sensibles aux senteurs.\\n\\nIl se prête aussi à une petite attention du soir, après la douche, pour prolonger un moment de calme. Ce n'est pas un parfum à proprement parler, mais il laisse une trace légère sur la peau et le linge.",
    faq: [
      { question: "Faut-il faire un test avant usage ?", reponse: "Par précaution, oui : déposez un peu de produit au creux du coude et attendez un peu avant de l'étaler plus largement." },
      { question: "Le parfum tient-il longtemps ?", reponse: "Il reste sur la peau quelques heures, puis s'estompe. Il dépend de la senteur choisie et de la quantité appliquée." },
      { question: "Puis-je l'offrir en coffret de plusieurs senteurs ?", reponse: "Oui, c'est même l'un de ses usages favoris : plusieurs petits pots aux parfums différents, glissés dans une boîte ou un pochon. Pensez à demander quelles notes la personne préfère avant de choisir." },
    ],
  },
  "baume-karite-coco": {
    origine:
      "Ce baume associe deux classiques des régions tropicales : le beurre de karité, venu de la savane ouest-africaine, et l'huile de coco, extraite de la chair de la noix. La noix de coco, elle, est présente sur les côtes d'Afrique de l'Ouest comme dans bien d'autres régions chaudes du monde.\n\nLe mélange est plus souple que le karité pur et se reconnaît à son odeur franche de coco. Il fond très vite à la chaleur de la peau et laisse un fini satiné. Il est souvent préparé en petites séries par de petites marques, parfois en version solide à fondre dans la main.",
    choisir:
      "Sa texture se place entre le beurre brut et l'huile : plus étalable que le [beurre de karité brut du Ghana](/produit/beurre-karite-brut-ghana), plus consistant que l'[huile de coco vierge](/produit/huile-coco-vierge) seule. Il se compare aussi au [beurre fouetté parfumé](/produit/beurre-karite-fouette-parfume), plus aérien. Le titre de la fiche sur la boutique évoque un baume corps bio, mais vérifiez toujours la composition précise du produit que vous choisissez. Pour d'autres huiles à adopter, voyez notre [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps).",
    entretien:
      "Fermez bien le pot après usage et gardez-le à l'abri de la chaleur et de la lumière. L'huile de coco fond autour de vingt-quatre degrés : un baume qui contient de la coco peut donc devenir presque liquide en été, puis se raffermir. Si cela arrive, remettez-le au frais pour retrouver sa tenue, et prélevez avec une spatule propre.",
    pourQui:
      "Il convient à celles qui aiment une crème de corps solide, facile à emporter, et à celles qui apprécient l'odeur de coco. Après la douche, une petite quantité fondue dans la main suffit sur les bras et les jambes. À offrir pour un départ en vacances ou une fête, en pot de petite taille.\\n\\nIl se glisse volontiers dans une trousse de voyage, avec un pot bien fermé pour éviter qu'il ne fonde dans le sac. Pour une base plus neutre, préférez un karité brut sans coco.",
    faq: [
      { question: "Le baume peut-il fondre en été ?", reponse: "Oui, l'huile de coco fond vers vingt-quatre degrés. Refermez le pot et replacez-le au frais pour qu'il se raffermisse." },
      { question: "Sent-il fortement la coco ?", reponse: "Oui, l'odeur de coco est franche, c'est l'une de ses signatures. Elle s'estompe progressivement sur la peau." },
      { question: "Convient-il aux mains et au corps ?", reponse: "Oui, c'est un baume pour le corps que l'on peut aussi passer sur les mains. Sa texture fond au contact de la peau et se répartit en quelques gestes, sans besoin de frotter longtemps." },
    ],
  },
  "huile-baobab-vierge": {
    origine:
      "Le baobab est l'arbre emblème du Sénégal, planté dans les armoiries et visible dans bien des villages. Ses fruits renferment des graines, que l'on presse à froid pour obtenir cette huile. On la trouve ensuite sous des origines variées : Sénégal, Mali, Afrique australe, selon les producteurs.\n\nVierge, elle conserve une couleur dorée et une odeur très légère. Sa texture est fine : elle pénètre bien et laisse peu de film gras, ce qui en fait une huile facile à intégrer à une routine de corps comme de cheveux.",
    choisir:
      "Comparez-la à l'[huile de moringa vierge](/produit/huile-moringa-vierge), d'une légèreté voisine, et à l'[huile d'avocat vierge](/produit/huile-avocat-vierge), plus riche et enveloppante. Pour un fini sec, l'[huile de coco fractionnée](/produit/huile-coco-fractionnee) reste la plus légère. Repérez sur l'étiquette le nom botanique, Adansonia digitata, et les mentions vierge et pressée à froid. Le [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) met ces textures en perspective.",
    entretien:
      "Conservez le flacon fermé, à l'abri de la lumière et de la chaleur, de préférence dans un placard. Un flacon en verre teinté est un bon signe. Refermez le bouchon après chaque usage, car l'air finit par altérer les huiles végétales, et évitez de la laisser près d'une fenêtre ou d'une plaque de cuisson.",
    pourQui:
      "Elle convient à celles qui cherchent une huile légère pour le corps après la douche, avec un parfum quasi neutre, et à celles qui aiment les produits liés à un arbre qu'elles connaissent. Quelques gouttes sur les pointes des cheveux suffisent aussi. Un cadeau symbolique pour une personne attachée au Sénégal, à glisser dans un coffret avec un [beurre de karité bio non raffiné](/produit/beurre-karite-bio-non-raffine).\\n\\nElle trouve naturellement sa place dans un coffret d'huiles ou à côté d'un beurre de karité. On la choisit aussi en cadeau pour son symbole : le baobab, arbre de palabre, rassemble depuis longtemps les villages sous son feuillage.",
    faq: [
      { question: "D'où vient l'huile de baobab ?", reponse: "De graines de l'arbre baobab, pressées à froid. L'origine précise varie selon les producteurs : Sénégal, Mali ou Afrique australe." },
      { question: "Laisse-t-elle un film gras ?", reponse: "Sa texture est fine et pénètre bien. Le résultat dépend toutefois de la quantité : quelques gouttes suffisent." },
      { question: "Peut-on la mélanger à d'autres huiles ?", reponse: "Oui, sa texture fine se marie bien avec d'autres huiles végétales plus riches ou plus épaisses, comme le ricin. Mélangez peu à la fois et testez le résultat sur une petite zone avant d'en faire une habitude." },
    ],
  },
  "huile-ricin-noire": {
    origine:
      "L'huile de ricin noire est souvent appelée « Jamaican black castor oil », nom qui rappelle son lien avec la Jamaïque et la diaspora caribéenne. Les graines du ricin sont torréfiées avant d'être transformées, ce qui lui donne sa couleur brun foncé et son odeur fumée caractéristique.\n\nElle est très épaisse, bien plus qu'une huile ordinaire, et s'étale lentement. Elle fait partie des produits transmis de sœur en sœur dans les routines capillaires des cheveux crépus et bouclés de la diaspora, et s'utilise toujours en petite quantité.",
    choisir:
      "Sa couleur sombre et son odeur la distinguent de l'[huile de ricin vierge pressée à froid](/produit/huile-ricin-vierge), claire et plus discrète. Comme elle est dense, on l'associe souvent à une huile plus fluide comme l'[huile de coco vierge](/produit/huile-coco-vierge) ou l'[huile de baobab vierge](/produit/huile-baobab-vierge). Les étiquettes jouent sur le mot jamaïcaine : regardez ce que dit la liste d'ingrédients et le mode de fabrication. Notre [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) donne d'autres idées pour les mélanges.",
    entretien:
      "Gardez le flacon bien fermé, à l'abri de la chaleur et de la lumière. L'huile épaisse laisse facilement des traces sur le goulot : essuyez-le pour éviter qu'il ne colle. Ne mettez pas de gouttes d'eau dans le flacon. Elle peut s'épaissir au frais ; réchauffez-la quelques instants dans la main avant de la verser.",
    pourQui:
      "Elle s'adresse à celles qui ont des cheveux crépus ou bouclés et aiment les routines à l'huile, en bain avant le shampooing. Les personnes qui ne supportent pas l'odeur fumée préféreront la version claire. Un cadeau parlant pour une amie passionnée de soins capillaires, accompagné d'un [bonnet en satin wax](/produit/bonnet-satin-wax) qui protège la coiffure pendant la nuit.\\n\\nElle réclame un peu de méthode : on la répartit par petites mèches, et on la rince soigneusement au shampooing. Le bonnet de nuit en satin protège aussi la taie d'oreiller des traces.",
    faq: [
      { question: "Pourquoi est-elle si épaisse ?", reponse: "C'est la nature de l'huile de ricin, plus dense que les autres huiles végétales. On la dilue souvent avec une huile plus fluide." },
      { question: "Quelle différence avec la ricin vierge ?", reponse: "La noire provient de graines torréfiées, d'où sa couleur et son odeur fumée. La vierge est claire et plus discrète." },
      { question: "Quelle quantité faut-il appliquer ?", reponse: "Très peu : quelques gouttes suffisent, car l'huile est dense et peut vite alourdir les cheveux. Mieux vaut l'étaler dans les mains avant de la répartir, sans insister sur les racines." },
    ],
  },
  "huile-ricin-vierge": {
    origine:
      "Le ricin est une plante des régions chaudes, cultivée depuis longtemps en Afrique, en Inde et ailleurs. Pour cette huile, les graines ne sont pas torréfiées mais pressées à froid : le liquide obtenu est presque incolore, jaune très pâle, et son odeur est discrète.\n\nElle reste très épaisse, avec la même consistance de sirop que sa cousine noire. On la trouve en flacon, parfois en verre, souvent avec une pipette ou un petit applicateur qui facilite le dosage.",
    choisir:
      "Choisissez-la si vous aimez les routines à l'huile mais pas l'odeur fumée de l'[huile de ricin noire](/produit/huile-ricin-noire). Pour un fini plus léger, mélangez-la à l'[huile de sésame vierge](/produit/huile-sesame-vierge) ou à l'[huile de moringa vierge](/produit/huile-moringa-vierge). Surveillez les mentions « vierge », « pressée à froid » et « non raffinée » et le volume du flacon pour votre rythme d'utilisation. Une pipette ou un flacon à bec fin est un vrai confort.",
    entretien:
      "Un flacon en verre fermé, rangé à l'abri de la lumière et de la chaleur, reste le meilleur choix. Essuyez le goulot après usage, car l'huile épaisse colle. Évitez de laisser le flacon près d'une source de chaleur. Comme toute huile végétale, elle supporte mal l'air : un bouchon bien serré prolonge son confort d'usage.",
    pourQui:
      "Elle convient aux personnes qui apprécient les huiles épaisses sur les cheveux ou les pointes, et à celles qui aiment un applicateur précis. Le soir, une petite quantité sur une brosse propre est un geste courant pour les sourcils, avec un test préalable sur le poignet par précaution. Un cadeau utile pour quelqu'un qui aime les routines simples.\\n\\nUn flacon en verre de bonne taille convient à un usage régulier, mais un petit format est plus raisonnable si vous découvrez cette huile. Elle se prête aussi à des mélanges maison, avec une huile plus fluide pour la rendre plus facile à répartir.",
    faq: [
      { question: "Peut-on la mélanger à une autre huile ?", reponse: "Oui, c'est même recommandé : sa densité s'allège avec une huile plus fluide comme le moringa ou le sésame." },
      { question: "Faut-il un test avant de l'appliquer près des yeux ?", reponse: "Par précaution, testez-la sur une petite zone de peau avant tout usage, et évitez le contact direct avec les yeux." },
      { question: "L'huile de ricin vierge a-t-elle une odeur ?", reponse: "Très peu : elle est presque neutre, avec une note légère de graine. C'est l'un des atouts de la version claire, que l'on choisit quand on veut éviter l'odeur fumée de la ricin noire." },
    ],
  },
  "huile-moringa-vierge": {
    origine:
      "Le moringa est un arbre très commun dans les cours et les jardins d'Afrique de l'Ouest, où il porte au Sénégal le nom wolof de « nébédaye ». Ses gousses renferment des graines que l'on presse pour obtenir une huile claire, que l'on a longtemps appelée « huile de ben » avant que le nom de moringa ne s'impose.\n\nL'huile est légère et fluide, de couleur jaune pâle, avec une odeur douce. Elle se conserve bien, ce qui explique sa présence de longue date dans les cosmétiques traditionnels.",
    choisir:
      "Son extrême légèreté la place près de l'[huile de baobab vierge](/produit/huile-baobab-vierge), mais elle est un peu plus fluide encore. Elle diffère de l'[huile d'avocat vierge](/produit/huile-avocat-vierge), épaisse et verte, et de l'[huile de sésame vierge](/produit/huile-sesame-vierge), plus neutre. Choisissez-la si vous aimez les huiles qui disparaissent vite. Contrôlez le nom botanique, Moringa oleifera, et les mentions vierge et première pression. Le [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) propose d'autres comparaisons.",
    entretien:
      "Rangez le flacon à l'abri de la lumière et de la chaleur, bien fermé. Cette huile a la réputation de bien se garder, mais un placard frais reste préférable à une étagère de salle de bain ensoleillée. Une huile qui prend une odeur forte ou rance ne se garde pas : fiez-vous à votre nez.",
    pourQui:
      "Elle s'adresse aux personnes qui veulent une huile quotidienne, discrète, qui ne laisse pas la peau luisante. Quelques gouttes sur le visage ou le corps, seules ou mélangées à une crème, suffisent. Elle peut aussi servir de base pour diluer une huile plus dense. Un cadeau agréable pour qui aime les plantes de nos cours et le mot nébédaye.\\n\\nElle accompagne bien une routine simple : une huile, quelques gouttes, un geste rapide. Son parfum doux ne vient pas concurrencer vos autres produits, ce qui la rend facile à glisser dans une trousse de voyage.",
    faq: [
      { question: "Que signifie nébédaye ?", reponse: "C'est le nom wolof du moringa, un arbre répandu dans les cours et les jardins du Sénégal." },
      { question: "Qu'est-ce que l'huile de ben ?", reponse: "C'est l'ancien nom de l'huile tirée des graines du moringa. On parle aujourd'hui surtout d'huile de moringa." },
      { question: "L'huile de moringa est-elle adaptée au visage ?", reponse: "Elle est légère et on l'utilise souvent sur le visage en gouttes. Par précaution, faites un essai sur une petite zone du poignet ou du cou avant la première application, surtout en cas de peau fragile." },
    ],
  },
  "huile-coco-vierge": {
    origine:
      "La noix de coco pousse sur les côtes tropicales, dont celles d'Afrique de l'Ouest. L'huile vierge s'extrait de la chair fraîche, sans raffinage, ce qui lui garde son parfum gourmand de coco.\n\nSa particularité est de changer d'état : elle est solide et blanche en dessous d'environ vingt-quatre degrés, puis liquide et transparente quand il fait chaud. Un pot de coco peut donc passer de la crème épaisse à l'huile limpide selon la saison, sans que cela change sa nature.",
    choisir:
      "Pour une version toujours liquide et sans odeur, voyez l'[huile de coco fractionnée](/produit/huile-coco-fractionnee), plus fluide en toute saison. Si vous aimez l'idée de la coco mêlée à un beurre, le [baume corps karité et coco](/produit/baume-karite-coco) est plus souple à emporter. Sur l'étiquette, cherchez « vierge » ou « pressée à froid ». Pour plus de textures, consultez le [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps).",
    entretien:
      "Conservez le pot fermé, à l'abri de la chaleur et de la lumière. Un changement entre solide et liquide est normal. Utilisez une cuillère propre et sèche plutôt que les doigts mouillés, car l'eau altère les huiles. En été, un pot qui fond complètement peut reprendre sa forme au frais, avec parfois un aspect un peu granuleux.",
    pourQui:
      "Elle convient aux amatrices d'odeurs gourmandes, à celles qui aiment une huile polyvalente pour le corps, en bain d'huile sur les longueurs avant le shampooing. Elle est aussi appréciée en démaquillage doux. Elle fait un cadeau simple, à associer avec un [beurre de karité fouetté parfumé](/produit/beurre-karite-fouette-parfume) pour un duo tropical.\\n\\nUn pot de coco s'utilise du corps aux cheveux, mais on évite d'en mettre trop sur le visage. Gardez une cuillère dédiée dans le pot pour préserver la propreté et garder l'huile agréable plus longtemps.",
    faq: [
      { question: "Pourquoi l'huile de coco devient-elle solide ?", reponse: "Elle fige quand la température descend sous environ vingt-quatre degrés. Elle redevient liquide à la chaleur de la main." },
      { question: "Que veut dire vierge ?", reponse: "Qu'elle n'a pas été raffinée : elle garde son odeur de coco. Cherchez aussi « pressée à froid » sur l'étiquette." },
      { question: "Peut-on s'en servir pour démaquiller ?", reponse: "C'est un usage courant : on masse un peu d'huile sur la peau sèche, puis on retire avec un coton ou un linge humide. Par précaution, évitez le contour direct des yeux et testez d'abord sur une petite zone." },
    ],
  },
  "huile-coco-fractionnee": {
    origine:
      "L'huile de coco fractionnée dérive de l'huile de coco classique : on en retire la partie qui fige au froid, pour ne garder que la fraction qui reste liquide. Le produit est donc transformé, à la différence d'une huile vierge pressée simplement.\n\nIl en résulte une huile transparente, très fluide, quasiment sans odeur, qui ne se fige jamais, même en hiver. Elle a la sensation d'une huile sèche, qui laisse peu de film sur la peau et sèche vite, ce qui plaît à celles qui n'aiment pas les textures grasses.",
    choisir:
      "Elle diffère nettement de l'[huile de coco vierge](/produit/huile-coco-vierge), solide, parfumée et plus brute. Sa légèreté se rapproche de celle de l'[huile de karité](/produit/huile-karite) et du [moringa](/produit/huile-moringa-vierge). Un flacon avec pompe est plus pratique qu'un goulot ouvert. Elle sert aussi de base neutre à vos huiles parfumées maison : choisissez-la si vous voulez créer un mélange sans odeur de coco qui prenne le dessus.",
    entretien:
      "Gardez le flacon bien fermé, à l'abri de la lumière et de la chaleur. Sa texture reste stable toute l'année, ce qui rend le stockage simple. Si vous y ajoutez un parfum, utilisez des gouttes mesurées et testez le mélange sur une petite zone de peau. Étiquetez votre flacon maison avec la date de préparation.\n\nLe flacon à pompe mérite un coup d'œil de temps en temps : essuyez le bec, qui garde un film d'huile, et refermez-le pour que la poussière ne s'y dépose pas.",
    pourQui:
      "Elle convient à celles qui veulent une huile corps légère, sans odeur de coco, et à celles qui aiment composer leur propre huile parfumée. Après la douche, un peu d'huile suffit sur les bras et les jambes. Elle est pratique en voyage, dans un petit flacon. Un cadeau malin pour une amie qui aime créer ses mélanges maison.\\n\\nElle est idéale pour un massage rapide, ou pour une application sur peau encore humide après la douche. Son fini discret ne marque pas les vêtements, ce qui la rend pratique à tout moment de la journée.",
    faq: [
      { question: "Est-elle la même chose que l'huile de coco classique ?", reponse: "Elle en vient, mais elle est transformée : la partie qui fige a été retirée, d'où sa texture toujours liquide." },
      { question: "Peut-on y ajouter un parfum ?", reponse: "Oui, c'est un usage courant, avec quelques gouttes seulement. Testez le mélange sur une petite zone de peau d'abord." },
      { question: "Quel contenant choisir ?", reponse: "Un flacon avec pompe est le plus confortable : il dose bien et limite le contact avec l'air. Un verre teinté est apprécié pour une conservation à l'abri de la lumière, surtout si vous préparez un mélange parfumé." },
    ],
  },
  "huile-karite": {
    origine:
      "L'huile de karité est la partie liquide du beurre : lorsqu'on sépare ses fractions, on obtient d'un côté une portion solide, de l'autre une huile fluide. Elle est donc issue du même arbre, la savane ouest-africaine, mais ce n'est plus le beurre brut des villages.\n\nSa transformation la rend presque inodore et très fluide, de couleur jaune pâle. On y retrouve l'esprit du karité dans une texture pratique, qui s'étale en un instant et ne demande aucun réchauffement entre les mains.",
    choisir:
      "Elle séduit celles que l'odeur du [beurre de karité brut du Burkina Faso](/produit/beurre-karite-brut-burkina) dérange, tout en voulant rester dans l'univers du karité. Elle est plus fluide que le [karité fouetté sans parfum](/produit/beurre-karite-fouette-nature) et se mélange bien avec l'[huile de baobab vierge](/produit/huile-baobab-vierge). Comme elle est transformée, elle n'est pas un produit brut : lisez la mention de fabrication sur l'étiquette. Le [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) la place parmi les huiles légères.",
    entretien:
      "Rangez le flacon fermé, à l'abri de la chaleur et de la lumière. Une huile liquide est plus exposée à l'air qu'un beurre : refermez le bouchon après chaque usage et gardez-la dans un placard plutôt que sur le bord d'une baignoire. Si l'odeur change nettement, ne la conservez pas.\n\nSi vous la mélangez à d'autres huiles, notez la date de préparation sur le flacon et préparez de petites quantités, que vous utiliserez en quelques semaines plutôt qu'en plusieurs mois.",
    pourQui:
      "Elle convient à celles qui veulent le karité sans la texture ferme, à celles qui cherchent une huile sèche pour le corps après la douche, et à celles qui aiment un éclat léger sur les cheveux. Un choix pratique pour le voyage ou la salle de sport. Un bon cadeau d'initiation pour quelqu'un qui hésite à essayer le karité brut.\\n\\nPour une routine du matin, elle est plus pratique que le beurre : une goutte suffit sur les mains, et les vêtements se passent sans attendre. Elle se range facilement dans une trousse et supporte bien les voyages.",
    faq: [
      { question: "L'huile de karité est-elle brute ?", reponse: "Non, c'est la fraction liquide du beurre, donc une huile transformée, pratique mais différente d'un beurre brut." },
      { question: "Sent-elle comme le beurre brut ?", reponse: "Elle est presque inodore, car la transformation atténue l'odeur de noisette fumée du beurre brut." },
      { question: "Peut-on la mélanger à du beurre de karité ?", reponse: "Oui, c'est un usage courant : quelques gouttes dans un beurre brut le rendent plus facile à étaler. Il suffit de bien mélanger à la main ou de fondre doucement, puis de laisser refroidir le tout." },
    ],
  },
  "huile-nigelle-vierge": {
    origine:
      "La nigelle, ou cumin noir, donne de minuscules graines noires que l'on utilise en cuisine comme en cosmétique, du Maghreb à l'Afrique de l'Ouest et au Moyen-Orient. L'huile, obtenue par pression, est brun doré et dégage une odeur poivrée et puissante, que l'on aime franchement ou pas du tout.\n\nC'est une huile de tradition, présente dans beaucoup de foyers de la diaspora. Sa texture est plus dense qu'une huile légère, et son odeur épicée est bien différente de celle des autres huiles de la boutique.",
    choisir:
      "Son odeur la distingue de toutes les autres huiles : celle de l'[huile de baobab vierge](/produit/huile-baobab-vierge) est presque neutre, celle de l'[huile de sésame vierge](/produit/huile-sesame-vierge) est douce. On l'emploie surtout en petite proportion, mélangée à une huile plus douce comme l'[huile de coco vierge](/produit/huile-coco-vierge). Regardez le nom botanique, Nigella sativa, et choisissez un petit flacon pour tester d'abord son parfum. Le [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) donne des idées de mélanges.",
    entretien:
      "Gardez le flacon fermé, à l'abri de la lumière et de la chaleur ; un flacon en verre foncé est idéal. L'odeur poivrée est puissante et peut s'imprégner dans un placard : placez-le à part. Refermez soigneusement après chaque usage. Si le parfum vire nettement au rance, mieux vaut la remplacer.",
    pourQui:
      "Elle s'adresse à celles qui aiment les huiles de tradition au parfum épicé et à celles qui préparent leurs propres mélanges. Elle ne convient pas à qui n'aime pas les odeurs poivrées. Par précaution, un test sur une petite zone de peau est conseillé avant une première application. Elle peut se glisser, en petit flacon, dans un coffret d'huiles.\\n\\nSa personnalité la destine à un usage en complément plus qu'en huile principale. Un petit flacon suffit pour une longue période, et l'odeur épicée ne passera pas inaperçue : prévenez la personne à qui vous l'offrez.",
    faq: [
      { question: "Peut-on l'utiliser seule ?", reponse: "On la mélange le plus souvent à une huile plus douce, par petites gouttes, vu son odeur marquée." },
      { question: "Pourquoi ce parfum si poivré ?", reponse: "C'est le parfum naturel des graines de nigelle, très épicé et reconnaissable, que l'on apprécie ou non." },
      { question: "Quelle proportion utiliser dans un mélange ?", reponse: "Commencez par peu : quelques gouttes dans une huile douce, puis ajustez selon votre goût de l'odeur. Notez vos dosages pour reproduire un mélange que vous aimez, et testez-le toujours sur une petite zone." },
    ],
  },
  "huile-avocat-vierge": {
    origine:
      "L'avocat est un fruit tropical cultivé dans de nombreuses régions chaudes du monde. Pour cette huile, c'est la pulpe qui est pressée, et non la graine, ce qui lui donne sa belle couleur verte et son odeur végétale.\n\nSa texture est riche, entre l'huile fluide et le beurre fondu, et elle enveloppe la peau d'un voile confortable. Elle convient particulièrement aux saisons froides, quand on veut une huile corps un peu plus consistante que les huiles légères.\n\nOn la reconnaît à ses reflets verts, plus ou moins soutenus selon les récoltes : ce n'est pas un défaut, mais la couleur naturelle de la pulpe.",
    choisir:
      "Elle est plus riche que l'[huile de moringa vierge](/produit/huile-moringa-vierge) et que l'[huile de sésame vierge](/produit/huile-sesame-vierge), plus fluides. Elle se marie très bien avec le karité : fondue avec un [beurre de karité bio non raffiné](/produit/beurre-karite-bio-non-raffine), elle donne un baume maison. Choisissez la mention vierge, une couleur verte franche et un flacon opaque. Le [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) peut vous aider à placer ses voisines.",
    entretien:
      "Conservez le flacon à l'abri de la lumière et de la chaleur, bien refermé. Sa couleur verte vient de la pulpe et peut s'atténuer avec le temps, sans que ce soit forcément un problème. Un trouble ou des dépôts peuvent apparaître au frais. Une odeur de rance indique qu'il faut renoncer à l'huile.\n\nAprès usage, essuyez le goulot et rangez le flacon debout, bouchon vissé. Une huile riche comme celle-ci garde mieux son parfum végétal quand elle n'est pas manipulée avec des doigts humides.",
    pourQui:
      "Elle s'adresse à celles qui aiment les huiles riches en hiver, ou qui préparent leurs baumes maison avec du karité. Sur le corps encore humide, quelques gouttes suffisent. Sur les cheveux épais, une petite quantité en bain d'huile avant le shampooing est un geste habituel. Un cadeau pratique pour celle qui prépare ses cosmétiques maison.\\n\\nElle est un bel allié des baumes maison : fondue avec un beurre, elle donne une texture souple. En bain d'huile sur cheveux épais, on la laisse poser le temps de votre choix, puis on la lave avec un shampooing doux. Le verre teinté la protège bien.",
    faq: [
      { question: "Peut-on la mélanger au karité ?", reponse: "Oui, c'est un usage courant : fondue doucement avec du karité, elle donne un baume maison plus souple." },
      { question: "Pourquoi est-elle verte ?", reponse: "Sa couleur vient de la pulpe de l'avocat, pressée à froid. Elle peut varier d'un lot à l'autre." },
      { question: "L'huile d'avocat est-elle épaisse ?", reponse: "Elle est plus riche qu'une huile légère, sans être aussi dense que le ricin. Sa texture enveloppante se sent surtout sur une peau sèche en hiver. On l'allège volontiers avec une huile plus fluide." },
    ],
  },
  "huile-sesame-vierge": {
    origine:
      "Le sésame est cultivé dans plusieurs pays d'Afrique de l'Ouest, dont le Burkina Faso, qui en est un important producteur. L'huile destinée au corps se tire de graines non grillées, ce qui la distingue de l'huile de sésame toastée de la cuisine, brune et très parfumée.\n\nElle est claire, fluide, d'odeur douce, et s'étale facilement sur toute la surface du corps. Sa texture se situe entre celle d'une huile très légère et d'une huile plus riche, et se prête aux massages longs, grâce à sa glisse.",
    choisir:
      "Sa couleur et son odeur la rendent plus neutre que l'[huile de nigelle vierge](/produit/huile-nigelle-vierge), poivrée, et plus fluide que l'[huile d'avocat vierge](/produit/huile-avocat-vierge). Elle peut servir de base pour diluer l'[huile de ricin vierge](/produit/huile-ricin-vierge). Le point essentiel : vérifiez la mention « non grillée » ou « cosmétique » et ne confondez pas avec l'huile alimentaire toastée. Notre [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) compare ces huiles par texture.",
    entretien:
      "Conservez le flacon fermé, à l'abri de la chaleur et de la lumière, dans un placard. Tiédissez-le entre vos mains avant l'usage plutôt que de le chauffer. Refermez-le soigneusement. Comme toute huile végétale, elle peut rancir si elle reste longtemps exposée à l'air ou à la chaleur : une odeur qui change est le signe à surveiller.",
    pourQui:
      "Elle convient à celles qui aiment les massages du corps à l'huile, et à celles qui veulent une huile douce, sans parfum marqué, pour toute la famille. Une petite quantité suffit sur la peau encore humide après la douche. Un cadeau simple, à joindre à un [coffret d'huiles végétales](/produit/coffret-huiles-vegetales) pour composer un ensemble varié.\\n\\nElle se glisse très bien dans une routine familiale grâce à sa douceur : une même bouteille peut servir à plusieurs personnes. Une huile de sésame cosmétique ne s'utilise pas en cuisine, et inversement : gardez chaque flacon à sa place.",
    faq: [
      { question: "Peut-on utiliser l'huile de sésame alimentaire ?", reponse: "Mieux vaut choisir une huile non grillée ou cosmétique : celle de cuisine est toastée, très parfumée et brune." },
      { question: "Convient-elle au massage ?", reponse: "Sa glisse en fait une huile appréciée pour les massages. Testez-la d'abord sur une petite zone de peau." },
      { question: "Quelle différence avec l'huile de sésame de cuisine ?", reponse: "L'huile de cuisine est souvent toastée : elle est brune et très parfumée. L'huile pour le corps vient de graines non grillées, plus claire et plus douce. Lisez l'étiquette pour ne pas les confondre." },
    ],
  },
};
