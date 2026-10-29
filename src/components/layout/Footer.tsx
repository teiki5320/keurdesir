import Link from "next/link";
import { CookieSettingsLink } from "@/components/ads/CookieSettingsLink";
import { AMAZON_DISCLOSURE, ETSY_DISCLOSURE } from "@/lib/liens";
import { siteConfig } from "@/lib/config";
import { EmailLink } from "./EmailLink";
import { LogoComplet } from "./Logo";
import { RUBRIQUES_NAV, SECONDARY_NAV } from "./nav";

const MOTS = "DÉSIR ✦ DJONGUÉ ✦ TERANGA ✦ SUTURA ✦ ";

export function Footer() {
  return (
    <footer className="mt-24">
      {/* Grand bandeau néon qui défile (décoratif). */}
      <div aria-hidden className="overflow-hidden border-t border-line py-7">
        <div className="kd-ticker font-serif text-[clamp(48px,8vw,110px)] leading-none font-black text-transparent [-webkit-text-stroke:1.5px_var(--neon)] [animation-duration:30s] [text-shadow:0_0_22px_var(--neon)]">
          <span className="pr-12">{MOTS.repeat(2)}</span>
          <span className="pr-12">{MOTS.repeat(2)}</span>
        </div>
      </div>
      <div aria-hidden className="kd-line" />
      <div className="bg-[#070206]">
        <div className="container-page grid gap-10 py-12 text-sm sm:grid-cols-3">
          <div>
            <LogoComplet className="w-52" />
            <p className="mt-3 max-w-xs text-muted">{siteConfig.tagline}, l&apos;art sénégalais de la séduction, raconté avec élégance.</p>
          </div>
          <nav aria-label="Rubriques" className="flex flex-col gap-3">
            {RUBRIQUES_NAV.map((n) => (
              <Link key={n.href} href={n.href} className="font-serif text-[14px] leading-tight uppercase hover:text-accent">
                {n.label}
              </Link>
            ))}
            <Link href="/top-10" className="font-serif text-[14px] leading-tight uppercase hover:text-accent">
              Top 10
            </Link>
            <Link href="/mes-envies" className="font-serif text-[14px] leading-tight uppercase hover:text-accent">
              Mes envies
            </Link>
          </nav>
          <nav aria-label="Informations" className="flex flex-col gap-2 font-mono text-[13px] text-muted">
            {SECONDARY_NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-gold">
                {n.label}
              </Link>
            ))}
            <Link href="/mentions-legales" className="mt-3 hover:text-gold">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gold">Confidentialité</Link>
            <Link href="/conditions" className="hover:text-gold">Conditions d&apos;utilisation</Link>
            <CookieSettingsLink className="hover:text-gold" />
            <EmailLink email={siteConfig.contactEmail} className="hover:text-gold" />
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
      </div>
    </footer>
  );
}
