import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../../_components/Footer";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";
import { PageHero } from "../../_components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the CICANDA Limited website and services. Governed by the laws of the Federal Republic of Nigeria.",
  alternates: { canonical: "https://cicanda.com/legal/terms" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cicanda.com" },
    { "@type": "ListItem", position: 2, name: "Legal", item: "https://cicanda.com/legal/terms" },
    { "@type": "ListItem", position: 3, name: "Terms of Service", item: "https://cicanda.com/legal/terms" },
  ],
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Legal", href: "/legal/terms" },
            { label: "Terms of Service" },
          ]}
          eyebrow="Legal"
          title="Terms of Service"
          lead="Please read these terms carefully before using this website or engaging CICANDA Limited for any service."
        />

        <section className="section">
          <div className="container">
            <div className="legal-prose">
              <p className="legal-meta">Last updated: June 2026 · CICANDA Limited, Aco Housing Estate Complex, Abuja, Nigeria</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the CICANDA Limited website (cicanda.com) or by engaging CICANDA Limited
                to deliver any service, you agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use this website or engage our services.
              </p>
              <p>
                These terms apply to all visitors, prospective clients, and clients of CICANDA Limited.
                Where a separate written engagement agreement exists between you and CICANDA Limited,
                that agreement governs the service relationship and these terms apply to website use only.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                CICANDA Limited is a technology and communications firm providing Information Technology
                services, Media &amp; PR services, and Reseller &amp; Partnership services to organisations in
                Nigeria and internationally. Specific service terms are agreed in writing before any
                engagement commences.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services or
                this website at any time without notice, though we will make reasonable efforts to
                communicate material changes to active clients.
              </p>

              <h2>3. Use of This Website</h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul>
                <li>Attempt to gain unauthorised access to any part of the website or its associated systems.</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
                <li>Transmit any data that contains viruses, Trojan horses, or any other harmful programs.</li>
                <li>Reproduce, duplicate, copy, sell, or exploit any portion of the website without our express written permission.</li>
                <li>Use the website in any way that could damage, disable, or impair its performance.</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, icons,
                images, and software, is the property of CICANDA Limited or its content suppliers and is
                protected under applicable Nigerian and international intellectual property laws.
              </p>
              <p>
                You may view and print pages from this website for your personal, non-commercial use only.
                You must not modify, copy, distribute, transmit, display, perform, reproduce, publish,
                license, create derivative works from, or transfer any information, software, products,
                or services obtained from this website without our prior written consent.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                This website and its content are provided on an "as is" basis without any warranties of
                any kind, express or implied. CICANDA Limited does not warrant that the website will be
                uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
              <p>
                To the fullest extent permitted by applicable law, CICANDA Limited shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising from
                your use of this website or our services.
              </p>

              <h2>6. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. These links are provided for
                your convenience only. CICANDA Limited has no control over the content of those sites
                and accepts no responsibility for them or for any loss or damage that may arise from
                your use of them.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the
                Federal Republic of Nigeria. Any dispute arising in connection with these terms shall
                be subject to the exclusive jurisdiction of the courts of Nigeria.
              </p>

              <h2>8. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. When we do, we will revise the "last updated"
                date at the top of this page. We encourage you to review this page periodically. Continued
                use of the website after any changes constitutes acceptance of the updated terms.
              </p>

              <h2>9. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a> or write to CICANDA Limited,
                Aco Housing Estate Complex, Abuja, Federal Capital Territory, Nigeria.
              </p>
              <p>
                <Link href="/legal/privacy">Privacy Policy</Link>
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
