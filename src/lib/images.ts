import { withBase } from "./config";

/**
 * Vignettes créées par scripts/vignettes.mjs (mêmes largeurs) : public/<dossier>/w<largeur>/<nom>.webp.
 * Visuels produits : originaux de 1000 px (carrés) ; images d'articles : 1200 × 800 px.
 */
const THUMBS = { produits: [300, 600], conseils: [400, 800] } as const;
const ORIGINAL = { produits: 1000, conseils: 1200 } as const;

function parts(path: string): { dir: keyof typeof THUMBS; name: string } | null {
  const m = path.match(/^\/(produits|conseils)\/([^/]+)\.(webp|jpe?g|png)$/i);
  return m ? { dir: m[1] as keyof typeof THUMBS, name: m[2] } : null;
}

/** Vignette d'une largeur donnée, sinon l'image d'origine. */
export function thumb(path: string, width: number): string {
  const p = parts(path);
  if (!p || !(THUMBS[p.dir] as readonly number[]).includes(width)) return withBase(path);
  return withBase(`/${p.dir}/w${width}/${p.name}.webp`);
}

/** srcset d'un visuel produit ou d'une image d'article (vignettes + original), ou undefined pour une autre image. */
export function srcSet(path: string): string | undefined {
  const p = parts(path);
  if (!p) return undefined;
  return [...THUMBS[p.dir].map((w) => `${thumb(path, w)} ${w}w`), `${withBase(path)} ${ORIGINAL[p.dir]}w`].join(", ");
}
