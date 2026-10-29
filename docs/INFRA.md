# INFRA — fiche technique

Mis à jour le 29 octobre 2026, d'après le code du dépôt. Aucun secret ici :
uniquement des noms de variables et de consoles.

## En bref

- **Plateforme** : site web éditorial, en français, sur ordinateur et mobile
- **Stack** : Next.js 16 en export statique, React 19, Tailwind CSS 4
- **Backend** : aucun — site statique, sans base ni compte
- **Distribution** : Cloudflare Pages, publié par GitHub Actions (pas encore branché)
- **Site** : keurdesir.com — pas encore en ligne
- **IA et outils** : IndexNow (prêt), contrôle des mots interdits avant chaque publication

## Parcours

- 🌐 **Web** : 🐙 GitHub — dépôt teiki5320/keurdesir [à faire] → ⚙️ GitHub Actions — lint, types, tests, build, contrôle du site construit [ok] → ☁️ Cloudflare Pages — projet keurdesir [à faire] → 🌍 keurdesir.com — domaine sur Cloudflare, pas encore relié [à faire]
- 📝 **Contenu** : ✍️ Articles — 0 publié [pas encore] → ⚙️ GitHub Actions — publiera lundi, mercredi, vendredi [ok] → 📡 IndexNow — clé prête [ok] → 🔍 Google — Search Console à ouvrir [pas encore]
- 🛒 **Affiliation** : 🛍️ Fiche produit — boutons « Voir sur Amazon » et « Voir sur Etsy » [ok] → 🛒 Amazon Partenaires — tag keurdesir-21 [ok] → 🧵 Etsy via Awin — identifiants Awin à régler [à faire] → 🔗 Produits — 0 au catalogue [pas encore]
- 📰 **Publicité** : 📰 AdSense — script en place (même compte que les autres sites), 3 blocs à créer [à faire] → ✅ Validation du site [pas encore] → 💶 Revenus [pas encore]

## Vue d'ensemble

- **Plateforme** : site éditorial en français, guide du djongué (art sénégalais et ouest-africain de la séduction), avec des sélections de produits.
- **Stack** : Next.js 16 (export statique) + React 19 + Tailwind CSS 4, TypeScript, Marked pour les articles Markdown. Base technique reprise de Keurbook (structure et code seulement, aucun contenu).
- **Données** : rubriques dans `src/lib/rubriques.ts` (7), produits dans `src/lib/catalogue/produits.ts`, Top 10 dans `src/lib/top10/sujets.ts`, lexique dans `src/lib/lexique.ts`, articles dans `content/conseils/`.
- **Backend** : aucun. La liste d'envies reste dans le navigateur du visiteur. Seuls cookies : ceux de Google AdSense, après accord.
- **Taille** : 15 pages construites au 29 octobre 2026 (accueil, 7 rubriques, Top 10, articles, lexique, à propos, mes envies, 3 pages légales) ; aucun produit, article ni Top 10 encore.
- **Particularités** : interrupteur de maintenance (`content/maintenance.json`, désactivé) ; test des mots interdits (`tests/mots-interdits.test.ts`) ; contrôle du site construit (`tests/sortie/`) ; listes vides en noindex et hors sitemap.

## GitHub

- **Rôle** : dépôt du code et des contenus, branche `main` seule, et trois workflows :
  - `deploy.yml` (« Publier le site ») : lint, types, tests, build, contrôle du site construit, puis publication sur Cloudflare Pages à chaque push sur `main`, chaque lundi, mercredi et vendredi à 23 h 15 UTC la veille (articles programmés) et à la main ; vérifie ensuite que `https://keurdesir.com/version.txt` sert la nouvelle version ;
  - `indexnow.yml` : signale le sitemap à IndexNow après chaque publication réussie et chaque lundi ;
  - `maintenance.yml` : met le site en pause ou le rouvre, puis republie.
- **Console** : https://github.com/teiki5320/keurdesir (dépôt pas encore créé au 29 octobre 2026)
- **Secrets** : `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID`, à régler dans les secrets Actions du dépôt.

## Hébergement web (Cloudflare Pages)

- **Fournisseur** : Cloudflare Pages, projet `keurdesir` (à créer), publié par `wrangler` depuis `deploy.yml`.
- **En-têtes** : `public/_headers` (politique de sécurité limitée au site et à Google AdSense, HSTS, noindex sur `*.pages.dev` et sur les `.txt` internes).
- **Redirections** : `public/_redirects`.

## Nom de domaine

- **keurdesir.com**, géré sur le Cloudflare de Jean. À relier au projet Pages (domaine personnalisé + www redirigé).

## Amazon Partenaires

- **Tag** : `keurdesir-21` (depuis le 29 octobre 2026), table unique `AMAZON_TAGS` dans `src/lib/liens.ts`.
- Liens directs `amazon.fr/dp/<ASIN>` seulement après vérification de la page ; sinon recherche Amazon avec le tag.

## Etsy (Awin)

- Programme Etsy FR sur Awin : identifiants `NEXT_PUBLIC_AWIN_AFFID` et `NEXT_PUBLIC_AWIN_ETSY_MID` (à régler). Sans eux, aucun bouton Etsy n'est affiché.
- Liens profonds `awin1.com/cread.php?awinmid=…&awinaffid=…&ued=<annonce Etsy>`.

## AdSense

- Script et meta `google-adsense-account` dans `src/app/layout.tsx` (compte `ca-pub-2680784147246798`, comme les autres sites TOA KEUR), `public/ads.txt` publié.
- Blocs `fiche`, `rubrique`, `article` : identifiants à créer (variables `NEXT_PUBLIC_ADSENSE_SLOT_*`) ; un bloc sans identifiant n'affiche rien.

## Référencement

- Sitemap `/sitemap.xml` avec dates réelles (`src/lib/lastmod.json`), `robots.txt`, JSON-LD (WebSite, Organization, BreadcrumbList, Article, ItemList, DefinedTermSet).
- IndexNow : clé `d594b7cccbd54ab33111237c115501e5` publiée à la racine.
- Pinterest : épingles verticales 1000 × 1500 prévues (modèle Keur Déco), pas encore construites.
