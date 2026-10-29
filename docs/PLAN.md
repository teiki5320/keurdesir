# Keur Désir — plan du site (validé par Jean le 29 octobre 2026)

Base technique reprise de Keurbook : Next.js 16 en export statique (`out/`), Tailwind 4, déploiement Cloudflare Pages par GitHub Actions + wrangler, contrôles lint → typecheck → tests → build → contrôle du site construit. Aucun contenu éditorial de Keurbook n'est repris.

## 1. Arborescence des pages

| N° | Adresse | Page | Indexée |
|---|---|---|---|
| 1 | `/` | Accueil | oui |
| 2 | `/djongue` | Rubrique phare : histoire, traditions, ambiance | oui |
| 3 | `/bine-bine` | Bine-bine et baya (perles de taille) | oui |
| 4 | `/thiouraye-encens` | Thiouraye, gowé, bakhour | oui |
| 5 | `/encensoirs` | Encensoirs et brûle-parfums | oui |
| 6 | `/karite-soins` | Karité, huiles et soins du corps | oui |
| 7 | `/tenues-de-nuit` | Petits pagnes, nuisettes, tenues de nuit (wax, broderies) | oui |
| 8 | `/coffrets-cadeaux` | Coffrets et idées cadeaux (mariage, Saint-Valentin, Tabaski, anniversaire) | oui |
| 9 | `/conseils` et `/conseils/[slug]` | Tous les articles, classés par rubrique | oui |
| 10 | `/top-10` et `/top-10/[slug]` | Les sélections « Top 10 » | oui |
| 11 | `/produit/[slug]` | Fiche produit (texte écrit par nous + liens Amazon et/ou Etsy) | oui |
| 12 | `/lexique` | Petit lexique wolof du djongué (bine-bine, thiouraye, gowé, bakhour, badiène…) | oui |
| 13 | `/a-propos` | Qui nous sommes + charte éditoriale (« ni contenu adulte, ni produit pour adultes ») | oui |
| 14 | `/mes-envies` | Liste d'envies (stockée dans le navigateur, partage par lien et WhatsApp) | non |
| 15 | `/mentions-legales`, `/confidentialite`, `/conditions` | Pages légales | oui |
| 16 | `sitemap.xml`, `robots.txt`, 404 | Technique | — |

Pas de rubrique « Actus » ni de veille d'actualités (la veille de Keurbook est propre aux livres) : écartée par Jean le 29/10/2026, ne pas la reproposer.

## 2. Modèles de pages

