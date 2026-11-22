import type { Locale, RouteId } from "./types";

type PageMeta = { title: string; description: string; absolute?: boolean };

const meta: Record<RouteId, Record<Locale, PageMeta>> = {
  home: {
    en: {
      title: "Sienaworks | Website Fixes, Performance & Development",
      description:
        "Website troubleshooting, speed optimization, maintenance and custom development for businesses that depend on their websites.",
      absolute: true,
    },
    ro: {
      title: "Sienaworks | Reparații WordPress, Viteză și Dezvoltare Web",
      description:
        "Reparații WordPress, optimizare viteză, mentenanță și dezvoltare web pentru afaceri care depind de site-ul lor.",
      absolute: true,
    },
  },
  performance: {
    en: {
      title: "Website Performance",
      description:
        "Find what slows a website down and improve how fast the pages load, on mobile and desktop, with a clear note of what changed.",
    },
    ro: {
      title: "Optimizare viteză WordPress",
      description:
        "Aflăm ce încetinește site-ul și îmbunătățim viteza de încărcare pe mobil și desktop, cu o notă clară despre ce s-a schimbat.",
    },
  },
  fix: {
    en: {
      title: "WordPress Fix & Recovery",
      description:
        "Troubleshooting for WordPress errors, failed updates, broken forms and website incidents.",
    },
    ro: {
      title: "Reparații WordPress",
      description:
        "Diagnostic și reparații pentru erori WordPress, actualizări eșuate și formulare care nu merg.",
    },
  },
  maintenance: {
    en: {
      title: "Website Maintenance & Monitoring",
      description:
        "Updates, backups and monitoring so the website stays looked after, and problems are caught before your visitors notice them.",
    },
    ro: {
      title: "Mentenanță WordPress",
      description:
        "Actualizări, copii de siguranță și monitorizare pentru site-ul tău, ca problemele să fie prinse înainte să le vadă vizitatorii.",
    },
  },
  development: {
    en: {
      title: "Website Development & Redesign",
      description:
        "Business websites, WordPress builds and redesigns with attention to usability, maintainability and performance.",
    },
    ro: {
      title: "Dezvoltare web",
      description:
        "Site-uri de prezentare, proiecte WordPress și redesign, cu atenție la utilizare, mentenanță și performanță.",
    },
  },
  custom: {
    en: {
      title: "Custom Development & Automation",
      description:
        "Custom WordPress functionality, API integrations and practical automation.",
    },
    ro: {
      title: "Dezvoltare WordPress personalizată",
      description:
        "Funcționalități WordPress personalizate, integrări API și automatizări practice.",
    },
  },
  healthCheck: {
    en: {
      title: "Free Website Health Check",
      description:
        "Speed, SEO, mobile, forms and updates. The written reply is emailed as a PDF within 24–48 working hours.",
    },
    ro: {
      title: "Verificare gratuită site",
      description:
        "Viteză, SEO, mobil, formulare și actualizări. Răspunsul pleacă pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
    },
  },
  caseStudies: {
    en: {
      title: "Case Studies",
      description:
        "Real projects by Sienaworks: a crypto membership platform, a lead-generation site for a solar installer and an AI video SaaS.",
    },
    ro: {
      title: "Studii de caz",
      description:
        "Proiecte reale Sienaworks: o platformă crypto cu abonamente, un site de lead-uri pentru panouri solare și un SaaS video cu AI.",
    },
  },
  pricing: {
    en: {
      title: "Pricing",
      description:
        "Prices for technical website services, confirmed on request. The price depends on the website and the size of the work.",
    },
    ro: {
      title: "Prețuri",
      description:
        "Prețuri de pornire orientative pentru servicii tehnice de site. Prețul final depinde de domeniu, acces și starea site-ului.",
    },
  },
  about: {
    en: {
      title: "About",
      description:
        "Sienaworks provides technical website services for businesses with WordPress sites, WooCommerce stores and agency partners.",
    },
    ro: {
      title: "Despre",
      description:
        "Sienaworks oferă servicii tehnice pentru afaceri cu site-uri WordPress, magazine WooCommerce și parteneri agenții.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      description:
        "Tell Sienaworks what is happening with your website. We reply by email.",
    },
    ro: {
      title: "Contact",
      description:
        "Spune-ne ce se întâmplă cu site-ul sau ce vrei să construiești. Îți răspundem pe e-mail, cu pașii următori.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      description:
        "Privacy notice for Sienaworks, operated by Cozma Viorel-Călin PFA, CUI 41208077.",
    },
    ro: {
      title: "Politica de confidențialitate",
      description:
        "Nota de confidențialitate pentru Sienaworks, operat de Cozma Viorel-Călin PFA, CUI 41208077.",
    },
  },
  cookies: {
    en: {
      title: "Cookie Policy",
      description:
        "Essential, analytics and marketing cookies on the Sienaworks website, and how to withdraw consent.",
    },
    ro: {
      title: "Politica de cookie-uri",
      description:
        "Cookie-urile esențiale, de analitică și de marketing de pe site-ul Sienaworks și cum retragi acordul.",
    },
  },
  terms: {
    en: {
      title: "Terms",
      description:
        "Terms for using the Sienaworks website. The contracting entity is Cozma Viorel-Călin PFA.",
    },
    ro: {
      title: "Termeni și condiții",
      description:
        "Termenii pentru utilizarea site-ului Sienaworks. Entitatea contractantă este Cozma Viorel-Călin PFA.",
    },
  },
};

export function metaFor(id: RouteId, locale: Locale) {
  return meta[id][locale];
}
