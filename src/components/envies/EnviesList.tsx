"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { ProduitCarte } from "@/lib/data/produits";
import { siteConfig } from "@/lib/config";
import { useEnvies } from "@/lib/envies";
import { BoutonsMarchands, NoteMarchande } from "../produit/BoutonsMarchands";
import { Visuel } from "../produit/Visuel";

/**
 * Mes envies. Une liste partagée arrive par l'adresse (?l=slug1,slug2) : on l'affiche
 * et on propose de l'ajouter à sa propre liste (pratique pour faire passer une liste de cadeaux).
 */
export function EnviesList({ produits }: { produits: ProduitCarte[] }) {
  const { slugs, toggle, addAll } = useEnvies();
  const params = useSearchParams();
  const [copied, setCopied] = useState(false);
  const bySlug = new Map(produits.map((p) => [p.slug, p]));
  const shared = (params.get("l") ?? "").split(",").filter((s) => bySlug.has(s));
  const mine = slugs.flatMap((s) => bySlug.get(s) ?? []);

  const shareUrl = `${siteConfig.url}/mes-envies?l=${mine.map((p) => p.slug).join(",")}`;
  const shareText = `Mes envies sur ${siteConfig.name} : ${shareUrl}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <div className="container-page max-w-3xl">
      {shared.length > 0 && (
        <section className="mb-10 rounded-xl border border-accent p-5">
          <h2 className="eyebrow">Une liste d&apos;envies vous a été partagée</h2>
          <ul className="mt-2">
            {shared.map((s) => (
              <li key={s} className="border-b border-line py-2.5">
                <Link href={bySlug.get(s)!.path} className="font-serif text-xl hover:text-accent">
                  {bySlug.get(s)!.nom}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="btn-primary mt-4 min-h-11 w-full sm:w-auto" onClick={() => addAll(shared)}>
            Ajouter à mes envies
          </button>
        </section>
      )}

      {mine.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <p className="font-serif text-[28px] italic">Votre liste d&apos;envies est vide.</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">Ajoutez des produits avec le cœur des fiches et des sélections.</p>
          <Link href="/top-10" className="mt-5 text-sm text-accent hover:text-ink">
            Voir les Top 10 →
          </Link>
        </div>
      ) : (
        <>
          <p className="text-[13px] text-faint">
            {mine.length} {mine.length > 1 ? "envies" : "envie"}, gardées dans ce navigateur. Pas de compte.
          </p>
          <ul className="mt-6 border-b border-line">
            {mine.map((p) => (
              <li key={p.slug} className="grid grid-cols-[72px_1fr_auto] items-start gap-4 border-t border-line py-4">
                <Link href={p.path} tabIndex={-1} aria-hidden>
                  <Visuel image={p.image} nom={p.nom} type={p.type} rubrique={p.rubrique} sizes="72px" />
                </Link>
                <div className="min-w-0">
                  <Link href={p.path} className="font-serif text-[21px] leading-tight hover:text-accent">
                    {p.nom}
                  </Link>
                  <BoutonsMarchands liens={p.liens} nom={p.nom} small className="mt-2" />
                  <NoteMarchande liens={p.liens} />
                </div>
                <button type="button" onClick={() => toggle(p.slug)} className="flex size-11 items-center justify-center rounded-full text-faint hover:text-ink" aria-label={`Retirer ${p.nom} de mes envies`}>
                  <X className="size-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2">
            <a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-11 flex-1">
              Partager sur WhatsApp
            </a>
            <button type="button" className="btn-secondary min-h-11" onClick={copy}>
              {copied ? "Lien copié" : "Copier le lien"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
