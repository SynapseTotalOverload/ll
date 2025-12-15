"use client";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function UIUXHowWeWork() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">How we work</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          The approach.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
        {/* Step 1 */}
        <div className="w-full">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-night-blue text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">01</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Understand your business and values as you do.
            </InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4 text-sm sm:text-base md:text-lg">
            Before starting any project, we strive to obtain the same understanding of the product and business context
            as our clients have. Then, we go deeper and analyze the market and users.
          </InfoCard.Description>
        </div>

        {/* Step 2 */}
        <div className="w-full">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-night-blue text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">02</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Create a solution that brings value to the user.
            </InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4 text-sm sm:text-base md:text-lg">
            We&apos;re devoted to elegant digital product design and craft products users love and clients cherish – all
            thanks to the wide variety of design techniques and the business approach we use.
          </InfoCard.Description>
        </div>

        {/* Step 3 */}
        <div className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-night-blue text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">03</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Support the successful launch of the product.
            </InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4 text-sm sm:text-base md:text-lg">
            We fight for the product from idea to its release and support it with development documentation, guidance,
            and supervision.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
