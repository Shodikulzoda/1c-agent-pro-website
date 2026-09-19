import { CalendarCheck, Cloud, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DemoButton } from "@/components/demo/DemoButton";
import { valueProps } from "@/content/site";

const { trial, cloud } = valueProps;

export function ValueProps() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid gap-6 md:grid-cols-2">
        {/* Trial card */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-xl">
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/8"
          />

          <div className="relative flex flex-col gap-5">
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide">
              <CalendarCheck className="h-3.5 w-3.5" />
              {trial.badge}
            </span>

            {/* Eyebrow */}
            <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-emerald-100">
              {trial.eyebrow}
            </p>

            {/* Title */}
            <h2 className="font-display text-[2.4rem] font-extrabold leading-none">
              {trial.title}
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-white/85">
              {trial.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-2.5">
              <DemoButton variant="inverse" className="w-full justify-center !text-emerald-700">
                {trial.cta}
              </DemoButton>
              <p className="flex items-center gap-1.5 text-[0.72rem] text-white/75">
                <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
                {trial.note}
              </p>
            </div>
          </div>
        </div>

        {/* Cloud card */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-blue to-brand-navy p-8 text-white shadow-xl">
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -left-4 h-36 w-36 rounded-full bg-white/8"
          />

          <div className="relative flex flex-col gap-5">
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide">
              <Cloud className="h-3.5 w-3.5" />
              {cloud.badge}
            </span>

            {/* Eyebrow */}
            <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-blue-100">
              {cloud.eyebrow}
            </p>

            {/* Title */}
            <h2 className="font-display text-[2rem] font-extrabold leading-tight">
              {cloud.title}
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-white/85">
              {cloud.description}
            </p>

            {/* Trust points */}
            <ul className="flex flex-col gap-2">
              {[
                "Нет затрат на сервер и IT",
                "Защищённое соединение с 1С",
                "Обновления и бэкапы автоматически",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.8rem] font-semibold text-white/90">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-blue-200" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
