import { NextResponse } from "next/server";

type TgUser = { username?: string; first_name?: string };
type TgMessage = { message_id: number; chat: { id: number }; text?: string };
type CallbackQuery = { id: string; from: TgUser; message?: TgMessage; data?: string };
type Update = { callback_query?: CallbackQuery };

// Fixed separator — splits lead body from status line; must match lead/route.ts
const SEP = "\n\n━━━━━━━━━━\n";

function bodyOf(text: string): string {
  const idx = text.indexOf(SEP);
  return idx >= 0 ? text.slice(0, idx) : text;
}

function actor(from: TgUser): string {
  return from.username ? `@${from.username}` : (from.first_name ?? "Агент");
}

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

const CLAIM_BUTTONS = {
  inline_keyboard: [
    [
      { text: "✅ Взять в работу", callback_data: "claim" },
      { text: "❌ Отклонить", callback_data: "discard" },
    ],
  ],
};

const PROGRESS_BUTTONS = {
  inline_keyboard: [
    [
      { text: "✅ Выполнено", callback_data: "done" },
      { text: "↩️ Отклонить", callback_data: "discard" },
    ],
  ],
};

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
  const name = actor(from);
  const body = bodyOf(message?.text ?? "");

  await tgApi("answerCallbackQuery", { callback_query_id: id });

  if (!chatId || !msgId || !data) return NextResponse.json({ ok: true });

  if (data === "claim") {
    await tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msgId,
      text: `${body}${SEP}🔄 В работе — ${name}`,
      parse_mode: "HTML",
      reply_markup: PROGRESS_BUTTONS,
    });
  } else if (data === "done") {
    await tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msgId,
      text: `${body}${SEP}✅ Выполнено — ${name}`,
      parse_mode: "HTML",
      // no buttons — final state
    });
  } else if (data === "discard") {
    await tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msgId,
      text: `${body}${SEP}🔄 Свободно (отклонил ${name})`,
      parse_mode: "HTML",
      reply_markup: CLAIM_BUTTONS, // another agent can claim
    });
  }

  return NextResponse.json({ ok: true });
}
