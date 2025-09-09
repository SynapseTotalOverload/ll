"use client";
import BlogHeroSection from "@/components/pages/blog/blog-hero-section";
import BlogListing from "@/components/pages/blog/blog-listing";
import Footer from "@/components/modules/footer";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center">
      <BlogHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[120px] pt-[120px]">
        <BlogListing />
      </div>
      <Footer />
    </div>
  );
}
