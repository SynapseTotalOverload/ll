"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";

export default function GraphicDesignHowWeWork() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">How we work</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          we bring your brand&apos;s vision to life through creative and strategic graphic design. Here&apos;s how we
          work to deliver impactful visual solutions
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-6 flex flex-col items-center justify-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10 lg:gap-12">
        <PointLine
          title="Understanding Your Brand"
          description="We start by immersing ourselves in your brand identity, values, and target audience to ensure our designs align with your goals."
          index={1}
        />
        <PointLine
          title="Concept Development"
          description="Our designers brainstorm and create concepts that reflect your vision, ensuring every element is meaningful and cohesive."
          index={2}
        />
        <PointLine
          title="Design Execution"
          description="Using modern tools and techniques, we craft high-quality visuals, from logos and marketing materials to digital assets and custom illustrations."
          index={3}
        />
        <PointLine
          title="Feedback & Refinement"
          description="Collaboration is key. We gather your feedback to fine-tune designs, ensuring the final product exceeds your expectations."
          index={4}
        />
        <PointLine
          title="Delivery & Support"
          description="We deliver ready-to-use assets in all required formats and offer ongoing support to keep your visuals fresh and relevant."
          index={5}
        />
      </div>
    </div>
  );
}
