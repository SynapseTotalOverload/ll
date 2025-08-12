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
    <div className="flex flex-col items-center">
      <StartupHeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
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
