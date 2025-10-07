"use client";

import SignTitle from "@/components/modules/sign-title";
import CountCard from "@/components/modules/count-card";
import { Timer } from "lucide-react";

export default function BusinessSoftwareProcess() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our Software Development Process
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          When starting a new project, we follow these four simple steps:
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Process Steps - Horizontal on small screens, alternating on larger screens */}
      <div className="flex w-full flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8">
        {/* Small screens: Single line horizontal layout */}
        <div className="flex w-full flex-row gap-4 overflow-x-auto pb-4 sm:hidden">
          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">01</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Assessing the client&apos;s goals</CountCard.Title>
              <CountCard.Description className="text-xs">
                First off, we learn as much as we can about your business goals. LogicCraft&apos;s experts will
                thoroughly research your business and the niche you&apos;re operating in. As we spot the areas that
                might need improvement with technology, we&apos;ll map out a plan for the development of your future
                solution.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Analyzing requirements and planning resources</CountCard.Title>
              <CountCard.Description className="text-xs">
                Secondly, we analyze the requirements for a comprehensive perspective of your project and consider what
                teams will be necessary to implement it. They need to be skilled, cooperate effectively and quickly.
                Then, we roll out a business proposal and set out to assemble the optimal team(s) for your project.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Recruitment</CountCard.Title>
              <CountCard.Description className="text-xs">
                Now it&apos;s time to assemble the team(s). We can either look for candidates internally or turn to
                external sources. Thanks to the corporate culture we nurture, we have become very attractive to talent
                in the well-known local IT community.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Initiating the project</CountCard.Title>
              <CountCard.Description className="text-xs">
                We&apos;ll do everything so you can reach project goals seamlessly – set up communication, reporting,
                and collaboration tools, introduce team members, and more. Having honesty and partnership among our
                values, we always encourage transparency and quality. So rest assured: you can keep an eye on the
                critical project aspects anytime.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>
        </div>

        {/* Larger screens: Alternating layout */}
        <div className="hidden w-full flex-col gap-6 sm:flex sm:gap-8 md:gap-10 lg:gap-8">
          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">01</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Assessing the client&apos;s goals
              </CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                First off, we learn as much as we can about your business goals. LogicCraft&apos;s experts will
                thoroughly research your business and the niche you&apos;re operating in. As we spot the areas that
                might need improvement with technology, we&apos;ll map out a plan for the development of your future
                solution.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Analyzing requirements and planning resources
              </CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                Secondly, we analyze the requirements for a comprehensive perspective of your project and consider what
                teams will be necessary to implement it. They need to be skilled, cooperate effectively and quickly.
                Then, we roll out a business proposal and set out to assemble the optimal team(s) for your project.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Recruitment</CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                Now it&apos;s time to assemble the team(s). We can either look for candidates internally or turn to
                external sources. Thanks to the corporate culture we nurture, we have become very attractive to talent
                in the well-known local IT community.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Initiating the project
              </CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                We&apos;ll do everything so you can reach project goals seamlessly – set up communication, reporting,
                and collaboration tools, introduce team members, and more. Having honesty and partnership among our
                values, we always encourage transparency and quality. So rest assured: you can keep an eye on the
                critical project aspects anytime.
              </CountCard.Description>
            </CountCard.Content>
          </CountCard>
        </div>
      </div>
    </div>
  );
}
