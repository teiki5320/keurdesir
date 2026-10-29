import Link from "next/link";
import type { ProduitCarte as Carte } from "@/lib/data/produits";
import { EnviesButton } from "../envies/EnviesButton";
import { Visuel } from "./Visuel";

/** Carte d'un produit dans une liste : visuel, nom, accroche, lien vers la fiche (pas de bouton marchand). */
export function ProduitCarte({ produit }: { produit: Carte }) {
  return (
    <article className="kd-card group relative h-full border border-line bg-surface p-2.5 transition-colors hover:border-accent">
      <Link href={produit.path} className="block">
        <div className="overflow-hidden rounded-lg">
          <Visuel image={produit.image} nom={produit.nom} type={produit.type} rubrique={produit.rubrique} className="transition duration-700 group-hover:scale-110" />
        </div>
        <h3 className="mt-3 px-1 font-serif text-[13px] leading-snug font-semibold sm:text-[15px] group-hover:text-accent">{produit.nom}</h3>
        {produit.accroche && <p className="mt-1 line-clamp-2 px-1 pb-1 text-sm text-muted">{produit.accroche}</p>}
      </Link>
      <EnviesButton slug={produit.slug} compact className="absolute top-4 right-4" />
    </article>
  );
}

export function ProduitGrid({ produits }: { produits: Carte[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {produits.map((p) => (
        <li key={p.slug}>
          <ProduitCarte produit={p} />
        </li>
      ))}
    </ul>
  );
}
