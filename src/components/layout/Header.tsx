"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { EnviesCount } from "../envies/EnviesCount";
import { EmailLink } from "./EmailLink";
import { Logo } from "./Logo";
import { NAV, RUBRIQUES_NAV, SECONDARY_NAV } from "./nav";

/** En-tête : liens en ligne sur grand écran, bouton « Menu » plein écran sur mobile. */
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Menu mobile ouvert : la page derrière ne défile plus, Échap le ferme, le focus va au premier lien.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.querySelector<HTMLElement>("#menu-mobile a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
        <div className="container-page flex h-[72px] items-center gap-8">
          <Link href="/" onClick={close} aria-label={`${siteConfig.name}, accueil`}>
            <Logo />
          </Link>
          <nav aria-label="Menu principal" className="hidden gap-6 font-mono text-[12px] tracking-[0.08em] text-muted uppercase lg:flex">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="py-3 transition hover:text-gold hover:[text-shadow:0_0_10px_var(--neon-2)]">
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/mes-envies"
            className="ml-auto hidden min-h-11 items-center rounded-full border border-accent px-4 font-mono text-[12px] tracking-[0.08em] text-accent uppercase shadow-[0_0_14px_rgba(255,43,68,0.45),inset_0_0_10px_rgba(255,43,68,0.25)] transition hover:bg-accent hover:text-paper lg:inline-flex"
          >
            Mes envies
            <EnviesCount />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className={`ml-auto min-h-11 rounded-full border px-4 font-mono text-[12px] uppercase lg:hidden ${open ? "border-accent text-accent" : "border-gold/70 text-ink"}`}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>
      {open && (
        <div id="menu-mobile" className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-5 pt-20 pb-6 lg:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col">
            {RUBRIQUES_NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={close} className="border-b border-line py-3.5 font-serif text-[20px] leading-tight uppercase hover:text-accent">
                {n.label}
              </Link>
            ))}
            <Link href="/top-10" onClick={close} className="border-b border-line py-3.5 font-serif text-[20px] leading-tight uppercase hover:text-accent">
              Top 10
            </Link>
          </nav>
          <Link href="/mes-envies" onClick={close} className="mt-6 flex items-center justify-between rounded-xl border border-accent bg-surface px-5 py-4 font-serif text-xl shadow-[0_0_18px_rgba(255,43,68,0.35)]">
            <span>
              Mes <i>envies</i>
            </span>
            <EnviesCount />
          </Link>
          <nav aria-label="Pages" className="mt-6 flex flex-wrap gap-5 text-sm text-muted">
            {SECONDARY_NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={close} className="hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-10 text-xs text-muted">
            <Link href="/mentions-legales" onClick={close}>Mentions légales</Link>
            <Link href="/confidentialite" onClick={close}>Confidentialité</Link>
            <Link href="/conditions" onClick={close}>Conditions</Link>
            <EmailLink email={siteConfig.contactEmail} />
          </div>
        </div>
      )}
    </>
  );
}
