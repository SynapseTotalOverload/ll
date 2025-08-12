"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BusinessServices() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our services for growing businesses</SignTitle.Title>
        <SignTitle.Description>
          Having worked with dozens of small and medium businesses, we know exactly what services they need from
          a software development outsourcing partner.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Service Card 1 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Team extension</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Boost your capacity with our team extension services. LogicCraft&apos;s internal pool of tech pros will work alongside the in-house team on your project and do it effectively. If necessary, we&apos;ll hire the right person after the scrupulous interviews.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 2 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Service extension</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            If you want to extend your services but lack particular expertise in software development, LogicCraft will help you fill the gap in developing video-streaming or video analysis, device integration, e-commerce, healthcare, and other solutions.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 3 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">IT project hand-over</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Imagine you&apos;re in the middle of the project and need to pivot. Sure, we can help you with that. Our experts will analyze the state of the project, and only with a good understanding of your needs, we&apos;ll create a roadmap and get down to development.
          </InfoCard.Description>
        </InfoCard>
        <InfoCard className="col-span-2 col-start-2 col-end-4">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">Digital transformation</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            If you&apos;re an established company that wants to keep up with the rapidly-changing environment, we&apos;re here for you. Our professional software developers, business analysts, designers, and QAs will pave your way into the digital realm.
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 5 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">IT staff augmentation / CTO as a service</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            We assemble a dedicated unit of tech specialists with diverse skills, managing recruitment, administration, and accounting for you. Additionally, we offer CTO-level support to guide your team, allowing you to focus on strategic priorities and business growth.
          </InfoCard.Description>
        </InfoCard>
      </div>
      <div className="flex flex-row items-center justify-center">
        <BackgroundGradient>
          <Button>Book a meeting</Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
