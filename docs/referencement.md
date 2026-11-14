# Journal du référencement

Modèle : Keurbook (docs/referencement.md). Une page travaillée n'est pas retouchée avant 28 jours : Google a besoin de ce
temps pour réagir. Keur Désir est dans la routine « Référencement du jour » depuis le 29 octobre 2026 : le samedi des semaines paires (en alternance avec Keur Foot).

## 29/10/2026 — mise en ligne

### Socle

- Site en ligne sur https://keurdesir.com ; www.keurdesir.com relié au projet Pages.
- Plan du site : `https://keurdesir.com/sitemap.xml`, 130 adresses, dates réelles (`src/lib/lastmod.json`) ; `robots.txt` l'annonce.
- Google Search Console : propriété Domaine keurdesir.com, validée par un enregistrement TXT `google-site-verification`
  dans le DNS Cloudflare ; plan du site envoyé. État affiché le jour même : « Impossible de récupérer le sitemap »
  (normal pour une propriété neuve : le fichier répond bien, code 200, `application/xml`). À relire sous quelques jours.
- Bing Webmaster Tools : site https://keurdesir.com/ validé par `public/BingSiteAuth.xml` ; plan du site envoyé (« Traitement »).
- IndexNow : clé publique `/d594b7cccbd54ab33111237c115501e5.txt`, signalement après chaque publication réussie (`indexnow.yml`).
- Fiches enrichies (JSON-LD) : WebSite, Organization, BreadcrumbList, Article, ItemList, DefinedTermSet (lexique).
- Google Discover : `max-image-preview:large` sur toutes les pages ; image de partage `public/brand/keurdesir-partage.jpg`.
- Visuels : les 106 produits et les 5 articles ont leur image depuis le 29 octobre 2026 (OpenArt ; 3 essais d'abord, puis tous les autres le même jour).

### Reste à faire

- Relire l'état du plan du site dans Search Console et Bing.
- Une fois le site connu de Google : suivre les pages indexées, comme pour Keurbook.

## 31/10/2026 — premier passage de la routine (samedi, semaine 44)

### Gains rapides et page nouvelle

- Aucune donnée encore : le Studio ne renvoie ni page en 2e page de Google ni recherche pour keurdesir.com
  (période du 1er au 29 octobre, site en ligne depuis le 29). Rien à améliorer ni à créer ; à reprendre au prochain passage
  (samedi 14 novembre).
- Page « Nos articles » (/conseils) : signalée « bloquée par noindex » par Search Console ; c'était voulu tant qu'aucun
  article n'était paru. Depuis le premier article (30 octobre), elle est ouverte à Google et dans le plan du site (vérifié en ligne).

### Fiches enrichies vérifiées le 31/10/2026

- Accueil : WebSite + Organization ; articles : Article (titre, description, image 1200 px, dates, auteur, éditeur) + BreadcrumbList ;
  Top 10 : ItemList + BreadcrumbList ; rubriques et fiches produit : BreadcrumbList. JSON valide sur les pages construites
  (accueil, un article, un Top 10, une rubrique, une fiche produit). Pas de FAQ visible, donc pas de FAQPage. Rien à corriger.

### Socle vérifié le 31/10/2026

- IndexNow : clé publique `/d594b7cccbd54ab33111237c115501e5.txt` servie, script `scripts/indexnow.mjs` et signalement après publication. OK.
- Google Discover : `max-image-preview:large` sur toutes les pages vérifiées ; image de partage 1200 px (accueil, rubriques, Top 10),
  image de l'article (1200 × 800) sur les articles, photo produit (1000 × 1000, la plus grande disponible) sur les fiches. OK.
- Vitesse sur téléphone : PageSpeed Insights hors service (quota du jour atteint) pour l'accueil, une fiche produit et un article :
  à refaire au prochain passage. Contrôle local : images avec taille et chargement différé sous la ligne de flottaison,
  images produit de 200 Ko au plus, aucune police externe bloquante.

## 14/11/2026 — deuxième passage (samedi, semaine 46)

### Gains rapides (données Search Console du 15/10 au 12/11/2026)

- **/boutique** — recherche visée « l'univers des djongue » (et « l univers des djongue », « lunivers des djongue ») :
  place 6,8, 21 vues, 0 clic. Titre « La boutique du djongué » → « L'univers du djongué : toute la boutique » ;
  h1 « La boutique » → « La boutique : tout l'univers du djongué » ; description réécrite autour de « tout l'univers du djongué ».
  Liens internes « l'univers du djongué » → /boutique ajoutés depuis 3 articles : Qu'est-ce que le djongué, Vivre le djongué en France,
  Qui transmet le djongué.
- **/conseils/qu-est-ce-que-le-djongue** — recherches visées « jongue », « jongué en français », « djongué » : place 4,7, 9 vues.
  Titre « Qu'est-ce que le djongué, l'art sénégalais de la séduction ? » → « Qu'est-ce que le djongué (ou jongué), l'art de séduire ? »
  (titre et h1) ; description avec « jongué » et « son sens en français » ; une phrase ajoutée : en français, on le traduit le plus
  souvent par « l'art de la séduction » ou « l'art de plaire » (sens déjà donné dans l'article). Liens « Qu'est-ce que le djongué
  (ou jongué) » depuis Vivre le djongué en France et Qui transmet le djongué.
- **/tenues-de-nuit** — recherches visées « pagne de nuit », « petit pagne de nuit » : place 7, 3 vues. Titre et h1 inchangés
  (« Petits pagnes et tenues de nuit », déjà juste) ; description « Petits pagnes, nuisettes et tenues de nuit… » → « Petit pagne
  de nuit, nuisette ou tenue de nuit… » ; liens « petits pagnes de nuit et tenues de nuit » depuis Vivre le djongué en France et
  Djongué et traditions du mariage.
- **/djongue** (« l'univers des djongue », place 7, 3 vues) : laissée telle quelle pour ne pas faire concurrence à /boutique sur la même recherche.

### Page nouvelle

- Aucune créée. Seule recherche à 15 vues ou plus sans page bien placée : « bine bine » (24 vues), mais le site a déjà la rubrique
  /bine-bine (place 45), la fiche bine-bine perles dorées (place 33) et l'article sur l'origine des bine-bine (place 37) ; une page de
  plus ferait double emploi. Proposé à Jean : retravailler la rubrique /bine-bine au prochain passage (le 28/11), ou écrire un guide
  « Bine-bine : tout savoir » qui rassemble l'existant.
  **Décision de Jean (14/11/2026) : retravailler la rubrique /bine-bine au passage du 28/11** pour mieux sortir sur « bine bine »,
  uniquement avec ce que le site contient déjà, sans inventer d'information (pas de guide « tout savoir »).
- « top 10 des huiles pour le corps » (15 vues, place 22,7) : la page /top-10/huiles-pour-le-corps répond déjà exactement ; à suivre.

### Fiches enrichies et socle

- Fiches enrichies et socle (IndexNow, Discover) vérifiés le 31/10/2026 : moins de 28 jours, non refaits.
- Vitesse sur téléphone : PageSpeed Insights de nouveau hors service (quota du jour atteint) pour l'accueil, la fiche bine-bine perles
  dorées et l'article Qu'est-ce que le djongué. À refaire au prochain passage.

### Pages travaillées il y a 28 jours ou plus

- Aucune (premier travail de pages ce jour). À relire à partir du 12/12/2026.
