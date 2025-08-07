import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function AreYouReady() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="small-hero-bg flex h-[400px] max-w-[60%] flex-col items-center justify-center gap-16 text-center">
        <span className="custom-font-bricolage text-[64px] font-[700] tracking-[-3px]">
          Are you ready to build your best product?
        </span>
        <BackgroundGradient>
          <Button>Get an estimate</Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
