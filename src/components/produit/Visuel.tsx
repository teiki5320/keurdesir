/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import { withBase } from "@/lib/config";
import { srcSet } from "@/lib/images";

/**
 * Visuel d'un produit : illustration d'ambiance Keur Désir (matières, couleurs, objets ; jamais de corps),
 * ou, tant qu'elle n'existe pas, une tuile aux couleurs de la rubrique avec le type de produit.
 */
export function Visuel({ image, nom, type, rubrique, sizes = "(min-width: 640px) 300px, 50vw", priority = false, className = "" }: { image: string | null; nom: string; type: string; rubrique: string; sizes?: string; priority?: boolean; className?: string }) {
  if (image)
    return (
      <img
        src={withBase(image)}
        srcSet={srcSet(image)}
        sizes={sizes}
        alt={`Illustration : ${nom}`}
        width={1000}
        height={1000}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`aspect-square w-full rounded-lg object-cover ${className}`}
      />
    );
  return (
    <div aria-hidden className={`visuel visuel-${rubrique} flex aspect-square w-full items-end rounded-lg p-4 ${className}`}>
      <span className="font-mono text-[13px] leading-tight tracking-[0.06em] text-ink uppercase [text-shadow:0_0_10px_var(--v1)]">{type}</span>
    </div>
  );
}
