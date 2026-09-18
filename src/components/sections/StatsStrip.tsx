import { Container } from "@/components/ui/Container";
import { stats } from "@/content/site";

export function StatsStrip() {
  return (
    <div className="bg-brand-navy py-7">
      <Container className="flex flex-wrap justify-between gap-x-8 gap-y-5">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-[7rem] text-center sm:text-left">
            <p className="font-display text-2xl font-extrabold text-white tabular-nums">
              {stat.value}
            </p>
            <p className="text-brand-blue-bright/90 text-xs font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
}
