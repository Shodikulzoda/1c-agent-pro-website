import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  config?: unknown;
  email?: unknown;
  recaptchaToken?: unknown;
};

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  // No secret configured yet → skip verification (keys come later).
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asString(body.name);
  const phone = asString(body.phone);
  const config = asString(body.config);
  const email = asString(body.email);
  const recaptchaToken = asString(body.recaptchaToken);

  if (name.length < 2) {
    return NextResponse.json({ error: "Укажите имя." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "Укажите корректный телефон." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Некорректный email." }, { status: 400 });
  }

  const captchaOk = await verifyRecaptcha(recaptchaToken);
  if (!captchaOk) {
    return NextResponse.json({ error: "Проверка капчи не пройдена." }, { status: 400 });
  }

  const lead = { name, phone, config, email, at: new Date().toISOString() };

  // Forward to a configured webhook (Telegram bot, Make/Zapier, CRM, …).
  // Until LEAD_WEBHOOK_URL is set, the lead is just logged server-side.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Lead webhook failed:", err);
      return NextResponse.json(
        { error: "Не удалось доставить заявку. Попробуйте позже." },
        { status: 502 },
      );
    }
  } else {
    console.info("New lead (no LEAD_WEBHOOK_URL configured):", lead);
  }

  return NextResponse.json({ ok: true });
}
