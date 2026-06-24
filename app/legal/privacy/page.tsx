import type { Metadata } from "next";
import Link from "next/link";
import { makeBreadcrumbSchema } from "../../_lib/schema";
import { Footer } from "../../_components/Footer";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CICANDA Limited collects, uses, and protects your personal data. Compliant with the Nigeria Data Protection Regulation (NDPR) and applicable international standards.",
  alternates: { canonical: "https://cicanda.com/legal/privacy" },
};

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: "Home", item: "https://cicanda.com" },
  { name: "Legal", item: "https://cicanda.com/legal/privacy" },
  { name: "Privacy Policy", item: "https://cicanda.com/legal/privacy" },
]);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Legal", href: "/legal/privacy" },
            { label: "Privacy Policy" },
          ]}
          eyebrow="Legal"
          title="Privacy Policy"
          lead="We take your privacy seriously. This policy explains what personal data CICANDA Limited collects, how we use it, and your rights under Nigerian and applicable international law."
        />

        <section className="section">
          <div className="container">
            <div className="legal-prose">
              <p className="legal-meta">Last updated: June 2026 · Data Controller: CICANDA Limited, Aco Housing Estate Complex, Abuja, Nigeria · <a href="mailto:hello@cicanda.com">hello@cicanda.com</a></p>

              <h2>1. Who We Are</h2>
              <p>
                CICANDA Limited ("CICANDA", "we", "our", "us") is a company registered in Nigeria,
                operating from Aco Housing Estate Complex, Abuja. We provide Information Technology,
                Media &amp; PR, and Reseller &amp; Partnership services. We are the data controller for
                personal data collected through this website and through our service engagements.
              </p>

              <h2>2. What Personal Data We Collect</h2>
              <p>We may collect the following categories of personal data:</p>
              <ul>
                <li><strong>Contact and identity data:</strong> your name, job title, organisation name, email address, and telephone number, provided when you contact us or submit an enquiry form.</li>
                <li><strong>Communication data:</strong> the content of messages you send us through this website, by email, or by telephone.</li>
                <li><strong>Technical data:</strong> your IP address, browser type and version, time zone, browser plug-in types, operating system, and other technology on the devices you use to access this website (collected automatically via our analytics tools).</li>
                <li><strong>Usage data:</strong> information about how you use our website, including pages visited, time spent, and links clicked.</li>
              </ul>
              <p>We do not collect any special categories of personal data (such as data about your health, ethnicity, religion, or biometric data).</p>

              <h2>3. How We Use Your Data</h2>
              <p>We use personal data for the following purposes:</p>
              <ul>
                <li>To respond to enquiries and communicate with prospective clients.</li>
                <li>To deliver contracted services and manage the client relationship.</li>
                <li>To send relevant service information or updates where you have consented or where we have a legitimate interest to do so.</li>
                <li>To analyse website usage and improve the performance and content of this website.</li>
                <li>To comply with legal obligations, including those under the Nigeria Data Protection Regulation (NDPR) and other applicable law.</li>
              </ul>

              <h2>4. Lawful Basis for Processing</h2>
              <p>
                Under the NDPR and applicable law, we process personal data on the following bases:
              </p>
              <ul>
                <li><strong>Consent:</strong> where you have given clear consent for us to process your data for a specific purpose (e.g. newsletter subscription).</li>
                <li><strong>Contract:</strong> where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.</li>
                <li><strong>Legitimate interests:</strong> where processing is necessary for our legitimate business interests, such as maintaining and improving our website, or communicating with prospective clients, and those interests are not overridden by your data protection rights.</li>
                <li><strong>Legal obligation:</strong> where we are required to process data to comply with a legal obligation.</li>
              </ul>

              <h2>5. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal data. We may share your data with the
                following categories of third parties only where necessary:
              </p>
              <ul>
                <li><strong>Service providers:</strong> third parties who assist with website hosting, analytics, email delivery, and similar technical services, all bound by contractual data protection obligations.</li>
                <li><strong>Professional advisers:</strong> lawyers, auditors, and insurers where necessary for the conduct of our business.</li>
                <li><strong>Regulatory authorities:</strong> where required by law, court order, or lawful request from a competent authority.</li>
              </ul>

              <h2>6. International Transfers</h2>
              <p>
                Some of our third-party service providers are based outside Nigeria. Where we transfer
                personal data outside Nigeria, we do so in accordance with the NDPR requirements,
                including by ensuring that recipients provide adequate levels of data protection.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary for the purposes for which it
                was collected, including to satisfy any legal, accounting, or reporting requirements.
                Enquiry data is retained for up to 24 months. Client engagement data is retained for
                seven years following the conclusion of the engagement, in line with Nigerian commercial
                record-keeping requirements.
              </p>

              <h2>8. Your Rights Under the NDPR</h2>
              <p>
                Under the Nigeria Data Protection Regulation, you have the right to:
              </p>
              <ul>
                <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> request deletion of your personal data where there is no legitimate reason for us to continue processing it.</li>
                <li><strong>Restriction:</strong> request that we restrict processing of your data in certain circumstances.</li>
                <li><strong>Objection:</strong> object to processing of your personal data where we rely on legitimate interests as our lawful basis.</li>
                <li><strong>Portability:</strong> request transfer of your personal data to you or a third party in a structured, machine-readable format.</li>
                <li><strong>Withdraw consent:</strong> where processing is based on consent, withdraw that consent at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a>. We will respond within
                30 days. You also have the right to lodge a complaint with the National Information
                Technology Development Agency (NITDA), the Nigerian data protection supervisory authority.
              </p>

              <h2>9. Cookies</h2>
              <p>
                This website uses cookies to improve user experience and analyse traffic. For detailed
                information on the cookies we use, please see our{" "}
                <Link href="/legal/cookies">Cookie Policy</Link>.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                significant changes by updating the "last updated" date. We encourage you to review
                this page periodically.
              </p>

              <h2>11. Contact</h2>
              <p>
                For any privacy-related questions or to exercise your data rights, contact us at{" "}
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a> or write to CICANDA Limited,
                Aco Housing Estate Complex, Abuja, Federal Capital Territory, Nigeria.
              </p>
              <p>
                <Link href="/legal/terms">Terms of Service</Link>
                {" · "}
                <Link href="/legal/cookies">Cookie Policy</Link>
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
