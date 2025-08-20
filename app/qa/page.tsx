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
    <div className="flex flex-col items-center">
      <QAHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
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
