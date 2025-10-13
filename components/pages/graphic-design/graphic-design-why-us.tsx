"use client";
import { PointLine } from "@/components/modules/point-line";
import SignTitle from "@/components/modules/sign-title";

export default function GraphicDesignWhyUs() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Mobile: Horizontal scroll */}
      <div className="mt-6 overflow-x-auto pb-4 sm:hidden">
        <div className="flex px-4" style={{ width: "max-content" }}>
          <div className="w-80 flex-shrink-0">
            <PointLine
              title="1. PROJECTS SPANNING THE GLOBE"
              description="LogicCraft is a global company committed to providing tailored solutions that meet the diverse needs of clients, wherever they are."
              index={1}
            />
          </div>
          <div className="w-80 flex-shrink-0">
            <PointLine
              title="2. SATISFIED CLIENTS"
              description="From startups to global corporations, we work with companies of all sizes. Our expertise helps every business achieve success through creative design solutions."
              index={2}
            />
          </div>
          <div className="w-80 flex-shrink-0">
            <PointLine
              title="3. TOP-TIER DESIGN TALENT"
              description="LogicCraft is home to over 100 skilled designers. Our flexibility allows us to deliver quality solutions that meet your needs."
              index={3}
            />
          </div>
          <div className="w-80 flex-shrink-0">
            <PointLine
              title="4. INDUSTRY LEADERS"
              description="LogicCraft actively participates in prestigious design competitions, highlighting our creativity and commitment to excellence in the industry."
              index={4}
            />
          </div>
        </div>
      </div>

      {/* Desktop: Vertical layout */}
      <div className="mt-6 hidden flex-col items-center justify-center sm:mt-8 sm:flex md:mt-10">
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
