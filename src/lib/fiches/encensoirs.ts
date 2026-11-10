/**
 * Fiches détaillées de la rubrique « Encensoirs et brûle-parfums » (12 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - encensoir-terre-cuite-ande — Encensoir en terre cuite façon andé
 *   - encensoir-terre-cuite-peint — Encensoir en terre cuite peint à la main
 *   - mabkhara-bois-metal — Mabkhara en bois et métal
 *   - encensoir-laiton-cisele — Encensoir en laiton ciselé à couvercle
 *   - encensoir-ceramique-couvercle — Encensoir en céramique à couvercle ajouré
 *   - brule-parfum-electrique-bakhour — Brûle-parfum électrique pour bakhour
 *   - brule-encens-electrique-rechargeable — Brûle-encens électrique rechargeable
 *   - brule-encens-pierre-a-savon — Brûle-encens en pierre à savon sculptée
 *   - encensoir-chaines-laiton — Encensoir à chaînes en laiton
 *   - pince-charbon-encens — Pince à charbon pour encensoir
 *   - sable-pour-encensoir — Sable pour encensoir
 *   - encensoir-coffret-bakhour — Coffret encensoir et bakhour
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "encensoir-terre-cuite-ande",
  "encensoir-terre-cuite-peint",
  "mabkhara-bois-metal",
  "encensoir-laiton-cisele",
  "encensoir-ceramique-couvercle",
  "brule-parfum-electrique-bakhour",
  "brule-encens-electrique-rechargeable",
  "brule-encens-pierre-a-savon",
  "encensoir-chaines-laiton",
  "pince-charbon-encens",
  "sable-pour-encensoir",
  "encensoir-coffret-bakhour",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {
  "encensoir-terre-cuite-ande": {
    origine:
      "L'andé est le nom que l'on donne au Sénégal à l'encensoir en terre cuite, présent dans bien des maisons. On y dépose du charbon allumé, puis une pincée de thiouraye, ce mélange parfumé de grains et de poudres que l'on brûle pour embaumer la maison, les vêtements et les draps. Le geste se fait avant une fête, à l'arrivée d'invités ou simplement pour le plaisir d'une maison qui sent bon.\n\nLa terre cuite est un matériau ancien, travaillé à la main dans de nombreuses régions d'Afrique. Elle résiste à la chaleur, mais elle n'aime ni les chocs ni les écarts brusques de température. Pour en savoir plus sur le vocabulaire de ces rituels, le [lexique](/lexique) explique les mots wolof de la boutique.",
    choisir:
      "Ce modèle sobre, aux teintes naturelles, convient à qui veut l'objet de référence plus qu'une pièce de décor. Si vous souhaitez un encensoir qui se remarque dans le salon, l'[encensoir en terre cuite peint à la main](/produit/encensoir-terre-cuite-peint) joue davantage sur la couleur. Pour une réception avec un décor plus raffiné, la [mabkhara en bois et métal](/produit/mabkhara-bois-metal) se tient en main par son pied.\n\nPensez aussi à ce qui l'accompagne : un [thiouraye artisanal en sachet](/produit/thiouraye-artisanal-sachet) et des [pastilles de charbon](/produit/pastilles-charbon-encens) suffisent pour commencer, avec du [sable pour encensoir](/produit/sable-pour-encensoir) au fond.",
    entretien:
      "Attendez toujours que l'encensoir soit complètement refroidi avant de le vider. Retirez les cendres et les restes de charbon avec une petite cuillère, puis essuyez l'intérieur avec un chiffon sec. La terre cuite est poreuse : évitez de la plonger dans l'eau, qui peut la fragiliser et ranimer les odeurs anciennes.\n\nLe fond noircit et se patine avec l'usage, c'est normal et même apprécié. Rangez-le à l'abri des chocs, sur une étagère stable, et posez-le toujours sur un support résistant à la chaleur quand il est en service. Gardez-le hors de portée des enfants et ne le laissez jamais allumé sans surveillance.",
    pourQui:
      "Cet andé s'adresse à celles et ceux qui veulent retrouver le geste de la maison sénégalaise sans fioriture : une première fois, ou un remplacement du vieux pot de famille. Il se glisse bien dans une valise pour un proche resté loin du pays, et il fait un cadeau de crémaillère simple et plein de sens, surtout avec un sachet de thiouraye à côté.",
    faq: [
      {
        question: "Faut-il toujours mettre du sable dans un andé ?",
        reponse:
          "C'est une habitude répandue et sage : une couche de sable ou de cendre isole le fond de la braise et protège la terre cuite. Elle aide aussi le charbon à brûler plus régulièrement.",
      },
      {
        question: "Peut-on l'utiliser dans un appartement ?",
        reponse:
          "Oui, avec prudence : pièce aérée, fenêtre entrouverte, support résistant à la chaleur et surveillance constante. Si la fumée vous gêne, un brûle-parfum électrique est une alternative plus douce.",
      },
    ],
  },
  "encensoir-terre-cuite-peint": {
    origine:
      "Peindre la terre cuite est une pratique répandue chez les potières et les artisanes de plusieurs régions d'Afrique : motifs géométriques, bandes colorées, aplats d'ocre ou de blanc. L'encensoir peint prolonge la forme traditionnelle de l'andé, le pot sénégalais où l'on brûle le thiouraye, en lui donnant un rôle de décoration quand le charbon est éteint.\n\nLes couleurs et les motifs varient d'une pièce à l'autre, car ils sont tracés à la main. C'est pourquoi on parle ici d'un type d'objet : chaque exemplaire garde sa petite singularité, et c'est ce que l'on recherche.",
    choisir:
      "Regardez d'abord l'intérieur. Il doit rester en terre nue, car c'est la partie qui reçoit la chaleur ; une peinture sur le fond ne tiendrait pas. Pour un usage plus quotidien et moins fragile, l'[encensoir en terre cuite façon andé](/produit/encensoir-terre-cuite-ande) est le choix de la simplicité.\n\nSi vous aimez un décor plus contemporain, l'[encensoir en céramique à couvercle ajouré](/produit/encensoir-ceramique-couvercle) offre des teintes plus douces. Pour un cadeau, le [coffret encensoir et bakhour](/produit/encensoir-coffret-bakhour) évite de chercher le parfum séparément.",
    entretien:
      "Pas d'eau sur le décor : un chiffon sec suffit pour l'extérieur, et une brosse douce pour dépoussiérer les creux des motifs. Une éponge humide ou un produit ménager pourrait ternir la peinture ou l'entraîner.\n\nAprès chaque usage, laissez refroidir longuement, puis videz les cendres à la cuillère. Un fond de sable avant la braise limite la chaleur sur les parois. Posez l'encensoir sur un plateau en métal, jamais directement sur un meuble verni, et rangez-le à l'abri du soleil direct, qui peut faire pâlir certaines couleurs.",
    pourQui:
      "Il plaît à celles qui aiment que les objets rituels restent en vue. Posé sur un buffet ou une console, il se fait remarquer même éteint. C'est aussi une belle idée de cadeau pour une personne qui aime la décoration d'inspiration africaine : un objet utile, coloré, et qui parle de maison et d'accueil.",
    faq: [
      {
        question: "La peinture résiste-t-elle à la chaleur du charbon ?",
        reponse:
          "Le décor est surtout destiné à l'extérieur. Le sable au fond et un temps de refroidissement avant tout nettoyage protègent la pièce. Évitez de la poser sur une surface qui chauffe fortement.",
      },
      {
        question: "Peut-on le laisser en simple décoration ?",
        reponse:
          "Oui, c'est même l'un de ses atouts. Dépoussiérez-le à sec de temps en temps, et rangez-le à l'écart des endroits où il risquerait de tomber.",
      },
    ],
  },
  "mabkhara-bois-metal": {
    origine:
      "La mabkhara est le brûle-encens traditionnel de la péninsule Arabique, où l'on brûle le bakhour, ces copeaux de bois parfumés. Le mot vient de l'arabe et désigne le récipient dédié à l'encens. Dans la tradition d'accueil, on la fait circuler parmi les invités pour qu'ils parfument leurs vêtements.\n\nAu Sénégal et ailleurs en Afrique de l'Ouest, elle a rejoint les maisons à côté de l'andé, notamment dans les familles qui aiment le bakhour. Son pied en bois, ses finitions en laiton, parfois de nacre ou de pierres de couleur, en font un objet de réception autant qu'un brûle-encens.",
    choisir:
      "Sa force est de se tenir par le pied : on la présente à un invité sans toucher la coupe métallique. Pour un usage plus ancré dans la tradition sénégalaise, l'[encensoir en terre cuite façon andé](/produit/encensoir-terre-cuite-ande) reste plus familier. Si vous aimez le métal ciselé, l'[encensoir en laiton ciselé à couvercle](/produit/encensoir-laiton-cisele) limite les projections de cendre grâce à son couvercle.\n\nPour la garnir, pensez aux [copeaux de bakhour à l'oud](/produit/bakhour-oud-copeaux) ou aux [pastilles de charbon](/produit/pastilles-charbon-encens), sans oublier le sable.",
    entretien:
      "Après usage, laissez la coupe refroidir entièrement avant de la vider. Retirez les cendres, puis essuyez le métal avec un chiffon doux. Le laiton se patine avec le temps ; si vous préférez l'éclat d'origine, un chiffon doux et un produit adapté au métal feront l'affaire.\n\nLe bois, lui, craint l'eau et la chaleur : évitez de l'immerger et de poser la coupe chaude sur une table non protégée. Rangez la mabkhara debout, à l'abri des chocs, et gardez-la loin des enfants. Ne la laissez jamais allumée sans surveillance.",
    pourQui:
      "Elle convient à qui reçoit souvent et aime offrir une ambiance à ses invités : repas de fête, après-midi entre amies, Tabaski. Elle se destine aussi aux amateurs de bakhour qui cherchent un beau support plutôt qu'un simple pot. Comme cadeau, son allure soignée fait de l'effet sans exiger de connaître l'encens.",
    faq: [
      {
        question: "Que signifie le mot mabkhara ?",
        reponse:
          "Il désigne en arabe le récipient où l'on brûle l'encens. On parle aussi de brûle-encens ou d'encensoir ; le [lexique](/lexique) rassemble ces mots.",
      },
      {
        question: "Peut-on y brûler du thiouraye ?",
        reponse:
          "On peut y brûler des encens sur braise, dont le thiouraye ou le bakhour. Gardez toujours un fond de sable sous le charbon pour ménager la coupe.",
      },
    ],
  },
  "encensoir-laiton-cisele": {
    origine:
      "Le métal ciselé, laiton ou cuivre, fait partie des arts de la table et de la maison d'Afrique du Nord et du Moyen-Orient : plateaux, lanternes, théières, brûle-parfums. L'encensoir à couvercle ajouré en reprend les motifs, souvent floraux ou géométriques, que la fumée vient traverser avant de s'élever en volutes fines.\n\nLe laiton est un alliage de cuivre et de zinc, apprécié des artisans parce qu'il se travaille bien et se patine joliment. L'objet prolonge ainsi une tradition de métal décoratif, qui se retrouve aussi dans la mabkhara de réception.",
    choisir:
      "Le couvercle est la clé : il retient les étincelles et filtre la fumée, ce que n'offre pas l'andé ouvert. C'est un avantage dans un salon où l'on craint les projections. Comparez-le avec l'[encensoir à chaînes en laiton](/produit/encensoir-chaines-laiton), qui se porte de pièce en pièce, et avec la [mabkhara en bois et métal](/produit/mabkhara-bois-metal), plus pratique à faire circuler.\n\nPour le garnir, du [bakhour en pastilles moulées](/produit/bakhour-pastilles-moulees) se prête bien au format du couvercle ajouré.",
    entretien:
      "Le métal chauffe très fort : attendez le refroidissement complet avant toute manipulation et videz-le à la cuillère. Essuyez ensuite avec un chiffon doux. Évitez de le laver à grande eau, qui laisse des marques et ternit le métal.\n\nLa patine qui se forme est naturelle. Si vous la préférez claire, un chiffon doux suffit à raviver l'éclat, sans produit abrasif sur les parties ciselées. Posez-le sur un plateau résistant à la chaleur, et rangez-le couvercle fermé, loin des enfants, en vérifiant que les ajours ne sont pas obstrués par la cendre.",
    pourQui:
      "Il plaît aux amateurs de beaux objets en métal, qui aiment voir la fumée jouer avec le décor. Il s'invite volontiers sur une table basse ou une étagère, à condition que le support résiste à la chaleur, et il gagne à être sorti pour les occasions où l'on reçoit : un repas de fête, une fin d'après-midi entre amies, une veille de Tabaski. En cadeau, il convient à une personne qui reçoit et qui apprécie les décors orientaux, à condition de lui rappeler d'y glisser un fond de sable.",
    faq: [
      {
        question: "Le couvercle se referme-t-il pendant l'usage ?",
        reponse:
          "Oui, après avoir déposé l'encens sur la braise. Les ajours laissent la fumée s'échapper. Rouvrez avec précaution : le métal est brûlant.",
      },
      {
        question: "Le laiton s'abîme-t-il avec le temps ?",
        reponse:
          "Il se patine plutôt qu'il ne s'abîme. L'aspect change, ce que beaucoup apprécient. Un entretien doux suffit.",
      },
    ],
  },
  "encensoir-ceramique-couvercle": {
    origine:
      "La céramique émaillée est une terre cuite recouverte d'une fine couche vitrifiée, qui la rend lisse et facile à nettoyer. Les potiers l'emploient depuis longtemps pour des objets de table et de décoration. L'encensoir en céramique à couvercle ajouré en est une version contemporaine, qui reprend l'idée du brûle-parfum en laissant la fumée passer par des ouvertures.\n\nIl ne se rattache pas à une tradition précise, mais il trouve sa place chez celles qui aiment le thiouraye ou le bakhour tout en gardant un intérieur épuré.",
    choisir:
      "Vérifiez d'abord qu'il est prévu pour le charbon : certains modèles ne conviennent qu'aux bâtonnets. Face à l'[encensoir en terre cuite façon andé](/produit/encensoir-terre-cuite-ande), l'émail est plus lisse et plus facile à essuyer, mais il supporte moins bien les chocs de chaleur sans sable.\n\nS'il vous faut une alternative sans braise, le [brûle-parfum électrique pour bakhour](/produit/brule-parfum-electrique-bakhour) évite le charbon. Les [bâtonnets d'encens à l'oud](/produit/batonnets-encens-oud) sont l'option la plus simple si l'encensoir est prévu pour eux.",
    entretien:
      "L'émail se nettoie facilement, mais jamais à chaud. Attendez que la céramique soit froide, retirez les cendres et lavez avec de l'eau tiède et un peu de savon doux, puis séchez bien. Pas de brusque passage du chaud au froid : il peut fissurer l'émail.\n\nRangez-le couvercle posé à part ou fermé, à l'abri des chocs. Utilisez toujours un fond de sable pour répartir la chaleur et surveillez l'encensoir pendant l'usage. Posez-le sur un support plat et résistant à la chaleur, loin des enfants et des tissus.",
    pourQui:
      "Il convient à celles et ceux qui veulent un encensoir discret, qui s'harmonise avec un intérieur moderne. Il se prête à un premier essai sans engagement et fait un cadeau agréable pour quelqu'un qui aime les objets sobres. En revanche, il parlera moins à qui cherche la patine d'un pot de famille. Sa surface lisse ne se marque pas comme la terre cuite, ce qui plaira à celles qui préfèrent un objet qui garde son aspect neuf, mais qui ne gagnera pas la patine des pots que l'on se transmet.",
    faq: [
      {
        question: "Peut-on y brûler du charbon ?",
        reponse:
          "Seulement si le modèle est annoncé pour le charbon. Lisez la description avant d'acheter, et gardez un fond de sable sous la braise.",
      },
      {
        question: "Que faire si la fumée gêne ?",
        reponse:
          "Aérez la pièce et utilisez de plus petites quantités d'encens. Ouvrez une fenêtre quelques minutes avant et pendant l'usage. Vous pouvez aussi choisir un modèle électrique, plus doux.",
      },
    ],
  },
  "brule-parfum-electrique-bakhour": {
    origine:
      "Le bakhour et le thiouraye se brûlent traditionnellement sur du charbon. Le brûle-parfum électrique est une adaptation moderne de ce geste : une petite plaque chauffante remplace la braise, et l'encens est chauffé plutôt que consumé. On obtient un parfum plus discret et moins de fumée.\n\nIl s'est répandu avec la vie en appartement, où le charbon peut être difficile à gérer, et auprès de celles qui veulent garder la tradition olfactive sans ses contraintes.",
    choisir:
      "Son atout est de supprimer le charbon et la cendre. Face à l'[encensoir en céramique à couvercle ajouré](/produit/encensoir-ceramique-couvercle), il demande moins de surveillance, mais il ne produit pas la même fumée. Le [brûle-encens électrique rechargeable](/produit/brule-encens-electrique-rechargeable) est plus petit et se déplace, alors que celui-ci se branche sur une prise.\n\nPour l'alimenter, les [copeaux de bakhour à l'oud](/produit/bakhour-oud-copeaux) et les [pastilles de bakhour moulées](/produit/bakhour-pastilles-moulees) conviennent bien, par petites quantités.",
    entretien:
      "Débranchez toujours l'appareil et laissez la plaque refroidir avant de la nettoyer. Retirez les résidus avec un chiffon sec ou une brosse douce ; évitez l'eau sur les parties électriques. Les restes d'encens collants se détachent mieux lorsque la plaque est tiède puis froide.\n\nPosez l'appareil sur une surface plane et stable, loin des rideaux et des tissus. Surveillez-le pendant le fonctionnement, ne le laissez pas allumé en votre absence et gardez-le hors de portée des enfants. Rangez-le sec, câble enroulé sans le serrer. Avant la première utilisation, faites un essai en pleine journée, pièce aérée, pour vous familiariser avec les réglages : un copeau minuscule suffit à parfumer une pièce moyenne. Si une odeur de brûlé apparaît, baissez la température ou retirez l'encens. Ne couvrez jamais l'appareil et ne posez rien dessus pendant qu'il chauffe.",
    pourQui:
      "Il s'adresse aux habitants d'appartement, aux personnes sensibles à la fumée et à celles qui veulent parfumer une pièce sans préparer de braise. C'est aussi un cadeau pratique pour quelqu'un qui aime le bakhour mais n'ose pas allumer de charbon. Si vous aimez le rituel de la braise, il vous manquera peut-être. Dans ce cas, gardez-le pour les jours où l'on veut un parfum léger, par exemple le soir, et réservez l'andé aux grandes occasions. Beaucoup de foyers font cohabiter les deux sans difficulté.",
    faq: [
      {
        question: "Le parfum est-il aussi présent qu'avec du charbon ?",
        reponse:
          "Il est généralement plus doux et plus discret, puisque l'encens est chauffé et non brûlé. Beaucoup apprécient cette finesse.",
      },
      {
        question: "Peut-on y mettre du thiouraye ?",
        reponse:
          "Oui, en petite pincée, comme pour le bakhour. Commencez à basse température pour ne pas le brûler.",
      },
    ],
  },
  "brule-encens-electrique-rechargeable": {
    origine:
      "Les petits brûle-encens rechargeables par câble USB sont des objets récents, nés de l'envie d'emporter son parfum partout. Ils chauffent un copeau de bakhour sur une plaque, sans flamme ni charbon, et se glissent dans un sac ou une valise.\n\nIls ne relèvent pas d'une tradition ancienne, mais ils prolongent une pratique très ancrée : parfumer l'accueil, la chambre d'un invité ou l'entrée avant une visite. L'appareil n'est qu'un moyen moderne de faire ce geste.",
    choisir:
      "Sa qualité est la mobilité : pas de prise nécessaire. Face au [brûle-parfum électrique pour bakhour](/produit/brule-parfum-electrique-bakhour), qui se branche et se règle, il offre moins de durée mais plus de liberté. Sa petite plaque ne reçoit qu'un copeau à la fois.\n\nPour un décor plus traditionnel, une [mabkhara en bois et métal](/produit/mabkhara-bois-metal) a plus d'allure, mais elle exige du charbon. Les [copeaux de bois de santal](/produit/copeaux-bois-de-santal) conviennent aux petites plaques.",
    entretien:
      "Éteignez l'appareil après chaque usage et laissez la plaque refroidir avant de la nettoyer. Un chiffon sec ou un coton-tige retire les résidus d'encens ; pas d'eau, pas d'immersion. Rechargez-le avec le câble prévu et ne le laissez pas branché sans nécessité.\n\nRangez-le au sec, dans une pochette, à l'écart des objets métalliques qui pourraient rayer la plaque. En voyage, vérifiez qu'il est éteint et refroidi avant de le glisser dans un bagage. Prenez l'habitude de le charger avant un séjour plutôt que sur place, et de ne pas le laisser branché toute la nuit. Si la plaque tarde à chauffer, c'est souvent que la batterie est faible : rechargez-la complètement. Un copeau trop gros se consume mal sur une petite plaque, mieux vaut le casser en fragments. Surveillez-le toujours quand il chauffe et gardez-le hors de portée des enfants.",
    pourQui:
      "Il est destiné aux personnes qui bougent : étudiantes en chambre, voyageuses, familles qui séjournent chez leurs proches. Il convient aussi à qui souhaite essayer le bakhour sans investir dans un grand encensoir. Offert, il fait un petit cadeau malin pour une personne qui aime les parfums d'ambiance. Il se range facilement dans un tiroir entre deux séjours, et s'oublie moins qu'un encensoir encombrant : c'est souvent ce qui le fait utiliser régulièrement, par petites touches, avant l'arrivée d'un invité ou avant de se coucher.",
    faq: [
      {
        question: "Peut-on l'emporter en voyage ?",
        reponse:
          "Pensez à l'éteindre et à le laisser refroidir avant de le ranger. Pour l'avion, renseignez-vous sur les règles de la compagnie concernant les appareils rechargeables.",
      },
      {
        question: "Combien de copeaux peut-on y mettre ?",
        reponse:
          "Un seul à la fois : la plaque est petite. Ajoutez-en un autre quand le premier a rendu son parfum.",
      },
    ],
  },
  "brule-encens-pierre-a-savon": {
    origine:
      "La pierre à savon est une pierre tendre, que l'on sculpte facilement au couteau. Au Kenya, elle est travaillée par des artisans pour des objets de décoration, des bols et des brûle-encens, et on la retrouve aussi dans d'autres régions. Elle se décline en teintes claires, rosées ou sombres selon les veines de la pierre.\n\nLes formes arrondies et les motifs ajourés donnent à ces pièces un caractère artisanal très reconnaissable, loin des objets en série.",
    choisir:
      "Avant tout, lisez à quoi la pièce est destinée : certaines accueillent des bâtonnets, d'autres le charbon. Pour du charbon, préférez un fond bien épais et prévoyez du sable. Comparez avec l'[encensoir en terre cuite peint à la main](/produit/encensoir-terre-cuite-peint), plus coloré, ou l'[encensoir en céramique à couvercle ajouré](/produit/encensoir-ceramique-couvercle), plus lisse.\n\nSi vous brûlez des bâtonnets, les [bâtonnets d'encens à l'oud](/produit/batonnets-encens-oud) s'y prêtent. Pour le charbon, le [sable pour encensoir](/produit/sable-pour-encensoir) est indispensable.",
    entretien:
      "La pierre à savon est tendre : elle se raye et peut se fendre à la chute. Nettoyez-la à sec avec une brosse douce, sans abrasif ni eau en excès. Retirez les cendres une fois la pièce refroidie.\n\nPosez-la sur une surface plane et stable, à l'abri des chocs. Une couche de sable protège la pierre de la chaleur directe du charbon. Ne la laissez pas allumée sans surveillance et gardez-la loin des enfants. La pierre peut prendre des traces avec le temps, c'est le propre d'un objet naturel. Choisissez un emplacement où la pièce ne risque pas d'être bousculée, loin du bord d'une table, d'une source d'eau ou d'un radiateur. Si elle est ajourée, vérifiez de temps en temps que les ouvertures ne se bouchent pas de cendre, et retirez-la d'un coup de brosse douce.",
    pourQui:
      "Il s'adresse à celles et ceux qui aiment les objets sculptés, doux au toucher, qui apportent une touche africaine élégante sans excès. Il se prête à une chambre ou un coin lecture, avec des bâtonnets plus que du charbon. Comme cadeau, il plaît à une amie qui aime les pièces d'artisanat. Vous pouvez l'accompagner d'un sachet de sable et d'un petit lot de bâtonnets pour qu'elle puisse l'utiliser dès le premier soir, sans courir chercher le reste.",
    faq: [
      {
        question: "Peut-on y brûler du charbon ?",
        reponse:
          "Seulement si la pièce est prévue pour cela. Dans ce cas, mettez du sable au fond et surveillez-la. Sinon, restez aux bâtonnets.",
      },
      {
        question: "Comment la nettoyer sans l'abîmer ?",
        reponse:
          "À sec, avec une brosse douce. Évitez les produits ménagers et l'eau en excès, qui altèrent la surface.",
      },
    ],
  },
  "encensoir-chaines-laiton": {
    origine:
      "L'encensoir à chaînes se balance à la main ou se suspend. On le connaît dans de nombreuses traditions religieuses et cérémonielles, où l'on parfume l'espace en le portant. La version en laiton reprend cette forme pour un usage domestique : on parcourt la maison pièce après pièce en laissant un sillage.\n\nLe laiton, alliage de cuivre et de zinc, se patine bien et se travaille facilement, ce qui explique sa présence dans de nombreux objets anciens.",
    choisir:
      "Sa spécificité est la mobilité : on le porte par les chaînes, ce qui permet de parfumer plusieurs pièces. Face à l'[encensoir en laiton ciselé à couvercle](/produit/encensoir-laiton-cisele), qui reste posé sur un plateau, il demande plus de précaution, car il se balance. La [mabkhara en bois et métal](/produit/mabkhara-bois-metal) se tient plus stable par son pied.\n\nPour l'alimenter, choisissez des [pastilles de charbon](/produit/pastilles-charbon-encens) et un encens en petits morceaux, comme l'[oliban en grains](/produit/oliban-en-grains).",
    entretien:
      "Laissez-le refroidir complètement avant de le vider, puis retirez les cendres. Essuyez le laiton avec un chiffon doux ; la patine est naturelle. Vérifiez de temps en temps les anneaux de chaîne et l'attache : un maillon fatigué pourrait céder avec un encensoir chaud.\n\nSi vous le suspendez, utilisez un crochet solide, loin des rideaux et des tissus, et ne le laissez pas sans surveillance. Gardez-le hors de portée des enfants. Rangez-le couvercle fermé, chaînes repliées sans les entortiller. Avant chaque utilisation, soulevez le couvercle pour vérifier le fond : il doit être propre et garni de sable frais. Tenez-vous droite, bras légèrement écarté du corps, et ne vous penchez pas au-dessus de l'encensoir. Évitez de le porter dans un escalier ou dans une pièce encombrée, où un faux pas serait vite arrivé.",
    pourQui:
      "Il convient à celles et ceux qui aiment le geste de parcourir la maison avec la fumée, par exemple avant une fête ou à l'arrivée d'invités. Il s'adresse à des personnes à l'aise avec la braise. Offert, il touche les amateurs d'objets anciens et de rituels. Il demande un peu d'habitude : commencez par de petites quantités d'encens et un fond de sable généreux, puis portez-le lentement, à bout de bras, en regardant où vous posez les pieds.",
    faq: [
      {
        question: "Peut-on le suspendre en permanence ?",
        reponse:
          "Il est préférable de ne le suspendre que le temps de l'usage, à un crochet solide, loin des tissus, sans jamais le laisser seul.",
      },
      {
        question: "Faut-il du sable dedans ?",
        reponse:
          "Oui, un fond de sable limite la chaleur sur le métal et stabilise la braise pendant que vous le déplacez.",
      },
    ],
  },
  "pince-charbon-encens": {
    origine:
      "Le charbon d'encens s'allume à la flamme et se manipule avec une pince : l'outil est aussi vieux que l'usage de la braise parfumée. Il accompagne l'andé, la mabkhara ou l'encensoir à chaînes, et reste le geste de sécurité le plus simple.\n\nElle est faite d'acier ou de laiton, deux métaux solides qui supportent la chaleur, et se rattache à une famille d'ustensiles de maison dont on ne se passe pas une fois qu'on les a adoptés.",
    choisir:
      "Le critère principal est la longueur : plus la pince est longue, plus votre main reste loin de la braise. Veillez aussi à ce que les mors saisissent bien une pastille ronde. Ce petit outil complète tous les encensoirs de la boutique, de l'[encensoir en terre cuite façon andé](/produit/encensoir-terre-cuite-ande) à l'[encensoir à chaînes en laiton](/produit/encensoir-chaines-laiton).\n\nAvec elle, des [pastilles de charbon](/produit/pastilles-charbon-encens) ou du [charbon de noix de coco](/produit/charbon-noix-de-coco) s'allument et se posent sans se brûler les doigts.",
    entretien:
      "Après usage, laissez la pince refroidir : le métal garde la chaleur. Essuyez-la avec un chiffon sec pour retirer la suie et la poussière de charbon. Si des résidus collants d'encens restent, frottez doucement avec un chiffon légèrement humide, puis séchez bien pour éviter la rouille, surtout sur l'acier.\n\nRangez-la avec vos encensoirs, hors de portée des enfants, de préférence dans un tiroir ou une pochette. Vérifiez que l'articulation reste souple. Une pince qui coince est moins sûre à manipuler. Si le métal s'est terni, un chiffon doux suffit : n'utilisez pas de produit gras sur les mors, qui pourrait fumer au contact de la braise. Posez-la à portée de main avant d'allumer, car on a rarement les mains libres une fois la pastille en train de rougir.",
    pourQui:
      "Elle s'adresse à toute personne qui allume du charbon : débutante comme habituée. C'est le petit accessoire qui fait la différence, et qu'on oublie souvent d'acheter. Elle se glisse naturellement dans un coffret ou un panier cadeau pour compléter un encensoir offert. Choisissez-en une paire si deux personnes de la maison allument le charbon, ou gardez-en une près de chaque encensoir : on la retrouve ainsi toujours au bon endroit, sans la chercher quand la braise est déjà allumée.",
    faq: [
      {
        question: "Peut-on allumer le charbon sans pince ?",
        reponse:
          "On le déconseille : la pastille s'embrase vite et la chaleur est vive. La pince garde les doigts à distance.",
      },
      {
        question: "Quelle longueur choisir ?",
        reponse:
          "Une pince assez longue pour que votre main reste loin de la braise, tout en restant maniable pour l'encensoir que vous utilisez.",
      },
    ],
  },
  "sable-pour-encensoir": {
    origine:
      "Mettre du sable au fond d'un encensoir est un geste de métier, transmis dans les maisons où l'on brûle le thiouraye ou le bakhour. Le sable fait tampon : il isole le charbon du fond de l'andé et répartit la chaleur. On utilise aussi de la cendre pour cela.\n\nC'est un accessoire modeste, mais qui protège les pots de terre cuite ou de céramique, souvent chers à leur propriétaire.",
    choisir:
      "Choisissez un sable fin et sec, sans humidité ni poussière. C'est un accessoire plus qu'un produit parfumé : il fonctionne avec tous les encensoirs, de l'[encensoir en terre cuite peint à la main](/produit/encensoir-terre-cuite-peint) à la [mabkhara en bois et métal](/produit/mabkhara-bois-metal).\n\nIl complète bien des [pastilles de charbon](/produit/pastilles-charbon-encens) et une [pince à charbon](/produit/pince-charbon-encens) : ces trois accessoires forment un petit trio utile à qui démarre.",
    entretien:
      "Après chaque usage, laissez refroidir, puis retirez à la petite cuillère les restes de charbon et d'encens. Un sable propre se réutilise plusieurs fois. Quand il est trop chargé de cendres ou de résidus collants, remplacez-le.\n\nConservez le sachet fermé, au sec, car l'humidité fait grumeler le sable et peut gêner l'allumage. Ne jetez pas le sable chaud dans une poubelle : attendez qu'il soit complètement froid. Gardez le sachet hors de portée des enfants. Si vous possédez plusieurs encensoirs, gardez un peu de sable dans un petit pot fermé près de chacun. Le sable propre est clair et sans odeur : s'il sent le brûlé ou s'agglomère en croûtes dures, il est temps de le renouveler.",
    pourQui:
      "Il intéresse tous ceux qui possèdent un encensoir en terre cuite ou en céramique, et plus encore les débutantes qui ignorent ce détail. C'est un ajout économique à un cadeau d'encensoir : un sachet glissé à côté rend l'ensemble prêt à l'emploi, sans mauvaise surprise. Pour une fête des mères ou un anniversaire, un sachet de sable glissé dans un joli tissu accompagne bien un encensoir déjà possédé : le cadeau reste modeste mais pensé, et il sert dès le premier allumage. Il se range aussi sans encombrement dans un placard et dure longtemps : un seul sachet accompagne de nombreux allumages, et il passe d'un encensoir à l'autre sans difficulté.",
    faq: [
      {
        question: "Le sable est-il vraiment nécessaire ?",
        reponse:
          "Il n'est pas obligatoire, mais il protège le fond de l'encensoir et rend la braise plus stable. Il est recommandé pour la terre cuite et la céramique.",
      },
      {
        question: "Peut-on utiliser du sable de plage ?",
        reponse:
          "Mieux vaut un sable fin et sec prévu pour cet usage. Le sable humide ou salé n'est pas adapté.",
      },
    ],
  },
  "encensoir-coffret-bakhour": {
    origine:
      "Offrir de l'encens est une marque d'accueil qui traverse bien des cultures. Au Sénégal et dans la région, on offre le thiouraye ou le bakhour pour une fête, un mariage, un déménagement. Le coffret rassemble le récipient et le parfum, ce qui évite à celui qui reçoit de chercher chaque élément.\n\nLe contenu varie beaucoup d'un coffret à l'autre : c'est un type de cadeau, non une référence précise. Lisez toujours la description pour savoir ce qu'il contient.",
    choisir:
      "Regardez le contenu : un coffret avec une mabkhara demande du charbon, un coffret avec un brûle-parfum électrique non. Comparez avec le [coffret bakhour et brûle-parfum](/produit/coffret-bakhour-brule-parfum) ou le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir), qui visent plutôt le thiouraye.\n\nSi la personne possède déjà un encensoir, un [bakhour en boîte décorée](/produit/bakhour-boite-decoree) peut suffire. Sinon, le coffret reste le cadeau le plus complet.",
    entretien:
      "Gardez la boîte de bakhour bien fermée, au sec et à l'abri de la chaleur, pour conserver son parfum. Entretenez l'encensoir selon sa matière : cendres à la cuillère après refroidissement, chiffon sec, pas d'eau sur le bois ni la terre cuite.\n\nConservez l'écrin : il sert à ranger le coffret entre deux usages. Rangez le tout hors de portée des enfants et ne laissez jamais le charbon sans surveillance. Si le coffret contient du charbon, gardez-le au sec. À l'ouverture, prenez le temps de lire la notice éventuelle et de vérifier que chaque élément est bien là. Si vous l'offrez, joignez une courte carte indiquant la méthode d'usage (sable, braise, petite quantité d'encens) : cela rassure ceux qui n'ont jamais allumé de charbon et valorise le geste de l'accueil.",
    pourQui:
      "C'est le cadeau de ceux qui veulent offrir sans hésiter : Tabaski, mariage, crémaillère, remerciement à une hôtesse. Il convient à une personne qui découvre l'encens comme à une habituée qui souhaite renouveler son matériel. L'écrin apporte l'effet cadeau, et vous évite d'assembler un panier vous-même. Pour un envoi à distance, vérifiez que le contenu est bien protégé dans son écrin, car le bois, la terre cuite ou le métal ne supportent pas les chocs. Pensez à glisser un petit mot pour expliquer l'usage du bakhour à celui ou celle qui le découvre.",
    faq: [
      {
        question: "Que contient exactement un coffret ?",
        reponse:
          "Cela varie : un encensoir ou brûle-parfum, une boîte de bakhour, parfois du charbon. Vérifiez la description du modèle avant de commander.",
      },
      {
        question: "Faut-il acheter autre chose pour l'utiliser ?",
        reponse:
          "Souvent du sable et une pince à charbon, si l'encensoir fonctionne à la braise. Un modèle électrique n'en demande pas.",
      },
    ],
  },
};
