import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { industries } from "@/content/site";

export function Industries() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="flex flex-col gap-10">
        <div id="industries" className="scroll-mt-20 flex flex-col items-center gap-5">
          <SectionHeading
            align="center"
            eyebrow={industries.eyebrow}
            title={industries.title}
            description={industries.description}
          />
          <p className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-[0.78rem] text-red-700 max-w-xl text-center dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
            <X className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
            {industries.notFor}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((industry) => {
            const Icon = icons[industry.icon];
            return (
              <div
                key={industry.title}
                className="border-line bg-surface relative overflow-hidden rounded-2xl border p-5.5"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-brand-blue" />
                <span className="bg-brand-navy mb-3.5 flex h-9.5 w-9.5 items-center justify-center rounded-[10px] text-white">
                  <Icon
                    aria-hidden="true"
                    className="h-[18px] w-[18px]"
                    strokeWidth={2}
                  />
                </span>
                <h3 className="text-ink mb-2.5 text-[0.95rem] font-bold">
                  {industry.title}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {industry.points.map((point) => (
                    <li
                      key={point}
                      className="text-ink-soft flex items-start gap-1.5 text-[0.78rem]"
                    >
                      <Check
                        aria-hidden="true"
                        className="text-brand-green mt-0.5 h-3 w-3 shrink-0"
                        strokeWidth={3}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
