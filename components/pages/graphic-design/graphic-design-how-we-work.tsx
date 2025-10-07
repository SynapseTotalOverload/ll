"use client";
import { Dna, Lamp, Ruler, MessageSquare, CheckCircle } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";

export default function GraphicDesignHowWeWork() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">How we work</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          we bring your brand&apos;s vision to life through creative and strategic graphic design. Here&apos;s how we
          work to deliver impactful visual solutions
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* How We Work Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-6 md:gap-10 lg:gap-8">
        {/* Step 1 */}
        <InfoCard className="w-full md:col-span-2">
          <LampEffect>
            <Dna className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Understanding Your Brand
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            We start by immersing ourselves in your brand identity, values, and target audience to ensure our designs
            align with your goals.
          </InfoCard.Description>
        </InfoCard>

        {/* Step 2 */}
        <InfoCard className="w-full md:col-span-2">
          <LampEffect>
            <Lamp className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Concept Development
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Our designers brainstorm and create concepts that reflect your vision, ensuring every element is meaningful
            and cohesive.
          </InfoCard.Description>
        </InfoCard>

        {/* Step 3 */}
        <InfoCard className="w-full md:col-span-2">
          <LampEffect>
            <Ruler className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Design Execution
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Using modern tools and techniques, we craft high-quality visuals, from logos and marketing materials to
            digital assets and custom illustrations.
          </InfoCard.Description>
        </InfoCard>

        {/* Step 4 */}
        <InfoCard className="w-full md:col-span-3">
          <LampEffect>
            <MessageSquare className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Feedback & Refinement
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Collaboration is key. We gather your feedback to fine-tune designs, ensuring the final product exceeds your
            expectations.
          </InfoCard.Description>
        </InfoCard>

        {/* Step 5 */}
        <InfoCard className="w-full md:col-span-3">
          <LampEffect>
            <CheckCircle className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Delivery & Support
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            We deliver ready-to-use assets in all required formats and offer ongoing support to keep your visuals fresh
            and relevant.
          </InfoCard.Description>
        </InfoCard>
      </div>
    </div>
  );
}
