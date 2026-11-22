export const CONSENT_COOKIE = "sw_consent";
export const CONSENT_EVENT = "sw-consent";
export const CONSENT_OPEN_EVENT = "sw-consent-open";

export type Consent = {
  analytics: boolean;
  marketing: boolean;
};

export function readConsent(): Consent {
  if (typeof document === "undefined") {
    return { analytics: false, marketing: false };
  }

  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return { analytics: false, marketing: false };

  const value = decodeURIComponent(match.slice(CONSENT_COOKIE.length + 1));
  const [, analytics, marketing] = value.split(".");
  return { analytics: analytics === "1", marketing: marketing === "1" };
}

export function writeConsent(consent: Consent) {
  const value = `v1.${consent.analytics ? "1" : "0"}.${consent.marketing ? "1" : "0"}`;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=15552000; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function requestConsentSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function hasConsentChoice() {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((part) => part.startsWith(`${CONSENT_COOKIE}=`));
}

/** Consent Mode v2 signals that match the visitor's choice. */
export function consentSignals(consent: Consent) {
  const ads = consent.marketing ? "granted" : "denied";
  return {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  };
}

// NEXT_PUBLIC_* values are inlined at build time, so they must be read by their full names.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_ADS_LEAD_LABEL;
const ADS_CONTACT_LABEL = process.env.NEXT_PUBLIC_ADS_CONTACT_LABEL;

function gtagOf() {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
}

/**
 * Sends a GA4 event (analytics consent) and, when a conversion label is set,
 * a Google Ads conversion (marketing consent). Nothing is sent without consent.
 */
function send(event: string, params: Record<string, string>, adsLabel?: string) {
  const gtag = gtagOf();
  if (!gtag) return;
  const consent = readConsent();

  if (consent.analytics && GA_ID) {
    gtag("event", event, { ...params, send_to: GA_ID, transport_type: "beacon" });
  }
  if (consent.marketing && ADS_ID && adsLabel) {
    gtag("event", "conversion", { send_to: `${ADS_ID}/${adsLabel}`, transport_type: "beacon" });
  }
}

/** A form was sent successfully. */
export function trackLead(form: "contact" | "health_check") {
  send("generate_lead", { form }, ADS_LEAD_LABEL);
}

export type ContactMethod = "whatsapp" | "phone" | "email";

/** A WhatsApp, phone or email link was clicked. */
export function trackContact(method: ContactMethod) {
  send("contact_click", { method }, ADS_CONTACT_LABEL);
}

/** Maps a link to the contact method it opens, if any. */
export function contactMethodOf(href: string): ContactMethod | null {
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)\//i.test(href)) return "whatsapp";
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  return null;
}
