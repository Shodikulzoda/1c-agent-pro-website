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

No local Node install needed.

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000). Source is bind-mounted, so edits on
the host hot-reload inside the container. Stop with `docker compose down`.

For a production-like preview (real build, closest to what ships) instead:

```bash
docker compose --profile prod up prod --build
```

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the site's real domain (e.g. `https://1c-agent-pro.example`)
in the hosting provider's environment variables — it resolves the absolute URLs for the
Open Graph/Twitter share image. It falls back to `http://localhost:3000` in local dev.

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
