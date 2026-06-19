import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, Stagger, StaggerItem } from "../_components/Animate";
import { Footer } from "../_components/Footer";
import {
  IconArrow,
  IconBroadcast,
  IconCheck,
  IconChip,
  IconHandshake,
  IconShield,
  IconSpark,
  IconUsers,
} from "../_components/icons";
import { JsonLd } from "../_components/JsonLd";
import { Nav } from "../_components/Nav";
import { FaqSection } from "../_components/FaqSection";
import { PageHero } from "../_components/PageHero";

export const metadata: Metadata = {
  title: "Services — Information Technology, Media & PR, Reseller Partnerships",
  description:
    "CICANDA delivers three focused service lines — Information Technology, Media & PR, and Reseller & Partnerships — to organisations across Nigeria and beyond. Same team. Same standard. Every engagement.",
  alternates: { canonical: "https://cicanda.com/services" },
  openGraph: {
    title: "CICANDA Services | IT, Media & PR, Reseller Partnerships",
    description:
      "Three disciplines. One delivery standard. IT services, Media & PR, and Reseller Partnerships for Nigerian organisations.",
    url: "https://cicanda.com/services",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://cicanda.com/services" },
  ],
};

const LINES = [
  {
    num: "01",
    icon: <IconChip size={28} />,
    title: "Information Technology",
    href: "/services/information-technology",
    desc: "Practical, dependable IT for organisations that need infrastructure and systems they can rely on. We handle everything from network design to cybersecurity, with the same senior team across every engagement.",
    bullets: [
      "Network design, deployment & ongoing support",
      "Cloud, hardware & software procurement",
      "Cybersecurity audits & managed security services",
      "Helpdesk, patch management & vendor liaison",
    ],
  },
  {
    num: "02",
    icon: <IconBroadcast size={28} />,
    title: "Media & PR",
    href: "/services/media-pr",
    desc: "Sharper messaging and steady earned visibility. We build communication strategies grounded in what your audience actually needs to hear — not what looks good in a deck.",
    bullets: [
      "Brand strategy & corporate communications",
      "Press relations and media placement",
      "Social media, content production & creative direction",
      "Crisis communications & reputation management",
    ],
  },
  {
    num: "03",
    icon: <IconHandshake size={28} />,
    title: "Reseller & Partnerships",
    href: "/services/reseller-partnerships",
    desc: "A trusted, authorised route to international vendors. We manage sourcing, licensing and channel relationships end-to-end, so your organisation gets the right technology at the right terms.",
    bullets: [
      "Authorised reselling for global technology vendors",
      "Procurement, logistics & licence management",
      "Local representation for foreign partners",
      "Channel development & commercial negotiation",
    ],
  },
];

const WHY = [
  {
    icon: <IconShield size={20} />,
    title: "Senior delivery every time",
    body: "No bait-and-switch. The team that scopes your engagement delivers it.",
  },
  {
    icon: <IconSpark size={20} />,
    title: "Deliberately focused",
    body: "Three service lines, not thirty. Depth of expertise over breadth of promises.",
  },
  {
    icon: <IconUsers size={20} />,
    title: "Built for Nigerian organisations",
    body: "Local context, operational knowledge, and relationships that matter here.",
  },
];

const faqs = [
  {
    q: "Can CICANDA work across more than one service line at once?",
    a: "Yes. Several of our clients engage us across two or three disciplines simultaneously. We manage cross-service engagements under a single point of contact, which reduces coordination overhead and ensures a consistent standard of delivery across every workstream.",
  },
  {
    q: "How quickly do you respond to an initial enquiry?",
    a: "We respond to all enquiries within one business day. For urgent briefs, please note that in the subject line of your message and we will aim to respond the same day.",
  },
  {
    q: "Are engagements fixed-scope or ongoing?",
    a: "Both, depending on what the brief requires. Some clients engage us for a defined project — a network deployment, a press campaign, a procurement cycle. Others retain us on an ongoing basis for managed IT, PR, or partnership support. We are happy with either structure.",
  },
  {
    q: "Which service line is right for us?",
    a: "If you are unsure which discipline best fits your need, reach out through the contact page with a short description of what you are trying to achieve. We will tell you honestly which service line applies — and equally honestly if none of them do.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          eyebrow="Our services"
          title={
            <>
              Three disciplines.{" "}
              <span style={{ color: "var(--c-blue-500)" }}>One delivery standard.</span>
            </>
          }
          lead="CICANDA operates across Information Technology, Media & PR, and Reseller & Partnerships. Each line is staffed and managed to the same standard — the same team, the same rigour, on every engagement."
        >
          <Link href="/contact" className="btn btn--white">
            Discuss your brief <IconArrow className="arrow" size={16} stroke={2.2} />
          </Link>
        </PageHero>

        {/* Service lines */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section__head">
                <div>
                  <div className="section__kicker">What we deliver</div>
                  <h2 className="section__title">
                    Focused expertise,{" "}
                    <span className="hl">not a catalogue</span>.
                  </h2>
                </div>
                <p className="section__lede">
                  We have kept the offering deliberately narrow so every brief
                  receives senior attention. There is no junior team behind the
                  scenes — the same practitioners who scope the work deliver it.
                </p>
              </div>
            </FadeUp>

            <Stagger className="svc-overview">
              {LINES.map((s) => (
                <StaggerItem key={s.num} className="svc-overview__card">
                  <div className="svc-overview__top">
                    <span className="svc__num">{s.num}</span>
                    <div className="svc__icon">{s.icon}</div>
                  </div>
                  <h3>{s.title}</h3>
                  <p className="svc__desc">{s.desc}</p>
                  <ul className="svc__bullets">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <IconCheck />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="svc-overview__cta">
                    Learn more <IconArrow size={14} stroke={2.2} className="arrow" />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Why CICANDA */}
        <section className="section section--soft">
          <div className="container">
            <FadeUp>
              <div className="section__kicker">Why CICANDA</div>
              <h2 className="section__title" style={{ maxWidth: 520 }}>
                What sets the engagement apart.
              </h2>
            </FadeUp>
            <Stagger className="why-grid">
              {WHY.map((w) => (
                <StaggerItem key={w.title} className="why-card">
                  <div className="pillar__icon">{w.icon}</div>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.1}>
              <div className="cta-strip" style={{ marginTop: 48 }}>
                <div>
                  <h3>Ready to work with a team that delivers?</h3>
                  <p>
                    Tell us what you need. We respond to all enquiries within one business day.
                  </p>
                </div>
                <div className="cta-strip__actions">
                  <Link href="/contact" className="btn btn--primary">
                    Contact us <IconArrow className="arrow" size={16} stroke={2.2} />
                  </Link>
                  <Link href="/about" className="btn btn--ghost">
                    About CICANDA
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <FaqSection
          heading="Common questions about working with us."
          items={faqs}
        />
      </main>
      <Footer />
    </>
  );
}
