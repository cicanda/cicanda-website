"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
import { useRef } from "react";
import { IconArrow } from "./icons";

function DotMap() {
  const cols = 28,
    rows = 14,
    sx = 28,
    sy = 28;
  const dots: React.ReactElement[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * sx + 14;
      const y = r * sy + 14;
      const seed = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      const f = seed - Math.floor(seed);
      if (f < 0.55) continue;
      const radius = f > 0.85 ? 2.4 : f > 0.7 ? 1.8 : 1.3;
      dots.push(<circle key={`${r}-${c}`} cx={x} cy={y} r={radius} />);
    }
  }
  return (
    <svg
      className="hero__map"
      viewBox={`0 0 ${cols * sx} ${rows * sy}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {dots}
    </svg>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};


export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <motion.section
      className="hero"
      id="top"
      ref={heroRef}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Parallax background */}
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <DotMap />
        </motion.div>
        <motion.span
          className="float-tri"
          style={{ top: "22%", left: "6%" }}
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="float-tri"
          style={{
            top: "70%",
            left: "40%",
            transform: "rotate(18deg)",
            opacity: 0.35,
          }}
          animate={{ y: [0, 10, 0], rotate: [18, 26, 18] }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
      </motion.div>

      <div className="container hero__inner">
        {/* Left content — stagger via parent */}
        <div>
          <motion.span className="eyebrow" variants={item}>
            <span className="dot" />
            Now operating · Abuja, Nigeria
          </motion.span>

          <motion.h1 variants={item}>
            <span style={{ whiteSpace: "nowrap" }}>Reliable solutions,</span>
            <br />
            <span className="accent">delivered</span> with intent
            <span className="tri" />
          </motion.h1>

          <motion.div className="hero__tagline" variants={item}>
            &ldquo;creating reliable solutions.&rdquo;
          </motion.div>

          <motion.p className="hero__lead" variants={item}>
            CICANDA is a Nigerian firm building dependable Information
            Technology, Media &amp; PR, and Reseller capability for
            organisations that need to move forward with confidence.
          </motion.p>

          <motion.div className="hero__ctas" variants={item}>
            <Link href="/contact" className="btn btn--primary">
              Get in touch <IconArrow className="arrow" />
            </Link>
            <Link href="/about" className="btn btn--ghost">
              About CICANDA
            </Link>
          </motion.div>

          <motion.div className="hero__strip" variants={item}>
            <div className="hero__strip-item">
              <div className="k">3</div>
              <div className="v">Service lines</div>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <div className="k">2</div>
              <div className="v">Continents served</div>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <div className="k">24/7</div>
              <div className="v">Support</div>
            </div>
          </motion.div>
        </div>

        {/* Right visual — slides in from right, then floats */}
        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
        >
          {/* Main engagement card */}
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="hero-card hero-card--main">
              <div className="label">Live engagement</div>
              <h3>
                Building infrastructure for Nigeria&rsquo;s next chapter,
                quietly, reliably, every day.
              </h3>
              <div className="meta">
                <span>Abuja</span>
                <span className="sep" />
                <span>Lagos</span>
                <span className="sep" />
                <span>Zagreb</span>
              </div>
            </div>
          </motion.div>

          <span className="hero-tri" />
        </motion.div>
      </div>
    </motion.section>
  );
}
