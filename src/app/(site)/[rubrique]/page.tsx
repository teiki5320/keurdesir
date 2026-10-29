import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { ALireAussi } from "@/components/layout/ALireAussi";
import { Bientot, PageHeader, Section } from "@/components/layout/Section";
import { ProduitGrid } from "@/components/produit/ProduitCarte";
import { Top10Pastilles } from "@/components/top10/Top10View";
import { suivantsEnBoucle } from "@/lib/boucle";
import { siteConfig } from "@/lib/config";
import { getConseilsDeRubrique } from "@/lib/data/conseils";
import { getProduitsDeRubrique, toCarte } from "@/lib/data/produits";
import { getGuideRubrique } from "@/lib/data/rubriques";
import { getMaintenance } from "@/lib/data/settings";
import { getTop10sDeRubrique } from "@/lib/data/top10";
import { breadcrumbLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { getRubrique, RUBRIQUES } from "@/lib/rubriques";

export const dynamicParams = false;

export function generateStaticParams() {
  return RUBRIQUES.map((r) => ({ rubrique: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[rubrique]">): Promise<Metadata> {
  const r = getRubrique((await params).rubrique);
  if (!r) return {};
  return pageMetadata({ title: r.nom, description: r.description, path: `/${r.slug}` });
}

/** Page d'une rubrique : présentation, produits, Top 10 et articles de la rubrique. */
export default async function RubriquePage({ params }: PageProps<"/[rubrique]">) {
  if (getMaintenance().enabled) return null;
  const r = getRubrique((await params).rubrique);
  if (!r) notFound();
  const produits = getProduitsDeRubrique(r.slug).map((p) => toCarte(p, "rubrique"));
  const tops = getTop10sDeRubrique(r.slug);
  const conseils = getConseilsDeRubrique(r.slug);
  const autres = suivantsEnBoucle(RUBRIQUES, (x) => x.slug === r.slug, 3);
  const guide = getGuideRubrique(r.slug);
  const vide = produits.length === 0 && tops.length === 0 && conseils.length === 0;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbLd([{ name: "Accueil", url: siteConfig.url }, { name: r.nom, url: `${siteConfig.url}/${r.slug}` }])),
        }}
      />
      <PageHeader eyebrow="Rubrique" title={r.nom} intro={r.chapo} />
      {guide && <div className="container-page prose-text mt-4" dangerouslySetInnerHTML={{ __html: guide }} />}
      {vide && <Bientot>Nos premiers articles et nos sélections de cette rubrique arrivent très bientôt.</Bientot>}

      {conseils.length > 0 && (
        <Section title="Nos articles">
          <ConseilGrid conseils={conseils} />
        </Section>
      )}

      {tops.length > 0 && (
        <Section title="Nos sélections Top 10">
          <Top10Pastilles tops={tops} />
        </Section>
      )}

      {produits.length > 0 && (
        <Section title="Les produits de la rubrique">
          <ProduitGrid produits={produits} />
        </Section>
      )}

      {(!vide || guide) && (
        <div className="container-page">
          <AdSlot placement="rubrique" />
        </div>
      )}

      <ALireAussi titre="Les autres rubriques" liens={autres.map((x) => ({ href: `/${x.slug}`, nom: x.nom }))} />
    </>
  );
}
