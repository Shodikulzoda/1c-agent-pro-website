import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footer, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line border-t bg-white dark:bg-transparent">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="1C Agent Pro logo" width={32} height={32} className="shrink-0" />
              <span className="font-display text-heading text-base font-extrabold">
                {footer.brand}
              </span>
            </div>
            <p className="text-ink-soft text-[0.8rem] leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-ink text-[0.78rem] font-bold uppercase tracking-widest">
              Навигация
            </p>
            <ul className="flex flex-col gap-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-soft hover:text-brand-blue text-[0.82rem] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <p className="text-ink text-[0.78rem] font-bold uppercase tracking-widest">
              Контакты
            </p>
            <ul className="flex flex-col gap-2.5">
              {footer.phones.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Phone className="text-brand-blue h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="text-ink-soft hover:text-brand-blue text-[0.82rem] transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <MapPin className="text-brand-blue mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                <span className="text-ink-soft text-[0.82rem] leading-snug">
                  {footer.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-line mt-8 border-t pt-6">
          <p className="text-ink-soft text-center text-[0.75rem]">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
