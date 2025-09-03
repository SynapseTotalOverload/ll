"use client";
import StartupHeroSection from "@/components/pages/startups/startup-hero-section";
import StartupServices from "@/components/pages/startups/startup-services";
import StartupPricingModels from "@/components/pages/startups/startup-pricing-models";
import Footer from "@/components/modules/footer";
import StartupWhyUs from "@/components/pages/startups/startup-why-us";
import StartupAreYouReady from "@/components/pages/startups/startup-are-you-ready";
import StartupCaseStudies from "@/components/pages/startups/startup-case-studies";
import StartupJourneySteps from "@/components/pages/startups/startup-journey-steps";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <StartupHeroSection />
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <StartupJourneySteps />
        <StartupServices />
        <StartupPricingModels />
        <StartupCaseStudies />
        <StartupWhyUs />
        <StartupAreYouReady />
      </div>
      <Footer />
    </div>
  );
}
