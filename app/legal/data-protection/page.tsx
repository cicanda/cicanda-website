import type { Metadata } from "next";
import Link from "next/link";
import { makeBreadcrumbSchema } from "../../_lib/schema";
import { Footer } from "../../_components/Footer";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "Data Protection & NDPR Compliance",
  description:
    "CICANDA Limited's commitment to data protection and compliance with the Nigeria Data Protection Regulation (NDPR) enforced by NITDA.",
  alternates: { canonical: "https://cicanda.com/legal/data-protection" },
};

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: "Home", item: "https://cicanda.com" },
  { name: "Legal", item: "https://cicanda.com/legal/data-protection" },
  { name: "Data Protection & NDPR", item: "https://cicanda.com/legal/data-protection" },
]);

export default function DataProtectionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Legal", href: "/legal/data-protection" },
            { label: "Data Protection & NDPR" },
          ]}
          eyebrow="Legal"
          title={
            <>
              Data Protection &amp;{" "}
              <span style={{ color: "var(--c-blue-500)" }}>NDPR Compliance</span>
            </>
          }
          lead="CICANDA Limited is committed to responsible data stewardship. This page sets out our compliance position under the Nigeria Data Protection Regulation (NDPR) and related law."
        />

        <section className="section">
          <div className="container">
            <div className="legal-prose">
              <p className="legal-meta">Last updated: June 2026 · CICANDA Limited, Aco Housing Estate Complex, Abuja, Nigeria · <a href="mailto:hello@cicanda.com">hello@cicanda.com</a></p>

              <h2>1. Regulatory Framework</h2>
              <p>
                The Nigeria Data Protection Regulation (NDPR), issued by the National Information
                Technology Development Agency (NITDA) in January 2019 and supplemented by the NDPR
                Implementation Framework of 2020, is the primary data protection law applicable to
                CICANDA Limited and to any organisation that processes the personal data of persons
                in Nigeria.
              </p>
              <p>
                CICANDA Limited operates in full compliance with the NDPR and remains current with
                guidance issued by NITDA. Where clients or data subjects are located in jurisdictions
                with additional data protection requirements (such as the European Union&rsquo;s GDPR),
                we apply the higher standard where relevant.
              </p>

              <h2>2. Data Controller Identification</h2>
              <p>
                CICANDA Limited acts as a <strong>data controller</strong> in respect of personal data
                collected through this website and in connection with our direct client relationships.
                Where we process personal data on behalf of a client organisation, we act as a
                <strong> data processor</strong> under instructions agreed in the engagement contract,
                and the client organisation is the data controller.
              </p>
              <p><strong>Controller details:</strong></p>
              <ul>
                <li>Name: CICANDA Limited</li>
                <li>Address: Aco Housing Estate Complex, Abuja, FCT, Nigeria</li>
                <li>Email: <a href="mailto:hello@cicanda.com">hello@cicanda.com</a></li>
                <li>Telephone: <a href="tel:+2347065622760">+234 706 562 2760</a></li>
              </ul>

              <h2>3. Data Protection Principles</h2>
              <p>We process personal data in accordance with the following NDPR principles:</p>
              <ul>
                <li><strong>Lawfulness, fairness and transparency:</strong> personal data is processed only where there is a lawful basis and in a manner that is fair and transparent to data subjects.</li>
                <li><strong>Purpose limitation:</strong> data is collected for specified, explicit, and legitimate purposes and not processed in a manner incompatible with those purposes.</li>
                <li><strong>Data minimisation:</strong> we collect only the personal data that is necessary for the stated purpose.</li>
                <li><strong>Accuracy:</strong> we take reasonable steps to ensure that data we hold is accurate and, where necessary, kept up to date.</li>
                <li><strong>Storage limitation:</strong> data is retained no longer than necessary for the purposes for which it was collected.</li>
                <li><strong>Integrity and confidentiality:</strong> we implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or destruction.</li>
              </ul>

              <h2>4. Lawful Basis for Processing</h2>
              <p>
                CICANDA Limited processes personal data on one or more of the following lawful bases
                as defined under the NDPR:
              </p>
              <ul>
                <li><strong>Consent:</strong> where the data subject has given clear, informed consent.</li>
                <li><strong>Contract performance:</strong> where processing is necessary to perform a contract with the data subject or at their request prior to entering a contract.</li>
                <li><strong>Legitimate interests:</strong> where we have a legitimate business interest that is not overridden by the data subject&rsquo;s rights and interests.</li>
                <li><strong>Legal obligation:</strong> where processing is required to comply with a statutory obligation.</li>
              </ul>

              <h2>5. Data Subject Rights</h2>
              <p>Under the NDPR, individuals whose personal data we process have the right to:</p>
              <ul>
                <li>Be informed about how their data is used.</li>
                <li>Access their personal data (subject access request).</li>
                <li>Correct inaccurate or incomplete data.</li>
                <li>Request deletion of their data where there is no overriding lawful reason to retain it.</li>
                <li>Object to processing based on legitimate interests.</li>
                <li>Restrict processing in certain circumstances.</li>
                <li>Data portability where processing is carried out by automated means.</li>
                <li>Withdraw consent at any time where consent is the basis of processing.</li>
              </ul>
              <p>
                Requests to exercise these rights should be submitted to{" "}
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a>. We will acknowledge your
                request within 72 hours and respond in full within 30 days.
              </p>

              <h2>6. International Data Transfers</h2>
              <p>
                Where we transfer personal data to processors or sub-processors outside Nigeria, we
                comply with the NDPR requirements for cross-border data transfers, including by
                ensuring that recipients are bound by contractual obligations at least equivalent to
                the protections required under the NDPR, or that the destination country has been
                recognised as providing adequate data protection.
              </p>

              <h2>7. Data Breach Notification</h2>
              <p>
                In the event of a personal data breach, CICANDA Limited will comply with the NDPR
                obligation to notify NITDA and, where required, affected data subjects within the
                timeframes prescribed by the regulation. We maintain an internal breach register and
                incident response procedure to support this obligation.
              </p>

              <h2>8. Data Processing Records</h2>
              <p>
                CICANDA Limited maintains a Record of Processing Activities (ROPA) as required under
                the NDPR Implementation Framework. This document is available to NITDA upon request
                as part of our regulatory compliance obligations.
              </p>

              <h2>9. Complaints and Regulatory Contact</h2>
              <p>
                If you are unsatisfied with how we handle your personal data, you have the right to
                lodge a complaint with NITDA, the Nigerian data protection supervisory authority:
              </p>
              <ul>
                <li>National Information Technology Development Agency (NITDA)</li>
                <li>Website: <a href="https://nitda.gov.ng" target="_blank" rel="noopener noreferrer">nitda.gov.ng</a></li>
                <li>Email: <a href="mailto:info@nitda.gov.ng">info@nitda.gov.ng</a></li>
              </ul>
              <p>We encourage you to contact us directly first so we have the opportunity to resolve any concern.</p>

              <h2>10. Contact</h2>
              <p>
                For data protection enquiries, please contact us at{" "}
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a> or write to CICANDA Limited,
                Aco Housing Estate Complex, Abuja, Federal Capital Territory, Nigeria.
              </p>
              <p>
                <Link href="/legal/terms">Terms of Service</Link>
                {" · "}
                <Link href="/legal/privacy">Privacy Policy</Link>
                {" · "}
                <Link href="/legal/cookies">Cookie Policy</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
