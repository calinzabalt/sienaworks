import type { Locale, RouteId } from "./types";

export type HomeCopy = {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta: string;
  secondaryCta: string;
  support: string;
  sketch: {
    eyebrow: string;
    title: string;
    note: string;
    items: { title: string; text: string; status: "ok" | "warn" | "bad"; chip: string }[];
    disclaimer: string;
    /** labels drawn inside the illustrated website */
    mock: { url: string; image: string; error: string; versions: string[]; updates: string };
  };
  /** section labels and extras for design F */
  labels: {
    problems: string;
    symptoms: string;
    caseStudy: string;
    allCases: string;
    video: string;
    services: string;
    pricesNote: string;
    startHere: string;
    process: string;
    steps: string;
    about: string;
    since: string;
    aboutCta: string;
    portraitName: string;
    portraitRole: string;
    portraitSince: string;
  };
  aboutText: string;
  problemsTitle: string;
  problemsIntro: string;
  problems: { title: string; text: string }[];
  problemsCta: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { routeId: RouteId; title: string; text: string; cta: string }[];
  processTitle: string;
  processNote: string;
  steps: { title: string; text: string }[];
  whyTitle: string;
  why: { title: string; text: string }[];
  finalTitle: string;
  finalText: string;
  finalPrimary: string;
  finalSecondary: string;
};

const en: HomeCopy = {
  eyebrow: "Speed · Fixes · Development",
  title: "Your website should work for your business, not against it.",
  lede: "Slow pages, broken forms, update errors and unreliable websites can cost your business time and opportunities. Sienaworks helps you identify technical problems, fix what matters and keep your website working as it should.",
  primaryCta: "Get a Free Website Health Check",
  secondaryCta: "Tell Us What's Wrong",
  support: "Practical technical solutions. Clear findings. No unnecessary complexity.",
  sketch: {
    eyebrow: "Example",
    title: "What we check",
    note: "Problems we see often.",
    items: [
      {
        title: "Can people open the site?",
        text: "Whether the website is online and responding.",
        status: "ok",
        chip: "Online",
      },
      {
        title: "Do pages load slowly?",
        text: "Pages that feel slow, especially on a phone.",
        status: "warn",
        chip: "4.8 s on mobile",
      },
      {
        title: "Is something broken?",
        text: "Forms, checkout and errors after an update.",
        status: "bad",
        chip: "Form not sending",
      },
      {
        title: "Is the software out of date?",
        text: "Old plugins, themes or settings that need a closer look.",
        status: "warn",
        chip: "12 updates",
      },
    ],
    disclaimer: "Illustrative example. Your report shows what was actually found on your site.",
    mock: { url: "your-business.com", image: "IMG · 3.2 MB", error: "× Message not sent", versions: ["WP 6.2", "theme 3.1", "form 2.0"], updates: "12 updates" },
  },
  labels: {
    problems: "Problems",
    symptoms: "06 symptoms",
    caseStudy: "Case study",
    allCases: "All case studies",
    video: "Video · 1 min",
    services: "Services",
    pricesNote: "prices on request",
    startHere: "Start here",
    process: "Process",
    steps: "05 steps",
    about: "About",
    since: "web development since 2019",
    aboutCta: "More about Sienaworks",
    portraitName: "Călin Cozma",
    portraitRole: "founder",
    portraitSince: "In web development since 2019",
  },
  aboutText:
    "Sienaworks helps businesses fix, improve and look after the websites they depend on. The work is practical: find what is wrong, fix what matters, and leave the site easier to run.",
  problemsTitle: "Small website problems can become expensive distractions.",
  problemsIntro:
    "Your website might look fine while important things are going wrong behind the scenes.",
  problems: [
    {
      title: "Slow website",
      text: "Pages take too long to load, especially on mobile. Find performance bottlenecks and prioritise improvements.",
    },
    {
      title: "Broken functionality",
      text: "Forms, navigation, integrations or checkout flows stop working as expected. Identify the cause and restore functionality.",
    },
    {
      title: "Security and update concerns",
      text: "Outdated software, configuration issues or suspicious activity need attention. Review risks and plan appropriate fixes.",
    },
    {
      title: "Unreliable website",
      text: "Unexpected errors and downtime interrupt business operations. Improve reliability through troubleshooting and ongoing monitoring.",
    },
    {
      title: "Outdated website",
      text: "Your current website no longer supports your business needs. Improve the experience or rebuild it with a maintainable foundation.",
    },
    {
      title: "Repetitive manual work",
      text: "Your team spends time copying data between systems or repeating routine tasks. Explore integrations and practical automation.",
    },
  ],
  problemsCta: "Find Out What's Wrong",
  servicesTitle: "The technical support your website needs.",
  servicesIntro:
    "From a one-off fix to ongoing technical care, choose the level of support that fits your business.",
  services: [
    {
      routeId: "performance",
      title: "Website Performance",
      text: "Find bottlenecks, improve loading speed and make better use of caching, assets and server resources.",
      cta: "Explore Performance Services",
    },
    {
      routeId: "fix",
      title: "Fix & Recovery",
      text: "Troubleshoot WordPress errors, broken functionality, update failures and website incidents.",
      cta: "Get Technical Help",
    },
    {
      routeId: "maintenance",
      title: "Maintenance & Monitoring",
      text: "Keep software maintained, monitor availability and catch technical issues earlier.",
      cta: "Explore Website Care",
    },
    {
      routeId: "development",
      title: "Website Development & Redesign",
      text: "Build a new business website or improve an existing one with a maintainable, performance-conscious approach.",
      cta: "Explore Development",
    },
    {
      routeId: "custom",
      title: "Custom Development & Automation",
      text: "Develop custom functionality, integrate APIs and automate repetitive workflows.",
      cta: "Explore Custom Solutions",
    },
    {
      routeId: "healthCheck",
      title: "Free Website Health Check",
      text: "Start with a technical overview to understand which issues deserve attention.",
      cta: "Check My Website",
    },
  ],
  processTitle: "A clear process from problem to solution.",
  processNote: "The steps depend on what you need: a check, a repair, or a longer project.",
  steps: [
    {
      title: "Assess",
      text: "We review the website, symptoms and business priorities to establish what needs attention.",
    },
    {
      title: "Prioritise",
      text: "We distinguish important problems from lower-priority improvements and explain the recommended next steps.",
    },
    {
      title: "Fix",
      text: "We implement the agreed changes using an approach suited to the website and its infrastructure.",
    },
    {
      title: "Verify",
      text: "We retest what we changed.",
    },
    {
      title: "Maintain",
      text: "Where appropriate, we help you keep the website updated, monitored and easier to maintain.",
    },
  ],
  whyTitle: "Technical work focused on real business needs.",
  why: [
    {
      title: "Clear findings",
      text: "Understand what is wrong and why it matters.",
    },
    {
      title: "Prioritised fixes",
      text: "Focus on the issues that deserve attention first.",
    },
    {
      title: "Practical development",
      text: "Choose maintainable solutions instead of unnecessary complexity.",
    },
    {
      title: "Verification",
      text: "Retest the work that has been changed.",
    },
    {
      title: "Flexible support",
      text: "Get help with a specific issue or arrange ongoing maintenance.",
    },
  ],
  finalTitle: "Not sure what your website needs?",
  finalText:
    "Tell us what is happening, or start with a free website health check. We will help you understand the next practical step.",
  finalPrimary: "Check My Website",
  finalSecondary: "Contact Sienaworks",
};

