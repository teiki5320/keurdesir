/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { Section } from "@/components/layout/Section";
import { BoutonsMarchands, NoteMarchande } from "@/components/produit/BoutonsMarchands";
import { Visuel } from "@/components/produit/Visuel";
import { conseilSections, splitAtMiddleSection } from "@/lib/conseils/article";
import { siteConfig, withBase } from "@/lib/config";
import { getConseilBySlug, getConseils, getRelatedConseils, renderConseil } from "@/lib/data/conseils";
import { getProduit, toCarte } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { formatDate } from "@/lib/format";
import { srcSet } from "@/lib/images";
import { breadcrumbLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { getRubrique } from "@/lib/rubriques";
import { paramsOuAucun } from "@/lib/vide";

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsOuAucun(getConseils());
}

export async function generateMetadata({ params }: PageProps<"/conseils/[slug]">): Promise<Metadata> {
  const conseil = getConseilBySlug((await params).slug);
  if (!conseil) return {};
  return pageMetadata({
    title: conseil.title,
    description: conseil.description,
    path: `/conseils/${conseil.slug}`,
    type: "article",
    publishedTime: conseil.date,
    image: conseil.image,
    imageAlt: `Illustration : ${conseil.title}`,
  });
}

export default async function ConseilPage({ params }: PageProps<"/conseils/[slug]">) {
  if (getMaintenance().enabled) return null;
  const conseil = getConseilBySlug((await params).slug);
  if (!conseil) notFound();
  const rubrique = getRubrique(conseil.rubrique)!;
  const cites = conseil.produits.flatMap((s) => {
    const p = getProduit(s);
    return p ? [toCarte(p, "conseil")] : [];
  });
  /** Encart du haut : les 3 premiers produits de l'article (les seuls avec des boutons marchands, pour rester sobre). */
  const enAvant = cites.slice(0, 3);
  const related = getRelatedConseils(conseil);
  const sections = conseilSections(conseil.body);
  const [firstHalf, secondHalf] = splitAtMiddleSection(renderConseil(conseil.body));
  const url = `${siteConfig.url}/conseils/${conseil.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: conseil.title,
      description: conseil.description,
      datePublished: conseil.date,
      dateModified: conseil.date,
      inLanguage: "fr",
      image: `${siteConfig.url}${conseil.image ?? "/brand/keurdesir-partage.jpg"}`,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      url,
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/brand/keurdesir-logo.png` },
    },
    breadcrumbLd([
      { name: "Accueil", url: siteConfig.url },
      { name: rubrique.nom, url: `${siteConfig.url}/${rubrique.slug}` },
      { name: conseil.title, url },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <article className="container-page max-w-3xl">
        <div className="flex justify-between pt-5 text-[13px]">
          <Link href={`/${rubrique.slug}`} className="text-ink/85 hover:text-accent">
            ← {rubrique.nom}
          </Link>
          <time dateTime={conseil.date} className="text-faint">
            {formatDate(conseil.date)}
          </time>
        </div>
        <h1 className="mt-10 font-serif text-[44px] leading-none text-balance sm:text-6xl">{conseil.title}</h1>
        {conseil.image && (
          <figure className="mt-8">
            <img
              src={withBase(conseil.image)}
              srcSet={srcSet(conseil.image)}
              sizes="(min-width: 768px) 720px, 100vw"
              alt={`Illustration de l'article « ${conseil.title} »`}
              width={1200}
              height={800}
              fetchPriority="high"
              className="aspect-[3/2] w-full rounded-md object-cover"
            />
            <figcaption className="mt-2 text-[11px] text-faint">Illustration Keur Désir (créée par intelligence artificielle).</figcaption>
          </figure>
        )}
        <p className="mt-8 border-l-2 border-gold pl-5 text-[18px] leading-relaxed">
          <span className="sr-only">En bref : </span>
          {conseil.resume}
        </p>
        {enAvant.length > 0 && (
          <section className="mt-8 rounded-xl border border-line-strong p-4 sm:p-5" aria-labelledby="produits-article">
            <h2 id="produits-article" className="eyebrow">Les produits de cet article</h2>
            <ul className="mt-3 space-y-4">
              {enAvant.map((p) => (
                <li key={p.slug} className="grid grid-cols-[72px_1fr] items-start gap-4">
                  <Link href={p.path} tabIndex={-1} aria-hidden>
                    <Visuel image={p.image} nom={p.nom} type={p.type} rubrique={p.rubrique} sizes="72px" />
                  </Link>
                  <div className="min-w-0">
                    <Link href={p.path} className="font-serif text-xl leading-[1.05] hover:text-accent">
                      {p.nom}
                    </Link>
                    {p.accroche && <p className="mt-1.5 text-[13px] leading-snug text-ink/80">{p.accroche}</p>}
                    <BoutonsMarchands liens={p.liens} nom={p.nom} small className="mt-2" />
                    <NoteMarchande liens={p.liens} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
        {sections.length > 2 && (
          <nav aria-label="Sommaire" className="mt-8 text-sm">
            <p className="eyebrow">Sommaire</p>
            <ol className="mt-2 border-b border-line">
              {sections.map((s, i) => (
                <li key={s.id} className="border-t border-line">
                  <a href={`#${s.id}`} className="flex gap-3 py-2.5 hover:text-accent">
                    <span className="text-faint">{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="prose-text mt-8" dangerouslySetInnerHTML={{ __html: firstHalf }} />
        {secondHalf && (
          <>
            {/* Publicité : au milieu du texte, entre deux parties. */}
            <AdSlot placement="article" />
            <div className="prose-text" dangerouslySetInnerHTML={{ __html: secondHalf }} />
          </>
        )}
        {cites.length > 0 && (
          <section className="mt-12" aria-labelledby="cites">
            <h2 id="cites" className="eyebrow">Produits cités</h2>
            <ul className="mt-3 space-y-2">
              {cites.map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="font-serif text-xl hover:text-accent">
                    {p.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {related.length > 0 && (
        <Section title="À lire aussi" href="/conseils" linkLabel="Tous les articles">
          <ConseilGrid conseils={related} />
        </Section>
      )}

      {/* Publicité : en fin de page, loin des boutons marchands. */}
      <div className="container-page">
        <AdSlot placement="article" />
      </div>
    </>
  );
}
