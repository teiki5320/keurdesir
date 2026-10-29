import Link from "next/link";

export function Section({ title, href, linkLabel = "Tout voir", children, id }: { title: string; href?: string; linkLabel?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="container-page mt-16">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="section-title">{title}</h2>
        {href && (
          <Link href={href} className="text-[13px] whitespace-nowrap text-muted hover:text-accent">
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
    <header className="container-page pt-10 pb-6">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-2 font-serif text-[52px] leading-[0.95] text-balance sm:text-7xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink/80">{intro}</p>}
      {children}
    </header>
  );
}

/** Message d'une liste encore vide (rubrique, Top 10, articles) : la page reste utile et le dit simplement. */
export function Bientot({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-page mt-6">
      <p className="max-w-2xl rounded-xl border border-dashed border-line-strong p-5 text-[15px] text-muted">{children}</p>
    </div>
  );
}
