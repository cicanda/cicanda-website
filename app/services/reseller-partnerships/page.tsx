import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../_components/FaqSection";
import { Footer } from "../../_components/Footer";
import { IconArrow, IconCheck, IconGlobe, IconHandshake, IconShield, IconUsers } from "../../_components/icons";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "Authorised Technology Reseller & Partnership Services in Nigeria",
  description:
    "CICANDA is an authorised technology reseller offering procurement, logistics, licensing, and local representation for foreign vendors entering the Nigerian market.",
  alternates: { canonical: "https://cicanda.com/services/reseller-partnerships" },
  openGraph: {
    title: "Authorised Technology Reseller & Partnerships in Nigeria | CICANDA",
    description:
      "A trusted route to international vendors. Sourcing, licensing, and channel partnerships handled end-to-end in Nigeria.",
    url: "https://cicanda.com/services/reseller-partnerships",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://cicanda.com/services" },
    { "@type": "ListItem", position: 3, name: "Reseller & Partnerships", item: "https://cicanda.com/services/reseller-partnerships" },
  ],
};

const faqs = [
  {
    q: "How does authorised reselling work?",
    a: "We source products directly through authorised distribution channels and sell them to Nigerian organisations with full warranty, support, and documentation intact. Clients benefit from legitimate licensing, proper import clearance, and a local point of contact for any post-sale issues.",
  },
  {
    q: "Can you represent a foreign vendor entering Nigeria?",
    a: "Yes. We can act as your in-country representative: handling client relationships, logistics, regulatory considerations, and local market intelligence. For vendors without an established Nigerian presence, this provides a credible local voice without the overhead of setting up an office.",
  },
  {
    q: "What product categories do you resell?",
    a: "We currently focus on hardware (networking equipment, servers, end-user devices), licensed software, and cloud services. We are selective about the vendors we work with and prioritise categories where we can provide genuine post-sale support rather than just fulfilling a transaction.",
  },
  {
    q: "How do you handle procurement logistics and customs?",
    a: "We manage the full import chain: purchase orders, freight forwarding, customs documentation, duty payments, and last-mile delivery. We work with established logistics partners and are experienced in the Nigerian import environment.",
  },
  {
    q: "Do you manage software licence renewals?",
    a: "Yes. We track licence terms and renewal dates for clients and flag upcoming expirations well in advance. We can also audit existing licence estates to identify gaps or redundancies before they become a compliance issue.",
  },
];

export default function ResellerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Reseller & Partnerships" },
          ]}
          eyebrow="Service · Reseller & Partnerships"
          title={
            <>
              A trusted route to{" "}
              <span style={{ color: "var(--c-blue-500)" }}>international vendors</span>.
            </>
          }
          lead="Authorised reselling, procurement, logistics, and local representation, handled end-to-end so your organisation gets what it ordered, legitimately, on time."
        >
          <Link href="/contact" className="btn btn--white">
            Discuss your procurement brief <IconArrow className="arrow" size={16} stroke={2.2} />
          </Link>
          <Link href="/services/information-technology" className="btn btn--ghost" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            View other services
          </Link>
        </PageHero>

        {/* Service areas */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <div>
                <div className="section__kicker">What we deliver</div>
                <h2 className="section__title">
                  End-to-end from{" "}
                  <span className="hl">vendor to your door</span>.
                </h2>
              </div>
              <p className="section__lede">
                Whether you need a single licensed product or a long-term supply
                relationship with an international vendor, we manage the full
                commercial and logistical chain in Nigeria.
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-card__icon">
                  <IconShield size={26} />
                </div>
                <h3>Authorised Reselling</h3>
                <p>
                  Legitimate product sourced through authorised channels,
                  complete with warranty, proper documentation, and a local
                  contact who can actually help when something goes wrong.
                  No grey market risk, no licence disputes.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Authorised distribution partnerships",
                    "Hardware, software and cloud services",
                    "Full warranty and documentation",
                    "Post-sale support coordination",
                    "Licence compliance assurance",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <IconHandshake size={26} />
                </div>
                <h3>Procurement, Logistics &amp; Licence Management</h3>
                <p>
                  We manage the full procurement cycle: needs assessment, vendor
                  selection, purchase orders, freight forwarding, customs
                  clearance, delivery, and asset registration. We also track
                  licence terms so renewals never come as a surprise.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Purchase order management",
                    "Freight forwarding and customs clearance",
                    "Last-mile delivery across Nigeria",
                    "Asset register maintenance",
                    "Licence tracking and renewal management",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <IconGlobe size={26} />
                </div>
                <h3>Local Representation for Foreign Partners</h3>
                <p>
                  For international vendors without an established Nigerian
                  presence, we act as your in-country representative, building
                  client relationships, navigating the local market, and
                  providing the ground-level intelligence that remote teams
                  cannot replicate.
                </p>
                <ul className="feature-card__list">
                  {[
                    "In-country commercial representation",
                    "Client relationship management",
                    "Local market intelligence and reporting",
                    "Regulatory and compliance guidance",
                    "Sales channel development",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA strip */}
            <div className="cta-strip">
              <div>
                <h3>Ready to source or partner through Nigeria?</h3>
                <p>
                  Tell us what you need to procure or what market access you
                  are looking to establish. We will respond with a clear view of
                  how we can help and what it would cost.
                </p>
              </div>
              <div className="cta-strip__actions">
                <Link href="/contact" className="btn btn--primary">
                  Get in touch <IconArrow className="arrow" size={16} stroke={2.2} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          heading="Common questions about Reseller & Partnerships."
          items={faqs}
        />

        {/* Related services */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__kicker">Also from CICANDA</div>
            <h2 className="section__title" style={{ maxWidth: 480, marginBottom: 8 }}>
              Our other service lines.
            </h2>
            <p style={{ fontSize: 16, color: "var(--c-ink-2)", marginBottom: 0 }}>
              Reseller &amp; Partnerships is one of three disciplines we operate. Each is staffed and managed to the same standard.
            </p>
            <div className="service-links">
              <Link href="/services/information-technology" className="service-link-card">
                <div>
                  <h4>Information Technology</h4>
                  <p>Network design, procurement and cybersecurity services.</p>
                </div>
                <IconArrow size={18} stroke={2} className="arrow" />
              </Link>
              <Link href="/services/media-pr" className="service-link-card">
                <div>
                  <h4>Media &amp; PR</h4>
                  <p>Brand strategy, press relations and content production.</p>
                </div>
                <IconArrow size={18} stroke={2} className="arrow" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
