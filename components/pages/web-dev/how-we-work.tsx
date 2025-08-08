"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Process() {
  return (
    <div className="flex w-full flex-col px-20">
      <SignTitle>
        <SignTitle.Title>Process. How we do it:</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-10 flex flex-col items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <PointLine
            key={index}
            title="Product design phase (+QA testing)"
            description="Custom web application development services depend entirely on your needs — from design discovery, UX, UI, and up to usability testing, we’re here to assist."
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
