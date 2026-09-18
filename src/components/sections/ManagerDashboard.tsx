import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { managerControl } from "@/content/site";

const statusColor = {
  online: "bg-brand-green",
  busy: "bg-brand-amber",
} as const;

export function ManagerDashboard() {
  const { dashboard } = managerControl;
  return (
    <section className="bg-surface-tint py-18 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow={managerControl.eyebrow}
            title={managerControl.title}
            description={managerControl.description}
          />

          <ul className="mt-6.5 flex flex-col gap-5">
            {managerControl.points.map((point) => {
              const Icon = icons[point.icon];
              return (
                <li key={point.title} className="flex items-start gap-3.5">
                  <span className="bg-surface text-brand-blue border-line flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border">
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      strokeWidth={2}
                    />
                  </span>
                  <div>
                    <p className="text-ink text-[0.95rem] font-bold">{point.title}</p>
                    <p className="text-ink-soft text-[0.83rem]">{point.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-brand-navy shadow-brand-navy/25 rounded-[22px] p-6 shadow-xl">
          <div className="flex items-center justify-between text-xs text-white/70">
            <span>{dashboard.title}</span>
            <span className="tabular-nums">{dashboard.date}</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {dashboard.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl bg-white/8 px-3 py-3">
                <p className="font-display text-lg font-extrabold text-white tabular-nums">
                  {metric.value}
                </p>
                <p className="text-[0.65rem] text-white/70">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 divide-y divide-white/10 rounded-xl bg-white/6 px-3.5">
            {dashboard.agents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between py-2.5 text-sm text-white"
              >
                <span className="flex items-center gap-2 font-medium">
                  <span className={`h-2 w-2 rounded-full ${statusColor[agent.status]}`} />
                  {agent.name}
                </span>
                <span className="text-white/70">{agent.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
