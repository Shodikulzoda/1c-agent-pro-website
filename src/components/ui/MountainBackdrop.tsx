import { cn } from "@/lib/cn";

/**
 * Original winter scenery — layered blue mountains, a faint city skyline and
 * evergreen firs — drawn as inline SVG (no external image, no copyright
 * exposure). Purely decorative; hidden from assistive tech.
 *
 * `variant="bottom"` anchors the ridges to the bottom edge (section bands);
 * `variant="top"` flips it to fade down from the top edge.
 *
 * preserveAspectRatio "slice" keeps the firs/buildings proportional (never
 * horizontally stretched) while the art fills any width.
 */
function Fir({ x, base, h, w }: { x: number; base: number; h: number; w: number }) {
  const tiers = [0, 0.34, 0.62];
  return (
    <g fill="var(--color-sky-3)" fillOpacity="0.7">
      {tiers.map((t, i) => {
        const top = base - h + h * t;
        const spread = (w / 2) * (1 - t * 0.55);
        const tierH = h * (0.5 - t * 0.12);
        return (
          <path
            key={i}
            d={`M ${x} ${top} L ${x - spread} ${top + tierH} L ${x + spread} ${top + tierH} Z`}
          />
        );
      })}
      <rect x={x - w * 0.06} y={base - 6} width={w * 0.12} height={6} />
    </g>
  );
}

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
        preserveAspectRatio="xMidYMax slice"
        className={cn("h-full w-full", variant === "top" && "-scale-y-100")}
        role="presentation"
      >
        {/* farthest ridge */}
        <path
          fill="var(--color-sky-3)"
          fillOpacity="0.45"
          d="M0 200 L170 130 L330 195 L510 105 L690 185 L880 120 L1080 195 L1270 125 L1440 190 L1440 320 L0 320 Z"
        />

        {/* faint city skyline sitting on the far ridge */}
        <g fill="var(--color-sky-3)" fillOpacity="0.35">
          <rect x="600" y="150" width="14" height="60" />
          <rect x="618" y="132" width="18" height="78" />
          <rect x="640" y="158" width="12" height="52" />
          <rect x="656" y="120" width="20" height="90" />
          <rect x="680" y="145" width="14" height="65" />
          <rect x="698" y="160" width="16" height="50" />
          <rect x="720" y="138" width="12" height="72" />
        </g>

        {/* mid ridge */}
        <path
          fill="var(--color-sky-2)"
          fillOpacity="0.85"
          d="M0 250 L200 190 L380 248 L560 175 L760 245 L960 180 L1160 245 L1340 190 L1440 235 L1440 320 L0 320 Z"
        />

        {/* near hills */}
        <path
          fill="var(--color-sky-1)"
          d="M0 288 L240 250 L480 286 L720 244 L960 286 L1200 250 L1440 284 L1440 320 L0 320 Z"
        />

        {/* evergreen firs dotted along the near hill */}
        <Fir x={140} base={284} h={54} w={40} />
        <Fir x={210} base={292} h={40} w={30} />
        <Fir x={1180} base={286} h={50} w={38} />
        <Fir x={1250} base={292} h={38} w={28} />
        <Fir x={1320} base={296} h={30} w={22} />
      </svg>
    </div>
  );
}
