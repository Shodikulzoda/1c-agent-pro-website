import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
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
  const email = asString(body.email);
  const message = asString(body.message);
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

  const lead = { name, phone, email, message, at: new Date().toISOString() };

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;

  if (tgToken && tgChat) {
    const lines = [
      "📋 <b>Новая заявка — 1C Agent Pro</b>",
      "",
      `👤 <b>Имя:</b> ${name}`,
      `📞 <b>Телефон:</b> ${phone}`,
      email ? `📧 <b>Email:</b> ${email}` : null,
      message ? `💬 <b>Сообщение:</b> ${message}` : null,
      "",
      `🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Dushanbe" })}`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${tgToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChat,
            text: lines,
            parse_mode: "HTML",
          }),
        },
      );
      if (!res.ok) {
        const err = await res.text();
        console.error("Telegram sendMessage failed:", err);
      }
    } catch (err) {
      console.error("Telegram fetch error:", err);
    }
  } else {
    console.info("New lead (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set):", lead);
  }

  return NextResponse.json({ ok: true });
}
