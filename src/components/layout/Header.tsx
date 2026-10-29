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
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="container-page flex h-16 items-center gap-8">
          <Link href="/" onClick={close} aria-label={`${siteConfig.name}, accueil`}>
            <Logo className="text-[28px]" />
          </Link>
          <nav aria-label="Menu principal" className="hidden gap-6 text-sm text-ink/80 lg:flex">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-accent">
                {n.label}
              </Link>
            ))}
          </nav>
          <Link href="/mes-envies" className="ml-auto hidden items-center font-serif text-xl hover:text-accent lg:inline-flex">
            Mes <i className="ml-1.5">envies</i>
            <EnviesCount />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className={`ml-auto min-h-11 rounded-full border px-4 text-[13px] lg:hidden ${open ? "border-accent text-accent" : "border-ink/40"}`}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>
      {open && (
        <div id="menu-mobile" className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-5 pt-20 pb-6 lg:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col">
            {RUBRIQUES_NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={close} className="border-b border-line py-3 font-serif text-[30px] leading-none hover:text-accent">
                {n.label}
              </Link>
            ))}
            <Link href="/top-10" onClick={close} className="border-b border-line py-3 font-serif text-[30px] leading-none hover:text-accent">
              Top 10
            </Link>
          </nav>
          <Link href="/mes-envies" onClick={close} className="mt-6 flex items-center justify-between rounded-xl bg-surface px-5 py-4 font-serif text-2xl">
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
