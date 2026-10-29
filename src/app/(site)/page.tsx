import Link from "next/link";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { Section } from "@/components/layout/Section";
import { ProduitGrid } from "@/components/produit/ProduitCarte";
import { Top10Pastilles } from "@/components/top10/Top10View";
import { siteConfig } from "@/lib/config";
import { getConseils } from "@/lib/data/conseils";
import { getProduit, toCarte } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { getTop10s } from "@/lib/data/top10";
import { jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { RUBRIQUES } from "@/lib/rubriques";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  if (getMaintenance().enabled) return null;
  const tops = getTop10s();
  // Nos coups de cœur : le n° 1 de chaque sélection (liens vers les fiches, aucun lien marchand sur l'accueil).
  const coups = tops.flatMap((t) => {
    const p = t.items[0] && getProduit(t.items[0].slug);
    return p ? [toCarte(p, "rubrique")] : [];
  });
  const conseils = getConseils().slice(0, 3);
  const structuredData = [
    { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "fr" },
    { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/brand/keurdesir-logo.png` },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <section className="container-page pt-14 pb-4 sm:pt-20">
        <p className="eyebrow">Keur, la maison en wolof</p>
        <h1 className="mt-3 max-w-4xl font-serif text-[56px] leading-[0.92] text-balance sm:text-8xl">
          Le guide du <i className="text-accent">djongué</i>
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-ink/80">
          Keur Désir ouvre sa porte sur le djongué, cet art de plaire et de recevoir que les femmes sénégalaises se
          transmettent : perles de taille, encens, soins du corps et tenues, racontés avec fierté, avec des sélections
          choisies une à une.
        </p>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <Link href="/djongue" className="btn-primary min-h-11">Découvrir le djongué</Link>
          <Link href="/coffrets-cadeaux" className="btn-secondary min-h-11">Idées cadeaux</Link>
        </div>
      </section>

      <Section title="Nos rubriques">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RUBRIQUES.map((r) => (
            <li key={r.slug}>
              <Link href={`/${r.slug}`} className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition hover:border-line-strong">
                <span aria-hidden className={`visuel visuel-${r.slug} block h-1.5 w-12 rounded-full`} />
                <span className="mt-4 font-serif text-[28px] leading-none group-hover:text-accent">{r.nom}</span>
                <span className="mt-2 line-clamp-3 text-sm text-muted">{r.chapo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {coups.length >= 4 && (
        <Section id="coups-de-coeur" title="Nos coups de cœur">
          <ProduitGrid produits={coups} />
        </Section>
      )}

      {tops.length > 0 && (
        <Section title="Nos sélections Top 10" href="/top-10" linkLabel="Toutes les sélections">
          <Top10Pastilles tops={tops.slice(0, 6)} />
        </Section>
      )}

      {conseils.length > 0 && (
        <Section title="Derniers articles" href="/conseils" linkLabel="Tous les articles">
          <ConseilGrid conseils={conseils} />
        </Section>
      )}
    </>
  );
}
