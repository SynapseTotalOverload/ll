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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HomeHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <HomeOurClients />
        <HomeServices />
        <HomeCaseStudies />
        <HomeClientTestimonials />
        <HomePricingModel />
      </div>
      <InfiniteMovingCards direction="left" items={items} />
      <HomeContactUs />
      <Footer />
    </div>
  );
}
