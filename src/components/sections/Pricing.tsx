import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { pricing } from "@/content/site";

export function Pricing() {
  return (
    <section id="pricing" className="py-18 sm:py-24">
      <Container className="flex flex-col gap-11">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.tag}
              className={cn(
                "border-line bg-surface relative rounded-[20px] border p-7",
                tier.highlighted &&
                  "border-brand-blue shadow-brand-blue/15 shadow-xl lg:-translate-y-2",
              )}
            >
              {tier.highlighted ? (
                <span className="bg-brand-blue absolute -top-3.5 left-7 rounded-full px-3.5 py-1 text-[0.68rem] font-bold text-white">
                  {tier.badge}
                </span>
              ) : null}

              <p className="text-ink-soft text-xs font-bold tracking-wide uppercase">
                {tier.tag}
              </p>
              <p className="font-display text-ink mt-1.5 text-xl font-extrabold">
                {tier.name}
              </p>
              <p className="font-display text-heading mt-4 text-3xl font-extrabold tabular-nums">
                {tier.priceRange}
                <span className="text-ink-soft ml-1.5 text-xs font-semibold">
                  {tier.unit}
                </span>
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-ink flex items-start gap-2 text-sm">
                    <Check
                      className="text-brand-green mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={3}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
