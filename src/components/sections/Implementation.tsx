import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { implementation } from "@/content/site";

export function Implementation() {
  return (
    <section className="bg-surface-tint py-12 sm:py-16">
      <Container className="flex flex-col gap-11">
        <div id="implementation" className="scroll-mt-20">
          <SectionHeading
            eyebrow={implementation.eyebrow}
            title={implementation.title}
          />
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {implementation.steps.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons];
            return (
              <li
                key={step.title}
                className="border-line bg-surface flex flex-col gap-3 rounded-2xl border p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="from-brand-blue-bright to-brand-blue flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-linear-to-br text-white">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <span className="text-brand-blue bg-surface-tint flex h-7.5 w-7.5 items-center justify-center rounded-full text-xs font-extrabold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-ink text-[0.95rem] font-bold">{step.title}</h3>
                <p className="text-ink-soft text-[0.82rem] leading-relaxed">{step.description}</p>
              </li>
            );
          })}
        </ol>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {implementation.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-line bg-surface rounded-2xl border p-5 text-center"
            >
              <p className="font-display text-heading text-xl font-extrabold tabular-nums">
                {stat.value}
              </p>
              <p className="text-ink-soft mt-1 text-[0.78rem]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Compatibility */}
        <div className="border-line bg-surface rounded-2xl border p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="text-ink text-[0.9rem] font-bold">
              {implementation.compatibility.label}
            </p>
            <span className="bg-brand-blue/10 text-brand-blue rounded-full px-3 py-1 text-[0.72rem] font-semibold">
              {implementation.compatibility.platform}
            </span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {implementation.compatibility.configs.map((cfg) => (
              <li
                key={cfg}
                className="border-line text-ink-soft rounded-lg border px-3 py-1.5 text-[0.78rem]"
              >
                {cfg}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
