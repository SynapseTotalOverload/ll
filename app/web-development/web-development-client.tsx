"use client";
import HeroSection from "@/components/pages/web-dev/hero-section";
import OurService from "@/components/pages/web-dev/our-service";
import CaseStudies from "@/components/pages/web-dev/case-studies";
import Footer from "@/components/modules/footer";
import Technologies from "@/components/pages/web-dev/technologies";
import FAQ from "@/components/pages/web-dev/faq";
import Process from "@/components/pages/web-dev/how-we-work";

export default function WebDevelopmentClient() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <OurService />
        <Technologies />
        <Process />
        <CaseStudies />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
