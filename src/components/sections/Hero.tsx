import Image from "next/image";
import { Check, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DemoButton } from "@/components/demo/DemoButton";
import { PlayMarketBadge } from "@/components/ui/PlayMarketBadge";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-14 pb-28 sm:pt-20 sm:pb-36">
      {/* Background image */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center sm:object-right"
          sizes="100vw"
        />
        {/* Left-to-right fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/85 sm:via-white/70 lg:via-white/55 to-white/10 lg:to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <div id="about" className="absolute top-0 scroll-mt-20" />

      <Container className="relative">
        <div className="max-w-xl">
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

          <div
            className="enter mt-6"
            style={{ animationDelay: "350ms" }}
          >
            <PlayMarketBadge />
          </div>
        </div>
      </Container>
    </header>
  );
}
