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
                With LogicCraft, you don&apos;t need to hire developers on your own, have tech know-how, or guess
                whether your project will work out or not. We&apos;ll handle all things tech while you do business.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1-2 calls</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Discovery and research</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                Just like you, we are interested in building a product that will bring a unique value to its audience
                and win a competitive edge. We&apos;ll help you achieve this with a failure-proof product strategy based
                on a thorough customer and competitor analysis.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1-2 Weeks</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Requirements</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                You already know what you are going to build and how. Let&apos;s finalize all the requirements, develop
                a detailed product roadmap, discuss the timeline and the pricing model, sign a contract, and get down to
                work.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1 week</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">Design</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                The product&apos;s look and feel are crucial for getting initial user growth. We&apos;ll support you
                with mind maps, wireframes, prototypes, and everything you need for a seamless user experience. We can
                also build a product based on the ready-made design concept you provide.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1-2 month</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[120px] flex-shrink-0">
            <CountCard.Index className="text-sm">05</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-0.5">
              <CountCard.Title className="text-xs">MVP development</CountCard.Title>
              <CountCard.Description className="text-[10px] leading-tight">
                Want to test your idea first before building your product from start to finish? Or perhaps you need to
                demonstrate the validity of your solution to get funding? We can help you build a minimum viable product
                (MVP).
              </CountCard.Description>
              <div className="flex flex-row items-center gap-0.5">
                <Timer className="text-night-blue h-2 w-2" />
                <span className="text-[10px] text-white">Timeline: 1-3 month</span>
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
                With LogicCraft, you don&apos;t need to hire developers on your own, have tech know-how, or guess
                whether your project will work out or not. We&apos;ll handle all things tech while you do business.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1-2 calls</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">
                Discovery and research
              </CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                Just like you, we are interested in building a product that will bring a unique value to its audience
                and win a competitive edge. We&apos;ll help you achieve this with a failure-proof product strategy based
                on a thorough customer and competitor analysis.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1-2 Weeks</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">Requirements</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                You already know what you are going to build and how. Let&apos;s finalize all the requirements, develop
                a detailed product roadmap, discuss the timeline and the pricing model, sign a contract, and get down to
                work.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1 week</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">Design</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                The product&apos;s look and feel are crucial for getting initial user growth. We&apos;ll support you
                with mind maps, wireframes, prototypes, and everything you need for a seamless user experience. We can
                also build a product based on the ready-made design concept you provide.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1-2 month</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-lg sm:text-xl md:text-2xl lg:text-3xl">05</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-1 sm:gap-1.5 md:gap-2">
              <CountCard.Title className="text-sm sm:text-base md:text-lg lg:text-xl">MVP development</CountCard.Title>
              <CountCard.Description className="text-xs leading-tight sm:text-sm md:text-base">
                Want to test your idea first before building your product from start to finish? Or perhaps you need to
                demonstrate the validity of your solution to get funding? We can help you build a minimum viable product
                (MVP).
              </CountCard.Description>
              <div className="flex flex-row items-center gap-1">
                <Timer className="text-night-blue h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs text-white sm:text-sm">Timeline: 1-3 month</span>
              </div>
            </CountCard.Content>
          </CountCard>
        </div>
      </div>
    </div>
  );
}
