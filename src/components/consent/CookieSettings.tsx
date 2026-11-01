"use client";

import { cookieCopy } from "@/content/chrome";
import type { Locale } from "@/content/types";
import { requestConsentSettings } from "@/lib/consent";

export function CookieSettings({ locale }: { locale: Locale }) {
  const copy = cookieCopy[locale];

  return (
    <button type="button" className="footer-link cursor-pointer text-left" onClick={requestConsentSettings}>
      {copy.settings}
    </button>
  );
}
