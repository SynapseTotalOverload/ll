"use client";
import HomeHeroSection from "@/components/pages/home/home-hero-section";
import HomeOurClients from "@/components/pages/home/home-our-clients";
import HomeServices from "@/components/pages/home/home-services";
import HomeCaseStudies from "@/components/pages/home/home-case-studies";
import HomeClientTestimonials from "@/components/pages/home/home-client-testimonials";
import HomePricingModel from "@/components/pages/home/home-pricing-model";
import HomeContactUs from "@/components/pages/home/home-contact-us";
import Footer from "@/components/modules/footer";
import { InfiniteMovingCards } from "@/components/modules/moving-line";
import { items } from "@/constants/hero/reviews";
import HomeCalculator from "@/components/pages/home/home-calculator";
import StartupHeroSection from "@/components/pages/startups/startup-hero-section";
import StartupJourneySteps from "@/components/pages/startups/startup-journey-steps";
import { HomeStatistic } from "@/components/pages/home/home-statistic";

export default function HomePageClient() {
  return (
    <div className="flex flex-col items-center">
      <StartupHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-8 pt-8 sm:gap-16 sm:pt-16 md:gap-24 md:pt-24 lg:gap-[120px] lg:pt-[120px]">
        <HomeStatistic />
        {/* <HomeOurClients /> */}
        <StartupJourneySteps />
        {/*  <HomeServices /> */}
        <HomeCaseStudies />
        {/* <HomeClientTestimonials /> */}
        <HomeCalculator />
        <HomePricingModel />
      </div>

      <HomeContactUs />
      <Footer />
    </div>
  );
}
