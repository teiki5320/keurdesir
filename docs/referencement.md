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
