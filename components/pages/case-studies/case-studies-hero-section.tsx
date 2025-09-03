"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/bgs/graphic-design.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function CaseStudiesHeroSection() {
  return (
    <div className="flex h-[40vh] w-full flex-col justify-between bg-cover bg-center px-20 py-10">
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="bricolage max-w-[70%] text-center text-[64px] font-[700] text-white">
          We take products and brands to the next level
        </h1>
      </div>
    </div>
  );
}
