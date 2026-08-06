# AGENTS.md

Guidance for AI agents (and humans) working on **The Second Home Hostel** website.

## 1. Project Overview

A premium, animated marketing website for **The Second Home Hostel**, a
student/professional hostel located in Gunj Bakhsh, near UVAS.

- **Goal:** drive WhatsApp bookings. Every page should make it effortless to
  reach the "Book on WhatsApp" action.
- **Audience:** university students (primarily UVAS) and young working
  professionals looking for safe, affordable, furnished shared housing.
- **Tone:** warm, trustworthy, modern — a "boutique hostel" feel, not a
  generic template. Think small premium hospitality brand, not corporate SaaS.

Key business facts (also centralized in `lib/site-config.js`):

| Fact | Value |
|---|---|
| Name | The Second Home Hostel |
| Location | Gunj Bakhsh, Near UVAS |
| Phone / WhatsApp | 0303 2518181 |
| Three Seater Room | Rs. 7,500 / month |
| Two Seater Room | Rs. 6,000 / month |
| Security Fee | Rs. 5,000 (compulsory, one-time) |

There is **no booking backend**. All booking flows resolve to opening
`https://wa.me/923032518181` (see `site.whatsappLinkWithMessage`).

## 2. Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **JavaScript / JSX only — no TypeScript.** Do not add `.ts`/`.tsx` files,
  `tsconfig.json`, or `@types/*` packages. Path aliases are configured via
  `jsconfig.json` (`@/*` → project root).
- **Tailwind CSS v4** — configured entirely in `app/globals.css` via
  `@theme inline`, no `tailwind.config.js`.
- **Framer Motion** for all animation/reveal behavior.
- **lucide-react** for icons.
- No backend, no database, no CMS. Content lives in `lib/site-config.js`.

## 3. Folder Structure

```
app/
  layout.jsx              Root layout: fonts, metadata, Navbar/Footer/FAB
  globals.css              Tailwind v4 theme tokens + custom utilities
  page.jsx                 Home
  about/page.jsx
  rooms/page.jsx
  facilities/page.jsx
  contact/page.jsx
  privacy-policy/page.jsx
  not-found.jsx             Custom 404
components/
  navbar.jsx                Sticky glass navbar (client component)
  footer.jsx
  whatsapp-fab.jsx          Floating WhatsApp button (client component)
  ambient-background.jsx    Reusable animated gradient-blob background
  reveal.jsx                Reveal / RevealGroup / RevealItem (framer-motion scroll animations)
  ui/
    button.jsx               Variant-based button primitive
    card.jsx                  Glass/border card primitive
lib/
  site-config.js             Single source of truth for hostel content
  utils.js                    `cn()` class-merge helper
public/
  icon.svg, apple-icon.png, ... favicons
  robots.txt
```

## 4. Coding Conventions

- **JSX only.** No TypeScript syntax, no `.ts`/`.tsx` extensions.
- Functional components only, no class components.
- Prefer **server components** by default. Only add `"use client"` when a
  component needs state, effects, or event handlers (e.g. `navbar.jsx`,
  `whatsapp-fab.jsx`, `reveal.jsx`).
- All hostel facts (price, phone, address, room features, facilities list)
  live in `lib/site-config.js`. **Never hardcode these values in a page.**
  Import from `@/lib/site-config` so a single edit updates the whole site.
- Use the `cn()` helper (`@/lib/utils`) instead of manual string
  concatenation for conditional classNames.
- Use the shared `Button` and `Card` primitives instead of raw `<button>` /
  `<div>` styling where they fit, to keep visual language consistent.

## 5. Component Rules

- New primitives (badges, inputs, etc.) go in `components/ui/` and should
  accept a `className` override via `cn()` so they compose predictably.
- Section-level components (hero, testimonials, etc.) live directly in the
  page file unless reused across 2+ pages — then extract to `components/`.
- Every interactive element that should open WhatsApp must use
  `site.whatsappLinkWithMessage` (pre-filled message) rather than the bare
  number, and always include `target="_blank" rel="noopener noreferrer"`.

## 6. Animation Guidelines

- Use `<Reveal>` for single-element scroll-triggered fade/slide-in.
- Use `<RevealGroup>` + `<RevealItem>` for staggered grids/lists (facility
  cards, highlight chips, etc.) instead of manually staggering `delay`
  props on individual `<Reveal>`s.
