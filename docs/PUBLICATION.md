# PUBLICATION — état de la mise en ligne

> Mis à jour le 29 octobre 2026, d'après le dépôt local.
>
> Aucun secret ici — uniquement des références.

## En bref

- **Production** : en ligne sur https://keurdesir.com depuis le 29 octobre 2026
- **Domaine & SSL** : keurdesir.com relié au projet Pages le 29 octobre 2026, certificat Cloudflare ; www.keurdesir.com relié, en cours d'activation
- **Visibilité** : site en ligne, Search Console et Pinterest pas encore ouverts
- **Contact** : keurdesir@toakeur.com

## Boutiques

| | 🌐 Site |
|---|---|
| État | [ok] En ligne depuis le 29 octobre 2026 |
| Hébergement | [ok] Cloudflare Pages, projet keurdesir, publié par GitHub Actions |
| Domaine | [ok] keurdesir.com relié ; www.keurdesir.com relié, en cours d'activation |
| SSL | [ok] Certificat Cloudflare |
| Indexation | [pas encore] Search Console à ouvrir |
| Mesure d'audience | [pas encore] Cloudflare Web Analytics à activer |

## Ce qui reste, dans l'ordre

1. ✅ **Plan du site** : validé par Jean le 29 octobre 2026 (docs/PLAN.md).
2. ✅ **Base technique** : pages, liens Amazon (keurdesir-21) et Etsy (Awin), contrôles qualité et test des mots interdits, le 29 octobre 2026.
3. ✅ **Dépôt GitHub** : teiki5320/keurdesir, public, créé le 29 octobre 2026 ; `main` poussé. La première publication automatique a passé tous les contrôles et s'est arrêtée faute de secrets Cloudflare.
4. ✅ **Cloudflare** : projet Pages `keurdesir` créé, secrets `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` réglés, keurdesir.com et www.keurdesir.com reliés, le 29 octobre 2026. Site en ligne le même jour.
5. ✅ **Contenus de lancement** (29 octobre 2026) : 106 produits, 10 Top 10, 7 guides de rubrique, lexique de 18 mots et 5 articles du djongué programmés du 30 octobre au 9 novembre.
6. **Produits Amazon** : 49 liens directs le 29 octobre 2026 (ASIN relevés sur amazon.fr), 57 liens de recherche ; reste à contrôler le bouton d'achat (`npm run verifier-produits`) et à compléter les autres.
7. **Illustrations** : visuels d'ambiance des produits et des articles (matières, couleurs, objets ; jamais de corps).
8. **Awin** : régler les identifiants du programme Etsy FR.
9. **AdSense** : créer les 3 blocs Keur Désir, puis demander l'examen du site une fois les contenus publiés.
10. **Visibilité** : Search Console, IndexNow, compte Pinterest et épingles verticales.
11. ✅ **Logo** : logo de Jean intégré le 29 octobre 2026 (en-tête, pied de page, icône, image de partage).

## Web · Production

| | |
|---|---|
| Adresse | **En ligne** : https://keurdesir.com (depuis le 29 octobre 2026) |
| Construction | `npm run build` → `out/` (134 pages au 29 octobre 2026) |
| Contrôles | lint, types, 33 tests, contrôle du site construit (14 vérifications) : au vert le 29 octobre 2026, en local et sur GitHub Actions |

## Domaine & SSL

- keurdesir.com, zone DNS sur Cloudflare : CNAME `keurdesir.com` et `www` vers `keurdesir.pages.dev`, reliés au projet Pages le 29 octobre 2026.

## Visibilité

- Site en ligne depuis le 29 octobre 2026. Search Console, Cloudflare Web Analytics et Pinterest restent à ouvrir.
