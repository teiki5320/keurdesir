/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import Link from "next/link";
import { withBase } from "@/lib/config";
import type { Conseil } from "@/lib/conseils/article";
import { formatDate } from "@/lib/format";
import { srcSet } from "@/lib/images";
import { getRubrique } from "@/lib/rubriques";

export function ConseilCard({ conseil }: { conseil: Conseil }) {
  return (
    <article className="kd-sweep border-t border-line [background-position:-40%_100%]">
      <Link href={`/conseils/${conseil.slug}`} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-6">
        {conseil.image ? (
          <img
            src={withBase(conseil.image)}
            srcSet={srcSet(conseil.image)}
            sizes="(min-width: 640px) 192px, 96px"
            alt={`Illustration de l'article « ${conseil.title} »`}
            loading="lazy"
            className="aspect-[3/2] w-24 rounded object-cover sm:w-48"
          />
        ) : (
          <span />
        )}
        <span>
          <span className="eyebrow block">
            {getRubrique(conseil.rubrique)?.nom} <span className="text-faint">· {formatDate(conseil.date)}</span>
          </span>
          <span className="mt-2 block font-serif text-[18px] leading-[1.2] group-hover:text-accent sm:text-[22px]">{conseil.title}</span>
          <span className="mt-2 line-clamp-2 block max-w-2xl text-sm text-muted">{conseil.resume}</span>
        </span>
        <span aria-hidden className="text-accent">→</span>
      </Link>
    </article>
  );
}

export function ConseilGrid({ conseils }: { conseils: Conseil[] }) {
  return (
    <div className="border-b border-line">
      {conseils.map((c) => (
        <ConseilCard key={c.slug} conseil={c} />
      ))}
    </div>
  );
}
