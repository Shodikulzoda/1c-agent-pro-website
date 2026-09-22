import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { advantages } from "@/content/site";

export function Advantages() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="flex flex-col gap-11">
        <div id="advantages" className="relative scroll-mt-20">
          <SectionHeading
            eyebrow={advantages.eyebrow}
            title={advantages.title}
            description={advantages.description}
          />
          <p className="script absolute -top-1 right-0 hidden max-w-[12rem] rotate-[-5deg] text-right text-xl lg:block">
            {advantages.script}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="border-line bg-surface hover:border-brand-blue/40 hover:shadow-brand-blue/10 group relative flex flex-col rounded-2xl border p-5 transition-[border-color,box-shadow] hover:shadow-lg"
              >
                <span className="from-brand-blue-bright/12 to-brand-blue/12 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      unoptimized
                    />
                  ) : (
                    <Icon aria-hidden="true" className="text-brand-blue h-6 w-6" strokeWidth={2} />
                  )}
                </span>
                <h3 className="text-ink text-[0.95rem] leading-snug font-bold">
                  {item.title}
                </h3>
                <p className="text-ink-soft mt-2 text-[0.82rem] leading-relaxed">
                  {item.description}
                </p>
                <span className="text-brand-blue/20 group-hover:text-brand-blue/40 font-display mt-4 text-lg font-extrabold tabular-nums transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
