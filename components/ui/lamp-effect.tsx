import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function LampEffect({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-night-blue lamp-effect flex w-fit flex-col items-center justify-center rounded-[4px] border-t-[1px] border-solid bg-transparent p-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
