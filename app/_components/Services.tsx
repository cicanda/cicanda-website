import type { ReactNode } from "react";
import { IconBroadcast, IconCheck, IconChip, IconHandshake } from "./icons";

type Service = {
  num: string;
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    icon: <IconChip />,
    title: "Information Technology",
    desc: "Practical IT that gets work done, from daily operations to the long-running infrastructure your team can depend on.",
    bullets: [
      "Network design, deployment & support",
      "Cloud, hardware & software procurement",
      "Cybersecurity audits and managed services",
    ],
  },
  {
    num: "02",
    icon: <IconBroadcast />,
    title: "Media & PR",
    desc: "Sharper messaging and steady visibility. Earned media, content and campaigns built on what your audience actually cares about.",
    bullets: [
      "Brand strategy & corporate communications",
      "Press relations and media placement",
      "Social, content production & creative direction",
    ],
  },
  {
    num: "03",
    icon: <IconHandshake />,
    title: "Reseller & Partnerships",
    desc: "A trusted route to international vendors. Sourcing, licensing and channel partnerships handled end-to-end on your behalf.",
    bullets: [
      "Authorised reselling for global vendors",
      "Procurement, logistics & licence management",
      "Local representation for foreign partners",
    ],
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="section__kicker">What we do</div>
            <h2 className="section__title">
              Three service lines, <span className="hl">one standard</span> of
              delivery.
            </h2>
          </div>
          <p className="section__lede">
            We&rsquo;ve kept the offering deliberately focused so every
            engagement gets senior attention. Whether the brief is a network
            refresh, a launch campaign or a vendor relationship, the same team
            owns the outcome.
          </p>
        </div>
        <div className="services">
          {SERVICES.map((s) => (
            <article className="svc" key={s.num}>
              <span className="svc__num">{s.num}</span>
              <div className="svc__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>
              <ul className="svc__bullets">
                {s.bullets.map((b, i) => (
                  <li key={i}>
                    <IconCheck />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
