import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { Top10View } from "@/components/top10/Top10View";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { getTop10BySlug, getTop10Produits, getTop10s } from "@/lib/data/top10";
import { breadcrumbLd, itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { paramsOuAucun } from "@/lib/vide";

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsOuAucun(getTop10s());
}

export async function generateMetadata({ params }: PageProps<"/top-10/[slug]">): Promise<Metadata> {
  const top = getTop10BySlug((await params).slug);
  if (!top) return {};
  // Image de partage 1200 × 630 (public/top10/<slug>.jpg), si elle existe.
  const image = existsSync(join(process.cwd(), "public", "top10", `${top.slug}.jpg`)) ? `/top10/${top.slug}.jpg` : null;
  return pageMetadata({ title: top.title, description: top.description, path: `/top-10/${top.slug}`, type: "article", image, imageAlt: top.title });
}

/** Une sélection « Top 10 » : vraie page à part, avec son titre, sa description et ses 10 produits dans le HTML. */
export default async function Top10Page({ params }: PageProps<"/top-10/[slug]">) {
  if (getMaintenance().enabled) return null;
  const top = getTop10BySlug((await params).slug);
  if (!top) notFound();
  const produits = getTop10Produits(top);
  const url = `${siteConfig.url}/top-10/${top.slug}`;
  const structuredData = [
    itemListLd(top.title, produits.map((p) => ({ name: p.nom, url: `${siteConfig.url}${p.path}` }))),
    breadcrumbLd([
      { name: "Accueil", url: siteConfig.url },
      { name: "Top 10", url: `${siteConfig.url}/top-10` },
      { name: top.title, url },
    ]),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <Top10View tops={getTop10s()} top={top} produits={produits} />
    </>
  );
}
