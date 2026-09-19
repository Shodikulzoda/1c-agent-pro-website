"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DemoButton } from "@/components/demo/DemoButton";
import { nav } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      className="border-line/80 bg-surface/85 sticky z-20 border-b backdrop-blur-md"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <Container className="flex items-center justify-between gap-5 py-3">
        <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label={nav.brand}>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-heading text-base font-extrabold">
              {nav.brand}
            </span>
            <span className="text-ink-soft hidden text-[0.62rem] font-medium leading-tight sm:block">
              Мобильное рабочее место<br />торгового представителя
            </span>
          </span>
        </a>

        <ul className="text-ink-soft hidden items-center gap-5 text-[0.82rem] font-semibold xl:flex 2xl:gap-7">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-brand-blue whitespace-nowrap transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3.5 lg:flex">
          <a
            href={`tel:${nav.phone.replace(/\s/g, "")}`}
            className="text-heading flex items-center gap-2 text-sm font-bold"
          >
            <Phone aria-hidden="true" className="text-brand-blue h-4 w-4 shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className="whitespace-nowrap">{nav.phone}</span>
              <span className="text-ink-soft text-[0.62rem] font-medium">
                {nav.callback}
              </span>
            </span>
          </a>
<DemoButton className="px-4.5 py-2.5 text-[0.85rem] whitespace-nowrap">
            {nav.cta.label}
          </DemoButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
          className="border-line text-heading flex h-11 w-11 items-center justify-center rounded-lg border xl:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-line bg-surface border-t xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink hover:bg-surface-tint rounded-lg px-3 py-3 text-sm font-semibold"
              >
                {link.label}
              </a>
            ))}
<a
              href={`tel:${nav.phone.replace(/\s/g, "")}`}
              className="text-heading flex items-center gap-2 px-3 py-3 text-sm font-bold"
            >
              <Phone aria-hidden="true" className="text-brand-blue h-4 w-4" />
              {nav.phone}
            </a>
            <DemoButton onClick={() => setOpen(false)} className="mt-2 justify-center">
              {nav.cta.label}
            </DemoButton>
          </Container>
        </div>
      ) : null}
    </nav>
  );
}
