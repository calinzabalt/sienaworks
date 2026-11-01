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
    items: { title: string; text: string }[];
  };
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
  eyebrow: "Website performance · Reliability · Development",
  title: "Your website should work for your business, not against it.",
  lede: "Slow pages, broken forms, update errors and unreliable websites can cost your business time and opportunities. Sienaworks helps you identify technical problems, fix what matters and keep your website working as it should.",
  primaryCta: "Get a Free Website Health Check",
  secondaryCta: "Tell Us What's Wrong",
  support: "Practical technical solutions. Clear findings. No unnecessary complexity.",
  sketch: {
    eyebrow: "Example",
    title: "What a health check looks for",
    note: "Problems we see often.",
    items: [
      {
        title: "Can people open the site?",
        text: "Whether the website is online and responding.",
      },
      {
        title: "Do pages load slowly?",
        text: "Pages that feel slow, especially on a phone.",
      },
      {
        title: "Is something broken?",
        text: "Forms, checkout and errors after an update.",
      },
      {
        title: "Is the software out of date?",
        text: "Old plugins, themes or settings that need a closer look.",
      },
    ],
  },
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
  eyebrow: "Performanță · Fiabilitate · Dezvoltare web",
  title: "Site-ul tău ar trebui să îți ajute afacerea, nu să o încurce.",
  lede: "Paginile lente, formularele care nu funcționează și erorile apărute după actualizări îți pot consuma timpul și îți pot afecta afacerea. Sienaworks te ajută să identifici problemele tehnice, să le prioritizezi și să menții site-ul funcțional.",
  primaryCta: "Verifică gratuit site-ul",
  secondaryCta: "Spune-ne ce problemă ai",
  support: "Soluții tehnice practice. Explicații clare. Fără complexitate inutilă.",
  sketch: {
    eyebrow: "Exemplu",
    title: "Ce caută o verificare a site-ului",
    note: "Probleme pe care le vedem des.",
    items: [
      {
        title: "Pot vizitatorii deschide site-ul?",
        text: "Dacă site-ul este online și răspunde.",
      },
      {
        title: "Se încarcă paginile greu?",
        text: "Paginile care par lente, mai ales pe telefon.",
      },
      {
        title: "Este ceva stricat?",
        text: "Formulare, coșul de cumpărături și erorile după o actualizare.",
      },
      {
        title: "Sunt programele site-ului vechi?",
        text: "Module, teme sau setări care au nevoie de o verificare.",
      },
    ],
  },
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
