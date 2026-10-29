import type { Metadata } from "next";
import { Bientot, PageHeader } from "@/components/layout/Section";
import { Top10Pastilles } from "@/components/top10/Top10View";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { getTop10s } from "@/lib/data/top10";
import { itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

const tops = getTop10s();

export const metadata: Metadata = pageMetadata({
  title: "Nos sélections Top 10",
  description: "Bine-bine, thiouraye, bakhour, encensoirs, karité, petits pagnes et idées cadeaux : nos sélections de dix produits, choisis un à un.",
  path: "/top-10",
  noindex: tops.length === 0,
});

export default function Top10IndexPage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      {tops.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd("Nos sélections Top 10", tops.map((t) => ({ name: t.title, url: `${siteConfig.url}/top-10/${t.slug}` })))) }}
        />
      )}
      <PageHeader title="Nos sélections Top 10" intro="Dix produits par sujet, choisis pour leur qualité, leur beauté et leur fidélité à la tradition. Aucun prix ni avis inventé : seules les boutiques font foi." />
      {tops.length === 0 ? <Bientot>Nos premières sélections arrivent très bientôt.</Bientot> : <div className="container-page"><Top10Pastilles tops={tops} /></div>}
    </>
  );
}
