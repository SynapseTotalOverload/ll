import type { Metadata } from "next";
import AboutUsHeroSection from "@/components/pages/about-us/about-us-hero-section";
import Footer from "@/components/modules/footer";
import AboutUsContactForm from "@/components/pages/about-us/about-us-contact-form";
import SuccessStories from "@/components/pages/about-us/success-stories";
import AboutUsCTA from "@/components/pages/about-us/about-us-cta";
import AboutUsMainContent from "@/components/pages/about-us/about-us-main-content";
import AboutUsStatistics from "@/components/pages/about-us/about-us-statistics";
import CompanyValues from "@/components/pages/about-us/company-values";

export const metadata: Metadata = {
  title: "About Us - LogicCraft | Software Development Company",
  description:
    "Learn about LogicCraft, a leading software development company specializing in custom software solutions, web development, mobile apps, and digital transformation services.",
  keywords:
    "about LogicCraft, software development company, custom software solutions, web development team, mobile app developers, digital transformation",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "About Us - LogicCraft | Software Development Company",
    description:
      "Learn about LogicCraft, a leading software development company specializing in custom software solutions, web development, mobile apps, and digital transformation services.",
    type: "website",
    url: "https://logiccraft.com/about-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - LogicCraft | Software Development Company",
    description:
      "Learn about LogicCraft, a leading software development company specializing in custom software solutions.",
  },
  alternates: {
    canonical: "https://logiccraft.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center">
      <AboutUsHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <AboutUsMainContent />
      </div>
      <AboutUsStatistics />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <CompanyValues />
        <AboutUsCTA />
        <SuccessStories />
      </div>
      <AboutUsContactForm />
      <Footer />
    </div>
  );
}
