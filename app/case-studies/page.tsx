import type { Metadata } from "next";
import CaseStudiesPageClient from "./case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies - Software Development Projects | LogicCraft",
  description:
    "Explore LogicCraft's portfolio of successful software development projects, web applications, mobile apps, and digital solutions. See how we've helped businesses transform their digital presence.",
  keywords:
    "case studies, software development projects, portfolio, web development projects, mobile app projects, software solutions, project examples, development portfolio",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Case Studies - Software Development Projects | LogicCraft",
    description:
      "Explore LogicCraft's portfolio of successful software development projects, web applications, mobile apps, and digital solutions.",
    type: "website",
    url: "https://logiccraft.com/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Software Development Projects | LogicCraft",
    description: "Explore LogicCraft's portfolio of successful software development projects and digital solutions.",
  },
  alternates: {
    canonical: "https://logiccraft.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
