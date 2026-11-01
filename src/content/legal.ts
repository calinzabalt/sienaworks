import { operator, site } from "./site";
import type { Locale } from "./types";

export type LegalSection = { title: string; paragraphs: string[] };

const identity = {
  en: `${operator.legalName}, a Romanian authorised natural person (PFA), CUI ${operator.cui}, Trade Register ${operator.registry}. Registered office: ${operator.seat}. Contact: ${site.email}, WhatsApp ${site.phone}. The operator is not registered for VAT.`,
  ro: `${operator.legalName}, persoană fizică autorizată, CUI ${operator.cui}, număr de înregistrare la Registrul Comerțului ${operator.registry}. Sediu: ${operator.seat}. Contact: ${site.email}, WhatsApp ${site.phone}. Operatorul nu este plătitor de TVA.`,
};

function privacy(locale: Locale): LegalSection[] {
  if (locale === "ro") {
    return [
      {
        title: "Cine suntem",
        paragraphs: [
          `Sienaworks este numele comercial folosit de ${identity.ro}`,
          "Operatorul datelor din formularele acestui site, din e-mail și din mesajele WhatsApp este Cozma Viorel-Călin PFA.",
        ],
      },
      {
        title: "Ce date colectăm",
        paragraphs: [
          "Din formularul de contact: nume, e-mail, serviciul de interes și descrierea problemei sau a proiectului. Adresa site-ului este opțională. Un câmp ascuns oprește mesajele automate și nu este folosit dacă rămâne gol.",
          "Din verificarea gratuită: adresa site-ului, e-mailul, tipul site-ului dacă îl alegi și confirmarea că ai dreptul să ceri verificarea.",
          "Dacă ne scrii pe WhatsApp sau direct pe e-mail, primim numărul de telefon sau adresa de e-mail și conținutul mesajului.",
          "Furnizorul de găzduire ține jurnale tehnice, cum sunt adresa IP, data și pagina cerută, ca site-ul să funcționeze și să poată fi protejat.",
        ],
      },
      {
        title: "La ce folosim datele",
        paragraphs: [
          "Ca să citim solicitarea și să răspundem. Verificarea gratuită primește un răspuns scris, pe e-mail, în PDF, în 24–48 de ore lucrătoare. PDF-ul descrie ce am găsit la viteză, SEO, mobil, funcții, actualizări, securitate și disponibilitate.",
          "Ca să ținem corespondența și, dacă se ajunge la o lucrare, factura și documentele contabile.",
          "Ca să limităm mesajele automate și să înțelegem problemele tehnice ale site-ului.",
          "Trimiterea unui formular nu te înscrie la mesaje de marketing. Nu vindem datele și nu le publicăm.",
        ],
      },
      {
        title: "Temeiul",
        paragraphs: [
          "Art. 6 alin. (1) lit. b) din GDPR: demersuri la cererea ta înainte de un contract și, după ce există o înțelegere, executarea acelei înțelegeri.",
          "Art. 6 alin. (1) lit. c): păstrarea facturilor și a documentelor contabile, când legea o cere.",
          "Art. 6 alin. (1) lit. f): jurnalele tehnice și filtrarea mesajelor automate, ca site-ul să rămână funcțional și sigur. Te poți opune, iar atunci cântărim cererea.",
          "Art. 6 alin. (1) lit. a): cookie-urile de analitică și de marketing, doar după ce le accepți. Acordul se poate retrage din Setări cookie, în subsol.",
        ],
      },
      {
        title: "Cât păstrăm datele",
        paragraphs: [
          "Corespondența din formulare, e-mail și WhatsApp se păstrează 3 ani de la ultimul mesaj, ca să putem clarifica ce s-a cerut.",
          "Facturile și documentele contabile se păstrează pe durata cerută de legea contabilității.",
          "Alegerea despre cookie-uri stă în browser 6 luni. Jurnalele tehnice stau cât le ține furnizorul de găzduire pentru funcționare și securitate.",
          "Poți cere ștergerea mai devreme atunci când legea o permite. Dacă trebuie să păstrăm o factură, îți spunem de ce.",
        ],
      },
      {
        title: "Cine mai vede datele",
        paragraphs: [
          "Mesajele din formulare sunt trimise prin Brevo (SMTP) către căsuțele operatorului, ca să poată fi citite și să se poată răspunde.",
          "Dacă ne scrii pe WhatsApp, conversația trece și prin Meta. Numărul și mesajul sunt folosite ca să putem răspunde.",
          "Google Analytics se încarcă doar dacă accepți analitica. Eticheta Google Ads se încarcă doar dacă accepți marketingul și există un identificator de conversie configurat.",
          "Google și Meta pot prelucra date și în afara Spațiului Economic European, cu garanțiile descrise de ei. Furnizorul de găzduire vede jurnalele tehnice. Operatorul rămâne Cozma Viorel-Călin PFA.",
        ],
      },
      {
        title: "Drepturile tale",
        paragraphs: [
          `Poți cere acces, rectificare, ștergere, restricționare sau opoziție și, acolo unde se aplică, portabilitatea. Scrie la ${site.email}. Răspundem în cel mult o lună. Dacă cererea este complexă, termenul poate fi prelungit cu încă două luni, iar atunci îți spunem.`,
          "Poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, www.dataprotection.ro.",
          "Site-ul este pentru afaceri. Nu este destinat copiilor și nu căutăm datele lor.",
          "Nu luăm decizii automate care să producă efecte legale asupra ta.",
        ],
      },
    ];
  }

  return [
    {
      title: "Who we are",
      paragraphs: [
        `Sienaworks is the trading name of ${identity.en}`,
        "The controller for the forms on this website, for email and for WhatsApp messages is Cozma Viorel-Călin PFA.",
      ],
    },
    {
      title: "What we collect",
      paragraphs: [
        "From the contact form: name, email, the service you choose and a description of the issue or project. Website URL is optional. A hidden field stops automated messages and is not used when it is left empty.",
        "From the free check: website address, email, website type if you choose one, and confirmation that you are allowed to request the check.",
        "If you write on WhatsApp or by email, we receive the phone number or email address and the message.",
        "The hosting provider keeps technical logs, such as IP address, date and the page requested, so the site can run and be protected.",
      ],
    },
    {
      title: "What we use the data for",
      paragraphs: [
        "To read the request and reply. The free check receives a written reply by email, as a PDF, within 24–48 working hours. The PDF describes what we found on speed, SEO, mobile use, functionality, updates, security and availability.",
        "To keep the correspondence and, if a job follows, the invoice and accounting records.",
        "To limit automated messages and to understand the technical issues on the website.",
        "Sending a form does not add you to a marketing list. We do not sell the data and we do not publish it.",
      ],
    },
    {
      title: "The legal basis",
      paragraphs: [
        "GDPR Article 6(1)(b): steps at your request before a contract and, once there is an agreement, performing that agreement.",
        "Article 6(1)(c): keeping invoices and accounting records where the law requires it.",
        "Article 6(1)(f): technical logs and filtering automated messages, so the site stays available and protected. You can object, and we then weigh the request.",
        "Article 6(1)(a): analytics and marketing cookies, only after you accept them. Consent can be withdrawn from Cookie settings in the footer.",
      ],
    },
    {
      title: "How long we keep it",
      paragraphs: [
        "Correspondence from forms, email and WhatsApp is kept for 3 years from the last message, so the request can still be explained.",
        "Invoices and accounting records are kept for the period required by accounting law.",
        "The cookie choice stays in the browser for 6 months. Technical logs stay for as long as the hosting provider keeps them for operation and security.",
        "You can ask for earlier deletion where the law allows it. If an invoice has to stay, we say why.",
      ],
    },
    {
      title: "Who else sees the data",
      paragraphs: [
        "Form messages are sent through Brevo (SMTP) to the operator’s mailboxes so they can be read and answered.",
        "If you write on WhatsApp, the conversation also passes through Meta. The number and the message are used so we can reply.",
        "Google Analytics loads only if you accept analytics. A Google Ads tag loads only if you accept marketing and a conversion ID is configured.",
        "Google and Meta may process data outside the European Economic Area, under the safeguards they describe. The hosting provider sees the technical logs. The controller remains Cozma Viorel-Călin PFA.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        `You can ask for access, correction, deletion, restriction or objection, and portability where it applies. Email ${site.email}. We reply within one month. If the request is complex, that period can be extended by two further months, and we tell you if that happens.`,
        "You can complain to the Romanian supervisory authority, Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, 28-30 B-dul G-ral. Gheorghe Magheru, Sector 1, Bucharest, www.dataprotection.ro.",
        "The site is for businesses. It is not aimed at children and we do not seek their data.",
        "We do not make automated decisions that produce legal effects for you.",
      ],
    },
  ];
}

