"use client";
import HeroSection from "@/components/pages/startups/hero-section";
import OurStartUpService from "@/components/pages/startups/our-start-up";
import PricingModel from "@/components/pages/startups/pricing-model";
import Footer from "@/components/modules/footer";
import WhyUs from "@/components/pages/startups/why-us";
import AreYouReady from "@/components/pages/startups/are-you-read";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <OurStartUpService />
        <PricingModel />
        <WhyUs />
        <AreYouReady />
      </div>
      <Footer />
    </div>
  );
}
