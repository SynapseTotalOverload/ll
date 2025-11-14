"use client";
import UIUXHeroSection from "@/components/pages/ui-ux-design/ui-ux-hero-section";
import UIUXHowWeWork from "@/components/pages/ui-ux-design/ui-ux-how-we-work";
import UIUXCaseStudies from "@/components/pages/ui-ux-design/ui-ux-case-studies";
import Footer from "@/components/modules/footer";
import UIUXWhyUs from "@/components/pages/ui-ux-design/ui-ux-why-us";
import UIUXFAQ from "@/components/pages/ui-ux-design/ui-ux-faq";

export default function UIUXDesignClient() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <UIUXHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <UIUXHowWeWork />
        <UIUXWhyUs />
        <UIUXCaseStudies />
        <UIUXFAQ />
      </div>

      <Footer />
    </div>
  );
}

