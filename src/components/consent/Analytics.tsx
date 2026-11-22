"use client";

import { useEffect } from "react";
import { CONSENT_EVENT, consentSignals, contactMethodOf, readConsent, trackContact } from "@/lib/consent";

type Gtag = (...args: unknown[]) => void;

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
const configured = new Set<string>();

/**
 * Loads gtag.js once, the first time the visitor accepts analytics or marketing
 * (Consent Mode v2, basic: nothing loads before a choice). Every consent signal
 * starts as denied and is then updated to the visitor's choice.
 */
function gtagFor(firstId: string): Gtag {
  const win = window as Window & { dataLayer?: unknown[]; gtag?: Gtag };
  if (win.gtag) return win.gtag;

  win.dataLayer = win.dataLayer || [];
  const gtag: Gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array copy.
    // eslint-disable-next-line prefer-rest-params
    win.dataLayer?.push(arguments);
  };
  win.gtag = gtag;
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(firstId)}`;
  document.head.appendChild(script);
  return gtag;
}

export function Analytics() {
  useEffect(() => {
    function apply() {
      const consent = readConsent();
      const ga = consent.analytics ? GA_ID : undefined;
      const ads = consent.marketing ? ADS_ID : undefined;
      const existing = (window as Window & { gtag?: Gtag }).gtag;

      if (!ga && !ads) {
        // Consent withdrawn after the tag loaded: stop storage from here on.
        existing?.("consent", "update", consentSignals(consent));
        return;
      }

      const gtag = gtagFor((ga ?? ads) as string);
      gtag("consent", "update", consentSignals(consent));
      for (const id of [ga, ads]) {
        if (id && !configured.has(id)) {
          configured.add(id);
          gtag("config", id);
        }
      }
    }

    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const method = link ? contactMethodOf(link.getAttribute("href") ?? "") : null;
      if (method) trackContact(method);
    }

    apply();
    window.addEventListener(CONSENT_EVENT, apply);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener(CONSENT_EVENT, apply);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
