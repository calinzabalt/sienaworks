"use client";

import { useEffect } from "react";
import { CONSENT_EVENT, readConsent } from "@/lib/consent";

const configured = new Set<string>();

function ensureGtag(id: string) {
  if (typeof window === "undefined" || configured.has(id)) return;
  configured.add(id);

  const win = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  win.dataLayer = win.dataLayer || [];
  win.gtag = function gtag(...args: unknown[]) {
    win.dataLayer?.push(args);
  };
  win.gtag("js", new Date());
  win.gtag("config", id);

  if (!document.querySelector("script[data-sw-gtag]")) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.swGtag = "true";
    document.head.appendChild(script);
  }
}

export function Analytics() {
  useEffect(() => {
    function apply() {
      const consent = readConsent();
      const ga = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      const ads = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
      if (consent.analytics && ga) ensureGtag(ga);
      if (consent.marketing && ads) ensureGtag(ads);
    }

    apply();
    window.addEventListener(CONSENT_EVENT, apply);
    return () => window.removeEventListener(CONSENT_EVENT, apply);
  }, []);

  return null;
}
