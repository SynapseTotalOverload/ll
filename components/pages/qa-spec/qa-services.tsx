"use client";
import { Button } from "@/components/ui/button";
import { BedIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function QAServices() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>What we offer</SignTitle.Title>
        <SignTitle.Description>
          We take a customized approach to software testing and QA, strengthening your company&apos;s quality assurance processes and driving improved business outcomes.
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
            <InfoCard.Title className="mt-6">QA Audit and Consulting</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              We analyze your QA and development processes, pinpoint areas for improvement, and deliver an action plan to resolve quality issues.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 2 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">Setting Up QA Process</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              We analyze your project needs, integrate QA experts, and embed QA into your workflow to prevent defects and improve product quality.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 3 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">QA Staffing</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Our QA staff brings expertise to ensure your software meets the highest quality standards. From testing strategy to execution.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 4 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">Mobile App Testing</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Guarantee a seamless app experience, boost user engagement, and gain valuable insights to enhance your app for its users.
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 5 */}
          <InfoCard className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">Web App Testing</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Ensure your web app is intuitive, secure, and performs seamlessly across all browsers and devices your users rely on.
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
