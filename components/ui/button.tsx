import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-accent)] px-5 py-2.5 text-white shadow-[0_12px_32px_rgba(59,130,246,0.28)] hover:-translate-y-0.5 hover:bg-[#4d8ef7]",
        outline:
          "border border-white/12 bg-white/[0.03] px-5 py-2.5 text-[var(--color-text-primary)] hover:border-white/20 hover:bg-white/[0.06]",
        ghost:
          "px-3 py-2 text-[var(--color-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--color-text-primary)]"
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export {Button, buttonVariants};

