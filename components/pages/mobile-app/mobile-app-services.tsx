"use client";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple, Wrench } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function MobileAppServices() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our mobile application development services:
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          With LogicCraft, if you are looking to build, say, an app for iPhone, you don&apos;t have to hire an iOS app
          development company to write code, a designer to craft an attractive UI/UX, a testing team to ensure quality,
          and a project manager to fine-tune all the processes and set them in motion. We cover everything. Below are
          our core mobile application development services.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Service Card 1 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Smartphone className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Custom application development services
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              We craft mobile solutions from scratch based on client needs. First thing, we analyze your goals, end user
              needs, and the way competitors go about similar cases. Only then, we design a solution that helps you
              reach your business objectives and attract target customers while setting you apart from the competition.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 2 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Apple className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Native iOS and Android app development
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Planning to build a reliable iOS or Android native application with an option to scale it up later?
              That&apos;s right up our alley. In the process of mobile app development for iOS and Android, we use
              standardized Apple and Android technologies along with Swift (for iOS) and Kotlin (for Android). With this
              approach, we create highly scalable products that offer exceptional quality and a smooth user experience
              in the long run.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 3 */}
          <InfoCard className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
            <LampEffect>
              <Wrench className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Application management services
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Have you already got a ready-made mobile application that should remain reliable, competitive, and in line
              with your business needs as technological progress moves on? The best way-out in this case is a dedicated
              development team of professionals always at hand to improve your product. Our ongoing app management
              services make that happen.
            </InfoCard.Description>
          </InfoCard>
        </div>
        <div className="mt-8 flex w-full items-center justify-center sm:mt-12 md:mt-16">
          <BackgroundGradient>
            <Button className="h-12 px-6 text-base font-medium sm:h-14 sm:px-8 sm:text-lg md:h-16 md:px-10 md:text-xl">
              Get an estimate
            </Button>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
