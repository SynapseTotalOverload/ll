"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/home-hero.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-20 py-10"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="bg-opacity-50-black flex w-fit max-w-[70%] flex-row items-center justify-center p-8 text-center text-[50px] font-[700]">
          <span>Technological Innovations for Business Development</span>
        </div>
        <GoButton text="Click here to get in touch with us" onClick={() => {}} />
      </div>
    </div>
  );
}
