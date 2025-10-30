"use client";
import { Button } from "@/components/ui/button";
import { Palette, Brush, Code, Database, TestTube, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";

export default function HomeServices() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-8 md:gap-14 md:px-12 lg:gap-16 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Our Service</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-7 lg:grid-cols-6 lg:gap-8">
        {/* Service Card 1 */}
        <InfoCard className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
          <LampEffect>
            <Palette className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Thoughtful design based on user experience and deep analysis of business goals tailored to customer
            requirements
          </InfoCard.Description>
          <div className="flex flex-row items-center justify-end">
            <Button size="icon" className="blue-grad mt-8">
              <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
            </Button>
          </div>
        </InfoCard>

        {/* Service Card 2 */}
        <InfoCard className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
          <LampEffect>
            <Brush className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Graphic design</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Creative visuals and branding materials that resonate with your audience and elevate your brand identity
          </InfoCard.Description>
          <div className="flex flex-row items-center justify-end">
            <Button size="icon" className="blue-grad mt-8">
              <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
            </Button>
          </div>
        </InfoCard>

        {/* Service Card 3 */}
        <InfoCard className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
          <LampEffect>
            <Code className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Mobile and web development</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Cutting-edge mobile applications and websites created for seamless user experiences and optimal performance
          </InfoCard.Description>
          <div className="flex flex-row items-center justify-end">
            <Button size="icon" className="blue-grad mt-8">
              <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
            </Button>
          </div>
        </InfoCard>

        {/* Service Card 4 */}
        <InfoCard className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-2 lg:col-end-4">
          <LampEffect>
            <Database className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">CRM Software building</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Individualized CRM solutions developed for the optimization and automatization of your business process
          </InfoCard.Description>
          <div className="flex flex-row items-center justify-end">
            <Button size="icon" className="blue-grad mt-8">
              <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
            </Button>
          </div>
        </InfoCard>

        {/* Service Card 5 */}
        <InfoCard className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
          <LampEffect>
            <TestTube className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">QA Automation and QA Manual</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Testing already deployed projects or created from scratch eliminates the possibility of wrong functionality
          </InfoCard.Description>
          <div className="flex flex-row items-center justify-end">
            <Button size="icon" className="blue-grad mt-8">
              <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
            </Button>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
