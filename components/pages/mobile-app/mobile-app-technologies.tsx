"use client";

import SignTitle from "@/components/modules/sign-title";

import JsIcon from "@/public/assets/svg/javascript-original.svg";
export default function MobileAppTechnologies() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Technologies</SignTitle.Title>
        <SignTitle.Description>
          With an in-depth knowledge of all technologies necessary to build a successful app, we always stay ahead of the game. That&apos;s why we can handle complex technical challenges associated with native application development and offer alternative solutions when a prescribed path is a no go.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Technologies Grid */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[60%] grid-cols-4 place-items-center gap-8">
          <div className="text-center">
            <JsIcon />
            <span className="mt-2 block text-white">Java</span>
          </div>
          <div className="text-center">
            <JsIcon />
            <span className="mt-2 block text-white">Kotlin</span>
          </div>
          <div className="text-center">
            <JsIcon />
            <span className="mt-2 block text-white">Flutter</span>
          </div>
          <div className="text-center">
            <JsIcon />
            <span className="mt-2 block text-white">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
