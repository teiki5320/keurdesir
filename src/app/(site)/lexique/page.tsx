import type { Metadata } from "next";
import Link from "next/link";
import { Bientot, PageHeader } from "@/components/layout/Section";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { anchorId } from "@/lib/conseils/article";
import { jsonLd } from "@/lib/json-ld";
import { LEXIQUE } from "@/lib/lexique";
import { pageMetadata } from "@/lib/metadata";
import { getRubrique } from "@/lib/rubriques";

const mots = [...LEXIQUE].sort((a, b) => a.mot.localeCompare(b.mot, "fr"));

export const metadata: Metadata = pageMetadata({
  title: "Lexique du djongué",
  description: "Djongué, bine-bine, thiouraye, bakhour, badiène : les mots du djongué et de l'art de recevoir sénégalais, expliqués simplement.",
  path: "/lexique",
  noindex: mots.length === 0,
});

export default function LexiquePage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      {mots.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "DefinedTermSet",
              name: "Lexique du djongué",
              url: `${siteConfig.url}/lexique`,
              hasDefinedTerm: mots.map((m) => ({ "@type": "DefinedTerm", name: m.mot, description: m.definition })),
            }),
          }}
        />
      )}
      <PageHeader title="Lexique du djongué" intro="Les mots du djongué, souvent venus du wolof, expliqués simplement. Chaque mot renvoie vers sa rubrique." />
      {mots.length === 0 ? (
        <Bientot>Le lexique arrive très bientôt.</Bientot>
      ) : (
        <dl className="container-page max-w-3xl border-b border-line">
          {mots.map((m) => (
            <div key={m.mot} id={anchorId(m.mot)} className="scroll-mt-24 border-t border-line py-5">
              <dt className="font-serif text-[28px] leading-none">
                {m.mot}
                {m.variantes && <span className="ml-2 font-sans text-sm text-muted">({m.variantes.join(", ")})</span>}
              </dt>
              <dd className="mt-2 text-[16px] leading-relaxed text-ink/85">
                {m.definition}{" "}
                <Link href={`/${m.rubrique}`} className="text-accent underline underline-offset-2 hover:text-ink">
                  {getRubrique(m.rubrique)?.nom}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}
