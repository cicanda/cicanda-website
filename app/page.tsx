import type { Metadata } from "next";
import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { FloatingBadge } from "./_components/FloatingBadge";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Nav } from "./_components/Nav";
import { Newsletter } from "./_components/Newsletter";
import { Services } from "./_components/Services";

export const metadata: Metadata = {
  title: "CICANDA · Creating reliable solutions",
  description:
    "CICANDA Limited is a Nigerian firm delivering Information Technology, Media & PR, and Reseller & Partnership services. Headquartered in Abuja, Nigeria, with reach into Europe.",
  alternates: { canonical: "https://cicanda.com" },
  openGraph: {
    title: "CICANDA · Creating reliable solutions",
    description:
      "Information Technology, Media & PR, and Reseller partnerships, delivered reliably from Abuja, Nigeria.",
    url: "https://cicanda.com",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <FloatingBadge />
    </>
  );
}
