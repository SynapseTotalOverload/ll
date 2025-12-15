"use client";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BusinessWhyChooseUs() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why choose us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Why Choose Us Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
        {/* Reason 1 */}
        <div className="flex w-full flex-col">
          <span className="text-plastic custom-font-bricolage text-6xl font-bold tracking-tight sm:text-7xl sm:tracking-tighter md:text-8xl md:tracking-tight lg:text-9xl lg:tracking-tight xl:text-[126px] xl:tracking-[-12px]">
            01
          </span>
          <InfoCard.Title className="mt-4 min-h-[3rem] text-lg sm:mt-6 sm:text-xl md:min-h-[3.5rem] md:text-2xl lg:min-h-[4rem] lg:text-3xl">
            Deep technical expertise
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Work with tech pros and award-winning specialists. Our team consists of experts in a wide array of technologies, offering full-cycle software development services.
          </InfoCard.Description>
        </div>

        {/* Reason 2 */}
        <div className="flex w-full flex-col">
          <span className="text-plastic custom-font-bricolage text-6xl font-bold tracking-tight sm:text-7xl sm:tracking-tighter md:text-8xl md:tracking-tight lg:text-9xl lg:tracking-tight xl:text-[126px] xl:tracking-[-12px]">
            02
          </span>
          <InfoCard.Title className="mt-4 min-h-[3rem] text-lg sm:mt-6 sm:text-xl md:min-h-[3.5rem] md:text-2xl lg:min-h-[4rem] lg:text-3xl">
            Best talents
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            People are our greatest value. We invest in people and get rewarded with some of the best talents on the market. Our quit rate has been close to zero.
          </InfoCard.Description>
        </div>

        {/* Reason 3 */}
        <div className="flex w-full flex-col sm:col-span-1 md:col-span-2 lg:col-span-1">
          <span className="text-plastic custom-font-bricolage text-6xl font-bold tracking-tight sm:text-7xl sm:tracking-tighter md:text-8xl md:tracking-tight lg:text-9xl lg:tracking-tight xl:text-[126px] xl:tracking-[-12px]">
            03
          </span>
          <InfoCard.Title className="mt-4 min-h-[3rem] text-lg sm:mt-6 sm:text-xl md:min-h-[3.5rem] md:text-2xl lg:min-h-[4rem] lg:text-3xl">
            Clear development process
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Transparent project management and communication. We report progress at each step in a way that&apos;s tailored to you and makes our process clear.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
