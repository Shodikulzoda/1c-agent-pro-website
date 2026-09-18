import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

/** Persistent floating WhatsApp button, bottom-right on every screen. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-105 motion-safe:animate-[fab-pop_0.4s_ease-out]"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
