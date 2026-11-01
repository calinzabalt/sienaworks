"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CheckField } from "@/components/ui/FormFields";
import { cookieCopy } from "@/content/chrome";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import {
  CONSENT_EVENT,
  CONSENT_OPEN_EVENT,
  hasConsentChoice,
  readConsent,
  writeConsent,
  type Consent,
} from "@/lib/consent";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_EVENT, onStoreChange);
}

export function CookieConsent({ locale }: { locale: Locale }) {
  const copy = cookieCopy[locale];
  const decided = useSyncExternalStore(subscribe, hasConsentChoice, () => true);
  const [forced, setForced] = useState(false);
  const [choice, setChoice] = useState<Consent>({ analytics: false, marketing: false });
  const visible = !decided || forced;

  useEffect(() => {
    function open() {
      setChoice(readConsent());
      setForced(true);
    }
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  function save(next: Consent) {
    writeConsent(next);
    setChoice(next);
    setForced(false);
  }

  return (
    <div className="cookie-panel" role="dialog" aria-labelledby="cookie-title">
      <p id="cookie-title" className="font-semibold">
        {copy.title}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{copy.body}</p>
      <a
        href={pathFor("cookies", locale)}
        className="mt-2 inline-block text-sm text-accent-hover underline underline-offset-4"
      >
        {copy.policy}
      </a>
      <fieldset className="mt-4 grid gap-3">
        <legend className="sr-only">{copy.settings}</legend>
        <CheckField checked disabled>
          <span className="font-medium">{copy.essential}</span>
          <span className="mt-0.5 block text-muted">{copy.essentialHint}</span>
        </CheckField>
        <CheckField
          checked={choice.analytics}
          onChange={(event) =>
            setChoice((current) => ({ ...current, analytics: event.target.checked }))
          }
        >
          <span className="font-medium">{copy.analytics}</span>
          <span className="mt-0.5 block text-muted">{copy.analyticsHint}</span>
        </CheckField>
        <CheckField
          checked={choice.marketing}
          onChange={(event) =>
            setChoice((current) => ({ ...current, marketing: event.target.checked }))
          }
        >
          <span className="font-medium">{copy.marketing}</span>
          <span className="mt-0.5 block text-muted">{copy.marketingHint}</span>
        </CheckField>
      </fieldset>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <button type="button" className="btn btn-primary min-h-11 cursor-pointer rounded-[var(--radius)] border border-accent bg-accent px-4 text-sm font-semibold text-white" onClick={() => save({ analytics: true, marketing: true })}>
          {copy.accept}
        </button>
        <button type="button" className="btn min-h-11 cursor-pointer rounded-[var(--radius)] border border-line-strong bg-surface px-4 text-sm font-semibold text-ink" onClick={() => save({ analytics: false, marketing: false })}>
          {copy.reject}
        </button>
      </div>
      <button type="button" className="mt-3 cursor-pointer text-sm font-medium text-accent-hover underline underline-offset-4" onClick={() => save(choice)}>
        {copy.save}
      </button>
    </div>
  );
}
