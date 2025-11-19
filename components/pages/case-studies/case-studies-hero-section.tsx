"use client";
import heroBanner from "@/public/assets/bgs/graphic-design.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";
import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function CaseStudiesHeroSection() {
  return (
    <div className="flex min-h-[40vh] w-full flex-col justify-between bg-cover bg-center px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-20">
      {/* Header Navigation */}
      <header className="flex flex-row items-center justify-between">
        <Logo className="h-[5vh] origin-top-left scale-[-30%] rotate-180 pt-20 md:scale-[-10%]" />
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Title */}
      <div className="flex flex-col items-center justify-center py-4 sm:py-6">
        <h1 className="bricolage w-full text-center text-[28px] font-[700] text-white sm:text-[36px] md:max-w-[80%] md:text-[42px] lg:max-w-[70%] lg:text-[48px]">
          We take products and brands to the next level
        </h1>
      </div>
    </div>
  );
}
