import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function AreYouReady() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
      <div className="small-hero-bg flex min-h-[300px] w-full max-w-[95%] flex-col items-center justify-center gap-8 rounded-lg p-6 text-center sm:min-h-[350px] sm:max-w-[90%] sm:gap-12 sm:p-8 md:min-h-[400px] md:max-w-[85%] md:gap-16 md:p-10 lg:max-w-[80%] lg:gap-20 lg:p-12 xl:max-w-[75%] xl:gap-24 xl:p-16">
        <h2 className="custom-font-bricolage text-xl font-bold tracking-tight capitalize sm:text-2xl sm:tracking-tighter md:text-3xl md:tracking-tight lg:text-4xl lg:tracking-tight xl:text-5xl xl:tracking-[-3px]">
          Are you ready to build your best product?
        </h2>
        <BackgroundGradient>
          <Button className="h-12 px-6 text-sm font-medium sm:h-14 sm:px-8 sm:text-base md:h-16 md:px-10 md:text-lg">
            Let&apos;s talk
          </Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
