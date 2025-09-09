"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function UIUXFAQ() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">FAQ</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Frequently asked questions about UI/UX design services
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      <div className="flex w-full flex-col items-center justify-center">
        <Accordion 
          type="single" 
          collapsible 
          className="flex w-full max-w-4xl flex-col gap-3 sm:gap-4 md:gap-5" 
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              <span>What&apos;s the difference between UI and UX design?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                UI (User Interface) design focuses on the visual elements and aesthetics of a product, while UX (User Experience) design focuses on the overall user journey and how users interact with the product. UI is about how it looks, UX is about how it works and feels.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What are your pricing models for design services?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We offer flexible pricing models including project-based pricing, hourly rates, and retainer agreements. The cost depends on the scope, complexity, and timeline of your project. We&apos;ll provide a detailed quote after understanding your specific requirements.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How long does it take to complete a design project?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Design project timelines vary based on complexity. A simple website design might take 2-3 weeks, while a comprehensive app design could take 6-8 weeks. We&apos;ll provide a detailed timeline during our initial consultation and keep you updated throughout the process.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
