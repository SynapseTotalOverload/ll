import type { Metadata } from "next";
import BlogPageClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog - Software Development Insights & Guides | LogicCraft",
  description:
    "Read the latest articles, guides, and insights about software development, web development, mobile app development, UI/UX design, and technology trends from LogicCraft experts.",
  keywords:
    "software development blog, web development blog, mobile app development blog, technology blog, development guides, programming articles, tech insights",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Blog - Software Development Insights & Guides | LogicCraft",
    description:
      "Read the latest articles, guides, and insights about software development, web development, mobile app development, and technology trends.",
    type: "website",
    url: "https://logiccraft.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Software Development Insights & Guides | LogicCraft",
    description: "Read the latest articles and guides about software development and technology trends.",
  },
  alternates: {
    canonical: "https://logiccraft.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
