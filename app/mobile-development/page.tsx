"use client";
import HeroSection from "@/components/pages/mobile-app/hero-section";
import OurService from "@/components/pages/mobile-app/our-service";
import CaseStudies from "@/components/pages/mobile-app/case-studies";
import Footer from "@/components/modules/footer";
import Technologies from "@/components/pages/mobile-app/technologies";
import FAQ from "@/components/pages/mobile-app/faq";
import Process from "@/components/pages/mobile-app/how-we-work";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <OurService />
        <Technologies />
        <CaseStudies />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
