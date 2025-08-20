"use client";
import GraphicDesignHeroSection from "@/components/pages/graphic-design/graphic-design-hero-section";
import GraphicDesignHowWeWork from "@/components/pages/graphic-design/graphic-design-how-we-work";
import GraphicDesignWhyUs from "@/components/pages/graphic-design/graphic-design-why-us";
import GraphicDesignPortfolio from "@/components/pages/graphic-design/graphic-design-portfolio";
import GraphicDesignFAQ from "@/components/pages/graphic-design/graphic-design-faq";
import Footer from "@/components/modules/footer";

export default function GraphicDesignPage() {
  return (
    <div className="flex flex-col items-center">
      <GraphicDesignHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <GraphicDesignHowWeWork />
        <GraphicDesignWhyUs />
        <GraphicDesignPortfolio />
        <GraphicDesignFAQ />
      </div>

      <Footer />
    </div>
  );
}
