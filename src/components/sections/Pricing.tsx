import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
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

        {/* Tier cards */}
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
              <p className="font-display text-ink mt-0.5 text-sm font-semibold">
                {tier.subtitle}
              </p>
              <p className="font-display text-heading mt-4 text-2xl font-extrabold tabular-nums">
                {tier.priceRange}
                <span className="text-ink-soft ml-1.5 text-[0.72rem] font-semibold">
                  {tier.unit}
                </span>
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-ink flex items-start gap-2 text-sm">
                    <Check
                      aria-hidden="true"
                      className="text-brand-green mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={3}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.smsBonusNote ? (
                <div className="border-brand-blue/20 bg-brand-blue/5 mt-5 rounded-xl border p-3.5">
                  <p className="text-brand-blue text-xs font-semibold leading-snug">
                    🎁 {tier.smsBonusNote}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Scale table + SMS bonus + Included */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Scale table */}
          <div className="border-line bg-surface rounded-[20px] border p-6">
            <p className="font-display text-heading text-base font-extrabold">
              {pricing.scaleTable.title}
            </p>
            <p className="text-ink-soft mt-0.5 text-xs">{pricing.scaleTable.subtitle}</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-[0.75rem]">
                <thead>
                  <tr className="text-ink-soft border-line border-b">
                    <th className="pb-2 pr-3 text-left font-semibold">Тариф</th>
                    {pricing.scaleTable.columns.map((col) => (
                      <th key={col} className="pb-2 px-1 text-center font-semibold whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.scaleTable.rows.map((row, i) => (
                    <tr key={row.tier} className={cn("border-line border-b last:border-0", i % 2 === 0 && "bg-surface-tint/50")}>
                      <td className="py-2 pr-3 font-bold text-left">{row.tier}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className="py-2 px-1 text-center tabular-nums">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SMS bonus table */}
          <div className="border-line bg-surface rounded-[20px] border p-6">
            <p className="font-display text-heading text-base font-extrabold">
              {pricing.smsBonus.title}{" "}
              <span className="text-brand-blue font-semibold text-sm">({pricing.smsBonus.subtitle})</span>
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {pricing.smsBonus.rows.map((row) => (
                <div key={row.agents} className="border-line flex items-center justify-between border-b pb-2 last:border-0 last:pb-0 text-[0.75rem]">
                  <span className="text-ink-soft font-medium">{row.agents}</span>
                  <span className="text-ink font-semibold">{row.bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included */}
          <div className="border-line bg-surface rounded-[20px] border p-6">
            <div className="flex flex-col gap-4">
              {pricing.included.map((item) => {
                const Icon = icons[item.icon as keyof typeof icons];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="bg-surface-tint flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                      <Icon aria-hidden="true" className="text-brand-blue h-4 w-4" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-ink text-[0.78rem] font-bold leading-snug">{item.title}</p>
                      <p className="text-ink-soft mt-0.5 text-[0.7rem]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
