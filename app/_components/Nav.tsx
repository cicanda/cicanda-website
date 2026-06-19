"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconArrow, IconBroadcast, IconChip, IconClose, IconHandshake, IconMenu } from "./icons";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SERVICES = [
  { href: "/services/information-technology", label: "Information Technology", icon: <IconChip size={16} /> },
  { href: "/services/media-pr",               label: "Media & PR",              icon: <IconBroadcast size={16} /> },
  { href: "/services/reseller-partnerships",  label: "Reseller & Partnerships", icon: <IconHandshake size={16} /> },
];

const AllServicesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const DRAWER_LINKS = [
  { href: "/",                                 label: "Home" },
  { href: "/services/information-technology",  label: "Information Technology" },
  { href: "/services/media-pr",                label: "Media & PR" },
  { href: "/services/reseller-partnerships",   label: "Reseller & Partnerships" },
  { href: "/about",                            label: "About" },
  { href: "/blog",                             label: "Blog" },
];

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0, transition: "transform .2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [svcOpen,   setSvcOpen]   = useState(false);
  const svcRef   = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!svcOpen) return;
    const handler = (e: MouseEvent) => {
      if (!svcRef.current?.contains(e.target as Node)) setSvcOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [svcOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setSvcOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkCls = (active: boolean) =>
    "nav__link" + (active ? " nav__link--active" : "");

  return (
    <>
      {/* ── Sticky nav bar ── */}
      <motion.header
        className={"nav" + (scrolled ? " is-scrolled" : "")}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="container nav__inner">
          <Link href="/" className="nav__logo" aria-label="CICANDA home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cicanda-logo.svg" alt="CICANDA" />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            <Link href="/" className={linkCls(pathname === "/")}>Home</Link>

            <div className="nav__item" ref={svcRef}>
              <button
                type="button"
                className={linkCls(pathname?.startsWith("/services") ?? false) + " nav__svc-btn"}
                onClick={() => setSvcOpen(o => !o)}
                aria-expanded={svcOpen}
                aria-haspopup="true"
              >
                Services <Chevron open={svcOpen} />
              </button>

              {svcOpen && (
                <div className="nav__dropdown">
                  <Link href="/services" className="nav__dropdown__link nav__dropdown__link--all" onClick={() => setSvcOpen(false)}>
                    <span className="nav__dropdown__icon"><AllServicesIcon /></span>
                    <span>All services</span>
                  </Link>
                  <div className="nav__dropdown__divider" />
                  {SERVICES.map(s => (
                    <Link key={s.href} href={s.href} className="nav__dropdown__link" onClick={() => setSvcOpen(false)}>
                      <span className="nav__dropdown__icon">{s.icon}</span>
                      <span>{s.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={linkCls(pathname === "/about")}>About</Link>
            <Link href="/blog" className={linkCls(pathname?.startsWith("/blog") ?? false)}>Blog</Link>

            <Link href="/contact" className="nav__cta">
              Contact us <IconArrow size={14} stroke={2.2} />
            </Link>
          </nav>

          <button
            type="button"
            className="nav__menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer — outside header so position:fixed isn't clipped ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.div
              className="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              aria-modal="true"
              role="dialog"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="mobile-menu__header">
                <Link href="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/cicanda-logo.svg" alt="CICANDA" />
                </Link>
                <button
                  type="button"
                  className="nav__menu-btn"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "inline-flex" }}
                >
                  <IconClose />
                </button>
              </div>

              {/* Links — stagger in */}
              <nav className="mobile-menu__links" aria-label="Mobile navigation">
                {DRAWER_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.045, duration: 0.3, ease: EASE }}
                  >
                    <Link href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom */}
              <motion.div
                className="mobile-menu__footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="btn btn--primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact us <IconArrow size={14} stroke={2.2} />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
