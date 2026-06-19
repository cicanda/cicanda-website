import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../../_components/Footer";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Information about the cookies CICANDA Limited uses on this website, what they do, and how to control them.",
  alternates: { canonical: "https://cicanda.com/legal/cookies" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Legal", item: "https://cicanda.com/legal/cookies" },
    { "@type": "ListItem", position: 3, name: "Cookie Policy", item: "https://cicanda.com/legal/cookies" },
  ],
};

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Legal", href: "/legal/cookies" },
            { label: "Cookie Policy" },
          ]}
          eyebrow="Legal"
          title="Cookie Policy"
          lead="This policy explains what cookies are, which cookies this website uses, and how you can control them."
        />

        <section className="section">
          <div className="container">
            <div className="legal-prose">
              <p className="legal-meta">Last updated: June 2026 · CICANDA Limited, Aco Housing Estate Complex, Abuja, Nigeria</p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They are
                widely used to make websites work efficiently, to remember your preferences, and to
                provide information to site owners about how visitors use their site.
              </p>
              <p>
                Cookies do not directly identify you as a person, though they may be linked to
                information that does. You can control and delete cookies through your browser settings.
              </p>

              <h2>2. Cookies We Use</h2>
              <p>The cicanda.com website currently uses the following categories of cookies:</p>

              <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 8, color: "var(--c-ink)" }}>Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website to function. They enable core features
                such as page navigation and form submission. The website cannot function properly
                without these cookies, and they cannot be disabled.
              </p>
              <p>We do not use any cookies beyond what is strictly required for basic site operation except for the analytics described below.</p>

              <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 8, color: "var(--c-ink)" }}>Analytics Cookies</h3>
              <p>
                We use Google Analytics 4 (GA4) to understand how visitors interact with this website.
                GA4 collects anonymised data including pages visited, time on site, and approximate
                geographic location. This data helps us improve the website experience. GA4 sets the
                following cookies:
              </p>
              <ul>
                <li><strong>_ga</strong> — distinguishes users. Expires in 2 years.</li>
                <li><strong>_ga_[ID]</strong> — maintains session state. Expires in 2 years.</li>
              </ul>
              <p>
                Google Analytics data is processed under the terms of Google&rsquo;s data processing
                agreement and is subject to Google&rsquo;s Privacy Policy. We have enabled IP anonymisation
                and do not share GA4 data with third parties for advertising purposes.
              </p>

              <h2>3. Third-Party Cookies</h2>
              <p>
                Beyond Google Analytics, we do not currently embed third-party content (such as social
                media plugins or advertising networks) that would place additional cookies on your device
                when you visit this website.
              </p>
              <p>
                If we add third-party integrations in future that set cookies, this policy will be
                updated to reflect that.
              </p>

              <h2>4. Managing and Disabling Cookies</h2>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul>
                <li>See what cookies have been set and delete them individually.</li>
                <li>Block third-party cookies.</li>
                <li>Block cookies from specific websites.</li>
                <li>Block all cookies from being set.</li>
                <li>Delete all cookies when you close your browser.</li>
              </ul>
              <p>
                Please be aware that restricting or deleting cookies may affect the functionality of
                this website. Instructions for managing cookies vary by browser; refer to your
                browser&rsquo;s help documentation for guidance.
              </p>
              <p>
                You can also opt out of Google Analytics specifically by installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>

              <h2>5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time as our use of cookies evolves.
                The "last updated" date at the top of this page will reflect any changes. We encourage
                you to review this page periodically.
              </p>

              <h2>6. Contact</h2>
              <p>
                If you have any questions about this Cookie Policy, contact us at{" "}
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a>.
              </p>
              <p>
                <Link href="/legal/terms">Terms of Service</Link>
                {" · "}
                <Link href="/legal/privacy">Privacy Policy</Link>
                {" · "}
                <Link href="/legal/data-protection">Data Protection & NDPR</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
