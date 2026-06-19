"use client";

import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const CONSENT_KEY = "cicanda_cookie_consent";
const CONSENT_VERSION = "1";
const EXPIRE_MS = 365 * 24 * 60 * 60 * 1000;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
  version: string;
}

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as ConsentState;
    if (c.version !== CONSENT_VERSION) return null;
    if (Date.now() - new Date(c.date).getTime() > EXPIRE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

function persist(analytics: boolean, marketing: boolean): ConsentState {
  const c: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    date: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  return c;
}

export function CookieBanner({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = loadConsent();
    if (stored) {
      setConsent(stored);
    } else {
      const t = setTimeout(() => setShowBanner(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  // Footer "Cookie Settings" button fires this event
  useEffect(() => {
    const onOpen = () => {
      const stored = loadConsent();
      setAnalytics(stored?.analytics ?? false);
      setMarketing(stored?.marketing ?? false);
      setShowModal(true);
      setShowBanner(false);
    };
    window.addEventListener("cicanda:open-cookie-settings", onOpen);
    return () => window.removeEventListener("cicanda:open-cookie-settings", onOpen);
  }, []);

  // Disable GA4 collection if analytics consent is revoked after it was loaded
  useEffect(() => {
    if (gaId && consent && !consent.analytics) {
      (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = true;
    }
  }, [gaId, consent]);

  const acceptAll = () => {
    setConsent(persist(true, true));
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    setConsent(persist(false, false));
    setShowBanner(false);
    setShowModal(false);
  };

  const savePrefs = () => {
    setConsent(persist(analytics, marketing));
    setShowBanner(false);
    setShowModal(false);
  };

  const openModal = () => {
    setAnalytics(false);
    setMarketing(false);
    setShowBanner(false);
    setShowModal(true);
  };

  return (
    <>
      {/* GA4 — only injected once analytics consent is confirmed */}
      {consent?.analytics && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}

      {/* ── Banner ── */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            className="cookie-banner"
            role="dialog"
            aria-label="Cookie consent notice"
            aria-live="polite"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="cookie-banner__title">We use cookies</p>
            <p className="cookie-banner__body">
              CICANDA uses cookies to keep the site working and — with your consent — to understand
              how visitors use our site via Google Analytics. Necessary cookies are always active.{" "}
              <Link href="/legal/cookies">Cookie Policy</Link>
              {" · "}
              <Link href="/legal/privacy">Privacy Policy</Link>
            </p>
            <div className="cookie-banner__actions">
              <button
                className="btn btn--primary"
                style={{ fontSize: "13.5px", padding: "9px 18px" }}
                onClick={acceptAll}
              >
                Accept all
              </button>
              <button
                className="btn btn--ghost"
                style={{ fontSize: "13.5px", padding: "9px 18px" }}
                onClick={rejectAll}
              >
                Reject all
              </button>
              <button className="cookie-banner__manage" onClick={openModal}>
                Manage preferences
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Preferences modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="cookie-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <motion.div
              className="cookie-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Cookie preferences"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <div className="cookie-modal__header">
                <h3>Cookie preferences</h3>
                <button
                  className="cookie-modal__close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close preferences"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="cookie-modal__intro">
                Under the Nigeria Data Protection Regulation (NDPR) and international data-protection
                best practice, we ask for your consent before placing non-essential cookies on your
                device. Choose which categories you allow below. You can update your choice at any
                time via Cookie Settings in the footer.
              </p>

              <div className="cookie-categories">
                <CookieCategory
                  name="Strictly necessary"
                  sub="Always active"
                  checked={true}
                  locked={true}
                  description="Required for the site to function — page routing, security headers, and session integrity. No personal data is retained beyond your visit."
                />
                <CookieCategory
                  name="Analytics"
                  sub="Google Analytics 4"
                  checked={analytics}
                  onChange={setAnalytics}
                  description="Helps us understand how visitors navigate the site (pages visited, session length, referral source). Data is aggregated and pseudonymised. Powered by Google Analytics 4. See Google's privacy policy for details."
                />
                <CookieCategory
                  name="Marketing"
                  sub="Not currently in use"
                  checked={marketing}
                  onChange={setMarketing}
                  description="Used to deliver personalised advertising and measure campaign reach. We do not currently deploy marketing cookies, but your preference is saved for future reference."
                />
              </div>

              <p className="cookie-modal__legal">
                Your choice is stored in your browser for 12 months and never shared with third
                parties. You can withdraw or update your consent at any time.{" "}
                <Link href="/legal/cookies">Cookie Policy</Link>
                {" · "}
                <Link href="/legal/privacy">Privacy Policy</Link>
                {" · "}
                <Link href="/legal/data-protection">Data Protection</Link>
              </p>

              <div className="cookie-modal__actions">
                <button
                  className="btn btn--primary"
                  style={{ fontSize: "13.5px", padding: "10px 20px" }}
                  onClick={acceptAll}
                >
                  Accept all
                </button>
                <button
                  className="btn btn--ghost"
                  style={{ fontSize: "13.5px", padding: "10px 20px" }}
                  onClick={savePrefs}
                >
                  Save my choices
                </button>
                <button
                  className="btn btn--ghost"
                  style={{ fontSize: "13.5px", padding: "10px 20px" }}
                  onClick={rejectAll}
                >
                  Reject all
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CookieCategory({
  name,
  sub,
  checked,
  locked = false,
  onChange,
  description,
}: {
  name: string;
  sub: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
  description: string;
}) {
  return (
    <div className="cookie-cat">
      <div className="cookie-cat__head">
        <div className="cookie-cat__info">
          <span className="cookie-cat__name">{name}</span>
          <span className="cookie-cat__sub">{sub}</span>
        </div>
        <label
          className="cookie-toggle"
          title={locked ? "Always active — cannot be disabled" : `Toggle ${name} cookies`}
        >
          <input
            type="checkbox"
            checked={checked}
            disabled={locked}
            onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
            readOnly={!onChange}
          />
          <span className="cookie-toggle__slider" />
        </label>
      </div>
      <p className="cookie-cat__desc">{description}</p>
    </div>
  );
}
