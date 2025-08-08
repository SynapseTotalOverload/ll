"use client";
import HeroSection from "@/components/pages/web-dev/hero-section";
import OurService from "@/components/pages/web-dev/our-service";
import CaseStudies from "@/components/pages/web-dev/case-studies";
import Footer from "@/components/modules/footer";
import Technologies from "@/components/pages/web-dev/technologies";
import FAQ from "@/components/pages/web-dev/faq";
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
