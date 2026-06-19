"use client";
import Link from "next/link";
import { motion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  tag: string;
};

const MotionLink = motion.create(Link);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogGrid({ posts }: { posts: PostMeta[] }) {
  return (
    <motion.div
      className="blog-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={container}
    >
      {posts.map((post) => (
        <MotionLink
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="blog-card"
          variants={card}
          whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="blog-card__body">
            <span className="blog-card__tag">{post.tag}</span>
            <div className="blog-card__title">{post.title}</div>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <div className="blog-card__meta">
              <span>{post.author}</span>
              <span className="dot" aria-hidden="true" />
              <span>{formatDate(post.date)}</span>
              <span className="dot" aria-hidden="true" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </MotionLink>
      ))}
    </motion.div>
  );
}
