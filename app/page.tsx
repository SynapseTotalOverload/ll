import type { Metadata } from "next";
import HomePageClient from "./home-client";

export const metadata: Metadata = {
  title: "LogicCraft - Custom Software Development & Digital Solutions",
  description:
    "LogicCraft specializes in custom software development, web development, mobile apps, UI/UX design, and digital transformation solutions for businesses and startups.",
  keywords:
    "software development, web development, mobile app development, UI/UX design, custom software, digital solutions, software company, app development",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "LogicCraft - Custom Software Development & Digital Solutions",
    description:
      "LogicCraft specializes in custom software development, web development, mobile apps, UI/UX design, and digital transformation solutions for businesses and startups.",
    type: "website",
    url: "https://logiccraft.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicCraft - Custom Software Development & Digital Solutions",
    description:
      "LogicCraft specializes in custom software development, web development, mobile apps, UI/UX design, and digital transformation solutions.",
  },
  alternates: {
    canonical: "https://logiccraft.com",
  },
};

export default function Home() {
  return <HomePageClient />;
}
