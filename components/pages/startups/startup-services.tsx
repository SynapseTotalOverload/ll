"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function StartupServices() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our startup services</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          We&apos;ll support you throughout the full cycle of software product development—from consulting to
          maintenance. Our key services include
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Startup Services Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Service Card 1 */}
        <InfoCard className="w-full">
          <LampEffect>
            <BedIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            MVP web and mobile software development
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Would you like to attract investors or figure out what really matters to your audience with minimum risk?
            Let&apos;s begin with MVP product development. We can manage all the aspects of an MVP development and scale
            it up when needed.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 2 */}
        <InfoCard className="w-full">
          <LampEffect>
            <BedIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Full-cycle software product development
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            We can help you build a solution your users would love. Our experts cover everything from design and
            development to deployment and maintenance. You&apos;ll be able to focus on your business goals as we handle
            the technical side of things.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 3 */}
        <InfoCard className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
          <LampEffect>
            <BedIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Product strategy
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Leveraging our comprehensive product strategy services integrated with the expertise of a fractional CTO,
            we&apos;ll collaborate to pinpoint your strengths and weaknesses. Additionally, we&apos;ll proactively
            navigate risk mitigation, setting a robust groundwork before entering the development phase.
          </InfoCard.Description>
        </InfoCard>
      </div>

      <div className="flex flex-row items-center justify-center pt-4 sm:pt-6 md:pt-8">
        <BackgroundGradient>
          <Button className="h-12 px-6 text-base font-medium sm:h-14 sm:px-8 sm:text-lg md:h-16 md:px-10 md:text-xl">
            Get an estimate
          </Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
