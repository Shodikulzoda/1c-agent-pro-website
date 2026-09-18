import { Container } from "@/components/ui/Container";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line mt-6 border-t py-8">
      <Container className="text-ink-soft flex flex-col items-center gap-3 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
        <span className="text-heading font-display flex items-center gap-2 text-[0.95rem] font-extrabold">
          <span className="from-brand-blue-bright to-brand-navy flex h-6.5 w-6.5 items-center justify-center rounded-lg bg-linear-to-br text-[0.6rem] text-white">
            1C
          </span>
          {footer.brand}
        </span>
        <span>
          {footer.phone} · {footer.tagline}
        </span>
        <span>{footer.copyright}</span>
      </Container>
    </footer>
  );
}
