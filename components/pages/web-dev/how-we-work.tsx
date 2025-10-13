"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Process() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Process. How we do it:
        </SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="small-hero-bg mt-6 flex flex-col items-center justify-center rounded-lg p-4 backdrop-blur-2xl sm:mt-8 sm:p-6 md:mt-10 md:p-8 md:backdrop-blur-none lg:p-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <PointLine
            key={index}
            title="Product design phase (+QA testing)"
            description="Custom web application development services depend entirely on your needs — from design discovery, UX, UI, and up to usability testing, we're here to assist."
            index={index + 1}
            className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%]"
          />
        ))}
      </div>
    </div>
  );
}
