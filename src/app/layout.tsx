import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ADSENSE_CLIENT, siteConfig } from "@/lib/config";
import { DEFAULT_SHARE_IMAGES } from "@/lib/metadata";
import "./globals.css";

/*
 * Polices du design « Néon Dakar · Rubis », hébergées avec le site (src/fonts, licence SIL OFL) :
 * Unbounded pour les titres, DM Sans pour le texte, Space Mono pour les petites étiquettes,
 * Mr Dafoe pour l'écriture néon (« Désir » et les mots en italique des titres).
 */
const unbounded = localFont({ src: "../fonts/unbounded-latin-wght-normal.woff2", weight: "200 900", variable: "--font-unbounded", display: "swap" });
const dmSans = localFont({
  src: [
    { path: "../fonts/dm-sans-latin-wght-normal.woff2", weight: "100 1000", style: "normal" },
    { path: "../fonts/dm-sans-latin-wght-italic.woff2", weight: "100 1000", style: "italic" },
  ],
  variable: "--font-dmsans",
  display: "swap",
});
const spaceMono = localFont({
  src: [
    { path: "../fonts/space-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/space-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-spacemono",
  display: "swap",
});
const mrDafoe = localFont({ src: "../fonts/mr-dafoe-latin-400-normal.woff2", weight: "400", variable: "--font-mrdafoe", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: DEFAULT_SHARE_IMAGES,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  robots: { "max-image-preview": "large" },
  // Validation du site dans AdSense.
  ...(ADSENSE_CLIENT && { other: { "google-adsense-account": ADSENSE_CLIENT } }),
};

export const viewport: Viewport = {
  themeColor: "#0c0409",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${unbounded.variable} ${dmSans.variable} ${spaceMono.variable} ${mrDafoe.variable} antialiased`} suppressHydrationWarning>
      {ADSENSE_CLIENT && (
        <head>
          {/* Code AdSense : charge les annonces et le bandeau de consentement de Google (réglé dans AdSense). */}
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`} crossOrigin="anonymous" />
        </head>
      )}
      <body className="flex min-h-dvh flex-col">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded focus:bg-surface focus:p-2">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
