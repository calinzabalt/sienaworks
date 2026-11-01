import { routeIds, type Locale, type RouteId } from "./types";

export const routes: Record<RouteId, Record<Locale, string>> = {
  home: { en: "/", ro: "/ro" },
  performance: {
    en: "/services/website-performance",
    ro: "/ro/servicii/optimizare-performanta",
  },
  fix: {
    en: "/services/fix-recovery",
    ro: "/ro/servicii/reparatii-recuperare",
  },
  maintenance: {
    en: "/services/maintenance-monitoring",
    ro: "/ro/servicii/mentenanta-monitorizare",
  },
  development: {
    en: "/services/website-development",
    ro: "/ro/servicii/dezvoltare-web",
  },
  custom: {
    en: "/services/custom-development",
    ro: "/ro/servicii/dezvoltare-personalizata",
  },
  healthCheck: {
    en: "/free-website-health-check",
    ro: "/ro/verificare-gratuita-site",
  },
  caseStudies: { en: "/case-studies", ro: "/ro/studii-de-caz" },
  pricing: { en: "/pricing", ro: "/ro/preturi" },
  about: { en: "/about", ro: "/ro/despre" },
  contact: { en: "/contact", ro: "/ro/contact" },
  privacy: {
    en: "/privacy-policy",
    ro: "/ro/politica-de-confidentialitate",
  },
  cookies: { en: "/cookie-policy", ro: "/ro/politica-de-cookies" },
  terms: { en: "/terms", ro: "/ro/termeni-si-conditii" },
};

export function pathFor(id: RouteId, locale: Locale) {
  return routes[id][locale];
}

export function normalizePath(pathname: string) {
  const path = pathname.split("?")[0]?.split("#")[0] ?? "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

export function isCurrentPath(pathname: string, href: string) {
  return normalizePath(pathname) === normalizePath(href);
}

export function matchRoute(pathname: string): { id: RouteId; locale: Locale } | null {
  const path = normalizePath(pathname);

  for (const id of routeIds) {
    if (routes[id].en === path) return { id, locale: "en" };
    if (routes[id].ro === path) return { id, locale: "ro" };
  }

  return null;
}

export function switchLocale(pathname: string, target: Locale) {
  const match = matchRoute(pathname);
  if (!match) return pathFor("home", target);
  return pathFor(match.id, target);
}
