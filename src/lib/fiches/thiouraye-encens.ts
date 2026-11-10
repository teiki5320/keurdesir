/**
 * Fiches détaillées de la rubrique « Thiouraye, bakhour et encens » (20 fiches).
 * Règles de rédaction : docs/FICHES.md. Un rédacteur ne modifie QUE ce fichier.
 * Contrôle : npm test (tests/fiches.test.ts), puis npm run build.
 *
 * Fiches de ce lot :
 *   - thiouraye-artisanal-sachet — Thiouraye artisanal en sachet
 *   - thiouraye-en-bocal — Thiouraye en bocal de verre
 *   - thiouraye-au-musc — Thiouraye aux notes de musc
 *   - thiouraye-au-oud — Thiouraye au oud
 *   - thiouraye-au-santal — Thiouraye au bois de santal
 *   - gowe-en-grains — Gowé en grains
 *   - thiouraye-assortiment-sachets — Assortiment de thiouraye en petits sachets
 *   - thiouraye-coffret-avec-encensoir — Kit découverte thiouraye et encensoir
 *   - bakhour-oud-copeaux — Bakhour au oud en copeaux
 *   - bakhour-pastilles-moulees — Bakhour en pastilles moulées
 *   - bakhour-boite-decoree — Bakhour en boîte décorée
 *   - bakhour-ambre — Bakhour à l'ambre
 *   - bakhour-rose — Bakhour à la rose
 *   - copeaux-bois-oud-naturel — Copeaux de bois de oud naturel
 *   - copeaux-bois-de-santal — Copeaux de bois de santal
 *   - oliban-en-grains — Oliban en grains
 *   - benjoin-en-morceaux — Benjoin en morceaux
 *   - pastilles-charbon-encens — Pastilles de charbon pour encens
 *   - charbon-noix-de-coco — Charbon naturel de noix de coco
 *   - batonnets-encens-oud — Bâtonnets d'encens au oud
 */
import type { FicheLongue } from "../types";

export const SLUGS = [
  "thiouraye-artisanal-sachet",
  "thiouraye-en-bocal",
  "thiouraye-au-musc",
  "thiouraye-au-oud",
  "thiouraye-au-santal",
  "gowe-en-grains",
  "thiouraye-assortiment-sachets",
  "thiouraye-coffret-avec-encensoir",
  "bakhour-oud-copeaux",
  "bakhour-pastilles-moulees",
  "bakhour-boite-decoree",
  "bakhour-ambre",
  "bakhour-rose",
  "copeaux-bois-oud-naturel",
  "copeaux-bois-de-santal",
  "oliban-en-grains",
  "benjoin-en-morceaux",
  "pastilles-charbon-encens",
  "charbon-noix-de-coco",
  "batonnets-encens-oud",
] as const;

