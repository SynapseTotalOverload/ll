"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/bgs/graphic-design.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function GraphicDesignHeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-20 py-10"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-fit max-w-[60%] flex-col items-center justify-center rounded-sm p-8 text-center text-[64px] font-[700]">
          <span>Graphic Design</span>
          <span className="text-[20px] font-[400]">
            At LogicCraft, we believe that great design is a collaborative process. Our goal is to not only meet your
            expectations but to exceed them through a seamless, efficient, and creative approach. Here&apos;s how we do
            it
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
