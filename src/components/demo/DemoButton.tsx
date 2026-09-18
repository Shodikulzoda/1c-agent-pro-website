"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { useDemoModal } from "./DemoModalProvider";

const variants = {
  primary:
    "bg-linear-to-br from-brand-blue-bright to-brand-blue text-white shadow-lg shadow-brand-blue/30 hover:brightness-105",
  yellow:
    "bg-brand-yellow text-brand-navy shadow-lg shadow-brand-yellow/30 hover:brightness-105",
  inverse: "bg-white text-brand-navy hover:bg-white/90",
} as const;

type DemoButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variants;
};

/** Button that opens the shared demo-request modal. */
export function DemoButton({
  variant = "primary",
  className,
  children,
  onClick,
  ...props
}: DemoButtonProps) {
  const { open } = useDemoModal();
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl px-5.5 py-3 text-sm font-bold",
        "transition-[filter] duration-150 ease-out motion-safe:transition-[transform,filter] motion-safe:hover:-translate-y-0.5",
        "focus-visible:outline-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
