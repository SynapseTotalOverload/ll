import type { Metadata } from "next";
import MobileDevelopmentClient from "./mobile-development-client";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS & Android Apps | LogicCraft",
  description:
    "Expert mobile app development services for iOS and Android using React Native, TypeScript, and modern mobile technologies. Build scalable, high-performance mobile applications.",
  keywords:
    "mobile app development, iOS app development, Android app development, React Native, mobile app services, cross-platform apps, native app development, mobile applications",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Mobile App Development Services - iOS & Android Apps | LogicCraft",
    description:
      "Expert mobile app development services for iOS and Android using React Native, TypeScript, and modern mobile technologies.",
    type: "website",
    url: "https://logiccraft.com/mobile-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services - iOS & Android Apps | LogicCraft",
    description: "Expert mobile app development services for iOS and Android using React Native and modern technologies.",
  },
  alternates: {
    canonical: "https://logiccraft.com/mobile-development",
  },
};

export default function Home() {
  return <MobileDevelopmentClient />;
}
