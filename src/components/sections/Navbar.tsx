"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
      <Container className="flex items-center justify-between gap-6 py-3.5">
        <a
          href="#"
          className="font-display text-heading flex items-center gap-2.5 text-lg font-extrabold"
        >
          <span className="from-brand-blue-bright to-brand-navy flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-br text-xs font-extrabold text-white">
            1C
          </span>
          {nav.brand}
        </a>

        <ul className="text-ink-soft hidden items-center gap-7 text-sm font-semibold md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-brand-blue transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={nav.cta.href} className="px-4.5 py-2.5 text-[0.85rem]">
            {nav.cta.label}
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
          className="border-line text-heading flex h-11 w-11 items-center justify-center rounded-lg border md:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-line bg-surface border-t md:hidden">
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
