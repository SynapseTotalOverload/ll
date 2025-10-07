"use client";

import SignTitle from "@/components/modules/sign-title";

import JsIcon from "@/public/assets/svg/javascript-original.svg";
export default function MobileAppTechnologies() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Technologies</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          With an in-depth knowledge of all technologies necessary to build a successful app, we always stay ahead of
          the game. That&apos;s why we can handle complex technical challenges associated with native application
          development and offer alternative solutions when a prescribed path is a no go.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Technologies Grid */}
      <div className="w-full">
        {/* Mobile: Horizontal scroll */}
        <div className="overflow-x-auto pb-4 sm:hidden">
          <div className="flex gap-6 px-4" style={{ width: "max-content" }}>
            <div className="min-w-[80px] flex-shrink-0 text-center">
              <JsIcon className="mx-auto" />
              <span className="mt-2 block text-sm text-white">Java</span>
            </div>
            <div className="min-w-[80px] flex-shrink-0 text-center">
              <JsIcon className="mx-auto" />
              <span className="mt-2 block text-sm text-white">Kotlin</span>
            </div>
            <div className="min-w-[80px] flex-shrink-0 text-center">
              <JsIcon className="mx-auto" />
              <span className="mt-2 block text-sm text-white">Flutter</span>
            </div>
            <div className="min-w-[80px] flex-shrink-0 text-center">
              <JsIcon className="mx-auto" />
              <span className="mt-2 block text-sm text-white">Swift</span>
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden w-full max-w-[90%] grid-cols-2 place-items-center gap-8 sm:grid sm:max-w-[80%] md:grid-cols-4 md:gap-10 lg:max-w-[70%] lg:gap-8 xl:max-w-[60%]">
          <div className="text-center">
            <JsIcon className="" />
            <span className="mt-2 block text-sm text-white sm:text-base md:text-lg">Java</span>
          </div>
          <div className="text-center">
            <JsIcon className="" />
            <span className="mt-2 block text-sm text-white sm:text-base md:text-lg">Kotlin</span>
          </div>
          <div className="text-center">
            <JsIcon className="" />
            <span className="mt-2 block text-sm text-white sm:text-base md:text-lg">Flutter</span>
          </div>
          <div className="text-center">
            <JsIcon className="" />
            <span className="mt-2 block text-sm text-white sm:text-base md:text-lg">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
