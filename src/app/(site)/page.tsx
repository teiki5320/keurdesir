/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import Link from "next/link";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { Section } from "@/components/layout/Section";
import { ProduitGrid } from "@/components/produit/ProduitCarte";
import { subjectOf } from "@/components/top10/Top10View";
import { siteConfig, withBase } from "@/lib/config";
import { getConseils } from "@/lib/data/conseils";
import { getProduit, toCarte } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { getTop10s } from "@/lib/data/top10";
import { jsonLd } from "@/lib/json-ld";
import { LEXIQUE } from "@/lib/lexique";
import { pageMetadata } from "@/lib/metadata";
import { RUBRIQUES } from "@/lib/rubriques";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

/** Couleur néon de chaque rubrique (cases de l'accueil), la même que ses tuiles produits (globals.css). */
const NEON: Record<string, [string, string]> = {
  djongue: ["#ff2b44", "rgba(255,43,68,0.35)"],
  "bine-bine": ["#ffb83b", "rgba(255,184,59,0.32)"],
  "thiouraye-encens": ["#ff6a3d", "rgba(255,106,61,0.32)"],
  encensoirs: ["#ffd23f", "rgba(255,210,63,0.28)"],
  "karite-soins": ["#ff8fb1", "rgba(255,143,177,0.3)"],
  "tenues-de-nuit": ["#c46bff", "rgba(196,107,255,0.32)"],
  "coffrets-cadeaux": ["#ff4f8b", "rgba(255,79,139,0.32)"],
};

/** Halos lumineux qui montent dans le haut de la page (positions fixes : même rendu à chaque visite). */
const BOKEH_COULEURS = ["rgba(255,43,68,0.38)", "rgba(255,184,59,0.3)", "rgba(255,46,99,0.32)", "rgba(255,210,63,0.2)"];
const BOKEH = Array.from({ length: 16 }, (_, i) => {
  const taille = 24 + ((i * 17) % 80);
  return {
    left: `${(i * 29) % 100}%`,
    width: taille,
    height: taille,
    background: BOKEH_COULEURS[i % 4],
    filter: `blur(${2 + (i % 5)}px)`,
    animationDuration: `${10 + ((i * 5) % 10)}s`,
    animationDelay: `-${(i * 3) % 12}s`,
  };
});

const BANDEAU = "CHARME ✦ BINE-BINE ✦ THIOURAYE ✦ SÉDUCTION ✦ PETITS PAGNES ✦ KARITÉ ✦ ÉLÉGANCE ✦ BAKHOUR ✦ ";

