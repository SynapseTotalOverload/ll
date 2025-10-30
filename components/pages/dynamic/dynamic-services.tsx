"use client";
import { Button } from "@/components/ui/button";

export default function DynamicServices({ services, description }: { services: string[]; description: string }) {
  return (
    <div className="flex flex-col items-start justify-start gap-6 rounded-[16px] p-4 sm:gap-8 sm:p-6 md:flex-row md:gap-12 md:p-8 lg:gap-20 lg:p-10">
      {/* Left side - Services */}
      <div className="flex w-full flex-col gap-6 sm:gap-8 md:w-[50%]">
        <span className="bricolage text-[28px] font-[700] text-white sm:text-[36px] md:text-[42px]">Services</span>

        {/* Services Grid */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {/* First row */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {services.slice(0, 3).map((service, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full border-gray-400 bg-transparent text-[12px] text-white hover:bg-gray-800 sm:text-[14px]"
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Second row */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {services.slice(3, 6).map((service, index) => (
              <Button
                key={index + 3}
                variant="outline"
                className="rounded-full border-gray-400 bg-transparent text-[12px] text-white hover:bg-gray-800 sm:text-[14px]"
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Third row */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {services.slice(6, 10).map((service, index) => (
              <Button
                key={index + 6}
                variant="outline"
                className="rounded-full border-gray-400 bg-transparent text-[12px] text-white hover:bg-gray-800 sm:text-[14px]"
              >
                {service}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Description */}
      <div className="flex flex-1 flex-col gap-4 sm:gap-6">
        <div className="text-[14px] leading-relaxed font-[300] text-white sm:text-[16px]">{description}</div>
      </div>
    </div>
  );
}
