"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function GraphicDesignFAQ() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">FAQ</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Frequently asked questions about graphic design services
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
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              <span>What services do you offer in graphic design?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We offer comprehensive graphic design services including logo design, brand identity, marketing
                materials, digital assets, custom illustrations, packaging design, and more. Our team creates visually
                compelling designs that align with your brand&apos;s vision and goals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How long does a typical design project take?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Project timelines vary based on complexity and scope. A simple logo design might take 1-2 weeks, while a
                comprehensive brand identity package could take 3-4 weeks. We&apos;ll provide a detailed timeline during
                our initial consultation and keep you updated throughout the process.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you provide source files with the final designs?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Yes, we provide all source files including editable formats like Adobe Illustrator (.ai), Photoshop
                (.psd), and other industry-standard formats. You&apos;ll also receive web-ready formats (PNG, JPG, SVG)
                and print-ready files (PDF, EPS) for maximum flexibility.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
