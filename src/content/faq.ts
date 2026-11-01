import type { Locale, RouteId } from "./types";

export type FaqItem = { question: string; answer: string };

const faqs: Partial<Record<RouteId, Record<Locale, FaqItem[]>>> = {
  home: {
    en: [
      {
        question: "What does Sienaworks do?",
        answer:
          "Technical work on business websites: speed, repairs, maintenance, new sites and custom features. The work starts from the problem you describe.",
      },
      {
        question: "How do I start?",
        answer:
          "Send the website address for a free check, or write on WhatsApp or by email and describe the repair, the shop or the new site you want.",
      },
      {
        question: "Do you only work with WordPress?",
        answer:
          "WordPress and WooCommerce are common, and so are custom features, integrations and new business websites. The base is chosen for the job.",
      },
      {
        question: "Can you work on a site someone else built?",
        answer:
          "Yes. Most jobs start from an existing site: a slow page, a form that stopped working, an update that went wrong, or a shop that needs attention.",
      },
    ],
    ro: [
      {
        question: "Ce face Sienaworks?",
        answer:
          "Lucru tehnic pe site-uri de afaceri: viteză, reparații, mentenanță, site-uri noi și funcții personalizate. Pornește de la problema pe care o descrii.",
      },
      {
        question: "Cum încep?",
        answer:
          "Trimiți adresa site-ului pentru verificarea gratuită sau scrii pe WhatsApp ori pe e-mail și spui dacă vrei o reparație, un magazin sau un site nou.",
      },
      {
        question: "Lucrați doar cu WordPress?",
        answer:
          "WordPress și WooCommerce sunt frecvente, la fel și funcțiile personalizate, integrările și site-urile noi. Baza se alege după lucrare.",
      },
      {
        question: "Puteți lucra pe un site făcut de altcineva?",
        answer:
          "Da. Cele mai multe lucrări pornesc de la un site existent: o pagină lentă, un formular care nu mai merge, o actualizare care a stricat ceva sau un magazin care are nevoie de atenție.",
      },
    ],
  },
  healthCheck: {
    en: [
      {
        question: "What does the free check cover?",
        answer:
          "Speed, SEO, mobile use, forms and navigation, updates, security and whether the site opens. For a shop, it also follows the path to checkout.",
      },
      {
        question: "When do I receive the answer?",
        answer:
          "By email, as a PDF, within 24–48 working hours. The PDF says what we found and what is worth doing next.",
      },
      {
        question: "Does the check cost anything?",
        answer: "No. The check is free. Any work after the PDF is agreed separately, in writing.",
      },
      {
        question: "What if I want a new website, not a repair?",
        answer:
          "Say so in the message, or write on the contact page. A new site, a redesign and a repair can all start from the same conversation.",
      },
    ],
    ro: [
      {
        question: "Ce cuprinde verificarea gratuită?",
        answer:
          "Viteză, SEO, folosirea pe mobil, formulare și navigare, actualizări, securitate și dacă site-ul se deschide. La un magazin, urmărește și drumul până la comandă.",
      },
      {
        question: "Când primesc răspunsul?",
        answer:
          "Pe e-mail, în PDF, în 24–48 de ore lucrătoare. PDF-ul spune ce am găsit și ce merită făcut mai departe.",
      },
      {
        question: "Verificarea costă ceva?",
        answer: "Nu. Verificarea este gratuită. Lucrarea de după PDF se stabilește separat, în scris.",
      },
      {
        question: "Dacă vreau un site nou, nu o reparație?",
        answer:
          "Spune asta în mesaj sau scrie pe pagina de contact. Un site nou, un redesign și o reparație pot porni din aceeași conversație.",
      },
    ],
  },
  performance: {
    en: [
      {
        question: "What do you look at for speed?",
        answer:
          "How the pages load on a phone and on a computer, images, caching, scripts and, when we have hosting access, the server.",
      },
      {
        question: "What access do you need?",
        answer:
          "We agree it before the work: the site, WordPress, or the hosting. The check itself only needs the public address.",
      },
      {
        question: "Can you speed up a WooCommerce shop?",
        answer:
          "Yes. A shop is measured the same way, including the pages a buyer actually uses.",
      },
    ],
    ro: [
      {
        question: "Ce urmăriți la viteză?",
        answer:
          "Cum se încarcă paginile pe telefon și pe calculator, imaginile, cache-ul, scripturile și, când avem acces la găzduire, serverul.",
      },
      {
        question: "Ce acces vă trebuie?",
        answer:
          "Îl stabilim înainte de lucrare: site-ul, WordPress sau găzduirea. Verificarea gratuită are nevoie doar de adresa publică.",
      },
      {
        question: "Puteți grăbi un magazin WooCommerce?",
        answer: "Da. Magazinul se măsoară la fel, inclusiv paginile pe care le folosește un cumpărător.",
      },
    ],
  },
  fix: {
    en: [
      {
        question: "What can you repair?",
        answer:
          "WordPress errors, failed updates, broken pages, forms that do not send, checkout problems and a site that stopped opening.",
      },
      {
        question: "The site is down. What should I send?",
        answer:
          "The address, what changed and when, and whether you have a backup. Write on the contact page or on WhatsApp.",
      },
      {
        question: "Do you need a backup before a repair?",
        answer:
          "Tell us what backups exist before we change anything. Recovery follows the copies and the access that are actually there.",
      },
    ],
    ro: [
      {
        question: "Ce puteți repara?",
        answer:
          "Erori WordPress, actualizări eșuate, pagini stricate, formulare care nu trimit, probleme la comandă și un site care nu se mai deschide.",
      },
      {
        question: "Site-ul este picat. Ce trimit?",
        answer:
          "Adresa, ce s-a schimbat și când, și dacă există o copie de siguranță. Scrie pe pagina de contact sau pe WhatsApp.",
      },
      {
        question: "Vă trebuie o copie de siguranță înainte de reparație?",
        answer:
          "Spune-ne ce copii există înainte să modificăm ceva. Recuperarea urmează copiile și accesul care există.",
      },
    ],
  },
  maintenance: {
    en: [
      {
        question: "What is in a maintenance plan?",
        answer:
          "WordPress updates, backups, a check that the site is online, the SSL certificate, routine security checks and a short monthly summary.",
      },
      {
        question: "Is support available all day and night?",
        answer: "Support is during working hours. We agree the plan before it starts.",
      },
      {
        question: "Can the plan cover a WooCommerce store?",
        answer:
          "Yes. Store care is a separate plan, with the same idea: updates, backups and watching the shop.",
      },
    ],
    ro: [
      {
        question: "Ce intră într-un plan de mentenanță?",
        answer:
          "Actualizări WordPress, copii de siguranță, verificarea că site-ul este online, certificatul SSL, verificări de securitate de rutină și un rezumat lunar scurt.",
      },
      {
        question: "Suportul este non-stop?",
        answer: "Suportul este în timpul programului de lucru. Planul se stabilește înainte să înceapă.",
      },
      {
        question: "Planul poate acoperi un magazin WooCommerce?",
        answer:
          "Da. Îngrijirea magazinului este un plan separat, cu aceeași idee: actualizări, copii și urmărirea magazinului.",
      },
    ],
  },
  development: {
    en: [
      {
        question: "What can you build?",
        answer:
          "Business websites, WordPress sites, landing pages, redesigns, WooCommerce shops and migrations.",
      },
      {
        question: "Are the text and the photos included?",
        answer:
          "Writing, photography, hosting and ongoing support are agreed separately, when you need them.",
      },
      {
        question: "When does a build start?",
        answer:
          "After we agree in writing what will be built, what access is needed and what it costs. A form message is a request, not an order.",
      },
    ],
    ro: [
      {
        question: "Ce puteți construi?",
        answer:
          "Site-uri de prezentare, site-uri WordPress, pagini de destinație, redesign, magazine WooCommerce și migrări.",
      },
      {
        question: "Textele și fotografiile sunt incluse?",
        answer:
          "Textele, fotografiile, găzduirea și suportul continuu se stabilesc separat, când ai nevoie de ele.",
      },
      {
        question: "Când începe construcția?",
        answer:
          "După ce stabilim în scris ce se construiește, ce acces este necesar și cât costă. Mesajul din formular este o solicitare, nu o comandă.",
      },
    ],
  },
  custom: {
    en: [
      {
        question: "What counts as custom work?",
        answer:
          "A WordPress feature, an API connection, moving data between systems, an internal tool or a small web application.",
      },
      {
        question: "Do you use AI?",
        answer:
          "Only when it is the simplest way to solve a concrete problem. Most custom work does not need it.",
      },
      {
        question: "How is custom work priced?",
        answer:
          "After we understand the problem and the systems you already use. There is no fixed package on the page.",
      },
    ],
    ro: [
      {
        question: "Ce înseamnă o lucrare personalizată?",
        answer:
          "O funcție WordPress, o legătură API, transfer de date între sisteme, o unealtă internă sau o aplicație web mică.",
      },
      {
        question: "Folosiți AI?",
        answer:
          "Doar când este cea mai simplă cale pentru o problemă concretă. Cele mai multe lucrări personalizate nu au nevoie de el.",
      },
      {
        question: "Cum se evaluează prețul?",
        answer:
          "După ce înțelegem problema și sistemele pe care le folosești deja. Pe pagină nu există un pachet fix.",
      },
    ],
  },
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
      {
        question: "Do the prices include VAT?",
        answer:
          "Cozma Viorel-Călin PFA is not registered for VAT. The invoice is issued by the PFA.",
      },
      {
        question: "How do I ask for a price?",
        answer:
          "Describe the site and the work on the contact page, by email at hello@sienaworks.com, or on WhatsApp at +40 740 691 940.",
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
      {
        question: "Prețurile includ TVA?",
        answer:
          "Cozma Viorel-Călin PFA nu este plătitor de TVA. Factura este emisă de PFA.",
      },
      {
        question: "Cum cer un preț?",
        answer:
          "Descrie site-ul și lucrarea pe pagina de contact, pe e-mail la hello@sienaworks.com sau pe WhatsApp, la +40 740 691 940.",
      },
    ],
  },
};

export function faqFor(id: RouteId, locale: Locale) {
  return faqs[id]?.[locale] ?? [];
}
