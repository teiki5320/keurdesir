/** Nom du site en lettres (logo provisoire, en attendant le logo définitif). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif leading-none ${className}`}>
      Keur <span className="text-accent italic">Désir</span>
    </span>
  );
}
