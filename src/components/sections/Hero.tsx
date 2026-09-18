import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-14 pb-10 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-line) 1.6px, transparent 1.6px)",
          backgroundSize: "18px 18px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 70%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="from-brand-blue-bright/15 pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-radial to-transparent blur-2xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="font-display text-heading mt-5 text-[2.1rem] leading-[1.1] font-extrabold text-balance sm:text-5xl lg:text-[3.1rem]">
            {hero.titleLine1} {hero.titleLine2}{" "}
            <span className="text-brand-green">{hero.titleAccent}</span>
          </h1>
          <p className="text-ink-soft mt-4.5 max-w-lg text-base leading-relaxed sm:text-lg">
            {hero.description}
          </p>

          <ul className="mt-6.5 flex flex-col gap-3">
            {hero.checklist.map((item) => (
              <li
                key={item}
                className="text-ink flex items-start gap-2.5 text-sm font-semibold sm:text-base"
              >
                <span className="bg-brand-green mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label} →</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[280px]">
          <div
            aria-hidden
            className="border-line bg-surface shadow-brand-navy/15 text-heading absolute -top-4 -left-6 z-10 flex items-center gap-2 rounded-2xl border px-3.5 py-2.5 text-xs font-bold shadow-xl sm:-left-10"
          >
            <span className="bg-brand-green h-2 w-2 rounded-full" />
            {hero.floatingBadges.visits}
          </div>
          <div
            aria-hidden
            className="border-line bg-surface shadow-brand-navy/15 text-brand-green absolute -right-4 -bottom-4 z-10 rounded-2xl border px-3.5 py-2.5 text-xs font-bold shadow-xl sm:-right-8"
          >
            {hero.floatingBadges.growth}
          </div>

          <div className="border-line bg-surface shadow-brand-navy/20 rounded-[34px] border p-3.5 shadow-2xl">
            <div className="bg-surface-tint flex min-h-100 flex-col gap-4 rounded-[22px] p-4">
              <p className="text-ink-soft text-[0.65rem] font-bold tracking-wide uppercase">
                {hero.phoneMock.routeLabel}
              </p>
              <div className="bg-surface border-line divide-line/70 divide-y rounded-xl border">
                {hero.phoneMock.stops.map((stop) => (
                  <div
                    key={stop.name}
                    className="flex items-center justify-between px-3 py-2.5 text-[0.72rem] font-semibold"
                  >
                    <span className="text-ink">{stop.name}</span>
                    <span className="text-brand-green bg-brand-green/12 rounded-full px-2 py-0.5 text-[0.62rem]">
                      {stop.time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-ink-soft text-[0.65rem] font-bold tracking-wide uppercase">
                {hero.phoneMock.summaryLabel}
              </p>
              <div className="bg-surface border-line divide-line/70 divide-y rounded-xl border">
                {hero.phoneMock.summary.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-3 py-2.5 text-[0.72rem] font-semibold"
                  >
                    <span className="text-ink">{row.label}</span>
                    {row.value === "done" ? (
                      <Check className="text-brand-green h-3.5 w-3.5" strokeWidth={3} />
                    ) : (
                      <span className="text-brand-green">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
