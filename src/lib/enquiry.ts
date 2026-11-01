import { normalizeHttpUrl, validatePublicUrl } from "./url-safety";

export const enquiryServices = [
  "performance",
  "fix",
  "maintenance",
  "development",
  "custom",
  "health",
  "audit",
  "woocommerce",
  "unsure",
] as const;

export type EnquiryService = (typeof enquiryServices)[number];

export const websiteTypes = ["wordpress", "woocommerce", "other", "unsure"] as const;

export type WebsiteType = (typeof websiteTypes)[number];

export type ParseError =
  | "invalid"
  | "name"
  | "email"
  | "website"
  | "service"
  | "message"
  | "consent"
  | "ownership"
  | "url"
  | "blocked_url";

export type ContactEnquiry = {
  name: string;
  email: string;
  website: string;
  service: EnquiryService;
  message: string;
};

export type HealthEnquiry = {
  url: string;
  email: string;
  websiteType: WebsiteType | "";
  ownership: true;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEnquiryService(value: string): value is EnquiryService {
  return (enquiryServices as readonly string[]).includes(value);
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asRecord(input: unknown) {
  if (!input || typeof input !== "object") return null;
  return input as Record<string, unknown>;
}

function isConsent(value: unknown) {
  return value === true || value === "on" || value === "true";
}

export function parseContact(
  input: unknown,
): { ok: true; data: ContactEnquiry } | { ok: false; error: ParseError } {
  const body = asRecord(input);
  if (!body) return { ok: false, error: "invalid" };
  if (asString(body.company_website)) return { ok: false, error: "invalid" };

  const name = asString(body.name);
  const email = asString(body.email);
  const website = asString(body.website);
  const service = asString(body.service);
  const message = asString(body.message);

  if (!name || name.length > 120) return { ok: false, error: "name" };
  if (!email || email.length > 200 || !emailPattern.test(email)) {
    return { ok: false, error: "email" };
  }
  if (website) {
    const normalised = normalizeHttpUrl(website);
    if (!normalised) return { ok: false, error: "website" };
  }
  if (!isEnquiryService(service)) return { ok: false, error: "service" };
  if (!message || message.length > 5000) return { ok: false, error: "message" };
  if (!isConsent(body.consent)) return { ok: false, error: "consent" };

  return {
    ok: true,
    data: {
      name,
      email,
      website: website ? (normalizeHttpUrl(website)?.toString() ?? "") : "",
      service,
      message,
    },
  };
}

export function parseHealthCheck(
  input: unknown,
): { ok: true; data: HealthEnquiry } | { ok: false; error: ParseError } {
  const body = asRecord(input);
  if (!body) return { ok: false, error: "invalid" };
  if (asString(body.company_website)) return { ok: false, error: "invalid" };

  const email = asString(body.email);
  const websiteType = asString(body.websiteType);

  if (!email || email.length > 200 || !emailPattern.test(email)) {
    return { ok: false, error: "email" };
  }

  const url = validatePublicUrl(asString(body.url));
  if (!url.ok) return url;

  if (
    websiteType &&
    !(websiteTypes as readonly string[]).includes(websiteType)
  ) {
    return { ok: false, error: "invalid" };
  }

  if (!isConsent(body.ownership)) return { ok: false, error: "ownership" };

  return {
    ok: true,
    data: {
      url: url.href,
      email,
      websiteType: (websiteType || "") as WebsiteType | "",
      ownership: true,
    },
  };
}
