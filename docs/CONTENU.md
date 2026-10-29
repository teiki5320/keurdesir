# Contenu des pages — Keur Désir

Plan validé le 29 octobre 2026 : docs/PLAN.md.

| Page | Fichier | Contenu |
|---|---|---|
| Accueil `/` | `src/app/(site)/page.tsx` | h1, accroche, 7 rubriques, « Nos coups de cœur » (n° 1 des Top 10, liens internes, aucun lien marchand), Top 10, 3 derniers articles. Pas de publicité. |
| Rubrique `/<slug>` | `src/app/(site)/[rubrique]/page.tsx` | chapô (`src/lib/rubriques.ts`), articles, Top 10 et produits de la rubrique, 1 publicité, autres rubriques. |
| Articles `/conseils` | `src/app/(site)/conseils/page.tsx` | articles par rubrique (noindex tant qu'aucun n'est paru). |
| Article `/conseils/<slug>` | `content/conseils/<slug>.md` | question, « En bref », produits de l'article (3 au plus, boutons), sommaire, 2 publicités, produits cités, « À lire aussi ». |
| Top 10 `/top-10`, `/top-10/<slug>` | `src/lib/top10/sujets.ts` | 10 produits, « Par où commencer », 3 questions, « Voir aussi ». Pas de publicité. |
| Fiche `/produit/<slug>` | `src/lib/catalogue/produits.ts` | visuel, présentation, boutons Amazon et/ou Etsy, « Pourquoi on l'aime », « Comment l'utiliser », matières, articles, produits proches, 1 publicité. |
| Lexique `/lexique` | `src/lib/lexique.ts` | mots wolof du djongué (noindex tant qu'il est vide). |
| À propos `/a-propos` | `src/app/(site)/a-propos/page.tsx` | projet, charte éditoriale, choix des produits, contact. |
| Mes envies `/mes-envies` | `src/components/envies/` | liste gardée dans le navigateur, partage par lien et WhatsApp (noindex). |
| Pages légales | `src/app/(legal)/` | mentions légales, confidentialité, conditions ; mentions Amazon et Etsy (Awin). |

## Format d'un article (`content/conseils/<slug>.md`)

```
---
title: Qu'est-ce que le djongué, l'art sénégalais de la séduction ?
description: 70 à 160 caractères.
date: 2026-11-02
rubrique: djongue
resume: Réponse courte en 2 ou 3 phrases.
produits: slug-1, slug-2
---
## Première partie
…
```

Image facultative : `public/conseils/<slug>.webp` (1200 × 800).
