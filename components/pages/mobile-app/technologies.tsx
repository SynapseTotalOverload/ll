"use client";

import SignTitle from "@/components/modules/sign-title";

import JsIcon from "@/public/assets/svg/javascript-original.svg";
export default function Technologies() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Technologies</SignTitle.Title>
        <SignTitle.Description>
          Our favorite tech stack covers popular technologies with their latest versions. We make the technological
          choice that perfectly aligns with our vision of web development services — rendered with high quality and
          supporting a long-term strategy. We employ only long-term proven technologies to provide the best price to
          quality ratio.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[60%] grid-cols-5 place-items-center gap-8">
          <JsIcon />
          <JsIcon />
          <JsIcon />
          <JsIcon />
          <JsIcon />
        </div>
      </div>
    </div>
  );
}
