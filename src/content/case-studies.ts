import type { Locale } from "./types";

export type CaseStudyHighlight = { value: string; label: string };

export type CaseStudyVideo = {
  /** 16:9 file for desktop and wide layouts */
  landscape: { src: string; poster: string };
  /** 9:16 file for phones */
  portrait: { src: string; poster: string };
  /** length in seconds */
  seconds: number;
};

export type CaseStudyImage = { src: string; width: number; height: number; alt: string };

export type CaseStudyCopy = {
  /** card + detail */
  title: string;
  summary: string;
  tags: string[];
  highlights: CaseStudyHighlight[];
  imageAlt: string;
  /** card screenshot for this language, when it differs from `CaseStudy.image` */
  image?: { src: string; width: number; height: number };
  /** labels pinned onto the card screenshot; x and y are % of the image (y defaults to the nav bar, 4.4) */
  pins?: { x: number; y?: number; label: string }[];
  video?: CaseStudyVideo;
  /** detail page */
  domain: string;
  status: string;
  periodLabel: string;
  lead: string;
  /** search result description, up to ~155 characters (the lead is used on the page) */
  seoDescription: string;
  specs: { label: string; value: string }[];
  videoMeta?: string;
  chapters?: string[];
  brief: { title: string; problem: string; solution: string };
  numbers: { value: string; label: string; lead?: boolean }[];
  flow?: {
    /** short note next to the "Under the hood" section label */
    tag: string;
    title: string;
    intro: string;
    rows: { label: string; steps: { title: string; meta: string; kind?: "key" | "ok" }[] }[];
    note: string;
  };
  features?: { label: string; title: string; text: string }[];
  screens?: {
    /** short note next to the "Screens" section label (defaults to "the live site") */
    tag?: string;
    title: string;
    items: (CaseStudyImage & { label: string; caption: string; wide?: boolean })[];
  };
  mobile?: { title: string; intro: string; phones: (CaseStudyImage & { label: string })[]; videoLabel?: string };
  results?: { title: string; intro: string; devices: { name: string; scores: { label: string; value: number }[] }[] };
  stack: string[];
  /** short facts for the homepage work-order card */
  card: { label: string; value: string }[];
};

export type CaseStudy = {
  slug: string;
  published: boolean;
  permission: "approved" | "draft";
  featured?: boolean;
  /** running number on the "work order" ("Nr. 001") */
  number: number;
  client: string;
  /** part of the client name to highlight in the page title (defaults to the last word) */
  nameMark?: string;
  website?: string;
  /** e.g. "2022" */
  period?: string;
  image?: { src: string; width: number; height: number };
  copy: Record<Locale, CaseStudyCopy>;
};

/** Images live in /images/case-studies/<slug>/ */
const imagesOf =
  (slug: string) =>
  (name: string, width: number, height: number, alt: string): CaseStudyImage => ({
    src: `/images/case-studies/${slug}/${name}`,
    width,
    height,
    alt,
  });

/** Videos live in /videos/case-studies/<slug>/<slug>-<lang>-16x9.mp4 (+ 9x16, + -poster.jpg) */
const videoOf = (slug: string, lang: Locale, seconds: number): CaseStudyVideo => {
  const base = `/videos/case-studies/${slug}/${slug}-${lang}`;
  return {
    landscape: { src: `${base}-16x9.mp4`, poster: `${base}-16x9-poster.jpg` },
    portrait: { src: `${base}-9x16.mp4`, poster: `${base}-9x16-poster.jpg` },
    seconds,
  };
};

const img = imagesOf("abcrypto");
const vid = (lang: Locale, seconds: number) => videoOf("abcrypto", lang, seconds);
const mp = imagesOf("montarepanouri");
const sv = imagesOf("simplevids");

