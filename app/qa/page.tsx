"use client";
import QAHeroSection from "@/components/pages/qa-spec/qa-hero-section";
import QAServices from "@/components/pages/qa-spec/qa-services";
import QAMethodology from "@/components/pages/qa-spec/qa-methodology";
import QAHowWeWork from "@/components/pages/qa-spec/qa-how-we-work";
import QAPortfolio from "@/components/pages/qa-spec/qa-portfolio";
import QAFAQ from "@/components/pages/qa-spec/qa-faq";
import Footer from "@/components/modules/footer";

export default function QAPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <QAHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <QAServices />
        <QAMethodology />
        <QAHowWeWork />
        <QAPortfolio />
        <QAFAQ />
      </div>

      <Footer />
    </div>
  );
}
