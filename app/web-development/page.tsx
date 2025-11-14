import type { Metadata } from "next";
import WebDevelopmentClient from "./web-development-client";

export const metadata: Metadata = {
  title: "Web Development Services - Custom Web Applications | LogicCraft",
  description:
    "Professional web development services including custom web applications, responsive websites, e-commerce platforms, and modern web solutions using React, Next.js, and cutting-edge technologies.",
  keywords:
    "web development, custom web applications, responsive websites, e-commerce development, React development, Next.js, web development services, frontend development, backend development",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Web Development Services - Custom Web Applications | LogicCraft",
    description:
      "Professional web development services including custom web applications, responsive websites, e-commerce platforms, and modern web solutions.",
    type: "website",
    url: "https://logiccraft.com/web-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services - Custom Web Applications | LogicCraft",
    description: "Professional web development services for custom web applications and modern web solutions.",
  },
  alternates: {
    canonical: "https://logiccraft.com/web-development",
  },
};

export default function Home() {
  return <WebDevelopmentClient />;
}
