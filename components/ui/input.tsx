import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type InputWrapperProps<T extends React.ElementType> = {
  Component?: T;
  children?: React.ReactNode;
  variant?: "default" | "outline";
} & React.ComponentProps<T>;

const inputVariants = cva("", {
  variants: {
    variant: {
      default:
        "group rounded-default outline-neutral-n150 hover:outline-neutral-n200 focus:outline-blue-b600 focus-within:!outline-blue-b600 relative bg-white px-3 py-[6px] shadow focus-within:outline-[1px] focus-visible:ring-0",
      outline:
        "group focus:outline-none focus-within:outline-none focus-visible:outline-none outline-none rounded-none bg-transparent border-b-[1px] border-solid border-b-charcole",
    },
  },
});

export const InputWrapper = forwardRef<HTMLElement, InputWrapperProps<React.ElementType>>(
  ({ className, Component = "input", children, variant = "default", ...props }, ref) => {
    if (children) {
      // Check if any child has the correct data-slot
      const hasSlotInput = React.Children.toArray(children).some((child) => {
        if (React.isValidElement(child)) {
          // Check if the child has data-slot="input-content"
          return child.type === InputContent;
        }
        return false;
      });

      // If children exist but none have the correct data-slot, throw an error
      if (!hasSlotInput) {
        throw new Error("If you want to use Input as Wrapper, please use Input.Content");
      }
    }

    // Determine the final component type
    const FinalComponent = children ? "div" : Component;

    return (
      <FinalComponent ref={ref} className={cn(inputVariants({ variant, className }))} {...props}>
        {children}
      </FinalComponent>
    );
  },
);

export const InputContent = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        data-slot="input-content"
        className={cn(
          "placeholder:text-neutral-n400 w-full border-none bg-transparent outline-none focus:outline-none focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);

InputWrapper.displayName = "InputWrapper";
InputContent.displayName = "InputContent";

export const Input = Object.assign(InputWrapper, {
  Content: InputContent,
});
