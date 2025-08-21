"use client";
import SignTitle from "@/components/modules/sign-title";
import PlaceholderLogo from "@/public/assets/svg/placeholder-logo.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function OurClients() {
  return (
    <div className="flex w-full flex-col px-4 sm:px-8 md:px-12 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Our Clients</SignTitle.Title>
        <SignTitle.Description>
          80+ clients in 15 countries trust us and grow their business with LogicCraft
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Clients Carousel */}
      <Carousel>
        <CarouselContent className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-14 lg:py-16">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-rows-3 sm:grid-rows-2 gap-y-8 sm:gap-y-12 md:gap-y-16 lg:gap-y-[80px]">
                <div className="flex flex-col items-center justify-center">
                  <PlaceholderLogo />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <PlaceholderLogo />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <PlaceholderLogo />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <PlaceholderLogo />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <PlaceholderLogo />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <PlaceholderLogo />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
