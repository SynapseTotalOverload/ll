"use client";
import FAQHeroSection from "@/components/pages/faq/faq-hero-section";
import FAQAccordion from "@/components/pages/faq/faq-accordion";
import Footer from "@/components/modules/footer";

export default function FAQPageClient() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <FAQHeroSection />
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <FAQAccordion />
      </div>
      <Footer />
    </div>
  );
}

