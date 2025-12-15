import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Separator } from "../ui/separator";
function CountCardRoot({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex max-h-[250px] min-h-[200px] max-w-[50%] flex-row gap-6", className)} {...props}>
      {children}
    </div>
  );
}

function CountCardIndex({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-plastic custom-font-bricolage self-start text-[100px] font-[700]", className)} {...props}>
      {children}
    </span>
  );
}

function CountCardSeparator({ className, ...props }: Omit<HTMLAttributes<HTMLSpanElement>, "children">) {
  return (
    <Separator
      orientation="vertical"
      className={cn("bg-plastic h-full min-h-[200px] w-[2px] opacity-50", className)}
      {...props}
    />
  );
}

function CountCardTitle({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-[16px] font-[700] capitalize", className)} {...props}>
      {children}
    </span>
  );
}

function CountCardDescription({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-white capitalize", className)} {...props}>
      {children}
    </span>
  );
}

function CountCardContent({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
}
const CountCard = Object.assign(CountCardRoot, {
  Index: CountCardIndex,
  Separator: CountCardSeparator,
  Title: CountCardTitle,
  Description: CountCardDescription,
  Content: CountCardContent,
});
export default CountCard;
