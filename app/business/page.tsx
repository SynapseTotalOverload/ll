"use client";
import HeroSection from "@/components/pages/business/hero-section";
import OurStartUpService from "@/components/pages/business/our-start-up";
import PricingModel from "@/components/pages/business/pricing-model";
import Footer from "@/components/modules/footer";
import WhyUs from "@/components/pages/business/why-us";
import AreYouReady from "@/components/pages/business/are-you-read";
import PortfolioStartups from "@/components/pages/business/product-portfolio";
import FromIdea from "@/components/pages/business/from-idea";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <FromIdea />
        <OurStartUpService />
        <PricingModel />
        <PortfolioStartups />
        <WhyUs />
        <AreYouReady />
      </div>
      <Footer />
    </div>
  );
}
