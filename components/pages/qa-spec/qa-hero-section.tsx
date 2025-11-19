"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/bgs/qa.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";
import Logo from "@/components/ui/logo";
export default function QAHeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="flex min-h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-20 lg:py-12"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center justify-between">
        <Logo className="h-[5vh] origin-top-left scale-[-30%] rotate-180 pt-20 md:scale-[-10%]" />
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex w-full max-w-[95%] flex-col items-center justify-center gap-4 rounded-sm p-4 text-center sm:max-w-[90%] sm:p-6 md:max-w-[85%] md:p-8 lg:max-w-[80%] lg:p-10 xl:max-w-[75%] xl:p-12">
          <h1 className="custom-font-bricolage text-xl leading-tight font-bold tracking-tight sm:text-2xl sm:leading-snug md:text-3xl md:leading-normal lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-loose">
            QA Automation and QA Manual
          </h1>
          <p className="text-xs leading-relaxed font-normal sm:text-sm md:text-base lg:text-lg xl:text-lg">
            Testing already deployed projects or created from scratch eliminates the possibility of wrong functionality
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