function cookies(locale: Locale): LegalSection[] {
  if (locale === "ro") {
    return [
      {
        title: "Cum alegi",
        paragraphs: [
          "La prima vizită apare un panou. Poți accepta tot, refuza opționalele sau salva o selecție. Analitica și marketingul sunt oprite până le pornești tu.",
          "Alegerea se poate schimba oricând din Setări cookie, în subsolul site-ului. Retragerea este la fel de simplă ca acceptarea și oprește încărcările ulterioare.",
          "Formularele merg și dacă refuzi cookie-urile opționale.",
        ],
      },
      {
        title: "Cookie-ul esențial",
        paragraphs: [
          "Nume: sw_consent. Durată: 6 luni. Conținut: versiunea alegerii și dacă analitica și marketingul sunt pornite sau oprite.",
          "Este necesar ca să reținem răspunsul și să nu mai arătăm panoul la fiecare pagină. Nu măsoară vizitele și nu este folosit pentru reclame.",
        ],
      },
      {
        title: "Analitică",
        paragraphs: [
          "Google Analytics se încarcă doar după ce accepți analitica. Măsoară pagini vizitate și cum au ajuns oamenii pe site. Nu pornește înainte de alegere.",
          "Google poate seta cookie-uri precum _ga și _ga_*, de obicei până la 2 ani. Le poți șterge din browser. După retragerea acordului, site-ul nu le mai cere.",
        ],
      },
      {
        title: "Marketing",
        paragraphs: [
          "Eticheta Google Ads nu se încarcă decât dacă ai acceptat marketingul și există un identificator de conversie configurat. Fără identificator, eticheta nu pornește.",
          "Refuzul nu blochează formularele, WhatsApp sau e-mailul. Acordul se retrage din același loc, Setări cookie.",
        ],
      },
      {
        title: "Browserul",
        paragraphs: [
          "Poți bloca sau șterge cookie-urile din setările browserului. Dacă ștergi sw_consent, panoul apare din nou la următoarea vizită.",
          "Cookie-urile deja puse de Google, înainte de retragere, se șterg tot din browser. Site-ul nu le poate scoate din contul Google.",
        ],
      },
    ];
  }

  return [
    {
      title: "How you choose",
      paragraphs: [
        "A panel appears on the first visit. You can accept all, reject the optional cookies, or save a selection. Analytics and marketing stay off until you turn them on.",
        "The choice can be changed at any time from Cookie settings in the footer. Withdrawing it is as easy as accepting it, and it stops later loads.",
        "The forms work if you reject the optional cookies.",
      ],
    },
    {
      title: "The essential cookie",
      paragraphs: [
        "Name: sw_consent. Duration: 6 months. Contents: the version of the choice, and whether analytics and marketing are on or off.",
        "It is required so we can remember the answer and not show the panel on every page. It does not measure visits and it is not used for advertising.",
      ],
    },
    {
      title: "Analytics",
      paragraphs: [
        "Google Analytics loads only after you accept analytics. It measures pages visited and how people arrived. It does not start before a choice.",
        "Google may set cookies such as _ga and _ga_*, usually for up to 2 years. You can delete them in the browser. After you withdraw consent, the site stops asking for them.",
      ],
    },
    {
      title: "Marketing",
      paragraphs: [
        "A Google Ads tag loads only if you have accepted marketing and a conversion ID is configured. Without that ID, the tag does not start.",
        "Rejecting it does not block the forms, WhatsApp or email. Consent is withdrawn from the same Cookie settings control.",
      ],
    },
    {
      title: "The browser",
      paragraphs: [
        "You can block or delete cookies in the browser settings. If you delete sw_consent, the panel appears again on the next visit.",
        "Cookies already set by Google, before you withdraw consent, are also removed in the browser. The site cannot remove them from a Google account.",
      ],
    },
  ];
}

