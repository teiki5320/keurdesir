# Fiches détaillées des produits — consignes de rédaction (novembre 2026)

Pourquoi : Google AdSense juge un site sur la valeur de ses pages. Le texte propre d'une fiche produit fait environ 250 mots
(présentation, raisons, usage). On ajoute à chacune des 106 fiches un texte long, utile et écrit par nous, pour atteindre
**500 à 700 mots** au total sur la page (même démarche que Keur Cook, voir son `docs/FICHES.md`).

## Où écrire

Un fichier par rubrique dans `src/lib/fiches/` (la liste exacte des fiches est en tête de chaque fichier, `SLUGS`) :

| Fichier | Rubrique | Fiches |
| --- | --- | --- |
| `bine-bine.ts` | Bine-bine et baya | 19 |
| `coffrets-cadeaux.ts` | Coffrets, cadeaux et objets wax | 20 |
| `encensoirs.ts` | Encensoirs et brûle-parfums | 12 |
| `karite-soins.ts` | Karité, huiles et soins | 20 |
| `tenues-de-nuit.ts` | Tenues de nuit | 15 |
| `thiouraye-encens.ts` | Thiouraye, bakhour et encens | 20 |

- Un rédacteur ne modifie **que son fichier** : ni les pages, ni le test, ni le catalogue.
- Les données existantes de chaque produit sont dans `src/lib/catalogue/<rubrique>.ts` (présentation, raisons, usage,
  matières) et `src/lib/catalogue/asins.json` (titre de la fiche Amazon vérifiée, quand il y en a une). **Les lire avant
  d'écrire, pour ne rien répéter.**
- Une fiche pas encore écrite n'affiche rien de plus : on peut publier lot par lot.
- Les règles du site (`docs/REDACTION.md`) s'appliquent : ton élégant et chaleureux, vouvoiement, mots wolof expliqués,
  **aucun contenu sexuel** (on parle de séduction, d'ambiance, de tradition, de bien-être), **aucune allégation de santé**.

## Forme d'une fiche

```ts
"slug-du-produit": {
  origine: "…",     // Origine et tradition : ce qu'est le produit, d'où il vient, sa place dans la culture
  choisir: "…",     // Comment bien le choisir, en le comparant aux produits VOISINS de la boutique (liens /produit/…)
  entretien: "…",   // Entretien (objets, tissus) ou conservation (soins, encens)
  pourQui: "…",     // Pour qui, pour quelle occasion : à offrir, à garder, à quel moment
  faq: [            // 2 ou 3 questions qui finissent par « ? »
    { question: "…?", reponse: "…" },
  ],
},
```

- **Longueur** : chaque partie fait 40 mots au moins ; la fiche détaillée compte en général 300 à 450 mots, FAQ comprise.
  Le test exige **500 à 720 mots** pour le texte propre de la page entière (présentation + raisons + usage + fiche).
- **Texte simple** : paragraphes séparés par `\n\n`. **Pas de Markdown** (ni gras, ni titres, ni listes).
- Seule syntaxe admise : les liens internes `[texte](/produit/slug)`, `[texte](/conseils/slug)`, `[texte](/lexique)`,
  `[texte](/top-10/slug)`, `[texte](/<rubrique>)`. Le lien doit mener à une page **en ligne aujourd'hui** (le test refuse
  un article programmé ou un produit inexistant) et jamais à la fiche elle-même.
- Français soigné : phrases courtes, accents, guillemets « », apostrophes cohérentes.

## Règles

1. **Rien d'inventé.** Les produits du catalogue décrivent un *type* de produit (« bine-bine à rocaille rouge et or »),
   pas une référence précise : on écrit au niveau du type, de la matière, de l'usage. Aucune caractéristique supposée
   (dimensions, poids, composition, contenance, nombre de pièces, garantie, marque). Si le catalogue ne le dit pas, on ne
   l'écrit pas.
2. **Faits culturels et historiques** (origine d'un objet, d'une tradition, d'une matière) : uniquement ce qui est
   solidement établi ; dans le doute, formulation prudente (« selon les régions », « souvent ») ou on ne l'écrit pas.
   Jamais de citation longue, jamais de texte recopié.
3. **Jamais** de prix, de note, d'avis, d'ASIN, de lien Etsy ou Amazon dans le texte (les boutons de la fiche s'en chargent).
4. **Aucune allégation de santé** : les soins (karité, huiles) sont des produits de beauté et de confort. Interdits :
   « soigne », « guérit », « traite », « bienfaits », « vertus », « anti-âge », « minceur », « apaise », « purifie »,
   « détox », « thérapeutique »… On décrit la texture, l'odeur, l'usage cosmétique habituel, la conservation.
5. **Aucun contenu sexuel** : liste des mots bloquants dans `src/lib/mots-interdits.ts` (le test échoue et bloque la
   publication). Pour les bine-bine, les tenues de nuit et le djongue : tradition, parure, féminité, séduction, mariage,
   transmission, jamais de description du corps ni d'intimité.
6. **Comparer aux produits voisins** de la boutique, avec des liens `/produit/…` : c'est ce qui rend la fiche utile
   (différence de matière, d'usage, d'occasion). Les liens `/conseils/…` pertinents sont bienvenus.
7. Chaque fiche a **son propre contenu** : pas de phrases copiées d'une fiche à l'autre, pas de remplissage. Une fiche
   qui pourrait s'appliquer à n'importe quel produit est à réécrire.

## Contrôle

`npm test` (tests/fiches.test.ts : forme, longueur, liens, Markdown, prix, mots bloquants), puis `npm run lint`,
`npm run typecheck`, `npm run build` et `npm run test:sortie`.
