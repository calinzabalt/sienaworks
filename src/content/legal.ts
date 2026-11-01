import { operator, site } from "./site";
import type { Locale } from "./types";

export type LegalSection = { title: string; paragraphs: string[] };

const identity = {
  en: `${operator.legalName}, a Romanian authorised natural person (PFA), CUI ${operator.cui}, Trade Register ${operator.registry}. Registered office: ${operator.seat}. Contact: ${site.email}. The operator is not registered for VAT.`,
  ro: `${operator.legalName}, persoană fizică autorizată, CUI ${operator.cui}, număr de înregistrare la Registrul Comerțului ${operator.registry}. Sediu: ${operator.seat}. Contact: ${site.email}. Operatorul nu este plătitor de TVA.`,
};

function privacy(locale: Locale): LegalSection[] {
  if (locale === "ro") {
    return [
      {
        title: "Cine suntem",
        paragraphs: [
          `Sienaworks este numele comercial folosit de ${identity.ro}`,
          "Operatorul datelor din formularele acestui site este Cozma Viorel-Călin PFA.",
        ],
      },
      {
        title: "Ce colectează formularul de contact",
        paragraphs: [
          "Nume, e-mail, serviciul de interes și descrierea problemei. Adresa site-ului este opțională. Un câmp ascuns este folosit împotriva mesajelor automate.",
          "Datele sunt folosite ca să răspundem la solicitare. Trimiterea formularului nu te înscrie la mesaje de marketing.",
        ],
      },
      {
        title: "Ce colectează verificarea site-ului",
        paragraphs: [
          "Adresa site-ului, e-mailul, tipul site-ului dacă îl alegi și confirmarea că ai dreptul să ceri verificarea.",
          "Răspunsul pleacă pe e-mail, în format PDF, în 24–48 de ore lucrătoare. Datele trimise nu sunt publicate.",
        ],
      },
      {
        title: "Temei și păstrare",
        paragraphs: [
          "Temeiul este art. 6 alin. (1) lit. b) din GDPR: demersuri la cererea ta înainte de un contract și, după ce există o înțelegere, executarea acelei înțelegeri.",
          "Corespondența din formulare se păstrează 3 ani de la ultimul mesaj, ca să putem clarifica ce s-a cerut. Facturile și documentele contabile, dacă apar, se păstrează pe durata cerută de legea contabilității. Poți cere ștergerea mai devreme atunci când legea o permite.",
        ],
      },
      {
        title: "Cine prelucrează datele",
        paragraphs: [
          "Mesajele sunt trimise prin Brevo (SMTP) către căsuțele operatorului, ca să poată fi citite și să se poată răspunde. Brevo acționează ca persoană împuternicită pentru transmiterea e-mailului.",
          "Google Analytics se încarcă doar dacă accepți cookie-urile de analitică. Eticheta Google Ads se încarcă doar dacă accepți marketingul și există un identificator de conversie configurat.",
          "Furnizorul de găzduire prelucrează jurnale tehnice necesare funcționării și securității site-ului. Operatorul rămâne Cozma Viorel-Călin PFA.",
          "Datele din formulare nu sunt vândute și nu sunt publicate.",
        ],
      },
      {
        title: "Drepturile tale",
        paragraphs: [
          `Poți cere acces, rectificare, ștergere, restricționare sau opoziție, iar acolo unde se aplică, portabilitatea, scriind la ${site.email}.`,
          "Poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, www.dataprotection.ro.",
        ],
      },
    ];
  }

  return [
    {
      title: "Who we are",
      paragraphs: [
        `Sienaworks is the trading name of ${identity.en}`,
        "The controller for the forms on this website is Cozma Viorel-Călin PFA.",
      ],
    },
    {
      title: "What the contact form collects",
      paragraphs: [
        "Name, email, the service you choose and a description of the issue. Website URL is optional. A hidden field is used to reduce automated spam.",
        "The details are used to reply to the enquiry. Sending the form does not add you to a marketing list.",
      ],
    },
    {
      title: "What the website check collects",
      paragraphs: [
        "Website address, email, website type if you choose one, and confirmation that you are allowed to request the check.",
        "The reply is emailed as a PDF within 24–48 working hours. What you submit is not published.",
      ],
    },
    {
      title: "Basis and retention",
      paragraphs: [
        "The basis is GDPR Article 6(1)(b): steps at your request before a contract and, once there is an agreement, performing that agreement.",
        "Form correspondence is kept for 3 years from the last message, so the request can still be explained. Invoices and accounting records, where they exist, are kept for the period required by accounting law. You can ask for earlier deletion where the law allows it.",
      ],
    },
    {
      title: "Who processes the data",
      paragraphs: [
        "Messages are sent through Brevo (SMTP) to the operator’s mailboxes so they can be read and answered. Brevo acts as a processor for that delivery.",
        "Google Analytics loads only if you accept analytics cookies. A Google Ads tag loads only if you accept marketing and a conversion ID is configured.",
        "The hosting provider processes technical logs needed to run and protect the site. The controller remains Cozma Viorel-Călin PFA.",
        "Form data is not sold and is not published.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        `You can ask for access, correction, deletion, restriction or objection, and portability where it applies, by emailing ${site.email}.`,
        "You can complain to the Romanian supervisory authority, Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, 28-30 B-dul G-ral. Gheorghe Magheru, Sector 1, Bucharest, www.dataprotection.ro.",
      ],
    },
  ];
}

