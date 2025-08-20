"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";

export default function GraphicDesignWhyUs() {
  return (
    <div className="flex w-full flex-col px-20">
      <SignTitle>
        <SignTitle.Title>Why us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="mt-10 flex flex-col items-center justify-center">
        <PointLine
          title="1. PROJECTS SPANNING THE GLOBE"
          description="LogicCraft is a global company committed to providing tailored solutions that meet the diverse needs of clients, wherever they are."
          index={1}
        />
        <PointLine
          title="2. SATISFIED CLIENTS"
          description="From startups to global corporations, we work with companies of all sizes. Our expertise helps every business achieve success through creative design solutions."
          index={2}
        />
        <PointLine
          title="3. TOP-TIER DESIGN TALENT"
          description="LogicCraft is home to over 100 skilled designers. Our flexibility allows us to deliver quality solutions that meet your needs."
          index={3}
        />
        <PointLine
          title="4. INDUSTRY LEADERS"
          description="LogicCraft actively participates in prestigious design competitions, highlighting our creativity and commitment to excellence in the industry."
          index={4}
        />
      </div>
    </div>
  );
}
