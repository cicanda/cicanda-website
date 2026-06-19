import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../_components/FaqSection";
import { Footer } from "../../_components/Footer";
import { IconArrow, IconBroadcast, IconCheck, IconGlobe, IconSpark, IconUsers } from "../../_components/icons";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "Media & PR Services for Nigerian Organisations",
  description:
    "CICANDA provides brand strategy, corporate communications, press relations, and content production for organisations across Nigeria and beyond. PR agency based in Abuja.",
  alternates: { canonical: "https://cicanda.com/services/media-pr" },
  openGraph: {
    title: "Media & PR Services for Nigerian Organisations | CICANDA",
    description:
      "Brand strategy, press relations, and creative content — built for credibility, not noise. CICANDA Media & PR, Abuja.",
    url: "https://cicanda.com/services/media-pr",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://cicanda.com/services" },
    { "@type": "ListItem", position: 3, name: "Media & PR", item: "https://cicanda.com/services/media-pr" },
  ],
};

const faqs = [
  {
    q: "Do you place stories in Nigerian and international press?",
    a: "Yes. We maintain relationships with journalists and editors across Nigerian national and regional titles, as well as relevant trade and international publications. Our approach is earned placement — we pitch stories that the press actually want to run, rather than relying on advertorial.",
  },
  {
    q: "Can you run a launch campaign end-to-end?",
    a: "Yes. We have managed launch campaigns covering strategy, messaging, media relations, content production, and social amplification. We can take a brief from positioning through to post-launch review, or handle specific elements within a wider team.",
  },
  {
    q: "Do you handle corporate communications for regulated industries?",
    a: "Yes. We work with organisations in sectors where messaging accuracy and stakeholder sensitivity matter. We are comfortable with legal review processes, investor communications, and complex multi-audience briefs.",
  },
  {
    q: "What does brand strategy work look like in practice?",
    a: "It typically begins with a review of your current positioning, competitive landscape, and audience perceptions. We then develop a clear brand narrative, key messages, and guidelines for how they are applied across channels — from press materials to social content to internal communications.",
  },
  {
    q: "Do you produce content in-house, or do you outsource?",
    a: "We produce the majority of content in-house — copy, scripts, and creative direction. For photography and video production we work with a trusted network of local partners whose quality and briefability we stand behind.",
  },
];

export default function MediaPrPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Media & PR" },
          ]}
          eyebrow="Service · Media & PR"
          title={
            <>
              Sharper messaging.{" "}
              <span style={{ color: "var(--c-blue-500)" }}>Steadier visibility.</span>
            </>
          }
          lead="Brand strategy, press relations, and content production built on what your audience actually cares about — not what looks impressive in a pitch deck."
        >
          <Link href="/contact" className="btn btn--white">
            Discuss your communications brief <IconArrow className="arrow" size={16} stroke={2.2} />
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
                  Communications that{" "}
                  <span className="hl">land and last</span>.
                </h2>
              </div>
              <p className="section__lede">
                We keep the work focused on credibility rather than volume. Every
                engagement is run by practitioners who understand both the
                Nigerian media landscape and the standards expected by
                international partners.
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-card__icon">
                  <IconSpark size={26} />
                </div>
                <h3>Brand Strategy &amp; Corporate Communications</h3>
                <p>
                  A clear, honest account of who you are and why it matters —
                  built to hold up under scrutiny and translate across every
                  channel. We develop positioning, key messages, and the
                  communications frameworks your team can actually use.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Brand positioning and narrative development",
                    "Key message frameworks",
                    "Stakeholder communications strategy",
                    "Crisis communications planning",
                    "Internal communications guidance",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <IconBroadcast size={26} />
                </div>
                <h3>Press Relations &amp; Media Placement</h3>
                <p>
                  Earned coverage in the publications that matter to your
                  audience — not spray-and-pray distribution. We pitch
                  stories that journalists want to run, and we manage the
                  relationship so your organisation is a reliable source over
                  time.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Press release writing and distribution",
                    "Journalist and editor outreach",
                    "Nigerian and international media placement",
                    "Interview preparation and media training",
                    "Press coverage monitoring and reporting",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <IconUsers size={26} />
                </div>
                <h3>Social, Content Production &amp; Creative Direction</h3>
                <p>
                  Content your audience reads rather than scrolls past.
                  We handle editorial planning, copy, creative direction, and
                  channel management — with a consistent tone that reflects your
                  organisation rather than whatever is trending.
                </p>
                <ul className="feature-card__list">
                  {[
                    "Content strategy and editorial planning",
                    "Copywriting (long and short form)",
                    "Social media management and reporting",
                    "Campaign creative direction",
                    "Thought leadership and byline articles",
                  ].map((b) => (
                    <li key={b}><IconCheck size={14} stroke={2.4} /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA strip */}
            <div className="cta-strip">
              <div>
                <h3>Looking to sharpen your communications?</h3>
                <p>
                  Tell us about your organisation and the audience you need to
                  reach. We will respond with an honest view of what we can
                  do and what it would take.
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
          heading="Common questions about our Media & PR services."
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
              Media &amp; PR is one of three disciplines we operate. Each is staffed and managed to the same standard.
            </p>
            <div className="service-links">
              <Link href="/services/information-technology" className="service-link-card">
                <div>
                  <h4>Information Technology</h4>
                  <p>Network design, procurement and cybersecurity services.</p>
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