function cookies(locale: Locale): LegalSection[] {
  if (locale === "ro") {
    return [
      {
        title: "Esențiale",
        paragraphs: [
          "Cookie-ul sw_consent reține alegerea pentru analitică și marketing. Durata este de 6 luni. Este necesar ca site-ul să nu te mai întrebe la fiecare pagină și ca etichetele opționale să rămână oprite până le permiți.",
          "Site-ul funcționează și dacă refuzi cookie-urile opționale. Formularele nu depind de ele.",
        ],
      },
      {
        title: "Analitică",
        paragraphs: [
          "Google Analytics se încarcă doar după ce accepți analitica. Măsoară pagini vizitate și surse de trafic. Nu pornește înainte de alegere și nu este necesar pentru formulare.",
          "Poți retrage acordul oricând din Setări cookie, în subsolul site-ului. Retragerea oprește încărcările ulterioare. Cookie-urile deja puse de Google se șterg din browser.",
        ],
      },
      {
        title: "Marketing",
        paragraphs: [
          "Eticheta Google Ads nu se încarcă decât dacă ai acceptat marketingul și există un identificator de conversie configurat. Refuzul nu blochează formularele.",
          "Acordul pentru marketing se retrage din același loc, Setări cookie.",
        ],
      },
    ];
  }

  return [
    {
      title: "Essential",
      paragraphs: [
        "The sw_consent cookie stores your analytics and marketing choice for 6 months. It is required so the site does not ask on every page and so optional tags stay off until you allow them.",
        "The site works if you reject optional cookies. The forms do not depend on them.",
      ],
    },
    {
      title: "Analytics",
      paragraphs: [
        "Google Analytics loads only after you accept analytics. It measures pages visited and how people arrive. It does not start before a choice and forms do not need it.",
        "You can withdraw consent at any time from Cookie settings in the footer. Withdrawal stops later loads. Cookies already set by Google are removed in the browser.",
      ],
    },
    {
      title: "Marketing",
      paragraphs: [
        "A Google Ads tag loads only if you have accepted marketing and a conversion ID is configured. Rejecting it does not block the forms.",
        "Marketing consent is withdrawn from the same Cookie settings control.",
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
        title: "Informații, nu o ofertă fermă",
        paragraphs: [
          "Textele și prețurile de pornire sunt informații. Nu sunt o ofertă care se acceptă automat prin acest site. Lucrarea începe după ce stabilim în scris ce facem și cât costă.",
          "Prețurile în euro, acolo unde nu este trecută o sumă, se confirmă la cerere.",
        ],
      },
      {
        title: "Verificarea gratuită",
        paragraphs: [
          "Formularul înregistrează solicitarea. Răspunsul se trimite pe e-mail, în format PDF, în 24–48 de ore lucrătoare.",
          "Răspunsul spune ce am găsit și ce merită făcut mai departe. Lucrările următoare se stabilesc separat, în scris.",
        ],
      },
      {
        title: "Lege și răspundere",
        paragraphs: [
          "Se aplică legea română. Instanțele din Arad sunt competente, fără să se înlăture drepturile imperative ale unui consumator privind instanța de la domiciliul său.",
          "Răspunderea pentru o lucrare acceptată este limitată la suma plătită pentru acea lucrare, cu excepția intenției, a culpei grave și a cazurilor în care legea nu permite limitarea.",
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
      title: "Information, not a standing offer",
      paragraphs: [
        "The copy and starting prices are information. They are not an offer accepted automatically through this website. Work starts after we agree in writing what will be done and what it costs.",
        "EUR prices, where no amount is shown, are confirmed on request.",
      ],
    },
    {
      title: "The free check",
      paragraphs: [
        "The form records the request. The reply is emailed as a PDF within 24–48 working hours.",
        "The reply says what we found and what is worth doing next. Later work is agreed separately, in writing.",
      ],
    },
    {
      title: "Law and liability",
      paragraphs: [
        "Romanian law applies. The courts of Arad have jurisdiction, without removing a consumer’s mandatory right to the court at their home.",
        "Liability for an accepted piece of work is limited to the amount paid for that work, except for intent, gross negligence, and cases where the law does not allow a limit.",
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
