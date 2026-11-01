export type UrlError = "url" | "blocked_url";

const blockedNames = new Set([
  "localhost",
  "metadata.google.internal",
  "metadata.google",
]);

export function normalizeHttpUrl(value: string): URL | null {
  const trimmed = value.trim();
  if (!trimmed || /\s/.test(trimmed) || trimmed.length > 300) return null;

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  if (!url.hostname || !url.hostname.includes(".")) return null;

  return url;
}

export function validatePublicUrl(
  value: string,
): { ok: true; href: string } | { ok: false; error: UrlError } {
  const url = normalizeHttpUrl(value);
  if (!url) return { ok: false, error: "url" };
  if (isBlockedHost(url.hostname)) return { ok: false, error: "blocked_url" };
  return { ok: true, href: url.toString() };
}

function isBlockedHost(hostname: string) {
  const host = hostname.toLowerCase().replace(/\.$/, "").replace(/^\[|\]$/g, "");

  if (blockedNames.has(host)) return true;
  if (
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host.endsWith(".internal")
  ) {
    return true;
  }

  if (/^\d+(\.\d+){0,3}$/.test(host)) return !isPublicIpv4(host);
  if (host.includes(":")) return isBlockedIpv6(host);

  return false;
}

function isPublicIpv4(host: string) {
  const match = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!match) return false;

  const parts = match.slice(1).map(Number);
  if (parts.some((part) => part > 255)) return false;

  const a = parts[0] ?? 0;
  const b = parts[1] ?? 0;

  if (a === 0 || a === 10 || a === 127 || a >= 224) return false;
  if (a === 169 && b === 254) return false;
  if (a === 172 && b >= 16 && b <= 31) return false;
  if (a === 192 && b === 168) return false;
  if (a === 100 && b >= 64 && b <= 127) return false;

  return true;
}

function isBlockedIpv6(host: string) {
  const bare = host.toLowerCase();
  if (bare === "::" || bare === "::1") return true;
  if (bare.startsWith("fe80:") || bare.startsWith("fc") || bare.startsWith("fd")) {
    return true;
  }
  if (bare.startsWith("::ffff:")) {
    const mapped = bare.slice("::ffff:".length);
    return !isPublicIpv4(mapped);
  }
  return false;
}
