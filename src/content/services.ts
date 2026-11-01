import type { EnquiryService } from "../lib/enquiry";
import type { Locale, RouteId } from "./types";

export type ServiceId = "performance" | "fix" | "maintenance" | "development" | "custom";

type Block = { title: string; text: string };

export type ServiceCopy = {
  eyebrow: string;
  h1: string;
  intro: string;
  includesTitle: string;
  includes: Block[];
  deliverablesTitle?: string;
  deliverables?: Block[];
  limitsTitle?: string;
  limits?: string[];
  processTitle?: string;
  process?: Block[];
  primaryCta: string;
  secondaryCta?: string;
  secondaryRoute?: RouteId;
};

export type ServiceDefinition = {
  id: ServiceId;
  routeId: RouteId;
  enquiry: EnquiryService;
  en: ServiceCopy;
  ro: ServiceCopy;
};

export const serviceList: ServiceDefinition[] = [
  {
    id: "performance",
    routeId: "performance",
    enquiry: "performance",
    en: {
      eyebrow: "Website performance",
      h1: "Make your website faster.",
      intro:
        "A slow website can frustrate visitors and make important tasks harder. We investigate the factors affecting performance and prioritise improvements based on measurable evidence.",
      includesTitle: "What the work can cover",
      includes: [
        {
          title: "Performance audit",
          text: "A structured look at the pages and symptoms that matter to the business.",
        },
        {
          title: "Page speed",
          text: "We measure how the pages load and what slows them down.",
        },
        {
          title: "How the page feels",
          text: "Loading time, how quickly someone can use the page, and whether things jump while it loads.",
        },
        {
          title: "Images and assets",
          text: "Review of file size, formats and how front-end assets are loaded.",
        },
        {
          title: "Caching and resource loading",
          text: "How caching and the order of resources affect repeat and first visits.",
        },
        {
          title: "Front-end investigation",
          text: "Scripts, styles and third-party tags that add weight or delay.",
        },
        {
          title: "Server",
          text: "How quickly the server answers, when we have access to the hosting.",
        },
        {
          title: "WordPress and database checks",
          text: "Queries, plugins and other WordPress factors when they are relevant.",
        },
        {
          title: "Before and after",
          text: "We compare the speed before the work and after it.",
        },
      ],
      deliverablesTitle: "What you receive",
      deliverables: [
        { title: "Findings and severity", text: "What was observed, and how serious it appears." },
        { title: "Prioritised recommendations", text: "What deserves attention first." },
        { title: "Agreed fixes", text: "The changes we agree before we start." },
        {
          title: "Retesting",
          text: "We measure the pages again after the changes.",
        },
      ],
      primaryCta: "Request a Performance Audit",
    },
    ro: {
      eyebrow: "Performanță",
      h1: "Un site mai rapid.",
      intro:
        "Un site lent poate afecta experiența vizitatorilor și funcționarea unor procese importante. Investigăm factorii care influențează performanța și prioritizăm îmbunătățirile pe baza măsurătorilor.",
      includesTitle: "Ce poate include lucrul",
      includes: [
        {
          title: "Audit de performanță",
          text: "O analiză structurată a paginilor și simptomelor care contează pentru afacere.",
        },
        {
          title: "Viteza paginilor",
          text: "Măsurăm cum se încarcă paginile și ce le încetinește.",
        },
        {
          title: "Cum se simte pagina",
          text: "Timpul de încărcare, cât de repede poate fi folosită pagina și dacă elementele sar în timpul încărcării.",
        },
        {
          title: "Imagini și resurse",
          text: "Dimensiunea fișierelor, formatele și modul în care se încarcă resursele.",
        },
        {
          title: "Cache și încărcarea resurselor",
          text: "Cum influențează cache-ul și ordinea resurselor prima vizită și vizitele următoare.",
        },
        {
          title: "Investigație de front-end",
          text: "Scripturi, stiluri și etichete terțe care adaugă greutate sau întârziere.",
        },
        {
          title: "Server",
          text: "Cât de repede răspunde serverul, când avem acces la găzduire.",
        },
        {
          title: "WordPress și baza de date",
          text: "Interogări, module și alți factori WordPress, atunci când sunt relevanți pentru optimizarea vitezei.",
        },
        {
          title: "Înainte și după",
          text: "Comparăm viteza înainte de lucrare și după.",
        },
      ],
      deliverablesTitle: "Ce primești",
      deliverables: [
        { title: "Constatări și gravitate", text: "Ce s-a observat și cât de important pare." },
        { title: "Recomandări prioritizate", text: "Ce merită atenție mai întâi." },
        { title: "Remedieri convenite", text: "Modificările pe care le stabilim înainte să începem." },
        {
          title: "Retestare",
          text: "Măsurăm paginile din nou după modificări.",
        },
      ],
      primaryCta: "Solicită un audit de performanță",
    },
  },
  {
    id: "fix",
    routeId: "fix",
    enquiry: "fix",
    en: {
      eyebrow: "Fix and recovery",
      h1: "Something broken on your website? Let's find the cause.",
      intro:
        "From WordPress errors and failed updates to broken forms and unexpected downtime, we investigate technical issues and work towards a reliable fix.",
      includesTitle: "Situations we can investigate",
      includes: [
        { title: "WordPress troubleshooting", text: "Errors, white screens and behaviour that changed without a clear reason." },
        { title: "Broken pages and functionality", text: "Pages, navigation and features that no longer work as expected." },
        { title: "Failed updates", text: "Core, plugin or theme updates that leave the site unstable." },
        { title: "Plugin and theme conflicts", text: "Interactions between components that break a page or a workflow." },
        { title: "PHP and server errors", text: "Errors that come from the application or the server." },
        { title: "Forms and email delivery", text: "Forms that fail to send, and mail that does not arrive." },
        { title: "WooCommerce checkout", text: "Checkout errors and store flows that stop orders completing." },
        { title: "Security incidents", text: "We look at whether the site was compromised and what can be recovered." },
        { title: "Backups and recovery", text: "We see which backups exist and how the site can be brought back." },
      ],
      processTitle: "How a fix proceeds",
      process: [
        { title: "Describe the symptoms", text: "What broke, when it changed, and what you have already tried." },
        { title: "Confirm access", text: "Which systems we can look at, and what stays a separate piece of work." },
        { title: "Investigate the cause", text: "Look for the change or conflict behind the symptom." },
        { title: "Agree on the fix", text: "Confirm the work before it is implemented." },
        { title: "Implement and verify", text: "Make the agreed change and retest the affected path." },
        { title: "Recommend prevention", text: "Suggest practical follow-up when it would reduce a repeat." },
      ],
      primaryCta: "Request a Fix",
      secondaryCta: "Start with a Free Website Health Check",
      secondaryRoute: "healthCheck",
    },
    ro: {
      eyebrow: "Reparații",
      h1: "Ai o problemă cu site-ul? Hai să-i găsim cauza.",
      intro:
        "De la erori WordPress și actualizări eșuate până la formulare defecte sau întreruperi, investigăm problemele tehnice și căutăm o soluție potrivită.",
      includesTitle: "Situații pe care le putem investiga",
      includes: [
        { title: "Diagnostic WordPress", text: "Erori, ecrane albe și comportamente care s-au schimbat fără o cauză clară." },
        { title: "Pagini și funcții defecte", text: "Pagini, navigație și funcții care nu mai merg cum ar trebui." },
        { title: "Actualizări eșuate", text: "Actualizări de nucleu, module sau teme care lasă site-ul instabil." },
        { title: "Conflicte între module și teme", text: "Interacțiuni care strică o pagină sau un flux de lucru." },
        { title: "Erori PHP și de server", text: "Erori care vin din aplicație sau din server." },
        { title: "Formulare și e-mail", text: "Formulare care nu trimit și mesaje care nu ajung." },
        { title: "Comenzi WooCommerce", text: "Erori la finalizarea comenzii și fluxuri care opresc comenzile." },
        { title: "Incidente de securitate", text: "Vedem dacă site-ul a fost compromis și ce se poate recupera." },
        { title: "Copii de siguranță și recuperare", text: "Vedem ce copii există și cum poate fi readus site-ul." },
      ],
      processTitle: "Cum decurge o reparație",
      process: [
        { title: "Descrii simptomele", text: "Ce s-a stricat, când s-a schimbat și ce ai încercat deja." },
        { title: "Confirmăm accesul", text: "Ce sisteme putem vedea și ce rămâne o lucrare separată." },
        { title: "Investigăm cauza", text: "Căutăm modificarea sau conflictul din spatele simptomului." },
        { title: "Stabilim remedierea", text: "Confirmăm lucrarea înainte de implementare." },
        { title: "Implementăm și verificăm", text: "Facem modificarea convenită și retestăm fluxul afectat." },
        { title: "Recomandăm prevenirea", text: "Propunem măsuri practice când pot reduce repetarea problemei." },
      ],
      primaryCta: "Solicită o reparație",
      secondaryCta: "Începe cu o verificare gratuită",
      secondaryRoute: "healthCheck",
    },
  },
  {
    id: "maintenance",
    routeId: "maintenance",
    enquiry: "maintenance",
    en: {
      eyebrow: "Maintenance and monitoring",
      h1: "Keep your website maintained, monitored and easier to manage.",
      intro:
        "We update the website, keep backups and let you know when the site stops responding.",
      includesTitle: "Care that can be agreed",
      includes: [
        { title: "WordPress updates", text: "Core, theme and plugin updates, on the plan we agree." },
        { title: "Backups", text: "Configuration and verification where the host or plugin supports it." },
        { title: "Availability", text: "We check whether the website is online." },
        { title: "SSL expiry", text: "A check that the certificate is approaching expiry." },
        { title: "Routine security checks", text: "Updates and signs that something needs attention." },
        { title: "Incident notifications", text: "Alerts for the checks that have actually been configured." },
        { title: "Monthly technical summary", text: "A short account of updates, checks and issues in the period." },
        { title: "Planned maintenance", text: "Changes scheduled so they are not a surprise." },
        { title: "Support in the plan", text: "Help for what we agree is included." },
      ],
      primaryCta: "Discuss Website Maintenance",
    },
    ro: {
      eyebrow: "Mentenanță",
      h1: "Menține-ți site-ul actualizat, monitorizat și ușor de administrat.",
      intro:
        "Actualizăm site-ul, păstrăm copii de siguranță și te anunțăm când site-ul nu mai răspunde.",
      includesTitle: "Ce se poate stabili",
      includes: [
        { title: "Actualizări WordPress", text: "Nucleu, temă și module, după planul stabilit împreună." },
        { title: "Copii de siguranță", text: "Configurare și verificare acolo unde găzduirea sau modulul permite." },
        { title: "Disponibilitate", text: "Verificăm dacă site-ul este online." },
        { title: "Expirarea certificatului SSL", text: "O verificare că certificatul se apropie de expirare." },
        { title: "Verificări de securitate de rutină", text: "Actualizări și semne că ceva are nevoie de atenție." },
        { title: "Notificări", text: "Alerte pentru verificările care au fost configurate." },
        { title: "Rezumat tehnic lunar", text: "O prezentare scurtă a actualizărilor, verificărilor și problemelor din perioadă." },
        { title: "Mentenanță planificată", text: "Modificări programate, ca să nu apară pe neașteptate." },
        { title: "Suport în plan", text: "Ajutor pentru ce stabilim că este inclus." },
      ],
      primaryCta: "Solicită o ofertă de mentenanță",
    },
  },
  {
    id: "development",
    routeId: "development",
    enquiry: "development",
    en: {
      eyebrow: "Website development",
      h1: "Websites built around your business needs.",
      intro:
        "Sienaworks can create or improve a business website with attention to usability, maintainability, responsive layouts, SEO foundations and performance.",
      includesTitle: "Projects this can include",
      includes: [
        { title: "Business websites", text: "Sites that explain a service and generate enquiries." },
        { title: "WordPress websites", text: "A maintainable WordPress build when WordPress is the right base." },
        { title: "Landing pages", text: "Focused pages for a campaign or a specific offer." },
        { title: "Redesigns", text: "A clearer structure for a site that no longer fits the business." },
        { title: "WooCommerce", text: "Store development scoped around the catalogue and checkout you need." },
        { title: "Migrations", text: "Moving a site with care for URLs, content and the launch window." },
        { title: "Themes and templates", text: "Custom presentation when an off-the-shelf theme is a poor fit." },
        { title: "Technical SEO", text: "A clear structure, titles, descriptions and addresses that search engines can read." },
        { title: "Analytics and forms", text: "Measurement and enquiry forms, integrated as agreed." },
      ],
      processTitle: "How a build is delivered",
      process: [
        { title: "Discovery", text: "The business goal, the audience and the constraints." },
        { title: "Scope", text: "What will be built, and what is outside the project." },
        { title: "Design direction", text: "A visual and structural direction before production." },
        { title: "Development", text: "The agreed pages and functionality." },
        { title: "Quality checks", text: "Review of the work against the scope." },
        { title: "Launch", text: "The release plan for the agreed site." },
        { title: "Post-launch support", text: "The support we agree for the period after launch." },
      ],
      limitsTitle: "Agreed separately",
      limits: [
        "Writing, photography, hosting and ongoing support are agreed separately, when you need them.",
      ],
      primaryCta: "Discuss Your Website Project",
    },
    ro: {
      eyebrow: "Dezvoltare web",
      h1: "Site-uri construite în funcție de nevoile afacerii tale.",
      intro:
        "Sienaworks poate crea sau îmbunătăți un site de afaceri, cu atenție la utilizare, întreținere, layout adaptat, baze SEO și performanță.",
      includesTitle: "Ce poate include un proiect",
      includes: [
        { title: "Site-uri de prezentare", text: "Site-uri care explică un serviciu și aduc cereri de ofertă." },
        { title: "Site-uri WordPress", text: "O construcție WordPress ușor de întreținut, când WordPress este baza potrivită." },
        { title: "Pagini de destinație", text: "Pagini concentrate pentru o campanie sau o ofertă." },
        { title: "Redesign", text: "O structură mai clară pentru un site care nu mai susține afacerea." },
        { title: "WooCommerce", text: "Dezvoltare de magazin, stabilită în jurul catalogului și al comenzii." },
        { title: "Migrări", text: "Mutarea unui site, cu grijă pentru adrese, conținut și momentul lansării." },
        { title: "Teme și șabloane", text: "Prezentare personalizată când o temă gata făcută nu se potrivește." },
        { title: "SEO tehnic", text: "Structură clară, titluri, descrieri și adrese pe care motoarele de căutare le pot citi." },
        { title: "Analitică și formulare", text: "Măsurare și formulare de contact, integrate cum s-a stabilit." },
      ],
      processTitle: "Cum se livrează",
      process: [
        { title: "Descoperire", text: "Obiectivul afacerii, publicul și constrângerile." },
        { title: "Domeniu", text: "Ce se construiește și ce rămâne în afara proiectului." },
        { title: "Direcție vizuală", text: "O direcție de structură și aspect înainte de producție." },
        { title: "Dezvoltare", text: "Paginile și funcțiile convenite." },
        { title: "Verificări de calitate", text: "Revizia lucrării față de domeniul stabilit." },
        { title: "Lansare", text: "Planul de publicare pentru site-ul convenit." },
        { title: "Suport după lansare", text: "Suportul stabilit pentru perioada de după lansare." },
      ],
      limitsTitle: "Stabilite separat",
      limits: [
        "Textele, fotografiile, găzduirea și suportul continuu se stabilesc separat, când ai nevoie de ele.",
      ],
      primaryCta: "Discută proiectul tău",
    },
  },
  {
    id: "custom",
    routeId: "custom",
    enquiry: "custom",
    en: {
      eyebrow: "Custom development",
      h1: "Custom functionality for the way your business works.",
      intro:
        "When a website or an internal process needs something specific, the work is scoped after the problem and the constraints are understood. The simplest reliable solution is preferred.",
      includesTitle: "Examples of custom work",
      includes: [
        { title: "WordPress plugins and features", text: "Functionality written for the site, rather than stacked from unrelated plugins." },
        { title: "API integrations", text: "Connections to services the business already uses." },
        { title: "Data synchronisation", text: "Moving or matching records between systems on an agreed schedule." },
        { title: "Workflow automation", text: "Removing a repeated manual step when a reliable integration can do it." },
        { title: "AI when it helps", text: "We use it when it is the simplest way to solve a concrete problem." },
        { title: "Internal tools", text: "Small dashboards or tools for a team, scoped as their own project." },
        { title: "Web applications", text: "A custom application when a website plugin is the wrong shape." },
        { title: "Third-party services", text: "Payments, CRM, stock or other services, connected within their limits." },
      ],
      limitsTitle: "How scope is set",
      limits: [
        "Each solution is priced after we understand the problem and the systems you already use.",
      ],
      primaryCta: "Discuss a Custom Solution",
    },
    ro: {
      eyebrow: "Dezvoltare personalizată",
      h1: "Funcționalități personalizate pentru modul în care lucrează afacerea ta.",
      intro:
        "Când un site sau un proces intern are nevoie de ceva specific, lucrarea se stabilește după ce sunt clare problema și constrângerile. Preferăm cea mai simplă soluție fiabilă.",
      includesTitle: "Exemple de lucrări personalizate",
      includes: [
        { title: "Module și funcții WordPress", text: "Funcționalitate scrisă pentru site, nu adăugată din module fără legătură." },
        { title: "Integrări API", text: "Legături cu serviciile pe care afacerea le folosește deja." },
        { title: "Sincronizare de date", text: "Transfer sau potrivire de înregistrări între sisteme, după un program stabilit." },
        { title: "Automatizarea fluxurilor", text: "Scoaterea unui pas manual repetat, când o integrare fiabilă îl poate face." },
        { title: "AI când ajută", text: "Îl folosim când este cea mai simplă cale pentru o problemă concretă." },
        { title: "Unelte interne", text: "Panouri sau unelte mici pentru o echipă, ca proiect separat." },
        { title: "Aplicații web", text: "O aplicație dedicată când un modul de site nu este forma potrivită." },
        { title: "Servicii terțe", text: "Plăți, CRM, stoc sau alte servicii, conectate în limitele lor." },
      ],
      limitsTitle: "Cum se stabilește domeniul",
      limits: [
        "Fiecare soluție se evaluează după ce înțelegem problema și sistemele pe care le folosești deja.",
      ],
      primaryCta: "Discută o soluție personalizată",
    },
  },
];

export function getService(id: ServiceId) {
  const service = serviceList.find((item) => item.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}

export function serviceCopy(id: ServiceId, locale: Locale) {
  const service = getService(id);
  return { ...service, copy: service[locale] };
}
