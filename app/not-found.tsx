import Link from "next/link";
import { Footer } from "./_components/Footer";
import { Nav } from "./_components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <div className="not-found-page">
          <div>
            <div className="not-found-page__code" aria-hidden="true">404</div>
            <h1>Page not found.</h1>
            <p>
              The page you&rsquo;re looking for doesn&rsquo;t exist or has been
              moved. Let us point you somewhere useful.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" className="btn btn--primary">
                Back to home
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
