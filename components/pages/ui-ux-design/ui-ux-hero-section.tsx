"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/bgs/ui-ux.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="flex min-h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-20 lg:py-12"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center justify-between">
        <Button variant="link" className="text-xs font-medium sm:text-sm md:text-base">
          LogicCraft
        </Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex w-full max-w-[95%] flex-col items-center justify-center gap-4 rounded-sm p-4 text-center sm:max-w-[90%] sm:p-6 md:max-w-[85%] md:p-8 lg:max-w-[80%] lg:p-10 xl:max-w-[75%] xl:p-12">
          <h1 className="custom-font-bricolage text-2xl leading-tight font-bold tracking-tight sm:text-3xl sm:leading-snug md:text-4xl md:leading-normal lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-loose">
            UI/UX Design
          </h1>
          <p className="text-xs leading-relaxed font-normal sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Thoughtful design based on user experience and deep analysis of business goals tailored to customer
            requirements
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16 lg:gap-20">
        <GoButton
          text="Click here to get in touch with us"
          onClick={() => {
            window.location.href = "/contact-us";
          }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
}