const ro: HomeCopy = {
  eyebrow: "Viteză · Reparații · Dezvoltare",
  title: "Site-ul tău ar trebui să îți ajute afacerea, nu să o încurce.",
  lede: "Paginile lente, formularele care nu funcționează și erorile apărute după actualizări îți pot consuma timpul și îți pot afecta afacerea. Sienaworks te ajută să identifici problemele tehnice, să le prioritizezi și să menții site-ul funcțional.",
  primaryCta: "Verifică gratuit site-ul",
  secondaryCta: "Spune-ne ce problemă ai",
  support: "Soluții tehnice practice. Explicații clare. Fără complexitate inutilă.",
  sketch: {
    eyebrow: "Exemplu",
    title: "Ce verificăm",
    note: "Probleme pe care le vedem des.",
    items: [
      {
        title: "Pot vizitatorii deschide site-ul?",
        text: "Dacă site-ul este online și răspunde.",
        status: "ok",
        chip: "Online",
      },
      {
        title: "Se încarcă paginile greu?",
        text: "Paginile care par lente, mai ales pe telefon.",
        status: "warn",
        chip: "4,8 s pe mobil",
      },
      {
        title: "Este ceva stricat?",
        text: "Formulare, coșul de cumpărături și erorile după o actualizare.",
        status: "bad",
        chip: "Formularul nu trimite",
      },
      {
        title: "Sunt programele site-ului vechi?",
        text: "Module, teme sau setări care au nevoie de o verificare.",
        status: "warn",
        chip: "12 actualizări",
      },
    ],
    disclaimer: "Exemplu ilustrativ. Raportul tău arată ce s-a găsit de fapt pe site.",
    mock: { url: "afacerea-ta.ro", image: "IMG · 3,2 MB", error: "× Mesajul nu a fost trimis", versions: ["WP 6.2", "temă 3.1", "formular 2.0"], updates: "12 actualizări" },
  },
  labels: {
    problems: "Probleme",
    symptoms: "06 simptome",
    caseStudy: "Studiu de caz",
    allCases: "Toate studiile de caz",
    video: "Video · 1 min",
    services: "Servicii",
    pricesNote: "prețuri publice, în lei",
    startHere: "Începe aici",
    process: "Proces",
    steps: "05 pași",
    about: "Despre",
    since: "în dezvoltare web din 2019",
    aboutCta: "Mai multe despre Sienaworks",
    portraitName: "Călin Cozma",
    portraitRole: "fondator",
    portraitSince: "În dezvoltare web din 2019",
  },
  aboutText:
    "Sienaworks ajută afacerile să repare, să îmbunătățească și să îngrijească site-urile de care depind. Lucrul este practic: aflăm ce nu merge, remediem ce contează și lăsăm site-ul mai ușor de administrat.",
  problemsTitle: "Problemele mici ale unui site pot deveni costisitoare.",
  problemsIntro:
    "Chiar dacă site-ul pare în regulă, unele probleme tehnice pot afecta experiența vizitatorilor și activitatea afacerii.",
  problems: [
    {
      title: "Site lent",
      text: "Paginile se încarcă greu, mai ales pe mobil. Identificăm blocajele și prioritizăm îmbunătățirile.",
    },
    {
      title: "Funcționalități defecte",
      text: "Formularele, navigația, integrările sau procesul de comandă nu funcționează corect. Investigăm cauza și remediem problemele convenite.",
    },
    {
      title: "Probleme de securitate și actualizări",
      text: "Versiunile învechite, configurațiile greșite sau activitatea suspectă necesită verificări și măsuri potrivite.",
    },
    {
      title: "Site instabil",
      text: "Erorile și întreruperile pot afecta activitatea afacerii. Investigăm problemele și putem implementa monitorizare.",
    },
    {
      title: "Site învechit",
      text: "Site-ul actual nu mai răspunde nevoilor afacerii. Îl putem îmbunătăți sau reconstrui pe o bază tehnică mai ușor de întreținut.",
    },
    {
      title: "Procese manuale repetitive",
      text: "Echipa pierde timp cu sarcini repetitive sau transferuri de date. Analizăm oportunitățile de integrare și automatizare.",
    },
  ],
  problemsCta: "Află ce probleme are site-ul",
  servicesTitle: "Suportul tehnic de care are nevoie site-ul tău.",
  servicesIntro:
    "De la o reparație punctuală până la mentenanță recurentă, alegem împreună soluția potrivită.",
  services: [
    {
      routeId: "performance",
      title: "Optimizare performanță",
      text: "Identificăm blocajele, îmbunătățim viteza de încărcare și optimizăm cache-ul, resursele și configurația serverului.",
      cta: "Vezi serviciile de performanță",
    },
    {
      routeId: "fix",
      title: "Reparații și recuperare",
      text: "Investigăm erorile WordPress, funcționalitățile defecte și problemele apărute după actualizări.",
      cta: "Solicită ajutor tehnic",
    },
    {
      routeId: "maintenance",
      title: "Mentenanță și monitorizare",
      text: "Menținerea software-ului actualizat și monitorizarea disponibilității ajută la identificarea mai rapidă a problemelor.",
      cta: "Vezi mentenanța",
    },
    {
      routeId: "development",
      title: "Dezvoltare web și redesign",
      text: "Construim site-uri de prezentare sau îmbunătățim site-uri existente, cu accent pe performanță și mentenabilitate.",
      cta: "Vezi serviciile de dezvoltare",
    },
    {
      routeId: "custom",
      title: "Dezvoltare personalizată și automatizare",
      text: "Creăm funcționalități personalizate, integrări API și automatizări pentru procese repetitive.",
      cta: "Explorează soluțiile personalizate",
    },
    {
      routeId: "healthCheck",
      title: "Verificare gratuită a site-ului",
      text: "Începe cu o verificare tehnică pentru a înțelege ce probleme merită investigate.",
      cta: "Verifică site-ul",
    },
  ],
  processTitle: "Un proces clar, de la problemă la soluție.",
  processNote: "Pașii depind de ce ai nevoie: o verificare, o reparație sau o lucrare mai lungă.",
  steps: [
    {
      title: "Analizăm",
      text: "Verificăm site-ul, simptomele și prioritățile afacerii.",
    },
    {
      title: "Prioritizăm",
      text: "Explicăm problemele importante și următorii pași recomandați.",
    },
    {
      title: "Remediem",
      text: "Implementăm modificările convenite, potrivite site-ului și infrastructurii sale.",
    },
    {
      title: "Verificăm",
      text: "Retestăm ce am schimbat.",
    },
    {
      title: "Menținere",
      text: "Putem asigura suport recurent pentru actualizări, monitorizare și mentenanță.",
    },
  ],
  whyTitle: "Soluții tehnice orientate spre nevoile reale ale afacerii.",
  why: [
    {
      title: "Constatări clare",
      text: "Înțelegi ce nu funcționează și de ce contează.",
    },
    {
      title: "Priorități bine definite",
      text: "Rezolvăm mai întâi problemele importante.",
    },
    {
      title: "Dezvoltare practică",
      text: "Evităm complexitatea care nu aduce valoare.",
    },
    {
      title: "Verificare",
      text: "Retestăm modificările implementate.",
    },
    {
      title: "Suport flexibil",
      text: "Poți solicita o reparație punctuală sau mentenanță recurentă.",
    },
  ],
  finalTitle: "Nu știi de unde să începi?",
  finalText:
    "Spune-ne ce problemă ai sau începe cu o verificare tehnică gratuită. Te ajutăm să înțelegi care este următorul pas.",
  finalPrimary: "Verifică gratuit site-ul",
  finalSecondary: "Contactează Sienaworks",
};

export function homeCopy(locale: Locale) {
  return locale === "ro" ? ro : en;
}
