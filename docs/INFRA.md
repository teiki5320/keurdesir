# INFRA — fiche technique

Mis à jour le 9 novembre 2026, d'après le code du dépôt. Aucun secret ici :
uniquement des noms de variables et de consoles.

## En bref

- **Plateforme** : site web éditorial, en français, sur ordinateur et mobile
- **Stack** : Next.js 16 en export statique, React 19, Tailwind CSS 4
- **Backend** : aucun — site statique, sans base ni compte
- **Distribution** : Cloudflare Pages, publié par GitHub Actions (branché le 29 octobre 2026)
- **Site** : https://keurdesir.com — en ligne depuis le 29 octobre 2026
- **IA et outils** : IndexNow (prêt), contrôle des mots interdits avant chaque publication

## Parcours

- 🌐 **Web** : 🐙 GitHub — dépôt public teiki5320/keurdesir, main [ok] → ⚙️ GitHub Actions — lint, types, tests, build, contrôle du site construit au vert, publication [ok] → ☁️ Cloudflare Pages — projet keurdesir [ok] → 🌍 keurdesir.com — relié le 29 octobre 2026 [ok] ; www redirigé vers keurdesir.com (301) [ok]
- 📝 **Contenu** : ✍️ Articles — 14 programmés (30 octobre au 30 novembre 2026 ; 9 ajoutés le 7 novembre 2026), 7 guides de rubrique, lexique de 18 mots [ok] → ⚙️ GitHub Actions — publiera lundi, mercredi, vendredi [ok] → 📡 IndexNow — clé prête [ok] → 🔍 Google et Bing — Search Console et Bing Webmaster Tools ouverts, sitemap envoyé le 29 octobre 2026 [ok]
- 🛒 **Affiliation** : 🛍️ Fiche produit — boutons « Voir sur Amazon » et « Voir sur Etsy » [ok] → 🛒 Amazon Partenaires — tag keurdesir-21 [ok] → 🧵 Etsy via Awin — identifiants Awin à régler [à faire] → 🔗 Produits — 106 au catalogue, 10 Top 10 ; 53 liens directs amazon.fr/dp au 9 novembre 2026 (ASIN relevés le 29 octobre 2026 dans `src/lib/catalogue/asins.json`), 53 liens de recherche [en cours]
- 📰 **Publicité** : 📰 AdSense — script en place (même compte que les autres sites), 3 blocs créés le 29 octobre 2026 [ok] → ✅ Validation du site [en cours : examen demandé le 29 octobre 2026, « En préparation » au 9 novembre 2026] → 💶 Revenus [pas encore]

## Vue d'ensemble

- **Plateforme** : site éditorial en français, guide du djongué (art sénégalais et ouest-africain de la séduction), avec des sélections de produits.
- **Stack** : Next.js 16 (export statique) + React 19 + Tailwind CSS 4, TypeScript, Marked pour les articles Markdown. Base technique reprise de Keurbook (structure et code seulement, aucun contenu).
- **Données** : rubriques dans `src/lib/rubriques.ts` (7), produits dans `src/lib/catalogue/produits.ts`, Top 10 dans `src/lib/top10/sujets.ts`, lexique dans `src/lib/lexique.ts`, articles dans `content/conseils/`.
- **Backend** : aucun. La liste d'envies reste dans le navigateur du visiteur. Seuls cookies : ceux de Google AdSense, après accord. Mesure d'audience sans cookie (Cloudflare Web Analytics), décrite dans la page Confidentialité depuis le 29 octobre 2026.
- **Taille** : 139 pages en ligne au 9 novembre 2026, dont 137 dans le sitemap (5 articles parus ; les 9 suivants paraissent du 11 au 30 novembre). Au 29 octobre 2026 : 135 pages construites, dont 131 dans le sitemap (accueil, boutique, 7 rubriques avec leur guide, 10 Top 10, 106 fiches produits, lexique de 18 mots, à propos, 3 pages légales) ; 5 articles programmés du 30 octobre au 9 novembre 2026. Le matin du 29 octobre, avant les contenus : 15 pages.
- **Particularités** : interrupteur de maintenance (`content/maintenance.json`, désactivé) ; test des mots interdits (`tests/mots-interdits.test.ts`) ; contrôle du site construit (`tests/sortie/`) ; listes vides en noindex et hors sitemap.

