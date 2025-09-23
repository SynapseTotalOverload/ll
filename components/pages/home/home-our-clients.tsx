"use client";
import SignTitle from "@/components/modules/sign-title";
import PlaceholderLogo from "@/public/assets/svg/placeholder-logo.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function OurClients() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Clients</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          80+ clients in 15 countries trust us and grow their business with LogicCraft
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Clients Carousel */}
      <Carousel className="w-full">
        <CarouselContent className="px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10 xl:py-12">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-2 grid-rows-3 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <PlaceholderLogo className="" />
                </div>
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <PlaceholderLogo className="" />np
                </div>
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <PlaceholderLogo className="" />
                </div>
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <PlaceholderLogo className="" />
                </div>
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <PlaceholderLogo className="" />
                </div>
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <PlaceholderLogo className="" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden h-10 w-10 sm:flex md:h-12 md:w-12 lg:h-14 lg:w-14" />
        <CarouselNext className="hidden h-10 w-10 sm:flex md:h-12 md:w-12 lg:h-14 lg:w-14" />
      </Carousel>
    </div>
  );
}
