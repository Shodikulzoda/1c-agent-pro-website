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
- [ ] **Step 5 — Interactivity & responsive polish**
      Mobile nav, scroll-reveal motion, full responsive pass (375 / 768 / 1024 / 1440).
- [ ] **Step 6 — SEO, accessibility, quality pass**
      Metadata/OG tags, semantic landmarks, contrast check, clean lint/typecheck/build.
- [ ] **Step 7 — Push & wrap-up**
      Push to GitHub private repo, final walkthrough, ask about deployment.
