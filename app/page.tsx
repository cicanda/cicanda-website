import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Nav } from "./_components/Nav";
import { Newsletter } from "./_components/Newsletter";
import { Services } from "./_components/Services";

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
    </>
  );
}
