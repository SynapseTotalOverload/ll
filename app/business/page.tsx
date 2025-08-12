"use client";
import BusinessHeroSection from "@/components/pages/business/business-hero-section";
import BusinessServices from "@/components/pages/business/business-services";
import BusinessPricingModels from "@/components/pages/business/business-pricing-models";
import Footer from "@/components/modules/footer";
import BusinessWhyChooseUs from "@/components/pages/business/business-why-choose-us";
import BusinessAreYouReady from "@/components/pages/business/business-are-you-ready";
import BusinessCaseStudies from "@/components/pages/business/business-case-studies";
import BusinessSoftwareProcess from "@/components/pages/business/business-software-process";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <BusinessHeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <BusinessSoftwareProcess />
        <BusinessServices />
        <BusinessPricingModels />
        <BusinessCaseStudies />
        <BusinessWhyChooseUs />
        <BusinessAreYouReady />
      </div>
      <Footer />
    </div>
  );
}
