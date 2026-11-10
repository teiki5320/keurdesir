/**
 * Fiches détaillées de la rubrique « Bine-bine et baya » (19 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - bine-bine-rocaille-rouge-or — Bine-bine en perles de rocaille rouge et or
 *   - bine-bine-elastique-multicolore — Lot de bine-bine élastiques multicolores
 *   - bine-bine-fermoir-chainette — Bine-bine à fermoir et chaînette d'extension
 *   - bine-bine-cristal-blanc — Bine-bine en perles de cristal blanc
 *   - bine-bine-perles-dorees — Bine-bine en perles dorées scintillantes
 *   - bine-bine-vert-or — Bine-bine vert et or
 *   - bine-bine-bleu-argent — Bine-bine bleu et argent
 *   - bine-bine-double-rang — Bine-bine double rang
 *   - bine-bine-kit-creation — Kit pour créer ses bine-bine
 *   - bine-bine-fil-elastique — Fil élastique transparent pour bine-bine
 *   - bine-bine-pochette-wax — Pochette en wax pour ranger ses bine-bine
 *   - baya-krobo-ghana — Baya en perles de Krobo du Ghana
 *   - baya-cauris — Baya en perles de verre et cauris
 *   - baya-a-nouer-coton — Baya à nouer sur fil de coton
 *   - baya-verre-fait-main — Baya en perles de verre faites main
 *   - baya-perles-bois — Baya en perles de bois
 *   - baya-pierres-naturelles — Baya en pierres naturelles
 *   - baya-mariee-blanc-or — Baya de mariée blanc et or
 *   - baya-couleurs-panafricaines — Baya aux couleurs panafricaines
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "bine-bine-rocaille-rouge-or",
  "bine-bine-elastique-multicolore",
  "bine-bine-fermoir-chainette",
  "bine-bine-cristal-blanc",
  "bine-bine-perles-dorees",
  "bine-bine-vert-or",
  "bine-bine-bleu-argent",
  "bine-bine-double-rang",
  "bine-bine-kit-creation",
  "bine-bine-fil-elastique",
  "bine-bine-pochette-wax",
  "baya-krobo-ghana",
  "baya-cauris",
  "baya-a-nouer-coton",
  "baya-verre-fait-main",
  "baya-perles-bois",
  "baya-pierres-naturelles",
  "baya-mariee-blanc-or",
  "baya-couleurs-panafricaines",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {
  // Fiche modèle : à prendre comme exemple pour la forme, jamais pour recopier des phrases.
  "bine-bine-rocaille-rouge-or": {
    origine:
      "Les bine-bine, que l'on appelle aussi perles de taille, sont des rangs de petites perles que les femmes d'Afrique de l'Ouest portent autour des hanches, sous les vêtements. Au Sénégal, ils font partie de la parure traditionnelle et se transmettent souvent de mère en fille ou d'une femme à l'autre, comme un secret de féminité qui se confie plutôt qu'il ne s'affiche.\n\nLes perles de rocaille, de minuscules perles de verre aux couleurs vives, se prêtent bien à ce travail de patience : on les enfile une à une sur un fil que l'on noue à la mesure de celle qui le portera. Le rouge et l'or forment l'un des accords les plus répandus. Pour comprendre le sens de ces parures, notre article [Origine et symbolique des bine-bine](/conseils/origine-et-symbolique-des-bine-bine) retrace leur place dans la culture sénégalaise.",
    choisir:
      "Ce rang à fil à nouer se règle exactement à votre tour de taille : c'est sa principale différence avec le [lot de bine-bine élastiques multicolores](/produit/bine-bine-elastique-multicolore), qui s'enfile sans nœud et convient mieux pour découvrir plusieurs couleurs d'un coup. Si vous aimez l'éclat de l'or, regardez aussi les [bine-bine à perles dorées](/produit/bine-bine-perles-dorees), plus sobres, ou le [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc), plus lumineux.\n\nPour un premier achat, un rang unique comme celui-ci est un bon départ. Si vous préférez un rang qui s'ouvre et se ferme sans nœud, le [bine-bine à fermoir et chaînette](/produit/bine-bine-fermoir-chainette) est plus pratique au quotidien.",
    entretien:
      "Les perles de verre supportent bien le quotidien, mais le fil est le point fragile. Retirez le rang avant la douche, la baignade ou le sport : l'eau, le savon et la transpiration l'usent plus vite que le temps. Essuyez-le d'un chiffon doux et sec si nécessaire.\n\nRangez-le à plat ou enroulé dans une petite pochette, à l'écart des fermoirs et des bijoux pointus qui pourraient accrocher le fil. Si le fil casse, ne jetez rien : les perles se renfilent. Un nœud serré à chaque extrémité suffit pour refaire un rang, et c'est précisément pour cela que le fil à nouer reste le montage traditionnel.",
    pourQui:
      "C'est un rang pensé pour celles qui découvrent les bine-bine et veulent une pièce facile à porter, qui va avec tout. Il convient aussi à celles qui possèdent déjà plusieurs rangs et cherchent un accord rouge et or classique pour les compléter.\n\nIl fait un cadeau simple et chargé de sens pour une amie, une sœur ou une future mariée, surtout accompagné d'un mot qui explique la tradition. Pour d'autres idées, parcourez notre sélection [Top 10 des bine-bine pour débuter](/top-10/bine-bine-debuter).",
    faq: [
      {
        question: "Que sont les bine-bine ?",
        reponse:
          "Ce sont des rangs de petites perles portés à la taille, sous les vêtements, selon une tradition ouest-africaine, en particulier au Sénégal. On les appelle aussi perles de taille. Ils font partie de la parure féminine et se transmettent souvent entre femmes.",
      },
      {
        question: "Comment choisir la bonne longueur ?",
        reponse:
          "Mesurez votre tour de taille à l'endroit où vous souhaitez le porter, avec un mètre de couture. Avec un fil à nouer, on ajuste ensuite à la mesure exacte en serrant le nœud, ce qui permet de choisir précisément.",
      },
      {
        question: "Peut-on le porter avec d'autres bine-bine ?",
        reponse:
          "Oui, c'est même l'usage : les rangs se portent seuls ou en plusieurs couleurs. Le rouge et l'or s'associent facilement avec le blanc, le bleu ou le vert, pour composer votre propre ensemble.",
      },
    ],
  },
  "bine-bine-elastique-multicolore": {
    origine:
      "Dans la tradition ouest-africaine, une femme ne porte presque jamais un seul rang : elle en accumule plusieurs, de couleurs différentes, qu'elle assemble selon son humeur et ses tenues. Ce lot reprend cette habitude en proposant plusieurs rangs d'un seul coup, montés en perles de rocaille sur fil élastique plutôt qu'à la façon des anciens, avec un fil noué à la main.\n\nLe procédé est plus récent, mais l'esprit reste le même : une parure discrète, que l'on garde sous les vêtements et que l'on compose librement. Pour situer ces perles de taille dans leur contexte, lisez [Origine et symbolique des bine-bine](/conseils/origine-et-symbolique-des-bine-bine).",
    choisir:
      "L'intérêt de ce lot tient à la variété : vous voyez à l'usage quelles couleurs vous flattent avant d'investir dans une pièce plus travaillée. Si vous savez déjà que vous aimez une teinte précise, un rang unique comme le [bine-bine vert et or](/produit/bine-bine-vert-or) ou le [bine-bine bleu et argent](/produit/bine-bine-bleu-argent) sera plus abouti qu'un assortiment.\n\nPar rapport au [bine-bine en rocaille rouge et or](/produit/bine-bine-rocaille-rouge-or), monté sur fil à nouer, l'élastique ne se règle pas au centimètre : il s'adapte en s'étirant. Comptez donc sur un confort souple plutôt que sur un ajustement exact. Notre [Top 10 des bine-bine pour débuter](/top-10/bine-bine-debuter) vous aide à comparer.",
    entretien:
      "L'élastique est le maillon sensible : il se détend avec le temps, surtout s'il est tiré fort ou exposé à l'eau, au savon et à la chaleur. Retirez les rangs avant la douche et le sport, et enfilez-les toujours en douceur, sans les étirer plus que nécessaire.\n\nQuand un rang se détend ou cède, les perles ne sont pas perdues : il suffit de les renfiler sur un nouvel élastique. Un [fil élastique transparent](/produit/bine-bine-fil-elastique) prolonge ainsi la vie du lot. Rangez les rangs à plat, chacun séparé des autres, pour éviter qu'ils ne s'emmêlent.",
    pourQui:
      "Ce lot s'adresse à celles qui veulent découvrir les bine-bine sans engagement, ou qui aiment varier de couleur au fil des semaines. Il convient aussi à une première expérience pour une adolescente ou une amie curieuse de cette parure.\n\nIl se partage facilement : on peut garder quelques rangs et en offrir d'autres, ce qui en fait un cadeau généreux pour une fête entre amies. Une jolie [pochette en wax](/produit/bine-bine-pochette-wax) l'accompagne très bien.",
    faq: [
      {
        question: "Faut-il un nœud pour porter ces rangs ?",
        reponse:
          "Non, le fil élastique s'enfile par les jambes et se retire de la même façon, sans nœud à défaire. C'est justement ce qui rend ce format simple pour commencer.",
      },
      {
        question: "Combien de rangs peut-on porter ensemble ?",
        reponse:
          "Il n'y a pas de règle : certaines en portent deux, d'autres davantage. Commencez par deux ou trois couleurs qui s'accordent, puis ajoutez selon le confort et l'effet voulu.",
      },
      {
        question: "Que faire si l'élastique se détend ?",
        reponse:
          "Renfilez simplement les perles sur un élastique neuf. Étirez-le un peu avant de l'enfiler, puis terminez par un double nœud que vous pouvez cacher dans une perle.",
      },
    ],
  },
  "bine-bine-fermoir-chainette": {
    origine:
      "Le bine-bine traditionnel se noue : on le règle à la taille, on serre le nœud, et on le garde parfois très longtemps. Le montage à fermoir est une adaptation moderne, née du besoin de pouvoir retirer un rang sans le couper, par exemple pour le laver, le changer ou le glisser dans une valise.\n\nLes perles, elles, restent fidèles à l'héritage : de petites perles de verre alignées à la manière des perles de taille d'Afrique de l'Ouest. Seule la fermeture change. Ce compromis plaît à celles qui aiment la tradition mais vivent dans un quotidien de vêtements variés, en France comme ailleurs.",
    choisir:
      "Le point fort de cette pièce est son réglage à maillons : la chaînette d'extension vous laisse trouver le bon cran, et le rang reste utilisable si votre tour de taille varie. Un rang à nouer comme le [baya à nouer sur fil de coton](/produit/baya-a-nouer-coton) est plus authentique, mais il se retire moins facilement.\n\nSi vous alternez plusieurs rangs dans la semaine, ce modèle est le plus pratique, plus encore que le [lot de bine-bine élastiques](/produit/bine-bine-elastique-multicolore), dont l'élastique s'use plus vite à force d'être enfilé. Regardez aussi le [bine-bine double rang](/produit/bine-bine-double-rang) si vous voulez plus de présence.",
    entretien:
      "Le métal du fermoir et de la chaînette craint l'humidité, le parfum et les crèmes : ils le ternissent à la longue. Retirez le rang avant la douche, la piscine ou la mer, et essuyez-le avec un chiffon doux et sec après le port.\n\nRefermez toujours le mousqueton avant de ranger le rang, pour qu'il ne s'accroche pas aux autres. Dans une pochette, à plat ou légèrement enroulé, il garde sa forme. Vérifiez de temps en temps que le fil de nylon n'est pas effiloché près du fermoir, qui est la zone la plus sollicitée.",
    pourQui:
      "Ce bine-bine convient à celles qui travaillent, voyagent ou changent souvent de tenue et veulent mettre et retirer leur parure en quelques secondes. Il plaît aussi à celles qui hésitent à fixer un rang à demeure.\n\nIl se prête bien à un cadeau pratique, pour quelqu'un qui découvre la tradition sans vouloir s'engager sur un nœud. Pour d'autres idées dans cet esprit, consultez notre [rubrique bine-bine](/bine-bine).",
    faq: [
      {
        question: "Le fermoir reste-t-il discret sous les vêtements ?",
        reponse:
          "Oui, si vous le placez sur le côté. Le mousqueton est petit et la chaînette est fine, ce qui les rend peu visibles sous un vêtement ample.",
      },
      {
        question: "Peut-on ajuster ce rang à sa taille ?",
        reponse:
          "Oui, grâce à la chaînette d'extension : vous accrochez le fermoir au maillon qui convient. Vérifiez simplement que le rang repose sans serrer.",
      },
    ],
  },
  "bine-bine-cristal-blanc": {
    origine:
      "Le blanc occupe une place à part dans les parures d'Afrique de l'Ouest : on le rencontre dans les cérémonies, les baptêmes et les mariages, où il évoque la clarté et la douceur. Un bine-bine blanc se porte pourtant aussi au quotidien, parce qu'il s'accorde à tout.\n\nCelui-ci mêle perles de rocaille blanches et petites perles de cristal à facettes. Le cristal vient des ateliers de perlerie où l'on taille des facettes pour accrocher la lumière : un détail de bijouterie qui s'est invité dans la tradition des perles de taille. Découvrez le sens plus large de ces parures dans [Origine et symbolique des bine-bine](/conseils/origine-et-symbolique-des-bine-bine).",
    choisir:
      "Ce rang se distingue par son éclat : les facettes réfléchissent la lumière là où la rocaille seule reste mate. Pour un blanc plus chargé en cérémonie, le [baya de mariée blanc et or](/produit/baya-mariee-blanc-or) ajoute la chaleur de l'or ; pour un scintillement plus franc et entièrement doré, tournez-vous vers les [bine-bine à perles dorées](/produit/bine-bine-perles-dorees).\n\nSi vous cherchez une base neutre à placer au milieu de rangs colorés, ce rang blanc fait un excellent trait d'union, plus lumineux que le [bine-bine bleu et argent](/produit/bine-bine-bleu-argent), plus discret dans ses reflets.",
    entretien:
      "Les facettes se ternissent au contact du parfum, des lotions et de la poussière. Mettez vos produits avant de porter le rang, jamais après, et passez un chiffon doux et sec sur les perles pour leur rendre leur éclat.\n\nLe blanc marque vite : rangez-le à part, dans un tissu propre, pour qu'il ne frotte pas contre des rangs colorés dont la teinte pourrait déteindre. Comme tous les rangs à fil à nouer, il craint l'eau et la transpiration prolongée, qui usent le fil plus vite que les perles.",
    pourQui:
      "Un rang à garder pour les grandes occasions comme pour tous les jours, selon votre goût. Il convient à celles qui préfèrent la délicatesse à la couleur vive, ou qui complètent une collection de rangs colorés.\n\nIl fait un cadeau très élégant pour un anniversaire, un baptême ou un mariage, surtout dans une pochette soignée. Pour les futures mariées, notre sélection [Top 10 des cadeaux pour future mariée](/top-10/cadeaux-future-mariee) propose d'autres idées.",
    faq: [
      {
        question: "Le blanc se porte-t-il en toute saison ?",
        reponse:
          "Oui, c'est une couleur neutre qui s'accorde avec toutes les teintes. Un rang blanc vient éclairer un ensemble coloré ou se porte seul pour un effet sobre.",
      },
      {
        question: "Comment faire briller à nouveau les facettes ?",
        reponse:
          "Passez un chiffon doux et sec, sans produit. Évitez l'eau savonneuse, qui peut abîmer le fil, et le contact avec le parfum, qui voile les facettes.",
      },
    ],
  },
  "bine-bine-perles-dorees": {
    origine:
      "L'or tient dans les parures d'Afrique de l'Ouest un rôle de fête : on le retrouve dans les bijoux de cérémonie, les boucles d'oreilles, les tissus brodés. Dans les bine-bine, il se glisse souvent comme une touche entre des perles colorées, mais certaines femmes l'aiment en rang entier, pour sa lumière.\n\nCe rang est entièrement fait de perles de rocaille en verre doré, c'est-à-dire un verre au fini brillant et non de l'or véritable. Cette précision est importante : il s'agit d'une parure d'allure précieuse, pas d'un bijou en métal noble. Elle appartient à la famille des perles de taille que l'on porte sous les vêtements et que l'on transmet.",
    choisir:
      "Ce rang doré est le plus polyvalent de la boutique : il s'ajoute à n'importe quel autre. Si vous préférez que l'or soit une ponctuation plutôt qu'une masse, le [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) ou le [bine-bine vert et or](/produit/bine-bine-vert-or) mélangent la couleur et l'éclat.\n\nPar rapport au [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc), dont les facettes captent la lumière, la rocaille dorée brille de façon plus régulière et plus chaleureuse. La fiche indique un montage à fil à nouer ou élastique selon la version : vérifiez-le avant d'acheter si vous tenez à un réglage exact.",
    entretien:
      "Le fini doré se préserve en évitant l'humidité et les frottements. Séchez toujours le rang avant de le ranger, et gardez-le loin des parfums et des produits de beauté, qui peuvent ternir la surface des perles.\n\nUn rang entièrement doré montre vite les traces : un chiffon doux et sec suffit à le raviver. Rangez-le dans une pochette, de préférence à l'écart des perles de couleur, et ne le laissez pas au soleil derrière une vitre, où la chaleur peut fatiguer le fil.",
    pourQui:
      "Pour celles qui aiment les parures franches et lumineuses, ou qui veulent un rang de fête à porter avec des tenues sombres, où l'or ressort d'autant mieux. C'est aussi la pièce idéale pour commencer une collection : tout s'accorde avec elle.\n\nOn l'offre volontiers à une amie pour une fête ou un anniversaire. Retrouvez d'autres idées à glisser dans un paquet dans notre sélection [Top 10 des cadeaux pour la Saint-Valentin](/top-10/cadeaux-saint-valentin).",
    faq: [
      {
        question: "Les perles sont-elles en or véritable ?",
        reponse:
          "Non, ce sont des perles de rocaille en verre au fini doré. Elles imitent l'éclat de l'or sans en avoir la matière, ce qui explique leur légèreté.",
      },
      {
        question: "Avec quels rangs l'associer ?",
        reponse:
          "Avec presque tous : un rang rouge, vert ou blanc ressort bien à côté de l'or. Pour un ensemble sobre, associez-le simplement à un second rang doré.",
      },
    ],
  },
  "bine-bine-vert-or": {
    origine:
      "Le vert est une couleur très présente en Afrique de l'Ouest : il évoque la végétation, la saison des pluies, le renouveau. Dans une parure de perles, il rafraîchit un ensemble que dominent souvent le rouge et l'or. Associé à de petites touches dorées, il garde un côté festif sans basculer dans l'excès.\n\nCe rang appartient à la famille des perles de taille que l'on porte sous les vêtements au Sénégal et dans les pays voisins. Il illustre bien l'idée qu'on compose sa parure comme on choisit un tissu : par goût, par humeur, par affinité avec une couleur. Les [traditions du mariage et du djongue](/conseils/djongue-et-traditions-du-mariage) donnent un aperçu de ce langage de la parure.",
    choisir:
      "Choisissez ce rang si vous trouvez le rouge trop marqué : le vert est plus apaisant à l'œil et laisse davantage de liberté pour les assortiments. Le [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) offre un contraste plus chaud, tandis que le [bine-bine bleu et argent](/produit/bine-bine-bleu-argent) joue la fraîcheur avec un reflet plus froid.\n\nSi vous aimez le vert mais voulez les trois couleurs d'un drapeau, la [baya aux couleurs panafricaines](/produit/baya-couleurs-panafricaines) marie vert, jaune et rouge. Le rang vert et or, lui, reste plus sobre et plus facile à porter tous les jours.",
    entretien:
      "Les perles de verre vert ne craignent pas grand-chose, mais le fil à nouer s'abîme au contact de l'eau de mer, du chlore et de la sueur. Retirez le rang avant la baignade ou l'effort, et séchez-le s'il a été mouillé.\n\nPour garder les touches dorées éclatantes, évitez les produits parfumés et essuyez le rang d'un chiffon doux de temps en temps. Rangez-le enroulé sans le tordre, ou à plat dans une pochette. En cas de fil usé, un refilage rapide permet de le remettre en état sans perdre une perle.",
    pourQui:
      "À celles qui aiment les couleurs naturelles, ou qui cherchent une alternative élégante au rouge sans quitter la tradition. Il se marie très bien avec le blanc, le doré et le noir.\n\nIl peut aussi s'offrir à quelqu'un dont vous connaissez la couleur favorite, pour une fête ou un anniversaire. À celle qui porte déjà des rangs rouges, il apporte un contrepoint bienvenu qui change l'allure de l'ensemble.",
    faq: [
      {
        question: "Le vert et l'or se portent-ils avec d'autres couleurs ?",
        reponse:
          "Oui. Il s'associe bien avec un rang doré ou blanc, et ose parfois le rouge pour un effet de fête. Gardez deux ou trois teintes au plus pour que l'ensemble reste harmonieux.",
      },
      {
        question: "Peut-on le porter tous les jours ?",
        reponse:
          "Oui, à condition d'éviter l'eau, le savon et la transpiration prolongée, qui usent le fil à nouer. Retirez-le avant le sport ou la baignade.",
      },
    ],
  },
  "bine-bine-bleu-argent": {
    origine:
      "Dans l'imaginaire des parures, le bleu est une couleur de calme et de profondeur, et l'argent un éclat plus retenu que celui de l'or. Ensemble, ils donnent un rang qui sort de l'accord rouge et or le plus répandu, tout en restant dans la famille des perles de taille que l'on porte sous les vêtements en Afrique de l'Ouest.\n\nLes bine-bine ne se limitent pas à un code de couleurs fixe : chaque femme compose sa parure à son goût, et c'est aussi ce qui fait leur charme. Le bleu et l'argent séduisent celles qui préfèrent la discrétion à l'éclat de fête. Notre article [Qu'est-ce que le djongue ?](/conseils/qu-est-ce-que-le-djongue) replace ces parures dans l'ensemble de la tradition.",
    choisir:
      "Ce rang plaira à celles qui portent plutôt des bijoux argentés : l'argent des perles répond à celui d'une montre, d'une chaîne ou d'une boucle d'oreille. L'accord reste plus frais que le [bine-bine vert et or](/produit/bine-bine-vert-or) et plus coloré que le [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc).\n\nPour l'associer, un rang blanc éclaire le bleu, un rang doré le réchauffe. Si vous craignez de vous lasser d'une teinte unique, le [lot de bine-bine élastiques multicolores](/produit/bine-bine-elastique-multicolore) vous laisse tester plusieurs couleurs avant de choisir celle qui vous suit vraiment.",
    entretien:
      "Les perles argentées sont la partie délicate : leur reflet s'estompe avec l'humidité, le parfum et les frottements répétés. Essuyez le rang d'un chiffon doux et sec après l'avoir porté, et ne le laissez pas dans une salle de bains humide.\n\nLe fil à nouer, lui, redoute l'eau et la chaleur. Retirez le rang avant la douche et le sport. Pour le ranger, enroulez-le sans le tendre dans une pochette de tissu, en le séparant des rangs plus voyants. Un fil usé se remplace sans difficulté : les perles se renfilent à l'identique.",
    pourQui:
      "Pour celles qui apprécient les tons froids, ou qui souhaitent compléter une collection dominée par les teintes chaudes. Il convient aussi aux femmes qui aiment une parure retenue, que l'on remarque peu mais que l'on sait là.\n\nOn peut l'offrir à une amie dont le style est sobre, ou à une sœur qui possède déjà du rouge et de l'or. Notre [rubrique bine-bine](/bine-bine) présente d'autres associations pour composer un cadeau cohérent.",
    faq: [
      {
        question: "Le bleu et l'argent vont-ils avec des tenues colorées ?",
        reponse:
          "Oui, car le rang se porte sous les vêtements. Sa couleur vous appartient plus qu'elle ne s'affiche, ce qui laisse libre de choisir selon votre goût, sans contrainte d'assortiment.",
      },
      {
        question: "Comment conserver le reflet argenté ?",
        reponse:
          "Gardez le rang au sec, loin des parfums, et passez un chiffon doux après le port. Évitez de le frotter fort : les perles argentées sont plus fragiles que la rocaille.",
      },
    ],
  },
  "bine-bine-double-rang": {
    origine:
      "Porter plusieurs bine-bine à la fois est une pratique courante : chaque rang a sa couleur, et leur ensemble forme une parure personnelle. Le double rang pousse cette logique en réunissant deux rangs dans une seule pièce, de sorte que l'assortiment est déjà pensé par celle qui l'a monté.\n\nCe sont des perles de rocaille en verre, enfilées une à une sur un fil que l'on noue, comme le veut la façon traditionnelle. Le double rang demande plus de patience à l'enfilage, car il faut garder les deux rangs régulièrement alignés. C'est un travail d'artisanat où la précision se voit au premier regard, dans la régularité des perles.",
    choisir:
      "Ce modèle a de la présence : il fait l'effet de deux rangs sans avoir à assortir vous-même. Si vous aimez composer, deux rangs séparés, par exemple un [bine-bine à perles dorées](/produit/bine-bine-perles-dorees) et un [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or), offrent plus de combinaisons possibles.\n\nÀ l'inverse, si vous voulez une parure déjà prête, le double rang est plus simple. Il se distingue du [bine-bine à fermoir et chaînette](/produit/bine-bine-fermoir-chainette), plus fin et plus facile à retirer. Choisissez le double rang si vous préférez fixer votre parure et la porter plusieurs jours de suite.",
    entretien:
      "Deux rangs reliés demandent un peu plus de soin : en cas de torsion, ils s'emmêlent et mettent le fil sous tension. Posez le rang à plat pour le ranger, ou enroulez-le sans le tordre, dans une pochette individuelle.\n\nÉvitez l'eau, le savon et la sueur prolongée, qui fragilisent le fil. Si un des deux rangs cède, ne coupez pas l'autre : vous pouvez le renfiler avec un fil neuf. Un [fil élastique transparent](/produit/bine-bine-fil-elastique) ou un fil à perles fait l'affaire pour une réparation propre.",
    pourQui:
      "Pour celles qui aiment les parures bien visibles quand elles sont portées sous un pagne léger ou une tenue fluide, et qui préfèrent ne pas composer elles-mêmes leurs assortiments. C'est aussi un bon choix pour celles qui ont déjà un rang simple et veulent plus d'effet.\n\nOn peut l'offrir à une amie qui commence à constituer sa parure : le résultat paraît complet dès le premier jour, ce qui évite l'hésitation du choix des couleurs.",
    faq: [
      {
        question: "Faut-il le porter avec d'autres rangs ?",
        reponse:
          "Non, il peut se porter seul : il donne déjà l'impression d'une parure composée. On peut aussi lui ajouter un rang simple qui reprend l'une de ses couleurs.",
      },
      {
        question: "Comment éviter que les deux rangs s'emmêlent ?",
        reponse:
          "Placez le nœud sur le côté, posez le rang à plat pour le ranger, et évitez de le tordre. Vérifiez que les deux rangs ont la même longueur avant de serrer le nœud.",
      },
    ],
  },
  "bine-bine-kit-creation": {
    origine:
      "Avant d'être un bijou que l'on achète, le bine-bine est un objet que l'on fait, ou que l'on se fait faire. Enfiler des perles est une activité qui se pratique entre femmes, souvent en parlant, et qui sert de prétexte à transmettre des gestes, des motifs et des histoires.\n\nCe kit s'inscrit dans cette logique : il donne les perles, le fil et parfois des fermoirs pour monter vous-même vos rangs. Il ne remplace pas un savoir-faire d'artisane, mais il permet d'en comprendre les gestes. Pour mesurer ce que représente la transmission dans la parure traditionnelle, lisez [Qui transmet le djongue ?](/conseils/qui-transmet-le-djongue).",
    choisir:
      "Le kit s'adresse à celles qui préfèrent faire plutôt qu'acheter : vous choisissez les couleurs, les motifs et la longueur exacte. Si vous manquez de temps ou de patience, un rang déjà monté comme le [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) vous fera gagner du temps.\n\nSi vous avez déjà des perles et cherchez seulement de quoi réparer ou raccourcir un rang, le [fil élastique transparent](/produit/bine-bine-fil-elastique) suffit. Le kit vaut surtout pour son assortiment de couleurs : il permet d'imaginer des motifs que le commerce ne propose pas, comme le fait un [bine-bine double rang](/produit/bine-bine-double-rang) monté par une artisane.",
    entretien:
      "Un kit se conserve comme un trésor de petites pièces : gardez les perles triées par couleur, dans des boîtes ou des sachets fermés, pour ne rien perdre sous un meuble. Le fil se range enroulé, à l'abri de la lumière et de la chaleur, qui le fatiguent.\n\nQuant aux rangs que vous montez, ils demandent les mêmes soins que tous les bine-bine : pas d'eau, pas de savon, un rangement à plat. Si l'un d'eux cède, vous avez sous la main tout ce qu'il faut pour le refaire, ce qui est l'avantage principal d'un kit.",
    pourQui:
      "Pour celles qui aiment les travaux manuels, pour une mère et sa fille qui veulent partager un après-midi, ou pour un petit groupe d'amies qui cherchent une activité douce. C'est aussi une très bonne manière d'apprendre un geste avant de passer à des pièces plus fines.\n\nIl peut s'offrir à une personne créative ou à une adolescente. Associé à une [pochette en wax](/produit/bine-bine-pochette-wax), il compose un cadeau qui invite à faire plutôt qu'à posséder.",
    faq: [
      {
        question: "Faut-il de l'expérience pour utiliser un kit ?",
        reponse:
          "Non, mais de la patience. Le geste est simple : mesurer, enfiler, nouer. Commencez par un motif très régulier avant d'essayer des compositions plus complexes.",
      },
      {
        question: "Quel fil choisir, élastique ou à nouer ?",
        reponse:
          "L'élastique se met sans nœud et convient pour débuter. Le fil à nouer, plus traditionnel, se règle à votre taille exacte. Selon les kits, les deux types peuvent être fournis.",
      },
      {
        question: "Peut-on offrir ce kit ?",
        reponse:
          "Oui, c'est un cadeau original, surtout accompagné d'un petit mot sur la tradition des perles de taille. On offre ainsi un moment à partager, pas seulement un objet.",
      },
    ],
  },
  "bine-bine-fil-elastique": {
    origine:
      "Un fil élastique transparent n'a rien de traditionnel en soi : c'est un accessoire de bijouterie moderne. Mais il est entré dans l'univers des bine-bine par un chemin très concret, celui de la réparation et de la fabrication de rangs que l'on veut enfiler sans nœud.\n\nLes perles de taille, elles, ont toujours été enfilées sur un fil, qu'il soit de coton ou d'un autre matériau. Le fil élastique permet de garder cette logique tout en modernisant le montage. Pour une femme qui possède plusieurs rangs, avoir une bobine à la maison évite de jeter un rang quand son fil cède : on renfile, on noue, on continue de porter.",
    choisir:
      "Un fil se choisit par son usage. Pour un rang destiné à être retiré souvent, l'élastique est idéal. Pour un rang que l'on garde longtemps à la même taille, le fil à nouer des [baya sur coton](/produit/baya-a-nouer-coton) reste le plus fidèle à la tradition.\n\nSi vous voulez fabriquer plusieurs rangs, le [kit pour créer ses bine-bine](/produit/bine-bine-kit-creation) contient déjà de quoi les monter ; la bobine seule convient quand vous avez déjà des perles à réutiliser. Elle complète aussi le [lot de bine-bine élastiques](/produit/bine-bine-elastique-multicolore) lorsque l'un des rangs se détend.",
    entretien:
      "Une bobine se range à l'abri de la lumière, de la chaleur et des produits chimiques, qui font vieillir l'élastique. Gardez-la fermée et ne laissez pas dépasser un long bout de fil : il s'entortille et se détend.\n\nPour que la réparation tienne, étirez le fil quelques fois avant de l'enfiler, puis terminez par un double nœud, que vous pouvez cacher à l'intérieur d'une perle. Un élastique réparé reste fragile s'il est trop tendu : laissez toujours un peu de jeu pour qu'il ne travaille pas en permanence.",
    pourQui:
      "Pour toutes celles qui portent des bine-bine élastiques, ou qui veulent pouvoir réparer elles-mêmes un rang qui a lâché. C'est aussi un petit trésor pour celle qui s'est découvert une passion pour l'enfilage et veut créer ses propres pièces.\n\nCe n'est pas un cadeau en soi, mais il peut accompagner joliment un rang offert : la personne saura le réparer elle-même si besoin, et gardera plus longtemps sa parure.",
    faq: [
      {
        question: "Ce fil convient-il à un rang à nouer ?",
        reponse:
          "Il convient surtout aux rangs élastiques. Pour un rang à nouer comme le veut la tradition, un fil non élastique tient mieux la forme et se règle plus précisément.",
      },
      {
        question: "Comment réparer un bine-bine qui a cédé ?",
        reponse:
          "Récupérez toutes les perles, coupez un fil à votre tour de taille plus un peu de marge, enfilez-les en reprenant le même motif et terminez par un double nœud serré.",
      },
    ],
  },
  "bine-bine-pochette-wax": {
    origine:
      "Le wax est ce tissu de coton imprimé, aux motifs graphiques et aux couleurs vives, devenu emblématique de l'Afrique de l'Ouest, du Sénégal comme de ses voisins. On le porte en pagne, on le coud en robe, en chemise, en accessoire. Sa fabrication et son histoire sont liées aux échanges commerciaux entre l'Europe et l'Afrique, avant de devenir un langage visuel proprement africain.\n\nCette pochette reprend ce tissu pour un usage très simple : ranger. Les bine-bine, qui se glissent sous les vêtements, méritent un écrin à leur mesure. Associer perles et wax, c'est réunir deux éléments de la même culture de la parure.",
    choisir:
      "La pochette ne remplace pas la parure, elle la protège. Elle trouve sa place auprès d'un [lot de bine-bine élastiques](/produit/bine-bine-elastique-multicolore) ou d'un [bine-bine à fermoir](/produit/bine-bine-fermoir-chainette), que l'on change souvent et qu'il faut donc ranger sans les emmêler.\n\nSi vous cherchez un cadeau complet, on peut y glisser un [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc) ou une [baya de mariée blanc et or](/produit/baya-mariee-blanc-or) : l'ensemble est prêt à offrir, sans papier cadeau. Choisissez le motif de wax selon la personne, car le tissu fait partie du message.",
    entretien:
      "Le wax de coton se lave à la main, à l'eau fraîche, avec un savon doux, mais mieux vaut éviter de le laver souvent : les couleurs tiennent mieux quand on espace les lavages. Laissez sécher à plat et à l'ombre, car le soleil direct fait pâlir les teintes vives.\n\nAvant de ranger vos rangs dans la pochette, assurez-vous qu'ils sont secs. Évitez de la surcharger : des perles lourdes tirent sur la couture. Si une odeur de renfermé s'installe, laissez la pochette ouverte à l'air quelques heures plutôt que d'y glisser un produit parfumé.",
    pourQui:
      "Pour celles qui possèdent plusieurs rangs et veulent les retrouver sans fouiller, ou qui voyagent souvent et tiennent à emporter leur parure sans la perdre. La pochette convient aussi aux cadeaux : on y glisse un rang, un mot, et le tissu fait office d'emballage.\n\nElle plaît à celles qui aiment les objets en wax au quotidien. Pour qui veut offrir tout un ensemble, notre [Top 10 des cadeaux pour future mariée](/top-10/cadeaux-future-mariee) donne d'autres pistes.",
    faq: [
      {
        question: "Le motif de la pochette peut-il varier ?",
        reponse:
          "C'est possible : le wax existe dans d'innombrables motifs et couleurs, et les pochettes faites main diffèrent légèrement d'une pièce à l'autre. Le type de produit reste le même.",
      },
      {
        question: "Peut-on y ranger autre chose que des bine-bine ?",
        reponse:
          "Oui, elle accueille aussi de petits bijoux, un rang de perles ou des accessoires. Évitez seulement d'y mêler des objets pointus, qui pourraient abîmer le tissu ou accrocher les fils.",
      },
    ],
  },
  "baya-krobo-ghana": {
    origine:
      "Les perles de Krobo viennent du sud-est du Ghana, où des artisans fabriquent des perles de verre selon une technique ancienne : le verre, souvent recyclé, est broyé en poudre, tassé dans des moules en argile puis cuit au four. Chaque perle sort légèrement différente de la précédente, ce qui explique la diversité des formes, des motifs et des couleurs.\n\nChez les Krobo, les perles de taille tiennent une place importante, notamment lors des cérémonies de passage des jeunes filles. On parle ici de baya, le nom que l'on donne aussi à ces parures de taille en Afrique de l'Ouest. Ce rang appartient donc à une autre tradition que celle des perles de rocaille sénégalaises, tout en partageant le même esprit de parure transmise.",
    choisir:
      "Ces perles sont plus grosses que la rocaille et se remarquent davantage, ce qui change la manière de les porter. Pour un effet fin et régulier, le [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) reste plus léger ; pour des perles faites main elles aussi, mais travaillées dans un esprit artisanal différent, voyez la [baya en perles de verre faites main](/produit/baya-verre-fait-main).\n\nSi vous voulez un autre matériau naturel qui rappelle la même idée de rang plus volumineux, la [baya en perles de bois](/produit/baya-perles-bois) joue sur le toucher plutôt que sur la couleur. Choisissez les perles de Krobo si vous aimez les motifs peints et les teintes franches.",
    entretien:
      "Le verre de Krobo est solide, mais les perles sont lourdes et peuvent s'entrechoquer : rangez le rang à plat, sans le plier brusquement, et éloignez-le des surfaces dures. Le fil de coton craint l'eau de mer, le chlore et la transpiration prolongée.\n\nSi le coton se détend ou s'effiloche, renfilez le rang sur un fil neuf plutôt que de le jeter : les perles sont faites pour durer plus longtemps que le fil. Essuyez-les d'un chiffon doux et sec ; évitez les produits ménagers, qui peuvent ternir certains décors.",
    pourQui:
      "Pour celles qui aiment les pièces au caractère affirmé, et qui s'intéressent à l'artisanat ghanéen. Ce rang plaît aussi aux collectionneuses, car aucune perle ne ressemble tout à fait à sa voisine.\n\nIl peut s'offrir à une amie curieuse de cultures africaines au-delà du Sénégal. Pour mieux connaître l'univers des perles de taille et leur place dans la vie des femmes, lisez [Origine et symbolique des bine-bine](/conseils/origine-et-symbolique-des-bine-bine).",
    faq: [
      {
        question: "D'où viennent les perles de Krobo ?",
        reponse:
          "Elles sont fabriquées dans le sud-est du Ghana, à partir de verre broyé, souvent recyclé, tassé dans des moules en argile puis cuit. Cela donne des perles uniques.",
      },
      {
        question: "Ces perles sont-elles plus lourdes que la rocaille ?",
        reponse:
          "Oui, elles sont plus grosses et se font davantage sentir. Nouez le rang avec soin et portez-le seul ou avec un rang fin pour garder l'équilibre.",
      },
    ],
  },
  "baya-cauris": {
    origine:
      "Le cauri est un petit coquillage de mer à la forme arrondie, qui a longtemps servi de monnaie dans plusieurs régions d'Afrique de l'Ouest avant de devenir un motif de parure. On le retrouve aujourd'hui dans les bijoux, les colliers, les coiffures et les objets décoratifs, où il symbolise souvent la richesse, la chance ou la protection selon les cultures.\n\nDans ce rang, les cauris alternent avec des perles de verre. Le mélange de la nacre mate du coquillage et de l'éclat du verre donne une parure qui fait le lien entre histoire et décor. On ne lui prête ici aucun pouvoir : on l'aime pour sa beauté et pour ce qu'il raconte du passé.",
    choisir:
      "Le cauri est ce qui distingue ce rang des autres. Si vous préférez un rang entièrement de verre, le [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc) reste plus lumineux, et le [bine-bine à perles dorées](/produit/bine-bine-perles-dorees) plus éclatant. Le cauri, lui, apporte un volume et une matière naturelle.\n\nPar rapport à la [baya en perles de bois](/produit/baya-perles-bois), également à base de matière naturelle, le coquillage est plus clair et plus lisse. Le choix se fait selon l'effet voulu : ivoire et nacre ici, brun et chaleur du bois là-bas. Les couleurs de verre peuvent varier selon les pièces.",
    entretien:
      "Un coquillage se fragilise s'il tombe ou s'il est comprimé. Rangez ce rang à plat, dans une pochette douce, sans rien poser dessus. Évitez l'eau, qui peut ternir la surface, et les parfums ou produits ménagers, qui attaquent la nacre.\n\nPassez un chiffon doux et sec après le port. Si un cauri se détache, ne forcez pas : le fil peut être renoué en intégrant à nouveau le coquillage. Le rang doit être manipulé avec douceur, comme un bijou ancien, et non jeté au fond d'un sac.",
    pourQui:
      "Pour celles qui sont sensibles à la dimension historique des parures, ou qui aiment les matières naturelles associées au verre. Ce rang convient aux personnes qui apprécient les objets qui se racontent.\n\nIl fait un cadeau de sens pour une amie qui s'intéresse à l'histoire de l'Afrique de l'Ouest. Pour plus d'idées, notre [rubrique bine-bine](/bine-bine) rassemble les rangs à offrir ou à garder.",
    faq: [
      {
        question: "Qu'est-ce qu'un cauri ?",
        reponse:
          "C'est un petit coquillage de mer, arrondi et lisse, qui a longtemps servi de monnaie en Afrique de l'Ouest. Il reste aujourd'hui un motif très présent dans les parures.",
      },
      {
        question: "Les cauris sont-ils fragiles ?",
        reponse:
          "Ils craignent les chocs et la pression. Rangez le rang à plat et manipulez-le avec soin pour ne pas fendre ni ébrécher les coquillages.",
      },
    ],
  },
  "baya-a-nouer-coton": {
    origine:
      "Le fil de coton est celui des anciens montages : on enfile les perles, on laisse de longues extrémités et on noue le rang à la taille de celle qui le portera. Cette façon de faire explique le nom de « baya à nouer » : le rang n'a pas de fermoir, il se serre, se règle, et reste en place.\n\nLe coton a un avantage simple : il est doux contre le tissu, souple et discret. Beaucoup de femmes attachent un sens particulier à ce geste du nœud, qui marque le moment où le rang devient réellement le leur. Cette dimension personnelle explique pourquoi le montage traditionnel survit aux fermoirs et aux élastiques.",
    choisir:
      "Ce rang est celui que l'on choisit pour rester fidèle à la tradition. Si vous aimez changer de rang chaque semaine, le [bine-bine à fermoir et chaînette](/produit/bine-bine-fermoir-chainette) est bien plus pratique, de même que le [lot de bine-bine élastiques](/produit/bine-bine-elastique-multicolore) pour essayer plusieurs couleurs.\n\nSi vous voulez au contraire un rang que l'on porte en continu, fidèle à la tradition, le fil de coton est le bon choix. Il se distingue du [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) par le fil, plus souple, et par le nœud plat que l'on y fait.",
    entretien:
      "Le coton est naturel et absorbe l'humidité : il se fatigue plus vite que le nylon à l'eau, au savon et à la transpiration. Évitez de mouiller le rang et séchez-le s'il l'a été. Un rang porté longtemps peut s'effilocher aux extrémités : coupez les bouts qui dépassent et refaites un nœud.\n\nPuisque ce rang se porte à demeure, surveillez de temps en temps l'état du fil, en particulier près du nœud. S'il s'use, vous pouvez le renfiler sans perdre vos perles. Pour une réparation, un fil de coton neuf donne le meilleur résultat.",
    pourQui:
      "Pour celles qui aiment les gestes d'autrefois et la sobriété. Il convient aux femmes qui veulent porter un rang longtemps sans y penser, comme une marque discrète de leur féminité.\n\nOn peut l'offrir à une mère, à une tante ou à une amie attachée à la tradition. Le sens du nœud et de la transmission est bien décrit dans [Qui transmet le djongue ?](/conseils/qui-transmet-le-djongue).",
    faq: [
      {
        question: "Comment retirer un rang noué ?",
        reponse:
          "Il faut couper le fil : le nœud serré est fait pour durer. Gardez donc le rang à nouer pour celui que vous souhaitez porter longtemps, et choisissez un fermoir pour les autres.",
      },
      {
        question: "Quel nœud utiliser ?",
        reponse:
          "Un nœud plat serré plusieurs fois tient bien. Coupez les extrémités en laissant un petit bout, puis placez le nœud sur le côté pour plus de confort.",
      },
    ],
  },
  "baya-verre-fait-main": {
    origine:
      "Un rang fait main, c'est d'abord un choix de composition : l'artisane décide de l'ordre des perles, des tailles, des couleurs et des motifs. Ici, des perles de verre de formes variées alternent avec la rocaille, ce qui donne du relief à la parure là où un rang régulier reste plat.\n\nCette liberté de composition appartient à l'histoire des perles de taille : chaque rang porte la marque de celle qui l'a monté, et c'est pourquoi on les transmet. Un motif peut devenir une signature de famille, qu'une fille reconnaît chez sa mère. Le catalogue présente ce rang comme une pièce unique par nature, jamais tout à fait identique d'un exemplaire à l'autre.",
    choisir:
      "Ce rang plaît par son caractère : le mélange de tailles donne du volume et du rythme. Le [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) est plus régulier et plus sage, alors que la [baya en perles de Krobo](/produit/baya-krobo-ghana) mise sur de grosses perles aux motifs peints, venues du Ghana.\n\nSi vous aimez la variété sans la fantaisie, le [bine-bine double rang](/produit/bine-bine-double-rang) reste plus ordonné. Choisissez cette baya si vous voulez une parure qui ne ressemblera pas à celle de votre voisine, et acceptez que les couleurs exactes puissent varier d'une pièce à l'autre.",
    entretien:
      "Les perles de tailles variées s'entrechoquent plus facilement : rangez le rang à part, sans l'empiler avec d'autres, pour limiter les éclats. Les perles de verre sont solides mais peuvent s'ébrécher au contact d'une surface dure.\n\nLe fil à nouer, comme toujours, craint l'eau et la transpiration. Retirez le rang avant le sport ou la baignade, et vérifiez de temps à autre les nœuds. Si une perle se détache, gardez-la : elle pourra être remise à sa place, en suivant le motif de départ.",
    pourQui:
      "Pour celles qui aiment les pièces artisanales et un peu inattendues, ou qui souhaitent offrir un objet qui ne se trouve pas dans toutes les boutiques. Ce rang convient aussi à celles qui veulent constituer une collection variée.\n\nC'est un bon cadeau pour une personne qui aime les objets faits à la main. Son motif unique en fait un souvenir : on l'offre pour un anniversaire, une naissance, ou simplement pour dire merci.",
    faq: [
      {
        question: "Deux rangs faits main sont-ils identiques ?",
        reponse:
          "Rarement : l'artisane compose chaque rang selon son inspiration, avec des variations de perles et de motif. C'est ce qui donne à chaque pièce son caractère.",
      },
      {
        question: "Que faire si une perle se détache ?",
        reponse:
          "Conservez-la et renfilez-la à sa place en suivant le motif, avec un fil neuf si besoin. Les perles ne se perdent pas si l'on répare sans attendre.",
      },
    ],
  },
  "baya-perles-bois": {
    origine:
      "Au Sénégal, on parle de dial-diali pour désigner des perles de taille en bois, appréciées pour le léger cliquetis qu'elles produisent quand on marche. Ce détail sonore appartient à l'identité de ces parures : on les porte aussi pour leur discrétion, mais on les remarque à leur bruit doux.\n\nCe rang en reprend l'esprit avec des perles de bois plus grosses que la rocaille, au toucher chaud et naturel. Le bois offre une alternative sobre au verre : pas de scintillement, mais une matière vivante, aux tons bruns qui vont avec toutes les couleurs. La tradition des perles de taille n'est donc pas réservée au verre, elle a toujours su utiliser ce que l'on avait à portée de main.",
    choisir:
      "Choisissez le bois pour son toucher et sa chaleur. Le [bine-bine rouge et or](/produit/bine-bine-rocaille-rouge-or) ou le [bine-bine à perles dorées](/produit/bine-bine-perles-dorees) misent sur l'éclat du verre, alors que les perles de bois restent mates et plus discrètes.\n\nPar rapport à la [baya en perles de Krobo](/produit/baya-krobo-ghana), également volumineuse, le bois est plus léger et ne porte pas de motifs peints. Les teintes brunes en font la base idéale pour associer, au-dessus ou en dessous, un rang de rocaille coloré, comme le [bine-bine vert et or](/produit/bine-bine-vert-or).",
    entretien:
      "Le bois n'aime pas l'eau : il peut gonfler, se fendre ou changer de couleur. Retirez ce rang avant la douche, la baignade et le sport, et essuyez-le d'un chiffon sec si vous l'avez mouillé par accident. Rangez-le dans un endroit sec, loin d'un radiateur qui pourrait le dessécher.\n\nUn peu de chaleur douce et une manipulation attentive suffisent. Évitez les huiles et les parfums, qui marquent le bois, et gardez le rang à l'écart d'objets durs qui pourraient entailler les perles. Le fil à nouer demande le même soin que pour un rang de verre.",
    pourQui:
      "Pour celles qui aiment les matières naturelles et les parures sobres, ou qui veulent un rang discret qui se laisse entendre plus qu'il ne se voit. Il convient aussi aux amateurs de style simple, qui préfèrent le bois aux couleurs vives.\n\nIl se partage bien en couple d'amies : on peut en offrir un pour accompagner un rang plus coloré. Pour comprendre d'où viennent ces parures, lisez [Qu'est-ce que le djongue ?](/conseils/qu-est-ce-que-le-djongue).",
    faq: [
      {
        question: "Que veut dire dial-diali ?",
        reponse:
          "Le terme désigne, au Sénégal, des perles de taille en bois. Elles sont connues pour le léger cliquetis qu'elles font en marchant, ce qui fait partie de leur charme.",
      },
      {
        question: "Les perles de bois supportent-elles l'eau ?",
        reponse:
          "Non, le bois n'aime pas l'humidité. Retirez le rang avant la douche ou la baignade, et rangez-le au sec pour qu'il garde sa forme et sa couleur.",
      },
    ],
  },
  "baya-pierres-naturelles": {
    origine:
      "Les pierres naturelles, comme le quartz rose, l'améthyste ou l'œil-de-tigre, sont utilisées en bijouterie depuis très longtemps, pour leurs couleurs et leurs veines. Associées à la rocaille, elles créent un rang où deux matières se répondent : la régularité du verre et l'irrégularité de la pierre.\n\nIci, la pierre est choisie pour sa beauté, rien d'autre. On ne lui attribue aucun effet : on aime le rose tendre du quartz, le violet de l'améthyste, le brun doré de l'œil-de-tigre. Cette baya prolonge à sa manière la tradition des perles de taille, qui a toujours accueilli de nouveaux matériaux au fil des modes et des échanges.",
    choisir:
      "Ce rang se choisit pour sa palette douce et naturelle. Le [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc) offre un scintillement plus brillant et plus régulier, tandis que la pierre a des reflets plus profonds et plus variables d'une perle à l'autre.\n\nPar rapport à la [baya en perles de bois](/produit/baya-perles-bois), plus mate et sobre, les pierres apportent de la couleur et un peu de poids. Si vous cherchez une pièce plus précieuse, mais moins traditionnelle que la [baya de mariée blanc et or](/produit/baya-mariee-blanc-or), c'est un bon compromis. Les pierres exactes peuvent varier d'une pièce à l'autre.",
    entretien:
      "Les pierres naturelles supportent mal les chocs, les produits chimiques et l'humidité prolongée. Essuyez-les d'un chiffon doux et sec après le port, sans savon ni solvant, et évitez le contact avec les parfums et les crèmes.\n\nComme les pierres alourdissent le rang, vérifiez régulièrement l'état du fil et des nœuds : c'est lui qui travaille le plus. Rangez le rang à plat dans une pochette, séparé des perles de verre, pour que les pierres ne rayent pas leurs voisines. Gardez-le à l'abri du soleil direct, qui peut faire pâlir certaines teintes.",
    pourQui:
      "Pour celles qui aiment les couleurs douces et les matières naturelles, ou qui cherchent une pièce un peu plus précieuse que la rocaille. Elle convient aux occasions où l'on souhaite une parure plus recherchée.\n\nElle fait un cadeau agréable pour une amie sensible à la couleur et aux belles matières. Pour d'autres idées de pièces à offrir, consultez notre [Top 10 des baya faites main](/top-10/baya-faites-main).",
    faq: [
      {
        question: "Quelles pierres trouve-t-on dans ce rang ?",
        reponse:
          "Selon les pièces, du quartz rose, de l'améthyste, de l'œil-de-tigre ou d'autres pierres polies. Les pierres exactes peuvent varier d'un rang à l'autre.",
      },
      {
        question: "Faut-il un nœud plus serré qu'avec la rocaille ?",
        reponse:
          "Oui, les pierres alourdissent le rang. Un double nœud bien serré, placé sur le côté, limite le glissement et protège le fil.",
      },
    ],
  },
  "baya-mariee-blanc-or": {
    origine:
      "Dans de nombreuses familles d'Afrique de l'Ouest, les parures font partie des préparatifs du mariage : on les offre à la future mariée comme un signe d'affection et de transmission. Le blanc, l'ivoire et l'or composent un registre lumineux, associé à la fête et à la douceur.\n\nLe catalogue décrit ici un rang, ou plusieurs rangs assortis, que l'on offre souvent par une tante, une sœur ou une amie proche. On ne cherche pas ici à imposer un usage : les traditions varient selon les régions et les familles. L'important est le geste. Nos articles sur le [djongue et les traditions du mariage](/conseils/djongue-et-traditions-du-mariage) en donnent le contexte.",
    choisir:
      "Pour un cadeau de mariage, ce rang a l'avantage d'être pensé pour la cérémonie : son blanc et son or restent solennels sans être froids. Le [bine-bine en cristal blanc](/produit/bine-bine-cristal-blanc) est plus sobre, sans l'or, tandis que le [bine-bine à perles dorées](/produit/bine-bine-perles-dorees) est plus éclatant, sans le blanc.\n\nSi vous voulez composer un cadeau complet, associez cette baya à une [pochette en wax](/produit/bine-bine-pochette-wax) : la future mariée aura de quoi la ranger. Notre [Top 10 des cadeaux pour future mariée](/top-10/cadeaux-future-mariee) propose d'autres idées pour compléter.",
    entretien:
      "Les perles nacrées et le cristal craignent le parfum, les lotions et la poussière : mieux vaut les porter avant d'avoir mis ses produits. Passez un chiffon doux et sec après chaque port, et séchez le rang s'il a été mouillé.\n\nPour que cette parure se garde en souvenir, rangez-la dans une pochette propre, à plat ou enroulée sans la serrer, loin du soleil et de l'humidité. Si le blanc jaunit à la longue, c'est souvent le fil qui vieillit : un renfilage lui redonne un bel aspect sans changer les perles.",
    pourQui:
      "Pour une future mariée, offerte par une amie, une sœur, une tante ou une marraine. Elle convient aussi à une cérémonie, un baptême ou une grande fête, où le blanc et l'or sont de mise.\n\nOn peut l'offrir avec un mot qui explique la tradition, pour que le geste ait toute sa portée. Elle se garde ensuite longtemps, et peut même se transmettre. Notre article [Vivre le djongue en France](/conseils/vivre-le-djongue-en-france) montre comment cette parure se vit aujourd'hui dans la diaspora.",
    faq: [
      {
        question: "Faut-il offrir plusieurs rangs ?",
        reponse:
          "Rien n'est obligatoire. Un rang suffit, mais certaines proposent plusieurs rangs assortis. L'important est le geste et l'attention que l'on y met.",
      },
      {
        question: "Comment présenter ce cadeau ?",
        reponse:
          "Dans une jolie pochette en tissu, avec un mot écrit à la main. Vous pouvez y raconter pourquoi vous offrez ce rang et ce qu'il représente pour vous.",
      },
    ],
  },
  "baya-couleurs-panafricaines": {
    origine:
      "Le vert, le jaune et le rouge sont appelés couleurs panafricaines : on les retrouve sur les drapeaux de nombreux pays du continent et ils ont été repris comme symbole d'unité et de fierté. Le drapeau du Sénégal les porte, avec une étoile verte en son centre.\n\nCe rang les aligne en un motif régulier, enfilé perle par perle. Il appartient à la famille des perles de taille, mais son message est différent de celui d'un rang purement décoratif : il dit d'où l'on vient, ou ce que l'on aime. Dans la diaspora, nombreuses sont celles qui le portent pour garder un lien discret avec leurs racines.",
    choisir:
      "Ces trois couleurs vives ont une identité forte, plus affirmée que celle du [bine-bine vert et or](/produit/bine-bine-vert-or), qui joue seulement le vert et l'éclat. Si vous voulez les mêmes tons dans un lot varié, le [lot de bine-bine élastiques multicolores](/produit/bine-bine-elastique-multicolore) vous laisse composer.\n\nPour un effet plus réchauffé, ajoutez un [bine-bine à perles dorées](/produit/bine-bine-perles-dorees) : l'or calme la vivacité des trois couleurs. Choisissez cette baya quand le sens compte autant que l'esthétique, par exemple pour un retour au pays ou une fête entre proches.",
    entretien:
      "Les couleurs vives du verre tiennent bien, mais le fil à nouer souffre de l'eau, du chlore et de la transpiration. Retirez le rang avant la baignade et le sport, et séchez-le s'il a été mouillé.\n\nRangez-le à plat, à l'écart des rangs de couleurs claires dont les perles pourraient rayer ou tacher le fil. Un chiffon doux suffit pour raviver l'éclat. Si le fil se détend, renfilez le motif en suivant la même séquence de vert, de jaune et de rouge, pour retrouver le rang d'origine.",
    pourQui:
      "Pour celles qui aiment afficher, même discrètement, leur attachement à leurs origines, ou qui cherchent une parure joyeuse et colorée. Elle convient aussi aux fêtes et aux retrouvailles.\n\nC'est un cadeau de choix pour quelqu'un qui part ou revient au pays, ou qui fête une étape importante. Pour mieux comprendre la place de ces parures dans la vie des femmes de la diaspora, lisez [Vivre le djongue en France](/conseils/vivre-le-djongue-en-france).",
    faq: [
      {
        question: "Que représentent le vert, le jaune et le rouge ?",
        reponse:
          "Ce sont les couleurs panafricaines, présentes sur de nombreux drapeaux africains. Elles symbolisent l'unité et la fierté, mais leur sens exact varie selon les pays.",
      },
      {
        question: "Ce rang convient-il à un cadeau ?",
        reponse:
          "Oui, c'est un cadeau chargé de sens pour une fête, un retour au pays ou une occasion qui compte. Un petit mot rappelant ce que les couleurs représentent le rend plus personnel.",
      },
    ],
  },
};
