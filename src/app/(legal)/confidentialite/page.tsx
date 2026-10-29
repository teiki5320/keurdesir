import type { Metadata } from "next";
import { EmailLink } from "@/components/layout/EmailLink";
import { LegalPage } from "@/components/layout/LegalPage";
import { legalConfig, siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: "Données personnelles, cookies et publicité Google sur Keur Désir : ce qui est collecté, pourquoi, et quels sont vos droits.",
  path: "/confidentialite",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="29 octobre 2026">
      <p>
        {legalConfig.companyName} (« nous ») protège vos données personnelles, traitées conformément au Règlement général
        sur la protection des données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        {legalConfig.companyName}, {legalConfig.address}. Contact : <EmailLink email={siteConfig.contactEmail} />.
      </p>

      <h2>Données collectées et finalités</h2>
      <p>Le site ne comporte ni compte, ni formulaire. Des données personnelles sont traitées dans les cas suivants.</p>
      <ul>
        <li>
          <strong>Messages envoyés à l&apos;adresse de contact</strong> : votre adresse e-mail et le contenu de votre
          message, pour vous répondre. Base légale : intérêt légitime (répondre à votre demande).
        </li>
        <li>
          <strong>Journaux techniques de l&apos;hébergeur</strong> : l&apos;hébergeur ({legalConfig.hostName}) traite
          l&apos;adresse IP et les informations techniques de connexion pour délivrer les pages et protéger le site. Base
          légale : intérêt légitime (sécurité du site).
        </li>
        <li>
          <strong>Publicité (Google AdSense)</strong> : certaines pages affichent des annonces fournies par Google (voir la
          partie « Publicité »).
        </li>
      </ul>
      <p>Nous ne revendons jamais vos données. Le lien de partage de la liste d&apos;envies ne contient que les produits choisis.</p>

      <h2>Durées de conservation</h2>
      <ul>
        <li>Messages de contact : le temps de traiter la demande, puis 3 ans au plus.</li>
        <li>Journaux techniques : selon la politique de l&apos;hébergeur, quelques jours en général.</li>
        <li>Liste d&apos;envies : dans votre navigateur uniquement, jusqu&apos;à ce que vous la vidiez.</li>
      </ul>

      <h2>Destinataires et sous-traitants</h2>
      <p>
        Vos données sont destinées à nos services internes et à nos sous-traitants techniques (hébergement :{" "}
        {legalConfig.hostName} ; messagerie : IONOS). Pour la publicité, Google et ses partenaires reçoivent directement les
        données décrites plus bas. Les transferts hors de l&apos;Union européenne (Cloudflare et Google, États-Unis) sont
        encadrés par le cadre de protection des données UE–États-Unis et par des clauses contractuelles types.
      </p>

      <h2 id="publicite">Publicité (Google AdSense)</h2>
      <p>
        Les fiches produits, les pages rubriques et les articles peuvent afficher des annonces signalées « Publicité »,
        choisies et diffusées par Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande). Nous ne
        recevons aucune donnée personnelle de Google sur vous, seulement des statistiques globales.
      </p>
      <ul>
        <li>
          <strong>Votre choix d&apos;abord</strong> : à votre première visite, un bandeau de Google vous demande votre accord.
          Vous pouvez changer d&apos;avis à tout moment avec le lien « Gérer mes cookies » en bas de chaque page.
        </li>
        <li>
          <strong>Si vous acceptez</strong> : Google et ses partenaires, listés dans le bandeau, peuvent déposer et lire des
          cookies pour afficher des annonces, les personnaliser, en mesurer l&apos;efficacité et lutter contre la fraude.
          Base légale : votre consentement.
        </li>
        <li>
          <strong>Si vous refusez</strong> : Google peut afficher des annonces limitées, sans cookie publicitaire, ou aucune
          annonce. Le site reste entièrement accessible.
        </li>
        <li>
          Pour en savoir plus :{" "}
          <a href="https://policies.google.com/technologies/partner-sites?hl=fr">comment Google utilise les données des sites partenaires</a>.
        </li>
      </ul>

      <h2>Liens vers Amazon et Etsy</h2>
      <p>
        Les boutons « Voir sur Amazon » ouvrent Amazon.fr avec notre identifiant de partenaire. Les boutons « Voir sur
        Etsy » passent par Awin, qui enregistre le clic pour attribuer une éventuelle commission, puis ouvrent Etsy. Sur ces
        sites, vos données et les cookies relèvent de leurs propres politiques de confidentialité.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et
        de portabilité de vos données. Pour les exercer : <EmailLink email={siteConfig.contactEmail} />. Vous pouvez
        introduire une réclamation auprès de la CNIL (www.cnil.fr).
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        Le site lui-même ne dépose aucun cookie de mesure d&apos;audience ni de réseau social. Les seuls cookies sont ceux de
        la publicité Google, déposés <strong>uniquement si vous les acceptez</strong>.
      </p>
      <ul>
        <li><strong>Choix de consentement</strong> (cookie de Google) : mémorise votre réponse au bandeau.</li>
        <li><strong>Cookies publicitaires de Google et de ses partenaires</strong> : seulement avec votre accord.</li>
        <li><strong>Liste d&apos;envies</strong> (stockage local de votre navigateur) : uniquement sur votre appareil.</li>
      </ul>
    </LegalPage>
  );
}
