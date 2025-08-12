"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function MobileAppServices() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our mobile application development services:</SignTitle.Title>
        <SignTitle.Description>
          With LogicCraft, if you are looking to build, say, an app for iPhone, you don&apos;t have to hire an iOS app
          development company to write code, a designer to craft an attractive UI/UX, a testing team to ensure quality,
          and a project manager to fine-tune all the processes and set them in motion. We cover everything. Below are
          our core mobile application development services.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-3 place-items-center gap-8">
          {/* Service Card 1 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">Custom application development services</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              We craft mobile solutions from scratch based on client needs. First thing, we analyze your goals, end user needs, and the way competitors go about similar cases. Only then, we design a solution that helps you reach your business objectives and attract target customers while setting you apart from the competition.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 2 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">Native iOS and Android app development</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Planning to build a reliable iOS or Android native application with an option to scale it up later? That&apos;s right up our alley. In the process of mobile app development for iOS and Android, we use standardized Apple and Android technologies along with Swift (for iOS) and Kotlin (for Android). With this approach, we create highly scalable products that offer exceptional quality and a smooth user experience in the long run.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 3 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">Application management services</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Have you already got a ready-made mobile application that should remain reliable, competitive, and in line with your business needs as technological progress moves on? The best way-out in this case is a dedicated development team of professionals always at hand to improve your product. Our ongoing app management services make that happen.
            </InfoCard.Description>
          </InfoCard>
        </div>
        <div className="mt-16 flex w-full items-center justify-center">
          <BackgroundGradient className="">
            <Button>Get an estimate</Button>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
