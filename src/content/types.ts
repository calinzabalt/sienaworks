export const locales = ["en", "ro"] as const;

export type Locale = (typeof locales)[number];

export const routeIds = [
  "home",
  "performance",
  "fix",
  "maintenance",
  "development",
  "custom",
  "healthCheck",
  "caseStudies",
  "pricing",
  "about",
  "contact",
  "privacy",
  "cookies",
  "terms",
] as const;

export type RouteId = (typeof routeIds)[number];
