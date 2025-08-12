"use client";
import MobileAppHeroSection from "@/components/pages/mobile-app/mobile-app-hero-section";
import MobileAppServices from "@/components/pages/mobile-app/mobile-app-services";
import MobileAppCaseStudies from "@/components/pages/mobile-app/mobile-app-case-studies";
import Footer from "@/components/modules/footer";
import MobileAppTechnologies from "@/components/pages/mobile-app/mobile-app-technologies";
import MobileAppFAQ from "@/components/pages/mobile-app/mobile-app-faq";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <MobileAppHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <MobileAppServices />
        <MobileAppTechnologies />
        <MobileAppCaseStudies />
        <MobileAppFAQ />
      </div>

      <Footer />
    </div>
  );
}
