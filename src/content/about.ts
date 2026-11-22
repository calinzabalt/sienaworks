import type { Locale } from "./types";

const copy = {
  en: {
    eyebrow: "About",
    title: "Technical website work, explained clearly.",
    lede: "Sienaworks helps businesses fix, improve and look after the websites they depend on. The work is practical: find what is wrong, fix what matters, and leave the site easier to run.",
    person: {
      kicker: "Behind Sienaworks",
      title: "Călin Cozma, web developer",
      text: "I have worked in web development since 2019. In that time I have built and maintained WordPress sites, WooCommerce stores and custom platforms for businesses in Romania, the UK and the USA, including clients I have worked with for years. You deal with me directly, from the first message to the last fix.",
      imageAlt: "Călin Cozma, web developer behind Sienaworks",
      facts: [
        { value: "2019", label: "the year I started in web development" },
        { value: "100+", label: "monthly subscriptions on a platform I maintain" },
        { value: "1", label: "person to talk to, from start to finish" },
      ],
    },
    audiencesTitle: "Who the work is for",
    audiences: [
      {
        title: "Businesses with a WordPress site",
        text: "Professional services, construction, local services and other companies that rely on the site for enquiries.",
      },
      {
        title: "WooCommerce stores",
        text: "Shops that need faster pages, a checkout that can be investigated, and maintenance that matches a store.",
      },
      {
        title: "Agencies",
        text: "Design, marketing and development teams that need a technical partner for WordPress, troubleshooting, maintenance or white-label delivery.",
      },
    ],
    focusTitle: "What the work covers",
    focus: [
      "Troubleshooting and recovery when something is broken.",
      "Performance investigation based on measurements.",
      "Maintenance and monitoring within an agreed scope.",
      "New websites and redesigns with a maintainable base.",
      "Custom features, integrations and practical automation.",
    ],
    limitsTitle: "How to start",
    limits: [
      "Send the website address and you receive a written reply by email, as a PDF, within 24–48 working hours.",
      "If you already know the problem, describe it on the contact page.",
    ],
    cta: "Contact Sienaworks",
    secondary: "Check a website",
  },
  ro: {
    eyebrow: "Despre",
    title: "Lucru tehnic pe site-uri, explicat clar.",
    lede: "Sienaworks ajută afacerile să repare, să îmbunătățească și să îngrijească site-urile de care depind. Lucrul este practic: aflăm ce nu merge, remediem ce contează și lăsăm site-ul mai ușor de administrat.",
    person: {
      kicker: "În spatele Sienaworks",
      title: "Călin Cozma, dezvoltator web",
      text: "Lucrez în dezvoltare web din 2019. De atunci am construit și întreținut site-uri WordPress, magazine WooCommerce și platforme personalizate pentru afaceri din România, Marea Britanie și SUA, inclusiv pentru clienți cu care lucrez de ani de zile. Vorbești direct cu mine, de la primul mesaj până la ultima remediere.",
      imageAlt: "Călin Cozma, dezvoltatorul din spatele Sienaworks",
      facts: [
        { value: "2019", label: "anul în care am început în dezvoltare web" },
        { value: "100+", label: "abonamente lunare pe o platformă pe care o întrețin" },
        { value: "1", label: "singur om de contact, de la început la final" },
      ],
    },
    audiencesTitle: "Pentru cine este",
    audiences: [
      {
        title: "Afaceri cu site WordPress",
        text: "Servicii profesionale, construcții, servicii locale și alte companii care se bazează pe site pentru cereri.",
      },
      {
        title: "Magazine WooCommerce",
        text: "Magazine care au nevoie de pagini mai rapide, de investigarea comenzii și de o mentenanță potrivită unui magazin.",
      },
      {
        title: "Agenții",
        text: "Echipe de design, marketing și dezvoltare care au nevoie de un partener tehnic pentru WordPress, diagnostic, mentenanță sau livrare în regim white-label.",
      },
    ],
    focusTitle: "Ce acoperă lucrul",
    focus: [
      "Diagnostic și recuperare când ceva este stricat.",
      "Investigarea performanței pe baza măsurătorilor.",
      "Mentenanță și monitorizare, în domeniul stabilit.",
      "Site-uri noi și redesign pe o bază ușor de întreținut.",
      "Funcții personalizate, integrări și automatizări practice.",
    ],
    limitsTitle: "Cum începi",
    limits: [
      "Trimiți adresa site-ului și primești un răspuns scris pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
      "Dacă știi deja problema, o poți descrie pe pagina de contact.",
    ],
    cta: "Contactează Sienaworks",
    secondary: "Verifică un site",
  },
} as const;

export function aboutCopy(locale: Locale) {
  return copy[locale];
}
