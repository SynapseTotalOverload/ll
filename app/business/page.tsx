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
    <div className="flex min-h-screen flex-col items-center">
      <BusinessHeroSection />
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
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
