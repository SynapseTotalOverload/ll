"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BusinessWhyChooseUs() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Why Choose Us Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
        {/* Reason 1 */}
        <div className="w-full">
          <span className="text-plastic custom-font-bricolage text-6xl font-bold tracking-tight sm:text-7xl sm:tracking-tighter md:text-8xl md:tracking-tight lg:text-9xl lg:tracking-tight xl:text-[126px] xl:tracking-[-12px]">
            01
          </span>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Exceptional expertise and clear communication
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            With our tech experts, you can finally focus on your core responsibilities. We will handle all the aspects
            of software development, including tech challenges that require out-of-the-box approach and deliver
            high-quality work that satisfies your expectations. During the process, we will explain every detail to you,
            making even the most complex project feel achievable to a non-tech person.
          </InfoCard.Description>
        </div>

        {/* Reason 2 */}
        <div className="w-full">
          <span className="text-plastic custom-font-bricolage text-6xl font-bold tracking-tight sm:text-7xl sm:tracking-tighter md:text-8xl md:tracking-tight lg:text-9xl lg:tracking-tight xl:text-[126px] xl:tracking-[-12px]">
            02
          </span>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Resource-wise
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            With NERDZ LAB, you can get the maximum value at a great price. Besides, you’ll have full control over how
            much you spend on a project and how long it takes. We’ll negotiate aspects like time and budget at the
            outset, and if necessary, you’ll be able to scale up and down your team throughout the project
          </InfoCard.Description>
        </div>

        {/* Reason 3 */}
        <div className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
          <span className="text-plastic custom-font-bricolage text-6xl font-bold tracking-tight sm:text-7xl sm:tracking-tighter md:text-8xl md:tracking-tight lg:text-9xl lg:tracking-tight xl:text-[126px] xl:tracking-[-12px]">
            03
          </span>
          <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
            Product owners just like you
          </InfoCard.Title>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            As startup founders, we have seen all the ups and downs of project ownership from within. This explains our
            client-first approach in every interaction and our willingness to solve your problem. We will fight for your
            project and propose a variety of innovative solutions until we make sure that users love it and investors
            receive it well.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
