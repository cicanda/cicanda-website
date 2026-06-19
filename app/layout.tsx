import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CookieBanner } from "./_components/CookieBanner";
import { JsonLd } from "./_components/JsonLd";
import { PageTransition } from "./_components/PageTransition";
import { ScrollProgress } from "./_components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://cicanda.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | CICANDA",
    default: "CICANDA · Creating reliable solutions",
  },
  description:
    "CICANDA Limited delivers Information Technology, Media & PR, and Reseller & Partnership services to organisations across Nigeria and beyond. Headquartered in Abuja.",
  keywords: [
    "IT services Abuja",
    "managed IT services Nigeria",
    "PR agency Abuja",
    "media and PR firm Nigeria",
    "authorised technology reseller Nigeria",
    "corporate communications Nigeria",
  ],
  authors: [{ name: "CICANDA Limited", url: SITE_URL }],
  creator: "CICANDA Limited",
  openGraph: {
    type: "website",
    siteName: "CICANDA",
    locale: "en_GB",
    url: SITE_URL,
    title: "CICANDA · Creating reliable solutions",
    description:
      "Information Technology, Media & PR, and Reseller partnerships, delivered reliably from Abuja, Nigeria.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CICANDA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CICANDA · Creating reliable solutions",
    description:
      "Information Technology, Media & PR, and Reseller partnerships, delivered reliably from Abuja, Nigeria.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "CICANDA Limited",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/cicanda-logo.svg`,
  },
  email: "hello@cicanda.com",
  telephone: ["+2347065622760", "+385925067719"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aco Housing Estate Complex",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <JsonLd data={orgSchema} />
        <ScrollProgress />
        <PageTransition>{children}</PageTransition>
        <CookieBanner gaId={GA_ID} />
      </body>
    </html>
  );
}
