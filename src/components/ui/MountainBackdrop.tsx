import { cn } from "@/lib/cn";

/**
 * Original layered winter-mountain / ridge silhouette in pale blue, drawn as
 * inline SVG (no external image, no copyright exposure). Purely decorative —
 * sits behind content and is hidden from assistive tech.
 *
 * `variant="top"` fades in from the top edge (hero sky); `variant="bottom"`
 * anchors ridges to the bottom edge (section footers / bands).
 */
export function MountainBackdrop({
  variant = "bottom",
  className,
}: {
  variant?: "top" | "bottom";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 overflow-hidden",
        variant === "bottom" ? "bottom-0" : "top-0",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={cn("h-full w-full", variant === "top" && "-scale-y-100")}
        role="presentation"
      >
        {/* farthest ridge */}
        <path
          fill="var(--color-sky-3)"
          fillOpacity="0.55"
          d="M0 220 L180 150 L340 210 L520 120 L700 200 L880 130 L1080 205 L1260 140 L1440 200 L1440 320 L0 320 Z"
        />
        {/* mid ridge */}
        <path
          fill="var(--color-sky-2)"
          fillOpacity="0.8"
          d="M0 260 L200 200 L380 255 L560 185 L760 250 L960 190 L1160 250 L1340 200 L1440 240 L1440 320 L0 320 Z"
        />
        {/* near hills */}
        <path
          fill="var(--color-sky-1)"
          d="M0 290 L240 250 L480 288 L720 245 L960 288 L1200 250 L1440 285 L1440 320 L0 320 Z"
        />
      </svg>
    </div>
  );
}
