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

export function track(event: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const adsId = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
  if (!adsId || !readConsent().marketing) return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", event, params);
}