## GitHub

- **Rôle** : dépôt du code et des contenus, branche `main` seule, et trois workflows :
  - `deploy.yml` (« Publier le site ») : lint, types, tests, build, contrôle du site construit, puis publication sur Cloudflare Pages à chaque push sur `main`, chaque lundi, mercredi et vendredi à 23 h 15 UTC la veille (articles programmés) et à la main ; vérifie ensuite que `https://keurdesir.com/version.txt` sert la nouvelle version ;
  - `indexnow.yml` : signale le sitemap à IndexNow après chaque publication réussie et chaque lundi ;
  - `maintenance.yml` : met le site en pause ou le rouvre, puis republie.
- **Console** : https://github.com/teiki5320/keurdesir (dépôt public créé le 29 octobre 2026). Le 29 octobre 2026, les premières publications se sont arrêtées faute de secrets Cloudflare ; une fois les secrets réglés, le site a été publié le même jour.
- **Secrets** : `CLOUDFLARE_API_TOKEN` (jeton « GitHub keurdesir », Cloudflare Pages · Modifier) et `CLOUDFLARE_ACCOUNT_ID`, réglés dans les secrets Actions du dépôt le 29 octobre 2026.

## Hébergement web (Cloudflare Pages)

- **Fournisseur** : Cloudflare Pages, projet `keurdesir` (créé le 29 octobre 2026), publié par `wrangler` depuis `deploy.yml`.
- **En-têtes** : `public/_headers` (politique de sécurité limitée au site et à Google AdSense, HSTS, noindex sur `*.pages.dev` et sur les `.txt` internes).
- **Redirections** : `public/_redirects`.

## Nom de domaine

- **keurdesir.com**, géré sur le Cloudflare de Jean. Relié au projet Pages le 29 octobre 2026 : `keurdesir.com` et `www.keurdesir.com` en domaines personnalisés (CNAME vers `keurdesir.pages.dev`). Règles Cloudflare du 29 octobre 2026 : redirection 301 de www vers keurdesir.com ; pages HTML gardées 10 min en cache (« Pages HTML en cache 10 min »). Cache du navigateur : « Respecter les en-têtes existants » (réglé le 29 octobre 2026 ; avant, 4 h par défaut), donc les pages suivent `public/_headers` et les navigateurs revérifient à chaque visite.

## Amazon Partenaires

- **Tag** : `keurdesir-21` (depuis le 29 octobre 2026), table unique `AMAZON_TAGS` dans `src/lib/liens.ts`.
- **Liens actifs en ligne** (vérifié le 1er novembre 2026) : 20 liens `tag=keurdesir-21` sur https://keurdesir.com/top-10/bine-bine-debuter et 2 sur la fiche https://keurdesir.com/produit/bine-bine-rocaille-rouge-or. L'accueil, la liste /top-10 et la page /boutique n'ont pas de bouton d'achat : c'est normal, ce sont des pages de liste.
- Liens directs `amazon.fr/dp/<ASIN>` : 53 produits sur 106 au 9 novembre 2026 (54 le 29 octobre : 49 au premier relevé, 5 au second ; l'encensoir en terre cuite « andé » (B004J30RGG), sans bouton d'achat le 9 novembre et sans équivalent en terre cuite noté 4 étoiles avec 50 avis, est repassé en recherche Amazon). 52 ASIN différents : la pochette à bine-bine et la trousse de toilette en wax renvoient volontairement à la même trousse, ASIN relevés sur les pages de recherche d'amazon.fr (fichier `src/lib/catalogue/asins.json`, modèle Keur Kado). Les autres (thiouraye, béthio, pièces en wax précises…) gardent une recherche Amazon avec le tag. Contrôle du bouton d'achat : `npm run verifier-produits` (sur le Mac) ; depuis le 29 octobre 2026, Keur Désir est aussi dans la routine du matin « Sites du jour » (partie Amazon, signalement seulement : produits indisponibles déposés dans « À faire » du Studio).

## Etsy (Awin)

