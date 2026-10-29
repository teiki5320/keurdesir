/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import { siteConfig, withBase } from "@/lib/config";

/** En-tête : les lèvres du logo et le nom, « Keur » en or, « Désir » en rouge (logo de Jean, docs/logos). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-serif leading-none font-semibold ${className}`}>
      <img src={withBase("/brand/keurdesir-embleme.webp")} alt="" width={55} height={32} className="h-8 w-auto" />
      <span>
        <span className="text-gold">Keur</span> <span className="text-accent">Désir</span>
      </span>
    </span>
  );
}

/** Pied de page : le logo complet. */
export function LogoComplet({ className = "" }: { className?: string }) {
  return <img src={withBase("/brand/keurdesir-logo.webp")} alt={`${siteConfig.name}, ${siteConfig.tagline.toLowerCase()}`} width={480} height={412} loading="lazy" className={className} />;
}
