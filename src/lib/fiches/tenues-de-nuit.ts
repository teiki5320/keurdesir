/**
 * Fiches détaillées de la rubrique « Tenues de nuit » (15 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - petit-pagne-wax-brode — Petit pagne en wax brodé
 *   - bethio-coton-ajoure — Bethio en coton ajouré
 *   - petit-pagne-bazin-brode — Petit pagne en bazin brodé
 *   - nuisette-coton-wax — Nuisette en coton wax
 *   - chemise-de-nuit-longue-wax — Chemise de nuit longue en wax
 *   - kimono-interieur-wax — Kimono d'intérieur en wax
 *   - peignoir-wax-double-satin — Peignoir en wax doublé de satin
 *   - pyjama-wax-short-chemise — Pyjama en wax, chemise et short
 *   - pantalon-detente-wax — Pantalon de détente en wax
 *   - boubou-interieur-coton-brode — Boubou d'intérieur en coton brodé
 *   - caftan-interieur-bazin — Caftan d'intérieur en bazin
 *   - chemise-de-nuit-coton-brode — Chemise de nuit en voile de coton brodé
 *   - chemise-de-nuit-coton-dentelle — Chemise de nuit en coton et dentelle
 *   - bonnet-satin-wax — Bonnet de nuit en wax doublé de satin
 *   - pareo-wax — Paréo en wax
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "petit-pagne-wax-brode",
  "bethio-coton-ajoure",
  "petit-pagne-bazin-brode",
  "nuisette-coton-wax",
  "chemise-de-nuit-longue-wax",
  "kimono-interieur-wax",
  "peignoir-wax-double-satin",
  "pyjama-wax-short-chemise",
  "pantalon-detente-wax",
  "boubou-interieur-coton-brode",
  "caftan-interieur-bazin",
  "chemise-de-nuit-coton-brode",
  "chemise-de-nuit-coton-dentelle",
  "bonnet-satin-wax",
  "pareo-wax",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {
  "petit-pagne-wax-brode": {
    origine:
      "Le wax est un coton imprimé à la cire dont l'histoire est liée au commerce entre l'Europe et l'Afrique de l'Ouest : des fabricants néerlandais se sont inspirés, au XIXe siècle, des batiks de Java, et les clientes ouest-africaines en ont fait un tissu à part entière, avec ses motifs que l'on nomme, que l'on s'échange et que l'on reconnaît. Aujourd'hui, il habille aussi bien les cérémonies que le quotidien.\n\nTaillé en petit pagne, il prend place dans l'élégance domestique sénégalaise : une pièce nouée à la maison, que l'on soigne autant que celles du dehors. La broderie de l'ourlet est la signature de la couturière. Les mots wolof de cette tradition sont expliqués dans notre [lexique](/lexique).",
    choisir:
      "Ce petit pagne se distingue du [bethio en coton ajouré](/produit/bethio-coton-ajoure) par sa matière : ici, un wax imprimé aux couleurs franches, là, un coton léger travaillé de jours et de motifs. Si vous cherchez plus de brillant pour les jours de fête, regardez plutôt le [petit pagne en bazin brodé](/produit/petit-pagne-bazin-brode), plus ferme et plus habillé.\n\nLe [paréo en wax](/produit/pareo-wax) est son cousin sans broderie : plus simple, plus polyvalent. Choisissez le petit pagne brodé si vous aimez les finitions et les pièces cousues à la commande. Notre sélection [petits pagnes et nuisettes en wax](/top-10/petits-pagnes-nuisettes-wax) vous aidera à comparer les imprimés.",
    entretien:
      "Lavez-le à la main ou en cycle délicat, à l'eau froide, en le retournant pour protéger la broderie. Lavez-le avec des couleurs proches, surtout les premières fois : un wax très coloré peut déteindre un peu.\n\nFaites-le sécher à l'ombre pour que les teintes gardent leur éclat. Repassez-le encore légèrement humide, côté envers, sans appuyer sur la broderie. Pliez-le simplement : il tient peu de place dans un tiroir ou une valise.",
    pourQui:
      "Pour celle qui aime porter de beaux tissus même quand personne ne la voit. C'est aussi un cadeau de trousseau bien choisi : pratique, coloré, facile à plier dans une valise. Offert à une future mariée, il accompagne joliment la tradition décrite dans notre article [Djongué et traditions du mariage](/conseils/djongue-et-traditions-du-mariage).\n\nOn le garde pour les soirées à la maison, les matins calmes et les jours où l'on reçoit des proches.",
    faq: [
        { question: "Le petit pagne en wax est-il réversible ?", reponse: "Cela dépend de la couturière : beaucoup le proposent réversible ou avec un lien à nouer, d'autres non. Relisez la description de l'atelier avant de commander." },
        { question: "Le wax s'adoucit-il avec le temps ?", reponse: "Oui, le coton wax devient en général plus souple au fil des lavages, tout en gardant ses couleurs si on le sèche à l'ombre et si on le lave à l'eau froide." },
    ],
  },
  "bethio-coton-ajoure": {
    origine:
      "Bethio est le nom wolof du petit pagne, ce morceau de tissu que les Sénégalaises nouent à la maison et qui se transmet ou s'offre volontiers. Le motif ajouré, découpé ou piqué à la main, appartient au savoir-faire des couturières : chaque pièce demande du temps, de la patience et un oeil sûr pour que les jours restent réguliers.\n\nPlus qu'un vêtement, le bethio fait partie d'un univers de gestes et de présents liés au mariage, que notre article [Qu'est-ce que le djongué ?](/conseils/qu-est-ce-que-le-djongue) explique. Le coton léger, lui, a l'avantage de convenir à presque toutes les saisons.",
    choisir:
      "Ce bethio mise sur la légèreté et sur la dentelle de tissu, là où le [petit pagne en wax brodé](/produit/petit-pagne-wax-brode) mise sur les couleurs imprimées. Si vous aimez le blanc ou les teintes douces, le coton ajouré est le plus délicat des trois ; si vous voulez une pièce plus festive, le [petit pagne en bazin brodé](/produit/petit-pagne-bazin-brode) a davantage de tenue.\n\nComparez aussi avec la [chemise de nuit en voile de coton brodé](/produit/chemise-de-nuit-coton-brode), qui joue sur la même légèreté : les deux s'associent bien. Le blanc se prête aux cadeaux, le multicolore aux amatrices de gaieté.",
    entretien:
      "Les jours ajourés sont fragiles : lavez le bethio à la main, à l'eau tiède, en le pressant doucement sans jamais le tordre. Rincez bien, puis étalez-le à plat sur une serviette propre.\n\nFaites-le sécher à l'abri du soleil direct, qui jaunit les blancs et fatigue les teintes pastel. Évitez le sèche-linge. Rangez-le plié, à l'écart des bijoux ou des fermoirs qui pourraient accrocher les motifs.",
    pourQui:
      "C'est un cadeau naturel pour une future mariée, une soeur ou une amie qui découvre les traditions sénégalaises : il se glisse dans un trousseau et se transmet. On l'offre aussi sans occasion, pour le plaisir de la belle ouvrage.\n\nPour soi, il convient aux journées à la maison, quand on veut un tissu léger et soigné. Rangé dans un tiroir avec un sachet de thiouraye, il garde une odeur agréable ; voyez notre rubrique [thiouraye et encens](/thiouraye-encens).",
    faq: [
        { question: "Que veut dire « bethio » ?", reponse: "C'est le nom wolof du petit pagne, la pièce de tissu nouée autour de la taille. Les modèles ajourés ou brodés en sont une version très appréciée." },
        { question: "Peut-on le porter l'été ?", reponse: "Le coton léger est justement choisi pour les saisons chaudes. Il convient bien aux journées d'été passées à la maison, à l'ombre." },
    ],
  },
  "petit-pagne-bazin-brode": {
    origine:
      "Le bazin est un damassé de coton : un tissu au tissage serré, teint puis battu ou glacé pour lui donner son éclat. Il est très présent dans les tenues de cérémonie d'Afrique de l'Ouest, boubous d'hommes et de femmes, que l'on porte pour les baptêmes, les mariages et les grandes fêtes.\n\nTaillé en petit pagne, il garde cette allure de fête dans l'espace de la maison. Sa broderie, souvent ton sur ton ou dorée, répond à celle des boubous de cérémonie : on peut ainsi assortir plusieurs pièces d'un même atelier pour une occasion familiale.",
    choisir:
      "Le bazin est plus ferme et plus brillant que le coton wax : ce petit pagne s'adresse à celles qui veulent une pièce habillée, là où le [petit pagne en wax brodé](/produit/petit-pagne-wax-brode) est plus décontracté. Si vous cousez ou faites faire une pièce sur mesure, le [coupon de bazin riche](/produit/coupon-bazin-riche) permet de choisir vous-même la couleur et la coupe.\n\nPour une tenue complète dans la même matière, le [caftan d'intérieur en bazin](/produit/caftan-interieur-bazin) forme avec lui un bel ensemble. Les teintes vives, fuchsia ou turquoise, font cadeau ; le blanc et l'or sont plus classiques.",
    entretien:
      "Le bazin teint peut dégorger lors des premiers lavages : lavez-le à la main, à l'eau froide, seul. Ne le laissez pas tremper longtemps et ne le frottez pas au niveau de la broderie.\n\nFaites-le sécher à l'ombre, étalé ou sur un cintre large. Repassez-le sur l'envers, de préférence encore un peu humide, pour retrouver son éclat sans écraser la broderie. Rangez-le plié sans le serrer.",
    pourQui:
      "Il est fait pour les moments où l'on reçoit ou l'on célèbre : repas de fête, visite de la famille, soirée de fiançailles à la maison. En cadeau, il convient à une future mariée qui aime les belles étoffes, ou à une proche à qui l'on veut offrir une pièce de fête plutôt qu'un vêtement de tous les jours.\n\nIl n'est pas destiné au quotidien : on le sort, on le soigne, on le range.",
    faq: [
        { question: "Le bazin brille-t-il toujours autant ?", reponse: "Son éclat dépend de la finition du tissu et de son entretien. Un repassage sur l'envers, avec un fer pas trop chaud, aide à le retrouver." },
        { question: "Pourquoi laver le bazin à part ?", reponse: "Parce que le bazin teint peut déteindre un peu aux premiers lavages. Le laver seul, à l'eau froide, évite de tacher d'autres vêtements." },
    ],
  },
  "nuisette-coton-wax": {
    origine:
      "La nuisette en wax est une création de la diaspora autant que de l'Afrique de l'Ouest : des couturières ont repris un tissu de grande tradition pour des vêtements de maison que l'on n'aurait pas imaginés il y a quelques décennies. Le wax, un coton imprimé à la cire, y garde ses couleurs vives et ses motifs graphiques.\n\nCe sont souvent des ateliers indépendants qui la proposent, avec parfois un bonnet ou un peignoir assortis. Chaque imprimé a sa personnalité : on choisit le sien comme on choisit un foulard, par goût et par humeur.",
    choisir:
      "La nuisette est la plus légère des tenues de ce lot. Si vous préférez une couverture complète, la [chemise de nuit longue en wax](/produit/chemise-de-nuit-longue-wax) est plus ample, inspirée du boubou ; le [pyjama en wax](/produit/pyjama-wax-short-chemise) convient mieux à la mi-saison.\n\nPour un ensemble coordonné, associez-la au [bonnet de nuit en wax doublé de satin](/produit/bonnet-satin-wax) ou au [peignoir en wax doublé de satin](/produit/peignoir-wax-double-satin). Les coupes varient d'un atelier à l'autre : fiez-vous toujours au guide des tailles de la créatrice.",
    entretien:
      "Lavez-la à 30 °C, sur l'envers, avec des couleurs proches, et choisissez un programme délicat. Un wax neuf peut déteindre un peu : le premier lavage se fait mieux seul.\n\nFaites-la sécher à l'ombre pour garder l'éclat des motifs ; le soleil direct les ternit à la longue. Repassez à température moyenne, sur l'envers. Évitez les adoucissants très parfumés, qui n'ajoutent rien à un coton déjà souple.",
    pourQui:
      "Pour les soirées à la maison, les matinées tranquilles et les valises de vacances : un vêtement léger et gai. C'est aussi un cadeau d'amie ou de trousseau, surtout quand on y joint le bonnet ou le peignoir assorti.\n\nNotre sélection [cadeaux pour la future mariée](/top-10/cadeaux-future-mariee) en donne d'autres idées. Elle se lave sans façon et se remplace facilement si l'on veut changer d'imprimé : un vêtement pratique pour celles qui aiment varier.",
    faq: [
        { question: "Comment choisir la bonne taille ?", reponse: "Les coupes varient d'un atelier à l'autre : consultez le guide des tailles de la créatrice et, en cas de doute, posez-lui la question avant de commander." },
        { question: "Le wax est-il agréable à porter ?", reponse: "Le coton wax respire et s'assouplit au fil des lavages. Il est un peu plus ferme au départ, ce qui est normal pour un tissu imprimé à la cire." },
      { question: "Peut-on l'offrir sans connaître la taille ?", reponse: "Mieux vaut s'en assurer : une coupe varie d'un atelier à l'autre. Un bonnet de nuit assorti ou un paréo se prête mieux à un cadeau surprise, car aucune taille n'est à deviner." },
    ],
  },
  "chemise-de-nuit-longue-wax": {
    origine:
      "La chemise de nuit longue en wax reprend l'esprit du boubou, cette longue robe ample que l'on porte dans toute l'Afrique de l'Ouest et dont la coupe généreuse a traversé les générations. Le wax, coton imprimé à la cire, lui apporte des motifs que les couturières choisissent avec soin, parfois pour leur symbolique.\n\nCertaines pièces reçoivent une encolure brodée ou un passepoil de couleur contrastée : ce sont ces détails qui donnent à un vêtement de repos l'air d'un vêtement de garde-robe.",
    choisir:
      "Si vous cherchez la tenue la plus enveloppante de la sélection, c'est celle-ci. La [nuisette en coton wax](/produit/nuisette-coton-wax) est plus courte et plus légère, utile pour les nuits chaudes ; le [boubou d'intérieur en coton brodé](/produit/boubou-interieur-coton-brode) est plus habillé, à porter pour recevoir.\n\nCôté tissu, le wax est plus ferme que le voile de la [chemise de nuit en voile de coton brodé](/produit/chemise-de-nuit-coton-brode) : il tient mieux la forme et résiste bien à l'usage. Les manches larges permettent de superposer un [kimono d'intérieur](/produit/kimono-interieur-wax) quand il fait frais.",
    entretien:
      "Lavez-la à 30 °C, en programme délicat, sur l'envers. Le wax s'assouplit au fil des lavages, ce qui est tout l'intérêt d'un coton de qualité : ne cherchez donc pas à l'adoucir par des produits supplémentaires.\n\nFaites-la sécher à l'ombre, étalée ou sur un cintre. Repassez-la sur l'envers à température moyenne, surtout au niveau de l'encolure brodée si elle en possède une.",
    pourQui:
      "Pour celles qui aiment les longues soirées tranquilles et les dimanches matin qui s'étirent. Sa coupe ample se porte volontiers en toute saison, avec un gilet léger quand l'air fraîchit.\n\nElle fait aussi un cadeau de trousseau chaleureux, que l'on garde longtemps : sa solidité en fait une pièce plus durable que beaucoup de vêtements de nuit courants. Elle voyage bien : pliée, elle tient peu de place et se défroisse vite à la vapeur d'une salle de bains. Un détail utile pour les séjours chez la famille.",
    faq: [
        { question: "Cette chemise de nuit est-elle chaude ?", reponse: "Le coton wax est un tissu qui respire, ni lourd ni épais. Sa coupe ample laisse circuler l'air, ce qui la rend portable en plusieurs saisons." },
        { question: "Faut-il la repasser ?", reponse: "Ce n'est pas obligatoire, mais un repassage sur l'envers, à température moyenne, lui donne un bel aspect, surtout si elle a une encolure brodée." },
      { question: "Quel entretien pour l'encolure brodée ?", reponse: "Lavez-la sur l'envers, en programme délicat, et repassez-la sans appuyer sur la broderie. Un filet de lavage protège les fils de l'encolure et du passepoil lors des cycles en machine." },
    ],
  },
  "kimono-interieur-wax": {
    origine:
      "Le kimono en wax est une rencontre : sa coupe droite et ses manches larges viennent d'un vêtement japonais, tandis que le tissu, un coton imprimé à la cire, raconte une tout autre histoire, celle du wax ouest-africain. Les créatrices africaines et de la diaspora ont fait de ce mélange un classique de la garde-robe d'intérieur.\n\nIl se porte ouvert ou fermé par une ceinture, comme une veste de maison. Dans un intérieur, il apporte une touche de couleur que l'on retrouve parfois sur les coussins et les foulards.",
    choisir:
      "Le kimono se superpose : c'est sa grande force. Sur la [chemise de nuit en voile de coton brodé](/produit/chemise-de-nuit-coton-brode), il ajoute de la couleur ; sur le [pyjama en wax](/produit/pyjama-wax-short-chemise), il forme un ensemble. Le [peignoir en wax doublé de satin](/produit/peignoir-wax-double-satin) est plus enveloppant et plus doux, mais aussi plus délicat à entretenir.\n\nLes versions courtes sont pratiques à la cuisine ou en voyage, les versions longues font davantage tenue d'accueil. Les modèles bicolores jouent sur le contraste : choisissez-les si votre intérieur est plutôt neutre.",
    entretien:
      "Le coton wax se lave facilement : 30 °C, sur l'envers, avec des couleurs proches. Au premier lavage, vérifiez que les teintes ne déteignent pas trop avant de le mêler à d'autres vêtements.\n\nRepassez-le légèrement humide pour garder un joli tombé. Faites-le sécher à l'ombre, sur un cintre. La ceinture se plie ou s'enroule à part, ce qui évite qu'elle ne se froisse dans le tiroir.",
    pourQui:
      "Pour recevoir chez soi avec décontraction, pour le café du matin ou pour se couvrir un soir frais. C'est un cadeau polyvalent, qui plaît aussi à celles qui ne cherchent pas une tenue de nuit à proprement parler.\n\nAux beaux jours, il se porte même dehors, sur un jean et un haut simple. Il se plie aussi très bien dans un sac de voyage, et sert de couche supplémentaire dans une maison un peu fraîche, sans prendre de place.",
    faq: [
        { question: "Le kimono se porte-t-il fermé ?", reponse: "Il se porte ouvert ou fermé : avec la ceinture à nouer, on obtient un effet plus structuré, sans elle un effet plus décontracté." },
        { question: "Quelle longueur choisir ?", reponse: "Courte pour la praticité, longue pour l'allure d'une tenue d'accueil. Les créatrices en proposent souvent plusieurs, donc consultez leur fiche." },
      { question: "Comment l'assortir à un pyjama ?", reponse: "Choisissez un pyjama uni dans l'une des couleurs du motif : le kimono apporte alors l'imprimé et le reste de la tenue reste calme, ce qui évite de surcharger l'ensemble." },
    ],
  },
  "peignoir-wax-double-satin": {
    origine:
      "Ce peignoir marie deux univers : un extérieur en wax, coton imprimé dont les motifs viennent de l'histoire textile ouest-africaine, et une doublure en satin, tissu lisse et brillant. Certains ateliers renversent le principe, avec un satin uni bordé de wax aux poignets et au col.\n\nLe vêtement lui-même est un classique des trousseaux : on l'offre à une future mariée pour accompagner ses premiers matins de vie nouvelle. Le contraste entre la couleur du wax et la douceur du satin fait tout son charme.",
    choisir:
      "Face au [kimono en wax](/produit/kimono-interieur-wax), qui est plus léger et se lave sans précaution, le peignoir apporte un confort supplémentaire grâce à sa doublure ; en contrepartie, il demande plus d'attention. Si vous voulez un cadeau de mariage, il est plus spectaculaire que la [chemise de nuit en coton et dentelle](/produit/chemise-de-nuit-coton-dentelle), plus classique.\n\nUn peignoir assorti à un [bonnet de nuit en wax doublé de satin](/produit/bonnet-satin-wax) fait un joli duo à offrir. Longueur courte pour un usage quotidien, longue pour une allure plus chic.",
    entretien:
      "Le satin est fragile : lavez le peignoir à la main ou en cycle délicat, à l'eau froide, de préférence dans un filet de lavage. Évitez le sèche-linge, qui abîme la doublure.\n\nFaites-le sécher à plat ou sur un cintre, à l'ombre. Repassez à basse température du côté du satin, sans insister. Si le tissu accroche, ne tirez pas sur le fil : coupez-le simplement à ras.",
    pourQui:
      "Pour les moments de détente après la douche, pour le matin d'un grand jour, pour un cadeau de mariage ou d'anniversaire. C'est une pièce que l'on offre pour faire plaisir : un peignoir se garde des années.\n\nNotre sélection [cadeaux pour la future mariée](/top-10/cadeaux-future-mariee) en propose d'autres.",
    faq: [
        { question: "Le peignoir est-il adapté à un cadeau de mariage ?", reponse: "Oui, c'est l'un des cadeaux de trousseau les plus appréciés : il est pratique, coloré, et on le garde longtemps." },
        { question: "Peut-on le passer en machine ?", reponse: "Préférez le lavage à la main ou un cycle délicat à l'eau froide, car le satin est fragile. Évitez le sèche-linge." },
      { question: "Que faire si le satin se froisse ?", reponse: "Accrochez le peignoir dans une pièce humide ou repassez-le à basse température du côté du satin, avec un linge fin entre le fer et le tissu. Ne le tirez pas : le satin se marque facilement." },
    ],
  },
  "pyjama-wax-short-chemise": {
    origine:
      "Le pyjama en wax est un vêtement de couturière d'aujourd'hui : on prend un tissu qui sert depuis longtemps aux boubous et aux pagnes et on le coupe en chemise boutonnée et short, deux pièces simples et familières. Le wax, imprimé à la cire, y garde ses couleurs franches et ses motifs lisibles.\n\nLes ateliers varient les imprimés d'une série à l'autre, avec souvent un passepoil contrasté sur le col. On évite ainsi l'uniformité des pyjamas unis de grande surface.",
    choisir:
      "Ce pyjama est le plus facile à porter de la gamme : chemise boutonnée et short à cordon ou à élastique. Comparé à la [nuisette en coton wax](/produit/nuisette-coton-wax), il couvre davantage ; comparé à la [chemise de nuit longue](/produit/chemise-de-nuit-longue-wax), il laisse plus de liberté de mouvement.\n\nSi vous voulez prolonger la tenue en journée, le [pantalon de détente en wax](/produit/pantalon-detente-wax) se porte avec la même chemise. Les imprimés vifs plaisent aux amatrices de couleur, les teintes bleues sont plus sobres.",
    entretien:
      "Lavez-le à 30 °C sur l'envers, avec des couleurs proches, et fermez les boutons avant de le mettre en machine. Au premier lavage, le wax est un peu raide : cela passe après quelques lavages.\n\nFaites-le sécher à l'ombre et repassez la chemise à température moyenne, sur l'envers. Le col se repasse en dernier, pour garder sa forme. Rangez l'ensemble plié, haut et bas ensemble, pour retrouver d'un coup la paire d'imprimés assortis dans le tiroir.",
    pourQui:
      "Pour les nuits comme pour les matinées à la maison, en mi-saison. C'est un cadeau pratique pour quelqu'un qui aime les couleurs sans se compliquer : une amie, une soeur, une mère.\n\nIl se glisse aussi dans une valise de vacances sans prendre de place. Offert avec un [bonnet de nuit en wax](/produit/bonnet-satin-wax) assorti, il devient un petit coffret de tenue complète, joliment pensé et sans surprise de taille à craindre si l'on connaît déjà le guide de l'atelier.",
    faq: [
        { question: "Le short est-il à cordon ?", reponse: "Selon les modèles : élastique ou cordon. Consultez la description de l'atelier pour connaître la version exacte." },
        { question: "Peut-on porter la chemise seule ?", reponse: "Oui, elle se porte sans le short, avec un pantalon ou une jupe, tant que l'imprimé s'accorde avec le reste de la tenue." },
      { question: "Comment composer une tenue plus chaude ?", reponse: "Ajoutez un kimono d'intérieur par-dessus la chemise, ou remplacez le short par un pantalon de détente en wax. Les deux pièces se portent aussi séparément, selon la saison et l'humeur du jour." },
    ],
  },
  "pantalon-detente-wax": {
    origine:
      "Le pantalon de détente en wax joue sur deux registres : il vient de la tradition des tissus imprimés ouest-africains, et d'une manière toute contemporaine de s'habiller, entre la maison et la ville. Les créatrices le coupent large et fluide, avec une taille élastique et des poches latérales.\n\nLe wax y révèle sa nature : un coton imprimé à la cire, solide, assez ferme pour tenir la coupe, assez souple après quelques lavages pour devenir agréable. Associé à un haut uni, il laisse parler le motif.",
    choisir:
      "C'est la pièce la plus quotidienne de la sélection. Face au [paréo en wax](/produit/pareo-wax), qui se noue et s'adapte, le pantalon se met d'un geste et ne demande aucun nœud. Face au [pyjama en wax](/produit/pyjama-wax-short-chemise), il convient pour un usage plus longue durée : on peut le porter dehors.\n\nSi vous aimez porter du wax sans en faire trop, ce pantalon est le meilleur départ : choisissez un imprimé qui s'accorde avec vos hauts unis. Les teintes noir et blanc sont les plus faciles à associer.",
    entretien:
      "Lavez-le à 30 °C sur l'envers, avec des couleurs proches, et faites-le sécher à l'ombre. Le cordon de la taille se resserre avant le lavage pour éviter qu'il ne s'emmêle.\n\nRepassez-le légèrement humide, côté envers. Un coton wax supporte bien la répétition : c'est un vêtement qui vieillit en s'assouplissant.",
    pourQui:
      "Pour les journées à la maison, le télétravail, les vacances, les soirées entre amis. C'est une bonne idée de cadeau pour celle qui préfère le confort à l'apparat : un pantalon que l'on n'ôte pas en rentrant chez soi.\n\nIl convient aussi à celles qui découvrent le wax sans oser les grands imprimés sur le haut du corps. Sa polyvalence en fait un achat raisonnable : on le met pour le café du matin comme pour rejoindre des amis, sans devoir se changer. Un coton wax bien lavé devient vite un compagnon des journées chargées, que l'on adopte et que l'on rachète volontiers dans un autre imprimé.",
    faq: [
        { question: "Les poches sont-elles pratiques ?", reponse: "Les poches latérales rendent le pantalon utile au quotidien : on y glisse un téléphone ou des clés sans avoir besoin d'un sac." },
        { question: "Quel haut choisir avec ?", reponse: "Un haut uni, dans l'une des couleurs du motif. Cela évite de surcharger la tenue et met l'imprimé en valeur." },
      { question: "Peut-on le porter pour dormir ?", reponse: "Beaucoup de créatrices le présentent comme assez confortable pour servir de bas de pyjama. Choisissez alors un haut doux et uni, et gardez-le à part du linge de ville pour qu'il reste agréable." },
    ],
  },
  "boubou-interieur-coton-brode": {
    origine:
      "Le boubou est une longue robe ample que l'on porte dans toute l'Afrique de l'Ouest, par les femmes comme par les hommes. Sa coupe généreuse convient au climat et aux grandes occasions, et sa forme a peu changé avec le temps, ce qui lui donne une allure de classique.\n\nEn coton léger, avec une broderie à l'encolure, il devient une tenue d'intérieur distinguée : on le reconnaît à son tombé et à sa simplicité. Les cotons teints à la main ou imprimés au batik en sont une variante très recherchée.",
    choisir:
      "Ce boubou est plus habillé que la [chemise de nuit longue en wax](/produit/chemise-de-nuit-longue-wax), qui est plus pensée pour le repos ; il convient pour recevoir. Pour un boubou plus brillant, orientez-vous vers le [caftan d'intérieur en bazin](/produit/caftan-interieur-bazin), plus ajusté.\n\nLe coton brodé est plus léger et plus aérien que le wax. Associé à un [foulard de tête en wax](/produit/foulard-tete-wax), il compose une tenue complète. Les teintes blanches et ocre sont sobres ; l'indigo et le vert d'eau sont plus marqués.",
    entretien:
      "Lavez-le à 30 °C, sur l'envers, pour protéger la broderie de l'encolure. Les cotons teints à la main peuvent déteindre : lavez-les seuls les premières fois, à l'eau froide.\n\nFaites-le sécher à l'ombre, sur un cintre large. Repassez sur l'envers, à température moyenne. Rangez-le suspendu ou plié sans serrer, pour que les plis ne marquent pas la broderie.",
    pourQui:
      "Pour les jours où l'on reçoit à la maison avec simplicité, les dimanches en famille, les vacances au soleil. Le boubou est aussi un cadeau de belle allure pour une mère, une tante, une amie à qui l'on veut offrir une pièce qui dure.\n\nSa coupe ample n'impose rien : elle se porte seule, ou avec un foulard assorti. Il se transmet aussi : un beau coton brodé bien entretenu passe d'une penderie à l'autre, d'une soeur à une cousine, sans perdre sa distinction.",
    faq: [
        { question: "Le boubou se porte-t-il seul ?", reponse: "Oui, c'est une robe complète. On peut y ajouter un foulard ou un bijou, mais il n'en a pas besoin." },
        { question: "Que signifie un coton teint à la main ?", reponse: "C'est un tissu coloré par l'artisan, souvent avec des variations de teinte : chaque pièce est un peu différente, et c'est ce qui en fait l'intérêt." },
      { question: "Quelle saison pour ce boubou ?", reponse: "Le coton léger le rend agréable en été comme en demi-saison. Quand l'air fraîchit, on le porte avec un gilet fin par-dessus, sans que la coupe ample ne soit gênée." },
    ],
  },
  "caftan-interieur-bazin": {
    origine:
      "Le caftan est une longue robe droite que l'on retrouve sous des formes variées dans de nombreuses régions du monde. Dans la version qui nous occupe, il est taillé dans du bazin, ce damassé de coton teint et glacé qui est l'étoffe des tenues de fête d'Afrique de l'Ouest.\n\nLe bazin donne au vêtement un léger brillant et une belle tenue. Certaines pièces sont en tissu « effet bazin », une imitation plus souple et plus facile à vivre : le descriptif de l'atelier précise de quoi il s'agit.",
    choisir:
      "Le caftan est plus ajusté que le [boubou d'intérieur en coton brodé](/produit/boubou-interieur-coton-brode), qui est plus ample et plus aérien. Il se porte plutôt pour une occasion que pour un après-midi de ménage. Si vous aimez le bazin mais préférez une pièce plus simple, le [petit pagne en bazin brodé](/produit/petit-pagne-bazin-brode) en reprend la matière.\n\nPour faire coudre votre propre modèle, le [coupon de bazin riche](/produit/coupon-bazin-riche) offre la même étoffe en tissu. Les teintes moutarde et bleu roi sont franches, le blanc et le bordeaux plus classiques.",
    entretien:
      "Le bazin se lave à la main, à l'eau froide, sans longue trempe : le tissu teint peut dégorger au début. Essorez doucement, sans tordre.\n\nFaites-le sécher à l'ombre sur un cintre. Repassez-le sur l'envers, à température moyenne à forte selon l'étiquette, pour retrouver l'éclat du tissu. Un tissu « effet bazin » demande un fer plus doux : suivez alors l'étiquette.",
    pourQui:
      "Pour les jours de fête, les repas de famille, les visites d'amis : on l'enfile pour être à l'aise tout en étant habillée. C'est aussi un très beau cadeau pour une mère ou une belle-mère.\n\nSa teinte soutenue convient bien aux célébrations, et sa coupe droite se garde du début à la fin d'une longue journée à la maison.",
    faq: [
        { question: "Qu'est-ce qu'un tissu « effet bazin » ?", reponse: "C'est un tissu qui imite l'aspect du bazin, souvent plus souple et plus facile à entretenir. Le descriptif de l'atelier précise la matière." },
        { question: "Peut-on le porter tous les jours ?", reponse: "Il est plutôt conçu pour les occasions, à cause de sa tenue et de son éclat. On l'entretient avec plus d'attention qu'un vêtement de coton ordinaire." },
      { question: "Comment repasser le bazin sans le marquer ?", reponse: "Repassez sur l'envers, de préférence avec un linge fin entre le fer et le tissu, et réglez la chaleur selon l'étiquette. Les plis se reprennent à la vapeur plutôt qu'en appuyant fort." },
    ],
  },
  "chemise-de-nuit-coton-brode": {
    origine:
      "La broderie anglaise est une technique de broderie ajourée, née en Europe, qui joue sur des petits jours dessinés dans le tissu. Associée à un voile de coton, elle donne une chemise de nuit légère, fraîche et sans âge, que l'on retrouve dans de nombreuses garde-robes.\n\nDans l'univers de Keur Désir, elle fait un contrepoint à l'imprimé wax : sa blancheur calme met en valeur les pièces plus colorées que l'on pose par-dessus. On la trouve chez des artisanes comme dans le commerce.",
    choisir:
      "Cette chemise est la plus légère de la sélection, adaptée aux nuits chaudes, là où la [chemise de nuit longue en wax](/produit/chemise-de-nuit-longue-wax) est plus ample et plus ferme. Face à la [chemise de nuit en coton et dentelle](/produit/chemise-de-nuit-coton-dentelle), elle est plus sobre : la broderie est un travail du tissu, la dentelle une garniture.\n\nElle se marie bien avec un [kimono d'intérieur en wax](/produit/kimono-interieur-wax) posé par-dessus, pour un mélange de styles. Le blanc et l'écru sont classiques, le bleu pâle est plus doux.",
    entretien:
      "Lavez-la à 30 °C dans un filet de lavage, pour protéger la broderie. Le voile de coton est fin : évitez les programmes énergiques et les fermetures éclair ou les boutons d'autres vêtements dans le même tambour.\n\nFaites-la sécher à plat ou sur un cintre. Repassez-la à température moyenne, sur l'envers, sur une serviette pour ne pas écraser la broderie. Rangez-la pliée avec du papier de soie si vous la gardez longtemps.",
    pourQui:
      "Pour celles qui aiment les tissus légers et les nuits d'été, ou qui cherchent un classique à offrir : une future mariée, une jeune maman, une amie fidèle.\n\nAssociée à une pièce en wax, elle donne une tenue plus personnelle que l'on garde de saison en saison. Elle se garde longtemps si on la lave avec soin, et son blanc sobre s'accorde avec les autres pièces de la penderie, qu'elles soient en wax ou unies.",
    faq: [
        { question: "Qu'est-ce que la broderie anglaise ?", reponse: "C'est une broderie ajourée, faite de petits jours cernés de fil, souvent blanche sur du coton blanc. Elle donne un effet léger et délicat." },
        { question: "Comment la porter en demi-saison ?", reponse: "Superposez-la avec un kimono ou un peignoir en wax : la fraîcheur du voile reste au premier plan, et la couleur vient du vêtement posé par-dessus." },
      { question: "Faut-il un entretien particulier ?", reponse: "Un filet de lavage et un programme délicat suffisent. Repassez sur l'envers, sur une serviette, afin que la broderie ressorte en relief au lieu d'être écrasée par le fer." },
    ],
  },
  "chemise-de-nuit-coton-dentelle": {
    origine:
      "La dentelle est une garniture ancienne, d'origine européenne, que l'on retrouve sur le linge de maison comme sur les vêtements de nuit depuis plusieurs siècles. Combinée à un coton doux, elle compose une chemise de nuit au style romantique, plus classique que les imprimés wax.\n\nLes finitions en dentelle ornent le col, les bretelles ou l'ourlet, selon les modèles. Elles sont l'âme du vêtement : c'est par elles que l'on distingue une pièce soignée d'une pièce ordinaire.",
    choisir:
      "Comparée à la [chemise de nuit en voile de coton brodé](/produit/chemise-de-nuit-coton-brode), la dentelle ajoute un côté plus ornemental, quand la broderie reste plus sobre. Le [peignoir en wax doublé de satin](/produit/peignoir-wax-double-satin) apporte la couleur ; cette chemise, elle, reste dans les tons doux, ivoire, rose pâle ou bleu nuit.\n\nPour un trousseau, elle s'associe bien au [bethio en coton ajouré](/produit/bethio-coton-ajoure) : deux pièces claires, deux savoir-faire de finition. Courte ou longue, avec ou sans manches : choisissez selon la saison.",
    entretien:
      "La dentelle demande de la douceur : lavez la chemise à la main ou dans un filet de lavage, à 30 °C, avec un produit doux. N'essorez pas fort et ne la tordez pas.\n\nFaites-la sécher à plat, loin d'une source de chaleur. Évitez le sèche-linge. Si vous la repassez, faites-le à basse température, sur l'envers, avec un linge entre le fer et la dentelle. Rangez-la à plat ou pliée, loin de tout ce qui accroche.",
    pourQui:
      "C'est un cadeau de trousseau classique : il se range dans une valise de mariée avec ses autres linges et traverse les années. Il convient aussi à celles qui aiment les tenues douces et traditionnelles, sans motif.\n\nL'ivoire et le blanc sont des valeurs sûres pour un mariage ; le bleu nuit convient à une offrande plus personnelle. Offerte avec un joli coffret ou un écrin de tissu, elle prend l'allure d'un vrai présent de famille, que l'on transmet parfois d'une génération à l'autre.",
    faq: [
        { question: "La dentelle est-elle fragile ?", reponse: "Elle demande plus de précautions que le coton : lavage délicat, séchage à plat, repassage à basse température." },
        { question: "Quelle teinte pour un cadeau de mariage ?", reponse: "L'ivoire et le blanc sont les plus classiques, le rose pâle un peu plus tendre. Le bleu nuit convient à qui préfère une teinte plus profonde." },
      { question: "Comment ranger la dentelle ?", reponse: "Pliez la chemise sans serrer, dentelle vers l'intérieur, dans un tiroir propre. Évitez les cintres étroits qui déforment les bretelles, et ne la mêlez pas à des pièces à fermeture éclair." },
    ],
  },
  "bonnet-satin-wax": {
    origine:
      "Le bonnet de nuit est un accessoire de coiffure que de nombreuses femmes portent pour préserver leur coiffure pendant le sommeil. Sa version en wax, doublée de satin, mêle une tradition textile ouest-africaine et une pratique domestique très répandue, y compris dans la diaspora.\n\nLe satin est lisse et glisse sur les cheveux, ce qui limite les frottements ; le wax apporte la couleur et la solidité. De nombreux modèles sont réversibles, ce qui offre deux imprimés pour le prix d'un.",
    choisir:
      "La taille est le premier critère : des modèles plus larges existent pour les tresses, les locks ou les cheveux volumineux. Les systèmes de fermeture varient : élastique pour la simplicité, cordon pour l'ajustement, nouage pour la liberté de réglage. Un bonnet réversible vous donne deux options d'imprimé.\n\nIl se marie bien avec la [nuisette en coton wax](/produit/nuisette-coton-wax) ou le [pyjama en wax](/produit/pyjama-wax-short-chemise). Pour la journée, le [foulard de tête en wax](/produit/foulard-tete-wax) est un accessoire voisin, à porter dehors plutôt que pour dormir.",
    entretien:
      "Lavez le bonnet à la main, à l'eau froide, avec un savon doux. Ne le frottez pas fortement, surtout du côté satin, et laissez-le sécher à l'air, à l'ombre.\n\nÉvitez le sèche-linge et un fer trop chaud : le satin supporte mal la chaleur. Lavez-le régulièrement, comme une taie d'oreiller, puisqu'il est au contact des cheveux et de la peau. Rangez-le à plat.",
    pourQui:
      "C'est un petit cadeau utile, que l'on glisse avec une tenue assortie : une nuisette, un pyjama, un peignoir. Il plaît à celles qui prennent soin de leurs cheveux et qui apprécient un accessoire aux couleurs de l'Afrique.\n\nPour soi, c'est un geste simple et pratique que l'on adopte vite. Il se range dans le sac de voyage ou la trousse de toilette, et se rachète sans regret dans un autre imprimé pour alterner d'une semaine à l'autre.",
    faq: [
        { question: "Quelle taille pour des tresses ?", reponse: "Choisissez un modèle large, prévu pour les tresses, les locks ou les cheveux volumineux. La description de l'atelier précise souvent cet usage." },
        { question: "Un bonnet réversible, qu'est-ce que c'est ?", reponse: "Un bonnet qui se porte des deux côtés : deux imprimés ou un côté wax et un côté satin selon les modèles." },
      { question: "À quelle fréquence le laver ?", reponse: "Aussi souvent qu'une taie d'oreiller, puisqu'il reste au contact des cheveux et de la peau toute la nuit. Un lavage à la main, à l'eau froide, suffit et ménage le satin." },
    ],
  },
  "pareo-wax": {
    origine:
      "Le paréo est un rectangle de tissu ourlé que l'on noue de mille façons : en pagne, en jupe longue, en étole sur les épaules. L'usage est ancien, et l'on retrouve ce principe de pièce unique drapée dans de nombreuses cultures. En Afrique de l'Ouest, le pagne en est l'équivalent le plus connu.\n\nDans sa version en wax, coton imprimé à la cire, il met en avant ce qui fait la force du wax : l'immensité du choix de motifs et de couleurs. C'est une pièce sans couture, donc sans coupe ni taille.",
    choisir:
      "Le paréo est la pièce la plus simple et la plus polyvalente de la sélection. Le [petit pagne en wax brodé](/produit/petit-pagne-wax-brode) est plus soigné, avec sa broderie d'ourlet, mais moins libre ; pour un tissu que l'on coupe soi-même, le [pagne wax en 6 yards](/produit/pagne-wax-6-yards) offre davantage de longueur.\n\nSi vous voulez l'imprimé sans avoir à choisir une coupe, c'est ici. Il se plie dans un sac et sert aussi de couverture légère. Le [pantalon de détente en wax](/produit/pantalon-detente-wax) est le choix inverse : une pièce déjà cousue.",
    entretien:
      "Lavez-le à 30 °C, avec des couleurs proches, et laissez-le sécher à l'ombre pour que le motif garde son éclat. Un wax neuf peut déteindre légèrement aux premiers lavages : lavez-le seul au départ.\n\nRepassez-le légèrement humide, sur l'envers. Rangez-le plié en rectangle, ou roulé, pour éviter les plis marqués au milieu.",
    pourQui:
      "Pour celles qui aiment avoir une pièce qui s'adapte : à la maison, en vacances, sur une plage. C'est un petit cadeau coloré, que l'on offre à une amie ou que l'on glisse dans un trousseau.\n\nAvec un seul rectangle de tissu, on obtient une jupe, un pagne, une étole : la plus économe des tenues. Rapide à plier, léger à emporter, il dépanne partout : un rectangle de tissu coloré vaut bien plus qu'une pièce qu'on ne mettrait qu'une fois.",
    faq: [
        { question: "De combien de façons peut-on le nouer ?", reponse: "Il n'y a pas de règle : en pagne, en jupe, en étole sur les épaules. Chacune a ses habitués, et l'on invente les siennes." },
        { question: "Le paréo se coupe-t-il ?", reponse: "Il est déjà ourlé et prêt à porter. Évitez de le recouper, car l'ourlet est justement ce qui lui donne sa tenue." },
      { question: "Comment l'utiliser comme étole ?", reponse: "Posez-le sur les épaules et laissez tomber les deux extrémités, ou nouez-en une sur le côté. Plié en deux dans la longueur, il fait une étole fine pour les soirées fraîches à la maison." },
    ],
  },
};
