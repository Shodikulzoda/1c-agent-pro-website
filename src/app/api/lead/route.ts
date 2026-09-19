import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
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

  if (name.length < 2) {
    return NextResponse.json({ error: "Укажите имя." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "Укажите корректный телефон." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Некорректный email." }, { status: 400 });
  }

  const lead = { name, phone, email, message, at: new Date().toISOString() };

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;

  if (tgToken && tgChat) {
    const bodyLines = [
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

    // SEP marks the boundary between lead body and status — never changes
    const SEP = "\n\n━━━━━━━━━━";
    const text = `${bodyLines}${SEP}\n🆕 Ожидает обработки`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${tgToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChat,
            text,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "✅ Взять в работу", callback_data: "claim" },
                  { text: "❌ Отклонить", callback_data: "discard" },
                ],
              ],
            },
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
