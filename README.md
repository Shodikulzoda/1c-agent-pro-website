# 1C Agent Pro — marketing website

Marketing/landing site for **1C Agent Pro**, a mobile workspace for field sales agents
that syncs orders, stock, visits and photo reports with 1C in real time.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme` in `globals.css`)
- [lucide-react](https://lucide.dev) for icons
- Prettier + `prettier-plugin-tailwindcss` for formatting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Running with Docker

No local Node install needed. Docker Desktop must be running first.

**One click (macOS):** double-click **`start.command`** in Finder — it builds and starts
the container, waits until it's ready, and opens the site in your browser. Double-click
**`stop.command`** to stop it.

Or from a terminal:

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000). Source is bind-mounted, so edits on
the host hot-reload inside the container. Stop with `docker compose down`.

For a production-like preview (real build, closest to what ships) instead:

```bash
docker compose --profile prod up prod --build
```

## Environment variables

All optional — the site runs without any of them. Put them in `.env.local` (local) or the
hosting provider's env settings (production).

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Site's real domain — resolves absolute OG/Twitter share-image URLs. Falls back to `http://localhost:3000`. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, international format, digits only (e.g. `992921234567`). Used by the floating button and demo modal. |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 site key. The demo form shows the captcha only when this is set. |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v2 secret. `/api/lead` verifies the captcha only when this is set. |
| `LEAD_WEBHOOK_URL` | Where demo leads are delivered — a `POST` with `{ name, phone, email, at }` (Telegram bot, Make/Zapier, CRM…). If empty, leads are logged to the server console. |

`NEXT_PUBLIC_*` values are read at build time; the rest are read at runtime by the API route.

## Demo request flow

The "Получить демо" / "Узнать подробнее" / "Запросить демо" buttons open a modal with a
lead form (name + phone required, email optional, reCAPTCHA when configured). Submissions
`POST` to `/api/lead`, which validates, verifies the captcha (if a secret is set), and
forwards to `LEAD_WEBHOOK_URL` (if set). A floating WhatsApp button and an in-modal
WhatsApp link deep-link to `wa.me` with a prefilled message.

## Scripts

| Command                | Purpose                    |
| ---------------------- | -------------------------- |
| `npm run dev`          | Local dev server           |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | `tsc --noEmit`             |
| `npm run format`       | Prettier — write           |
| `npm run format:check` | Prettier — check only      |

## Project structure

```
src/
  app/                 # App Router: layout, page, global styles
  components/
    ui/                # Small reusable primitives (Button, Container, ...)
    sections/          # Page sections (Hero, Pricing, Footer, ...)
  content/             # Typed copy/content objects consumed by sections
```

## Progress

See [PROGRESS.md](./PROGRESS.md) for the build checklist.