- Programme Etsy FR sur Awin : identifiants `NEXT_PUBLIC_AWIN_AFFID` et `NEXT_PUBLIC_AWIN_ETSY_MID` (à régler). Sans eux, aucun bouton Etsy n'est affiché.
- Liens profonds `awin1.com/cread.php?awinmid=…&awinaffid=…&ued=<annonce Etsy>`.

## AdSense

- Script et meta `google-adsense-account` dans `src/app/layout.tsx` (compte `ca-pub-2680784147246798`, comme les autres sites TOA KEUR), `public/ads.txt` publié.
- Blocs `fiche` (« Keur Désir - Fiche produit », `8833272514`), `rubrique` (« Keur Désir - Page rubrique », `1678717553`) et `article` (« Keur Désir - Article conseil », `9030593962`), créés le 29 octobre 2026, dans `ADSENSE_SLOTS` (`src/lib/config.ts`, réglables par `NEXT_PUBLIC_ADSENSE_SLOT_*`). Validation du site : examen demandé le 29 octobre 2026 à la demande de Jean (site ajouté dans AdSense et propriété validée le même jour), toujours « En préparation » au 9 novembre 2026 ; aucune annonce ne s'affiche tant qu'elle n'est pas acceptée. Détail : docs/PUBLICITE.md.

## Analytics (mesure d'audience)

- **Service** : Cloudflare Web Analytics, activé sur le projet Cloudflare Pages `keurdesir` le 29 octobre 2026. Cloudflare ajoute lui-même son script (https://static.cloudflareinsights.com/beacon.min.js) aux pages servies : il n'est pas dans le code du dépôt, mais il est bien présent sur https://keurdesir.com et se charge (vérifié le 2 novembre 2026).
- **Autorisation** : `public/_headers` permet le script de statistiques (adresse exacte : https://static.cloudflareinsights.com/beacon.min.js ; le domaine seul ne sert pas de page) et l'envoi des mesures vers `https://cloudflareinsights.com`.
- **Vie privée** : mesure sans cookie, décrite dans la page Confidentialité depuis le 29 octobre 2026.
- **Console** : tableau de bord Cloudflare de Jean, rubrique Web Analytics. Chiffres de visite : à vérifier dans la console.
- **Umami (essai depuis le 5 novembre 2026)** : Umami Cloud, offre gratuite (1 site, 100 000 événements par mois, pas d'accès API), région UE, sans cookie, en plus de Cloudflare. Un seul « site » Umami partagé par tous les sites Keur : filtrer par nom de domaine (hostname) dans la console. Balise dans `src/app/layout.tsx` (identifiant public `UMAMI_WEBSITE_ID` dans `src/lib/config.ts`, limitée à `keurdesir.com`) ; `public/_headers` autorise `cloud.umami.is` (script) et `gateway.umami.is` (envoi). Clic compté : « Clic Amazon » (avec le nom du produit ; pas de menu des sites Keur sur Keur Désir). Console : https://cloud.umami.is.

## Référencement

Services réellement utilisés (outils gratuits des moteurs de recherche, pas de compte payant) : Google Search Console, Bing Webmaster Tools, IndexNow, plus le sitemap et le JSON-LD du site.

- Sitemap `/sitemap.xml` avec dates réelles (`src/lib/lastmod.json`), `robots.txt`, JSON-LD (WebSite, Organization, BreadcrumbList, Article, ItemList, DefinedTermSet).
- IndexNow : clé `d594b7cccbd54ab33111237c115501e5` publiée à la racine (`public/d594b7cccbd54ab33111237c115501e5.txt`, en ligne) ; `scripts/indexnow.mjs` signale les pages du sitemap à api.indexnow.org.
- Search Console : propriété Domaine keurdesir.com (compte Google de Jean), validée par un enregistrement TXT `google-site-verification` dans le DNS Cloudflare ; sitemap envoyé le 29 octobre 2026.
- Bing Webmaster Tools : site https://keurdesir.com/ (compte Microsoft de Jean), validé par le fichier `public/BingSiteAuth.xml` ; sitemap envoyé le 29 octobre 2026.
- Mesure d'audience : voir la section « Analytics (mesure d'audience) » ci-dessus.
- Pinterest : épingles verticales 1000 × 1500 prévues (modèle Keur Déco), pas encore construites.
