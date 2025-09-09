"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";

export default function QAHowWeWork() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">How we work</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-6 flex flex-col items-center justify-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10 lg:gap-12">
        <PointLine
          title="1. Reviewing the existing DOCUMENTATION"
          description="Receive a product presentation from the client."
          index={1}
        />
        <PointLine
          title="2. Exploratory TESTING"
          description="Perform exploratory testing to understand the functionality of the product and find the initial problems."
          index={2}
        />
        <PointLine
          title="3. Integrating THE QA TEAM"
          description="Analyze the current workflow and provide suggestions to adapt the existing workflow to the integration of a QA team."
          index={3}
        />
        <PointLine
          title="4. Establishing a TESTING ENVIRONMENT"
          description="Establish an environment for testing which can be managed by the QA team."
          index={4}
        />
      </div>
    </div>
  );
}
