"use client";

import SignTitle from "@/components/modules/sign-title";
import CountCard from "@/components/modules/count-card";
import { Timer } from "lucide-react";

export default function StartupJourneySteps() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          From idea to ready-for-market product
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          We&apos;ll get your back up at any stage. Where are you in your startup journey?
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Startup Journey Steps - Horizontal on small screens, alternating on larger screens */}
      <div className="flex w-full flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Small screens: Single line horizontal layout */}
        <div className="flex w-full flex-row gap-4 overflow-x-auto pb-4 sm:hidden">
          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">01</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Interview</CountCard.Title>
              <CountCard.Description className="text-xs">
                With LogicCraft, you don&apos;t need to hire developers on your own, have tech know-how, or guess
                whether your project will work out or not. We&apos;ll handle all things tech while you do business.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-3 w-3" />
                <span className="text-xs text-white">Timeline: 1-2 calls</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Discovery and research</CountCard.Title>
              <CountCard.Description className="text-xs">
                Just like you, we are interested in building a product that will bring a unique value to its audience
                and win a competitive edge. We&apos;ll help you achieve this with a failure-proof product strategy based
                on a thorough customer and competitor analysis.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-3 w-3" />
                <span className="text-xs text-white">Timeline: 1-2 Weeks</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Requirements</CountCard.Title>
              <CountCard.Description className="text-xs">
                You already know what you are going to build and how. Let&apos;s finalize all the requirements, develop
                a detailed product roadmap, discuss the timeline and the pricing model, sign a contract, and get down to
                work.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-3 w-3" />
                <span className="text-xs text-white">Timeline: 1 week</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Design</CountCard.Title>
              <CountCard.Description className="text-xs">
                The product&apos;s look and feel are crucial for getting initial user growth. We&apos;ll support you
                with mind maps, wireframes, prototypes, and everything you need for a seamless user experience. We can
                also build a product based on the ready-made design concept you provide.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-3 w-3" />
                <span className="text-xs text-white">Timeline: 1-2 month</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">05</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">MVP development</CountCard.Title>
              <CountCard.Description className="text-xs">
                Want to test your idea first before building your product from start to finish? Or perhaps you need to
                demonstrate the validity of your solution to get funding? We can help you build a minimum viable product
                (MVP).
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-3 w-3" />
                <span className="text-xs text-white">Timeline: 1-3 month</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="min-w-[280px] flex-shrink-0">
            <CountCard.Index className="text-xl">06</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-2">
              <CountCard.Title className="text-base">Continuous product development</CountCard.Title>
              <CountCard.Description className="text-xs">
                Have you got an MVP or even a full-fledged solution already? Don&apos;t stop there. The market is
                constantly changing, and it&apos;s critical to keep up. But no worries, we&apos;ll help you harness
                change by constantly improving your product. We may support you with our CTO as a service for startups,
                ensuring your product&apos;s ongoing enhancement.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-3 w-3" />
                <span className="text-xs text-white">Timeline: depending on your needs</span>
              </div>
            </CountCard.Content>
          </CountCard>
        </div>

        {/* Larger screens: Alternating layout */}
        <div className="hidden w-full flex-col gap-6 sm:flex sm:gap-8 md:gap-10 lg:gap-12">
          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">01</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Interview</CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                With LogicCraft, you don&apos;t need to hire developers on your own, have tech know-how, or guess
                whether your project will work out or not. We&apos;ll handle all things tech while you do business.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm text-white sm:text-base">Timeline: 1-2 calls</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">02</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Discovery and research
              </CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                Just like you, we are interested in building a product that will bring a unique value to its audience
                and win a competitive edge. We&apos;ll help you achieve this with a failure-proof product strategy based
                on a thorough customer and competitor analysis.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm text-white sm:text-base">Timeline: 1-2 Weeks</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">03</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Requirements</CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                You already know what you are going to build and how. Let&apos;s finalize all the requirements, develop
                a detailed product roadmap, discuss the timeline and the pricing model, sign a contract, and get down to
                work.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm text-white sm:text-base">Timeline: 1 week</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">04</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Design</CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                The product&apos;s look and feel are crucial for getting initial user growth. We&apos;ll support you
                with mind maps, wireframes, prototypes, and everything you need for a seamless user experience. We can
                also build a product based on the ready-made design concept you provide.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm text-white sm:text-base">Timeline: 1-2 month</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-start sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">05</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">MVP development</CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                Want to test your idea first before building your product from start to finish? Or perhaps you need to
                demonstrate the validity of your solution to get funding? We can help you build a minimum viable product
                (MVP).
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm text-white sm:text-base">Timeline: 1-3 month</span>
              </div>
            </CountCard.Content>
          </CountCard>

          <CountCard className="w-full self-end sm:w-[95%] md:w-[90%] lg:w-[85%]">
            <CountCard.Index className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">06</CountCard.Index>
            <CountCard.Separator />
            <CountCard.Content className="gap-3 sm:gap-4 md:gap-5">
              <CountCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Continuous product development
              </CountCard.Title>
              <CountCard.Description className="text-sm sm:text-base md:text-lg">
                Have you got an MVP or even a full-fledged solution already? Don&apos;t stop there. The market is
                constantly changing, and it&apos;s critical to keep up. But no worries, we&apos;ll help you harness
                change by constantly improving your product. We may support you with our CTO as a service for startups,
                ensuring your product&apos;s ongoing enhancement.
              </CountCard.Description>
              <div className="flex flex-row items-center gap-2">
                <Timer className="text-night-blue h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm text-white sm:text-base">Timeline: depending on your needs</span>
              </div>
            </CountCard.Content>
          </CountCard>
        </div>
      </div>
    </div>
  );
}
