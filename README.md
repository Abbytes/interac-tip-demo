# Interac Tip Page (demo)

Mobile-first tip page for **Canadian creators** — Interac e-Transfer first, optional Stripe Payment Link second. Not a Ko-fi clone: the Canada wedge is clear Interac instructions (email/phone + message text) so fans can tip from their bank app without platform fees eating the cut.

**Demo creator:** NovaStream · goal **New mic** · Interac `tips@example.ca`

**Live route:** `/` (single-page tip experience)

Repo: designed as a pitchable $75–100 product demo for Adam STUDIO / Abbytes.

---

## What the $75 offer includes

| Deliverable | Notes |
|-------------|--------|
| Custom tip page | Creator name, handle, tagline, avatar initials (or logo swap) |
| Goal bar | `$X of $Y toward [goal]` with progress fill |
| Interac block | Email and/or phone, suggested e-Transfer message, numbered steps |
| Optional Stripe button | Your Payment Link URL wired in (or left as placeholder) |
| Dark studio theme | Matches Adam STUDIO / creator-home aesthetic |
| Deploy help | Point domain or Vercel/Netlify preview for the client |

**Out of scope at $75 (upsells):** tip ledger / CRM, auto goal updates from bank, memberships, custom domain DNS setup beyond handoff notes, brand redesign beyond palette/copy.

Suggested pitch: **$75** one-page setup · **$100** if logo + Stripe link + deploy on their domain same day.

---

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Config-driven — no CMS required for v1

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build && npm start
```

---

## How to customize for a client

1. Edit **`lib/creator.ts`** — all client-facing copy and amounts live there:

```ts
export const creator = {
  name: "NovaStream",
  handle: "@novastream",
  tagline: "Canadian streams · tips that actually land",
  avatarInitials: "NS",
  goalLabel: "New mic",
  goalRaised: 42,
  goalTarget: 180,
  currency: "CAD",
  interacEmail: "tips@example.ca",
  interacPhone: undefined,           // or "+1 416 555 0100"
  interacMessageHint: "Tip for NovaStream",
  stripePaymentLink: "",             // e.g. "https://buy.stripe.com/..."
};
```

2. Optional: swap the initials block for an image in `app/page.tsx` (header).
3. Set `stripePaymentLink` to enable the card button; leave empty for the dashed placeholder (“Stripe Payment Link goes here”).
4. Update `app/layout.tsx` metadata title/description if needed.
5. Deploy (Vercel recommended): connect this repo → production URL → share with the creator.

### Quick checklist per client

- [ ] Name / handle / tagline
- [ ] Interac email (Autodeposit recommended)
- [ ] Suggested message text
- [ ] Goal label + raised / target CAD
- [ ] Stripe Payment Link (optional)
- [ ] Deploy + send link

---

## Why this vs Ko-fi / Buy Me a Coffee

Canadian fans already use Interac. This page makes that path obvious, keeps money peer-to-peer when they use e-Transfer, and still offers Stripe for international tips — without pretending to be a full patronage platform.
