"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileCode, Info, ShieldCheck } from "lucide-react";
import { downloadPage } from "@/content/site";
import { cn } from "@/lib/cn";

const { serverModule } = downloadPage;

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => number;
      reset: (id?: number) => void;
    };
  }
}

export function ServerModuleCard() {
  const [selected, setSelected] = useState(serverModule.configs[0].id);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const captchaRef = useRef<HTMLDivElement>(null);
  const captchaId = useRef<number | null>(null);
  const config = serverModule.configs.find((c) => c.id === selected)!;

  // Load reCAPTCHA script once
  useEffect(() => {
    const scriptId = "recaptcha-api";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    let cancelled = false;
    const tryRender = () => {
      if (cancelled) return;
      if (window.grecaptcha && captchaRef.current && captchaId.current === null) {
        captchaId.current = window.grecaptcha.render(captchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: () => setCaptchaSolved(true),
          "expired-callback": () => setCaptchaSolved(false),
        });
      } else if (captchaId.current === null) {
        setTimeout(tryRender, 300);
      }
    };
    tryRender();
    return () => { cancelled = true; };
  }, []);

  // Reset captcha when config changes
  useEffect(() => {
    setCaptchaSolved(false);
    if (window.grecaptcha && captchaId.current !== null) {
      window.grecaptcha.reset(captchaId.current);
    }
  }, [selected]);

  return (
    <div className="border-line bg-surface flex flex-col rounded-[22px] border overflow-hidden">
      {/* Header */}
      <div className="from-brand-blue to-brand-navy bg-linear-to-br p-6 text-white">
        <span className="bg-white/20 inline-flex rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide">
          {serverModule.eyebrow}
        </span>
        <h2 className="font-display mt-3 text-xl font-extrabold">{serverModule.title}</h2>
        <p className="mt-1 text-sm text-white/80">{serverModule.description}</p>
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2.5 text-xs text-white/90">
          <Info className="h-4 w-4 shrink-0" />
          {serverModule.requirements}
        </div>
      </div>

      <div className="flex flex-col gap-5 p-6">
        {/* Config selector */}
        <div>
          <p className="text-ink-soft mb-3 text-[0.75rem] font-semibold uppercase tracking-wide">
            Выберите конфигурацию 1С
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {serverModule.configs.map((cfg) => (
              <button
                key={cfg.id}
                type="button"
                onClick={() => setSelected(cfg.id)}
                className={cn(
                  "border rounded-xl px-3 py-2.5 text-left text-[0.78rem] font-semibold transition-all",
                  selected === cfg.id
                    ? "border-brand-blue bg-brand-blue/8 text-brand-blue shadow-sm"
                    : "border-line text-ink-soft hover:border-brand-blue/40 hover:text-ink"
                )}
              >
                {cfg.short}
              </button>
            ))}
          </div>
        </div>

        {/* Selected config details */}
        <div className="border-line bg-surface-tint rounded-xl border p-4">
          <div className="flex items-start gap-3">
            <span className="bg-surface border-line flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
              <FileCode className="text-brand-blue h-5 w-5" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-ink text-[0.85rem] font-bold leading-snug">{config.name}</p>
              <p className="text-ink-soft mt-0.5 text-[0.72rem]">
                Платформа 8.3.23 и выше · файл: <span className="font-mono">{config.fileName}</span>
              </p>
            </div>
          </div>

          {config.fileUrl ? (
            <>
              {/* Captcha gate */}
              {!captchaSolved && (
                <div className="mt-4 flex flex-col items-center gap-3">
                  <p className="flex items-center gap-1.5 text-[0.75rem] text-ink-soft font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                    Подтвердите, что вы не робот — затем скачайте файл
                  </p>
                  <div ref={captchaRef} />
                </div>
              )}
              {captchaSolved && (
                <div className="mt-4 flex flex-col gap-2">
                  <div ref={captchaRef} className="hidden" />
                  <a
                    href={config.fileUrl}
                    download
                    className="bg-brand-blue hover:bg-brand-blue/90 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-colors"
                  >
                    <Download className="h-4 w-4" strokeWidth={2.5} />
                    Скачать {config.fileName}
                  </a>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="mt-4 flex w-full flex-col items-center gap-1.5 rounded-xl border border-dashed border-gray-200 bg-gray-50 py-3.5 text-center dark:border-white/10 dark:bg-white/5">
                <p className="text-ink text-[0.8rem] font-semibold">Файл готовится к загрузке</p>
                <p className="text-ink-soft text-[0.7rem]">Будет доступен в ближайшее время</p>
              </div>
              {/* Hidden captcha div (still mounts for consistency) */}
              <div ref={captchaRef} className="hidden" />
            </>
          )}
        </div>

        {/* Install note */}
        <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 px-3.5 py-3 dark:bg-amber-400/10">
          <Info className="text-amber-500 mt-0.5 h-4 w-4 shrink-0" />
          <p className="text-amber-700 dark:text-amber-400 text-[0.75rem] leading-relaxed">
            {serverModule.installNote}
          </p>
        </div>
      </div>
    </div>
  );
}
