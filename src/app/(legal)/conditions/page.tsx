import type { Metadata } from "next";
import { EmailLink } from "@/components/layout/EmailLink";
import { LegalPage } from "@/components/layout/LegalPage";
import { legalConfig, siteConfig } from "@/lib/config";
import { AMAZON_DISCLOSURE, ETSY_DISCLOSURE } from "@/lib/liens";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Conditions générales d'utilisation",
  description: "Conditions d'utilisation du site Keur Désir : articles, sélections de produits et liens partenaires vers Amazon et Etsy.",
  path: "/conditions",
});

export default function TermsPage() {
  const l = legalConfig;
  return (
    <LegalPage title="Conditions générales d'utilisation" updated="29 octobre 2026">
      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes conditions générales d&apos;utilisation (CGU) encadrent l&apos;accès au site {siteConfig.url}, édité
        par {l.companyName}, {l.legalForm}, dont le siège est situé {l.address} (ci-après « l&apos;Éditeur »). Le site
        présente le djongué et ses traditions, des articles et des sélections de produits avec des liens vers Amazon.fr et
        Etsy. Utiliser le site vaut acceptation des présentes CGU.
      </p>

      <h2>Article 2 — Accès au site</h2>
      <p>
        Le site est accessible gratuitement, sans inscription. L&apos;Éditeur peut suspendre l&apos;accès, notamment pour
        maintenance, sans que sa responsabilité puisse être engagée.
      </p>

      <h2>Article 3 — Le site ne vend aucun produit</h2>
      <p>
        L&apos;Éditeur ne vend, n&apos;expédie ni ne facture aucun produit. Les boutons « Voir sur Amazon » et « Voir sur
        Etsy » renvoient vers ces boutiques : la vente est conclue entre l&apos;acheteur et la boutique ou le vendeur, selon
        leurs propres conditions. La livraison, le droit de rétractation, les garanties et le service client relèvent de ce
        vendeur. Seul le prix indiqué sur la boutique au moment de l&apos;achat fait foi.
      </p>
      <p>{AMAZON_DISCLOSURE}</p>
      <p>{ETSY_DISCLOSURE}</p>

      <h2>Article 4 — Contenus</h2>
      <p>
        Les articles et sélections reflètent l&apos;avis de la rédaction. Le site ne publie aucun contenu explicite
        et ne présente aucun produit réservé aux adultes. Les visuels sont des illustrations créées par intelligence
        artificielle, et non les photos des produits vendus. Les produits présentés ne remplacent aucun avis médical.
      </p>

      <h2>Article 5 — Propriété intellectuelle</h2>
      <p>
        Les textes et éléments graphiques du site sont protégés par le droit de la propriété intellectuelle. Toute
        reproduction sans autorisation préalable est interdite, hormis le partage d&apos;un lien vers une page du site.
      </p>

      <h2>Article 6 — Responsabilité</h2>
      <p>
        L&apos;Éditeur s&apos;efforce de fournir des informations exactes mais ne peut garantir l&apos;absence d&apos;erreur.
        Il n&apos;est pas responsable du contenu des sites vers lesquels renvoient les liens, notamment Amazon.fr et Etsy.
      </p>

      <h2>Article 7 — Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français. Pour toute question : <EmailLink email={siteConfig.contactEmail} />.
      </p>
    </LegalPage>
  );
}
