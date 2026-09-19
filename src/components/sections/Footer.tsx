import { Container } from "@/components/ui/Container";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line mt-6 border-t py-8">
      <Container className="text-ink-soft flex flex-col items-center gap-3 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
        <span className="text-heading font-display text-[0.95rem] font-extrabold">
          {footer.brand}
        </span>
        <span>
          {footer.phone}{footer.tagline ? ` · ${footer.tagline}` : ""}
        </span>
        <span>{footer.copyright}</span>
      </Container>
    </footer>
  );
}
