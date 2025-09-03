"use client";
import { Button } from "@/components/ui/button";
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
          <span className="brig custom-font-bricolage text-[64px] leading-[120%] font-[700] tracking-[-3px]">FAQ </span>
          <span className="text-[20px] font-[400]">Hi! Explore answers to the questions we get asked the most.</span>
          <span className="text-[20px] font-[400]">
            We do our best to provide you with the exceptional quality of software development, make the process smooth
            and transparent and answer all your questions.
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
