"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/home-hero.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16">
        <div className="bg-opacity-50-black flex w-fit max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] flex-row items-center justify-center rounded-sm p-4 sm:p-6 md:p-7 lg:p-8 text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-[700]">
          <span>Technological Innovations for Business Development</span>
        </div>
        <GoButton text="Click here to get in touch with us" onClick={() => {}} />
      </div>
    </div>
  );
}
