"use client";
import GraphicDesignHeroSection from "@/components/pages/graphic-design/graphic-design-hero-section";
import GraphicDesignHowWeWork from "@/components/pages/graphic-design/graphic-design-how-we-work";
import GraphicDesignWhyUs from "@/components/pages/graphic-design/graphic-design-why-us";
import GraphicDesignPortfolio from "@/components/pages/graphic-design/graphic-design-portfolio";
import GraphicDesignFAQ from "@/components/pages/graphic-design/graphic-design-faq";
import Footer from "@/components/modules/footer";

export default function GraphicDesignClient() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <GraphicDesignHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <GraphicDesignHowWeWork />
        <GraphicDesignWhyUs />
        <GraphicDesignPortfolio />
        <GraphicDesignFAQ />
      </div>

      <Footer />
    </div>
  );
}

