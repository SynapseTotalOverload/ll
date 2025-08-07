import { cn } from "@/lib/utils";
import { useState } from "react";

export function NamedSwitcher({
  className,
  options,
  active,
  onChange,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: string[];
  active: string;
  onChange: (option: string) => void;
}) {
  return (
    <div className={cn("light-grad flex w-fit flex-row rounded-full p-2", className)} {...props}>
      {options.map((option) => (
        <div
          key={option}
          className={cn(
            "flex cursor-pointer flex-col rounded-full px-8 py-4",
            active === option && "bg-opacity-100-black outline-night-blue outline",
          )}
          onClick={() => onChange(option)}
        >
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
}
