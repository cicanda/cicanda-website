"use client";
import { motion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
import { Breadcrumb } from "./Breadcrumb";

type Crumb = { label: string; href?: string };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <motion.div
        className="container page-hero__inner"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div variants={item}>
          <Breadcrumb items={breadcrumbs} />
        </motion.div>

        {eyebrow && (
          <motion.span
            className="eyebrow"
            style={{ marginTop: 16, display: "inline-flex" }}
            variants={item}
          >
            <span className="dot" />
            {eyebrow}
          </motion.span>
        )}

        <motion.h1 variants={item}>{title}</motion.h1>

        {lead && (
          <motion.p className="page-hero__lead" variants={item}>
            {lead}
          </motion.p>
        )}

        {children && (
          <motion.div className="page-hero__actions" variants={item}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
