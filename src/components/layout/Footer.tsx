import Link from "next/link";
import { CookieSettingsLink } from "@/components/ads/CookieSettingsLink";
import { AMAZON_DISCLOSURE, ETSY_DISCLOSURE } from "@/lib/liens";
import { siteConfig } from "@/lib/config";
import { EmailLink } from "./EmailLink";
import { LogoComplet } from "./Logo";
import { RUBRIQUES_NAV, SECONDARY_NAV } from "./nav";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 text-sm sm:grid-cols-3">
        <div>
          <LogoComplet className="w-52" />
          <p className="mt-3 max-w-xs text-muted">{siteConfig.tagline}, l&apos;art sénégalais de la séduction, raconté avec élégance.</p>
        </div>
        <nav aria-label="Rubriques" className="flex flex-col gap-2.5">
          {RUBRIQUES_NAV.map((n) => (
            <Link key={n.href} href={n.href} className="font-serif text-lg leading-none hover:text-accent">
              {n.label}
            </Link>
          ))}
          <Link href="/top-10" className="font-serif text-lg leading-none hover:text-accent">
            Top 10
          </Link>
          <Link href="/mes-envies" className="font-serif text-lg leading-none hover:text-accent">
            Mes <i>envies</i>
          </Link>
        </nav>
        <nav aria-label="Informations" className="flex flex-col gap-2 text-muted">
          {SECONDARY_NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink">
              {n.label}
            </Link>
          ))}
          <Link href="/mentions-legales" className="mt-3 hover:text-ink">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-ink">Confidentialité</Link>
          <Link href="/conditions" className="hover:text-ink">Conditions d&apos;utilisation</Link>
          <CookieSettingsLink className="hover:text-ink" />
          <EmailLink email={siteConfig.contactEmail} className="hover:text-ink" />
        </nav>
      </div>
      <div className="container-page space-y-2 border-t border-line py-5 text-[11px] leading-relaxed text-faint">
        <p>{AMAZON_DISCLOSURE}</p>
        <p>{ETSY_DISCLOSURE}</p>
        <p>
          Un site{" "}
          <a href="https://toakeur.com" className="font-semibold text-muted hover:text-ink">TOA KEUR</a>
        </p>
      </div>
    </footer>
  );
}
