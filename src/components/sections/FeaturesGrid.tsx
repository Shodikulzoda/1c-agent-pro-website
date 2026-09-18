import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { features } from "@/content/site";

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-surface-tint py-18 sm:py-24">
      <Container className="flex flex-col gap-11">
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <div
                key={feature.title}
                className="border-line bg-surface rounded-2xl border p-6.5"
              >
                <span className="bg-surface-tint text-brand-blue mb-4 flex h-11.5 w-11.5 items-center justify-center rounded-xl">
                  <Icon
                    aria-hidden="true"
                    className="h-[22px] w-[22px]"
                    strokeWidth={2}
                  />
                </span>
                <h3 className="text-ink mb-2 text-[1.05rem] font-bold">
                  {feature.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
