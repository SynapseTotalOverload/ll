import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = false,
  rounded = "rounded-full",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  rounded?: string;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("group relative p-[2px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          background: "linear-gradient(96.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
        }}
        className={cn("absolute inset-0 z-[1] opacity-60 transition duration-500 will-change-transform", rounded)}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          background: "linear-gradient(96.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
        }}
        className={cn("absolute inset-0 z-[1] will-change-transform", rounded)}
      />

      <div className={cn("relative h-full z-10", className)}>{children}</div>
    </div>
  );
};
