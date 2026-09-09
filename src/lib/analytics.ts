export const ANALYTICS_CONSENT_KEY = "siena-analytics-consent";

export type AnalyticsConsent = "granted" | "denied";

export function isGaMeasurementId(value: string) {
  return /^G-[A-Z0-9]+$/i.test(value);
}

export function getGaMeasurementId() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
  return isGaMeasurementId(id) ? id : undefined;
}
