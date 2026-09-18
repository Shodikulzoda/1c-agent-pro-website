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
- [ ] **Step 4 — Section components**
      `Navbar`, `Hero`, `StatsStrip`, `ProcessSteps`, `FeaturesGrid`, `Industries`,
      `ManagerDashboard`, `Pricing`, `CTA`, `Footer` — composed on the home page.
- [ ] **Step 5 — Interactivity & responsive polish**
      Mobile nav, scroll-reveal motion, full responsive pass (375 / 768 / 1024 / 1440).
- [ ] **Step 6 — SEO, accessibility, quality pass**
      Metadata/OG tags, semantic landmarks, contrast check, clean lint/typecheck/build.
- [ ] **Step 7 — Push & wrap-up**
      Push to GitHub private repo, final walkthrough, ask about deployment.
