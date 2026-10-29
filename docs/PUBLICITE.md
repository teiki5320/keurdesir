# Publicité Google AdSense

Mis à jour le 29 octobre 2026. Modèle : Keurbook (docs/PUBLICITE.md).

- Éditeur AdSense : `pub-2680784147246798`, le même compte que les autres sites TOA KEUR (public par conception : il est dans `public/ads.txt` et dans le code des pages).
- Code AdSense et balise `google-adsense-account` : `src/app/layout.tsx`, identifiant dans `src/lib/config.ts` (`ADSENSE_CLIENT`).
  Vider `NEXT_PUBLIC_ADSENSE_CLIENT` retire tout script Google du site.
- `public/ads.txt` : ligne exacte donnée par AdSense.
- CSP (`public/_headers`) : seuls les domaines Google nécessaires aux annonces et au bandeau de consentement sont autorisés, plus Cloudflare Web Analytics.
- Bandeau de consentement : outil « Confidentialité et messages » d'AdSense (message « Réglementations européennes »),
  chargé par le code AdSense, sans code en plus. Lien « Gérer mes cookies » en pied de page (`CookieSettingsLink`).
- Annonces automatiques : non utilisées. Emplacements choisis (`AdSlot`) :

| Page | Annonces | Bloc AdSense | Emplacement |
|---|---|---|---|
| Fiche produit | 1 | « Keur Désir - Fiche produit » (`8833272514`) | fin de fiche, loin des boutons Amazon et Etsy |
| Page rubrique | 1 | « Keur Désir - Page rubrique » (`1678717553`) | après le guide de la rubrique |
| Article Conseils | 2 | « Keur Désir - Article conseil » (`9030593962`) | au milieu du texte, puis en fin de page |
| Accueil, Top 10, lexique, liste d'envies, à propos, pages légales, 404 | 0 | — | — |

- Les 3 blocs (format Display, taille responsive) ont été créés dans AdSense le 29 octobre 2026. Leurs identifiants sont
  dans `ADSENSE_SLOTS` (`src/lib/config.ts`), réglables aussi par `NEXT_PUBLIC_ADSENSE_SLOT_FICHE`, `_RUBRIQUE`, `_ARTICLE`.
  Sans identifiant, l'emplacement n'affiche rien.
- Habillage : classes `.ad-slot` et `.ad-slot-label` dans `src/app/globals.css`. Mention « Publicité » toujours visible ;
  l'emplacement se replie si Google n'a pas d'annonce.
- Validation du site : pas encore demandée au 29 octobre 2026. À demander quand les visuels produits et les premiers
  articles seront en ligne (Keurbook a été refusé le 21 octobre 2026 pour « contenu à faible valeur informative »).
  Tant que le site n'est pas validé, aucune annonce ne s'affiche.
