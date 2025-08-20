"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";

export default function QAHowWeWork() {
  return (
    <div className="flex w-full flex-col px-20">
      <SignTitle>
        <SignTitle.Title>How we work</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-10 flex flex-col items-center justify-center">
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
