"use client";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Zap, Users, Smartphone, Globe } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function QAServices() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">What we offer</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          We take a customized approach to software testing and QA, strengthening your company&apos;s quality assurance
          processes and driving improved business outcomes.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Service Card 1 */}
          <InfoCard className="w-full">
            <LampEffect>
              <ClipboardCheck className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              QA Audit and Consulting
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              We analyze your QA and development processes, pinpoint areas for improvement, and deliver an action plan
              to resolve quality issues.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 2 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Zap className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Setting Up QA Process
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              We analyze your project needs, integrate QA experts, and embed QA into your workflow to prevent defects
              and improve product quality.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 3 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Users className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              QA Staffing
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Our QA staff brings expertise to ensure your software meets the highest quality standards. From testing
              strategy to execution.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 4 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Smartphone className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Mobile App Testing
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Guarantee a seamless app experience, boost user engagement, and gain valuable insights to enhance your app
              for its users.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 5 */}
          <InfoCard className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
            <LampEffect>
              <Globe className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Web App Testing
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Ensure your web app is intuitive, secure, and performs seamlessly across all browsers and devices your
              users rely on.
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
