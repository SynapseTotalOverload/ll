"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">FAQ</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Frequently asked questions about web development services
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
              <span>What&apos;s the difference between the front-end and the back-end?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                The front-end is all about the visual side of the project, the one that users interact with. The
                back-end is what goes behind the scenes: it collects and processes data and then transfers it back to
                the client side. Roughly, the data do not go directly from user A to user B—they always pass through the
                back-end first.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How long does it take to develop a web application?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                The development timeline depends on the complexity and scope of your project. A simple website might
                take 2-4 weeks, while a complex web application could take 3-6 months or more. We&apos;ll provide a
                detailed timeline during our initial consultation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What technologies do you use for web development?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We use modern, proven technologies including React, Next.js, Node.js, Python, and various databases. Our
                technology stack is chosen based on your specific requirements to ensure the best performance,
                scalability, and maintainability.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
