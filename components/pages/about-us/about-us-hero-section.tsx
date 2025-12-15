"use client";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";
import Logo from "@/components/ui/logo";

export default function AboutUsHeroSection() {
  return (
    <div className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-black px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10">
      {/* Blue Glow Background Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[80%] w-[80%] rounded-full bg-[#00b7ff] opacity-20 blur-[120px]" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 flex flex-row items-center justify-between">
        <Logo className="h-[5vh] origin-top-left scale-[-30%] rotate-180 pt-20 md:scale-[-10%]" />
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16">
        {/* ABOUT US Heading */}
        <h1 className="custom-font-bricolage text-center text-sm font-[300] tracking-wider text-white uppercase sm:text-base md:text-lg">
          ABOUT US
        </h1>

        {/* LogicCraft Company Name */}
        <h2 className="custom-font-bricolage text-center text-6xl leading-[120%] font-[800] tracking-[-0.03em] text-white capitalize sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] 2xl:text-[250px]">
          LogicCraft
        </h2>

        {/* Service Columns */}
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10">
          <div className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            {/* WEB DEVELOPMENT */}
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">WEB</span>
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">DEVELOPMENT</span>
            </div>

            {/* MOBILE DEVELOPMENT */}
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">MOBILE</span>
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">DEVELOPMENT</span>
            </div>

            {/* UI/UX DESIGN */}
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">UI/UX</span>
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">DESIGN</span>
            </div>

            {/* GRAPHIC DESIGN */}
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">GRAPHIC</span>
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">DESIGN</span>
            </div>

            {/* AUTOMATION QA & MANUAL */}
            <div className="col-span-2 flex flex-col items-center justify-center gap-1 text-center sm:col-span-1">
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">AUTOMATION</span>
              <span className="text-xs font-[300] text-white uppercase sm:text-sm md:text-base">QA & MANUAL</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <GoButton
            text="Click here to get in touch with us"
            onClick={() => {
              window.location.href = "/contact-us";
            }}
          />
        </div>
      </div>
    </div>
  );
}
