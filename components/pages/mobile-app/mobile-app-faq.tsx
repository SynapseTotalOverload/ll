"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MobileAppFAQ() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">FAQ</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-6 flex flex-col items-center justify-center sm:mt-8 md:mt-10">
        <Accordion type="single" collapsible className="flex w-full flex-col gap-4" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg lg:text-xl">
              <span>What&apos;s the difference between the front-end and the back-end?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm text-balance sm:text-base md:text-lg">
              <p>
                The front-end is all about the visual side of the project, the one that users interact with. The
                back-end is what goes behind the scenes: it collects and processes data and then transfers it back to
                the client side. Roughly, the data do not go directly from user A to user B—they always pass through the
                back-end first.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg lg:text-xl">
              What are your pricing models?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm text-balance sm:text-base md:text-lg">
              <p>Content for pricing models question will be added here.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg lg:text-xl">
              How long does it take to get started?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm text-balance sm:text-base md:text-lg">
              <p>Content for getting started question will be added here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
