import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-linear-to-br from-brand-blue-bright to-brand-blue text-white shadow-lg shadow-brand-blue/30 hover:brightness-105",
  ghost: "bg-surface-tint text-brand-navy border border-line hover:bg-line/60",
  inverse: "bg-white text-brand-navy hover:bg-white/90",
  "inverse-outline": "bg-white/10 text-white border border-white/25 hover:bg-white/15",
} as const;

type Variant = keyof typeof variants;

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = BaseProps & ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-xl px-5.5 py-3 text-sm font-bold",
    "transition-[transform,filter] duration-150 ease-out hover:-translate-y-0.5",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
    variants[variant],
    className,
  );

  if (props.href !== undefined) {
    return <Link className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
