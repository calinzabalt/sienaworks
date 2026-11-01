import type { EnquiryService } from "../lib/enquiry";
import type { Locale, RouteId } from "./types";

export type Money = {
  kind: "free" | "from" | "quote";
  amount?: number | null;
  period?: "month";
};

export type PricingPlan = {
  id: string;
  ron: Money;
  eur: Money;
  enquiry?: EnquiryService;
  details?: RouteId;
  en: { name: string; purpose: string; cta: string };
  ro: { name: string; purpose: string; cta: string };
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "health",
    ron: { kind: "free" },
    eur: { kind: "free" },
    details: "healthCheck",
    en: {
      name: "Free Website Health Check",
      purpose: "A written reply, emailed as a PDF within 24–48 working hours.",
      cta: "Check my website",
    },
    ro: {
      name: "Verificare gratuită a site-ului",
      purpose: "Un răspuns scris, pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
      cta: "Verifică site-ul",
    },
  },
  {
    id: "audit",
    ron: { kind: "from", amount: 450 },
    eur: { kind: "from", amount: null },
    enquiry: "audit",
    en: {
      name: "Technical Website Audit",
      purpose: "A review of relevant technical issues and prioritised recommendations.",
      cta: "Request an audit",
    },
    ro: {
      name: "Audit tehnic de site",
      purpose: "O analiză a problemelor tehnice relevante și recomandări prioritizate.",
      cta: "Solicită un audit",
    },
  },
  {
    id: "performance",
    ron: { kind: "from", amount: 900 },
    eur: { kind: "from", amount: null },
    enquiry: "performance",
    details: "performance",
    en: {
      name: "WordPress Performance Optimization",
      purpose: "We measure what slows the site down and apply the optimisation we agree.",
      cta: "Discuss performance",
    },
    ro: {
      name: "Optimizare performanță WordPress",
      purpose: "Măsurăm ce încetinește site-ul și aplicăm optimizările stabilite.",
      cta: "Discută performanța",
    },
  },
  {
    id: "fix",
    ron: { kind: "from", amount: 350 },
    eur: { kind: "from", amount: null },
    enquiry: "fix",
    details: "fix",
    en: {
      name: "WordPress Fix & Recovery",
      purpose: "Troubleshooting and repairs for a specific problem.",
      cta: "Request a fix",
    },
    ro: {
      name: "Reparații și recuperare WordPress",
      purpose: "Diagnostic și reparații pentru o problemă punctuală.",
      cta: "Solicită o reparație",
    },
  },
  {
    id: "care",
    ron: { kind: "from", amount: 299, period: "month" },
    eur: { kind: "from", amount: null, period: "month" },
    enquiry: "maintenance",
    details: "maintenance",
    en: {
      name: "WordPress Care",
      purpose: "Updates, backups and monitoring, every month.",
      cta: "Discuss maintenance",
    },
    ro: {
      name: "Îngrijire WordPress",
      purpose: "Actualizări, copii de siguranță și monitorizare, în fiecare lună.",
      cta: "Solicită mentenanță",
    },
  },
  {
    id: "woo",
    ron: { kind: "from", amount: 599, period: "month" },
    eur: { kind: "from", amount: null, period: "month" },
    enquiry: "woocommerce",
    en: {
      name: "WooCommerce Reliability",
      purpose: "Maintenance for a WooCommerce store.",
      cta: "Discuss store care",
    },
    ro: {
      name: "Fiabilitate WooCommerce",
      purpose: "Mentenanță pentru un magazin WooCommerce.",
      cta: "Discută mentenanța magazinului",
    },
  },
  {
    id: "custom",
    ron: { kind: "quote" },
    eur: { kind: "quote" },
    enquiry: "custom",
    details: "custom",
    en: {
      name: "Custom Development",
      purpose: "Custom functionality, integrations and web applications.",
      cta: "Discuss a custom solution",
    },
    ro: {
      name: "Dezvoltare personalizată",
      purpose: "Funcționalități personalizate, integrări și aplicații web.",
      cta: "Discută o soluție personalizată",
    },
  },
];

export function formatPrice(money: Money, locale: Locale, currency: "RON" | "EUR") {
  if (money.kind === "free") return locale === "ro" ? "Gratuit" : "Free";
  if (money.kind === "quote") {
    return locale === "ro" ? "Ofertă individuală" : "Individually quoted";
  }

  if (money.amount == null) {
    const monthly = money.period === "month" ? (locale === "ro" ? " / lună" : " / month") : "";
    return locale === "ro"
      ? `Prețul de pornire în EUR se confirmă la cerere${monthly}`
      : `EUR starting price confirmed on request${monthly}`;
  }

  const period =
    money.period === "month" ? (locale === "ro" ? " / lună" : " / month") : "";
  const prefix = locale === "ro" ? "De la" : "Starting at";
  return `${prefix} ${money.amount} ${currency}${period}`;
}
