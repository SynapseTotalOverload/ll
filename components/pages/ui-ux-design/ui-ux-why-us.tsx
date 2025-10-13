"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function UIUXWhyUs() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-6 flex flex-col items-center justify-center sm:mt-8 md:mt-10">
        <PointLine
          title="Appealing design that works"
          description="The secret to our work is that we don't just create appealing designs — we create designs that work. We use product design as a tool to reach your business goals and solve your end users' problems."
          index={1}
          className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%]"
        />
        <PointLine
          title="Your go-to team"
          description="While digital product design is our passion, we also offer our clients full-cycle software development services. Our team handles new product design and development at all stages. From idea evaluation through polished product design and software development and maintenance, you can count on our technological experience. Besides that, we strive for outperformance – one of LogicCraft's core values. By applying a proactive approach to software solutions, we manage to exceed client's expectations for professional product design services."
          index={2}
          className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%]"
        />
        <PointLine
          title="Partnership"
          description="Partnership occupies a very special place among our company's values. We consider our clients partners and treat them as such. Our collaborative approach is guided by transparency and trust, and we're always ready to consult and support you should you have any questions regarding our process. We also follow flexible pricing models and make sure that every detail is tailored exclusively for your project."
          index={3}
          className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%]"
        />
      </div>
    </div>
  );
}
