# PUBLICATION — état de la mise en ligne

> Mis à jour le 9 novembre 2026, d'après le dépôt local.
>
> Aucun secret ici — uniquement des références.

## En bref

- **Production** : en ligne sur https://keurdesir.com depuis le 29 octobre 2026
- **Domaine & SSL** : keurdesir.com relié au projet Pages le 29 octobre 2026, certificat Cloudflare ; www.keurdesir.com redirigé vers keurdesir.com (301, règle Cloudflare du 29 octobre 2026) ; pages HTML gardées 10 min en cache par Cloudflare (règle du même jour)
- **Visibilité** : site en ligne ; Search Console, Bing Webmaster Tools et Cloudflare Web Analytics ouverts le 29 octobre 2026 ; Pinterest pas encore ouvert
- **Contact** : keurdesir@toakeur.com

## Boutiques

| | 🌐 Site |
|---|---|
| État | [ok] En ligne depuis le 29 octobre 2026 |
| Hébergement | [ok] Cloudflare Pages, projet keurdesir, publié par GitHub Actions |
| Domaine | [ok] keurdesir.com relié ; www.keurdesir.com redirigé vers keurdesir.com (301, règle Cloudflare du 29 octobre 2026) |
| SSL | [ok] Certificat Cloudflare |
| Indexation | [ok] Search Console (propriété Domaine keurdesir.com, validée par TXT) et Bing Webmaster Tools (validé par `BingSiteAuth.xml`), sitemap envoyé aux deux le 29 octobre 2026 |
| Mesure d'audience | [ok] Cloudflare Web Analytics activé le 29 octobre 2026 |

## Ce qui reste, dans l'ordre

1. ✅ **Plan du site** : validé par Jean le 29 octobre 2026 (docs/PLAN.md).
2. ✅ **Base technique** : pages, liens Amazon (keurdesir-21) et Etsy (Awin), contrôles qualité et test des mots interdits, le 29 octobre 2026.
3. ✅ **Dépôt GitHub** : teiki5320/keurdesir, public, créé le 29 octobre 2026 ; `main` poussé. La première publication automatique a passé tous les contrôles et s'est arrêtée faute de secrets Cloudflare.
4. ✅ **Cloudflare** : projet Pages `keurdesir` créé, secrets `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` réglés, keurdesir.com et www.keurdesir.com reliés, le 29 octobre 2026. Site en ligne le même jour.
5. ✅ **Contenus de lancement** (29 octobre 2026) : 106 produits, 10 Top 10, 7 guides de rubrique, lexique de 18 mots et 5 articles du djongué programmés du 30 octobre au 9 novembre ; 9 articles de plus (lundi, mercredi, vendredi) programmés du 11 au 30 novembre 2026, ajoutés le 7 novembre 2026, soit 14 au total.
6. **Produits Amazon** : 53 liens directs et 53 liens de recherche au 9 novembre 2026 (54 ASIN relevés sur amazon.fr le 29 octobre 2026 ; l'encensoir en terre cuite « andé », plus vendu, repassé en recherche le 9 novembre) ; contrôle du bouton d'achat dans la routine du matin depuis le 29 octobre 2026 (signalement seulement) ; reste à compléter les autres.
7. **Illustrations** : visuels d'ambiance des produits et des articles (matières, couleurs, objets ; jamais de corps). ✅ 106 visuels produits sur 106 et 5 visuels d'articles le 29 octobre 2026 (OpenArt, Seedream 4.5), tous relus : objets seuls, sans personne ni texte. ✅ 9 photos libres de droits (Wikimedia Commons, auteur et licence affichés sous l'image) pour les articles du 11 au 30 novembre, le 7 novembre 2026.
8. **Awin** : régler les identifiants du programme Etsy FR.
9. **AdSense** : ✅ 3 blocs Keur Désir créés le 29 octobre 2026 ; visuels en ligne le 29 octobre 2026 ; examen demandé le 29 octobre 2026 à la demande de Jean (site ajouté dans AdSense et propriété validée le même jour), toujours « En préparation » au 9 novembre 2026.
10. **Visibilité** : ✅ Search Console et sitemap, ✅ Bing Webmaster Tools et sitemap, ✅ Cloudflare Web Analytics (29 octobre 2026) ; IndexNow à chaque publication ; reste le compte Pinterest et les épingles verticales.
11. ✅ **Logo** : logo de Jean intégré le 29 octobre 2026 (en-tête, pied de page, icône, image de partage).

## Web · Production

| | |
|---|---|
| Adresse | **En ligne** : https://keurdesir.com (depuis le 29 octobre 2026) |
| Construction | `npm run build` → `out/` (139 pages en ligne au 9 novembre 2026, dont 137 dans le plan du site ; 135 au 29 octobre 2026) |
| Contrôles | lint, types, 34 tests, contrôle du site construit (14 vérifications) : au vert le 9 novembre 2026 en local (33 tests le 29 octobre 2026), et sur GitHub Actions à chaque publication |

## Domaine & SSL

- keurdesir.com, zone DNS sur Cloudflare : CNAME `keurdesir.com` et `www` vers `keurdesir.pages.dev`, reliés au projet Pages le 29 octobre 2026. Règles Cloudflare du même jour : redirection 301 de www vers keurdesir.com, et pages HTML en cache 10 min. Cache du navigateur : « Respecter les en-têtes existants » (réglé le 29 octobre 2026 ; avant, 4 h par défaut), donc les pages suivent `public/_headers` et les navigateurs revérifient à chaque visite.

## Visibilité

- Site en ligne depuis le 29 octobre 2026.
- Search Console : propriété Domaine keurdesir.com validée par un enregistrement TXT, sitemap `https://keurdesir.com/sitemap.xml` envoyé le 29 octobre 2026.
- Bing Webmaster Tools : site https://keurdesir.com/ validé par le fichier `public/BingSiteAuth.xml`, sitemap envoyé le 29 octobre 2026.
- Cloudflare Web Analytics activé sur le projet Pages le 29 octobre 2026.
- Pinterest : pas encore ouvert.
