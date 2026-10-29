/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import { siteConfig, withBase } from "@/lib/config";

/** En-tête : les lèvres du logo (halo néon), « KEUR » en capitales et « Désir » en écriture néon. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 leading-none ${className}`}>
      <img src={withBase("/brand/keurdesir-embleme.webp")} alt="" width={55} height={32} className="h-8 w-auto drop-shadow-[0_0_10px_rgba(255,43,68,0.8)]" />
      <span className="flex items-baseline gap-2">
        <span className="font-serif text-[13px] font-semibold tracking-[0.3em] text-muted">KEUR</span>
        <span className="kd-neon text-[40px] leading-none">Désir</span>
      </span>
    </span>
  );
}

/** Pied de page : le logo complet. */
export function LogoComplet({ className = "" }: { className?: string }) {
  return <img src={withBase("/brand/keurdesir-logo.webp")} alt={`${siteConfig.name}, ${siteConfig.tagline.toLowerCase()}`} width={480} height={412} loading="lazy" className={`drop-shadow-[0_0_24px_rgba(255,43,68,0.45)] ${className}`} />;
}
