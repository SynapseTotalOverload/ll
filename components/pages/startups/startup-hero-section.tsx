"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/hero-design.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function HeroSection() {
  return (
    <div className="hero-bg flex h-screen w-full flex-col justify-between bg-cover bg-center px-20 py-10">
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[70%] flex-col items-center justify-center gap-4 text-center">
          <span className="brig custom-font-bricolage text-[64px] leading-[120%] font-[700] tracking-[-3px]">
            Grow your idea with software development for startups
          </span>
          <span className="text-[20px] font-[400]">We know what it takes to grow a product and make it thrive!</span>
          <span className="text-[20px] font-[400]">
            With LogicCraft, you don’t need to hire developers on your own, have tech know-how, or guess whether your
            project will work out or not. We’ll handle all things tech while you do business.
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-16">
        <GoButton text="Click here to get in touch with us" onClick={() => {}} />
      </div>
    </div>
  );
}
