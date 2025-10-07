"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function QAFAQ() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">FAQ</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Frequently asked questions about QA and testing services
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
              <span>What is the difference between QA Automation and Manual Testing?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Manual testing involves human testers executing test cases manually, while automation testing uses
                scripts and tools to run tests automatically. Automation is faster for repetitive tasks and regression
                testing, while manual testing is better for exploratory testing and user experience validation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How long does it take to set up a QA process?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                The timeline varies depending on project complexity and existing processes. Typically, initial setup
                takes 2-4 weeks, including process analysis, team integration, and environment setup. Full
                implementation and optimization can take 1-3 months.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What tools do you use for QA testing?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We use industry-standard tools including Selenium, Cypress, and Playwright for web automation, Appium
                for mobile testing, Jira for defect tracking, and various performance testing tools. Our tool selection
                is tailored to each project&apos;s specific needs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
