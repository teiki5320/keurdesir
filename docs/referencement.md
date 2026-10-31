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