function terms(locale: Locale): LegalSection[] {
  if (locale === "ro") {
    return [
      {
        title: "Cine prestează",
        paragraphs: [
          identity.ro,
          "Sienaworks este numele comercial. Contractul, când există, este cu Cozma Viorel-Călin PFA.",
        ],
      },
      {
        title: "Ce este acest site",
        paragraphs: [
          "Textele, serviciile și prețurile de pornire sunt informații. Nu sunt o ofertă care se acceptă automat prin trimiterea unui formular.",
          "Lucrarea începe după ce stabilim în scris ce facem, ce ne trebuie ca acces și cât costă. Până atunci, mesajul este o solicitare, nu o comandă.",
        ],
      },
      {
        title: "Prețuri",
        paragraphs: [
          "Sumele în lei de pe pagina de prețuri sunt puncte de pornire. Prețul final depinde de site și de cât de mare este lucrarea.",
          "Prețurile în euro, acolo unde nu este trecută o sumă, se confirmă la cerere. Factura este emisă de Cozma Viorel-Călin PFA. Operatorul nu este plătitor de TVA.",
          "Plata se face cum s-a stabilit în scris: înainte de lucrare sau pe etape.",
        ],
      },
      {
        title: "Verificarea gratuită",
        paragraphs: [
          "Formularul înregistrează solicitarea. Răspunsul se trimite pe e-mail, în format PDF, în 24–48 de ore lucrătoare.",
          "PDF-ul acoperă viteza, SEO, folosirea pe mobil, funcțiile, actualizările, securitatea și disponibilitatea. Spune ce am găsit și ce merită făcut mai departe.",
          "Verificarea gratuită nu este o lucrare plătită. Ce urmează după PDF se stabilește separat, în scris.",
        ],
      },
      {
        title: "Cum începe o lucrare",
        paragraphs: [
          "Înainte de modificări avem nevoie de o descriere corectă și de accesul stabilit: site, găzduire sau magazin, după caz.",
          "Ne spui dacă există copii de siguranță. Materialele pe care ni le trimiți, texte și imagini, rămân ale tale.",
          "Ce construim sau reparăm pentru tine se predă cum s-a stabilit în înțelegere. Conținutul acestui site aparține operatorului.",
        ],
      },
      {
        title: "Confidențialitate",
        paragraphs: [
          "Nu publicăm ce ne trimiți prin formular, e-mail sau WhatsApp. Detaliile despre date sunt în politica de confidențialitate.",
        ],
      },
      {
        title: "Lege și răspundere",
        paragraphs: [
          "Se aplică legea română. Instanțele din Arad sunt competente, fără să se înlăture drepturile imperative ale unui consumator privind instanța de la domiciliul său.",
          "Răspunderea pentru o lucrare acceptată este limitată la suma plătită pentru acea lucrare, cu excepția intenției, a culpei grave și a cazurilor în care legea nu permite limitarea.",
          "Putem actualiza aceste pagini. Data de deasupra textului este data ultimei versiuni.",
        ],
      },
    ];
  }

  return [
    {
      title: "Who provides the work",
      paragraphs: [
        identity.en,
        "Sienaworks is the trading name. Where there is a contract, it is with Cozma Viorel-Călin PFA.",
      ],
    },
    {
      title: "What this website is",
      paragraphs: [
        "The copy, the services and the starting prices are information. They are not an offer accepted automatically by sending a form.",
        "Work starts after we agree in writing what will be done, what access is needed and what it costs. Until then, a message is a request, not an order.",
      ],
    },
    {
      title: "Prices",
      paragraphs: [
        "The leu amounts on the pricing page are starting points. The final price depends on the website and the size of the work.",
        "EUR prices, where no amount is shown, are confirmed on request. The invoice is issued by Cozma Viorel-Călin PFA. The operator is not registered for VAT.",
        "Payment is made as agreed in writing: before the work, or in stages.",
      ],
    },
    {
      title: "The free check",
      paragraphs: [
        "The form records the request. The reply is emailed as a PDF within 24–48 working hours.",
        "The PDF covers speed, SEO, mobile use, functionality, updates, security and availability. It says what we found and what is worth doing next.",
        "The free check is not a paid job. Anything after the PDF is agreed separately, in writing.",
      ],
    },
    {
      title: "How a job starts",
      paragraphs: [
        "Before changes, we need an accurate description and the access that was agreed: the site, the hosting or the shop, as the case requires.",
        "Tell us whether backups exist. Materials you send us, including text and images, remain yours.",
        "What we build or repair for you is handed over as agreed. The content of this website belongs to the operator.",
      ],
    },
    {
      title: "Confidentiality",
      paragraphs: [
        "We do not publish what you send by form, email or WhatsApp. The detail on personal data is in the privacy policy.",
      ],
    },
    {
      title: "Law and liability",
      paragraphs: [
        "Romanian law applies. The courts of Arad have jurisdiction, without removing a consumer’s mandatory right to the court at their home.",
        "Liability for an accepted piece of work is limited to the amount paid for that work, except for intent, gross negligence, and cases where the law does not allow a limit.",
        "We may update these pages. The date above the text is the date of the latest version.",
      ],
    },
  ];
}

export function legalPage(kind: "privacy" | "cookies" | "terms", locale: Locale) {
  const titles = {
    privacy: locale === "ro" ? "Politica de confidențialitate" : "Privacy Policy",
    cookies: locale === "ro" ? "Politica de cookie-uri" : "Cookie Policy",
    terms: locale === "ro" ? "Termeni și condiții" : "Terms",
  };

  const sections =
    kind === "privacy" ? privacy(locale) : kind === "cookies" ? cookies(locale) : terms(locale);

  return {
    title: titles[kind],
    review: identity[locale],
    updated: locale === "ro" ? "1 noiembrie 2026" : "1 November 2026",
    updatedLabel: locale === "ro" ? "Actualizat" : "Updated",
    sections,
  };
}
