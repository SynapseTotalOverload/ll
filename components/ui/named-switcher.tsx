import { cn } from "@/lib/utils";
import { useState } from "react";
import { BackgroundGradient } from "./background-gradient";

export function NamedSwitcher({
  className,
  options,
  active,
  onChange,
  remderOptions,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: string[];
  active: string;
  onChange: (option: string) => void;
  remderOptions?: (option: string) => React.ReactNode;
}) {
  return (
    <div className={cn("light-grad flex w-fit flex-row rounded-full p-2", className)} {...props}>
      {options.map((option) => {
        const content = (
          <div
            key={option}
            className={cn(
              "flex cursor-pointer flex-col rounded-full px-8 py-4",
              active === option && "bg-opacity-100-black",
            )}
            onClick={() => onChange(option)}
          >
            {remderOptions ? remderOptions(option) : <span>{option}</span>}
          </div>
        );

        return active === option ? <BackgroundGradient key={option}>{content}</BackgroundGradient> : content;
      })}
    </div>
  );
}
