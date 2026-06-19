import type { Metadata } from "next";
import { Contact } from "../_components/Contact";
import { FaqSection } from "../_components/FaqSection";
import { Footer } from "../_components/Footer";
import { JsonLd } from "../_components/JsonLd";
import { Nav } from "../_components/Nav";
import { PageHero } from "../_components/PageHero";

export const metadata: Metadata = {
  title: "Contact CICANDA: Get in Touch",
  description:
    "Contact CICANDA Limited for IT services, Media & PR, or Reseller partnerships. Our team responds within one business day. Office hours: Mon–Fri, 09:00–18:00 WAT.",
  alternates: { canonical: "https://cicanda.com/contact" },
  openGraph: {
    title: "Contact CICANDA | Get in Touch",
    description:
      "Reach the CICANDA team for IT services, Media & PR, or Reseller partnerships. We respond within one business day.",
    url: "https://cicanda.com/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://cicanda.com/contact" },
  ],
};

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We respond to all enquiries within one business day. Office hours are Monday to Friday, 09:00–18:00 WAT. Messages received outside those hours will be picked up on the next working morning.",
  },
  {
    q: "Are you currently taking on new engagements?",
    a: "Yes. We are accepting new engagements for Q2 and Q3 2026. If your timeline extends beyond that, we are still happy to begin a conversation and schedule accordingly.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We work with Nigerian organisations and with international partners and vendors who need a credible, capable presence in Nigeria. Our Zagreb line also allows us to support European clients with Nigerian operations or interests.",
  },
  {
    q: "What should I include in my first message?",
    a: "A brief description of what you are working on, the service area you think is relevant (IT, Media & PR, or Reseller), and any timing constraints we should know about. You do not need a detailed brief to start; a few sentences is enough for us to respond meaningfully.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          eyebrow="Contact CICANDA"
          title={
            <>
              Tell us what you&rsquo;re building.
            </>
          }
          lead="We respond to all enquiries within one business day. Use the form below, or reach the team directly by phone or email."
        />

        <Contact />

        <FaqSection
          heading="Before you reach out."
          items={faqs}
        />
      </main>
      <Footer />
    </>
  );
}
