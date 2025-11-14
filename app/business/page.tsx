import type { Metadata } from "next";
import BusinessPageClient from "./business-client";

export const metadata: Metadata = {
  title: "Software Solutions for Business - Enterprise Development | LogicCraft",
  description:
    "Custom software solutions for businesses including enterprise applications, business software development, digital transformation, and scalable software solutions tailored to your business needs.",
  keywords:
    "business software, enterprise software, custom business solutions, enterprise development, business applications, digital transformation, corporate software, business software development",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Software Solutions for Business - Enterprise Development | LogicCraft",
    description:
      "Custom software solutions for businesses including enterprise applications, digital transformation, and scalable software solutions.",
    type: "website",
    url: "https://logiccraft.com/business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions for Business - Enterprise Development | LogicCraft",
    description: "Custom software solutions for businesses including enterprise applications and digital transformation.",
  },
  alternates: {
    canonical: "https://logiccraft.com/business",
  },
};

export default function Home() {
  return <BusinessPageClient />;
}
