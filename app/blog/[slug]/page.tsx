import type { Metadata } from "next";
import Link from "next/link";
import { makeBreadcrumbSchema } from "../../_lib/schema";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Footer } from "../../_components/Footer";
import { JsonLd } from "../../_components/JsonLd";
import { Nav } from "../../_components/Nav";

type Props = { params: Promise<{ slug: string }> };

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return { data, content };
  } catch {
    return null;
  }
}

function getAllSlugs(): string[] {
  const dir = path.join(process.cwd(), "content/blog");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(".mdx", ""));
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.data.title as string,
    description: post.data.excerpt as string,
    alternates: { canonical: `https://cicanda.com/blog/${slug}` },
    openGraph: {
      title: post.data.title as string,
      description: post.data.excerpt as string,
      url: `https://cicanda.com/blog/${slug}`,
      type: "article",
      publishedTime: post.data.date as string,
      authors: [post.data.author as string],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { data, content } = post;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.excerpt,
    datePublished: data.date,
    author: {
      "@type": "Organization",
      name: data.author ?? "CICANDA Team",
      url: "https://cicanda.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CICANDA Limited",
      url: "https://cicanda.com",
      logo: { "@type": "ImageObject", url: "https://cicanda.com/cicanda-logo.svg" },
    },
    url: `https://cicanda.com/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://cicanda.com/blog/${slug}` },
  };

  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: "Home", item: "https://cicanda.com" },
    { name: "Blog", item: "https://cicanda.com/blog" },
    { name: data.title, item: `https://cicanda.com/blog/${slug}` },
  ]);

  const otherSlugs = getAllSlugs().filter((s) => s !== slug);

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main>
        {/* Post header */}
        <div className="post-header">
          <div className="container">
            <nav
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, color: "var(--c-mute)", marginBottom: 20,
              }}
              aria-label="Breadcrumb"
            >
              <Link href="/" style={{ color: "var(--c-mute)" }}>Home</Link>
              <span aria-hidden="true" style={{ color: "var(--c-line)" }}>›</span>
              <Link href="/blog" style={{ color: "var(--c-mute)" }}>Blog</Link>
              <span aria-hidden="true" style={{ color: "var(--c-line)" }}>›</span>
              <span style={{ color: "var(--c-ink-2)" }}>{data.tag as string}</span>
            </nav>

            {data.tag && (
              <span className="eyebrow" style={{ marginBottom: 16, display: "inline-flex" }}>
                <span className="dot" />
                {data.tag as string}
              </span>
            )}

            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                maxWidth: 780,
                marginTop: 16,
              }}
            >
              {data.title as string}
            </h1>

            <div className="post-meta">
              <span>{data.author as string}</span>
              <span className="dot" aria-hidden="true" />
              <span>{formatDate(data.date as string)}</span>
              <span className="dot" aria-hidden="true" />
              <span>{data.readingTime as string}</span>
            </div>
          </div>
        </div>

        {/* Post body */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="container">
            <div className="post-layout">
              <article className="prose">
                <MDXRemote source={content} />
              </article>

              <aside className="post-sidebar">
                {otherSlugs.length > 0 && (
                  <div className="post-sidebar__card">
                    <h4>Related posts</h4>
                    {otherSlugs.slice(0, 4).map((s) => {
                      const rel = getPost(s);
                      if (!rel) return null;
                      return (
                        <Link key={s} href={`/blog/${s}`} className="related-post">
                          {rel.data.title as string}
                        </Link>
                      );
                    })}
                  </div>
                )}

                <div className="post-sidebar__card" style={{ marginTop: 16 }}>
                  <h4>Get in touch</h4>
                  <p style={{ fontSize: 14, color: "var(--c-mute)", lineHeight: 1.6, marginBottom: 14 }}>
                    If this brief raised questions about your own environment, we are happy to talk.
                  </p>
                  <Link href="/contact" className="btn btn--primary" style={{ fontSize: 14, padding: "12px 18px" }}>
                    Contact CICANDA
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
