"use client";
import Link from "next/link";
import { motion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
import type { ReactNode } from "react";
import { IconArrow, IconBroadcast, IconCheck, IconChip, IconHandshake } from "./icons";
import { FadeUp } from "./Animate";

type Service = {
  num: string;
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
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
    href: "/services/information-technology",
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
    href: "/services/media-pr",
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
    href: "/services/reseller-partnerships",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const card = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <FadeUp>
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
        </FadeUp>

        <motion.div
          className="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -30px 0px" }}
          variants={container}
        >
          {SERVICES.map((s) => (
            <motion.article
              className="svc"
              key={s.num}
              variants={card}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
            >
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
              <Link
                href={s.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 20,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--c-blue-800)",
                }}
              >
                Learn more <IconArrow size={14} stroke={2.2} className="arrow" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
