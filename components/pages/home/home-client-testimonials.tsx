"use client";
import { useState } from "react";
import { testimonials } from "@/constants/hero/reviews";
import { cn } from "@/lib/utils";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ClientTestimonials() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 6);

  return (
    <div className="flex w-full flex-col gap-6 sm:gap-7 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Client testimonials</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>
      <div className="relative flex flex-col gap-6 sm:gap-7 md:gap-8">
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8")}>
          {displayedTestimonials.map((testimonial) => (
            <InfoCard key={testimonial.id} className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-row items-center gap-3 sm:gap-4">
                <Avatar className="size-12 sm:size-14 md:size-16">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <InfoCard.Title className="">{testimonial.role}</InfoCard.Title>
              </div>
              <span className="text-plastic text-[14px]">{testimonial.testimonial}</span>
            </InfoCard>
          ))}
        </div>
        {!showAllTestimonials && (
          <div
            style={{ boxShadow: " rgb(0, 0, 0) 0px -101px 92px -19px inset" }}
            className="absolute right-0 bottom-0 left-0 h-full"
          />
        )}
        {!showAllTestimonials && testimonials.length > 6 && (
          <div
            onClick={() => {
              setShowAllTestimonials(true);
            }}
            className="absolute bottom-0 left-[50%] flex cursor-pointer justify-center"
          >
            <span className="text-night-blue underline">Show more</span>
          </div>
        )}
      </div>
    </div>
  );
}
