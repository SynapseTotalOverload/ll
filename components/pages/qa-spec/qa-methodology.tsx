"use client";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";

export default function QAMethodology() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our QA Methodology</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Methodology Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
        {/* Methodology Card 1 */}
        <InfoCard className="w-full">
          <LampEffect>
            <div className="text-night-blue text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">01</div>
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Risk management
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            When we talk about software, anything can go wrong at any time. A risk management system helps to develop
            measures for minimizing risks and assess the effectiveness of these measures.
          </InfoCard.Description>
        </InfoCard>

        {/* Methodology Card 2 */}
        <InfoCard className="w-full">
          <LampEffect>
            <div className="text-night-blue text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">02</div>
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Test strategy
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            A good test strategy plays a significant role in customer satisfaction. It provides a long-term plan of
            action regarding the software testing QA process to ensure the quality and reliability of the product.
          </InfoCard.Description>
        </InfoCard>

        {/* Methodology Card 3 */}
        <InfoCard className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
          <LampEffect>
            <div className="text-night-blue text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">03</div>
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Defect Management
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Communication, adequate tool support, a well-defined defect lifecycle, and an engaged defect management
            committee are necessary for effective and efficient defect management.
          </InfoCard.Description>
        </InfoCard>
      </div>
    </div>
  );
}
