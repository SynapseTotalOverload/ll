import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Separator } from "../ui/separator";
function SignTitleRoot({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col justify-center gap-8", className)} {...props}>
      {children}
    </div>
  );
}

function SignTitleTitle({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex w-fit",
        "bricolage align-middle text-[40px] leading-[120%] font-bold tracking-[-3%] capitalize",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function SignTitleDescription({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex w-fit",
        "align-middle font-['Apple_SD_Gothic_Neo'] text-[20px] leading-[150%] font-normal tracking-[-3%] lowercase",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function SignSeparator({ className, ...props }: Omit<HTMLAttributes<HTMLDivElement>, "children">) {
  return <Separator className={cn("w-full", className)} {...props} />;
}

const SignTitle = Object.assign(SignTitleRoot, {
  Title: SignTitleTitle,
  Description: SignTitleDescription,
  Separator: SignSeparator,
});

export default SignTitle;
