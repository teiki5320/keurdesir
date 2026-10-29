import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { EnviesButton } from "@/components/envies/EnviesButton";
import { Section } from "@/components/layout/Section";
import { BoutonsMarchands, NoteMarchande } from "@/components/produit/BoutonsMarchands";
import { ProduitGrid } from "@/components/produit/ProduitCarte";
import { Visuel } from "@/components/produit/Visuel";
import { suivantsEnBoucle } from "@/lib/boucle";
import { siteConfig } from "@/lib/config";
import { getConseilsDuProduit } from "@/lib/data/conseils";
import { getProduit, getProduits, getProduitsDeRubrique, toCarte } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, jsonLd } from "@/lib/json-ld";
import { clip, pageMetadata } from "@/lib/metadata";
import { liensMarchands } from "@/lib/liens";
import { getRubrique } from "@/lib/rubriques";
import { paramsOuAucun } from "@/lib/vide";

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsOuAucun(getProduits());
}

export async function generateMetadata({ params }: PageProps<"/produit/[slug]">): Promise<Metadata> {
  const p = getProduit((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.nom, description: clip(p.resume), path: `/produit/${p.slug}`, image: p.image, imageAlt: `Illustration : ${p.nom}` });
}

/** Fiche produit : texte écrit par nous, boutons Amazon et/ou Etsy, jamais de prix, de note ni d'avis. */
export default async function ProduitPage({ params }: PageProps<"/produit/[slug]">) {
  if (getMaintenance().enabled) return null;
  const p = getProduit((await params).slug);
  if (!p) notFound();
  const rubrique = getRubrique(p.rubrique)!;
  const liens = liensMarchands(p, "fiche");
  const proches = suivantsEnBoucle(getProduitsDeRubrique(p.rubrique), (x) => x.slug === p.slug, 4).map((x) => toCarte(x, "rubrique"));
  const articles = getConseilsDuProduit(p.slug).slice(0, 3);
  const url = `${siteConfig.url}/produit/${p.slug}`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbLd([{ name: "Accueil", url: siteConfig.url }, { name: rubrique.nom, url: `${siteConfig.url}/${rubrique.slug}` }, { name: p.nom, url }])),
        }}
      />
      <article className="container-page pt-8">
        <Link href={`/${rubrique.slug}`} className="text-[13px] text-ink/85 hover:text-accent">
          ← {rubrique.nom}
        </Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <div>
            <Visuel image={p.image} nom={p.nom} type={p.type} rubrique={p.rubrique} sizes="(min-width: 768px) 440px, 100vw" priority />
            {p.image && <p className="mt-2 text-[11px] text-faint">Illustration Keur Désir (créée par intelligence artificielle) : le produit vendu peut différer.</p>}
          </div>
          <div className="min-w-0">
            <p className="eyebrow">{p.type}</p>
            <h1 className="mt-2 font-serif text-[44px] leading-[0.98] text-balance sm:text-6xl">{p.nom}</h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85">{p.resume}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BoutonsMarchands liens={liens} nom={p.nom} />
              <EnviesButton slug={p.slug} />
            </div>
            <NoteMarchande liens={liens} />

            <h2 className="section-title mt-10">Pourquoi on l&apos;aime</h2>
            <ul className="mt-4 space-y-2 text-[16px] leading-relaxed text-ink/85">
              {p.pourquoi.map((w) => (
                <li key={w} className="border-l-2 border-gold pl-4">{w}</li>
              ))}
            </ul>

            <h2 className="section-title mt-10">Comment l&apos;utiliser</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink/85">{p.usage}</p>

            {(p.matieres.length > 0 || p.couleurs.length > 0) && (
              <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
                {p.matieres.length > 0 && (
                  <>
                    <dt className="text-muted">Matières</dt>
                    <dd>{p.matieres.join(", ")}</dd>
                  </>
                )}
                {p.couleurs.length > 0 && (
                  <>
                    <dt className="text-muted">Couleurs</dt>
                    <dd>{p.couleurs.join(", ")}</dd>
                  </>
                )}
              </dl>
            )}
          </div>
        </div>
      </article>

      {articles.length > 0 && (
        <Section title="Nos articles">
          <ConseilGrid conseils={articles} />
        </Section>
      )}

      {proches.length > 0 && (
        <Section title="Dans la même rubrique" href={`/${rubrique.slug}`} linkLabel={rubrique.nom}>
          <ProduitGrid produits={proches} />
        </Section>
      )}

      {/* Publicité : en fin de fiche, loin des boutons marchands. */}
      <div className="container-page">
        <AdSlot placement="fiche" />
      </div>
    </>
  );
}
