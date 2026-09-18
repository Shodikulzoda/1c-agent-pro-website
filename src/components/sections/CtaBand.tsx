import { Button } from "@/components/ui/Button";
import { cta } from "@/content/site";

export function CtaBand() {
  return (
    <section className="px-4 py-4 sm:px-6">
      <div className="from-brand-navy to-brand-blue mx-auto max-w-(--container-page) rounded-[28px] bg-linear-to-br px-7 py-13 text-center sm:px-12">
        <h2 className="font-display text-2xl font-extrabold text-balance text-white sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          {cta.description}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <Button href={cta.primary.href} variant="inverse">
            {cta.primary.label} →
          </Button>
          <Button href={cta.secondary.href} variant="inverse-outline">
            {cta.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