export const fiches: Partial<Record<(typeof SLUGS)[number], FicheLongue>> = {
  "thiouraye-artisanal-sachet": {
    origine:
      "Le thiouraye est un mélange parfumé de bois, de résines et d'épices que l'on fait brûler sur un charbon. Au Sénégal, il fait partie de l'art de la maison : on en parfume le salon, les tissus et les tenues de fête. Chaque préparatrice compose sa propre recette, la garde jalousement et la nomme à sa façon.\n\nLe sachet est le format le plus simple de cette tradition. Il réunit une petite quantité de mélange, ce qui permet de goûter une recette sans engager un grand pot. Pour situer cet encens dans la culture sénégalaise de l'accueil, lisez [Qu'est-ce que le djongué ?](/conseils/qu-est-ce-que-le-djongue).",
    choisir:
      "Le sachet convient à la découverte : si vous hésitez entre plusieurs senteurs, l'[assortiment de thiouraye en petits sachets](/produit/thiouraye-assortiment-sachets) vous laisse comparer plusieurs recettes, alors qu'un sachet seul vous engage sur une seule. Pour un usage régulier, le [thiouraye en bocal de verre](/produit/thiouraye-en-bocal) est plus généreux et se range mieux.\n\nSi vous savez déjà ce que vous cherchez, des variantes existent : le [thiouraye au oud](/produit/thiouraye-au-oud) est plus profond, le [thiouraye au santal](/produit/thiouraye-au-santal) plus discret. Lisez toujours la description de l'annonce : les recettes changent d'une artisane à l'autre.",
    entretien:
      "Un thiouraye vit de son parfum : c'est l'air qui l'use. Refermez le sachet après chaque prélèvement, en chassant l'air autant que possible, et glissez-le dans une boîte ou un bocal si vous le gardez longtemps. Rangez-le à l'abri de la lumière et de la chaleur.\n\nPour la combustion, utilisez un encensoir posé sur un support résistant à la chaleur, loin des rideaux et du papier. Ne laissez jamais le charbon sans surveillance, gardez-le hors de portée des enfants et des animaux, et aérez la pièce. Videz les cendres une fois froides.",
    pourQui:
      "Ce sachet s'adresse à celles qui veulent découvrir le thiouraye sans se tromper de format : une première expérience, une envie de changer de parfum de maison, ou le besoin d'un encens à emporter en voyage.\n\nIl se glisse aisément dans un colis. Pour une idée plus complète à offrir, regardez le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir), ou parcourez le [Top 10 des thiouraye artisanaux](/top-10/thiouraye-artisanaux).",
    faq: [
      {
        question: "Qu'est-ce que le thiouraye ?",
        reponse:
          "C'est un encens traditionnel sénégalais, un mélange parfumé de bois, de résines et d'épices que l'on chauffe sur un charbon. Il sert à parfumer la maison et les tissus.",
      },
      {
        question: "Faut-il un encensoir pour le brûler ?",
        reponse:
          "Oui, il faut un contenant résistant à la chaleur pour le charbon, posé sur un support stable. Le thiouraye se dépose ensuite par petites pincées sur la braise.",
      },
    ],
  },
  "thiouraye-en-bocal": {
    origine:
      "Le bocal n'est pas qu'un emballage : dans la pratique familiale, le thiouraye se garde dans un récipient fermé où le mélange continue de prendre le parfum. Les copeaux, les résines et les épices se rencontrent, et la senteur s'arrondit avec le temps, disent beaucoup de préparatrices.\n\nC'est pourquoi on voit souvent cet encens dans un pot posé sur une étagère, prêt pour la prochaine visite. Il illustre bien le soin que la tradition sénégalaise accorde à la maison qui reçoit, thème que vous retrouverez dans l'article [Vivre le djongué en France](/conseils/vivre-le-djongue-en-france).",
    choisir:
      "Le bocal convient à celles qui brûlent du thiouraye régulièrement. Face au [thiouraye artisanal en sachet](/produit/thiouraye-artisanal-sachet), il offre une réserve plus confortable et un meilleur abri pour le parfum, mais il engage davantage : essayez d'abord une recette si vous ne la connaissez pas.\n\nSi vous aimez les parfums musqués, le [thiouraye aux notes de musc](/produit/thiouraye-au-musc) existe aussi ; le [gowé en grains](/produit/gowe-en-grains) propose une autre approche, en gros grains plutôt qu'en mélange de copeaux. Le verre vous laisse voir la texture avant de choisir.",
    entretien:
      "Prélevez toujours avec une cuillère propre et sèche : l'humidité et les doigts gras abîment un mélange. Refermez immédiatement le couvercle. Rangez le bocal à l'abri du soleil, qui pourrait faire vieillir le parfum, et loin d'une source de chaleur.\n\nPour la combustion, placez l'encensoir sur un support qui ne craint pas la chaleur, tenez-le éloigné des tissus, surveillez la braise et gardez le tout hors de portée des enfants. Entrouvrez une fenêtre pendant la diffusion, puis videz les cendres refroidies.",
    pourQui:
      "Ce format est fait pour la maîtresse de maison qui reçoit souvent et veut toujours avoir son parfum sous la main. Il plaît aussi à celles qui apprécient un bel objet visible dans le salon.\n\nEn cadeau, le bocal est un classique chaleureux pour une crémaillère ou une invitation. Associé à un encensoir, comme dans le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir), il devient un cadeau complet.",
    faq: [
      {
        question: "Pourquoi garder le thiouraye dans un bocal ?",
        reponse:
          "Un récipient fermé protège le parfum de l'air et de la poussière. Il permet aussi au mélange de rester homogène entre deux utilisations.",
      },
      {
        question: "Peut-on le brûler sans charbon ?",
        reponse:
          "Le thiouraye se brûle traditionnellement sur un charbon. Certains brûle-parfums électriques peuvent convenir selon leurs indications, mais la senteur et l'intensité diffèrent.",
      },
    ],
  },
  "thiouraye-au-musc": {
    origine:
      "Dans la famille des thiouraye, la note musquée est l'une des plus recherchées. Le musc est un parfum à la fois doux et enveloppant : il arrondit les bois et les résines du mélange et s'accroche volontiers aux tissus. Les recettes sont libres, et deux thiouraye « au musc » peuvent sentir très différemment.\n\nIl s'associe dans l'imaginaire aux belles tenues, aux fêtes de famille et aux maisons que l'on prépare pour recevoir. Le mot « musc » ne dit pas tout de la composition : lisez la description de l'annonce pour savoir ce que contient le mélange.",
    choisir:
      "Cette recette est plus ronde et plus douce que le [thiouraye au oud](/produit/thiouraye-au-oud), plus marqué et plus boisé. Elle est aussi plus enveloppante que le [thiouraye au santal](/produit/thiouraye-au-santal), qui reste léger et lumineux.\n\nSi vous voulez comparer avant de vous décider, l'[assortiment de thiouraye en petits sachets](/produit/thiouraye-assortiment-sachets) propose souvent une note musquée à côté d'autres senteurs. Pour une base neutre et discrète, restez sur le [thiouraye artisanal en sachet](/produit/thiouraye-artisanal-sachet).",
    entretien:
      "Les parfums musqués sont persistants : rangez le thiouraye dans un contenant bien fermé, à part des autres encens, pour qu'ils ne s'imprègnent pas les uns des autres. Gardez-le au sec, à l'abri de la lumière et de la chaleur.\n\nSi vous suspendez un vêtement au-dessus de la fumée, gardez une distance franche avec la braise et ne quittez pas la pièce : un tissu ne doit jamais toucher l'encensoir. Posez celui-ci sur un support résistant à la chaleur, loin des enfants, et aérez après usage.",
    pourQui:
      "Ce thiouraye s'adresse à celles qui aiment les senteurs rondes et douces, plutôt qu'un boisé sec. Il convient à la préparation d'une soirée, d'un baptême ou d'une fête familiale.\n\nIl fait un cadeau agréable pour quelqu'un dont vous connaissez le goût pour les parfums chauds. Pour d'autres idées, voyez notre [Top 10 des thiouraye artisanaux](/top-10/thiouraye-artisanaux).",
    faq: [
      {
        question: "Le thiouraye au musc est-il fort ?",
        reponse:
          "Sa senteur est plutôt douce et ronde, mais l'intensité varie selon la recette. Commencez par une petite pincée et ajoutez-en si besoin.",
      },
      {
        question: "Peut-on parfumer des tissus avec ?",
        reponse:
          "Oui, traditionnellement, on expose les tissus à la fumée à bonne distance de la braise. Surveillez-les en permanence et ne les laissez jamais toucher l'encensoir.",
      },
    ],
  },
  "thiouraye-au-oud": {
    origine:
      "Le oud est un bois précieux, issu de l'arbre Aquilaria, dont le coeur imprégné de résine dégage une senteur profonde et boisée. Il est très estimé dans les traditions parfumées du monde arabe, et il est naturel qu'il ait trouvé sa place dans le thiouraye, dont les recettes dialoguent depuis longtemps avec ces parfums venus d'ailleurs.\n\nAu Sénégal, on l'apprécie pour les soirées et les occasions où l'on veut une maison au parfum affirmé. Sa rareté explique que la qualité varie beaucoup d'une offre à l'autre.",
    choisir:
      "Ce thiouraye est le plus affirmé de la boutique. Si vous préférez une note plus douce, le [thiouraye au santal](/produit/thiouraye-au-santal) est plus léger, et le [thiouraye aux notes de musc](/produit/thiouraye-au-musc) plus enveloppant.\n\nSi c'est le bois de oud lui-même qui vous intéresse, sans mélange, les [copeaux de bois de oud naturel](/produit/copeaux-bois-oud-naturel) le présentent à l'état brut. Pour un mélange parfumé aux huiles, tournez-vous vers le [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux).\n\nUn dernier conseil : comparez les descriptions avant d'acheter. Un thiouraye annoncé « au oud » peut contenir une part de oud très variable, et seule la lecture attentive de l'annonce vous renseigne sur ce que vous recevez.",
    entretien:
      "Le oud est puissant et son parfum voyage : conservez le mélange dans un contenant hermétique, à l'écart des tissus et des autres encens. Rangez-le au sec, loin de la chaleur et de la lumière directe.\n\nUtilisez de petites quantités. Sur un charbon, le bois peut noircir vite : retirez les copeaux brûlés une fois refroidis plutôt que d'ajouter par-dessus. Gardez toujours l'encensoir sur un support résistant à la chaleur, surveillez-le, éloignez-le des enfants et aérez la pièce.",
    pourQui:
      "Il s'adresse aux amatrices de parfums orientaux et à celles qui reçoivent le soir, quand une odeur de bois chaud accompagne bien une grande table. Un peu de retenue suffit : ce mélange se dose comme un parfum.\n\nOffert à quelqu'un qui aime les encens prononcés, c'est un cadeau de caractère. Pour un choix plus doux, la sélection du [Top 10 des thiouraye artisanaux](/top-10/thiouraye-artisanaux) vous donnera des pistes.",
    faq: [
      {
        question: "Qu'est-ce que le oud ?",
        reponse:
          "C'est un bois rare dont le coeur, imprégné de résine, dégage une senteur profonde. Il est utilisé depuis longtemps en parfumerie et dans les encens, notamment au Moyen-Orient.",
      },
      {
        question: "Faut-il en brûler beaucoup ?",
        reponse:
          "Non, le oud est puissant. Quelques copeaux ou une pincée suffisent pour une pièce, et vous pouvez en ajouter progressivement.",
      },
    ],
  },
  "thiouraye-au-santal": {
    origine:
      "Le santal est un bois à la senteur crémeuse, extrait du coeur d'arbres du genre Santalum. Utilisé depuis longtemps en parfumerie et dans les encens, il donne au thiouraye un caractère clair et doux, plus effacé que le oud.\n\nDans la maison sénégalaise, c'est un mélange que l'on associe aux jours ordinaires comme aux jours de réception : une odeur de bois chaud sans lourdeur, qui laisse la place aux autres parfums de la pièce.",
    choisir:
      "Le santal convient aux petites pièces et aux parfums discrets. Le [thiouraye au oud](/produit/thiouraye-au-oud) est nettement plus intense, et le [thiouraye aux notes de musc](/produit/thiouraye-au-musc) plus enveloppant.\n\nPour sentir le bois seul, les [copeaux de bois de santal](/produit/copeaux-bois-de-santal) sont une bonne base, que l'on peut aussi mêler à un autre encens pour l'adoucir. Si vous aimez les notes florales, le [bakhour à la rose](/produit/bakhour-rose) se marie volontiers avec le santal.",
    entretien:
      "Le parfum du santal est subtil : il se perd plus vite si le mélange est mal fermé. Gardez-le dans un contenant bien clos, au sec, loin du soleil et des sources de chaleur.\n\nPour la combustion, choisissez un charbon recouvert de cendre grise avant d'ajouter le mélange, sur un encensoir stable posé sur un support résistant à la chaleur. Surveillez-le, éloignez-le des enfants, des animaux et des tissus, et aérez à la fin. Videz les cendres quand elles sont froides.\n\nEnfin, évitez de multiplier les ajouts : sur un charbon, mieux vaut une pincée de plus après quelques minutes que trois d'un coup, ce qui étouffe la braise et alourdit la fumée.",
    pourQui:
      "C'est le thiouraye des appartements, des matins calmes et des invitations improvisées : un parfum que l'on peut brûler souvent sans que la maison ne sente trop fort. Il convient à celles qui débutent avec les encens boisés.\n\nEn cadeau, c'est un choix rassurant pour quelqu'un dont vous ne connaissez pas bien les goûts. Pour parfaire l'ensemble, un [encensoir en terre cuite peint à la main](/produit/encensoir-terre-cuite-peint) fait un bel accompagnement.",
    faq: [
      {
        question: "Ce thiouraye est-il doux ?",
        reponse:
          "Oui, le santal donne une senteur crémeuse et plutôt discrète, moins marquée que celle du oud. L'intensité dépend toutefois de la recette de chaque préparatrice.",
      },
      {
        question: "Peut-on le mélanger à un autre encens ?",
        reponse:
          "Oui, beaucoup de personnes l'associent à une résine ou à un bakhour pour arrondir le parfum. Essayez de petites quantités pour trouver la combinaison que vous aimez.",
      },
    ],
  },
  "gowe-en-grains": {
    origine:
      "Le gowé est l'un des noms les plus connus parmi les encens de la famille du thiouraye au Sénégal. Il se présente en grains plus gros et plus compacts que les copeaux, que l'on dépose un par un sur le charbon. Comme pour le thiouraye, la composition exacte relève de la préparatrice : le mot désigne un style de mélange plus qu'une formule fixe.\n\nOn le retrouve dans les maisons où l'on aime un parfum soutenu, qui reste dans la pièce.\n\nDans l'usage, on le range souvent à côté du thiouraye, au même endroit que l'encensoir, comme un parfum de la maison à portée de main pour les visites.",
    choisir:
      "Le gowé se distingue du [thiouraye artisanal en sachet](/produit/thiouraye-artisanal-sachet) par sa forme : des grains à poser un par un plutôt qu'une poignée de copeaux à saupoudrer. Il est donc plus facile à doser.\n\nSi vous voulez une résine pure plutôt qu'un mélange, l'[oliban en grains](/produit/oliban-en-grains) et le [benjoin en morceaux](/produit/benjoin-en-morceaux) offrent deux senteurs bien distinctes, l'une fraîche, l'autre vanillée. Pour un parfum de bois prononcé, regardez le [thiouraye au oud](/produit/thiouraye-au-oud).",
    entretien:
      "Les grains se conservent bien dans une boîte ou un bocal fermé, au sec, à l'abri de la chaleur : si l'air est chaud, ils peuvent se ramollir et coller entre eux. Séparez-les avec une cuillère propre plutôt qu'avec les doigts.\n\nSur le charbon, gardez à l'esprit que les grains fondent : grattez les résidus une fois refroidis avant l'usage suivant. L'encensoir doit reposer sur un support qui ne craint pas la chaleur, hors de portée des enfants. Gardez une fenêtre entrouverte pendant la diffusion.",
    pourQui:
      "Le gowé est pour celles qui aiment brûler un encens un peu soutenu et qui apprécient de le doser grain par grain. Il convient bien à un salon ouvert, ou à une pièce que l'on veut parfumer avant la venue de plusieurs invités.\n\nC'est aussi un bon choix pour qui connaît déjà le thiouraye en copeaux et souhaite explorer un autre style de mélange de la même tradition. Le [Top 10 des thiouraye artisanaux](/top-10/thiouraye-artisanaux) peut compléter votre choix.",
    faq: [
      {
        question: "Quelle différence entre gowé et thiouraye ?",
        reponse:
          "Le gowé est un nom de mélange de la famille du thiouraye, souvent présenté en grains. Les recettes variant selon les préparatrices, la frontière n'est pas toujours nette.",
      },
      {
        question: "Combien de grains faut-il déposer ?",
        reponse:
          "Commencez par deux ou trois grains sur un charbon bien rougi, puis ajoutez-en selon la taille de la pièce.",
      },
    ],
  },
  "thiouraye-assortiment-sachets": {
    origine:
      "Il n'existe pas un thiouraye, mais autant de recettes que de préparatrices. Certaines misent sur le musc, d'autres sur le bois, les fleurs ou les résines. Un assortiment de petits sachets reflète cette diversité : en quelques pincées, vous voyagez d'un style à l'autre.\n\nC'est une façon très concrète de comprendre pourquoi les familles sénégalaises ont chacune « leur » thiouraye, parfois composé de génération en génération. Notre article [Qui transmet le djongué ?](/conseils/qui-transmet-le-djongue) évoque cette transmission entre femmes.\n\nChaque sachet est aussi une petite leçon de nez : en les sentant à froid avant de les brûler, on repère déjà les familles, plus boisées, plus musquées ou plus résineuses.",
    choisir:
      "Cet assortiment vous aide à choisir avant d'acheter un format plus grand. Un [thiouraye en bocal de verre](/produit/thiouraye-en-bocal) vous engage sur une seule recette ; ici, vous comparez d'abord, puis vous retenez celle qui vous parle.\n\nLes compositions varient selon les artisanes : vérifiez dans l'annonce ce que contient précisément le lot. Si vous voulez aussi un encensoir pour commencer, le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir) réunit les deux dans un même envoi.",
    entretien:
      "Chaque sachet porte son parfum : refermez-le après chaque usage, de préférence dans sa propre boîte, pour éviter que les senteurs ne se mélangent. Un marqueur permet de noter vos impressions directement sur l'emballage.\n\nGardez l'ensemble au sec et à l'abri de la lumière. Pour la combustion, pas de raccourci : encensoir stable posé sur un support résistant à la chaleur, charbon surveillé, enfants et animaux éloignés, pièce aérée. Essayez un seul mélange à la fois pour bien le reconnaître.",
    pourQui:
      "Cet assortiment s'adresse aux curieuses qui veulent trouver leur parfum, mais aussi à celles qui offrent : une amie qui s'installe, une sœur qui reçoit, une future mariée qui prépare sa maison.\n\nIl est léger et facile à envoyer. Pour pousser l'idée du cadeau, jetez un œil au [Top 10 des cadeaux pour la future mariée](/top-10/cadeaux-future-mariee).\n\nElle convient aussi à une maîtresse de maison qui aime varier : un parfum pour les jours de semaine, un autre pour les repas de fête, un troisième pour les tenues que l'on sort rarement.",
    faq: [
      {
        question: "Les sachets contiennent-ils tous la même recette ?",
        reponse:
          "Non, l'idée est justement de proposer plusieurs mélanges. Le détail du contenu dépend de chaque annonce, à lire attentivement avant de commander.",
      },
      {
        question: "Comment comparer les parfums ?",
        reponse:
          "Brûlez un seul mélange par séance et laissez la pièce s'aérer entre deux essais. Notez ce que vous avez aimé pour choisir ensuite un grand format.",
      },
    ],
  },
  "thiouraye-coffret-avec-encensoir": {
    origine:
      "Ce kit rassemble un thiouraye et un petit encensoir, souvent en terre cuite. L'objet est étroitement lié à la culture sénégalaise de la maison : brûler un parfum à l'arrivée d'invités fait partie des gestes de l'accueil, et le djongué, l'art de plaire et de recevoir, lui donne son sens.\n\nLa terre cuite est un matériau traditionnel pour les encensoirs, capable de supporter la chaleur du charbon. Vérifiez dans l'annonce ce que le kit contient exactement, car les compositions varient.",
    choisir:
      "Ce kit vise la première expérience : tout y est pour commencer. Si vous avez déjà un encensoir, le [thiouraye artisanal en sachet](/produit/thiouraye-artisanal-sachet) suffit. Si vous voulez un cadeau plus élaboré, le [coffret thiouraye et encensoir](/produit/coffret-thiouraye-encensoir) de la rubrique cadeaux existe aussi.\n\nPour un encensoir plus travaillé, vous pouvez comparer avec l'[encensoir en terre cuite façon andé](/produit/encensoir-terre-cuite-ande), vendu seul. Et si vous n'avez pas de charbon, prévoyez des [pastilles de charbon pour encens](/produit/pastilles-charbon-encens).",
    entretien:
      "L'encensoir en terre cuite aime la douceur : laissez-le refroidir complètement avant de le vider, et ne le plongez pas dans l'eau froide quand il est chaud. Un fond de sable ou de cendre protège la terre de la braise.\n\nPosez-le sur un support résistant à la chaleur, loin des rideaux. Ne laissez pas le charbon sans surveillance, éloignez enfants et animaux, et aérez après usage. Refermez le thiouraye après chaque prélèvement et rangez-le au sec.\n\nGardez aussi à l'esprit que la terre cuite est poreuse : elle peut garder une trace de parfum d'un encens à l'autre. Si vous changez souvent de senteur, un peu de sable propre au fond aide à garder l'encensoir net.",
    pourQui:
      "C'est un cadeau tout prêt pour une crémaillère, un mariage, un anniversaire, ou pour vous-même si vous voulez commencer dans de bonnes conditions. Il parle à celles qui ont grandi avec cette odeur et à celles qui la découvrent.\n\nIl se prête bien à un mot explicatif sur la tradition. Pour d'autres idées dans le même esprit, consultez le [Top 10 des encensoirs et brûle-parfums](/top-10/encensoirs-brule-parfums).",
    faq: [
      {
        question: "Que contient ce kit ?",
        reponse:
          "Il réunit en principe un thiouraye et un petit encensoir, parfois du charbon. Le contenu exact dépend de chaque annonce : lisez-la avant de commander.",
      },
      {
        question: "Faut-il acheter du charbon à part ?",
        reponse:
          "Cela dépend du kit. S'il n'en contient pas, il vous faudra des pastilles ou du charbon de noix de coco, vendus séparément.",
      },
    ],
  },
  "bakhour-oud-copeaux": {
    origine:
      "Le bakhour est un encens venu de la péninsule Arabique : des copeaux de bois imprégnés d'huiles parfumées, que l'on chauffe doucement pour libérer leur senteur. Il s'est installé dans de nombreux foyers d'Afrique de l'Ouest, où il côtoie le thiouraye sans le remplacer.\n\nLa version au oud est la plus classique : chaude, boisée, un peu ambrée. Elle illustre bien l'échange entre les traditions parfumées de part et d'autre du Sahara.\n\nOn le reconnaît à sa couleur sombre et à l'odeur qui monte dès l'ouverture de la boîte, signe que les copeaux sont bien imprégnés.",
    choisir:
      "À la différence du [thiouraye au oud](/produit/thiouraye-au-oud), mélange sénégalais qui contient aussi des résines, le bakhour est un copeau parfumé, plus net et plus propre à manipuler. Il est aussi plus travaillé que les [copeaux de bois de oud naturel](/produit/copeaux-bois-oud-naturel), qui ne contiennent pas d'huile.\n\nSi vous cherchez une note plus sucrée, regardez le [bakhour à l'ambre](/produit/bakhour-ambre) ; pour du floral, le [bakhour à la rose](/produit/bakhour-rose).",
    entretien:
      "Gardez les copeaux dans leur boîte ou leur sachet fermé, au sec, à l'abri de la lumière et de la chaleur. L'huile parfumée imprègne vite les surfaces : manipulez-les avec une pince ou des doigts propres.\n\nLe bois doit chauffer, pas s'enflammer. Si une flamme apparaît, retirez-le à la pince et laissez-le s'éteindre. Utilisez un support résistant à la chaleur, gardez l'encensoir hors de portée des enfants, ne le laissez pas sans surveillance et aérez la pièce.",
    pourQui:
      "Ce bakhour s'adresse à celles qui aiment les senteurs boisées et chaudes, et qui cherchent un encens plus net que le thiouraye. Il se prête aux soirées, à l'accueil, aux jours de fête.\n\nIl fait aussi un cadeau classique pour qui possède déjà un brûle-parfum. Le [Top 10 des bakhour maison](/top-10/bakhour-maison) vous aidera à comparer d'autres options.\n\nAu quotidien, il se prête à un petit rituel du soir : un copeau, un peu de patience, et la maison prend une odeur de bois chaud qui reste dans les tissus. Mieux vaut y aller par touches, car le oud occupe vite tout l'espace.",
    faq: [
      {
        question: "Quelle est la différence entre bakhour et thiouraye ?",
        reponse:
          "Le bakhour vient de la péninsule Arabique et se compose de copeaux imprégnés d'huiles parfumées. Le thiouraye est un mélange sénégalais de bois, de résines et d'épices.",
      },
      {
        question: "Peut-on le chauffer sans charbon ?",
        reponse:
          "Oui, un brûle-parfum électrique convient souvent, selon ses indications. Le bois chauffe sans brûler et libère sa senteur plus doucement.",
      },
    ],
  },
  "bakhour-pastilles-moulees": {
    origine:
      "Le bakhour traditionnel se présente en copeaux, mais il existe aussi sous forme de pastilles ou de briquettes pressées. La poudre de bois, imprégnée d'huiles parfumées, est moulée en petites pièces d'une taille régulière.\n\nCe format moderne répond à un besoin simple : doser sans tâtonner. Il s'est installé dans les foyers qui aiment la tradition mais préfèrent un encens propre, facile à ranger, à manipuler et à compter.\n\nLes senteurs proposées dans ce format couvrent la même palette que les copeaux : oud, musc, notes florales. Le choix se fait donc surtout sur la forme et la facilité d'usage, non sur le parfum.",
    choisir:
      "La pastille se dose d'un geste, ce qui la rend plus facile à utiliser que les copeaux du [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux), qu'il faut estimer à l'œil. En revanche, elle laisse moins de place à la texture du bois visible.\n\nPour un cadeau présenté avec soin, le [bakhour en boîte décorée](/produit/bakhour-boite-decoree) a plus d'allure. Si vous débutez, le [brûle-parfum électrique pour bakhour](/produit/brule-parfum-electrique-bakhour) évite de manipuler un charbon.\n\nRegardez enfin la taille des pastilles indiquée dans l'annonce : elle détermine la durée d'une séance et la quantité de parfum diffusée. Une pastille plus petite se prête mieux aux appartements, une plus grosse aux salons où l'on reçoit. Faute de précision, essayez une demi-pastille d'abord, et ajustez à votre goût.",
    entretien:
      "Les pastilles se conservent bien tant qu'elles restent au sec : gardez-les dans une boîte fermée, loin de la chaleur, car elles peuvent ramollir. Séparez-les si elles collent ensemble.\n\nUne pastille entière suffit en général pour une séance ; une demi-pastille convient aux petites pièces. Ne laissez jamais l'appareil ou le charbon sans surveillance, placez-les sur un support résistant à la chaleur, hors de portée des enfants, et aérez à la fin.",
    pourQui:
      "Elle plaît aux débutantes qui redoutent d'en mettre trop, aux personnes organisées qui aiment compter, et à celles qui n'ont pas la place de ranger un grand pot. Le format reste discret dans un tiroir.\n\nIl se glisse aussi dans un petit cadeau, avec un brûle-parfum. Si vous hésitez sur la senteur, parcourez le [Top 10 des bakhour maison](/top-10/bakhour-maison).",
    faq: [
      {
        question: "Une pastille suffit-elle pour une pièce ?",
        reponse:
          "Souvent oui pour une séance. Pour un petit espace, une demi-pastille peut suffire : adaptez selon l'intensité de la recette.",
      },
      {
        question: "Que faire des restes ?",
        reponse:
          "Laissez-les refroidir sur la plaque ou dans l'encensoir, puis jetez-les. Nettoyez le support avant le prochain usage.",
      },
    ],
  },
  "bakhour-boite-decoree": {
    origine:
      "Dans l'usage courant, le bakhour est souvent vendu dans une boîte ronde ou octogonale ornée, héritée de la tradition arabe des parfums. La boîte n'est pas qu'un décor : elle garde les copeaux à l'abri de l'air, ce qui préserve leur senteur.\n\nCette présentation explique pourquoi le bakhour est un cadeau si courant dans de nombreux foyers, et pourquoi les boîtes vides sont souvent gardées pour d'autres usages.",
    choisir:
      "Ce format a l'avantage de se suffire à lui-même : vous pouvez l'offrir tel quel, sans emballage supplémentaire. Face au [bakhour en pastilles moulées](/produit/bakhour-pastilles-moulees), plus facile à doser, la boîte décorée met l'accent sur la présentation.\n\nSi vous voulez un cadeau plus complet, le [coffret bakhour et brûle-parfum](/produit/coffret-bakhour-brule-parfum) y ajoute l'appareil. Pour une senteur précise, choisissez entre le [bakhour à l'ambre](/produit/bakhour-ambre) et le [bakhour à la rose](/produit/bakhour-rose).\n\nRegardez enfin ce que l'annonce précise sur la senteur et la présentation, car la décoration de la boîte ne dit rien du parfum qu'elle contient.",
    entretien:
      "La boîte est votre meilleure protection : refermez-la dès que vous avez pris un copeau. Rangez-la au sec, loin du soleil et d'une source de chaleur, et ne la laissez pas ouverte à côté d'autres parfums.\n\nPrenez le copeau avec une pince ou du bout des doigts propres. Posé sur un charbon couvert de cendre ou sur un brûle-parfum électrique, il doit chauffer sans flamme. L'encensoir reste sur un support stable résistant à la chaleur, hors de portée des enfants, et la pièce est aérée.",
    pourQui:
      "Ce bakhour est pensé pour offrir : à une hôte, à une collègue, à une amie qui s'installe. Il convient aussi à celles qui aiment ranger leurs encens dans de beaux contenants.\n\nVous pouvez ajouter un petit mot sur le parfum choisi. Pour d'autres idées d'objets qui vont avec, consultez le [Top 10 des encensoirs et brûle-parfums](/top-10/encensoirs-brule-parfums).\n\nSi vous l'offrez à une personne qui découvre le bakhour, pensez à joindre quelques lignes sur la façon de le chauffer et sur les précautions : une braise ou une plaque chaude se manie avec attention. Un cadeau accompagné de ce petit mode d'emploi est bien mieux reçu.",
    faq: [
      {
        question: "La senteur est-elle précisée ?",
        reponse:
          "Cela dépend de l'annonce : oud, ambre, rose ou mélange floral sont courants. Lisez la description pour connaître la note exacte.",
      },
      {
        question: "Que faire de la boîte une fois vide ?",
        reponse:
          "Beaucoup la gardent pour ranger d'autres encens, des pastilles de charbon ou de petits objets. Lavez-la à sec avant de la réutiliser.",
      },
    ],
  },
  "bakhour-ambre": {
    origine:
      "L'ambre dont il s'agit ici est une note de parfumerie, chaude, légèrement sucrée et résineuse, et non la pierre fossile. Associée au bakhour, elle donne une senteur réconfortante, que l'on retrouve dans les maisons où l'on aime accueillir dans un parfum enveloppant.\n\nOn la brûle volontiers à la saison froide, quand les portes restent fermées et que l'on cherche une maison chaleureuse dès l'entrée.\n\nDans la tradition du bakhour, ce parfum se mêle souvent à d'autres notes, comme le oud ou le musc : le mot ambre décrit surtout une famille de senteurs plutôt qu'une matière précise, d'où l'intérêt de lire la description du produit.",
    choisir:
      "Le bakhour à l'ambre se situe entre deux pôles : plus doux que le [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux), plus présent que les notes florales du [bakhour à la rose](/produit/bakhour-rose).\n\nSi vous aimez cette ambiance en version bougie, la [bougie parfumée oud et ambre](/produit/bougie-parfumee-oud-ambre) en propose une déclinaison sans braise. Pour un usage quotidien, privilégiez le brûle-parfum électrique, plus simple qu'un charbon.\n\nPrenez le temps de lire les notes annoncées : un bakhour à l'ambre peut aussi contenir du musc ou de la vanille, ce qui change beaucoup le résultat.",
    entretien:
      "Les notes sucrées s'évaporent plus vite quand la boîte reste ouverte : refermez-la aussitôt et rangez-la au frais et au sec. Évitez de la laisser près d'un radiateur.\n\nPosez le copeau sur une braise couverte de cendre grise ou sur la plaque d'un brûle-parfum électrique, jamais directement sur la flamme. Placez l'encensoir à distance des rideaux et des coussins, sur un support résistant à la chaleur, hors de portée des enfants. Aérez quelques minutes ensuite.\n\nSi la senteur vous semble trop présente après quelques séances, laissez le bakhour reposer une semaine au frais : un parfum que l'on sent chaque jour finit par se remarquer moins, et mieux vaut une pause qu'une pincée de plus.",
    pourQui:
      "Ce bakhour va à celles qui aiment les parfums chauds, aux amoureuses de l'hiver, et à celles qui veulent une entrée de maison accueillante. Il convient à des pièces plutôt grandes, ou à des tissus épais qui gardent la senteur.\n\nIl se glisse dans un cadeau d'hiver avec un brûle-parfum. Le [Top 10 des bakhour maison](/top-10/bakhour-maison) propose d'autres idées pour compléter.",
    faq: [
      {
        question: "Ce parfum est-il sucré ?",
        reponse:
          "Oui, légèrement. La note d'ambre est chaude et résineuse, avec une pointe sucrée, mais l'intensité varie selon la recette.",
      },
      {
        question: "Convient-il aux petites pièces ?",
        reponse:
          "Avec modération, oui. Commencez par un seul copeau et aérez avant d'en ajouter, car la senteur enveloppante peut vite devenir marquée.",
      },
    ],
  },
  "bakhour-rose": {
    origine:
      "La rose est un parfum classique des traditions de l'Orient, utilisé depuis très longtemps en parfumerie. Associée au bakhour, elle donne un encens florale et élégant, avec une trace boisée plus discrète que celle du oud.\n\nLe bakhour à la rose appartient plutôt aux maisons de réception, aux matinées de fête et aux préparatifs de mariage, où l'on souhaite un parfum qui sente bon sans écraser les autres senteurs.\n\nDans une pièce fermée, la rose tient bien sans être lourde, surtout si l'on aère avant d'allumer. C'est un parfum qui se marie aux fleurs fraîches posées sur une table, sans les concurrencer. Les bakhour floraux plaisent d'ailleurs souvent à celles qui ne supportent pas les encens trop épicés.",
    choisir:
      "C'est le bakhour le plus léger de la sélection : plus fleuri que le [bakhour à l'ambre](/produit/bakhour-ambre), moins boisé que le [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux). Il plaît à celles qui trouvent les encens traditionnels trop forts.\n\nLa rose s'associe très bien au [copeaux de bois de santal](/produit/copeaux-bois-de-santal) ou au [benjoin en morceaux](/produit/benjoin-en-morceaux), si vous voulez créer votre propre mélange pour une grande occasion.\n\nNotez aussi que la rose se combine souvent à d'autres notes dans un bakhour, comme le musc, la vanille ou le oud. Lisez la composition annoncée pour savoir si la fleur domine vraiment ou si elle sert de simple touche.",
    entretien:
      "Les parfums floraux sont délicats : gardez les copeaux dans une boîte bien fermée, au frais, à l'abri de la lumière. Un contenant à part évite que la rose ne se mêle aux notes plus fortes d'autres encens.\n\nChauffez doucement : sur un charbon couvert de cendre grise ou sur un brûle-parfum électrique, sans flamme. L'encensoir se pose sur un support résistant à la chaleur, loin des enfants et des tissus. Ouvrez la fenêtre quelques minutes après usage.",
    pourQui:
      "Il s'adresse aux amatrices de parfums floraux, à celles qui reçoivent pour un déjeuner de fête ou qui préparent un mariage, et à celles qui veulent un encens que l'on peut brûler sans craindre l'excès.\n\nIl se marie bien à un cadeau de future mariée ou de maîtresse de maison. Pour d'autres idées, consultez le [Top 10 des cadeaux pour la future mariée](/top-10/cadeaux-future-mariee).\n\nElle convient aussi aux chambres d'amis que l'on prépare avant une visite : un copeau suffit à donner à la pièce une odeur fleurie accueillante, sans parfum lourd dans les tissus.",
    faq: [
      {
        question: "Ce bakhour sent-il vraiment la rose ?",
        reponse:
          "Sa senteur est florale, souvent accompagnée d'un fond boisé ou musqué. Le dosage de chaque note change d'une recette à l'autre.",
      },
      {
        question: "Peut-on le mélanger à du santal ?",
        reponse:
          "Oui, beaucoup apprécient l'accord entre la rose et le santal. Essayez de petites quantités pour doser à votre goût.",
      },
    ],
  },
  "copeaux-bois-oud-naturel": {
    origine:
      "Le oud, ou bois d'agar, provient d'arbres du genre Aquilaria dont le coeur se charge de résine. C'est cette résine qui produit la senteur recherchée. Dans ces copeaux naturels, aucune huile n'est ajoutée : le parfum vient du bois seul.\n\nC'est la matière de départ de nombreux bakhour, ce qui en fait une porte d'entrée pour comprendre le oud. Il est rare, et sa qualité varie fortement d'une offre à l'autre.",
    choisir:
      "Ces copeaux sont l'option la plus sobre : le parfum est sec, subtil et évolue pendant la chauffe. Le [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux) est parfumé aux huiles, donc plus marqué et plus immédiat. Le [thiouraye au oud](/produit/thiouraye-au-oud) mêle le bois à des résines.\n\nSi le oud brut vous semble difficile d'accès, les [copeaux de bois de santal](/produit/copeaux-bois-de-santal) proposent un autre bois, plus doux. Lisez bien l'annonce : l'origine et la qualité ne sont pas toujours précisées.",
    entretien:
      "Le bois de oud se garde longtemps s'il est sec : rangez-le dans une boîte fermée, loin de l'humidité et de la chaleur, à l'écart d'autres parfums. Sa senteur discrète se perd si le contenant reste ouvert.\n\nPour la chauffe, préférez la douceur : un brûle-parfum électrique réglé bas ou un charbon couvert de cendre. Un seul petit copeau suffit. Retirez-le à la pince s'il noircit, laissez refroidir, et gardez le tout hors de portée des enfants, sur un support résistant à la chaleur.\n\nSi vous les conservez longtemps, vérifiez de temps en temps qu'aucune humidité ne s'est glissée dans la boîte : un bois humide chauffe mal et sent moins bon.",
    pourQui:
      "Ces copeaux s'adressent aux curieuses, aux amateurs de parfums et à celles qui veulent apprendre à reconnaître un oud. Il demande de l'attention : la senteur se découvre lentement, au fil de la chauffe.\n\nIl convient moins à qui cherche un parfum immédiatement puissant. Pour comparer, parcourez le [Top 10 des bakhour maison](/top-10/bakhour-maison).",
    faq: [
      {
        question: "Quelle différence avec le bakhour au oud ?",
        reponse:
          "Ici, le bois n'est pas imprégné d'huiles : le parfum est celui du oud seul. Le bakhour est parfumé et plus marqué.",
      },
      {
        question: "Pourquoi la qualité varie-t-elle autant ?",
        reponse:
          "Le oud est un bois rare dont la teneur en résine change beaucoup d'un arbre à l'autre. Renseignez-vous sur l'origine indiquée dans l'annonce.",
      },
    ],
  },
  "copeaux-bois-de-santal": {
    origine:
      "Le santal est un bois prisé en parfumerie et en encens depuis très longtemps, notamment dans le sous-continent indien. Son coeur dégage une senteur douce, crémeuse, légèrement boisée, que l'on retrouve dans de nombreux mélanges, dont certains thiouraye.\n\nSous forme de copeaux seuls, il montre sa personnalité sans artifice. Il peut aussi servir de base ou de liant pour composer ses propres mélanges.\n\nSes copeaux sont faciles à doser et à reconnaître à l'odeur, ce qui les rend utiles pour apprendre à distinguer les bois entre eux. C'est un bon point de départ avant d'explorer des parfums plus complexes.",
    choisir:
      "Les copeaux de santal sont plus doux et plus discrets que les [copeaux de bois de oud naturel](/produit/copeaux-bois-oud-naturel), et conviennent mieux aux petites pièces. Ils n'ont pas non plus la complexité d'un [thiouraye au santal](/produit/thiouraye-au-santal), qui associe le bois à des résines.\n\nSi vous aimez mélanger, associez-les à l'[oliban en grains](/produit/oliban-en-grains) pour une note plus fraîche, ou au [benjoin en morceaux](/produit/benjoin-en-morceaux) pour une note plus vanillée.\n\nUn dernier point : la qualité du santal varie beaucoup selon l'origine et l'âge de l'arbre. Une annonce qui mentionne l'espèce, par exemple Santalum album, est plus fiable qu'une description vague, mais ne garantit pas tout. Fiez-vous à votre nez dès la première chauffe.",
    entretien:
      "Le santal se conserve longtemps dans une boîte bien fermée, au sec et à l'abri de la lumière. Comme sa senteur est subtile, évitez de le ranger à côté d'encens plus forts, qui la masqueraient.\n\nPosez quelques copeaux sur un charbon chaud ou sur un brûle-parfum électrique. Surveillez la chauffe, retirez ce qui noircit à la pince, et laissez refroidir avant de nettoyer. L'encensoir se pose sur un support résistant à la chaleur, loin des enfants et des tissus ; aérez ensuite.",
    pourQui:
      "Ces copeaux s'adressent à celles qui veulent un parfum facile à vivre, ou qui aiment créer leurs propres mélanges à partir de matières simples. Ils conviennent aux débutantes comme aux habituées.\n\nIls font un petit cadeau modeste et utile, à glisser dans un coffret, par exemple avec un [encensoir en terre cuite peint à la main](/produit/encensoir-terre-cuite-peint).",
    faq: [
      {
        question: "Peut-on les mêler à un thiouraye ?",
        reponse:
          "Oui, une pincée de santal peut adoucir un mélange jugé trop fort. Ajoutez-la par-dessus, en petite quantité.",
      },
      {
        question: "Combien de temps se conservent-ils ?",
        reponse:
          "Bien fermés et au sec, ils se gardent longtemps, mais leur senteur finit par s'atténuer. Un contenant hermétique la préserve mieux.",
      },
    ],
  },
  "oliban-en-grains": {
    origine:
      "L'oliban, aussi appelé encens en grains, est une résine récoltée sur des arbres du genre Boswellia, dans la Corne de l'Afrique et la péninsule Arabique notamment. Il est connu depuis l'Antiquité et il est brûlé dans de nombreuses cultures.\n\nSa senteur claire, fraîche et légèrement citronnée en fait une base fréquente des mélanges de bakhour et de thiouraye. Utilisé seul, il offre une ambiance nette, sans fard.\n\nEn France, on le croise aussi sous le nom d'encens d'église, car il est brûlé lors de cérémonies religieuses dans plusieurs traditions. Son usage domestique, lui, reste très libre : on le fait fondre pour recevoir, sans autre cérémonie.",
    choisir:
      "L'oliban est une résine pure, et non un mélange : il est plus transparent et plus lumineux que le [gowé en grains](/produit/gowe-en-grains), composé de plusieurs matières. Face au [benjoin en morceaux](/produit/benjoin-en-morceaux), plus doux et vanillé, il garde une fraîcheur citronnée.\n\nSi vous cherchez la chaleur du bois, regardez plutôt le [thiouraye au santal](/produit/thiouraye-au-santal). Pour brûler les grains, un [charbon naturel de noix de coco](/produit/charbon-noix-de-coco) laisse la senteur de l'oliban parler sans odeur parasite.\n\nLes grains varient d'une offre à l'autre par leur taille et leur couleur, du jaune pâle à l'ambre. Cela ne dit pas tout de la qualité, mais des grains propres, de taille assez régulière et dont l'odeur est nette à froid sont un bon signe.",
    entretien:
      "Conservez les grains dans un bocal ou une boîte fermée, au sec et à l'abri de la chaleur, sinon ils collent. Prenez-les à la cuillère ou à la pince plutôt qu'avec les doigts, la résine est collante.\n\nDéposez-en deux ou trois sur un charbon couvert de cendre grise. La résine fond et laisse des résidus : grattez-les une fois refroidis avant l'usage suivant. Gardez l'encensoir sur un support résistant à la chaleur, hors de portée des enfants, et aérez la pièce.",
    pourQui:
      "L'oliban s'adresse à celles qui aiment les encens clairs et simples, ou qui veulent apprendre à reconnaître les résines à la base des mélanges. Il convient à une pièce de réception comme à un coin calme.\n\nIl se glisse dans un petit cadeau avec un encensoir, pour des amateurs de rituels de parfum. Le [Top 10 des encensoirs et brûle-parfums](/top-10/encensoirs-brule-parfums) vous aidera à trouver l'accessoire adapté.",
    faq: [
      {
        question: "Qu'est-ce que l'oliban ?",
        reponse:
          "C'est une résine récoltée sur les arbres du genre Boswellia, que l'on appelle aussi encens en grains. Elle fond sur le charbon en libérant une senteur fraîche.",
      },
      {
        question: "Peut-on le brûler seul ?",
        reponse:
          "Oui, beaucoup l'utilisent seul, mais il se mêle aussi volontiers à du bois, du santal ou du bakhour.",
      },
    ],
  },
  "benjoin-en-morceaux": {
    origine:
      "Le benjoin est une résine tirée d'arbres du genre Styrax, que l'on trouve en Asie du Sud-Est notamment. Sa senteur douce et vanillée en a fait un ingrédient classique de nombreuses fumigations parfumées, dans des régions très différentes.\n\nIl entre dans beaucoup de recettes pour sa capacité à arrondir les notes plus sèches du bois. Seul, il donne une fumée chaleureuse, légèrement sucrée.\n\nIl est souvent utilisé comme fixateur dans les recettes : sa résine retient les notes plus volatiles et prolonge la senteur. Beaucoup de préparatrices en glissent une pincée dans leurs mélanges pour cette raison.",
    choisir:
      "Le benjoin est plus doux et plus gourmand que l'[oliban en grains](/produit/oliban-en-grains), frais et citronné. Il convient bien à celles qui trouvent l'oliban trop vif. Il n'a pas la complexité d'un [gowé en grains](/produit/gowe-en-grains), mélange composé de plusieurs matières.\n\nIl s'associe volontiers aux [copeaux de bois de santal](/produit/copeaux-bois-de-santal) ou au [bakhour à la rose](/produit/bakhour-rose) pour composer un parfum à votre goût, avec un fond plus rond.\n\nChoisissez des morceaux d'aspect propre, sans poussière, et dont l'odeur vanillée est perceptible à froid : c'est un bon signe de fraîcheur. Les teintes varient du brun au beige, selon l'origine de la résine.",
    entretien:
      "Les morceaux se gardent bien dans une boîte fermée, au sec et à l'abri de la chaleur : une température trop forte les ramollit. Cassez-les à froid, avec précaution, en protégeant vos yeux et vos mains des éclats.\n\nPosez un petit morceau sur un charbon bien chaud, couvert de cendre. Il fond vite et laisse un résidu à gratter une fois refroidi. L'encensoir doit rester sur un support résistant à la chaleur, hors de portée des enfants, et la pièce doit être aérée.",
    pourQui:
      "Le benjoin s'adresse à celles qui aiment les senteurs chaudes, douces et gourmandes, ou qui souhaitent composer leurs propres mélanges. Il convient à un salon, à une entrée, à une soirée entre amis.\n\nPour offrir, il se glisse dans un petit coffret avec d'autres résines. Un [encensoir en terre cuite façon andé](/produit/encensoir-terre-cuite-ande) fera un bel écrin à cette fumée chaleureuse.\n\nIl s'offre aussi très bien aux amatrices de bougies et de parfums d'ambiance qui veulent essayer une fumée plus traditionnelle. Pour une ambiance proche mais sans braise, regardez la [bougie parfumée oud et ambre](/produit/bougie-parfumee-oud-ambre), qui joue sur les mêmes notes chaudes.",
    faq: [
      {
        question: "Que sent le benjoin ?",
        reponse:
          "Une note douce et vanillée, un peu sucrée. Elle est chaleureuse et accueillante, moins vive que celle de l'oliban.",
      },
      {
        question: "Faut-il le casser ?",
        reponse:
          "Souvent oui, pour obtenir de petits morceaux faciles à doser. Faites-le avec précaution : les éclats peuvent être coupants.",
      },
    ],
  },
  "pastilles-charbon-encens": {
    origine:
      "Le charbon est l'allié de tout encens en grains, en copeaux ou en résine : il fournit la chaleur nécessaire pour libérer le parfum. Traditionnellement, on utilisait de la braise de bois. Les pastilles modernes, pressées en petits disques, rendent le geste plus simple.\n\nElles s'allument sur un bord, grâce à un produit d'allumage intégré, ce qui explique leur rapidité et la légère odeur qu'elles dégagent à l'allumage.\n\nDans un encensoir, la pastille remplit un rôle simple : elle sert de source de chaleur douce, assez forte pour fondre une résine mais sans flamme. C'est ce qui permet de brûler l'encens sans le consumer.",
    choisir:
      "Ces pastilles s'allument vite, mais elles ont une odeur au démarrage. Le [charbon naturel de noix de coco](/produit/charbon-noix-de-coco) est presque inodore et demande plus de patience. Choisissez selon que vous préférez la rapidité ou la discrétion.\n\nPour les manipuler avec sécurité, une [pince à charbon pour encensoir](/produit/pince-charbon-encens) est précieuse, et un [sable pour encensoir](/produit/sable-pour-encensoir) protège le fond du récipient. Vérifiez le diamètre : il doit correspondre à votre encensoir.",
    entretien:
      "Le charbon craint l'humidité : gardez les rouleaux fermés dans une boîte à l'abri, au sec. Une pastille humide s'allume mal et fume davantage.\n\nPour l'usage, tenez la pastille avec une pince, jamais à la main, et posez-la sur un lit de sable ou de cendre dans l'encensoir. Laissez-la se couvrir de cendre grise avant d'ajouter l'encens. Utilisez-la dans une pièce aérée, sur un support résistant à la chaleur, hors de portée des enfants, et ne la laissez jamais sans surveillance. Laissez les cendres refroidir complètement.",
    pourQui:
      "Ces pastilles sont pour celles qui brûlent déjà du thiouraye, du bakhour ou des résines et manquent de charbon, ou pour les débutantes qui veulent une solution rapide. Elles font partie des fournitures à avoir toujours sous la main.\n\nÀ glisser dans un cadeau d'encensoir, elles évitent les mauvaises surprises. Le [Top 10 des thiouraye artisanaux](/top-10/thiouraye-artisanaux) vous aidera à choisir l'encens qui va avec.",
    faq: [
      {
        question: "Pourquoi attendre la cendre grise ?",
        reponse:
          "Elle indique que l'allumage est terminé et que l'odeur du produit d'allumage s'est dissipée. L'encens libère alors son parfum sans arrière-goût.",
      },
      {
        question: "Peut-on réutiliser une pastille ?",
        reponse:
          "Une pastille se consume jusqu'au bout. Ne la rallumez pas : mieux vaut en utiliser une nouvelle à chaque séance.",
      },
    ],
  },
  "charbon-noix-de-coco": {
    origine:
      "Ce charbon est fabriqué à partir de coques de noix de coco, une matière végétale abondante dans les régions tropicales. Contrairement aux pastilles auto-allumantes, il ne contient pas de produit d'allumage : il se consume lentement et régulièrement.\n\nCette qualité en fait le choix des amateurs d'encens pour qui le parfum de la résine ou du bois doit rester seul en scène.\n\nIl se présente en cubes ou en disques, et brûle en dégageant peu de fumée une fois la braise installée. On le retrouve couramment dans les maisons où l'on prépare le bakhour avec soin.",
    choisir:
      "Ce charbon se choisit pour sa discrétion : presque sans odeur, il laisse l'encens parler. Les [pastilles de charbon pour encens](/produit/pastilles-charbon-encens) s'allument plus vite mais dégagent un léger parfum d'allumage.\n\nIl faut prévoir de quoi l'allumer et le manipuler : une [pince à charbon pour encensoir](/produit/pince-charbon-encens) est indispensable, et un [sable pour encensoir](/produit/sable-pour-encensoir) protège le fond du récipient. Il s'accorde bien avec le [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux).",
    entretien:
      "Gardez le charbon dans une boîte fermée, au sec : l'humidité l'empêche de s'allumer correctement. Évitez de le ranger près d'une source de chaleur.\n\nAllumez-le avec une pince, à distance du visage, sur un allume-charbon électrique ou à la flamme d'une gazinière. Quand il est rouge et couvert de cendre, déposez-le dans l'encensoir. Placez ce dernier sur un support résistant à la chaleur, hors de portée des enfants, et laissez une fenêtre entrouverte. Ne le laissez jamais sans surveillance et attendez le refroidissement complet.",
    pourQui:
      "Il s'adresse aux habituées qui connaissent leurs encens et veulent un parfum net, aux amateurs de bakhour, et à celles qui n'aiment pas l'odeur des pastilles auto-allumantes. Il demande un peu de patience au démarrage.\n\nC'est aussi un bon complément pour un cadeau d'encensoir. Pour le support, voyez notre [Top 10 des encensoirs et brûle-parfums](/top-10/encensoirs-brule-parfums).\n\nIl demande aussi un peu de matériel : une pince, un support de braise, éventuellement un allume-charbon. Si vous débutez, commencez par un seul cube pour apprivoiser les gestes avant d'en allumer plusieurs.",
    faq: [
      {
        question: "Est-il plus long à allumer ?",
        reponse:
          "Oui, il n'a pas d'allumage intégré : il faut le chauffer avec un allume-charbon ou une flamme, puis attendre qu'il se couvre de cendre.",
      },
      {
        question: "Pourquoi dit-on qu'il est inodore ?",
        reponse:
          "Parce qu'il est peu parfumé par lui-même : seul l'encens se fait sentir. Il émet toutefois de la fumée à l'allumage, d'où l'intérêt d'aérer.",
      },
    ],
  },
  "batonnets-encens-oud": {
    origine:
      "L'encens en bâtonnets est une forme pratique de la tradition de la fumigation : un mélange de matières parfumées est fixé sur un support, puis brûle lentement à la braise. Il n'a pas la profondeur d'un thiouraye ou d'un bakhour, mais il est d'un usage sans façon.\n\nLa note de oud évoque les parfums de l'Orient et du Golfe, dans une version simple à mettre en œuvre au quotidien.\n\nUn bâtonnet brûle lentement, sans intervention : c'est tout son intérêt dans une maison où l'on n'a pas toujours le temps d'allumer un charbon. Il s'adresse au quotidien plus qu'aux grandes occasions.",
    choisir:
      "Les bâtonnets sont le choix des jours pressés : pas de charbon à allumer, comme avec le [thiouraye en bocal](/produit/thiouraye-en-bocal), ni d'appareil électrique, comme avec le [brûle-parfum électrique pour bakhour](/produit/brule-parfum-electrique-bakhour). Un simple porte-encens suffit.\n\nLa contrepartie est une senteur moins profonde. Si vous voulez retrouver le oud avec plus de caractère, le [bakhour au oud en copeaux](/produit/bakhour-oud-copeaux) est la référence. Préférez des bâtonnets aux senteurs sobres, qui ne saturent pas la pièce.",
    entretien:
      "Gardez les bâtonnets dans leur emballage ou une boîte fermée, au sec, pour qu'ils conservent leur parfum et ne s'abîment pas. Évitez de les plier.\n\nAllumez l'extrémité, laissez la flamme prendre quelques secondes, puis soufflez-la. Plantez le bâtonnet dans un porte-encens stable, sur une surface résistante à la chaleur, loin des rideaux et du papier, et récupérez la cendre. Éteignez-le avant de quitter la pièce, gardez-le hors de portée des enfants et aérez ensuite.",
    pourQui:
      "Ces bâtonnets conviennent à celles qui veulent une note de oud sans encensoir ni charbon : pour une entrée, un bureau à domicile, un petit coin. Ils plaisent aussi à qui découvre l'encens et veut y aller doucement.\n\nIls peuvent compléter un cadeau plus sobre. Pour aller plus loin, le [Top 10 des encensoirs et brûle-parfums](/top-10/encensoirs-brule-parfums) présente des solutions pour tous les budgets de goût.\n\nPensez à choisir un modèle sans parfum trop chargé si vous le brûlez souvent : une senteur sobre est plus agréable sur la durée, et plus simple à marier avec les autres odeurs de la maison.",
    faq: [
      {
        question: "Faut-il un encensoir ?",
        reponse:
          "Non, un simple porte-encens stable suffit. Il récupère la cendre et maintient le bâtonnet droit.",
      },
      {
        question: "Les bâtonnets remplacent-ils le bakhour ?",
        reponse:
          "Ils sont plus pratiques mais moins profonds. Le bakhour offre une senteur plus riche, au prix d'un peu plus de préparation.",
      },
    ],
  },
};
