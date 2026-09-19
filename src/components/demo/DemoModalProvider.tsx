"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { MessageCircle, X } from "lucide-react";
import { demoForm } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

type DemoModalContextValue = { open: () => void };

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise: {
        render: (el: HTMLElement, opts: Record<string, unknown>) => number;
        getResponse: (id?: number) => string;
        reset: (id?: number) => void;
      };
    };
  }
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <DemoModalContext.Provider value={{ open }}>
      {children}
      {isOpen ? <DemoDialog onClose={close} /> : null}
    </DemoModalContext.Provider>
  );
}

function DemoDialog({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const captchaId = useRef<number | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    let cancelled = false;

    const scriptId = "recaptcha-api";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://www.google.com/recaptcha/enterprise.js?render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    const tryRender = () => {
      if (cancelled) return;
      if (window.grecaptcha?.enterprise && captchaRef.current && captchaId.current === null) {
        captchaId.current = window.grecaptcha.enterprise.render(captchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
        });
      } else if (captchaId.current === null) {
        setTimeout(tryRender, 300);
      }
    };
    tryRender();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    let recaptchaToken = "";
    if (window.grecaptcha?.enterprise) {
      recaptchaToken = window.grecaptcha.enterprise.getResponse(captchaId.current ?? undefined);
      if (!recaptchaToken) {
        setStatus("error");
        setErrorMsg("Подтвердите, что вы не робот.");
        return;
      }
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          recaptchaToken,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? demoForm.error);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : demoForm.error);
      if (RECAPTCHA_SITE_KEY && window.grecaptcha?.enterprise) {
        window.grecaptcha.enterprise.reset(captchaId.current ?? undefined);
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-brand-navy/50 absolute inset-0 backdrop-blur-sm" aria-hidden />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        className="bg-surface animate-in relative z-10 w-full max-w-md rounded-3xl p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="text-ink-soft hover:bg-surface-tint absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="bg-brand-green/15 text-brand-green mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl">
              ✓
            </span>
            <h2
              id="demo-title"
              className="font-display text-heading text-xl font-extrabold"
            >
              {demoForm.success.title}
            </h2>
            <p className="text-ink-soft mt-2 text-sm leading-relaxed">
              {demoForm.success.text}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-brand-blue mt-6 rounded-xl px-6 py-3 text-sm font-bold text-white"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2
              id="demo-title"
              className="font-display text-heading text-xl font-extrabold"
            >
              {demoForm.title}
            </h2>
            <p className="text-ink-soft mt-1.5 text-sm leading-relaxed">
              {demoForm.subtitle}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col gap-3.5"
              noValidate
            >
              <Field
                ref={firstFieldRef}
                id="demo-name"
                name="name"
                label={demoForm.fields.name.label}
                placeholder={demoForm.fields.name.placeholder}
                required
                autoComplete="name"
              />
              <Field
                id="demo-phone"
                name="phone"
                type="tel"
                label={demoForm.fields.phone.label}
                placeholder={demoForm.fields.phone.placeholder}
                required
                autoComplete="tel"
              />
              <Field
                id="demo-email"
                name="email"
                type="email"
                label={demoForm.fields.email.label}
                optional={demoForm.fields.email.optional}
                placeholder={demoForm.fields.email.placeholder}
                autoComplete="email"
              />

              <label htmlFor="demo-message" className="flex flex-col gap-1.5">
                <span className="text-ink text-[0.8rem] font-semibold">
                  {demoForm.fields.message.label}
                  <span className="text-ink-soft font-normal"> — {demoForm.fields.message.optional}</span>
                </span>
                <textarea
                  id="demo-message"
                  name="message"
                  rows={3}
                  placeholder={demoForm.fields.message.placeholder}
                  className="border-line bg-surface text-ink focus:border-brand-blue focus:ring-brand-blue/20 resize-none rounded-xl border px-3.5 py-3 text-sm outline-none focus:ring-4"
                />
              </label>

              <div ref={captchaRef} className="mt-1" />

              {status === "error" ? (
                <p className="text-sm font-semibold text-red-600" role="alert">
                  {errorMsg}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-brand-yellow text-brand-navy mt-1 rounded-xl px-6 py-3.5 text-sm font-bold shadow-lg transition-[filter] hover:brightness-105 disabled:opacity-60"
              >
                {status === "submitting" ? demoForm.submitting : demoForm.submit}
              </button>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366] px-6 py-3 text-sm font-bold text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                {demoForm.whatsapp}
              </a>

              <p className="text-ink-soft mt-1 text-center text-[0.7rem] leading-relaxed">
                {demoForm.consent}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  optional,
  autoComplete,
  ref,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  optional?: string;
  autoComplete?: string;
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-ink text-[0.8rem] font-semibold">
        {label}
        {required ? <span className="text-red-500"> *</span> : null}
        {optional ? (
          <span className="text-ink-soft font-normal"> — {optional}</span>
        ) : null}
      </span>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="border-line bg-surface text-ink focus:border-brand-blue focus:ring-brand-blue/20 rounded-xl border px-3.5 py-3 text-sm outline-none focus:ring-4"
      />
    </label>
  );
}
