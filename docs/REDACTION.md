# Règles de rédaction — Keur Désir

## Règle absolue de contenu

Pour rester éligible à Amazon Partenaires et à AdSense :

1. **Aucun contenu sexuel** : pas de description d'actes, pas de conseils de performance, pas de nudité ni d'image suggestive.
2. **Aucun produit « pour adultes »** : ni sextoy, ni lubrifiant, ni produit de ce rayon.
3. On parle de **séduction, de sensualité, de bien-être, d'ambiance, de culture et de tradition**.
4. Aucune allégation de santé : les soins sont des produits de beauté et de confort (pas de « soigne », « guérit », « minceur »).
5. Contrôle automatique : `tests/mots-interdits.test.ts` (mots bloquants et mots à surveiller, liste dans `src/lib/mots-interdits.ts`), sur les sources et sur le site construit.

## Ton

- Élégant, chaleureux, fier de la culture, complice mais jamais vulgaire. Vouvoiement.
- Public : la diaspora africaine en France (surtout les femmes) et toute personne curieuse de ces traditions.
- Les mots wolof sont expliqués à leur première apparition (et dans `/lexique`).

## Exactitude

- Textes écrits par nous, jamais recopiés ni paraphrasés de près. Pas de citation longue (2 lignes au plus, avec la source).
- **Jamais inventés : ASIN, annonce Etsy, prix, note, avis.** `amazon` et `etsy` restent à `null` tant que la page marchande n'a pas été ouverte ; on les remplit avec la date de vérification.
- Traditions et histoire : vérifiées sur des sources sérieuses ; dans le doute, on ne l'écrit pas.

## Longueurs

| Contenu | Règle |
|---|---|
| Titre `<title>` | 60 caractères au plus (suffixe « \| Keur Désir » seulement s'il tient) |
| Description | 70 à 160 caractères |
| Fiche produit | présentation de 3 à 5 phrases ; 2 ou 3 raisons de moins de 140 caractères ; usage de 2 à 4 phrases |
| Top 10 | titre « Top 10 des … » ; intro de 2 ou 3 phrases (critère + n° 1) ; 3 ou 4 phrases par produit ; 3 questions |
| Article | titre en question ; 700 à 1 000 mots ; parties en `##` ; 3 à 8 produits du site cités |

## Rythme

Trois articles par semaine : **lundi, mercredi et vendredi**, publiés tout seuls à leur date (cron de `deploy.yml`).

## Images

- Illustrations d'ambiance créées par IA : perles posées sur un tissu, encens qui fume, pots de karité, pagnes pliés.
- **Jamais de corps, de peau dénudée ni de silhouette suggestive**, pas de visage reconnaissable, pas de texte dans l'image.
- Légende : « Illustration Keur Désir (créée par intelligence artificielle) ». Pas de photo de produit Amazon.
