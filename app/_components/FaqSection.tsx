"use client";
import { AnimatePresence, motion } from "motion/react";
import { FadeUp } from "./Animate";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
import { useState } from "react";
import { JsonLd } from "./JsonLd";

type FaqItem = { q: string; a: string };

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button
        type="button"
        className="faq-summary"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <motion.span
          className="faq-chevron"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="faq-item__body">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: FaqItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="faq-section section--soft">
      <JsonLd data={schema} />
      <div className="container">
        <FadeUp>
          <div className="section__kicker">FAQ</div>
          <h2 className="section__title" style={{ maxWidth: 520 }}>
            {heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="faq-list" role="list">
            {items.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
