import type { Metadata } from "next";
import FAQPageClient from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | LogicCraft",
  description:
    "Find answers to frequently asked questions about LogicCraft's software development services, web development, mobile app development, pricing, and project processes.",
  keywords:
    "FAQ, frequently asked questions, software development FAQ, web development questions, mobile app development FAQ, software company FAQ",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "FAQ - Frequently Asked Questions | LogicCraft",
    description:
      "Find answers to frequently asked questions about LogicCraft's software development services, web development, mobile app development, pricing, and project processes.",
    type: "website",
    url: "https://logiccraft.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | LogicCraft",
    description: "Find answers to frequently asked questions about LogicCraft's services.",
  },
  alternates: {
    canonical: "https://logiccraft.com/faq",
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
