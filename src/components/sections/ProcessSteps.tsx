import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { process } from "@/content/site";

export function ProcessSteps() {
  return (
    <section id="process" className="py-18 sm:py-24">
      <Container className="flex flex-col gap-11">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />

        <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {process.steps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li
                key={step.title}
                className="border-line bg-surface flex flex-col gap-3 rounded-2xl border p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="from-brand-blue-bright to-brand-blue flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-linear-to-br text-white">
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      strokeWidth={2}
                    />
                  </span>
                  <span className="text-brand-blue bg-surface-tint flex h-7.5 w-7.5 items-center justify-center rounded-full text-xs font-extrabold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-ink text-[0.95rem] font-bold">
                  {step.title}
                  {"duration" in step && step.duration ? (
                    <span className="text-ink-soft ml-1 text-[0.75rem] font-normal">({step.duration})</span>
                  ) : null}
                </h3>
                <p className="text-ink-soft text-[0.82rem] leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
