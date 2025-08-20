"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function QAFAQ() {
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
              <span>What is the difference between QA Automation and Manual Testing?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Manual testing involves human testers executing test cases manually, while automation testing uses scripts and tools to run tests automatically. Automation is faster for repetitive tasks and regression testing, while manual testing is better for exploratory testing and user experience validation.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does it take to set up a QA process?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                The timeline varies depending on project complexity and existing processes. Typically, initial setup takes 2-4 weeks, including process analysis, team integration, and environment setup. Full implementation and optimization can take 1-3 months.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What tools do you use for QA testing?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We use industry-standard tools including Selenium, Cypress, and Playwright for web automation, Appium for mobile testing, Jira for defect tracking, and various performance testing tools. Our tool selection is tailored to each project&apos;s specific needs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
