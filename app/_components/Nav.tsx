"use client";

import { useEffect, useState } from "react";
import { IconArrow, IconClose, IconMenu } from "./icons";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="CICANDA home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cicanda-logo.svg" alt="CICANDA" />
        </a>
        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
          <a href="#newsletter" className="nav__cta">
            Subscribe <IconArrow size={14} stroke={2.2} />
          </a>
        </nav>
        <button
          className="nav__menu-btn"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            href="#newsletter"
            style={{ color: "var(--c-blue-800)", fontWeight: 600 }}
          >
            Subscribe
          </a>
        </div>
      )}
    </header>
  );
}
