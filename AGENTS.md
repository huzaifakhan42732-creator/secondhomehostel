# AGENTS.md

Guidance for AI agents (and humans) working on **The Second Home Boys Hostel** website.

## 1. Project Overview

A premium, animated marketing website for **The Second Home Boys Hostel**, a
student/professional boys hostel located in Gunj Baksh Town, Lahore, near UVAS, GCU & UOE.

- **Goal:** drive WhatsApp & Phone bookings. Every page should make it effortless to
  reach the "Book on WhatsApp" or "Call" action.
- **Audience:** university students (primarily UVAS, GCU, UOE Lahore) and young working
  professionals looking for safe, affordable, furnished shared housing.
- **Tone:** warm, trustworthy, modern — a "boutique hostel" feel, not a
  generic template.

Key business facts (also centralized in `lib/site-config.js`):

| Fact | Value |
|---|---|
| Name | The Second Home Boys Hostel |
| Location | 40-Rattigan Road, Gunj Baksh Town, Lahore — Near UVAS, GCU & UOE |
| Phone / WhatsApp | +923032518181 |
| Three Seater Room | Common Bathroom (Starting from Affordable Monthly Rates) |
| Two Seater Room | Attached Bathroom (Starting from Affordable Monthly Rates) |
| Security Deposit | Refundable Security Deposit (compulsory, one-time, 100% refundable) |

There is **no booking backend**. All booking flows resolve to opening
`https://wa.me/923032518181` (see `site.whatsappLinkWithMessage`) or `tel:+923032518181`.

## 2. Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **JavaScript / JSX only — no TypeScript.** Do not add `.ts`/`.tsx` files,
  `tsconfig.json`, or `@types/*` packages. Path aliases are configured via
  `jsconfig.json` (`@/*` → project root).
- **Tailwind CSS v4** — configured entirely in `app/globals.css` via
  `@theme inline`, no `tailwind.config.js`.
- **Framer Motion** for animation/reveal behavior.
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
  mobile-nav.jsx            Floating header navigation & mobile menu
  ambient-background.jsx    Reusable animated gradient-blob background
  reveal.jsx                Reveal / RevealGroup / RevealItem (framer-motion scroll animations)
  stacking-agent-cards.jsx  Room cards and policy cards
  devex-section.jsx         Hostel admission & living guide
  ui/
    button.jsx               Variant-based button primitive
    card.jsx                  Glass/border card primitive
lib/
  site-config.js             Single source of truth for hostel content
  utils.js                    `cn()` class-merge helper
```

## 4. Coding Conventions

- **JSX only.** No TypeScript syntax, no `.ts`/`.tsx` extensions.
- Functional components only, no class components.
- All hostel facts (phone, address, room features, facilities list)
  live in `lib/site-config.js`. **Never hardcode these values in a page.**
  Import from `@/lib/site-config` so a single edit updates the whole site.
- Use the `cn()` helper (`@/lib/utils`) instead of manual string
  concatenation for conditional classNames.
- Use the shared `Button` and `Card` primitives where applicable.
