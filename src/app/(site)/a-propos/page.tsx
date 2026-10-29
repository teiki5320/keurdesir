import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/layout/EmailLink";
import { PageHeader } from "@/components/layout/Section";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "À propos et charte éditoriale",
  description: "Qui écrit Keur Désir, comment nous choisissons les produits et notre charte : culture, élégance et bien-être, sans aucun contenu explicite.",
  path: "/a-propos",
});

export default function AProposPage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <PageHeader title="À propos" intro="Keur Désir est un guide du djongué pour la diaspora africaine en France et pour toutes celles et ceux que ces traditions intriguent." />
      <div className="container-page prose-text">
        <h2>Notre projet</h2>
        <p>
          « Keur » veut dire « maison » en wolof. Keur Désir est une maison ouverte sur le djongué, l&apos;art de plaire, de
          prendre soin de soi et de bien recevoir, tel qu&apos;on le pratique au Sénégal et en Afrique de l&apos;Ouest. Nous
          racontons ses parures, ses parfums, ses soins et ses gestes avec fierté et avec respect.
        </p>
        <h2>Notre charte</h2>
        <ul>
          <li>Nous parlons de culture, d&apos;élégance, de séduction, d&apos;ambiance et de bien-être.</li>
          <li>
            Le site ne publie aucun contenu explicite et ne présente aucun produit réservé aux adultes. Nos visuels
            montrent des matières, des couleurs et des objets, jamais de corps.
          </li>
          <li>Tous nos textes sont écrits par nous. Nous n&apos;inventons ni prix, ni note, ni avis de clients.</li>
          <li>Nous ne promettons aucun effet sur la santé : les soins présentés sont des produits de beauté et de confort.</li>
        </ul>
        <h2>Comment nous choisissons les produits</h2>
        <p>
          Nous retenons des produits pour leur qualité, leur beauté et leur fidélité à la tradition, en privilégiant les
          artisans quand c&apos;est possible. Les boutons « Voir sur Amazon » et « Voir sur Etsy » sont des liens partenaires :
          ils nous rémunèrent sur les achats, sans surcoût pour vous, et ne changent pas nos choix. Le détail figure dans les{" "}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
        <h2>Nous écrire</h2>
        <p>
          Une erreur, une tradition à raconter, une artisane à faire connaître ? Écrivez-nous : <EmailLink email={siteConfig.contactEmail} />.
        </p>
      </div>
    </>
  );
}
