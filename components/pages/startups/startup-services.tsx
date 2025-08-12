"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function StartupServices() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our startup services</SignTitle.Title>
        <SignTitle.Description>
          We&apos;ll support you throughout the full cycle of software product development—from consulting to maintenance.
          Our key services include
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Startup Services Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Service Card 1 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">MVP web and mobile software development</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Would you like to attract investors or figure out what really matters to your audience with minimum risk? Let&apos;s begin with MVP product development. We can manage all the aspects of an MVP development and scale it up when needed.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 2 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Full-cycle software product development</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            We can help you build a solution your users would love. Our experts cover everything from design and development to deployment and maintenance. You&apos;ll be able to focus on your business goals as we handle the technical side of things.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 3 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Product strategy</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Leveraging our comprehensive product strategy services integrated with the expertise of a fractional CTO, we&apos;ll collaborate to pinpoint your strengths and weaknesses. Additionally, we&apos;ll proactively navigate risk mitigation, setting a robust groundwork before entering the development phase.
          </InfoCard.Description>
        </InfoCard>
      </div>
      <div className="flex flex-row items-center justify-center">
        <BackgroundGradient>
          <Button>Get an estimate</Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
