"use client";
import { Button } from "@/components/ui/button";
import { ChartSpline, LaptopMinimalCheckIcon, NetworkIcon, RecycleIcon, UserIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BusinessServices() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our services for growing businesses
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Having worked with dozens of small and medium businesses, we know exactly what services they need from a
          software development outsourcing partner.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-6 md:gap-10 lg:gap-8">
        {/* Service Card 1 */}
        <InfoCard className="w-full md:col-span-2">
          <LampEffect>
            <UserIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Team extension
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Boost your capacity with our team extension services. LogicCraft&apos;s internal pool of tech pros will work
            alongside the in-house team on your project and do it effectively. If necessary, we&apos;ll hire the right
            person after the scrupulous interviews.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 2 */}
        <InfoCard className="w-full md:col-span-2">
          <LampEffect>
            <LaptopMinimalCheckIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Service extension
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            If you want to extend your services but lack particular expertise in software development, LogicCraft will
            help you fill the gap in developing video-streaming or video analysis, device integration, e-commerce,
            healthcare, and other solutions.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 3 */}
        <InfoCard className="w-full md:col-span-2">
          <LampEffect>
            <NetworkIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            IT project hand-over
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            Imagine you&apos;re in the middle of the project and need to pivot. Sure, we can help you with that. Our
            experts will analyze the state of the project, and only with a good understanding of your needs, we&apos;ll
            create a roadmap and get down to development.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 4 */}
        <InfoCard className="w-full md:col-span-3">
          <LampEffect>
            <RecycleIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Digital transformation
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            If you&apos;re an established company that wants to keep up with the rapidly-changing environment,
            we&apos;re here for you. Our professional software developers, business analysts, designers, and QAs will
            pave your way into the digital realm.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 5 */}
        <InfoCard className="w-full md:col-span-3">
          <LampEffect>
            <ChartSpline className="text-night-blue size-6 sm:size-7 md:size-8" />
          </LampEffect>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            IT staff augmentation / CTO as a service
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            We assemble a dedicated unit of tech specialists with diverse skills, managing recruitment, administration,
            and accounting for you. Additionally, we offer CTO-level support to guide your team, allowing you to focus
            on strategic priorities and business growth.
          </InfoCard.Description>
        </InfoCard>
      </div>

      <div className="flex flex-row items-center justify-center pt-4 sm:pt-6 md:pt-8">
        <BackgroundGradient>
          <Button className="h-12 px-6 text-base font-medium sm:h-14 sm:px-8 sm:text-lg md:h-16 md:px-10 md:text-xl">
            Book a meeting
          </Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
