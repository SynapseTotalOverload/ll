"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";

export default function AboutUsStatistics() {
  return (
    <div className="flex w-full flex-row justify-between pt-[120px]">
      <div className="flex min-w-[500px] flex-col justify-between gap-20 pl-20">
        <div className="bricolage flex flex-row justify-between border-b-2 border-b-white">
          <span className="text-night-blue text-[64px] font-[400]">120+</span>
          <div className="flex flex-col justify-center">
            <span className="text-[22px] font-[700]">Professionals</span>
          </div>
        </div>
        <div className="bricolage flex flex-row justify-between border-b-2 border-b-white">
          <span className="text-night-blue text-[64px] font-[400]">500+</span>
          <div className="flex flex-col justify-center">
            <span className="text-[22px] font-[700]">Success projects</span>
          </div>
        </div>
      </div>
      <div className="nice-grad flex flex-col items-center justify-center">
        <div className="flex max-w-[500px] flex-col gap-8 pr-20">
          <span>
            We offer a range of collaboration models to ensure we find the best fit for your needs. Your preferences and
            requirements are our highest priority as we assemble a dedicated software development team tailored
            specifically for each project.
          </span>
          <div className="w-fit">
            <BackgroundGradient>
              <Button type="submit" className="bg-opacity-100-black w-full rounded-full border py-3 text-white">
                Get in touch with us
              </Button>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
}
