import type { Metadata } from "next";
import UIUXDesignClient from "./ui-ux-design-client";

export const metadata: Metadata = {
  title: "UI/UX Design Services - User Experience Design | LogicCraft",
  description:
    "Professional UI/UX design services creating intuitive, user-centered digital experiences. Expert design for web and mobile applications with focus on usability and conversion.",
  keywords:
    "UI/UX design, user experience design, user interface design, UX services, UI design services, design thinking, user-centered design, interface design, usability design",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "UI/UX Design Services - User Experience Design | LogicCraft",
    description:
      "Professional UI/UX design services creating intuitive, user-centered digital experiences for web and mobile applications.",
    type: "website",
    url: "https://logiccraft.com/ui-ux-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services - User Experience Design | LogicCraft",
    description: "Professional UI/UX design services creating intuitive, user-centered digital experiences.",
  },
  alternates: {
    canonical: "https://logiccraft.com/ui-ux-design",
  },
};

export default function UIUXDesign() {
  return <UIUXDesignClient />;
}