export default function HomePage() {
  if (getMaintenance().enabled) return null;
  const tops = getTop10s();
  // Nos coups de cœur : le n° 1 de chaque sélection (liens vers les fiches, aucun lien marchand sur l'accueil).
  const coups = tops.flatMap((t) => {
    const p = t.items[0] && getProduit(t.items[0].slug);
    return p ? [toCarte(p, "rubrique")] : [];
  });
  const conseils = getConseils().slice(0, 3);
  const motsBandeau = LEXIQUE.map((m) => m.mot.toUpperCase()).join(" // ");
  const sutura = LEXIQUE.find((m) => m.mot === "Sutura");
  const structuredData = [
    { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "fr" },
    { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/brand/keurdesir-logo.png` },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      {/* Haut de page : wax en cercles néon, halos de club, enseigne « Désir », logo dans ses anneaux. */}
      <section className="kd-hero border-b border-line">
        <span aria-hidden className="kd-blob kd-blob-1" />
        <span aria-hidden className="kd-blob kd-blob-2" />
        <span aria-hidden className="kd-wax-mask">
          <span className="kd-wax" />
        </span>
        <span aria-hidden className="kd-vignette" />
        <span aria-hidden className="kd-scan" />
        {BOKEH.map((b, i) => (
          <span key={i} aria-hidden className="kd-bokeh" style={b} />
        ))}
        <div className="container-page flex flex-wrap items-center gap-12 pt-14 pb-20 sm:pt-20">
          <div className="min-w-0 flex-[1_1_480px]">
            <p aria-hidden className="kd-in [animation-delay:0.1s]">
              <span className="kd-neon inline-block origin-left -rotate-[5deg] pr-4 text-[clamp(96px,15vw,200px)] leading-[0.95]">Désir</span>
            </p>
            <h1 className="kd-in mt-2 font-serif text-[clamp(26px,3.6vw,46px)] leading-[1.05] font-black text-transparent uppercase [-webkit-text-stroke:1.5px_var(--neon-2)] [animation-delay:0.2s] [text-shadow:0_0_18px_var(--neon-2-soft)]">
              Le guide du djongué
            </h1>
            <p className="kd-in mt-6 max-w-xl text-[18px] leading-relaxed text-ink/90 [animation-delay:0.3s]">
              Un parfum qui s&apos;attarde, des perles qu&apos;on devine, un regard qui en dit long. Keur Désir raconte le
              djongué, cet art de plaire et de recevoir que les femmes sénégalaises se transmettent : perles de taille,
              encens, soins du corps et tenues, avec des sélections choisies une à une.
            </p>
            <div className="kd-in mt-8 flex flex-col gap-3 [animation-delay:0.45s] sm:flex-row">
              <Link href="/djongue" className="btn-primary kd-pulse min-h-12 px-7 font-serif tracking-wide uppercase">Découvrir le djongué</Link>
              <Link href="/top-10" className="btn-secondary min-h-12 px-7 font-serif tracking-wide uppercase">Les Top 10</Link>
            </div>
          </div>
          <div className="flex flex-[1_1_340px] justify-center">
            <div className="kd-in relative flex aspect-square w-full max-w-[440px] items-center justify-center [animation-delay:0.2s]">
              <span aria-hidden className="absolute inset-0 animate-[kd-spin_20s_linear_infinite] rounded-full border-2 border-dashed border-accent shadow-[0_0_30px_var(--neon),inset_0_0_40px_var(--neon-soft)]" />
              <span aria-hidden className="absolute inset-[9%] animate-[kd-spin-rev_6s_linear_infinite] rounded-full border-[3px] border-transparent border-y-gold shadow-[0_0_22px_var(--neon-2-soft)]" />
              <span aria-hidden className="absolute inset-[17%] animate-[kd-pulse-ring_2.8s_ease-in-out_infinite] rounded-full border border-[#ff2e63] shadow-[0_0_18px_rgba(255,46,99,0.6)]" />
              <img
                src={withBase("/brand/keurdesir-logo.webp")}
                alt="Logo Keur Désir : des lèvres rouge et or à motifs"
                width={480}
                height={412}
                fetchPriority="high"
                className="kd-float relative w-[70%] drop-shadow-[0_0_22px_rgba(255,43,68,0.8)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deux bandeaux qui défilent en sens opposés (décoratifs). */}
      <div aria-hidden className="overflow-hidden bg-accent py-3.5 text-paper shadow-[0_0_40px_var(--neon-soft)]">
        <div className="kd-ticker font-serif text-[18px] font-bold">
          <span className="pr-8">{BANDEAU.repeat(2)}</span>
          <span className="pr-8">{BANDEAU.repeat(2)}</span>
        </div>
      </div>
      <div aria-hidden className="overflow-hidden border-b border-line py-2.5 text-gold">
        <div className="kd-ticker font-mono text-[14px] [animation-direction:reverse] [animation-duration:32s]">
          <span className="pr-8">{`// ${motsBandeau} `.repeat(2)}</span>
          <span className="pr-8">{`// ${motsBandeau} `.repeat(2)}</span>
        </div>
      </div>

      {/* Les 7 univers : cases néon qui respirent, chacune à sa couleur. */}
      <section className="container-page mt-20">
        <p className="eyebrow">{`/ 0${RUBRIQUES.length} univers`}</p>
        <h2 className="section-title kd-reveal mt-2">
          Laissez-vous <i>tenter</i>
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RUBRIQUES.map((r, i) => {
            const [neon, doux] = NEON[r.slug] ?? NEON.djongue;
            return (
              <li key={r.slug}>
                <Link
                  href={`/${r.slug}`}
                  className="kd-tile group flex h-full flex-col rounded-2xl border bg-panel p-5"
                  style={{ borderColor: neon, ["--g" as string]: doux, animationDelay: `${i * 0.45}s` }}
                >
                  <span className="font-mono text-[13px]" style={{ color: neon }}>{`/0${i + 1}`}</span>
                  <span className="mt-6 font-serif text-[19px] leading-tight uppercase">{r.nom}</span>
                  <span className="mt-2 line-clamp-3 text-sm text-muted">{r.chapo}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {coups.length >= 4 && (
        <section id="coups-de-coeur" className="mt-20 border-y border-line bg-[#12050d] py-16">
          <div className="container-page">
            <p className="eyebrow">/ La sélection</p>
            <h2 className="section-title kd-reveal mt-2 mb-8">
              Nos <i>tentations</i> du soir
            </h2>
            <ProduitGrid produits={coups} />
          </div>
        </section>
      )}

      {tops.length > 0 && (
        <section className="container-page mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">/ Classements</p>
              <h2 className="section-title kd-reveal mt-2">
                Les plus <i>désirés</i>
              </h2>
            </div>
            <Link href="/top-10" className="font-mono text-[12px] whitespace-nowrap text-gold uppercase hover:text-accent">Toutes les sélections →</Link>
          </div>
          <ul className="mt-6">
            {tops.slice(0, 6).map((t, i) => (
              <li key={t.slug} className="kd-sweep border-t border-line">
                <Link href={`/top-10/${t.slug}`} className="flex flex-wrap items-baseline gap-x-7 gap-y-1 py-5 hover:text-gold">
                  <span className="min-w-12 font-mono text-[14px] text-gold">{`[0${i + 1}]`}</span>
                  <span className="flex-[1_1_300px] font-serif text-[clamp(17px,2.2vw,24px)] font-semibold">Top 10 : {subjectOf(t).toLowerCase()}</span>
                  <span aria-hidden className="font-mono text-accent">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {conseils.length > 0 && (
        <Section title="Derniers articles" href="/conseils" linkLabel="Tous les articles">
          <ConseilGrid conseils={conseils} />
        </Section>
      )}

      {sutura && (
        <section className="container-page mt-20">
          <div className="kd-reveal flex flex-wrap items-center gap-x-14 gap-y-6 rounded-3xl border-2 border-[#ff2e63] p-[clamp(28px,5vw,64px)] shadow-[0_0_26px_rgba(255,46,99,0.45),inset_0_0_26px_rgba(255,46,99,0.2)]">
            <svg aria-hidden viewBox="0 0 200 100" width="200" height="100" fill="none" stroke="var(--neon)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 drop-shadow-[0_0_8px_var(--neon)]">
              <path pathLength={1} className="kd-draw" d="M8 52 C 30 22, 62 18, 100 40 C 138 18, 170 22, 192 52 C 160 92, 40 92, 8 52 Z" />
              <path pathLength={1} className="kd-draw [animation-delay:0.6s]" d="M16 52 C 60 62, 140 62, 184 52" />
            </svg>
            <div className="min-w-0 flex-[1_1_380px]">
              <p className="eyebrow">Le mot du lexique</p>
              <p className="kd-flicker mt-2 font-serif text-[clamp(44px,7vw,92px)] leading-none font-black [text-shadow:0_0_8px_#ff2e63,0_0_26px_#ff2e63]">
                {sutura.mot.toUpperCase()}
              </p>
              <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/90">{sutura.definition}</p>
              <Link href="/lexique" className="mt-4 inline-block font-mono text-[13px] text-gold uppercase hover:text-accent">
                Tout le lexique du djongué →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
