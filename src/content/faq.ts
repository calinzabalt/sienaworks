import type { Locale, RouteId } from "./types";

export type FaqItem = { question: string; answer: string };

const faqs: Partial<Record<RouteId, Record<Locale, FaqItem[]>>> = {
  pricing: {
    en: [
      {
        question: "Are these final prices?",
        answer:
          "No. They are starting prices. The final price depends on the website and the size of the work.",
      },
      {
        question: "What does the starting price include?",
        answer: "It is a starting point. What is included is agreed before the work begins.",
      },
      {
        question: "Why is there no euro price on some plans?",
        answer: "Where a figure is not shown yet, we confirm the starting price when you write to us.",
      },
    ],
    ro: [
      {
        question: "Acestea sunt prețuri finale?",
        answer:
          "Nu. Sunt prețuri de pornire. Prețul final depinde de site și de cât de mare este lucrarea.",
      },
      {
        question: "Ce include prețul de pornire?",
        answer: "Este un punct de pornire. Ce este inclus se stabilește înainte să începem.",
      },
      {
        question: "De ce la unele planuri nu apare prețul în euro?",
        answer: "Acolo unde suma nu este trecută încă, o confirmăm când ne scrii.",
      },
    ],
  },
  maintenance: {
    en: [
      {
        question: "Is support available all day and night?",
        answer: "Support is during working hours. We agree the plan before it starts.",
      },
    ],
    ro: [
      {
        question: "Suportul este non-stop?",
        answer: "Suportul este în timpul programului de lucru. Planul se stabilește înainte să înceapă.",
      },
    ],
  },
};

export function faqFor(id: RouteId, locale: Locale) {
  return faqs[id]?.[locale] ?? [];
}
