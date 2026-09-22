import Image from "next/image";
import { Check, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MountainBackdrop } from "@/components/ui/MountainBackdrop";
import { DemoButton } from "@/components/demo/DemoButton";
import { PlayMarketBadge } from "@/components/ui/PlayMarketBadge";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <header className="from-sky-1 via-surface to-bg relative overflow-hidden bg-linear-to-b pt-14 pb-24 sm:pt-20">
      <div id="about" className="absolute top-0 scroll-mt-20" />
      <MountainBackdrop variant="bottom" className="h-64 opacity-90" />
      <div
        aria-hidden
        className="from-brand-blue-bright/15 pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-radial to-transparent blur-2xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">
        {/* Left: text */}
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
            <a
              href={hero.videoButton.href}
              className="text-ink-soft hover:text-ink flex items-center gap-2 text-sm font-semibold transition-colors"
            >
              <span className="border-line bg-surface shadow-sm flex h-9 w-9 items-center justify-center rounded-full border">
                <Play aria-hidden="true" className="text-brand-blue ml-0.5 h-3.5 w-3.5 fill-current" />
              </span>
              {hero.videoButton.label}
            </a>
          </div>

          <div className="enter mt-6" style={{ animationDelay: "350ms" }}>
            <PlayMarketBadge />
          </div>
        </div>

        {/* Right: hero image */}
        <div
          className="enter relative hidden lg:block"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-brand-navy/20">
            <Image
              src="/hero-bg.webp"
              alt="1C Agent Pro — мобильное рабочее место торгового представителя"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 0px, 50vw"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
