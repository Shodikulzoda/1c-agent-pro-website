import { NextResponse } from "next/server";

type TgUser = { username?: string; first_name?: string };
type TgMessage = { message_id: number; chat: { id: number }; text?: string };
type CallbackQuery = { id: string; from: TgUser; message?: TgMessage; data?: string };
type Update = { callback_query?: CallbackQuery };

async function tgApi(method: string, body: object) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) console.error(`tg ${method} failed:`, await res.text());
}

function stripStatus(text: string): string {
  return text.split(/\n\n[🔄✅❌]/)[0] ?? text;
}

function actorName(from: TgUser): string {
  return from.username ? `@${from.username}` : (from.first_name ?? "Агент");
}

export async function POST(request: Request) {
  let update: Update;
  try {
    update = (await request.json()) as Update;
  } catch {
    return NextResponse.json({ ok: true });
  }

  const cq = update.callback_query;
  if (!cq) return NextResponse.json({ ok: true });

  const { id, from, message, data } = cq;
  const chatId = message?.chat.id;
  const msgId = message?.message_id;
  const actor = actorName(from);
  const base = stripStatus(message?.text ?? "");

  await tgApi("answerCallbackQuery", { callback_query_id: id });

  if (!chatId || !msgId || !data) return NextResponse.json({ ok: true });

  if (data === "claim") {
    await tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msgId,
      text: `${base}\n\n🔄 <b>В работе</b> — ${actor}`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "✅ Выполнено", callback_data: "done" },
            { text: "❌ Отклонить", callback_data: "discard" },
          ],
        ],
      },
    });
  } else if (data === "done") {
    await tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msgId,
      text: `${base}\n\n✅ <b>Выполнено</b> — ${actor}`,
      parse_mode: "HTML",
    });
  } else if (data === "discard") {
    await tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msgId,
      text: `${base}\n\n❌ <b>Отклонено</b> — ${actor}`,
      parse_mode: "HTML",
    });
  }

  return NextResponse.json({ ok: true });
}
