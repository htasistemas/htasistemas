import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-blue to-[#4a8cff] text-white shadow-glow hover:from-[#1d4ed8] hover:to-[#60a5fa]",
        secondary:
          "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
        outline:
          "border border-white/25 bg-white/12 text-white hover:border-white/45 hover:bg-white/18",
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        success:
          "bg-gradient-to-r from-brand-green to-[#2dd4bf] text-slate-950 hover:from-[#10b981] hover:to-[#5eead4]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
