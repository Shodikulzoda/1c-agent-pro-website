import { whatsappPrefill } from "@/content/site";

// International format, digits only. Overridable at build time via
// NEXT_PUBLIC_WHATSAPP_NUMBER. Lives here (not in site.ts) so the literal
// `process.env.NEXT_PUBLIC_*` reference isn't shadowed by site.ts's `process`
// export and stays statically inlined for the browser bundle.
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "992921234567";

/** Builds a wa.me deep link with the prefilled enquiry message. */
export function whatsappUrl(message: string = whatsappPrefill): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
