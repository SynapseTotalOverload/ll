"use client";

import SignTitle from "@/components/modules/sign-title";
import CountCard from "@/components/modules/count-card";
import { Timer } from "lucide-react";

export default function StartupJourneySteps() {
  return (
    <div className="flex w-full flex-col gap-2 px-2 sm:gap-3 sm:px-3 md:gap-4 md:px-4 lg:gap-5 lg:px-6 xl:gap-6 xl:px-8">
      <SignTitle>
        <SignTitle.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          From idea to ready-for-market product
        </SignTitle.Title>
        <SignTitle.Description className="text-xs sm:text-sm md:text-base lg:text-lg">
          We&apos;ll get your back up at any stage. Where are you in your startup journey?
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Startup Journey Steps - Horizontal on small screens, alternating on larger screens */}
      <div className="flex w-full flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-2">
        {/* Small screens: Single line horizontal layout */}
        <div className="flex w-full flex-row gap-1.5 overflow-x-auto pb-1 sm:hidden">
          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">01</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Interview</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                We start by learning about your ideas, goals, and expectations. You don&apos;t need technical knowledge,
                we&apos;ll ask the right questions, clarify risks, and help shape a clear product vision.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1–2 short calls</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Discovery & Research</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                We analyze your market, audience, and competitors to define the core value of your product. This stage
                ensures we build something that people actually need, not just something that sounds good.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1–2 weeks</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Requirements</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                We finalize the feature list, create detailed specifications, and outline the full product roadmap. We
                also agree on budget and timeline, sign the contract, and prepare everything for development.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: ~1 week</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Design</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                We create UX flows, wireframes, and clean UI concepts focused on clarity and usability. If you already
                have design assets, we can adapt or refine them to fit your product.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1–2 months</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">05</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">MVP Development</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                We build a functional, test-ready MVP that you can show to early users or investors. Development runs in
                short sprints, with visible weekly progress and transparent communication.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1–3 months</span>
              </div>
            </CountCard.Content>
          </CountCard>
        </div>

        {/* Larger screens: Alternating layout */}
        <div className="hidden w-full flex-col gap-1.5 sm:flex sm:gap-2 md:gap-2.5 lg:gap-2">
          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">01</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">Interview</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                We start by learning about your ideas, goals, and expectations. You don&apos;t need technical knowledge,
                we&apos;ll ask the right questions, clarify risks, and help shape a clear product vision.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1–2 short calls</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">
                Discovery & Research
              </CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                We analyze your market, audience, and competitors to define the core value of your product. This stage
                ensures we build something that people actually need, not just something that sounds good.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1–2 weeks</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">Requirements</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                We finalize the feature list, create detailed specifications, and outline the full product roadmap. We
                also agree on budget and timeline, sign the contract, and prepare everything for development.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: ~1 week</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">Design</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                We create UX flows, wireframes, and clean UI concepts focused on clarity and usability. If you already
                have design assets, we can adapt or refine them to fit your product.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1–2 months</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">05</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">MVP Development</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                We build a functional, test-ready MVP that you can show to early users or investors. Development runs in
                short sprints, with visible weekly progress and transparent communication.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1–3 months</span>
              </div>
            </CountCard.Content>
          </CountCard>
        </div>
      </div>
    </div>
  );
}
