import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "paper" | "ghost" | "navy" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-gold/90",
  paper: "bg-paper text-navy hover:bg-cream",
  ghost: "bg-transparent text-paper hover:bg-paper/8",
  navy: "bg-navy text-paper hover:bg-deep",
  outline:
    "bg-transparent text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_16%,transparent)] hover:bg-cream",
  danger: "bg-red-800 text-paper hover:bg-red-900",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    static?: boolean;
  }
>(function Button(
  { className, variant = "gold", size = "md", static: isStatic, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight",
        "transition-[transform,background-color,box-shadow,opacity] duration-150 ease-out",
        "disabled:pointer-events-none disabled:opacity-50",
        !isStatic && "active:not-disabled:scale-[0.96]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
});
