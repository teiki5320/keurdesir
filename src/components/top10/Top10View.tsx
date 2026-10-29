import Link from "next/link";
import { BoutonsMarchands, NoteMarchande } from "@/components/produit/BoutonsMarchands";
import { Visuel } from "@/components/produit/Visuel";
import { EnviesButton } from "@/components/envies/EnviesButton";
import type { Top10Produit } from "@/lib/data/top10";
import { premierePhrase } from "@/lib/format";
import type { Top10 } from "@/lib/top10/types";
import { RichText } from "./RichText";

const monthYear = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });

/** Les 3 sélections qui suivent dans l'ordre (on repart du début après la dernière). */
function seeAlso(tops: Top10[], top: Top10): Top10[] {
  const i = tops.findIndex((t) => t.slug === top.slug);
  return [1, 2, 3].map((k) => tops[(i + k) % tops.length]).filter((t) => t.slug !== top.slug);
}

/** Sujet de la sélection avec une majuscule : « Top 10 des encensoirs » → « Encensoirs ». */
export function subjectOf(top: Top10): string {
  const s = top.title.replace(/^Top 10 des /, "");
  return s[0].toUpperCase() + s.slice(1);
}

/** Page d'une sélection « Top 10 » (même gabarit pour toutes) : une phrase, la liste, puis les explications. Pas de publicité. */
export function Top10View({ tops, top, produits }: { tops: Top10[]; top: Top10; produits: Top10Produit[] }) {
  const [accroche, suite] = premierePhrase(top.intro);
  return (
    <article className="container-page max-w-4xl">
      <header className="pt-10">
        <p className="eyebrow flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/top-10" className="hover:text-ink">Nos sélections</Link>
          <span className="text-muted">10 produits · {monthYear.format(new Date(`${top.updated}T12:00:00Z`))}</span>
        </p>
        <h1 className="kd-in mt-3 font-serif text-[30px] leading-[1.05] text-balance uppercase [text-shadow:0_0_24px_rgba(255,43,68,0.55)] sm:text-5xl">{top.title}</h1>
        <p className="mt-6 text-[17px] leading-relaxed text-ink/85">{accroche}</p>
      </header>

      <ol className="mt-10 space-y-5">
        {produits.map((p) => (
          <li key={p.slug}>
            <section aria-labelledby={`produit-${p.rank}`} className="kd-reveal rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent sm:p-7">
              <div className="sm:grid sm:grid-cols-[200px_1fr] sm:gap-8">
                <div className="relative">
                  <span aria-label={`Numéro ${p.rank}`} className="absolute top-2 left-2 z-10 flex size-12 items-center justify-center rounded-lg border border-accent bg-paper font-serif text-2xl text-accent shadow-[0_0_16px_rgba(255,43,68,0.6)]">
                    {p.rank}
                  </span>
                  <Link href={p.path} tabIndex={-1} aria-hidden>
                    <Visuel image={p.image} nom={p.nom} type={p.type} rubrique={p.rubrique} sizes="(min-width: 640px) 200px, 100vw" priority={p.rank === 1} />
                  </Link>
                </div>
                <div className="mt-5 min-w-0 sm:mt-0">
                  <p className="eyebrow">{p.type}</p>
                  <h2 id={`produit-${p.rank}`} className="mt-2 font-serif text-[22px] leading-[1.15] text-balance sm:text-[26px]">
                    <Link href={p.path} className="hover:text-accent">
                      {p.nom}
                    </Link>
                  </h2>
                  <h3 className="eyebrow mt-5">Pourquoi on l&apos;a choisi</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{p.why}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <BoutonsMarchands liens={p.liens} nom={p.nom} />
                    <EnviesButton slug={p.slug} compact />
                  </div>
                  <NoteMarchande liens={p.liens} />
                </div>
              </div>
            </section>
          </li>
        ))}
      </ol>

      {suite && (
        <section aria-labelledby="choix" className="mt-14">
          <h2 id="choix" className="section-title">Comment nous les avons choisis</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink/85">{suite}</p>
        </section>
      )}

      <section aria-labelledby="commencer" className="mt-14">
        <h2 id="commencer" className="section-title">Par où commencer</h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink/85">
          <RichText text={top.start} />
        </p>
      </section>

      <section aria-labelledby="questions" className="mt-14">
        <h2 id="questions" className="section-title">Questions fréquentes</h2>
        <div className="mt-5 border-b border-line">
          {top.faq.map((f) => (
            <details key={f.q} className="group border-t border-line py-4">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 text-base font-semibold hover:text-accent [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-xl leading-none text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                <RichText text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </section>

      {tops.length > 1 && (
        <section aria-labelledby="voir-aussi" className="mt-14">
          <h2 id="voir-aussi" className="section-title">Voir aussi</h2>
          <Top10Pastilles tops={seeAlso(tops, top)} />
        </section>
      )}
    </article>
  );
}

/** Cartes des sélections (page /top-10, accueil, rubriques, « Voir aussi »). */
export function Top10Pastilles({ tops }: { tops: Top10[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-3">
      {tops.map((t) => (
        <li key={t.slug}>
          <Link href={`/top-10/${t.slug}`} className="kd-card flex h-full flex-col border border-line bg-surface p-5 transition-colors hover:border-accent">
            <span className="eyebrow">[ Top 10 ]</span>
            <span className="mt-2 font-serif text-[19px] leading-[1.15] text-balance">{subjectOf(t)}</span>
            <span className="mt-auto pt-4 font-mono text-[13px] text-accent uppercase">Voir la sélection →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