- Keep durations in the **0.5s–0.8s** range with the easing curve
  `[0.16, 1, 0.3, 1]` (already the default in `reveal.jsx`) for a premium,
  non-bouncy feel. Avoid default Framer Motion springs for entrance
  animations — they read as "template-y."
- Hover states: prefer `hover:-translate-y-1` / `hover:-translate-y-1.5`
  combined with `hover:border-primary/40` for cards, and `active:scale-[0.97]`
  for buttons (already baked into the `Button` primitive).
- Don't over-animate: hero + first section on a page can use richer motion;
  repeated grid sections should stay subtle so the page doesn't feel busy.

## 7. Styling Guidelines

- All design tokens (colors, radius) are CSS variables defined in
  `app/globals.css` under `:root` and mapped in `@theme inline`. To change
  the palette, edit the `oklch(...)` values in `:root` — do not
  hardcode hex/rgb colors in components.
- Current theme: dark, warm charcoal background with a gold/amber `primary`
  accent (`text-gradient-gold` utility for hero headlines), plus
  `.glass` / `.glass-strong` utilities for glassmorphism surfaces.
- WhatsApp CTAs use the fixed WhatsApp brand green (`#25D366`) intentionally
  — this is the one place brand color is hardcoded, since it needs to stay
  recognizable as WhatsApp.
- Use `font-display` (serif, headings) vs `font-sans` (body) consistently —
  see any existing page for the pattern (`h1`/`h2` get `font-display`).
- Fonts currently use safe system font stacks (no `next/font/google`) so the
  project builds in network-restricted environments. If deploying somewhere
  with reliable internet access and you want custom webfonts, you can
  reintroduce `next/font/google` in `app/layout.jsx` and wire the returned
  `variable` into the `--font-sans` / `--font-display` tokens in
  `globals.css`.

## 8. Responsive Rules

- Mobile-first Tailwind breakpoints: base styles for mobile, `sm:`/`md:`/`lg:`
  for larger screens.
- Navbar collapses to a hamburger + animated sheet below `md:`.
- Grids typically go `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3/4`.
- Always test new sections at 375px (small phone), 768px (tablet), and
  1440px (desktop) widths.

## 9. Running the Project

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint      # eslint
```

Requires Node 18.18+ (Next.js 16 requirement).

## 10. Deployment

- Designed to deploy to **Vercel** with zero config (it's a standard
  Next.js App Router project). Push to a Git repo and import into Vercel,
  or run `vercel` from the CLI.
- `next.config.mjs` sets `images.unoptimized: true` since there is no
  external image CDN configured yet — if you add a real image host, remove
  this and configure `images.domains` / `images.remotePatterns` instead.
- No environment variables are required for the current feature set.

## 11. Future Feature Suggestions

- Real photography: replace icon/gradient-driven visuals with actual
  photos of the rooms, common areas, and the building exterior once
  available (drop into `public/images/` and reference from pages).
- A lightweight room-availability indicator (e.g. "2 beds left") if the
  hostel wants to convey urgency — should stay editable via
  `lib/site-config.js`, no backend needed for a simple manual flag.
- A testimonials/reviews section once residents can be quoted.
- A simple Google Maps embed on the Contact page once ready to share exact
  coordinates.
- If the site is bilingual (English/Urdu) is desired in future, plan for it
  via `app/[locale]/` routing rather than in-page toggles.

## 12. Best Practices for Future AI Agents

1. **Read this file first.** Then check `lib/site-config.js` before touching
   any page — it's almost certainly the right place for a content change.
2. **Never reintroduce TypeScript.** Keep everything `.jsx`/`.js`.
3. **Keep WhatsApp as the single call-to-action.** Do not add a booking
   form, backend, or database unless explicitly asked — this is a
   deliberate product decision (see `IMPORTANT NOTICE` requirements this
   site was built from: no booking backend).
4. Run `npm run build` after any non-trivial change to catch build errors
   before handing work back.
5. Preserve the premium/glassmorphism visual language — avoid flattening
   sections into plain white cards or removing the ambient background
   blobs, gradient text, and reveal animations without a good reason.
6. When adding a new page, follow the existing pattern: `AmbientBackground`
   in the hero section, `Reveal`/`RevealGroup` for content, `font-display`
   for headings, and pull all facts from `site-config.js`.
