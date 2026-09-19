import { Check, Smartphone } from "lucide-react";
import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PlayMarketBadge } from "@/components/ui/PlayMarketBadge";
import { ServerModuleCard } from "@/components/download/ServerModuleCard";
import { DemoModalProvider } from "@/components/demo/DemoModalProvider";
import { WhatsAppFab } from "@/components/demo/WhatsAppFab";
import { downloadPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Скачать 1C Agent Pro",
  description:
    "Загрузите мобильное приложение 1C Agent Pro для Android и серверный модуль для вашей конфигурации 1С.",
};

const { clientApp, serverModule } = downloadPage;

export default function DownloadPage() {
  return (
    <DemoModalProvider>
      <Navbar />
      <main className="flex-1">
        {/* Page hero */}
        <section className="from-sky-1 via-surface to-bg bg-linear-to-b pb-16 pt-14 sm:pt-20">
          <Container className="flex flex-col items-center gap-3 text-center">
            <span className="border-brand-blue/20 bg-brand-blue/6 text-brand-blue rounded-full border px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-wide">
              Загрузить
            </span>
            <h1 className="font-display text-heading text-[2rem] font-extrabold text-balance sm:text-4xl">
              {downloadPage.title}
            </h1>
            <p className="text-ink-soft max-w-xl text-base leading-relaxed">
              {downloadPage.subtitle}
            </p>
          </Container>
        </section>

        {/* Download cards */}
        <section className="py-12 sm:py-16">
          <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Client app card */}
            <div className="border-line bg-surface flex flex-col rounded-[22px] border overflow-hidden">
              <div className="from-brand-green/80 to-brand-green bg-linear-to-br p-6 text-white">
                <span className="bg-white/20 inline-flex rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide">
                  {clientApp.eyebrow}
                </span>
                <h2 className="font-display mt-3 text-xl font-extrabold">{clientApp.title}</h2>
                <p className="mt-1 text-sm text-white/85">{clientApp.description}</p>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/15 px-3.5 py-2.5 text-xs text-white/90">
                  <Smartphone className="h-4 w-4 shrink-0" />
                  {clientApp.requirements}
                </div>
              </div>

              <div className="flex flex-col gap-5 p-6">
                {/* Download section */}
                <div className="border-line bg-surface-tint rounded-xl border p-5">
                  <p className="text-ink-soft mb-4 text-[0.75rem] font-semibold uppercase tracking-wide">
                    Способы установки
                  </p>
                  <PlayMarketBadge />
                </div>

                {/* Steps */}
                <div>
                  <p className="text-ink-soft mb-3 text-[0.75rem] font-semibold uppercase tracking-wide">
                    Как начать
                  </p>
                  <ol className="flex flex-col gap-3">
                    {clientApp.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="bg-brand-green/12 text-brand-green flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-extrabold">
                          {i + 1}
                        </span>
                        <span className="text-ink leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-3.5 py-3 dark:bg-green-400/10">
                  <Check className="text-brand-green h-4 w-4 shrink-0" strokeWidth={3} />
                  <p className="text-green-700 dark:text-green-400 text-[0.75rem] font-semibold">
                    Бесплатная установка. Работает онлайн и офлайн.
                  </p>
                </div>
              </div>
            </div>

            {/* Server module card */}
            <ServerModuleCard />
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </DemoModalProvider>
  );
}
