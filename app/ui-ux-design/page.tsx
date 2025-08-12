"use client";
import UIUXHeroSection from "@/components/pages/ui-ux-design/ui-ux-hero-section";
import UIUXHowWeWork from "@/components/pages/ui-ux-design/ui-ux-how-we-work";
import UIUXCaseStudies from "@/components/pages/ui-ux-design/ui-ux-case-studies";
import Footer from "@/components/modules/footer";
import UIUXWhyUs from "@/components/pages/ui-ux-design/ui-ux-why-us";
import UIUXFAQ from "@/components/pages/ui-ux-design/ui-ux-faq";

export default function UIUXDesign() {
  return (
    <div className="flex flex-col items-center">
      <UIUXHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <UIUXHowWeWork />
        <UIUXWhyUs />
        <UIUXCaseStudies />
        <UIUXFAQ />
      </div>

      <Footer />
    </div>
  );
}
