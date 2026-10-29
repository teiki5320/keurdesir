"use client";

import { Heart } from "lucide-react";
import { useEnvies } from "@/lib/envies";

/** « Ajouter à mes envies » / « Dans mes envies ». */
export function EnviesButton({ slug, compact = false, className = "" }: { slug: string; compact?: boolean; className?: string }) {
  const { has, toggle } = useEnvies();
  const dedans = has(slug);
  const label = dedans ? "Dans mes envies" : "Ajouter à mes envies";
  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={dedans}
      aria-label={compact ? label : undefined}
      title={compact ? label : undefined}
      className={
        compact
          ? `flex size-11 items-center justify-center rounded-full border border-accent/70 bg-paper/80 backdrop-blur transition hover:text-accent hover:shadow-[0_0_14px_rgba(255,43,68,0.6)] ${dedans ? "text-accent shadow-[0_0_14px_rgba(255,43,68,0.6)]" : "text-ink"} ${className}`
          : `btn-secondary min-h-11 ${dedans ? "border-accent text-accent" : ""} ${className}`
      }
    >
      <Heart key={dedans ? "oui" : "non"} className={`size-4 ${dedans ? "fill-current [animation:kd-beat_0.6s_ease-out]" : ""}`} aria-hidden />
      {!compact && label}
    </button>
  );
}
