import type { Metadata } from "next";
import { Suspense } from "react";
import { EnviesList } from "@/components/envies/EnviesList";
import { PageHeader } from "@/components/layout/Section";
import { getProduits, toCarte } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Mes envies",
  description: "Les produits que vous avez mis de côté sur Keur Désir, gardés dans votre navigateur, sans compte, à partager par WhatsApp.",
  path: "/mes-envies",
  noindex: true,
});

export default function EnviesPage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <PageHeader title="Mes envies" intro="Les produits que vous avez mis de côté. Ils restent dans ce navigateur, sans compte. Partagez la liste pour souffler une idée de cadeau." />
      <Suspense>
        <EnviesList produits={getProduits().map((p) => toCarte(p, "rubrique"))} />
      </Suspense>
    </>
  );
}
