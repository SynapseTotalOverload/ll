"use client";
import { Button } from "@/components/ui/button";

export default function DynamicServices({ services, description }: { services: string[]; description: string }) {
  return (
    <div className="flex flex-row items-start justify-between gap-[90px] rounded-[16px] p-8">
      {/* Left side - Services */}
      <div className="flex w-[50%] flex-col gap-8">
        <span className="bricolage text-[42px] font-[700] text-white">Services</span>

        {/* Services Grid */}
        <div className="flex flex-col gap-4">
          {/* First row */}
          <div className="flex flex-row gap-3">
            {services.slice(0, 3).map((service, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full border-gray-400 bg-transparent text-white hover:bg-gray-800"
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Second row */}
          <div className="flex flex-row gap-3">
            {services.slice(3, 6).map((service, index) => (
              <Button
                key={index + 3}
                variant="outline"
                className="rounded-full border-gray-400 bg-transparent text-white hover:bg-gray-800"
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Third row */}
          <div className="flex flex-row gap-3">
            {services.slice(6, 10).map((service, index) => (
              <Button
                key={index + 6}
                variant="outline"
                className="rounded-full border-gray-400 bg-transparent text-white hover:bg-gray-800"
              >
                {service}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Description */}
      <div className="flex flex-1 flex-col gap-6">
        <div className="text-[16px] leading-relaxed font-[300] text-white">{description}</div>
      </div>
    </div>
  );
}
