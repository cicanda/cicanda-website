import type { Metadata } from "next";
import Link from "next/link";
import { makeBreadcrumbSchema } from "../_lib/schema";
import { FadeUp, Stagger, StaggerItem } from "../_components/Animate";
import { Footer } from "../_components/Footer";
import { IconArrow, IconGlobe, IconShield, IconSpark, IconUsers } from "../_components/icons";
import { JsonLd } from "../_components/JsonLd";
import { Nav } from "../_components/Nav";
import { PageHero } from "../_components/PageHero";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About CICANDA: Built in Abuja for Work That Has to Just Work",
  description:
    "CICANDA Limited was founded by operators who had spent years watching good projects stall on bad delivery. We deliver Information Technology, Media & PR, and Reseller partnerships from Abuja, Nigeria, with reach into Europe.",
  alternates: { canonical: "https://cicanda.com/about" },
  openGraph: {
    title: "About CICANDA | Creating reliable solutions",
    description:
      "Founded by operators in Abuja, Nigeria. Three service lines (IT, Media & PR, and Reseller partnerships) delivered to the same standard on every engagement.",
    url: "https://cicanda.com/about",
  },
};

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: "Home", item: "https://cicanda.com" },
  { name: "About", item: "https://cicanda.com/about" },
]);

type Pillar = { icon: ReactNode; title: string; body: string };

const PILLARS: Pillar[] = [
  {
    icon: <IconShield size={20} />,
    title: "Reliability",
    body: "We commit only to what we can deliver, and then we deliver it. Steady execution over loud promises.",
  },
  {
    icon: <IconSpark size={20} />,
    title: "Expertise",
    body: "Senior practitioners on every engagement, across IT, communications and commercial partnerships.",
  },
  {
    icon: <IconUsers size={20} />,
    title: "Partnership",
    body: "We work alongside clients, not around them. Long-term relationships are the point, not the by-product.",
  },
  {
    icon: <IconGlobe size={20} />,
    title: "Reach",
    body: "Nigerian roots with active partners across Europe and beyond. Local context, global standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
          eyebrow="About CICANDA"
          title={
            <>
              Built in Abuja for the work that has to{" "}
              <span style={{ color: "var(--c-blue-500)" }}>just work</span>.
            </>
          }
          lead="CICANDA Limited is a Nigerian firm founded by operators. We deliver Information Technology, Media & PR, and Reseller partnerships, with the same team, the same standard, on every engagement."
        >
          <Link href="/contact" className="btn btn--white">
            Get in touch <IconArrow className="arrow" size={16} stroke={2.2} />
          </Link>
        </PageHero>

        {/* Founding story */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              <FadeUp>
                <div>
                  <div className="section__kicker">Our story</div>
                  <h2 className="section__title">
                    Started because bad delivery kept{" "}
                    <span className="hl">costing everyone</span>.
                  </h2>
                  <div className="about__story" style={{ marginTop: 28 }}>
                    <p>
                      CICANDA was founded by operators who had spent years watching
                      good projects stall on bad delivery. Vendors who overpromised,
                      partners who disappeared, comms that never landed. We started
                      the company to be the opposite of that: a small, accountable
                      team you can call by name.
                    </p>
                    <p>
                      Today we work with Nigerian organisations and international
                      partners across three connected disciplines: Information
                      Technology, Media &amp; PR, and Reseller &amp; Partnerships.
                      Different clients, same operating principle: be the one
                      supplier the rest of the room can rely on.
                    </p>
                    <p>
                      We are headquartered at Aco Housing Estate Complex in Abuja,
                      with a secondary line in Zagreb, Croatia, that keeps us
                      connected to European vendors, standards, and partners. The
                      combination gives clients access to international reach without
                      losing the local knowledge that makes delivery in Nigeria
                      actually work.
                    </p>
                  </div>
                  <div className="about__quote">
                    &ldquo;Creating reliable solutions&rdquo; isn&rsquo;t a tagline
                    we wrote in a brand workshop. It&rsquo;s the brief we hold
                    ourselves to on every engagement.
                  </div>
                </div>
              </FadeUp>
              <div>
                <div className="section__kicker">Why CICANDA</div>
                <h3 style={{ fontSize: 22, marginBottom: 22 }}>
                  Four pillars that show up in every brief.
                </h3>
                <Stagger className="pillars">
                  {PILLARS.map((p) => (
                    <StaggerItem key={p.title} className="pillar">
                      <div className="pillar__icon">{p.icon}</div>
                      <h4>{p.title}</h4>
                      <p>{p.body}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Reach */}
        <section className="section section--soft">
          <div className="container">
            <FadeUp>
              <div className="section__kicker">Where we operate</div>
              <h2 className="section__title" style={{ maxWidth: 520 }}>
                Nigerian roots.{" "}
                <span className="hl">European reach.</span>
              </h2>
              <p style={{ fontSize: 17, color: "var(--c-ink-2)", maxWidth: 600, marginTop: 16 }}>
                Our primary base is Abuja, where the majority of our client
                work is delivered. Our Zagreb line gives us direct access to
                European vendors, compliance frameworks, and commercial
                partnerships, which matters when a client needs international
                standards applied locally.
              </p>
            </FadeUp>
            <Stagger className="reach-grid">
              <StaggerItem className="reach-card">
                <div className="reach-card__flag">🇳🇬</div>
                <h4>Abuja, Nigeria: Headquarters</h4>
                <p>
                  Aco Housing Estate Complex, Abuja.<br />
                  Our primary delivery base. IT, Media &amp; PR, and Reseller
                  engagements run from here. Office hours: Mon–Fri, 09:00–18:00 WAT.<br /><br />
                  <a href="tel:+2347065622760" style={{ color: "var(--c-blue-800)", fontWeight: 500 }}>+234 706 562 2760</a>
                </p>
              </StaggerItem>
              <StaggerItem className="reach-card">
                <div className="reach-card__flag">🇭🇷</div>
                <h4>Zagreb, Croatia: European Line</h4>
                <p>
                  Secondary operations supporting European vendor relationships,
                  procurement chains, and international partner engagement.<br /><br />
                  <a href="tel:+385925067719" style={{ color: "var(--c-blue-800)", fontWeight: 500 }}>+385 92 506 7719</a>
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Services CTA */}
        <section className="section">
          <div className="container">
            <FadeUp><div className="cta-strip">
              <div>
                <h3>Ready to work with a team that delivers?</h3>
                <p>
                  Browse our service lines or reach out directly. We respond to
                  all enquiries within one business day.
                </p>
              </div>
              <div className="cta-strip__actions">
                <Link href="/contact" className="btn btn--primary">
                  Contact us <IconArrow className="arrow" size={16} stroke={2.2} />
                </Link>
                <Link href="/#services" className="btn btn--ghost">
                  Our services
                </Link>
              </div>
            </div></FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
