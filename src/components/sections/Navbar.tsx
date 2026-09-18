"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
          <span className="from-brand-blue-bright to-brand-navy flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-linear-to-br text-xs font-extrabold text-white">
            1C
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-heading text-base font-extrabold">
              {nav.brand}
            </span>
            <span className="text-ink-soft hidden text-[0.62rem] font-medium sm:block">
              {nav.tagline}
            </span>
          </span>
        </a>

        <ul className="text-ink-soft hidden items-center gap-6 text-[0.83rem] font-semibold xl:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-brand-blue transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${nav.phone.replace(/\s/g, "")}`}
            className="text-heading flex items-center gap-2 text-sm font-bold"
          >
            <Phone aria-hidden="true" className="text-brand-blue h-4 w-4" />
            <span className="flex flex-col leading-tight">
              {nav.phone}
              <span className="text-ink-soft text-[0.62rem] font-medium">
                {nav.callback}
              </span>
            </span>
          </a>
          <Button href={nav.cta.href} className="px-4.5 py-2.5 text-[0.85rem]">
            {nav.cta.label}
          </Button>
          <span className="text-ink-soft flex items-center gap-1 text-xs font-bold">
            <span className="text-brand-blue">{nav.locales[0]}</span>
            <span className="text-line">|</span>
            <span>{nav.locales[1]}</span>
          </span>
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
            <Button
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 justify-center"
            >
              {nav.cta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </nav>
  );
}
