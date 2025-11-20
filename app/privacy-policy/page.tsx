import type { Metadata } from "next";
import PrivacyPolicyPageClient from "./privacy-policy-client";

export const metadata: Metadata = {
  title: "Privacy Policy - LogicCraft",
  description: "Privacy Policy for LogicCraft software development services. Learn how we collect, use, and protect your data.",
  keywords: "privacy policy, data protection, GDPR, data privacy, LogicCraft",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Privacy Policy - LogicCraft",
    description: "Privacy Policy for LogicCraft software development services. Learn how we collect, use, and protect your data.",
    type: "website",
    url: "https://logiccraft.com/privacy-policy",
  },
  alternates: {
    canonical: "https://logiccraft.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}

