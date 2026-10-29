import type { Metadata } from "next";
import Link from "next/link";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { Bientot, PageHeader } from "@/components/layout/Section";
import { siteConfig } from "@/lib/config";
import { getConseils } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { RUBRIQUES } from "@/lib/rubriques";

const conseils = getConseils();

export const metadata: Metadata = pageMetadata({
  title: "Nos articles",
  description: "Histoire du djongué, bine-bine, thiouraye, encensoirs, karité et idées cadeaux : tous nos articles, classés par rubrique.",
  path: "/conseils",
  // Tant qu'aucun article n'est paru, la page n'est pas indexée.
  noindex: conseils.length === 0,
});

export default function ConseilsPage() {
  if (getMaintenance().enabled) return null;
  const rubriques = RUBRIQUES.filter((r) => conseils.some((c) => c.rubrique === r.slug));
  return (
    <>
      {conseils.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd("Nos articles", conseils.map((c) => ({ name: c.title, url: `${siteConfig.url}/conseils/${c.slug}` })))) }}
        />
      )}
      <PageHeader title="Nos articles" intro="Nos réponses aux questions que l'on se pose sur le djongué, ses parures, ses parfums et ses soins. Trois nouveaux articles par semaine : le lundi, le mercredi et le vendredi.">
        {rubriques.length > 1 && (
          <nav aria-label="Rubriques" className="mt-6 flex flex-wrap gap-2">
            {rubriques.map((r) => (
              <Link key={r.slug} href={`#${r.slug}`} className="tag">
                {r.nom}
              </Link>
            ))}
          </nav>
        )}
      </PageHeader>
      {conseils.length === 0 && <Bientot>Les premiers articles paraissent très bientôt.</Bientot>}
      <div className="container-page space-y-12">
        {rubriques.map((r) => (
          <section key={r.slug} id={r.slug} className="scroll-mt-24">
            <h2 className="section-title mb-5">{r.nom}</h2>
            <ConseilGrid conseils={conseils.filter((c) => c.rubrique === r.slug)} />
          </section>
        ))}
      </div>
    </>
  );
}
