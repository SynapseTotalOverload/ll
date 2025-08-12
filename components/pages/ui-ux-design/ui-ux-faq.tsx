"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function UIUXFAQ() {
  return (
    <div className="flex w-full flex-col px-20">
      <SignTitle>
        <SignTitle.Title>FAQ</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-10 flex flex-col items-center justify-center">
        <Accordion type="single" collapsible className="flex w-full flex-col gap-4" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span>What&apos;s the difference between the front-end and the back-end?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                The front-end is all about the visual side of the project, the one that users interact with. The
                back-end is what goes behind the scenes: it collects and processes data and then transfers it back to
                the client side. Roughly, the data do not go directly from user A to user B—they always pass through the
                back-end first.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are your pricing models?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Content for pricing models question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does it take to get started?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Content for getting started question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
