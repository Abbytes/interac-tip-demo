"use client";

import { useState } from "react";

export function CopyButtonClient({
  value,
  ariaLabel,
}: {
  value: string;
  ariaLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback for older browsers / insecure context
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={ariaLabel}
      className="shrink-0 rounded-lg border border-studio-border bg-studio-panel px-3 text-xs font-medium text-studio-text transition hover:border-studio-accent/40 hover:text-studio-accent"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
