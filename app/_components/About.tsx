import type { ReactNode } from "react";
import { IconGlobe, IconShield, IconSpark, IconUsers } from "./icons";

type Pillar = {
  icon: ReactNode;
  title: string;
  body: string;
};

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

export function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section__kicker">About CICANDA</div>
            <h2 className="section__title">
              Built in Abuja for the work that has to{" "}
              <span className="hl">just work</span>.
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
            </div>
            <div className="about__quote">
              &ldquo;Creating reliable solutions&rdquo; isn&rsquo;t a tagline we
              wrote in a brand workshop. It&rsquo;s the brief we hold ourselves
              to on every engagement.
            </div>
          </div>
          <div>
            <div className="section__kicker">Why CICANDA</div>
            <h3 style={{ fontSize: 22, marginBottom: 22 }}>
              Four pillars that show up in every brief.
            </h3>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.title}>
                  <div className="pillar__icon">{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
