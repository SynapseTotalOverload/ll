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
        <div className="flex flex-1 flex-row items-center justify-center">
          <MenuBar />
        </div>
      </header>

      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[70%] flex-col items-center justify-center gap-4 text-center">
          <span className="brig custom-font-bricolage text-[64px] leading-[120%] font-[700] tracking-[-3px]">
            Software team extension services for scaling projects never seen before!
          </span>
          <span className="text-[20px] font-[400]">
            Yes, running a business can be overwhelming. Especially when your company has reached a pivotal point and
            needs to extend its business model. Digital transformation can help you make headway, while successful
            scaling will fulfill your organization’s potential.
          </span>
          <span className="text-[20px] font-[400]">
            To focus on your growing business, you’ll need a proficient technology partner to delegate your software
            woes. We at LogicCraft are experts in product design, web, and mobile development. Additionally, we empower
            your endeavors by providing a fractional CTO service, ensuring strategic technical leadership. So let us
            offer full-cycle software product development services and augment your in-house tech team with our software
            pros.
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
