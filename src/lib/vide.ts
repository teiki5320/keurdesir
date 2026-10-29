/**
 * Adresse factice d'une liste encore vide (aucun produit, article ou Top 10) : l'export statique refuse
 * une liste de pages vide. La page correspondante renvoie la page 404 (non indexée, hors plan du site).
 */
export const AUCUN = "aucun";

export const paramsOuAucun = <T extends { slug: string }>(liste: T[]) => (liste.length ? liste.map((x) => ({ slug: x.slug })) : [{ slug: AUCUN }]);