1. **Accueil** : un h1 et une accroche ; les 7 rubriques en cartes ; « Nos coups de cœur » (liens internes, aucun lien marchand) ; les Top 10 en pastilles ; les 3 derniers articles. Pas de publicité.
2. **Page rubrique** : intro rédigée (300 à 500 mots, guide de choix) ; sélection de produits de la rubrique ; Top 10 liés ; articles de la rubrique ; 1 emplacement AdSense.
3. **Article (conseil)** : même mécanique que Keurbook (Markdown, en-tête maison, publication programmée à l'heure de Paris) : titre en question, « En bref », sommaire, image d'ambiance, encart « Les produits de cet article », 2 emplacements AdSense, « À lire aussi ».
4. **Top 10** : intro (critère + n° 1), 10 produits avec 3 ou 4 phrases chacun, boutons Amazon/Etsy, « Par où commencer », 3 questions fréquentes, image de partage, épingles Pinterest. Pas de publicité.
5. **Fiche produit** : nom, type, matières, couleurs, « Pourquoi on l'aime » (2 ou 3 phrases), « Comment l'utiliser / le porter », boutons « Voir sur Amazon » et/ou « Voir sur Etsy », bouton « Ajouter à mes envies », produits proches, 1 emplacement AdSense. Aucun prix, aucune note, aucun avis.
6. **Liste d'envies** : produits gardés, partage par lien (`?l=…`), WhatsApp et copie du lien — pensée pour « faire passer une liste de cadeaux ».
7. **Lexique** : définitions courtes écrites par nous, chaque mot renvoie vers sa rubrique.
8. **Pages légales** : comme Keurbook, avec deux mentions : Partenaires Amazon et liens affiliés Etsy (via Awin).

Pied de page : navigation, « Ma liste d'envies », pages légales, « Gérer mes cookies », mentions Amazon et Etsy, « Un site TOA KEUR ».

## 3. Liens marchands (Amazon + Etsy)

Chaque produit peut avoir une source, l'autre ou les deux :

```
sources: {
  amazon?: { asin, verifie_le }          // amazon.fr/dp/<ASIN>?tag=<identifiant Keur Désir>
  etsy?:   { url, boutique, verifie_le } // lien profond Awin vers l'annonce Etsy
}
```

- Sans ASIN vérifié : lien de recherche Amazon (avec le tag), comme Keurbook. Sans annonce Etsy vérifiée : lien de recherche Etsy via Awin.
- Tous les liens : `rel="sponsored nofollow noopener"`, `target="_blank"`, testés dans le contrôle du site construit.
- Rien n'est inventé : ASIN et annonces Etsy ajoutés seulement après ouverture de la page.

## 4. Visuels et Pinterest

- Pas de photo de produit Amazon. Illustrations d'ambiance générées par IA : perles posées sur un tissu, encens qui fume, pots de karité, pagnes pliés, couleurs et matières. **Jamais de corps, de peau dénudée ni de silhouette suggestive**, pas de visage reconnaissable.
- Épingles verticales 1000 × 1500 px générées au build (sharp), comme Keur Déco, adaptées à Next.js ; image de partage 1200 × 630 par Top 10.

## 5. Règle de contenu : test des mots interdits

Test `tests/mots-interdits.test.ts` sur les articles, les produits, les Top 10, les rubriques et le lexique (recherche sans accents ni majuscules, mot entier) :

1. **Bloquants** (le test échoue) : sexe, sexuel(le)(s), sextoy, godemiché, vibromasseur, lubrifiant, préservatif, orgasme, érotique, érotisme, porno, pornographique, nudité, dénudé(e)(s), seins nus, fesses, libido, aphrodisiaque, viagra, fellation, pénétration, masturbation, kamasutra, strip-tease, BDSM, fétichisme, coquin(e)(s), « pour adultes », « performance sexuelle », lingerie sexy.
2. **À surveiller** (avertissement, pas d'échec) : intime, intimité, nuit de noces, excitant(e), torride, désir charnel, « soigne », « guérit », « miracle » (allégations de santé, surtout pour le karité et les huiles).

Le test vérifie aussi que les produits ne sont que des 7 rubriques autorisées.

## 6. Les 10 premiers « Top 10 »

| N° | Titre | Rubrique | Source surtout |
|---|---|---|---|
| 1 | Top 10 des bine-bine pour débuter | bine-bine | Amazon |
| 2 | Top 10 des baya faites main | bine-bine | Etsy |
| 3 | Top 10 des thiouraye artisanaux | thiouraye-encens | Etsy |
| 4 | Top 10 des bakhour pour parfumer la maison | thiouraye-encens | Amazon |
| 5 | Top 10 des encensoirs et brûle-parfums | encensoirs | Amazon |
| 6 | Top 10 des beurres de karité non raffinés | karite-soins | Amazon |
| 7 | Top 10 des huiles pour le corps | karite-soins | Amazon |
| 8 | Top 10 des petits pagnes et nuisettes en wax | tenues-de-nuit | Etsy |
| 9 | Top 10 des cadeaux pour une future mariée | coffrets-cadeaux | les deux |
| 10 | Top 10 des cadeaux de Saint-Valentin africains | coffrets-cadeaux | les deux |

## 7. Les 5 premiers articles du djongué

1. Qu'est-ce que le djongué, l'art sénégalais de la séduction ?
2. D'où viennent les bine-bine et que symbolisent-ils ?
3. Qui transmet le djongué ? Le rôle des badiènes et des tantes
4. Quelles traditions de djongué entourent le mariage ?
5. Comment vivre le djongué quand on vit en France ?

## 8. Rythme et contrôles

- Articles : 3 par semaine (lundi, mercredi, vendredi), publiés par le cron, comme Keurbook.
- Contrôles repris de Keurbook : un seul h1, `<title>` de 60 caractères au plus, description, canonique `https://keurdesir.com…`, JSON-LD valide, srcset existants, liens marchands conformes, `ads.txt`, IndexNow, `_headers` ; plus le test des mots interdits.
- Fiches Studio : README, docs/INFRA.md, docs/MARKETING.md, docs/PUBLICATION.md, tenues à jour à chaque changement.
