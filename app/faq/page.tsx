"use client";
import FAQHeroSection from "@/components/pages/faq/faq-hero-section";
import FAQAccordion from "@/components/pages/faq/faq-accordion";
import Footer from "@/components/modules/footer";

export default function FAQPage() {
  return (
    <div className="flex flex-col items-center">
      <FAQHeroSection />
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <FAQAccordion />
      </div>
      <Footer />
    </div>
  );
}
