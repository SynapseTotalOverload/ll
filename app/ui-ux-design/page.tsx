"use client";
import HeroSection from "@/components/pages/ui-ux-design/hero-section";
import OurService from "@/components/pages/ui-ux-design/our-service";
import CaseStudies from "@/components/pages/ui-ux-design/case-studies";
import Footer from "@/components/modules/footer";
import Technologies from "@/components/pages/ui-ux-design/technologies";
import FAQ from "@/components/pages/ui-ux-design/faq";
import Process from "@/components/pages/ui-ux-design/how-we-work";

export default function UIUXDesign() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <OurService />

        <Process />
        <CaseStudies />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
