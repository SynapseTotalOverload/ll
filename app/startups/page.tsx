"use client";
import HeroSection from "@/components/pages/startups/hero-section";
import OurStartUpService from "@/components/pages/startups/our-start-up";
import PricingModel from "@/components/pages/startups/pricing-model";
import Footer from "@/components/modules/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <OurStartUpService />
        <PricingModel />
      </div>
      <Footer />
    </div>
  );
}
