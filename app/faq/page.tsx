"use client";
import HeroSection from "@/components/pages/faq/hero-section";
import FAQ from "@/components/pages/faq/faq";
import Footer from "@/components/modules/footer";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
