import type { Metadata } from "next";
import TermsOfUsagePageClient from "./terms-of-usage-client";

export const metadata: Metadata = {
  title: "Terms of Usage - LogicCraft",
  description: "Terms of Usage and Service Agreement for LogicCraft software development services.",
  keywords: "terms of usage, terms of service, service agreement, LogicCraft",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Terms of Usage - LogicCraft",
    description: "Terms of Usage and Service Agreement for LogicCraft software development services.",
    type: "website",
    url: "https://logiccraft.com/terms-of-usage",
  },
  alternates: {
    canonical: "https://logiccraft.com/terms-of-usage",
  },
};

export default function TermsOfUsagePage() {
  return <TermsOfUsagePageClient />;
}
