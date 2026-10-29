@AGENTS.md

- Site en français : textes UI, commentaires et messages en français. Vouvoiement.
- Réponses à Jean : en français, numérotées, choix numérotés, 3 questions au plus à la fois.
- Git : uniquement la branche `main`, aucune autre branche, aucune pull request.
- Contenus : respecter docs/REDACTION.md (textes écrits par nous ; jamais d'ASIN, de prix, d'avis ni de lien Etsy inventés ; pas de citation longue). Ce que contient chaque page : docs/CONTENU.md. Plan validé du site : docs/PLAN.md.
- **Règle absolue** : aucun contenu sexuel, aucun produit « pour adultes » (sextoy, lubrifiant…), aucune image de corps dénudé. Le test `tests/mots-interdits.test.ts` bloque la publication si un mot interdit apparaît (liste dans `src/lib/mots-interdits.ts`).
- Aucun contenu éditorial de Keurbook : seuls sa structure et son code servent de modèle.
- Données : passer par src/lib/data/* (produits dans src/lib/catalogue, Top 10 dans src/lib/top10, rubriques dans src/lib/rubriques.ts, articles dans content/conseils ; site statique, sans base).
- Vérifications : `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, puis `npm run test:sortie` (contrôle du site construit dans `out/` : un seul h1, description, canonique, JSON-LD lisible, titres de 60 caractères au plus, srcset, liens partenaires, AdSense, en-têtes, mots interdits). La publication lance les mêmes contrôles avant la mise en ligne.
- Dates du plan du site : `npm run build` met d'abord à jour `src/lib/lastmod.json` (« prebuild » → `scripts/lastmod.mjs`). Après un changement de produit, d'article ou de Top 10, mets `src/lib/lastmod.json` dans le même commit s'il a changé.

## Fiches à jour à chaque changement (règle de Jean)

Le Studio de Jean affiche les fiches de ce dépôt (docs/INFRA.md, docs/MARKETING.md, docs/PUBLICATION.md) et le README. Elles doivent toujours dire la vérité d'aujourd'hui.

- Dès qu'un travail change un fait affiché par ces fiches — site en ligne ou non, date de mise en ligne, hébergement ou domaine, service ajouté ou retiré, code Amazon Partenaires, état Awin/Etsy, AdSense ou Pinterest, monétisation, nombre de contenus publiés —, mets à jour **dans le même envoi** toutes les phrases concernées des trois fiches et du README.
- Une ancienne valeur ne reste qu'au passé, datée.
- Ne recopie jamais de secret ni de clé dans ces fichiers.
