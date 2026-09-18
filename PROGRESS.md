# Build progress

Tracking checklist for the 1C Agent Pro marketing site rebuild (Next.js + TypeScript +
Tailwind). One checkbox per step in the approved plan; each lands as its own commit.

- [x] **Step 1 — Repo + project scaffold**
      Next.js (App Router, TS, Tailwind v4, ESLint) + Prettier + lucide-react. README and
      this checklist added.
- [x] **Step 2 — Design system / theme foundation**
      Color/type tokens (Tailwind v4 `@theme`), fonts (Manrope + Inter via `next/font`),
      automatic dark mode, base UI primitives (`Button`, `Container`, `SectionHeading`,
      `Eyebrow`). Build/lint/typecheck verified clean.
- [x] **Step 3 — Content layer**
      Typed copy module (`src/content/site.ts`) for nav, hero, stats, process steps,
      features, industries, dashboard, pricing, CTA, footer.
- [x] **Step 4 — Section components**
      `Navbar` (with accessible mobile menu), `Hero`, `StatsStrip`, `ProcessSteps`,
      `FeaturesGrid`, `Industries`, `ManagerDashboard`, `Pricing`, `CtaBand`, `Footer` —
      composed on the home page. Fixed a dark-mode contrast bug where the brand-navy
      token flipped for headings but was also used as a solid background fill (stats
      band, dashboard card) — split into a fixed `--color-navy` (fills) and a flipping
      `--color-heading` (text) token.
- [x] **Step 5 — Interactivity & responsive polish**
      Mobile nav (already accessible from step 4). One orchestrated, CSS-only hero
      entrance animation (staggered, `prefers-reduced-motion`-gated, no
      IntersectionObserver so nothing can get stuck invisible without JS). Button hover
      lift guarded with `motion-safe:`. Audited grid breakpoints across every section —
      all collapse sensibly from 2/6 columns down to 1 on mobile.
- [x] **Step 6 — SEO, accessibility, quality pass**
      OpenGraph/Twitter metadata, generated favicon/apple-icon/OG share image (`next/og`),
      `metadataBase` via `NEXT_PUBLIC_SITE_URL`. All decorative icons marked
      `aria-hidden`. Semantic landmarks already in place (`nav`/`header`/`main`/`footer`,
      one `h1`, `h2` per section). Clean lint/typecheck/build.
- [ ] **Step 7 — Push & wrap-up**
      Push to GitHub private repo, final walkthrough, ask about deployment.
