"use client";
import { Button } from "@/components/ui/button";

export default function AboutUsCTA() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-20">
      <div className="small-hero-bg mt-10 flex min-h-[400px] max-w-[90%] flex-col items-center justify-center gap-8">
        <span className="text-center text-[64px] font-[700] max-w-[80%]">Capacitate your business with our tech expertise</span>
        <Button className="blue-grad">Let&apos;s talk</Button>
      </div>
    </div>
  );
}
