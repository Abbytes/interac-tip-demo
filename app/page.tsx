import {
  creator,
  formatCad,
  goalPercent,
} from "@/lib/creator";
import { CopyButtonClient } from "./copy-button";

export default function TipPage() {
  const pct = goalPercent();
  const hasStripe = Boolean(creator.stripePaymentLink);
  const hasInterac = Boolean(creator.interacEmail);

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-studio-border bg-studio-panel text-2xl font-semibold tracking-tight text-studio-accent shadow-[0_0_40px_-12px_rgba(232,168,124,0.45)]"
          aria-hidden
        >
          {creator.avatarInitials}
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-studio-muted">
          Tip page · Canada
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {creator.name}
        </h1>
        <p className="mt-1 text-sm text-studio-muted">{creator.handle}</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-studio-muted">
          {creator.tagline}
        </p>
      </header>

      <section
        className="mb-6 rounded-2xl border border-studio-border bg-studio-panel/90 p-5 shadow-lg shadow-black/20"
        aria-labelledby="goal-heading"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h2 id="goal-heading" className="text-sm font-medium text-studio-text">
            Soft goal ·{" "}
            <span className="text-studio-accent">{creator.goalLabel}</span>
          </h2>
          <span className="text-xs text-studio-muted">{pct}%</span>
        </div>
        <p className="mt-2 text-lg font-semibold tracking-tight">
          {formatCad(creator.goalRaised)}{" "}
          <span className="text-sm font-normal text-studio-muted">
            of {formatCad(creator.goalTarget)}
          </span>
        </p>
        <p className="mt-1 text-xs text-studio-muted">
          Not a tip cap — fans can send any amount.
        </p>
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-studio-border"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Goal progress ${pct} percent`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-studio-accent to-studio-accent2 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </section>

      <section
        className="mb-5 rounded-2xl border border-studio-accent/25 bg-studio-panel p-5 shadow-lg shadow-black/25"
        aria-labelledby="interac-heading"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-studio-accent/15 text-sm font-bold text-studio-accent">
            $
          </span>
          <div>
            <h2
              id="interac-heading"
              className="text-base font-semibold tracking-tight"
            >
              Interac e-Transfer
            </h2>
            <p className="text-xs text-studio-muted">
              Canada · address stays private on this page
            </p>
          </div>
        </div>

        <ol className="space-y-4 text-sm">
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-studio-border bg-studio-bg text-xs font-medium text-studio-muted">
              1
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-studio-text">
                Copy the Interac tip address
              </p>
              {hasInterac ? (
                <div className="mt-2 flex items-stretch gap-2">
                  <div className="flex min-w-0 flex-1 items-center rounded-lg border border-studio-border bg-studio-bg px-3 py-2.5 text-sm text-studio-muted">
                    Hidden · tap Copy → paste in your bank app
                  </div>
                  <CopyButtonClient
                    value={creator.interacEmail}
                    ariaLabel="Copy Interac tip address"
                  />
                </div>
              ) : (
                <p className="mt-2 text-xs text-studio-muted">
                  Set INTERAC_TIP_EMAIL in .env.local to enable tips.
                </p>
              )}
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-studio-border bg-studio-bg text-xs font-medium text-studio-muted">
              2
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-studio-text">
                Put this in the message
              </p>
              <CopyRow
                value={creator.interacMessageHint}
                label="Suggested message"
              />
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-studio-border bg-studio-bg text-xs font-medium text-studio-muted">
              3
            </span>
            <div>
              <p className="font-medium text-studio-text">Any amount helps</p>
              <p className="mt-1 text-xs leading-relaxed text-studio-muted">
                Open your bank app → Interac e-Transfer → paste address → send.
                No tip cap.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="mb-8 rounded-2xl border border-studio-border bg-studio-panel/60 p-5"
        aria-labelledby="card-heading"
      >
        <h2
          id="card-heading"
          className="text-sm font-semibold tracking-tight text-studio-text"
        >
          Card / international
        </h2>
        <p className="mt-1 text-xs text-studio-muted">
          Optional Stripe Payment Link for fans outside Canada.
        </p>
        {hasStripe ? (
          <a
            href={creator.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-studio-text px-4 py-3 text-sm font-semibold text-studio-bg transition hover:bg-white"
          >
            Tip with card
          </a>
        ) : (
          <div className="mt-4">
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center rounded-xl border border-dashed border-studio-border bg-studio-bg/50 px-4 py-3 text-sm font-medium text-studio-muted"
            >
              Tip with card
            </button>
            <p className="mt-2 text-center text-[11px] text-studio-muted">
              Stripe Payment Link goes here when ready
            </p>
          </div>
        )}
      </section>

      <footer className="mt-auto border-t border-studio-border/60 pt-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-studio-muted">
          Ab Creative World · private tip page
        </p>
      </footer>
    </div>
  );
}

function CopyRow({ value, label }: { value: string; label: string }) {
  return (
    <div className="mt-2 flex items-stretch gap-2">
      <code
        className="block min-w-0 flex-1 truncate rounded-lg border border-studio-border bg-studio-bg px-3 py-2.5 font-mono text-sm text-studio-accent"
        title={value}
      >
        {value}
      </code>
      <CopyButtonClient value={value} ariaLabel={`Copy ${label}`} />
    </div>
  );
}
