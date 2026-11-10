/**
 * Fiches détaillées de la rubrique « Coffrets, cadeaux et objets wax » (20 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 */
import type { FicheLongue } from "../types";
export const SLUGS = [
  "coffret-thiouraye-encensoir",
  "coffret-thiouraye-bine-bine",
  "coffret-soins-karite",
  "ecrin-bine-bine",
  "bougie-parfumee-oud-ambre",
  "coffret-bougies-parfumees",
  "trousse-toilette-wax",
  "panier-senegalais-tresse",
  "pagne-wax-6-yards",
  "coupon-bazin-riche",
  "foulard-tete-wax",
  "sac-cabas-wax",
  "coffret-huiles-vegetales",
  "coffret-savon-noir-karite",
  "calebasse-decorative-gravee",
  "housse-coussin-wax",
  "carnet-couverture-wax",
  "bracelet-perles-krobo",
  "eventail-wax",
  "coffret-bakhour-brule-parfum",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {
  "coffret-thiouraye-encensoir": {
    origine:
      "Le thiouraye est l'encens des maisons sénégalaises : un mélange parfumé de bois et de résines, que l'on chauffe sur un charbon pour que sa fumée embaume la pièce, les vêtements et les draps. Dans la tradition du djongué (l'art de la séduction et de l'accueil transmis aux femmes avant le mariage, expliqué dans [Qu'est-ce que le djongué ?](/conseils/qu-est-ce-que-le-djongue)), il tient une place de choix. Ce coffret rassemble le parfum, le récipient et le charbon, c'est-à-dire tout ce qu'il faut pour commencer.\n\nL'encensoir, lui, est un petit brasero de terre cuite ou de métal : on le choisit autant pour sa forme que pour sa résistance à la chaleur. Les mots wolof sont expliqués dans le [lexique](/lexique).",
    choisir:
      "Un coffret est avant tout un cadeau d'initiation. Si la personne possède déjà un encensoir, mieux vaut lui offrir un pot de [thiouraye en bocal](/produit/thiouraye-en-bocal) ou un [assortiment de sachets](/produit/thiouraye-assortiment-sachets), qui permettent de comparer les parfums. Si vous voulez une fabrication plus soignée du récipient, regardez l'[encensoir en laiton ciselé](/produit/encensoir-laiton-cisele) vendu seul.\n\nLe [coffret thiouraye avec encensoir](/produit/thiouraye-coffret-avec-encensoir) de la rubrique thiouraye est très proche : comparez la présentation et la matière de l'encensoir plutôt que le nom. Notre [Top 10 des thiouraye artisanaux](/top-10/thiouraye-artisanaux) aide à juger la qualité du parfum.",
    entretien:
      "Laissez l'encensoir refroidir complètement avant de le ranger, puis videz les cendres froides. Un lit de sable au fond protège la terre cuite et le support : le [sable pour encensoir](/produit/sable-pour-encensoir) a précisément cet usage. Conservez le thiouraye dans son pot bien fermé, à l'abri de l'humidité et de la lumière, pour que son parfum ne s'évente pas.\n\nGardez les charbons au sec : un charbon humide s'allume mal et fume davantage. Utilisez une [pince à charbon](/produit/pince-charbon-encens) plutôt que les doigts.",
    pourQui:
      "Ce coffret s'adresse à celle qui veut parfumer sa maison à la sénégalaise sans rien connaître de l'encens : jeune mariée, nouvelle arrivée dans un appartement, ou amie curieuse de vos traditions. Il convient très bien à un mariage, à une crémaillère ou à un anniversaire.\n\nC'est aussi un beau cadeau pour une mère ou une tante, qui retrouvera un geste familier. Joignez un petit mot expliquant comment allumer le charbon, car l'usage se transmet autant par la parole que par l'objet.",
    faq: [
      { question: "Faut-il un encensoir spécial pour le thiouraye ?", reponse: "Il faut un récipient qui résiste à la chaleur, car le charbon y reste allumé. Le coffret en fournit un. Posez-le toujours sur un support qui ne craint pas la chaleur, loin des tissus." },
      { question: "Le coffret convient-il à un appartement ?", reponse: "Oui, à condition d'aérer et de n'utiliser qu'une petite pincée à la fois. Surveillez toujours le charbon. Si la fumée vous gêne, la [bougie parfumée oud et ambre](/produit/bougie-parfumee-oud-ambre) offre des senteurs boisées sans charbon." },
    ],
  },
  "coffret-thiouraye-bine-bine": {
    origine:
      "Deux objets de la tradition sénégalaise se retrouvent ici : le thiouraye, encens à base de bois et de résines, et le bine-bine, rang de perles porté à la taille. Ils appartiennent tous deux à l'univers du djongué, la culture de la séduction et de l'élégance que les femmes se transmettent, notamment avant le mariage. L'un parfume, l'autre pare : ensemble, ils racontent un même art de prendre soin de soi et des siens.\n\nVous pouvez lire [Djongué et traditions du mariage](/conseils/djongue-et-traditions-du-mariage) pour situer ces cadeaux dans les célébrations qui les accompagnent.\n\nOffrir ce duo, c'est offrir une façon d'entrer dans une tradition par deux sens à la fois : l'odorat et la vue. Beaucoup de femmes de la diaspora racontent avoir reçu leur premier bine-bine et leur premier thiouraye d'une tante ou d'une grand-mère. Un coffret fait main prolonge ce geste de transmission, avec la touche personnelle de la créatrice.",
    choisir:
      "Ce coffret est souvent composé à la main par des créatrices : la vraie question est donc celle de la personnalisation. Précisez les couleurs de perles et le parfum souhaité. Si vous préférez choisir chaque élément séparément, partez d'un [bine-bine à rocaille rouge et or](/produit/bine-bine-rocaille-rouge-or) et d'un [thiouraye au santal](/produit/thiouraye-au-santal) : vous maîtrisez alors l'assortiment exact.\n\nPour un cadeau plus riche en objets, l'[écrin de bine-bine](/produit/ecrin-bine-bine) met la parure en avant, tandis que le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir) met l'encens à l'honneur.",
    entretien:
      "Rangez les perles dans une pochette, à plat, loin de l'humidité et des produits parfumés qui pourraient abîmer le fil. Retirez le rang avant la douche et le sport. Le thiouraye se garde dans son pot fermé, au sec : son parfum se conserve ainsi plus longtemps.\n\nSi le fil du bine-bine casse, les perles se renfilent. Notre [Top 10 pour débuter en bine-bine](/top-10/bine-bine-debuter) donne des repères simples pour comprendre le montage.",
    pourQui:
      "Ce coffret fait un cadeau de mariage très juste, pour une future mariée ou pour une invitée qui souhaite marquer le moment. Il convient aussi à un anniversaire, ou à une fille de la diaspora désireuse de renouer avec les gestes de sa famille.\n\nPrévoyez du temps : une pièce composée sur demande demande un délai de fabrication. Pensez à demander les couleurs à la créatrice avant de commander plutôt qu'après.",
    faq: [
      { question: "Peut-on choisir les couleurs des perles ?", reponse: "Beaucoup de créatrices acceptent de composer le coffret à la demande. Contactez-la avant l'achat pour préciser les couleurs et le parfum souhaités, et vérifiez le délai annoncé." },
      { question: "Que signifie djongué ?", reponse: "C'est un mot wolof qui désigne l'art de la séduction, de l'élégance et de l'accueil, que les femmes se transmettent. Le [lexique](/lexique) et l'article [Qui transmet le djongué ?](/conseils/qui-transmet-le-djongue) l'expliquent en détail." },
      { question: "Le coffret convient-il à une première découverte ?", reponse: "Oui. Il réunit les deux objets les plus emblématiques et permet de découvrir l'encens comme la parure sans acheter séparément. Joignez un mot sur la manière d'utiliser chacun." },
    ],
  },
  "coffret-soins-karite": {
    origine:
      "Le karité est un beurre végétal tiré de l'amande de l'arbre du même nom, qui pousse dans les savanes d'Afrique de l'Ouest. Il est depuis longtemps utilisé dans la région pour la beauté et le confort de la peau, et son travail est très souvent le fait de femmes, notamment en coopérative. Un coffret réunit plusieurs formes de ce produit pour en découvrir les textures.\n\nLe contenu varie beaucoup d'un coffret à l'autre : beurre, crème, savon, lait. C'est ce qui rend utile de bien lire la composition annoncée avant d'acheter.",
    choisir:
      "Le choix tient d'abord à la composition : un coffret riche en karité et peu parfumé ne se compare pas à un coffret surtout parfumé. Pour goûter la matière brute, le [beurre de karité brut du Burkina](/produit/beurre-karite-brut-burkina) ou le [beurre non raffiné bio](/produit/beurre-karite-bio-non-raffine) se vendent seuls et permettent de juger l'odeur et la texture.\n\nSi la personne aime les textures légères, le [beurre de karité fouetté nature](/produit/beurre-karite-fouette-nature) est plus aérien. Notre [Top 10 des beurres de karité non raffinés](/top-10/beurres-karite-non-raffines) aide à comparer les produits.",
    entretien:
      "Gardez les pots fermés, à l'abri de la chaleur et du soleil : un beurre trop chaud devient granuleux en refroidissant, sans que cela change son usage. Utilisez des doigts propres ou une petite spatule pour éviter d'introduire de l'eau dans le pot.\n\nSi le coffret comprend un savon, laissez-le sécher sur un porte-savon égoutté. Pour les autres produits, suivez la date et les conseils indiqués sur l'emballage.",
    pourQui:
      "Ce coffret convient à presque tout le monde : une mère, une amie, une collègue, une jeune mariée. C'est un cadeau d'attention et de confort, que l'on offre à Noël, pour une fête des mères ou un anniversaire.\n\nIl se prête bien à une composition de cadeau plus large : une [trousse de toilette en wax](/produit/trousse-toilette-wax) peut lui servir d'emballage et rester utile longtemps.\n\nSi le coffret comprend un savon, regardez sa composition et la présence éventuelle de parfum : certaines personnes préfèrent un produit sans odeur. Pensez aussi au mode d'emploi, qui varie beaucoup d'un produit à l'autre : un petit mot qui résume la façon de s'en servir est toujours bien accueilli. Un coffret bien choisi se garde longtemps sur une étagère de salle de bain.",
    faq: [
      { question: "Le karité d'un coffret est-il toujours pur ?", reponse: "Non. La part de karité varie selon les coffrets. Lisez la liste des ingrédients, qui renseigne aussi sur le parfum et les huiles ajoutées." },
      { question: "Comment utiliser le beurre de karité ?", reponse: "On le réchauffe entre les paumes avant de l'appliquer en petite quantité sur les mains, le corps ou les pieds. C'est un produit de confort et de beauté." },
    ],
  },
  "ecrin-bine-bine": {
    origine:
      "Le bine-bine, ou perles de taille, est un rang de perles porté à la taille, discrètement sous les vêtements. Au Sénégal, il fait partie des parures de la femme et se transmet souvent d'une génération à l'autre. L'écrin ou la pochette qui l'accueille est ici moins un détail qu'un geste : on offre un bine-bine comme on remet un bijou, avec soin.\n\nPour comprendre la place de cette parure dans la culture sénégalaise, lisez notre article [Origine et symbolique des bine-bine](/conseils/origine-et-symbolique-des-bine-bine).",
    choisir:
      "Regardez trois choses : la longueur, le montage (fil à nouer ou fermoir) et le choix des couleurs. Un fil à nouer, comme sur le [bine-bine à rocaille rouge et or](/produit/bine-bine-rocaille-rouge-or), se règle exactement. Un [bine-bine à fermoir et chaînette](/produit/bine-bine-fermoir-chainette) s'ouvre sans nœud, plus pratique au quotidien.\n\nSi vous hésitez sur les teintes, un [bine-bine multicolore élastique](/produit/bine-bine-elastique-multicolore) permet d'en essayer plusieurs. Notre [Top 10 pour débuter en bine-bine](/top-10/bine-bine-debuter) détaille ces choix.\n\nPensez aussi au moment de l'offrir. Pour un mariage, un ensemble de rangs aux couleurs assorties de la robe ou de la fête a du sens. Pour un anniversaire, un seul rang aux couleurs préférées de la personne suffit. Si vous ne connaissez pas ses goûts, le blanc, le doré et le multicolore s'accordent avec presque tout et évitent les erreurs.",
    entretien:
      "Rangez les rangs à plat dans leur écrin, sans les enrouler serré, pour éviter les nœuds et les frottements. Évitez l'eau, la crème et les parfums, qui fragilisent le fil plus vite que les perles de verre. Un chiffon sec suffit à les essuyer.\n\nUne [pochette en wax pour bine-bine](/produit/bine-bine-pochette-wax) est un complément pratique si vous voulez les emporter en voyage.",
    pourQui:
      "L'écrin de bine-bine convient à un cadeau de mariage, d'anniversaire ou de fête entre amies. Il plaît à celle qui aime la parure traditionnelle comme à celle qui la découvre et veut un beau premier présent.\n\nOffrez-le avec un mot sincère plutôt qu'une explication : le bine-bine est un objet que l'on confie, sans en faire un spectacle. Plusieurs rangs aux couleurs assorties composent un cadeau plus généreux.",
    faq: [
      { question: "Quelle est la différence avec un simple bine-bine ?", reponse: "Le rang est le même type de parure. Ici, c'est la présentation qui change : un écrin ou une pochette en tissu rend le cadeau prêt à offrir." },
      { question: "Combien de rangs faut-il offrir ?", reponse: "Un seul suffit pour commencer. Beaucoup de personnes en portent plusieurs aux couleurs assorties, ce que vous pouvez composer selon vos envies." },
      { question: "Que mettre dans l'écrin en plus des perles ?", reponse: "Un petit mot écrit à la main suffit. Vous pouvez aussi ajouter un sachet de [thiouraye en bocal](/produit/thiouraye-en-bocal) pour un cadeau qui parle aux deux sens." },
    ],
  },
  "bougie-parfumee-oud-ambre": {
    origine:
      "L'oud, l'ambre et les bois chauds sont des notes très présentes dans les parfums d'Orient et d'Afrique de l'Ouest, et dans les encens que l'on brûle chez soi, comme le [thiouraye au oud](/produit/thiouraye-au-oud). Une bougie reprend cette famille de senteurs sans passer par le charbon : on allume la mèche, la cire fond, le parfum se diffuse.\n\nElle ne remplace pas l'encens traditionnel, dont le geste et la fumée sont une part du rituel, mais elle s'en inspire pour une ambiance proche, plus facile à vivre en appartement.",
    choisir:
      "Pour une odeur boisée avec plus de fumée, rapprochez-vous du [bakhour à l'oud en copeaux](/produit/bakhour-oud-copeaux), qui demande un brûle-parfum. Si vous voulez varier les senteurs, le [coffret de bougies parfumées boisées](/produit/coffret-bougies-parfumees) offre plusieurs parfums plutôt qu'un seul.\n\nAu moment de choisir, regardez la cire (une cire végétale est souvent préférée), le contenant en verre ou en céramique, et la mèche en coton. Une bougie en céramique paraît plus décorative, une bougie en verre se manipule plus facilement.",
    entretien:
      "Laissez la cire fondre jusqu'au bord à la première utilisation : elle évite que la bougie ne creuse un tunnel. Taillez la mèche avant chaque allumage et éteignez la flamme avant de quitter la pièce. Placez la bougie sur une surface stable, loin des rideaux et des courants d'air.\n\nGardez-la à l'abri de la chaleur et de la lumière, couvercle fermé si elle en a un, pour préserver son parfum.",
    pourQui:
      "Cette bougie plaira à celles et ceux qui aiment les ambiances chaleureuses mais ne veulent pas de charbon : un cadeau idéal pour une crémaillère, un anniversaire ou un soir d'hiver. Elle convient aussi comme présent de remerciement, car elle n'oblige à rien.\n\nSi la personne reçoit déjà du thiouraye, elle fera un joli complément. Elle se glisse sans peine dans un [panier sénégalais tressé](/produit/panier-senegalais-tresse) garni.\n\nElle a l'avantage de plaire à des goûts très différents : ceux qui connaissent les parfums boisés l'apprécieront, ceux qui les découvrent y trouveront une porte d'entrée douce. En hiver, elle crée une atmosphère de salon chaleureuse. Pour un cadeau de bienvenue ou de remerciement, elle reste une valeur sûre, que l'on peut offrir seule ou avec un petit objet de décoration.",
    faq: [
      { question: "Une bougie remplace-t-elle l'encens ?", reponse: "Non. Elle évoque des senteurs voisines, mais sans la fumée ni le geste du charbon. C'est une alternative simple, pas un équivalent." },
      { question: "Où la placer dans la maison ?", reponse: "Sur une surface stable et sans courant d'air, loin des rideaux. Dans le salon ou la chambre, elle ne doit jamais rester allumée sans surveillance." },
      { question: "Quelle durée de combustion prévoir ?", reponse: "Elle dépend du produit et de la taille du pot. Quelques heures d'affilée suffisent, puis on éteint pour laisser la cire refroidir." },
    ],
  },
  "coffret-bougies-parfumees": {
    origine:
      "Un coffret de bougies parfumées rassemble plusieurs senteurs en petits formats : santal, ambre, vanille, fleur d'oranger ou jasmin selon la composition. Ces notes chaudes et florales sont celles que l'on retrouve aussi dans les encens et parfums d'intérieur appréciés en Afrique de l'Ouest et au Maghreb.\n\nL'avantage du coffret tient à la découverte : on essaie plusieurs parfums sans en acheter un grand pot, puis on retient celui qui nous ressemble le plus.\n\nL'usage des bougies parfumées dans la maison est devenu un geste de détente répandu partout. Les familles de senteurs boisées et ambrées, très appréciées dans la diaspora, rappellent les encens que l'on brûle pour accueillir. Un coffret permet de composer une petite collection, et chaque parfum se prête à un moment différent de la journée.",
    choisir:
      "Un coffret convient mieux qu'une seule bougie quand on ne connaît pas les goûts de la personne. Pour un parfum unique et affirmé, la [bougie parfumée oud et ambre](/produit/bougie-parfumee-oud-ambre) est plus tranchée. Pour une ambiance proche des encens, regardez aussi le [bakhour à l'ambre](/produit/bakhour-ambre).\n\nVérifiez la nature de la cire (les cires végétales sont souvent préférées), la mèche en coton et la tenue des petits pots en verre.",
    entretien:
      "Chaque bougie s'utilise séparément : allumez-en une à la fois et laissez la cire fondre en surface. Taillez la mèche, tenez-la loin des tissus et ne la laissez jamais brûler sans surveillance. Éteignez-la pour la laisser refroidir avant de la déplacer.\n\nGardez les autres bougies à l'abri de la chaleur et de la lumière, pour que leur parfum reste intact jusqu'à leur tour.",
    pourQui:
      "Ce coffret est un cadeau polyvalent : pour une hôtesse, une collègue, une amie qui aime décorer sa maison. Il convient à Noël, à une crémaillère, à une fête des mères.\n\nSi vous voulez enrichir l'ensemble, associez-le à un [coffret de soins au karité](/produit/coffret-soins-karite) pour composer un moment de détente complet, ou à une [housse de coussin en wax](/produit/housse-coussin-wax).\n\nLe coffret se glisse facilement dans un colis ou un sac cadeau, ce qui le rend commode à envoyer à distance. Au moment de choisir, pensez aux goûts de la personne : un parfum fleuri plaît à celles qui aiment le frais, un parfum de vanille ou d'ambre à celles qui préfèrent le chaud. L'ensemble convient très bien à un cadeau d'hôtesse.",
    faq: [
      { question: "Peut-on allumer plusieurs bougies à la fois ?", reponse: "Oui, si elles sont à bonne distance et sur une surface stable, mais plusieurs parfums mélangés peuvent se concurrencer. Mieux vaut en choisir un par pièce." },
      { question: "Comment choisir son parfum préféré ?", reponse: "Allumez une bougie différente selon le moment de la journée, puis gardez celle qui vous donne envie de la rallumer. Le coffret sert précisément à cela." },
      { question: "Les parfums sont-ils tous boisés ?", reponse: "Pas forcément. Les compositions mêlent souvent bois, ambre, vanille et fleurs. Lisez la liste des senteurs pour choisir celle qui correspond à la personne." },
    ],
  },
  "trousse-toilette-wax": {
    origine:
      "Le wax est ce tissu de coton imprimé aux motifs vifs que l'on associe à l'Afrique de l'Ouest, même si son histoire est faite d'échanges entre plusieurs continents. Il est devenu un tissu du quotidien, cousu en robes, en sacs et en accessoires. Une trousse de toilette en wax prolonge cet usage dans la salle de bain, avec une doublure facile à nettoyer.\n\nElle est souvent cousue par de petits ateliers, au Sénégal comme en France : c'est un objet utile qui garde l'identité du tissu.",
    choisir:
      "Le choix tient à la taille, à la doublure et au motif. Une petite pochette suffit pour les produits de soin que l'on glisse dans un sac, un grand vanity pour un voyage. Si vous cherchez un accessoire plus large, le [sac cabas en wax](/produit/sac-cabas-wax) prend plus de place, tandis que la [pochette en wax pour bine-bine](/produit/bine-bine-pochette-wax) est plus petite et dédiée aux perles.\n\nChoisissez un motif qui s'accorde avec ce que vous voulez y glisser : les teintes se marient bien avec l'ivoire d'un [coffret savon noir et karité](/produit/coffret-savon-noir-karite).",
    entretien:
      "Lavez la trousse à l'eau froide, à la main ou en cycle délicat, et laissez-la sécher ouverte pour que la doublure ne garde pas d'humidité. Évitez le sèche-linge, qui fatigue les coutures et la couleur.\n\nSi des produits ont coulé à l'intérieur, essuyez-les rapidement avec un chiffon humide : la doublure se nettoie plus facilement tant qu'elle n'est pas sèche.",
    pourQui:
      "La trousse est un petit cadeau coloré qui plaît à tout âge : une voyageuse, une étudiante, une amie à qui l'on veut offrir un peu de wax. Elle est utile, donc elle est vraiment portée.\n\nElle se garnit très bien : glissez-y un pot de beurre ou une huile pour faire un cadeau complet, ou offrez-la seule avec un joli mot. Elle convient pour un anniversaire, un départ en vacances ou un cadeau de remerciement.\n\nElle séduit aussi celles qui aiment soutenir de petites créatrices : un modèle cousu en atelier a un caractère que ne possède pas un produit de série. Elle se range sans peine dans un sac ou un bagage et reste utile des années, pour les soins comme pour des petits objets du quotidien. C'est un cadeau qui plaît parce qu'on s'en sert.",
    faq: [
      { question: "Un wax est-il toujours en coton ?", reponse: "En principe oui, mais certains tissus imprimés d'apparence similaire ne le sont pas. Vérifiez la composition annoncée dans la fiche." },
      { question: "Peut-on la glisser dans un bagage cabine ?", reponse: "Elle-même oui, mais le contenu dépend de la compagnie, qui limite les liquides. Renseignez-vous avant de partir." },
      { question: "Quelle taille choisir ?", reponse: "Une petite pochette suffit pour quelques produits. Un grand format convient pour un voyage ou pour un coffret entier. Vérifiez les dimensions indiquées avant de commander." },
    ],
  },
  "panier-senegalais-tresse": {
    origine:
      "Les paniers tressés sénégalais sont réalisés à la main, souvent par des vannières, et leurs motifs géométriques sont facilement reconnaissables. Ils associent des fibres végétales à des lanières de plastique coloré, ce qui leur donne une allure vive et une grande solidité.\n\nDans les maisons, on s'en sert pour ranger le linge, les tissus ou les petits objets, et ils servent aussi d'écrin pour offrir un trousseau ou un cadeau de fête. Chaque pièce est unique, car la main de l'artisane se lit dans le tressage.\n\nLa vannerie est un savoir-faire ancien dans plusieurs régions du Sénégal, avec des centres de production connus comme la région de Thiès. L'usage de lanières de plastique recyclé est plus récent : il prolonge le travail traditionnel en utilisant des matériaux disponibles, et donne des couleurs qui résistent bien. Le résultat est un objet léger, vif et durable.",
    choisir:
      "Le choix se fait sur la taille, le couvercle et les motifs. Un panier avec couvercle protège son contenu, un panier ouvert se prête mieux à la décoration. Pour garnir un panier-cadeau, associez-le à un [coupon de bazin riche](/produit/coupon-bazin-riche) ou à un [pagne de wax de 6 yards](/produit/pagne-wax-6-yards).\n\nSi vous préférez un objet plus sobre, la [calebasse décorative gravée](/produit/calebasse-decorative-gravee) offre une matière naturelle, et le [sac cabas en wax](/produit/sac-cabas-wax) un usage plus mobile.",
    entretien:
      "Dépoussiérez le panier avec un chiffon sec ou une brosse douce. Évitez l'eau, qui peut déformer les fibres, et ne le laissez pas en plein soleil, qui ternit les couleurs. Si une tache apparaît, tamponnez-la avec un chiffon à peine humide.\n\nNe le chargez pas de poids excessif : l'ouvrage tient mieux quand il est utilisé pour des objets légers à moyens.",
    pourQui:
      "Ce panier est un cadeau de maison : crémaillère, mariage, naissance. Il se garnit d'encens, de soins, de tissus ou de petites gourmandises pour devenir un panier cadeau complet.\n\nIl convient à celle qui aime l'artisanat et les objets qui racontent un savoir-faire. Gardez-le ensuite pour ranger des tissus ou le décor d'un salon : il n'est pas jeté après le cadeau.",
    faq: [
      { question: "Les couleurs peuvent-elles déteindre ?", reponse: "Cela dépend du produit. Évitez l'eau et les frottements sur des tissus clairs, et testez d'abord sur un petit coin." },
      { question: "Peut-on y mettre des plantes ?", reponse: "Sans protection, l'humidité abîmerait les fibres. Si vous voulez l'utiliser ainsi, glissez un pot ou un film à l'intérieur." },
      { question: "Le panier est-il imperméable ?", reponse: "Non. Les fibres craignent l'eau prolongée. Utilisez-le à l'intérieur, pour du linge, des tissus ou de petits objets." },
    ],
  },
  "pagne-wax-6-yards": {
    origine:
      "Le pagne est un morceau de tissu que l'on drape ou que l'on fait coudre. En Afrique de l'Ouest, offrir un pagne est un geste ancien, que l'on retrouve lors des mariages, des naissances et des fêtes. Le wax, le plus répandu, est un coton imprimé aux motifs vifs, dont l'histoire passe par l'Indonésie et l'Europe avant de s'enraciner en Afrique.\n\nAvec 6 yards, soit environ 5,50 mètres, on dispose de quoi tailler une tenue complète. La personne qui le reçoit choisit ensuite le modèle à coudre.\n\nLe wax a gagné l'Afrique de l'Ouest au XIXe siècle par le commerce, avant d'être adopté, réinventé et revendiqué comme un tissu de la région. Les motifs portent souvent des noms, des significations et des usages propres à chaque pays. Offrir un pagne, c'est aussi offrir un motif, que l'on choisira pour sa couleur ou ce qu'il évoque.",
    choisir:
      "Le choix tient à la qualité du coton et au motif. Vérifiez la composition annoncée : certains tissus imprimés ne sont pas en coton. Pour une occasion plus solennelle, le [coupon de bazin riche](/produit/coupon-bazin-riche) a un éclat différent, plus raide et plus brillant.\n\nSi vous voulez offrir quelque chose de plus rapide à porter, regardez le [foulard de tête en wax](/produit/foulard-tete-wax) ou le [petit pagne wax brodé](/produit/petit-pagne-wax-brode).",
    entretien:
      "Lavez le tissu avant de l'envoyer au couturier : cela évite les surprises au premier lavage, notamment le rétrécissement ou la décoloration. Utilisez l'eau froide ou tiède, séchez à l'ombre et repassez à l'envers.\n\nPliez le pagne sans écraser les plis toujours au même endroit, et rangez-le à l'abri de l'humidité. Si vous le gardez longtemps avant la couture, déployez-le de temps en temps.",
    pourQui:
      "Ce pagne s'adresse à celle qui aime la couture sur mesure : une future mariée, une jeune maman, une amie qui prépare une fête. Il se présente dans un [panier sénégalais tressé](/produit/panier-senegalais-tresse) ou noué d'un ruban.\n\nPensez à demander à la personne ses préférences de couleurs ou de motifs, car le choix du tissu est très personnel. Le cadeau est apprécié justement parce qu'il laisse la liberté du modèle.",
    faq: [
      { question: "Qu'est-ce qu'un yard ?", reponse: "C'est une unité de longueur anglo-saxonne, de l'ordre de 91 centimètres. Six yards donnent donc environ 5,50 mètres de tissu." },
      { question: "Peut-on utiliser le pagne sans le coudre ?", reponse: "Oui, il peut se draper ou se nouer. Beaucoup préfèrent le faire coudre pour obtenir une tenue qui tombe bien." },
      { question: "Quelle différence avec un petit pagne ?", reponse: "Le pagne de 6 yards est un tissu entier à faire coudre. Un petit pagne, comme le [petit pagne wax brodé](/produit/petit-pagne-wax-brode), est plus court et plus proche de l'usage d'intérieur." },
    ],
  },
  "coupon-bazin-riche": {
    origine:
      "Le bazin riche est un damassé de coton haut de gamme, reconnaissable à son éclat et à sa tenue. En Afrique de l'Ouest, notamment au Sénégal et au Mali, c'est le tissu des grandes occasions : on le fait coudre en grand boubou ou en tenue de cérémonie.\n\nUn coupon désigne la longueur de tissu prête à être confiée à un couturier.",
    choisir:
      "Le bazin se distingue du wax par son aspect uni et brillant : le [pagne de wax de 6 yards](/produit/pagne-wax-6-yards) a des motifs imprimés, tandis que le bazin se porte pour son lustre et sa tenue. Le choix de la couleur compte beaucoup : blanc, bleu roi, fuchsia, vert ou saumon, selon l'occasion et la personne.\n\nSi vous voulez un vêtement déjà prêt, le [petit pagne bazin brodé](/produit/petit-pagne-bazin-brode) ou le [caftan intérieur en bazin](/produit/caftan-interieur-bazin) sont des options plus immédiates.\n\nLa couleur donne le ton du cadeau. Un blanc évoque la pureté des cérémonies, un bleu roi ou un vert affirment la solennité, un fuchsia ou un saumon sont plus festifs. Pensez à vérifier si le coupon est vendu en une seule pièce de la longueur annoncée, car le couturier a besoin de tout le tissu pour un grand boubou. Si possible, demandez à la personne ses couleurs préférées.",
    entretien:
      "Lavez le bazin à l'eau froide, à la main, pour préserver sa couleur. Évitez les produits agressifs et le sèche-linge. Faites sécher à l'ombre et repassez à l'envers, à température adaptée.\n\nPour la conservation avant couture, pliez le coupon sans le serrer et gardez-le dans un tissu propre. Évitez le contact direct avec le soleil, qui peut faire pâlir les teintes sombres.",
    pourQui:
      "Ce coupon est le cadeau de celles et ceux qui préparent une fête : mariage, baptême, Tabaski. Offrir de quoi coudre une tenue neuve est un geste très apprécié, d'autant qu'il laisse choisir le modèle.\n\nOffrez-le assez tôt, car les couturiers sont très demandés avant les fêtes. Une carte avec quelques mots d'affection rendra le cadeau plus personnel.",
    faq: [
      { question: "Qu'est-ce que la Tabaski ?", reponse: "C'est la fête musulmane du mouton, très suivie au Sénégal : on y étrenne volontiers une tenue neuve, d'où l'usage d'offrir du tissu." },
      { question: "Combien de tissu faut-il pour une tenue ?", reponse: "Un coupon d'environ 5 mètres suffit en général pour une tenue complète, mais cela dépend du modèle. Demandez conseil à votre couturier." },
      { question: "Le bazin se repasse-t-il facilement ?", reponse: "Oui, à température adaptée et à l'envers. Un tissu bien repassé retrouve son éclat. Évitez la vapeur directe sur les teintes foncées." },
    ],
  },
  "foulard-tete-wax": {
    origine:
      "Se nouer la tête dans un foulard est un art très ancien en Afrique de l'Ouest, avec des noms et des formes variés selon les régions. Les grandes élégantes en font un accessoire de cérémonie, noué en turban ou en volume. Le wax, avec ses motifs vifs, s'y prête bien, car il se plie et tient les nœuds.\n\nLe foulard accompagne autant le quotidien que la fête : une façon simple de mettre de la couleur dans une tenue.\n\nChaque région, chaque famille, chaque génération a ses façons de nouer un foulard. Le tissu se retrouve lors des cérémonies et des fêtes, où le nœud fait partie de l'élégance. Un foulard en wax reprend ce geste avec des motifs que l'on peut assortir à une robe ou un boubou.",
    choisir:
      "Choisissez d'abord la longueur et la matière. Certains modèles sont doublés de satin, d'autres sont en wax simple. Si vous voulez un accessoire pour la nuit, le [bonnet en satin et wax](/produit/bonnet-satin-wax) est plus adapté. Pour compléter une tenue de cérémonie, l'[éventail en wax](/produit/eventail-wax) peut s'assortir au même motif.\n\nL'idéal est d'assortir le motif à un [pagne de wax](/produit/pagne-wax-6-yards) pour composer une tenue.",
    entretien:
      "Repassez le foulard avant de le nouer pour obtenir des plis nets. Lavez-le à 30 °C, de préférence à la main, et faites-le sécher à l'ombre pour préserver les couleurs. Évitez l'eau de Javel et le sèche-linge.\n\nPour garder la forme des nœuds, rangez-le plié à plat ou roulé, plutôt que froissé au fond d'un sac.",
    pourQui:
      "Le foulard est un cadeau sans risque : il n'a pas de taille à deviner. Il convient à une amie, une sœur, une mère, ou à une invitée de mariage qui aime les accessoires. Il convient aussi comme petit présent d'un voyage ou d'un séjour.\n\nVous pouvez le plier dans un carnet ou une trousse en wax, ou l'ajouter à un cadeau plus large. Les tutoriels de nœuds se trouvent facilement en ligne pour accompagner votre geste.\n\nPour offrir plus qu'un simple tissu, accompagnez le foulard d'un petit mot indiquant une façon de le nouer, ou d'un lien vers un tutoriel que vous aimez. Le wax est solide et supporte bien les nœuds répétés. Si la personne porte souvent des couleurs unies, choisissez un motif plus vif ; si elle préfère l'imprimé, un foulard sobre fera un beau contraste.",
    faq: [
      { question: "Existe-t-il une taille ?", reponse: "Non, un foulard se noue à la taille de la tête. C'est ce qui le rend facile à offrir." },
      { question: "Peut-on le porter comme bandeau ?", reponse: "Oui, il se noue en bandeau, en turban ou en nœud volumineux, selon le style que l'on cherche." },
      { question: "Comment faire un nœud volumineux ?", reponse: "Il faut un foulard long, un peu de pratique et un repassage préalable. Beaucoup de tutoriels montrent les étapes pas à pas." },
    ],
  },
  "sac-cabas-wax": {
    origine:
      "Le sac cabas est un grand sac de tous les jours, solide, que l'on remplit pour les courses, le bureau ou la plage. En wax, il prend les couleurs vives du tissu ouest-africain, et il est souvent cousu en petite série par des créatrices, avec une doublure unie et parfois une poche intérieure.\n\nIl illustre une tendance simple : utiliser le wax au quotidien, pas seulement les jours de fête.\n\nLe sac cabas en wax appartient à une famille d'accessoires qui font entrer le tissu ouest-africain dans la vie courante. Beaucoup de créatrices de la diaspora en font l'un de leurs produits phares, car il est utile et facile à reconnaître. Il se décline en tailles et motifs très variés, du grand cabas de plage au sac de ville plus structuré.",
    choisir:
      "Regardez la taille, la doublure, la solidité des anses et la présence d'une poche. Les anses sont en coton ou en cuir selon le modèle : le cuir est plus résistant, le coton plus souple. Pour un accessoire plus petit, la [trousse de toilette en wax](/produit/trousse-toilette-wax) est un choix voisin. Pour un objet à poser dans un salon, la [housse de coussin en wax](/produit/housse-coussin-wax) joue sur le même tissu.\n\nUn motif sobre convient aux tenues du quotidien, un motif vif attire le regard.",
    entretien:
      "Si les anses sont en coton, un lavage à la main à l'eau froide convient. Si elles sont en cuir, évitez l'eau et essuyez avec un chiffon légèrement humide. Séchez à plat à l'ombre pour que le sac garde sa forme.\n\nVidez-le avant de le ranger et ne le chargez pas trop lourdement : les coutures et les anses tiennent mieux avec une charge raisonnable.",
    pourQui:
      "Le cabas est un cadeau utile, que l'on utilise dès le lendemain : il plaît à une amie, une collègue, une mère. Il convient à un anniversaire, à un départ en vacances ou à un remerciement.\n\nGlissez-y d'autres présents, un [coffret de soins au karité](/produit/coffret-soins-karite) ou un [carnet à couverture en wax](/produit/carnet-couverture-wax) : le sac devient le premier emballage et le deuxième cadeau.",
    faq: [
      { question: "Peut-on laver le sac en machine ?", reponse: "Cela dépend de ses anses et de sa doublure. Un lavage à la main est plus sûr, surtout si les anses sont en cuir." },
      { question: "Le sac est-il assez solide pour les courses ?", reponse: "Il est conçu pour un usage quotidien, mais la tenue dépend de la fabrication. Évitez les charges très lourdes pour ménager les coutures." },
      { question: "Le motif change-t-il l'usage ?", reponse: "Non, mais il change l'allure. Un motif vif se remarque dans une tenue unie, un motif plus sobre s'accorde avec tout." },
    ],
  },
  "coffret-huiles-vegetales": {
    origine:
      "Les huiles végétales utilisées en cosmétique, comme le baobab, la noix de coco, le ricin ou l'amande douce, sont connues dans plusieurs régions du monde pour le confort de la peau et des cheveux. Chacune a sa texture, son odeur et sa tenue. Un coffret en réunit plusieurs en petits flacons, ce qui permet de les essayer sans engager un grand format.\n\nLa composition varie d'un coffret à l'autre : le contenu exact figure toujours dans la fiche de la boutique.\n\nPlusieurs de ces huiles sont tirées de plantes d'Afrique et d'ailleurs : le baobab, le coco, le ricin, l'amande douce. Elles servent depuis longtemps à des usages de beauté et de confort, et leur redécouverte par la diaspora a nourri un vrai intérêt pour les soins naturels. Le coffret permet de les comparer sans s'engager sur un grand flacon.",
    choisir:
      "Pour juger une huile, regardez la liste des ingrédients et le type de flacon. Un flacon en verre teinté protège mieux le contenu de la lumière. Si vous avez déjà un favori, une huile vendue seule, comme l'[huile de baobab vierge](/produit/huile-baobab-vierge) ou l'[huile de coco vierge](/produit/huile-coco-vierge), est plus économique en usage régulier.\n\nUn coffret reste la meilleure porte d'entrée pour comparer les textures. Notre [Top 10 des huiles pour le corps](/top-10/huiles-pour-le-corps) donne des repères.",
    entretien:
      "Conservez les flacons bien fermés, à l'abri de la chaleur et de la lumière, dans un placard plutôt que sur le rebord d'une fenêtre. Une huile qui change d'odeur ou de couleur est à jeter. Évitez d'y plonger les doigts mouillés.\n\nCertaines huiles se figent au froid, comme celle de coco : un peu de chaleur entre les mains suffit à les ramener à l'état liquide, sans abîmer le produit.",
    pourQui:
      "Ce coffret s'adresse à celles et ceux qui aiment les soins naturels et le plaisir de tester : une amie curieuse, une mère, une sœur. C'est un cadeau de détente pour un anniversaire, une fête ou Noël.\n\nVous pouvez l'associer à un [coffret savon noir et karité](/produit/coffret-savon-noir-karite) pour composer un petit rituel de bien-être complet, et glisser le tout dans une [trousse de toilette en wax](/produit/trousse-toilette-wax).",
    faq: [
      { question: "Comment appliquer une huile végétale ?", reponse: "Quelques gouttes sur la peau encore humide après la douche suffisent, en massant légèrement. C'est un usage de confort cosmétique." },
      { question: "Faut-il tester avant d'utiliser ?", reponse: "Par prudence, essayez une petite quantité sur une zone limitée avant un usage plus large, et lisez la composition indiquée sur l'emballage." },
      { question: "Quelle huile choisir pour commencer ?", reponse: "Prenez celle dont la texture et l'odeur vous plaisent le plus. Le coffret sert à tester : une huile légère glisse vite, une huile épaisse reste plus riche." },
    ],
  },
  "coffret-savon-noir-karite": {
    origine:
      "Le savon noir africain est un savon traditionnel d'Afrique de l'Ouest, préparé à partir de cendres de végétaux, d'huiles ou de beurres. Il est brun, souvent en pâte ou en pain, et son aspect simple en dit long sur sa recette. Le karité, beurre végétal de la même région, lui fait un partenaire naturel : l'un nettoie, l'autre laisse un confort riche sur la peau.\n\nLe coffret rassemble ces deux classiques en un petit rituel de beauté, au plus près des recettes traditionnelles.",
    choisir:
      "Les savons noirs diffèrent par leur texture et leur parfum : pain compact, pâte plus souple, odeur plus ou moins marquée. Vérifiez toujours la composition annoncée. Pour un coffret plus large autour du karité, regardez le [coffret de soins au karité](/produit/coffret-soins-karite).\n\nSi vous souhaitez un beurre seul, le [beurre de karité en coopérative de femmes](/produit/beurre-karite-cooperative-femmes) permet de choisir une origine précise.\n\nPensez à la personne qui recevra le coffret : un savon noir a un aspect et une odeur plus marqués qu'un savon industriel, ce qui plaît aux amateurs de produits simples. Si elle préfère une texture plus douce, le [beurre de karité fouetté nature](/produit/beurre-karite-fouette-nature) peut être un meilleur complément. Un petit mot sur la façon de l'utiliser rassure celles qui le découvrent.",
    entretien:
      "Ne laissez pas le savon baigner dans l'eau : posez-le sur un porte-savon égoutté et laissez-le sécher entre deux utilisations, il durera bien plus longtemps. Faites-le mousser dans les mains plutôt que de le frotter directement sur la peau.\n\nLe karité se garde dans son pot fermé, à l'abri de la chaleur. Conservez le coffret dans un endroit sec, loin du soleil.",
    pourQui:
      "Ce coffret est un cadeau d'authenticité, pour qui aime les produits simples et leurs origines : une amie qui cherche à découvrir les soins ouest-africains, une jeune mariée, un proche de la diaspora.\n\nIl convient à un anniversaire, à une fête ou à un présent de remerciement. Pour une présentation soignée, glissez-le dans un [panier sénégalais tressé](/produit/panier-senegalais-tresse).\n\nLe savon noir a la réputation d'avoir une odeur terreuse, naturelle, très différente des savons parfumés du commerce. Prévenez-en la personne : certaines l'adoptent tout de suite, d'autres s'y habituent. Il vaut mieux l'offrir avec un petit conseil d'usage et un porte-savon qui permet à la pâte de rester au sec.",
    faq: [
      { question: "Le savon noir a-t-il une odeur forte ?", reponse: "Elle varie selon la recette. Certains sont peu parfumés, d'autres plus marqués. Lisez la description avant d'acheter." },
      { question: "Peut-on utiliser le savon noir sur tout le corps ?", reponse: "C'est un savon de toilette traditionnel. Essayez-le d'abord sur une petite zone, rincez bien et suivez les conseils du fabricant." },
      { question: "Comment conserver le coffret ?", reponse: "Au sec, à l'abri de la chaleur. Le savon doit rester hors de l'eau entre deux utilisations et le karité bien fermé." },
    ],
  },
  "calebasse-decorative-gravee": {
    origine:
      "La calebasse est le fruit séché et évidé d'une courge, utilisée depuis des siècles en Afrique comme récipient pour l'eau, le lait ou la nourriture. Une fois polie, gravée ou pyrogravée, elle change de rôle : elle devient un objet de décoration, orné de motifs géométriques tracés à la main.\n\nChaque pièce est unique, par sa forme comme par ses gravures. On la choisit pour sa matière naturelle et pour l'histoire qu'elle rappelle.\n\nLes calebasses servent en Afrique de l'Ouest à de nombreux usages, des récipients du quotidien aux objets de cérémonie. Les gravures, souvent géométriques, varient d'un atelier à l'autre et se transmettent comme un savoir-faire. Une calebasse décorative prolonge cet héritage dans une maison, sans reproduire un modèle unique.",
    choisir:
      "Les calebasses varient beaucoup en forme et en taille, du petit bol au grand plat. Regardez la régularité de la gravure, l'état du bord et le fini du vernis ou de la cire s'il y en a. Pour un cadeau voisin dans la même idée de matière naturelle, le [panier sénégalais tressé](/produit/panier-senegalais-tresse) est plus pratique pour le rangement.\n\nSi vous cherchez un objet de décoration plus coloré, la [housse de coussin en wax](/produit/housse-coussin-wax) change l'allure d'un salon plus vite.",
    entretien:
      "Un chiffon sec suffit : évitez de la laver à grande eau, qui peut gonfler ou fissurer la matière. Si une tache résiste, utilisez un chiffon à peine humide et séchez immédiatement. Tenez-la éloignée des sources de chaleur directes et d'un soleil fort.\n\nPosez-la sur une surface stable : sa forme arrondie la rend sensible aux chutes. Une calebasse peut se fendre si on la manipule trop brusquement.",
    pourQui:
      "Cette calebasse plaît à celles et ceux qui aiment l'artisanat et la décoration : un cadeau de crémaillère, d'anniversaire ou de mariage. Elle se pose sur une console, un buffet ou une table basse comme vide-poche, corbeille à fruits secs ou simple objet décoratif.\n\nElle convient aussi à une personne de la diaspora qui souhaite évoquer ses origines dans son intérieur, sans surcharger la pièce.\n\nLa couleur naturelle de la calebasse va du miel au brun foncé, et la gravure lui donne un relief que l'on apprécie à la lumière du soir. Placée sur une étagère avec quelques objets de même teinte, elle forme un ensemble sobre et chaleureux. Évitez de la poser près d'un radiateur, où le séchage excessif pourrait la fendre.",
    faq: [
      { question: "Peut-on y mettre de la nourriture ?", reponse: "Utilisée comme objet décoratif, mieux vaut éviter les aliments humides. Pour les fruits secs, un fond de papier propre convient." },
      { question: "Pourquoi chaque calebasse est-elle différente ?", reponse: "Parce qu'il s'agit d'un fruit naturel dont la forme varie, et que les gravures sont faites à la main." },
      { question: "Peut-on la fixer au mur ?", reponse: "Cela dépend de la forme et du poids. Un support adapté ou un petit socle est plus sûr. Évitez de la percer vous-même." },
    ],
  },
  "housse-coussin-wax": {
    origine:
      "Le wax s'invite volontiers dans la décoration : une housse de coussin est la façon la plus simple de l'accueillir dans un salon. Les motifs s'y déploient en grand format, et l'on associe volontiers plusieurs housses d'imprimés différents mais de couleurs proches.\n\nCe n'est pas un objet traditionnel au sens strict, mais il prolonge l'usage du tissu dans la maison, ce qui parle à la diaspora comme aux amateurs de décoration.",
    choisir:
      "Vérifiez les dimensions avant de commander : la housse doit correspondre à votre garnissage. Regardez aussi la fermeture, souvent une fermeture éclair cachée, et la qualité de la couture. Pour une décoration plus sculpturale, la [calebasse décorative gravée](/produit/calebasse-decorative-gravee) apporte une matière naturelle.\n\nPour prolonger le même tissu dans la chambre, un [paréo en wax](/produit/pareo-wax) peut s'accorder au motif de la housse.",
    entretien:
      "Lavez la housse à 30 °C sur l'envers, fermeture fermée, pour limiter l'usure des coutures. Séchez à l'ombre et repassez à l'envers pour garder l'éclat du motif. Évitez les produits blanchissants, qui ternissent les couleurs.\n\nSi vous avez plusieurs housses, alternez-les pour qu'elles s'usent de façon égale et ne passent pas toutes au soleil.",
    pourQui:
      "La housse de coussin est un beau cadeau de crémaillère ou d'anniversaire, pour une amie qui vient d'emménager ou qui aime renouveler son décor. Elle est utile, discrète et colorée.\n\nOffrez-la par deux, dans des imprimés voisins, pour une présentation plus généreuse. Vous pouvez aussi l'accompagner d'une [bougie parfumée oud et ambre](/produit/bougie-parfumee-oud-ambre) pour une ambiance de salon complète.\n\nElle séduit aussi les personnes qui veulent adopter le wax sans changer de meuble : une housse se glisse sur un coussin existant et change l'allure d'un canapé en quelques minutes. C'est un cadeau accessible, léger à envoyer, qui trouve sa place dans presque toutes les maisons, des plus sobres aux plus colorées. Pensez à ajouter un second coussin pour un duo.\n\nSi vous hésitez sur les couleurs, partez de la pièce : un salon clair supporte un motif très vif, un salon déjà chargé préfère un imprimé plus sobre. Une housse en wax tient aussi sa place sur un lit, un fauteuil ou un banc d'entrée. Pour changer d'ambiance à chaque saison, rangez les housses en rotation plutôt que de toutes les laisser sur les coussins.",
    faq: [
      { question: "La housse est-elle livrée avec le coussin ?", reponse: "En général non, la housse se vend seule. Vérifiez les dimensions et ce qui est inclus." },
      { question: "Combien de housses associer ?", reponse: "Deux ou trois suffisent, en variant les motifs mais en gardant des couleurs proches pour un ensemble harmonieux." },
      { question: "La fermeture est-elle solide ?", reponse: "Une fermeture éclair cachée est le montage habituel. Fermez-la avant de laver et évitez de forcer sur le coussin pour la préserver." },
    ],
  },
  "carnet-couverture-wax": {
    origine:
      "Un carnet habillé de wax est un objet simple, mais il raconte quelque chose : le tissu devient couverture, et le carnet devient un objet personnel. On l'utilise comme journal, carnet de recettes, livre de souvenirs ou cahier de projets.\n\nLes petites maisons de reliure qui en proposent le font souvent à la main, en séries limitées. Le motif de la couverture varie d'un exemplaire à l'autre, ce qui rend chaque carnet un peu unique.\n\nHabiller un carnet de wax est une façon de prolonger le tissu dans le monde de l'écriture. Les petits ateliers de reliure le font souvent à la main, ce qui explique les variations de motifs et de formats. L'objet se prête aux usages les plus personnels : tenir un journal, noter une recette de famille, garder des souvenirs de voyage.",
    choisir:
      "Regardez le format (carnet de sac ou grand cahier), le type de papier, lisse, ligné ou uni, et la rigidité de la couverture. Si vous recherchez un objet plus large, la [housse de coussin en wax](/produit/housse-coussin-wax) joue sur la même matière à plus grande échelle.\n\nPour un petit cadeau dans la même veine textile, la [trousse de toilette en wax](/produit/trousse-toilette-wax) ou le [foulard de tête en wax](/produit/foulard-tete-wax) vont dans le même sens. Choisissez un motif qui plaira à la personne.",
    entretien:
      "Conservez le carnet à l'abri de l'humidité pour protéger le tissu et le papier. Ne le laissez pas en plein soleil, qui ternirait les couleurs de la couverture. Si une tache apparaît, tamponnez avec un chiffon à peine humide, sans frotter.\n\nRangez-le à plat, ou debout entre deux livres, pour éviter que la couverture ne gondole avec le temps.",
    pourQui:
      "Le carnet se prête à un cadeau personnel : un mot écrit sur la première page le rend unique. Il convient à une amie, une sœur, une étudiante, ou à une personne qui part en voyage.\n\nIl se glisse facilement dans un [sac cabas en wax](/produit/sac-cabas-wax) ou un panier cadeau. Offrez-le avec un stylo pour une attention complète.\n\nLe carnet est aussi un cadeau de transmission discret : on peut y noter une recette de famille avant de l'offrir, ou y recopier quelques proverbes. Choisissez un motif qui parle à la personne, une couleur qu'elle porte souvent ou un imprimé qui rappelle un souvenir, plutôt qu'un modèle au hasard. L'effet est bien meilleur qu'avec un simple carnet de papeterie.",
    faq: [
      { question: "Le tissu est-il collé sur la couverture ?", reponse: "La couverture est rigide et recouverte de tissu wax. Les détails de la fabrication varient d'un atelier à l'autre." },
      { question: "À quoi peut servir ce carnet ?", reponse: "À peu près à tout : journal, recettes, souvenirs, liste de projets. C'est ce qui le rend facile à offrir." },
      { question: "Peut-on le personnaliser ?", reponse: "Certains ateliers le proposent. Renseignez-vous avant de commander, et prévoyez un délai de fabrication si c'est le cas." },
    ],
  },
  "bracelet-perles-krobo": {
    origine:
      "Les perles krobo sont fabriquées au Ghana, chez les Krobo, à partir de verre recyclé que l'on fait fondre dans des moules en terre avant de le décorer. Leur surface légèrement irrégulière et leurs couleurs profondes en font la réputation. Cet artisanat est ancien, et les perles se reconnaissent à leur fabrication à la main.\n\nMontées en bracelet élastique, elles se portent seules ou en superposition : un bijou facile à offrir, qui porte une histoire de verre et de feu.\n\nLes perles de verre recyclé sont une tradition vivante au Ghana : on récupère des bouteilles et du verre brisé, on les broie, puis on les fait fondre dans des moules en argile. Chaque perle porte donc la trace de sa fabrication et de petites différences. Elles se retrouvent aussi sur des colliers et des parures plus traditionnelles.",
    choisir:
      "Regardez la taille des perles, la régularité du montage et la couleur dominante. Un bracelet élastique convient à la plupart des poignets, ce qui évite de deviner la taille. Si vous cherchez une parure plus traditionnelle, la [baya en perles de Krobo du Ghana](/produit/baya-krobo-ghana) utilise les mêmes perles à la taille.\n\nPour une alternative plus discrète, regardez aussi les [bine-bine élastiques multicolores](/produit/bine-bine-elastique-multicolore), qui se portent autrement.",
    entretien:
      "Retirez le bracelet avant la douche, la baignade ou le sport : l'eau et la transpiration fatiguent le fil élastique. Essuyez les perles avec un chiffon doux et sec. Évitez de l'étirer trop fort pour l'enfiler.\n\nRangez-le à plat, hors des produits parfumés. Si l'élastique se détend, il peut être remplacé : les perles se renfilent facilement avec un fil neuf.",
    pourQui:
      "Ce bracelet plaît à toutes les générations : une amie, une sœur, une fille. Il convient à un anniversaire, à un voyage ou à un petit cadeau d'attention. Il est facile à offrir, car il ne demande pas de taille précise.\n\nVous pouvez en offrir plusieurs aux couleurs voisines pour une superposition, ou le glisser dans un [écrin de bine-bine](/produit/ecrin-bine-bine) pour une présentation complète.\n\nPour composer un ensemble plus riche, mêlez des bracelets de couleurs différentes sur un même poignet : les nuances de verre se répondent bien. Choisissez un bracelet dont les tons s'accordent avec ce que la personne porte souvent, bijoux dorés ou argentés, tenues unies ou imprimées. Un seul bracelet coloré suffit à animer une tenue très simple.",
    faq: [
      { question: "Où sont fabriquées les perles krobo ?", reponse: "Au Ghana, chez les Krobo, à partir de verre recyclé fondu dans des moules, selon un savoir-faire ancien." },
      { question: "Les perles sont-elles identiques ?", reponse: "Non, de légères irrégularités sont normales : elles font partie du charme de ces perles faites à la main." },
      { question: "Le bracelet est-il réglable ?", reponse: "Il est monté sur un fil élastique qui s'adapte à la plupart des poignets. Vérifiez la taille indiquée si le poignet est très fin ou très large." },
    ],
  },
  "eventail-wax": {
    origine:
      "L'éventail est un compagnon des cérémonies de chaleur : on le déploie à la main, on le tient en cortège, on le glisse à son sac. En wax, il prend les couleurs et motifs du tissu ouest-africain, et il est fabriqué en plusieurs pays, du Sénégal au Ghana et à la Côte d'Ivoire selon les modèles.\n\nIl est monté sur un manche en bois ou en cuir, et son format le plus courant est rond. Il sert à se rafraîchir, mais aussi à compléter une tenue.\n\nL'éventail accompagne les célébrations de plein été dans de nombreux pays, et le wax lui donne une couleur africaine. Fabriqué en petite série, il peut porter un motif choisi pour s'accorder à une cérémonie. Le format plié le rend facile à glisser dans un sac et à transporter jusqu'à la fête.",
    choisir:
      "Regardez le manche, la solidité de l'articulation et la taille. Le bois est plus rigide, le cuir plus souple. Si vous voulez coordonner l'éventail à une tenue, choisissez le même motif qu'un [pagne de wax de 6 yards](/produit/pagne-wax-6-yards) ou un [foulard de tête en wax](/produit/foulard-tete-wax).\n\nVérifiez toujours la description exacte avant de commander.",
    entretien:
      "Rangez l'éventail plié, à l'abri de l'humidité, dans un endroit sec. Évitez de le serrer au fond d'un sac sous des objets lourds, qui abîmeraient le tissu et le manche. Pour nettoyer, tamponnez avec un chiffon à peine humide.\n\nNe l'exposez pas durablement au soleil direct : les couleurs risquent de pâlir. S'il est en cuir, évitez l'eau.",
    pourQui:
      "L'éventail convient à une invitée de mariage, une demoiselle d'honneur ou une amie qui aime les accessoires. Il se commande en plusieurs exemplaires pour une cérémonie d'été, avec un wax assorti aux couleurs de la fête.\n\nIl convient aussi comme petit cadeau pour un anniversaire d'été ou un voyage. Offrez-le avec un [foulard de tête](/produit/foulard-tete-wax) assorti pour un ensemble coordonné.\n\nIl peut aussi servir de décoration : accroché au mur ou posé ouvert sur une étagère, il met un motif de wax à portée de vue. Beaucoup d'invitées l'emportent ensuite comme souvenir d'une cérémonie. Pour un mariage, prévoyez quelques exemplaires de plus que de convives, car il se perd ou se prête facilement dans la journée.",
    faq: [
      { question: "Peut-on en commander plusieurs identiques ?", reponse: "Oui, c'est l'un de ses atouts. Choisissez un motif qui s'accorde aux couleurs de la cérémonie et vérifiez la disponibilité." },
      { question: "Le manche est-il solide ?", reponse: "Il est en bois ou en cuir selon le modèle. Évitez de tirer sur l'articulation et rangez l'éventail plié." },
      { question: "Peut-on le personnaliser aux couleurs d'une cérémonie ?", reponse: "Certains vendeurs proposent des lots assortis à une couleur ou à un motif. Contactez-les avant de commander plusieurs exemplaires et demandez le délai de préparation." },
    ],
  },
  "coffret-bakhour-brule-parfum": {
    origine:
      "Le bakhour est un encens d'origine arabe, fait de copeaux de bois imprégnés d'huiles parfumées. Il est très apprécié dans les pays du Golfe et du Maghreb, et s'est installé dans les maisons d'Afrique de l'Ouest, où il côtoie le thiouraye. On le brûle pour parfumer la maison et aussi les vêtements.\n\nLe brûle-parfum du coffret peut être à charbon ou électrique. Le mode électrique évite le charbon et la fumée épaisse, ce qui le rend adapté aux appartements.",
    choisir:
      "Choisissez d'abord le type de brûle-parfum. Le mode charbon donne plus de fumée et un geste plus traditionnel, l'électrique est plus simple. Pour voir la différence, regardez le [brûle-parfum électrique bakhour](/produit/brule-parfum-electrique-bakhour) vendu seul, ou le [brûle-encens électrique rechargeable](/produit/brule-encens-electrique-rechargeable).\n\nSi vous aimez l'idée d'un encens plus africain, comparez avec le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir). Notre [Top 10 des encensoirs et brûle-parfums](/top-10/encensoirs-brule-parfums) donne des repères.\n\nPensez à la manière dont la personne vit : en appartement, un brûle-parfum électrique est plus pratique. Dans une maison avec balcon ou jardin, le charbon peut convenir. Regardez aussi si le coffret inclut des copeaux, des pastilles ou un petit assortiment : le bakhour existe sous plusieurs formes, comme le [bakhour en pastilles moulées](/produit/bakhour-pastilles-moulees), qui ont des usages un peu différents.",
    entretien:
      "Vérifiez sur la notice que l'appareil convient bien au bakhour, car certains ne supportent pas les résines. Videz les cendres ou les résidus une fois l'appareil refroidi, et essuyez la plaque avec un chiffon sec. Ne le nettoyez jamais branché.\n\nConservez les copeaux dans une boîte fermée, à l'abri de l'humidité et de la lumière, pour que le parfum reste intact.",
    pourQui:
      "Ce coffret est un cadeau élégant pour une crémaillère, un mariage, l'Aïd ou un anniversaire. Il convient à celle qui aime parfumer sa maison et ses tissus, et qui préfère un geste simple sans charbon.\n\nIl plaît aussi à qui découvre l'encens : un cadeau complet, sans rien à ajouter. Un petit mot avec le conseil d'usage rendra le geste plus chaleureux.",
    faq: [
      { question: "Quelle différence entre bakhour et thiouraye ?", reponse: "Le bakhour est d'origine arabe, en copeaux de bois parfumés. Le thiouraye est un encens sénégalais à base de bois et de résines. Deux traditions voisines." },
      { question: "Le brûle-parfum électrique est-il plus sûr ?", reponse: "Il évite le charbon allumé, mais il reste un appareil qui chauffe. Posez-le sur une surface stable et ne le laissez pas sans surveillance." },
      { question: "Peut-on brûler du thiouraye dans un brûle-parfum électrique ?", reponse: "Seulement si la notice de l'appareil l'autorise. Certains appareils supportent mal les résines. Dans le doute, utilisez-le uniquement avec ce qu'il prévoit." },
    ],
  },
};
