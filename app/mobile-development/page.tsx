"use client";
import MobileAppHeroSection from "@/components/pages/mobile-app/mobile-app-hero-section";
import MobileAppServices from "@/components/pages/mobile-app/mobile-app-services";
import MobileAppCaseStudies from "@/components/pages/mobile-app/mobile-app-case-studies";
import Footer from "@/components/modules/footer";
import MobileAppTechnologies from "@/components/pages/mobile-app/mobile-app-technologies";
import MobileAppFAQ from "@/components/pages/mobile-app/mobile-app-faq";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <MobileAppHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <MobileAppServices />
        <MobileAppTechnologies />
        <MobileAppCaseStudies />
        <MobileAppFAQ />
      </div>

      <Footer />
    </div>
  );
}
