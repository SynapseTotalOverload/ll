import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export function PointLine({
  title,
  description,
  index,
  className,
}: {
  title: string;
  description: string;
  index: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setLineHeight(containerRef.current.clientHeight);
    }
  }, [title, description]); // Recalculate when content changes

  return (
    <div className={cn("flex max-w-[90%] flex-row gap-[12px] md:max-w-[60%]", className)}>
      <div className="flex flex-col items-center">
        <div className="bg-night-blue outline-night-blue mt-2 aspect-square size-4 rounded-full outline-[1px] outline-offset-[4px]" />
        <div className="relative flex w-full flex-col items-center">
          <div className="bg-night-blue mt-0 w-[1px]" style={{ height: `${lineHeight}px` }} />
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
