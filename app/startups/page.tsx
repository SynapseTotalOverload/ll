"use client";
import HeroSection from "@/components/pages/startups/hero-section";

import Footer from "@/components/modules/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      <Footer />
    </div>
  );
}
