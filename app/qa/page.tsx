import type { Metadata } from "next";
import QAPageClient from "./qa-client";

export const metadata: Metadata = {
  title: "QA Testing Services - Quality Assurance & Testing | LogicCraft",
  description:
    "Comprehensive QA testing services including automated testing, manual testing, quality assurance, software testing, and test automation for web and mobile applications.",
  keywords:
    "QA testing, quality assurance, software testing, automated testing, manual testing, test automation, QA services, software quality assurance, testing services",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "QA Testing Services - Quality Assurance & Testing | LogicCraft",
    description:
      "Comprehensive QA testing services including automated testing, manual testing, and quality assurance for web and mobile applications.",
    type: "website",
    url: "https://logiccraft.com/qa",
  },
  twitter: {
    card: "summary_large_image",
    title: "QA Testing Services - Quality Assurance & Testing | LogicCraft",
    description: "Comprehensive QA testing services including automated and manual testing for web and mobile applications.",
  },
  alternates: {
    canonical: "https://logiccraft.com/qa",
  },
};

export default function QAPage() {
  return <QAPageClient />;
}
