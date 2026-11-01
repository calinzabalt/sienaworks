import { pathFor } from "./routes";
import type { Locale } from "./types";

const en = {
  skip: "Skip to content",
  navLabel: "Primary",
  services: "Services",
  health: "Free Website Health Check",
  pricing: "Pricing",
  caseStudies: "Case Studies",
  about: "About",
  contact: "Contact",
  contactCta: "Contact",
  language: "Language",
  footerBlurb:
    "Technical website services for businesses that need problems found, fixed and kept under control.",
  footerServices: "Services",
  footerCompany: "Company",
  footerLegal: "Legal",
  privacy: "Privacy Policy",
  cookies: "Cookie Policy",
  terms: "Terms",
  rights: "All rights reserved.",
  home: "Home",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  menuLabel: "Mobile",
};

const ro = {
  skip: "Sari la conținut",
  navLabel: "Principal",
  services: "Servicii",
  health: "Verificare gratuită",
  pricing: "Prețuri",
  caseStudies: "Studii de caz",
  about: "Despre",
  contact: "Contact",
  contactCta: "Contact",
  language: "Limbă",
  footerBlurb:
    "Servicii tehnice pentru site-uri de afaceri: identificăm problemele, le remediem și ajutăm la menținerea lor sub control.",
  footerServices: "Servicii",
  footerCompany: "Companie",
  footerLegal: "Informații legale",
  privacy: "Politica de confidențialitate",
  cookies: "Politica de cookie-uri",
  terms: "Termeni și condiții",
  rights: "Toate drepturile rezervate.",
  home: "Acasă",
  openMenu: "Deschide meniul",
  closeMenu: "Închide meniul",
  menuLabel: "Meniu mobil",
};

export function chrome(locale: Locale) {
  return locale === "ro" ? ro : en;
}

export function serviceNav(locale: Locale) {
  return [
    {
      href: pathFor("performance", locale),
      label: locale === "ro" ? "Optimizare performanță" : "Website Performance",
    },
    {
      href: pathFor("fix", locale),
      label: locale === "ro" ? "Reparații și recuperare" : "Fix & Recovery",
    },
    {
      href: pathFor("maintenance", locale),
      label: locale === "ro" ? "Mentenanță și monitorizare" : "Maintenance & Monitoring",
    },
    {
      href: pathFor("development", locale),
      label: locale === "ro" ? "Dezvoltare web" : "Website Development",
    },
    {
      href: pathFor("custom", locale),
      label: locale === "ro" ? "Dezvoltare personalizată" : "Custom Development",
    },
  ];
}

export const cookieCopy = {
  en: {
    title: "Cookies",
    body: "Essential storage remembers this choice. Analytics and marketing tags stay off unless you allow them.",
    analytics: "Analytics",
    analyticsHint: "Google Analytics, used to understand which pages are visited.",
    marketing: "Marketing",
    marketingHint: "Advertising tags, only if a campaign tag is configured.",
    essential: "Essential",
    essentialHint: "Remembers this choice. Always on.",
    accept: "Accept all",
    save: "Save selection",
    reject: "Reject optional",
    settings: "Cookie settings",
    policy: "Cookie Policy",
  },
  ro: {
    title: "Cookie-uri",
    body: "Stocarea esențială reține această alegere. Analitica și etichetele de marketing rămân oprite până le permiți.",
    analytics: "Analitică",
    analyticsHint: "Google Analytics, pentru a înțelege ce pagini sunt vizitate.",
    marketing: "Marketing",
    marketingHint: "Etichete publicitare, doar dacă este configurată o campanie.",
    essential: "Esențiale",
    essentialHint: "Rețin această alegere. Rămân pornite.",
    accept: "Acceptă tot",
    save: "Salvează selecția",
    reject: "Refuză opționalele",
    settings: "Setări cookie",
    policy: "Politica de cookie-uri",
  },
} as const;
