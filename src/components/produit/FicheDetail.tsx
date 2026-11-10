import Link from "next/link";
import { morceaux, partiesFiche, texteSimple } from "@/lib/fiches";
import { jsonLd } from "@/lib/json-ld";
import type { FicheLongue } from "@/lib/types";

/** Texte avec liens internes « [texte](/chemin) », découpé en paragraphes (ligne vide). */
function TexteAvecLiens({ texte }: { texte: string }) {
  return (
    <>
      {texte.split(/\n{2,}/).map((para, i) => (
        <p key={i}>
          {morceaux(para).map((part, j) =>
            typeof part === "string" ? (
              part
            ) : (
              <Link key={j} href={part.href} className="text-accent underline underline-offset-2 hover:text-gold">
                {part.text}
              </Link>
            ),
          )}
        </p>
      ))}
    </>
  );
}

/** Section « En détail » d'une fiche produit (src/lib/fiches) : parties titrées, puis questions fréquentes (FAQPage pour Google). */
export function FicheDetail({ fiche, nom }: { fiche: FicheLongue; nom: string }) {
  return (
    <section aria-labelledby="fiche-detail" className="container-page mt-12 max-w-3xl">
      {fiche.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: fiche.faq.map((q) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: { "@type": "Answer", text: texteSimple(q.reponse) },
              })),
            }),
          }}
        />
      )}
      <h2 id="fiche-detail" className="section-title">
        {nom} en détail
      </h2>
      {partiesFiche(fiche).map((p) => (
        <div key={p.id} className="mt-8">
          <h3 id={p.id} className="font-serif text-xl">
            {p.titre}
          </h3>
          <div className="mt-3 space-y-4 text-[16px] leading-relaxed text-ink/85">
            <TexteAvecLiens texte={p.texte} />
          </div>
        </div>
      ))}
      {fiche.faq.length > 0 && (
        <div className="mt-10">
          <h3 className="font-serif text-xl">Questions fréquentes</h3>
          <dl className="mt-4 space-y-5">
            {fiche.faq.map((q) => (
              <div key={q.question} className="border-t border-ink/15 pt-4">
                <dt className="text-[17px] font-semibold">{q.question}</dt>
                <dd className="mt-1.5 space-y-3 text-[15px] leading-relaxed text-ink/85">
                  <TexteAvecLiens texte={q.reponse} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
