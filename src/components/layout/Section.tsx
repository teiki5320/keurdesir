import Link from "next/link";

export function Section({ title, href, linkLabel = "Tout voir", children, id }: { title: string; href?: string; linkLabel?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="container-page mt-20">
      <div className="mb-7 flex items-baseline justify-between gap-4">
        <h2 className="section-title kd-reveal">{title}</h2>
        {href && (
          <Link href={href} className="font-mono text-[12px] whitespace-nowrap text-gold uppercase hover:text-accent">
            {linkLabel} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <header className="kd-hero container-page pt-12 pb-6">
      <span aria-hidden className="kd-blob kd-blob-1 opacity-60" />
      {eyebrow && <p className="eyebrow kd-in">{"// "}{eyebrow}</p>}
      <h1 className="kd-in mt-3 font-serif text-[34px] leading-[1.02] text-balance uppercase [animation-delay:0.12s] [text-shadow:0_0_24px_rgba(255,43,68,0.55)] sm:text-6xl">{title}</h1>
      {intro && <p className="kd-in mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/85 [animation-delay:0.25s]">{intro}</p>}
      {children}
    </header>
  );
}

/** Message d'une liste encore vide (rubrique, Top 10, articles) : la page reste utile et le dit simplement. */
export function Bientot({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-page mt-6">
      <p className="max-w-2xl rounded-xl border border-dashed border-accent/60 p-5 text-[15px] text-muted">{children}</p>
    </div>
  );
}
