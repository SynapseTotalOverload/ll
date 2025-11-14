"use client";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";

export default function CaseStudies() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Web development case studies:
        </SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Case Study Card 1 */}
        <InfoCard className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Web Application</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Reachfi</InfoCard.Title>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Reachfi project" className="w-full object-cover" src="/assets/dynamic/reachfi/img_home_page.png" />
        </InfoCard>

        {/* Case Study Card 2 */}
        <InfoCard className="flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Web Platform</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Boat Export</InfoCard.Title>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Boat Export project"
            className="w-full object-cover"
            src="/assets/dynamic/boat_export/img_home_page.png"
          />
        </InfoCard>

        {/* Case Study Card 3 */}
        <InfoCard className="flex w-full flex-col gap-4 sm:col-span-1 sm:gap-6 md:col-span-2 md:gap-8 lg:col-span-1">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Web Application</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Track My Jobs</InfoCard.Title>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Track My Jobs project"
            className="w-full object-cover"
            src="/assets/dynamic/trackmyjobs/img_home_page.png"
          />
        </InfoCard>
      </div>
    </div>
  );
}
