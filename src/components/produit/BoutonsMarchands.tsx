import type { LienMarchand } from "@/lib/liens";

/**
 * Boutons « Voir sur Amazon » / « Voir sur Etsy » (liens partenaires, nouvel onglet). Aucun prix affiché :
 * seul celui de la boutique fait foi. Toujours au moins 44 px de haut (min-h-11), pour le doigt.
 */
export function BoutonsMarchands({ liens, nom, small = false, className = "" }: { liens: LienMarchand[]; nom: string; small?: boolean; className?: string }) {
  if (liens.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {liens.map((l, i) => (
        <a
          key={l.boutique}
          href={l.href}
          target="_blank"
          rel="sponsored nofollow noopener"
          aria-label={`${l.libelle} : ${nom}, lien partenaire (nouvel onglet)`}
          className={`${i === 0 ? "btn-primary" : "btn-secondary"} min-h-11 ${small ? "px-4 py-2 text-[13px]" : ""}`}
        >
          {l.libelle}
        </a>
      ))}
    </div>
  );
}

/** Petite ligne posée sous les boutons marchands. */
export function NoteMarchande({ liens, className = "" }: { liens: LienMarchand[]; className?: string }) {
  if (liens.length === 0) return null;
  const noms = liens.map((l) => (l.boutique === "amazon" ? "Amazon" : "Etsy"));
  return (
    <p className={`mt-2 text-[11px] leading-snug text-faint ${className}`}>
      {noms.length > 1 ? "Liens partenaires" : "Lien partenaire"} {noms.join(" et ")}. Prix, disponibilité et vendeur sont indiqués sur la boutique.
    </p>
  );
}
