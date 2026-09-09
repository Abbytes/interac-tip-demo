/**
 * Client customization — edit this file (or swap for CMS/env later).
 * Demo values for NovaStream pitch page.
 */
export type CreatorConfig = {
  name: string;
  handle: string;
  tagline: string;
  avatarInitials: string;
  goalLabel: string;
  goalRaised: number;
  goalTarget: number;
  currency: "CAD";
  interacEmail: string;
  interacPhone?: string;
  /** Suggested message fans put in the e-Transfer note */
  interacMessageHint: string;
  /** Stripe Payment Link URL — leave empty to show disabled placeholder */
  stripePaymentLink: string;
};

export const creator: CreatorConfig = {
  name: "NovaStream",
  handle: "@novastream",
  tagline: "Canadian streams · tips that actually land",
  avatarInitials: "NS",
  goalLabel: "New mic",
  goalRaised: 42,
  goalTarget: 180,
  currency: "CAD",
  interacEmail: "tips@example.ca",
  interacPhone: undefined,
  interacMessageHint: "Tip for NovaStream",
  stripePaymentLink: "",
};

export function goalPercent(c: CreatorConfig = creator): number {
  if (c.goalTarget <= 0) return 0;
  return Math.min(100, Math.round((c.goalRaised / c.goalTarget) * 100));
}

export function formatCad(amount: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}
