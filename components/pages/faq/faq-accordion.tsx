"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQAccordion() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Find answers to the most common questions about our services
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

          <AccordionItem value="item-2" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What are your pricing models?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for pricing models question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How long does it take to get started?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for getting started question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you offer any discounts for long-term contracts?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for long-term contract discounts question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What are the payment methods available?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for payment methods question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Can I customize my plan based on my needs?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for plan customization question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Are there any additional fees for extra features?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for additional fees question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Is there a trial period available for testing the service?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for trial period question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you provide customer support during weekends?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for weekend support question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Are there any restrictions on the number of users per plan?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for user restrictions question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What happens if I exceed the usage limits of my plan?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for usage limits question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How secure is my data with your service?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for data security question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Can I downgrade or upgrade my plan at any time?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for plan changes question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-14" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Are there any integrations with third-party tools available?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for third-party integrations question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-15" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What is your policy on data privacy and GDPR compliance?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for data privacy and GDPR question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-16" className="border-b border-gray-200 pb-4 sm:pb-6">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you have a mobile app for accessing the service on the go?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Content for mobile app question will be added here.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
