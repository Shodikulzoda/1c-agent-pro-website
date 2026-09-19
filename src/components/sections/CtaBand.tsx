import { MessageCircle } from "lucide-react";
import { DemoButton } from "@/components/demo/DemoButton";
import { cta } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function CtaBand() {
  return (
    <section className="px-4 py-4 sm:px-6">
      <div id="cta" className="from-brand-navy to-brand-blue relative mx-auto max-w-(--container-page) scroll-mt-20 overflow-hidden rounded-[28px] bg-linear-to-br px-7 py-13 text-center sm:px-12">
        <h2 className="font-display text-2xl font-extrabold text-balance text-white sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          {cta.description}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <DemoButton variant="inverse">{cta.primary.label} →</DemoButton>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5.5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
