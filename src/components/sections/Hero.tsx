import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MountainBackdrop } from "@/components/ui/MountainBackdrop";
import { DemoButton } from "@/components/demo/DemoButton";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <header
      id="about"
      className="from-sky-1 via-surface to-bg relative overflow-hidden bg-linear-to-b pt-14 pb-24 sm:pt-20"
    >
      <MountainBackdrop variant="bottom" className="h-64 opacity-90" />
      <div
        aria-hidden
        className="from-brand-blue-bright/15 pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-radial to-transparent blur-2xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="enter">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
          <h1
            className="font-display text-heading enter mt-5 text-[2.2rem] leading-[1.08] font-extrabold text-balance sm:text-5xl lg:text-[3.25rem]"
            style={{ animationDelay: "70ms" }}
          >
            {hero.titleLine1} {hero.titleLine2}{" "}
            <span className="text-brand-green">{hero.titleAccent}!</span>
          </h1>
          <p
            className="text-ink-soft enter mt-4.5 max-w-lg text-base leading-relaxed sm:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            {hero.description}
          </p>

          <ul
            className="enter mt-6.5 flex flex-col gap-3"
            style={{ animationDelay: "210ms" }}
          >
            {hero.checklist.map((item) => (
              <li
                key={item}
                className="text-ink flex items-start gap-2.5 text-sm font-semibold sm:text-base"
              >
                <span className="bg-brand-green mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                  <Check
                    aria-hidden="true"
                    className="h-3 w-3 text-white"
                    strokeWidth={3}
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            className="enter mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "280ms" }}
          >
            <DemoButton variant="yellow">{hero.primaryCta.label} →</DemoButton>
          </div>
        </div>

        <div className="relative">
          <p
            className="script enter absolute -top-2 right-2 z-10 hidden max-w-[13rem] rotate-[-6deg] text-right text-2xl sm:block"
            style={{ animationDelay: "340ms" }}
          >
            {hero.script}
          </p>

          <div
            className="enter relative mx-auto w-full max-w-[280px]"
            style={{ animationDelay: "180ms" }}
          >
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
                        <Check
                          aria-hidden="true"
                          className="text-brand-green h-3.5 w-3.5"
                          strokeWidth={3}
                        />
                      ) : (
                        <span className="text-brand-green">{row.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
