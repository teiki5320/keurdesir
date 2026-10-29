import { PageHeader, Section } from "@/components/layout/Section";
import { ProduitGrid } from "@/components/produit/ProduitCarte";
import { siteConfig } from "@/lib/config";
import { getProduitsDeRubrique, toCarte } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { RUBRIQUES } from "@/lib/rubriques";

export const metadata = pageMetadata({
  title: "La boutique du djongué",
  description: "Tous nos produits du djongué, rangés par rubrique : bine-bine, thiouraye et encens, encensoirs, karité, petits pagnes et coffrets cadeaux.",
  path: "/boutique",
});

/** Boutique : tous les produits, rubrique par rubrique (menu principal). Pas de publicité sur cette page. */
export default function BoutiquePage() {
  if (getMaintenance().enabled) return null;
  const rubriques = RUBRIQUES.map((r) => ({ r, produits: getProduitsDeRubrique(r.slug).map((p) => toCarte(p, "rubrique")) })).filter((x) => x.produits.length > 0);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbLd([{ name: "Accueil", url: siteConfig.url }, { name: "Boutique", url: `${siteConfig.url}/boutique` }])),
        }}
      />
      <PageHeader title="La boutique" intro="Tous nos produits du djongué, choisis un à un et rangés par rubrique.">
        <nav aria-label="Rubriques" className="mt-6 flex flex-wrap gap-2">
          {rubriques.map(({ r }) => (
            <a key={r.slug} href={`#${r.slug}`} className="rounded-full border border-line px-4 py-2 font-mono text-[12px] uppercase hover:border-accent hover:text-accent">
              {r.nom}
            </a>
          ))}
        </nav>
      </PageHeader>
      {rubriques.map(({ r, produits }) => (
        <Section key={r.slug} id={r.slug} title={r.nom} href={`/${r.slug}`} linkLabel="La rubrique">
          <ProduitGrid produits={produits} />
        </Section>
      ))}
    </>
  );
}
