import type { Metadata } from "next";
import Link from "next/link";
import { makeBreadcrumbSchema } from "../_lib/schema";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogGrid } from "../_components/BlogGrid";
import type { PostMeta } from "../_components/BlogGrid";
import { Footer } from "../_components/Footer";
import { JsonLd } from "../_components/JsonLd";
import { Nav } from "../_components/Nav";
import { PageHero } from "../_components/PageHero";

export const metadata: Metadata = {
  title: "Insights from the CICANDA Desk",
  description:
    "Perspectives on IT, Media & PR, and market partnerships in Nigeria. Brief notes on what we are seeing and working on, once a month, no noise.",
  alternates: { canonical: "https://cicanda.com/blog" },
  openGraph: {
    title: "Insights from the CICANDA Desk",
    description:
      "Perspectives on IT, Media & PR, and market partnerships in Nigeria.",
    url: "https://cicanda.com/blog",
  },
};

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: "Home", item: "https://cicanda.com" },
  { name: "Blog", item: "https://cicanda.com/blog" },
]);


function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), "content/blog");
  try {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    return files
      .map((file) => {
        const slug = file.replace(".mdx", "");
        const raw = fs.readFileSync(path.join(dir, file), "utf8");
        const { data } = matter(raw);
        return {
          slug,
          title: data.title as string,
          excerpt: data.excerpt as string,
          date: data.date as string,
          author: data.author as string,
          readingTime: data.readingTime as string,
          tag: data.tag as string,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          eyebrow="Insights"
          title="From the CICANDA desk."
          lead="Brief perspectives on IT, communications, and market partnerships in Nigeria. Once a month, no noise."
        />

        <section className="section">
          <div className="container">
            {posts.length === 0 ? (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
                <p style={{ color: "var(--c-mute)", fontSize: 16 }}>
                  Posts coming soon. In the meantime,{" "}
                  <Link href="/contact" style={{ color: "var(--c-blue-800)", fontWeight: 500 }}>
                    get in touch
                  </Link>{" "}
                  with any questions.
                </p>
              </div>
            ) : (
              <BlogGrid posts={posts} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
