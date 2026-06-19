import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, Stagger, StaggerItem } from "../../_components/Animate";
import { FaqSection } from "../../_components/FaqSection";
import { Footer } from "../../_components/Footer";
import { IconArrow, IconBroadcast, IconCheck, IconChip, IconHandshake, IconShield } from "../../_components/icons";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "IT Services & Managed Technology Solutions in Nigeria",
  description:
    "CICANDA delivers practical IT services across Abuja and Nigeria: network design & deployment, cloud and hardware procurement, and cybersecurity audits & managed services.",
  alternates: { canonical: "https://cicanda.com/services/information-technology" },
  openGraph: {
    title: "IT Services & Managed Technology Solutions in Nigeria | CICANDA",
    description:
      "Network design, cloud and hardware procurement, and cybersecurity managed services for Nigerian organisations. ISO-aligned delivery from Abuja.",
    url: "https://cicanda.com/services/information-technology",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://cicanda.com/services" },
    { "@type": "ListItem", position: 3, name: "Information Technology", item: "https://cicanda.com/services/information-technology" },
  ],
};

const faqs = [
  {
    q: "Do you offer ongoing managed IT support?",
    a: "Yes. Beyond one-off projects, CICANDA provides managed IT services covering network monitoring, helpdesk support, patch management, and vendor liaison, so your team can focus on the work rather than the infrastructure beneath it.",
  },
  {
    q: "Which vendors do you procure hardware and software from?",
    a: "We work with established global vendors and authorised distributors to source servers, networking equipment, end-user devices, and licensed software. We do not tie clients to a single brand; we recommend based on your workload, budget, and support requirements.",
  },
  {
    q: "Do you handle cybersecurity audits?",
    a: "Yes. Our cybersecurity practice covers vulnerability assessments, network penetration reviews, security-policy gap analyses, and remediation planning. We can also stay on as a managed security partner following an audit.",
  },
  {
    q: "Can you design and deploy a network from scratch?",
    a: "Yes. We handle the full cycle: site survey, network architecture, equipment specification and procurement, physical deployment, configuration, and handover documentation, for both new sites and expansion projects.",
  },
  {
    q: "Do you work with small organisations as well as large enterprises?",
    a: "We work with organisations of varying sizes. Our engagements are scoped to the actual need, not to a template. A ten-person office and a hundred-person department receive the same quality of attention and the same senior delivery team.",
  },
  {
    q: "How does an IT engagement typically begin?",
    a: "We start with a short discovery call to understand your environment, the problem you need solved, and any constraints. From there we propose a scope, timeline, and fee structure. There is no obligation until both parties agree in writing.",
  },
];

export default function ITServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Information Technology" },
          ]}
          eyebrow="Service · Information Technology"
          title={
            <>
              IT services built for the work that has to{" "}
              <span style={{ color: "var(--c-blue-500)" }}>just work</span>.
            </>
          }
          lead="From network design and hardware procurement to cybersecurity audits and managed support, CICANDA delivers dependable IT services for Nigerian organisations."
        >
          <Link href="/contact" className="btn btn--white">
            Discuss your IT brief <IconArrow className="arrow" size={16} stroke={2.2} />
          </Link>
          <Link href="/services/media-pr" className="btn btn--ghost" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            View other services
          </Link>
        </PageHero>

        {/* Service areas */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section__head">
                <div>
                  <div className="section__kicker">What we deliver</div>
                  <h2 className="section__title">
                    Three disciplines, <span className="hl">one delivery team</span>.
                  </h2>
                </div>
                <p className="section__lede">
                  Whether the brief is a network refresh, a procurement cycle, or an
                  ongoing security review, the same senior team carries the work from
                  brief to close.
                </p>
              </div>
            </FadeUp>
            <Stagger className="feature-grid">
              <StaggerItem className="feature-card">
                <div className="feature-card__icon">
                  <IconChip size={26} />
                </div>
                <h3>Network Design &amp; Deployment</h3>
                <p>
                  Structured networks designed for your environment and built to
                  last, from site survey to final configuration. We handle LAN,
                  WAN, Wi-Fi, and structured cabling, and we document everything
                  so your team is never left guessing.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Site survey and network architecture",
                    "LAN, WAN and wireless deployment",
                    "Structured cabling and equipment racking",
                    "Configuration, testing and handover documentation",
                    "Ongoing network monitoring and support",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </StaggerItem>

              <StaggerItem className="feature-card">
                <div className="feature-card__icon">
                  <IconArrow size={24} stroke={1.8} />
                </div>
                <h3>Cloud &amp; Hardware Procurement</h3>
                <p>
                  We source, specify, and procure IT equipment and cloud services
                  through authorised channels: no grey market, no inflated
                  margins. From a single server to a full office refresh, we
                  manage the supply chain so you don&rsquo;t have to.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Needs assessment and vendor selection",
                    "Servers, storage, networking and end-user devices",
                    "Licensed software and cloud subscription management",
                    "Procurement, logistics and customs clearance",
                    "Asset management and refresh planning",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </StaggerItem>

              <StaggerItem className="feature-card">
                <div className="feature-card__icon">
                  <IconShield size={26} />
                </div>
                <h3>Cybersecurity Audits &amp; Managed Services</h3>
                <p>
                  A realistic view of your security posture, followed by a
                  practical remediation plan, not a report that sits on a shelf.
                  We can also act as your ongoing managed security partner, keeping
                  defences current as threats evolve.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Vulnerability assessments and penetration reviews",
                    "Security-policy gap analysis",
                    "Remediation planning and implementation",
                    "Managed security monitoring",
                    "Staff security awareness guidance",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </StaggerItem>
            </Stagger>

            {/* CTA strip */}
            <FadeUp delay={0.1}>
              <div className="cta-strip">
                <div>
                  <h3>Ready to talk about your IT environment?</h3>
                  <p>
                    Tell us what you&rsquo;re working with and what needs to
                    improve. We&rsquo;ll come back with a clear proposal: no
                    jargon, no padding.
                  </p>
                </div>
                <div className="cta-strip__actions">
                  <Link href="/contact" className="btn btn--primary">
                    Get in touch <IconArrow className="arrow" size={16} stroke={2.2} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <FaqSection
          heading="Common questions about our IT services."
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
              IT is one of three disciplines we operate. Each is staffed and managed to the same standard.
            </p>
            <div className="service-links">
              <Link href="/services/media-pr" className="service-link-card">
                <div>
                  <h4>Media &amp; PR</h4>
                  <p>Brand strategy, press relations and content production.</p>
                </div>
                <IconArrow size={18} stroke={2} className="arrow" />
              </Link>
              <Link href="/services/reseller-partnerships" className="service-link-card">
                <div>
                  <h4>Reseller &amp; Partnerships</h4>
                  <p>Authorised reselling, procurement and local representation.</p>
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
