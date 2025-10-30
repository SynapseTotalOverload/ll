"use client";
import { Button } from "@/components/ui/button";
import { Palette, Code, Server, TestTube, Wrench, Gauge, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function OurService() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our web development Services
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Whatever your business targets are, web development services at LogicCraft are called to support them. Be it
          an MVP development, website, or web portal development, as well as web app development of various complexity,
          we guarantee the quality and outstanding design behind each of the deliverables.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Service Card 1 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Palette className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              UI/UX Design
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Thoughtful design based on user experience and deep analysis of business goals tailored to customer
              requirements
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 2 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Code className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Frontend Development
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Modern, responsive frontend development using the latest technologies and frameworks for optimal user
              experience
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 3 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Server className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Backend Development
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Robust backend development with scalable architecture and secure data management systems
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 4 */}
          <InfoCard className="w-full">
            <LampEffect>
              <TestTube className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Testing & QA
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Comprehensive testing and quality assurance to ensure your web application meets the highest standards
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 5 */}
          <InfoCard className="w-full">
            <LampEffect>
              <Wrench className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Maintenance & Support
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Ongoing maintenance and support services to keep your web application running smoothly and efficiently
            </InfoCard.Description>
          </InfoCard>

          {/* Service Card 6 */}
          <InfoCard className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
            <LampEffect>
              <Gauge className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Performance Optimization
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Performance optimization and speed improvements to ensure your web application loads quickly and
              efficiently
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
