import { useRef } from "react";

export function PointLine({ title, description, index }: { title: string; description: string; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex max-w-[60%] flex-row gap-[12px]">
      <div className="flex flex-col items-center">
        <div className="bg-night-blue outline-night-blue mt-2 aspect-square size-4 rounded-full outline-[1px] outline-offset-[4px]" />
        <div className="relative flex w-full flex-col items-center">
          <div className="bg-night-blue w-[1px]" style={{ height: `${containerRef.current?.clientHeight}px` }} />
        </div>
      </div>
      <div ref={containerRef} className="mb-8 flex flex-col gap-2">
        <span className="text-plastic text-[20px] font-[700]">
          {index}. {title}
        </span>
        <p className="text-[24px] font-[400] text-white">{description}</p>
      </div>
    </div>
  );
}
