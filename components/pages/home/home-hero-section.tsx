"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/home-hero.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16">
        <div className="bg-opacity-50-black flex w-fit max-w-[90%] flex-row items-center justify-center rounded-sm p-4 text-center text-[20px] font-[700] sm:max-w-[80%] sm:p-6 sm:text-[26px] md:max-w-[75%] md:p-7 md:text-[32px] lg:max-w-[70%] lg:p-8 lg:text-[40px]">
          <span>Technological Innovations for Business Development</span>
        </div>
        <GoButton text="Click here to get in touch with us" onClick={() => {}} />
      </div>
    </div>
  );
}
