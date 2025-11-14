import type { Metadata } from "next";
import GraphicDesignClient from "./graphic-design-client";

export const metadata: Metadata = {
  title: "Graphic Design Services - Brand Identity & Visual Design | LogicCraft",
  description:
    "Professional graphic design services including brand identity, logo design, visual branding, marketing materials, and creative design solutions for businesses.",
  keywords:
    "graphic design, brand identity, logo design, visual branding, marketing design, creative design services, brand design, corporate identity design",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Graphic Design Services - Brand Identity & Visual Design | LogicCraft",
    description:
      "Professional graphic design services including brand identity, logo design, visual branding, and marketing materials.",
    type: "website",
    url: "https://logiccraft.com/graphic-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Services - Brand Identity & Visual Design | LogicCraft",
    description: "Professional graphic design services for brand identity, logo design, and visual branding.",
  },
  alternates: {
    canonical: "https://logiccraft.com/graphic-design",
  },
};

export default function GraphicDesignPage() {
  return <GraphicDesignClient />;
}
