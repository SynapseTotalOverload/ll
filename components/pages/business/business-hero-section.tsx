"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/hero-design.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

export default function HeroSection() {
  return (
    <div className="hero-bg flex min-h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-20 lg:py-12">
      {/* Header Navigation */}
      <header className="flex flex-row items-center justify-between">
        <Button variant="link" className="text-sm font-medium sm:text-base md:text-lg">
          LogicCraft
        </Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex w-full max-w-[95%] flex-col items-center justify-center gap-4 text-center sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%]">
          <h1 className="brig custom-font-bricolage text-3xl leading-tight font-bold tracking-tight sm:text-4xl sm:leading-snug md:text-5xl md:leading-normal lg:text-6xl lg:leading-relaxed xl:text-7xl xl:leading-loose">
            Software team extension services for scaling projects never seen before!
          </h1>
          <p className="text-base leading-relaxed font-normal sm:text-lg md:text-xl lg:text-2xl">
            Yes, running a business can be overwhelming. Especially when your company has reached a pivotal point and
            needs to extend its business model. Digital transformation can help you make headway, while successful
            scaling will fulfill your organization&apos;s potential.
          </p>
          <p className="text-sm leading-relaxed font-normal sm:text-base md:text-lg lg:text-xl">
            To focus on your growing business, you&apos;ll need a proficient technology partner to delegate your
            software woes. We at LogicCraft are experts in product design, web, and mobile development. Additionally, we
            empower your endeavors by providing a fractional CTO service, ensuring strategic technical leadership. So
            let us offer full-cycle software product development services and augment your in-house tech team with our
            software pros.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16 lg:gap-20">
        <GoButton
          text="Click here to get in touch with us"
          onClick={() => {}}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
}
