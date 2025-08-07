"use client";
import HeroSection from "@/components/pages/home/hero-section";
import OurClients from "@/components/pages/home/our-clients";
import OurService from "@/components/pages/home/our-service";
import CaseStudies from "@/components/pages/home/case-studies";
import ClientTestimonials from "@/components/pages/home/client-testimonials";
import PricingModel from "@/components/pages/home/pricing-model";
import ContactUs from "@/components/pages/home/contact-us";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <OurClients />
        <OurService />
        <CaseStudies />
        <ClientTestimonials />
        <PricingModel />
      </div>
      <ContactUs />
    </div>
  );
}
