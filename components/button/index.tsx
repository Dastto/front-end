import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button as HeadlessButton } from "@headlessui/react";
import Image from "next/image";

const button = cva(
  "h-13 font-semibold transition-all duration-300 hover:opacity-90 cursor-pointer hover:scale-105 origin-center",
  {
    variants: {
      intent: {
        default: [
          "bg-design-black",
          "text-white",
          "border-transparent",
          "outline-none",
          "ring-0",
        ],
      },
      rounded: {
        none: ["rounded-none"],
        medium: ["rounded-md"],
        extraMedium: ["rounded-xl"],
        full: ["rounded-full"],
      },
      size: {
        medium: ["text-base", "py-2", "px-4"],
      },
      fullWidth: {
        true: ["w-full"],
        false: ["max-w-fit"],
      },
      disabled: {
        false: null,
        true: [
          "opacity-90",
          "cursor-not-allowed",
          "gradient-background-animation",
        ],
      },
    },
    defaultVariants: {
      disabled: false,
      intent: "default",
      size: "medium",
      fullWidth: false,
      rounded: "extraMedium",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  rounded,
  fullWidth,
  children,
  ...props
}) => (
  <HeadlessButton
    className={button({
      intent,
      size,
      disabled,
      rounded,
      fullWidth,
      className,
    })}
    disabled={disabled || undefined}
    {...props}
  >
    {disabled ? (
      <div className="w-full h-full flex items-center justify-center">
        <Image
          width={50}
          height={50}
          src="/assets/svgs/loader.svg"
          alt="loader"
        />
      </div>
    ) : (
      children
    )}
  </HeadlessButton>
);