export const caseStudies: CaseStudy[] = [
  {
    slug: "abcrypto",
    published: true,
    permission: "approved",
    featured: true,
    number: 1,
    client: "ABCrypto Romania",
    website: "https://abcryptoromania.com/",
    period: "2022",
    image: { src: "/images/case-studies/abcrypto/home-desktop.jpg", width: 2880, height: 1800 },
    copy: {
      en: {
        title: "A crypto education platform with paid memberships and trading tools",
        summary:
          "Member accounts, recurring Stripe subscriptions, automatic Discord roles and exchange checks, plus three trading tools built from scratch. All on WordPress, with custom code where it matters.",
        tags: ["WordPress", "Subscriptions", "API integration"],
        highlights: [
          { value: "100+", label: "active paid subscriptions" },
          { value: "3", label: "trading tools built from scratch" },
          { value: "2022", label: "working together since" },
        ],
        imageAlt: "ABCrypto Romania homepage: crypto education platform with club, trading tools and member accounts",
        pins: [
          { x: 50, label: "Stripe subscriptions" },
          { x: 64.8, label: "3 custom tools" },
          { x: 89.5, label: "Member accounts" },
        ],
        video: vid("en", 63),
        domain: "Crypto education",
        status: "In progress",
        periodLabel: "2022 – present",
        lead:
          "A membership platform for a Romanian crypto education community: a custom WordPress theme, paid subscriptions, automatic Discord access and exchange affiliate checks, all built from scratch.",
        seoDescription:
          "WordPress membership platform for ABCrypto Romania: Stripe subscriptions, automatic Discord roles, exchange API checks and three custom trading tools.",
        specs: [
          { label: "Role", value: "Architecture, design, front end, back end" },
          { label: "Platform", value: "WordPress, custom theme and plugins" },
          { label: "Payments", value: "Stripe subscriptions in RON" },
          { label: "Integrations", value: "Discord · OKX · Bybit · WEEX" },
          { label: "Since", value: "2022, ongoing" },
        ],
        videoMeta: "63 s · English narration · captioned",
        chapters: ["The platform", "On phones", "Club · Stripe", "Under the hood", "Member tools", "Numbers · PageSpeed"],
        brief: {
          title: "One home for two communities.",
          problem:
            "ABCrypto Romania runs a YouTube channel, a free community (Hub) and a paid one (Club). Members, payments, Discord roles and exchange referrals were managed by hand, and the old site didn't explain how the pieces fit together.",
          solution:
            "A full redesign with a clear path into each community, plus the systems behind it. A subscription unlocks the Club and its Discord role. Signing up through a partner exchange unlocks the Hub, checked on the server against the exchange's API. Members also get trading tools.",
        },
        numbers: [
          { value: "100+", label: "active paid subscriptions", lead: true },
          { value: "100s", label: "of verified exchange affiliates", lead: true },
          { value: "13", label: "custom page templates" },
          { value: "~19k", label: "lines of custom PHP, JS and CSS" },
          { value: "3+1", label: "exchange APIs live, one ready" },
          { value: "0", label: "page builders: all hand-written" },
        ],
        flow: {
          tag: "automatic access",
          title: "How someone becomes a member.",
          intro:
            "Two ways in, both automatic. Nobody grants access or Discord roles by hand, and a lapsed subscription removes access by itself.",
          rows: [
            {
              label: "Club · paid",
              steps: [
                { title: "Stripe checkout", meta: "4 plans · RON" },
                { title: "Webhook", meta: "paid · past due · cancelled" },
                { title: "Access rules", meta: "subscription or manual", kind: "key" },
                { title: "Discord API", meta: "assign / remove role", kind: "ok" },
              ],
            },
            {
              label: "Hub · via partner exchange",
              steps: [
                { title: "Exchange UID", meta: "entered by the member" },
                { title: "Adapters", meta: "OKX · Bybit · WEEX · BingX" },
                { title: "Verification", meta: "affiliate? 30-day volume", kind: "key" },
                { title: "Hub access + role", meta: "verified · pending", kind: "ok" },
              ],
            },
          ],
          note: "↻ Scheduled re-check (cron) · automatic retries on Discord rate limits",
        },
        features: [
          { label: "Plugin · Affiliates", title: "Exchange checks behind one interface", text: "Every exchange is an adapter with the same contract. Adding one means one new class and a setting, with no changes anywhere else." },
          { label: "Plugin · Discord", title: "Roles that follow the subscription", text: "Paying members get the Club role and lose it when they stop paying. A member who cancels keeps access until the paid period ends." },
          { label: "Payments", title: "Stripe subscriptions in RON", text: "Four plans, with webhooks for renewals, failed payments and cancellations. Members manage their own card and subscription." },
          { label: "Security", title: "Hardened by default", text: "Sign-in at a hidden address, rate limits, password rules, and secrets kept outside the theme." },
        ],
        screens: {
          title: "From the first visit to the right community.",
          items: [
            { ...img("pricing.jpg", 1440, 690, "Four subscription plans: monthly 179 lei, 3 months 499 lei, 6 months 949 lei, 12 months 1,799 lei recommended"), label: "A · Club", caption: "Four Stripe plans. Each card shows its savings, and the yearly plan is highlighted.", wide: true },
            { ...img("ecosystem.jpg", 1440, 810, "Ecosystem section comparing ABCrypto Hub and the premium ABCrypto Club"), label: "B · Ecosystem", caption: "Hub and Club as two clear choices, the premium tier marked." },
            { ...img("hub-access.jpg", 1440, 870, "How to get Hub access: open an account at WEEX, OKX or Bybit through ABCrypto"), label: "C · Hub access", caption: "One card per exchange, each with its conditions." },
            { ...img("tools.jpg", 1440, 1000, "Trading tools page with calculator, journal and simulator cards"), label: "D · Tools", caption: "Risk calculator, portfolio simulator and trading journal, with their own REST API.", wide: true },
          ],
        },
        mobile: {
          title: "Most visitors arrive from YouTube and Discord, on a phone.",
          intro:
            "Every section was checked at phone, tablet and desktop widths, so the whole path, from the first visit to a paid plan, works on a phone.",
          phones: [
            { ...img("home-m-hero.jpg", 780, 1688, "Homepage on a phone"), label: "Home" },
            { ...img("club-m-hero.jpg", 780, 1688, "Club page on a phone"), label: "Club" },
            { ...img("hub-m-hero.jpg", 780, 1688, "Hub page on a phone"), label: "Hub" },
          ],
          videoLabel: "▶ Vertical video · 63 s",
        },
        results: {
          title: "Fast on any screen.",
          intro: "Measured with Google PageSpeed Insights (Lighthouse 13.6) on the homepage, on 21 November 2026.",
          devices: [
            { name: "Desktop", scores: [{ label: "Performance", value: 99 }, { label: "Accessibility", value: 100 }, { label: "Best practices", value: 100 }, { label: "SEO", value: 92 }] },
            { name: "Mobile", scores: [{ label: "Performance", value: 81 }, { label: "Accessibility", value: 100 }, { label: "Best practices", value: 100 }, { label: "SEO", value: 92 }] },
          ],
        },
        stack: ["WordPress", "PHP", "JavaScript", "WP REST API", "Stripe Billing", "Discord API", "OKX · Bybit · WEEX API", "WP-Cron", "YouTube Data API"],
        card: [
          { label: "Work", value: "WordPress platform with subscriptions" },
          { label: "Stack", value: "WordPress · PHP · Stripe · Discord · APIs" },
          { label: "Since", value: "2022, ongoing" },
        ],
      },
      ro: {
        title: "Platformă de educație crypto cu abonamente plătite și instrumente de trading",
        summary:
          "Conturi de membru, abonamente recurente prin Stripe, roluri Discord automate și verificări prin exchange-uri, plus trei instrumente de trading construite de la zero. Totul pe WordPress, cu cod propriu acolo unde contează.",
        tags: ["WordPress", "Abonamente", "Integrare API"],
        highlights: [
          { value: "100+", label: "abonamente plătite active" },
          { value: "3", label: "instrumente de trading construite de la zero" },
          { value: "2022", label: "colaborăm din" },
        ],
        imageAlt: "Pagina principală ABCrypto Romania: platformă de educație crypto cu club, instrumente de trading și conturi de membru",
        pins: [
          { x: 50, label: "Abonamente Stripe" },
          { x: 64.8, label: "3 instrumente proprii" },
          { x: 89.5, label: "Conturi de membru" },
        ],
        video: vid("ro", 66),
        domain: "Educație crypto",
        status: "În desfășurare",
        periodLabel: "2022 – prezent",
        lead:
          "O platformă de membership pentru o comunitate românească de educație crypto: temă WordPress proprie, abonamente plătite, acces automat pe Discord și verificarea afiliaților prin exchange-uri, construite de la zero.",
        seoDescription:
          "Platformă WordPress pentru ABCrypto Romania: abonamente Stripe, roluri Discord automate, verificări prin API-uri de exchange și trei instrumente de trading.",
        specs: [
          { label: "Rol", value: "Arhitectură, design, front-end, back-end" },
          { label: "Platformă", value: "WordPress, temă și module proprii" },
          { label: "Plăți", value: "Abonamente Stripe, în lei" },
          { label: "Integrări", value: "Discord · OKX · Bybit · WEEX" },
          { label: "Colaborare", value: "Din 2022, în desfășurare" },
        ],
        videoMeta: "66 s · narațiune în română · subtitrat",
        chapters: ["Platforma", "Pe telefon", "Club · Stripe", "Sub capotă", "Instrumente", "Cifre · PageSpeed"],
        brief: {
          title: "O casă pentru două comunități.",
          problem:
            "ABCrypto Romania are un canal de YouTube, o comunitate gratuită (Hub) și una plătită (Club). Membrii, plățile, rolurile de Discord și recomandările de la exchange-uri erau gestionate manual, iar vechiul site nu explica cum se leagă toate.",
          solution:
            "Un redesign complet, cu un drum clar spre fiecare comunitate, plus sistemele din spate. Abonamentul deblochează Clubul și rolul de Discord. Înscrierea printr-un exchange partener deblochează Hub-ul, verificată pe server în API-ul exchange-ului. Membrii primesc și instrumente de trading.",
        },
        numbers: [
          { value: "100+", label: "abonamente plătite active", lead: true },
          { value: "Sute", label: "de afiliați verificați prin exchange-uri", lead: true },
          { value: "13", label: "template-uri de pagină proprii" },
          { value: "~19k", label: "linii de cod propriu, PHP, JS și CSS" },
          { value: "3+1", label: "API-uri de exchange live, unul pregătit" },
          { value: "0", label: "page builder-e: totul scris de mână" },
        ],
        flow: {
          tag: "acces automat",
          title: "Cum devine cineva membru.",
          intro:
            "Două drumuri, ambele automate. Nimeni nu dă acces sau roluri de Discord manual, iar un abonament expirat retrage accesul singur.",
          rows: [
            {
              label: "Club · plătit",
              steps: [
                { title: "Stripe checkout", meta: "4 planuri · lei" },
                { title: "Webhook", meta: "plătit · restant · anulat" },
                { title: "Reguli de acces", meta: "abonament sau manual", kind: "key" },
                { title: "Discord API", meta: "dă / retrage rolul", kind: "ok" },
              ],
            },
            {
              label: "Hub · prin exchange partener",
              steps: [
                { title: "UID exchange", meta: "introdus de membru" },
                { title: "Adaptoare", meta: "OKX · Bybit · WEEX · BingX" },
                { title: "Verificare", meta: "afiliat? volum 30 zile", kind: "key" },
                { title: "Acces Hub + rol", meta: "verificat · în așteptare", kind: "ok" },
              ],
            },
          ],
          note: "↻ Re-verificare programată (cron) · retrimitere automată la limitele Discord",
        },
        features: [
          { label: "Modul · Afiliați", title: "Verificare prin exchange-uri, după o singură interfață", text: "Fiecare exchange e un adaptor cu același contract. Un exchange nou înseamnă o clasă nouă și o setare, fără alte modificări." },
          { label: "Modul · Discord", title: "Roluri care urmează abonamentul", text: "Cine plătește primește rolul Club, cine nu mai plătește îl pierde. Cine anulează păstrează accesul până la finalul perioadei plătite." },
          { label: "Plăți", title: "Abonamente Stripe în lei", text: "Patru planuri, cu webhook-uri pentru reînnoiri, plăți eșuate și anulări. Membrii își gestionează singuri cardul și abonamentul." },
          { label: "Securitate", title: "Protejat din start", text: "Autentificare la o adresă ascunsă, limite de încercări, reguli de parolă, secrete în afara temei." },
        ],
        screens: {
          title: "De la prima vizită la comunitatea potrivită.",
          items: [
            { ...img("pricing.jpg", 1440, 690, "Patru planuri de abonament: lunar 179 lei, 3 luni 499 lei, 6 luni 949 lei, 12 luni 1.799 lei recomandat"), label: "A · Club", caption: "Patru planuri Stripe. Fiecare card arată economia, iar planul anual e evidențiat.", wide: true },
            { ...img("ecosystem.jpg", 1440, 810, "Secțiunea ecosistem: ABCrypto Hub și ABCrypto Club, una lângă alta"), label: "B · Ecosistem", caption: "Hub și Club, două alegeri clare, cu nivelul premium marcat." },
            { ...img("hub-access.jpg", 1440, 870, "Cum obții acces la Hub: cont la WEEX, OKX sau Bybit prin ABCrypto"), label: "C · Acces Hub", caption: "Câte un card pentru fiecare exchange, cu condițiile lui." },
            { ...img("tools.jpg", 1440, 1000, "Pagina de instrumente: calculator, jurnal și simulator de trading"), label: "D · Instrumente", caption: "Calculator de risc, simulator de portofoliu și jurnal de trading, cu propriul API REST.", wide: true },
          ],
        },
        mobile: {
          title: "Majoritatea vin de pe YouTube și Discord, pe telefon.",
          intro:
            "Fiecare secțiune a fost verificată pe telefon, tabletă și desktop, astfel încât tot drumul, de la prima vizită până la abonamentul plătit, funcționează pe telefon.",
          phones: [
            { ...img("home-m-hero.jpg", 780, 1688, "Pagina principală pe telefon"), label: "Acasă" },
            { ...img("club-m-hero.jpg", 780, 1688, "Pagina Club pe telefon"), label: "Club" },
            { ...img("hub-m-hero.jpg", 780, 1688, "Pagina Hub pe telefon"), label: "Hub" },
          ],
          videoLabel: "▶ Video vertical · 66 s",
        },
        results: {
          title: "Rapid pe orice ecran.",
          intro: "Măsurat cu Google PageSpeed Insights (Lighthouse 13.6), pe pagina principală, pe 21 noiembrie 2026.",
          devices: [
            { name: "Desktop", scores: [{ label: "Performanță", value: 99 }, { label: "Accesibilitate", value: 100 }, { label: "Bune practici", value: 100 }, { label: "SEO", value: 92 }] },
            { name: "Mobil", scores: [{ label: "Performanță", value: 81 }, { label: "Accesibilitate", value: 100 }, { label: "Bune practici", value: 100 }, { label: "SEO", value: 92 }] },
          ],
        },
        stack: ["WordPress", "PHP", "JavaScript", "WP REST API", "Stripe Billing", "Discord API", "OKX · Bybit · WEEX API", "WP-Cron", "YouTube Data API"],
        card: [
          { label: "Lucrare", value: "Platformă WordPress cu abonamente" },
          { label: "Tehnologii", value: "WordPress · PHP · Stripe · Discord · API" },
          { label: "Colaborare", value: "Din 2022, în desfășurare" },
        ],
      },
    },
  },
  {
    slug: "montarepanouri",
    published: true,
    permission: "approved",
    number: 2,
    client: "MontarePanouri.ro",
    nameMark: "Panouri",
    website: "https://montarepanouri.ro/",
    period: "2026",
    image: { src: "/images/case-studies/montarepanouri/home-d-hero.jpg", width: 1440, height: 900 },
    copy: {
      en: {
        title: "A lead-generation website for a solar panel and battery installer",
        summary:
          "A fast site built for local search, for an installer in western Romania. Five quote forms feed one validated API that emails the team, and analytics and ad tracking wait for cookie consent.",
        tags: ["Next.js", "Lead generation", "Local SEO"],
        highlights: [
          { value: "100", label: "PageSpeed performance on desktop" },
          { value: "5", label: "quote forms, one API endpoint" },
          { value: "0", label: "tracking cookies before consent" },
        ],
        imageAlt: "MontarePanouri.ro homepage: headline “Montaj Panouri Solare & Baterii la Cheie”, a photo of an inverter display and a quick estimate form",
        pins: [
          { x: 10.4, y: 2, label: "Click-to-call" },
          { x: 60.1, y: 8.1, label: "Blog · local SEO" },
          { x: 87.8, y: 8.1, label: "5-step quote form" },
        ],
        video: videoOf("montarepanouri", "en", 68),
        domain: "Solar energy · local services",
        status: "Delivered · live",
        periodLabel: "2026",
        lead:
          "A lead-generation website for a solar panel and battery installer in western Romania: fast, ready for local search, and built so every visit has a short path to a quote request.",
        seoDescription:
          "Next.js lead-generation site for a solar installer in western Romania: five quote forms on one API, consent-based tracking, local SEO, live in under 10 days.",
        specs: [
          { label: "Role", value: "Architecture, design, front end, back end" },
          { label: "Stack", value: "Next.js 16, React 19, TypeScript, Tailwind CSS 4" },
          { label: "Leads", value: "5 forms → one API → email to the team" },
          { label: "Tracking", value: "GA4 + Google Ads, only after consent" },
          { label: "Built in", value: "Under 10 days, 2026" },
        ],
        videoMeta: "68 s · English narration · captioned",
        chapters: ["The site", "Quote form", "Under the hood", "Local SEO", "On phones", "Numbers · PageSpeed"],
        brief: {
          title: "Turn local searches into quote requests.",
          problem:
            "A new installer of solar panels and battery storage needed to be found by homeowners in Arad, Timișoara and the rest of western Romania, and to look trustworthy from the first visit. Leads had to reach the team quickly, and paid ads needed reliable conversion tracking without breaking GDPR rules.",
          solution:
            "A full site in Next.js: services, a filterable gallery of real installations, a blog, and five quote forms placed where visitors make decisions. Every form posts to one validated API route that emails the lead. Analytics and ad tracking load only after cookie consent, and every page ships structured data for local search.",
        },
        numbers: [
          { value: "<10", label: "days from the first page to the live site", lead: true },
          { value: "5", label: "quote forms, all sent through one API endpoint", lead: true },
          { value: "0", label: "tracking cookies before the visitor agrees" },
          { value: "17", label: "indexable pages in the generated sitemap" },
          { value: "~5.4k", label: "lines of TypeScript and CSS" },
          { value: "9", label: "JSON content files behind pages, schema and sitemap" },
        ],
        flow: {
          tag: "leads + tracking",
          title: "From a form to the installer’s inbox.",
          intro:
            "Five forms, one path. The server checks and trims every field before the email goes out, and a conversion is recorded only for visitors who accepted tracking.",
          rows: [
            {
              label: "Leads · every form",
              steps: [
                { title: "5 quote forms", meta: "hero · modal · 5 steps · long · contact" },
                { title: "submitContact()", meta: "tags the source form" },
                { title: "POST /api/contact", meta: "validates every field", kind: "key" },
                { title: "SMTP email", meta: "lead in the team’s inbox", kind: "ok" },
              ],
            },
            {
              label: "Tracking · only after consent",
              steps: [
                { title: "Cookie banner", meta: "the visitor’s choice, stored" },
                { title: "Consent check", meta: "analytics accepted?", kind: "key" },
                { title: "Google Analytics 4", meta: "lead event" },
                { title: "Google Ads", meta: "counted as a conversion", kind: "ok" },
              ],
            },
            {
              label: "Content · local SEO",
              steps: [
                { title: "9 JSON files", meta: "services · blog · FAQ" },
                { title: "App Router", meta: "static pages + metadata", kind: "key" },
                { title: "JSON-LD", meta: "LocalBusiness · FAQ · Service" },
                { title: "Sitemap + llms.txt", meta: "robots · breadcrumbs", kind: "ok" },
              ],
            },
          ],
          note: "✓ No tracking cookies before consent · SMTP credentials kept in environment variables",
        },
        features: [
          { label: "Back end · Leads", title: "One endpoint for every form", text: "All five forms share one submit helper and one route handler. The server requires name and phone, trims and caps every field, then emails the lead with the form it came from." },
          { label: "Privacy · Tracking", title: "Analytics that wait for consent", text: "A custom cookie banner stores the visitor’s choice. GA4, and the lead event Google Ads counts as a conversion, load only after the visitor agrees." },
          { label: "Local SEO", title: "Structured data on every page", text: "LocalBusiness with opening hours and cities served, FAQPage, Service and BlogPosting schema, breadcrumbs, a generated sitemap and an llms.txt." },
          { label: "Conversion", title: "The team is one tap away", text: "A sticky quote button, a floating WhatsApp button, click-to-call numbers and a quote form next to every service page and article." },
        ],
        screens: {
          title: "Trust first, then a short path to a quote.",
          items: [
            { ...mp("step1.jpg", 1100, 674, "Quote form, step 1 of 5: choose the property type"), label: "A · Quote form", caption: "One question per step, contact details last, with a progress bar." },
            { ...mp("post.jpg", 1400, 875, "Blog article with a quick quote form in the sidebar"), label: "B · Article", caption: "Practical guides for long-tail searches, each with a quote form beside it." },
            { ...mp("svc-hero.jpg", 1400, 576, "Batteries and storage service page header with key specs and a request button"), label: "C · Service page", caption: "Every service has its own page, metadata and Service schema, with the key specs up front.", wide: true },
            { ...mp("services.jpg", 1400, 1577, "Four service cards: residential solar, batteries and storage, large roofs, technical diagnostics"), label: "D · Services", caption: "Four service cards on the homepage, each linking to its own page." },
            { ...mp("gallery.jpg", 1400, 1471, "Gallery of real installations with filters for rooftop panels and battery storage"), label: "E · Gallery", caption: "Real installation photos, filtered by type, with a full-screen viewer." },
          ],
        },
        mobile: {
          title: "Built for the phone in a homeowner’s hand.",
          intro:
            "Most visitors come from Google searches and ads on their phones, so the call button, the quote form and WhatsApp are always one tap away.",
          phones: [
            { ...mp("home-m-hero.jpg", 780, 1688, "Homepage on a phone"), label: "Home" },
            { ...mp("svc-m-hero.jpg", 780, 1688, "Batteries service page on a phone"), label: "Service" },
            { ...mp("oferta-m-hero.jpg", 780, 1688, "Quote request page on a phone"), label: "Quote" },
          ],
          videoLabel: "▶ Vertical video · 68 s",
        },
        results: {
          title: "A perfect 100 on desktop.",
          intro: "Measured with Google PageSpeed Insights (Lighthouse 13.6) on the homepage, on 21 November 2026.",
          devices: [
            { name: "Desktop", scores: [{ label: "Performance", value: 100 }, { label: "Accessibility", value: 97 }, { label: "Best practices", value: 100 }, { label: "SEO", value: 100 }] },
            { name: "Mobile", scores: [{ label: "Performance", value: 95 }, { label: "Accessibility", value: 93 }, { label: "Best practices", value: 100 }, { label: "SEO", value: 100 }] },
          ],
        },
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Route Handlers", "Nodemailer · SMTP", "Google Analytics 4", "Google Ads", "JSON-LD"],
        card: [
          { label: "Work", value: "Lead-generation site, built from scratch" },
          { label: "Stack", value: "Next.js · React · TypeScript · Tailwind" },
          { label: "Built in", value: "Under 10 days, live" },
        ],
      },
      ro: {
        title: "Site de generare de lead-uri pentru o firmă de montaj panouri solare și baterii",
        summary:
          "Un site rapid, gândit pentru căutările locale, pentru o firmă de montaj din vestul României. Cinci formulare de ofertă trimit într-un singur API validat, care trimite cererea pe e-mail echipei, iar statisticile și urmărirea reclamelor pornesc doar după acordul pentru cookie-uri.",
        tags: ["Next.js", "Generare de lead-uri", "SEO local"],
        highlights: [
          { value: "100", label: "scor PageSpeed de performanță pe desktop" },
          { value: "5", label: "formulare de ofertă, un singur API" },
          { value: "0", label: "cookie-uri de urmărire înainte de acord" },
        ],
        imageAlt: "Pagina principală MontarePanouri.ro: titlul „Montaj Panouri Solare & Baterii la Cheie”, fotografia unui invertor și un formular de estimare rapidă",
        pins: [
          { x: 10.4, y: 2, label: "Apel direct" },
          { x: 60.1, y: 8.1, label: "Blog · SEO local" },
          { x: 87.8, y: 8.1, label: "Formular în 5 pași" },
        ],
        video: videoOf("montarepanouri", "ro", 77),
        domain: "Energie solară · servicii locale",
        status: "Livrat · online",
        periodLabel: "2026",
        lead:
          "Un site de generare de lead-uri pentru o firmă de montaj panouri solare și baterii din vestul României: rapid, pregătit pentru căutările locale și construit astfel încât din orice pagină să fie un drum scurt până la o cerere de ofertă.",
        seoDescription:
          "Site Next.js de lead-uri pentru o firmă de panouri solare din vest: cinci formulare pe un singur API, tracking cu acord, SEO local, online în sub 10 zile.",
        specs: [
          { label: "Rol", value: "Arhitectură, design, front-end, back-end" },
          { label: "Tehnologii", value: "Next.js 16, React 19, TypeScript, Tailwind CSS 4" },
          { label: "Lead-uri", value: "5 formulare → un API → e-mail la echipă" },
          { label: "Urmărire", value: "GA4 + Google Ads, doar după acord" },
          { label: "Realizat în", value: "Sub 10 zile, 2026" },
        ],
        videoMeta: "77 s · narațiune în română · subtitrat",
        chapters: ["Site-ul", "Cere ofertă", "Sub capotă", "SEO local", "Pe telefon", "Cifre · PageSpeed"],
        brief: {
          title: "Căutările locale transformate în cereri de ofertă.",
          problem:
            "O firmă nouă de montaj panouri solare și baterii de stocare trebuia să fie găsită de proprietarii de case din Arad, Timișoara și restul vestului țării și să inspire încredere de la prima vizită. Cererile trebuiau să ajungă repede la echipă, iar reclamele plătite aveau nevoie de o măsurare corectă a conversiilor, fără să încalce regulile GDPR.",
          solution:
            "Un site complet în Next.js: servicii, o galerie filtrabilă cu lucrări reale, un blog și cinci formulare de ofertă puse acolo unde vizitatorul ia decizii. Fiecare formular trimite într-o singură rută API validată, care trimite cererea pe e-mail. Statisticile și urmărirea reclamelor se încarcă doar după acordul pentru cookie-uri, iar fiecare pagină are date structurate pentru căutările locale.",
        },
        numbers: [
          { value: "<10", label: "zile de la prima pagină la site-ul online", lead: true },
          { value: "5", label: "formulare de ofertă, toate printr-un singur API", lead: true },
          { value: "0", label: "cookie-uri de urmărire înainte de acordul vizitatorului" },
          { value: "17", label: "pagini indexabile în sitemap-ul generat" },
          { value: "~5,4k", label: "linii de TypeScript și CSS" },
          { value: "9", label: "fișiere JSON din care se generează paginile, schema și sitemap-ul" },
        ],
        flow: {
          tag: "lead-uri + urmărire",
          title: "De la formular la e-mailul echipei.",
          intro:
            "Cinci formulare, un singur drum. Serverul verifică și curăță fiecare câmp înainte să plece e-mailul, iar conversia se înregistrează doar pentru vizitatorii care au acceptat urmărirea.",
          rows: [
            {
              label: "Lead-uri · orice formular",
              steps: [
                { title: "5 formulare", meta: "hero · modal · 5 pași · extins · contact" },
                { title: "submitContact()", meta: "marchează formularul sursă" },
                { title: "POST /api/contact", meta: "validează fiecare câmp", kind: "key" },
                { title: "E-mail SMTP", meta: "cererea ajunge la echipă", kind: "ok" },
              ],
            },
            {
              label: "Urmărire · doar după acord",
              steps: [
                { title: "Banner cookie-uri", meta: "alegerea vizitatorului, salvată" },
                { title: "Verificare acord", meta: "a acceptat statisticile?", kind: "key" },
                { title: "Google Analytics 4", meta: "eveniment de lead" },
                { title: "Google Ads", meta: "numărat drept conversie", kind: "ok" },
              ],
            },
            {
              label: "Conținut · SEO local",
              steps: [
                { title: "9 fișiere JSON", meta: "servicii · blog · întrebări" },
                { title: "App Router", meta: "pagini statice + metadate", kind: "key" },
                { title: "JSON-LD", meta: "LocalBusiness · FAQ · Service" },
                { title: "Sitemap + llms.txt", meta: "robots · breadcrumbs", kind: "ok" },
              ],
            },
          ],
          note: "✓ Zero cookie-uri de urmărire înainte de acord · datele SMTP stau în variabile de mediu",
        },
        features: [
          { label: "Back-end · Lead-uri", title: "Un singur API pentru toate formularele", text: "Cele cinci formulare folosesc aceeași funcție de trimitere și aceeași rută. Serverul cere nume și telefon, curăță și limitează fiecare câmp, apoi trimite cererea pe e-mail, cu formularul din care a venit." },
          { label: "Confidențialitate", title: "Statistici care așteaptă acordul", text: "Un banner de cookie-uri propriu salvează alegerea vizitatorului. GA4 și evenimentul de lead pe care Google Ads îl numără drept conversie pornesc doar după acord." },
          { label: "SEO local", title: "Date structurate pe fiecare pagină", text: "LocalBusiness cu program și orașele deservite, FAQPage, Service și BlogPosting, breadcrumbs, sitemap generat și un fișier llms.txt." },
          { label: "Conversie", title: "Echipa e la o atingere distanță", text: "Buton de ofertă mereu vizibil în header, buton WhatsApp, numere de telefon pe care apeși ca să suni și formular de ofertă lângă fiecare serviciu și articol." },
        ],
        screens: {
          title: "Întâi încrederea, apoi un drum scurt până la ofertă.",
          items: [
            { ...mp("step1.jpg", 1100, 674, "Formularul de ofertă, pasul 1 din 5: tipul proprietății"), label: "A · Cere ofertă", caption: "O întrebare pe pas, datele de contact la final, cu bară de progres." },
            { ...mp("post.jpg", 1400, 875, "Articol de blog cu formular rapid de ofertă în lateral"), label: "B · Articol", caption: "Ghiduri practice pentru căutări specifice, fiecare cu formular de ofertă alături." },
            { ...mp("svc-hero.jpg", 1400, 576, "Antetul paginii de serviciu pentru baterii și stocare, cu specificații și buton de cerere"), label: "C · Serviciu", caption: "Fiecare serviciu are pagina lui, cu metadate și schema Service, cu specificațiile cheie la vedere.", wide: true },
            { ...mp("services.jpg", 1400, 1577, "Patru carduri de servicii: solar rezidențial, baterii și stocare, acoperișuri mari, diagnoză tehnică"), label: "D · Servicii", caption: "Patru carduri de servicii pe prima pagină, fiecare cu pagina lui." },
            { ...mp("gallery.jpg", 1400, 1471, "Galerie cu lucrări reale, filtre pentru panouri pe acoperiș și baterii de stocare"), label: "E · Galerie", caption: "Fotografii reale din lucrări, filtrate pe tip, cu vizualizare pe tot ecranul." },
          ],
        },
        mobile: {
          title: "Gândit pentru telefonul din mâna proprietarului.",
          intro:
            "Majoritatea vizitatorilor vin din căutări Google și din reclame, pe telefon, așa că butonul de apel, formularul de ofertă și WhatsApp sunt mereu la o atingere distanță.",
          phones: [
            { ...mp("home-m-hero.jpg", 780, 1688, "Pagina principală pe telefon"), label: "Acasă" },
            { ...mp("svc-m-hero.jpg", 780, 1688, "Pagina de serviciu pentru baterii pe telefon"), label: "Serviciu" },
            { ...mp("oferta-m-hero.jpg", 780, 1688, "Pagina de cerere de ofertă pe telefon"), label: "Ofertă" },
          ],
          videoLabel: "▶ Video vertical · 77 s",
        },
        results: {
          title: "Scor perfect, 100, pe desktop.",
          intro: "Măsurat cu Google PageSpeed Insights (Lighthouse 13.6), pe pagina principală, pe 21 noiembrie 2026.",
          devices: [
            { name: "Desktop", scores: [{ label: "Performanță", value: 100 }, { label: "Accesibilitate", value: 97 }, { label: "Bune practici", value: 100 }, { label: "SEO", value: 100 }] },
            { name: "Mobil", scores: [{ label: "Performanță", value: 95 }, { label: "Accesibilitate", value: 93 }, { label: "Bune practici", value: 100 }, { label: "SEO", value: 100 }] },
          ],
        },
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Route Handlers", "Nodemailer · SMTP", "Google Analytics 4", "Google Ads", "JSON-LD"],
        card: [
          { label: "Lucrare", value: "Site de lead-uri, construit de la zero" },
          { label: "Tehnologii", value: "Next.js · React · TypeScript · Tailwind" },
          { label: "Realizat în", value: "Sub 10 zile, online" },
        ],
      },
    },
  },
  {
    slug: "simplevids",
    published: true,
    permission: "approved",
    number: 3,
    client: "SimpleVids",
    website: "https://www.simplevids.ai/",
    period: "2025",
    image: { src: "/images/case-studies/simplevids/home-desktop.jpg", width: 1440, height: 1000 },
    copy: {
      en: {
        title: "An AI video SaaS that writes, renders and posts TikToks and Shorts",
        summary:
          "Creators type a script or a short brief and get a finished vertical video, with voiceover, visuals and captions, published to TikTok and YouTube now or on a schedule.",
        tags: ["Next.js", "SaaS", "AI · API integrations"],
        highlights: [
          { value: "2", label: "platforms it publishes to automatically" },
          { value: "40", label: "API routes behind the dashboard" },
        ],
        imageAlt: "SimpleVids landing page: “Create scroll-stopping TikToks & Shorts in seconds”, with example vertical videos",
        pins: [
          { x: 40.6, y: 3.2, label: "AI stills + avatars" },
          { x: 46.7, y: 3.2, label: "Stripe credits" },
          { x: 89, y: 3.2, label: "TikTok + YouTube" },
        ],
        domain: "AI video · SaaS",
        status: "Live",
        periodLabel: "2025 – 2026",
        lead:
          "A SaaS for faceless TikTok and YouTube Shorts channels: a script or a short brief becomes a finished vertical video, with voiceover, stock clips or AI stills, burned-in captions and music, then gets published automatically.",
        seoDescription:
          "SimpleVids, an AI video SaaS: a script becomes a vertical video with voiceover and captions, published to TikTok and YouTube. Built with Next.js and Stripe.",
        specs: [
          { label: "Role", value: "Architecture, design, front end, back end" },
          { label: "Product", value: "Script → voiceover → video → TikTok + YouTube" },
          { label: "Stack", value: "Next.js 16, TypeScript, Prisma, PostgreSQL, Stripe" },
          { label: "AI + media", value: "OpenAI · fal.ai Flux · Soniox · FFmpeg" },
          { label: "Publishing", value: "TikTok + YouTube, now or scheduled" },
        ],
        brief: {
          title: "From an idea to a posted Short, without an editor.",
          problem:
            "People who run faceless TikTok and Shorts channels spend hours on every video: writing, finding clips, recording a voiceover, captioning, exporting in the right size and uploading to each app. Posting every day, which the algorithms reward, is hard to keep up by hand.",
          solution:
            "A dashboard that does the whole chain. The script comes from the creator or from AI, the voiceover from text-to-speech, the visuals from stock libraries or AI-generated stills, and captions are aligned word by word. The finished video goes to TikTok and YouTube now or at a set time, and paid plans run on monthly credits.",
        },
        numbers: [
          { value: "2", label: "platforms it publishes to: TikTok and YouTube", lead: true },
          { value: "2", label: "video modes: stock footage or AI stills with avatars", lead: true },
          { value: "40", label: "API route handlers" },
          { value: "10", label: "database models in Prisma and PostgreSQL" },
          { value: "3", label: "plans on monthly credits: Free, Lite and Pro" },
          { value: "5 min", label: "between checks for scheduled posts (Vercel Cron)" },
        ],
        flow: {
          tag: "create → publish",
          title: "What happens after “Generate”.",
          intro:
            "Each video goes through the same chain on the server. The creator only writes the idea, picks a voice and a look, and chooses where it goes.",
          rows: [
            {
              label: "Create · script to video",
              steps: [
                { title: "Script", meta: "your words, or AI from a brief" },
                { title: "Voiceover", meta: "Soniox text-to-speech" },
                { title: "Visuals", meta: "stock clips or AI stills", kind: "key" },
                { title: "Render", meta: "FFmpeg · captions · S3", kind: "ok" },
              ],
            },
            {
              label: "Publish · now or scheduled",
              steps: [
                { title: "Destinations", meta: "TikTok · YouTube" },
                { title: "Post settings", meta: "privacy · disclosure · consent", kind: "key" },
                { title: "Vercel Cron", meta: "every 5 minutes" },
                { title: "Published", meta: "status + history", kind: "ok" },
              ],
            },
            {
              label: "Billing · credits",
              steps: [
                { title: "Stripe checkout", meta: "Lite · Pro" },
                { title: "Webhooks", meta: "created · updated · cancelled" },
                { title: "Credits", meta: "stock 1 · AI 5", kind: "key" },
                { title: "Monthly quota", meta: "checked before render", kind: "ok" },
              ],
            },
          ],
          note: "↻ Captions are force-aligned to the exact script · a video can’t be posted twice to the same place",
        },
        features: [
          { label: "AI video", title: "AI stills with avatars that stay the same", text: "A second look next to stock footage: fal.ai Flux draws each scene, a Ken Burns pass adds gentle motion, and saved avatars keep the same character from one video to the next." },
          { label: "Publishing", title: "TikTok and YouTube, now or later", text: "Connected accounts receive the finished video. TikTok’s required choices are asked before every post, and a cron job publishes scheduled videos." },
          { label: "Payments", title: "Plans on monthly credits", text: "Stripe subscriptions for Lite and Pro, with webhooks and a manual sync. A stock video costs one credit, an AI video five." },
          { label: "Privacy", title: "GDPR from the first version", text: "Cookie consent that keeps analytics off until the visitor agrees, full legal pages, and self-service account deletion." },
        ],
        screens: {
          tag: "the app, from the product demo",
          title: "From a script to a published Short.",
          items: [
            { ...sv("create.jpg", 1440, 938, "Create page: choose how the script is written, paste the script and pick render settings, with a live caption preview"), label: "A · Create", caption: "Script, render settings and a live caption preview on one page.", wide: true },
            { ...sv("project.jpg", 1000, 1156, "Project page with the finished vertical video, a download button and the destinations TikTok and YouTube"), label: "B · Project", caption: "Every video gets a page: watch it, download it, then choose where it goes." },
            { ...sv("tiktok.jpg", 1000, 1156, "TikTok post settings: who can see the video, interaction settings, promotional content disclosure and the TikTok agreement"), label: "C · TikTok rules", caption: "TikTok’s required choices, asked before every post." },
            { ...sv("avatars.jpg", 1000, 1128, "Avatars page with a saved mascot character and a form to describe a new avatar"), label: "D · Avatars", caption: "Characters described once and reused, so the face stays the same." },
            { ...sv("published.jpg", 1000, 1128, "Publishing history: live on TikTok, already published, nothing left to send"), label: "E · Published", caption: "Where each video went, with a guard against posting it twice." },
          ],
        },
        mobile: {
          title: "Creators find it on their phones.",
          intro:
            "Most visitors come from TikTok and YouTube on a phone, so the landing page was laid out for small screens first: one column, big buttons, pricing you can read without zooming.",
          phones: [
            { ...sv("home-m-hero.jpg", 780, 1688, "SimpleVids landing page on a phone"), label: "Home" },
            { ...sv("solution-m.jpg", 780, 1688, "Features section on a phone"), label: "Features" },
            { ...sv("pricing-m.jpg", 780, 1688, "Pricing section on a phone"), label: "Pricing" },
          ],
        },
        stack: ["Next.js 16", "React 19", "TypeScript", "Prisma · PostgreSQL", "NextAuth", "Stripe", "AWS S3", "FFmpeg", "OpenAI", "fal.ai Flux", "Soniox TTS", "YouTube Data API", "TikTok API", "Vercel Cron"],
        card: [
          { label: "Work", value: "AI video SaaS, built from scratch" },
          { label: "Stack", value: "Next.js · Prisma · Stripe · FFmpeg · AI APIs" },
          { label: "Period", value: "2025 – 2026, live" },
        ],
      },
      ro: {
        title: "SaaS cu AI care scrie, montează și publică TikTok-uri și Shorts",
        summary:
          "Creatorii scriu un text sau o idee scurtă și primesc un video vertical gata făcut, cu voce, imagini și subtitrări, publicat pe TikTok și YouTube imediat sau programat.",
        tags: ["Next.js", "SaaS", "AI · integrări API"],
        highlights: [
          { value: "2", label: "platforme pe care publică automat" },
          { value: "40", label: "rute API în spatele dashboard-ului" },
        ],
        imageAlt: "Pagina de prezentare SimpleVids: „Create scroll-stopping TikToks & Shorts in seconds”, cu exemple de videoclipuri verticale",
        pins: [
          { x: 40.6, y: 3.2, label: "Imagini AI + avatare" },
          { x: 46.7, y: 3.2, label: "Credite Stripe" },
          { x: 89, y: 3.2, label: "TikTok + YouTube" },
        ],
        domain: "Video cu AI · SaaS",
        status: "Online",
        periodLabel: "2025 – 2026",
        lead:
          "Un SaaS pentru canalele de TikTok și YouTube Shorts fără prezentator: un text sau o idee scurtă devine un video vertical gata făcut, cu voce, clipuri stock sau imagini generate cu AI, subtitrări și muzică, apoi se publică automat.",
        seoDescription:
          "SimpleVids, un SaaS video cu AI: textul devine un video vertical cu voce și subtitrări, publicat pe TikTok și YouTube. Construit cu Next.js și Stripe.",
        specs: [
          { label: "Rol", value: "Arhitectură, design, front-end, back-end" },
          { label: "Produs", value: "Text → voce → video → TikTok + YouTube" },
          { label: "Tehnologii", value: "Next.js 16, TypeScript, Prisma, PostgreSQL, Stripe" },
          { label: "AI + media", value: "OpenAI · fal.ai Flux · Soniox · FFmpeg" },
          { label: "Publicare", value: "TikTok + YouTube, imediat sau programat" },
        ],
        brief: {
          title: "De la idee la un Short publicat, fără editor video.",
          problem:
            "Cine are canale de TikTok și Shorts fără prezentator pierde ore pe fiecare video: scrie textul, caută clipuri, înregistrează vocea, pune subtitrări, exportă în formatul potrivit și urcă în fiecare aplicație. Să postezi zilnic, cum preferă algoritmii, e greu de ținut manual.",
          solution:
            "Un dashboard care face tot lanțul. Textul vine de la creator sau de la AI, vocea din text-to-speech, imaginile din biblioteci stock sau generate cu AI, iar subtitrările sunt aliniate cuvânt cu cuvânt. Videoclipul final pleacă pe TikTok și YouTube imediat sau la o oră aleasă, iar planurile plătite folosesc credite lunare.",
        },
        numbers: [
          { value: "2", label: "platforme pe care publică: TikTok și YouTube", lead: true },
          { value: "2", label: "moduri video: clipuri stock sau imagini AI cu avatare", lead: true },
          { value: "40", label: "rute API" },
          { value: "10", label: "modele de date în Prisma și PostgreSQL" },
          { value: "3", label: "planuri cu credite lunare: Free, Lite și Pro" },
          { value: "5 min", label: "între verificările postărilor programate (Vercel Cron)" },
        ],
        flow: {
          tag: "creare → publicare",
          title: "Ce se întâmplă după „Generate”.",
          intro:
            "Fiecare video trece prin același lanț pe server. Creatorul scrie doar ideea, alege o voce și un stil și decide unde se publică.",
          rows: [
            {
              label: "Creare · de la text la video",
              steps: [
                { title: "Text", meta: "al tău sau scris de AI" },
                { title: "Voce", meta: "Soniox text-to-speech" },
                { title: "Imagini", meta: "clipuri stock sau imagini AI", kind: "key" },
                { title: "Randare", meta: "FFmpeg · subtitrări · S3", kind: "ok" },
              ],
            },
            {
              label: "Publicare · imediat sau programat",
              steps: [
                { title: "Destinații", meta: "TikTok · YouTube" },
                { title: "Setări postare", meta: "vizibilitate · reclamă · acord", kind: "key" },
                { title: "Vercel Cron", meta: "la fiecare 5 minute" },
                { title: "Publicat", meta: "status + istoric", kind: "ok" },
              ],
            },
            {
              label: "Plăți · credite",
              steps: [
                { title: "Stripe checkout", meta: "Lite · Pro" },
                { title: "Webhook-uri", meta: "creat · modificat · anulat" },
                { title: "Credite", meta: "stock 1 · AI 5", kind: "key" },
                { title: "Cotă lunară", meta: "verificată înainte de randare", kind: "ok" },
              ],
            },
          ],
          note: "↻ Subtitrările sunt aliniate exact pe text · același video nu poate fi publicat de două ori în același loc",
        },
        features: [
          { label: "Video AI", title: "Imagini AI cu avatare care rămân la fel", text: "Un al doilea stil, pe lângă clipurile stock: fal.ai Flux desenează fiecare scenă, un efect Ken Burns adaugă mișcare discretă, iar avatarele salvate păstrează același personaj de la un video la altul." },
          { label: "Publicare", title: "TikTok și YouTube, acum sau mai târziu", text: "Conturile conectate primesc videoclipul final. Alegerile cerute de TikTok apar înainte de fiecare postare, iar un cron publică videoclipurile programate." },
          { label: "Plăți", title: "Planuri cu credite lunare", text: "Abonamente Stripe pentru Lite și Pro, cu webhook-uri și sincronizare manuală. Un video stock costă un credit, unul AI cinci." },
          { label: "Confidențialitate", title: "GDPR din prima versiune", text: "Acord pentru cookie-uri care ține statisticile oprite până la acordul vizitatorului, pagini legale complete și ștergerea contului din aplicație." },
        ],
        screens: {
          tag: "aplicația, din demo-ul produsului",
          title: "De la text la un Short publicat.",
          items: [
            { ...sv("create.jpg", 1440, 938, "Pagina de creare: cum se scrie textul, câmpul pentru text, setările de randare și previzualizarea subtitrărilor"), label: "A · Creare", caption: "Textul, setările de randare și previzualizarea subtitrărilor, pe aceeași pagină.", wide: true },
            { ...sv("project.jpg", 1000, 1156, "Pagina proiectului cu videoclipul vertical, buton de descărcare și destinațiile TikTok și YouTube"), label: "B · Proiect", caption: "Fiecare video are pagina lui: îl vezi, îl descarci, apoi alegi unde pleacă." },
            { ...sv("tiktok.jpg", 1000, 1156, "Setările de postare TikTok: cine vede videoclipul, interacțiuni, marcarea conținutului promoțional și acordul TikTok"), label: "C · Regulile TikTok", caption: "Alegerile cerute de TikTok, înainte de fiecare postare." },
            { ...sv("avatars.jpg", 1000, 1128, "Pagina de avatare cu o mascotă salvată și formularul pentru un avatar nou"), label: "D · Avatare", caption: "Personaje descrise o dată și refolosite, ca fața să rămână aceeași." },
            { ...sv("published.jpg", 1000, 1128, "Istoricul publicării: live pe TikTok, deja publicat, nimic de trimis"), label: "E · Publicat", caption: "Unde a plecat fiecare video, cu protecție împotriva postării de două ori." },
          ],
        },
        mobile: {
          title: "Creatorii îl descoperă pe telefon.",
          intro:
            "Majoritatea vizitatorilor vin de pe TikTok și YouTube, pe telefon, așa că pagina de prezentare a fost gândită întâi pentru ecrane mici: o singură coloană, butoane mari, prețuri care se citesc fără zoom.",
          phones: [
            { ...sv("home-m-hero.jpg", 780, 1688, "Pagina de prezentare SimpleVids pe telefon"), label: "Acasă" },
            { ...sv("solution-m.jpg", 780, 1688, "Secțiunea de funcții pe telefon"), label: "Funcții" },
            { ...sv("pricing-m.jpg", 780, 1688, "Secțiunea de prețuri pe telefon"), label: "Prețuri" },
          ],
        },
        stack: ["Next.js 16", "React 19", "TypeScript", "Prisma · PostgreSQL", "NextAuth", "Stripe", "AWS S3", "FFmpeg", "OpenAI", "fal.ai Flux", "Soniox TTS", "YouTube Data API", "TikTok API", "Vercel Cron"],
        card: [
          { label: "Lucrare", value: "SaaS video cu AI, construit de la zero" },
          { label: "Tehnologii", value: "Next.js · Prisma · Stripe · FFmpeg · API-uri AI" },
          { label: "Perioadă", value: "2025 – 2026, online" },
        ],
      },
    },
  },
];

export function publishedCaseStudies() {
  return caseStudies.filter((item) => item.published && item.permission === "approved");
}

export function caseStudyBySlug(slug: string) {
  return publishedCaseStudies().find((item) => item.slug === slug);
}
