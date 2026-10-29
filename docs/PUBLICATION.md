# PUBLICATION — état de la mise en ligne

> Mis à jour le 29 octobre 2026, d'après le dépôt local.
>
> Aucun secret ici — uniquement des références.

## En bref

- **Production** : pas encore en ligne
- **Domaine & SSL** : keurdesir.com sur Cloudflare, pas encore relié au site
- **Visibilité** : aucune (site non publié)
- **Contact** : keurdesir@toakeur.com

## Boutiques

| | 🌐 Site |
|---|---|
| État | [pas encore] Base technique prête, pas publiée |
| Hébergement | [à faire] Cloudflare Pages, projet keurdesir à créer |
| Domaine | [à faire] keurdesir.com à relier, www à rediriger |
| SSL | [pas encore] Certificat Cloudflare à la mise en ligne |
| Indexation | [pas encore] Search Console à ouvrir |
| Mesure d'audience | [pas encore] Cloudflare Web Analytics à activer |

## Ce qui reste, dans l'ordre

1. ✅ **Plan du site** : validé par Jean le 29 octobre 2026 (docs/PLAN.md).
2. ✅ **Base technique** : pages, liens Amazon (keurdesir-21) et Etsy (Awin), contrôles qualité et test des mots interdits, le 29 octobre 2026.
3. ✅ **Dépôt GitHub** : teiki5320/keurdesir, public, créé le 29 octobre 2026 ; `main` poussé. La première publication automatique a passé tous les contrôles et s'est arrêtée faute de secrets Cloudflare.
4. **Cloudflare** : créer le projet Pages `keurdesir`, régler les secrets `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID`, relier keurdesir.com.
5. ✅ **Contenus de lancement** (29 octobre 2026) : 106 produits, 10 Top 10, 7 guides de rubrique, lexique de 18 mots et 5 articles du djongué programmés du 30 octobre au 9 novembre.
6. **Vérification des produits** : ouvrir chaque fiche Amazon (et Etsy) et saisir les ASIN vérifiés ; d'ici là, les boutons mènent à une recherche Amazon avec le tag.
7. **Illustrations** : visuels d'ambiance des produits et des articles (matières, couleurs, objets ; jamais de corps).
8. **Awin** : régler les identifiants du programme Etsy FR.
9. **AdSense** : créer les 3 blocs Keur Désir, puis demander l'examen du site une fois les contenus publiés.
10. **Visibilité** : Search Console, IndexNow, compte Pinterest et épingles verticales.
11. ✅ **Logo** : logo de Jean intégré le 29 octobre 2026 (en-tête, pied de page, icône, image de partage).

## Web · Production

| | |
|---|---|
| Adresse | **Pas encore en ligne** (https://keurdesir.com) |
| Construction | `npm run build` → `out/` (134 pages au 29 octobre 2026) |
| Contrôles | lint, types, 33 tests, contrôle du site construit (14 vérifications) : au vert le 29 octobre 2026, en local et sur GitHub Actions |

## Domaine & SSL

- keurdesir.com, zone DNS sur Cloudflare. À relier au projet Pages à la mise en ligne.

## Visibilité

- Rien pour l'instant : le site n'est pas publié.
