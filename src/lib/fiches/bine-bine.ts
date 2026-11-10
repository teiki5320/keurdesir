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
};
