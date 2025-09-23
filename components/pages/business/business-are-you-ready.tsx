import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function AreYouReady() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
      <div className="small-hero-bg flex min-h-[300px] w-full max-w-[95%] flex-col items-center justify-center gap-8 rounded-lg p-6 text-center sm:min-h-[350px] sm:max-w-[90%] sm:gap-12 sm:p-8 md:min-h-[400px] md:max-w-[85%] md:gap-16 md:p-10 lg:max-w-[80%] lg:gap-20 lg:p-12 xl:max-w-[75%] xl:gap-24 xl:p-16">
        <h2 className="custom-font-bricolage text-2xl font-bold tracking-tight sm:text-3xl sm:tracking-tighter md:text-4xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-[-3px]">
          Scale up with confidence while we handle the technical side of it.
        </h2>
        <BackgroundGradient>
          <Button className="h-12 px-6 text-base font-medium sm:h-14 sm:px-8 sm:text-lg md:h-16 md:px-10 md:text-xl">
            Let&apos;s talk
          </Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
