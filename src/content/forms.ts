import type { EnquiryService, ParseError, WebsiteType } from "../lib/enquiry";
import type { Locale } from "./types";

const serviceLabels: Record<Locale, Record<EnquiryService, string>> = {
  en: {
    performance: "Website performance",
    fix: "Fix and recovery",
    maintenance: "Maintenance and monitoring",
    development: "Website development",
    custom: "Custom development",
    health: "Free website health check",
    audit: "Technical website audit",
    woocommerce: "WooCommerce reliability",
    unsure: "Not sure yet",
  },
  ro: {
    performance: "Optimizare performanță",
    fix: "Reparații și recuperare",
    maintenance: "Mentenanță și monitorizare",
    development: "Dezvoltare web",
    custom: "Dezvoltare personalizată",
    health: "Verificare gratuită a site-ului",
    audit: "Audit tehnic de site",
    woocommerce: "Fiabilitate WooCommerce",
    unsure: "Nu sunt sigur",
  },
};

const typeLabels: Record<Locale, Record<WebsiteType, string>> = {
  en: {
    wordpress: "WordPress",
    woocommerce: "WooCommerce",
    other: "Other",
    unsure: "Not sure",
  },
  ro: {
    wordpress: "WordPress",
    woocommerce: "WooCommerce",
    other: "Altul",
    unsure: "Nu sunt sigur",
  },
};

const errors: Record<Locale, Record<ParseError, string>> = {
  en: {
    invalid: "The form could not be read. Please try again.",
    name: "Enter your name.",
    email: "Enter a valid email address.",
    website: "Enter a valid website address, or leave it blank.",
    service: "Choose a service.",
    message: "Describe the issue or project.",
    consent: "Confirm that we may use these details to reply.",
    ownership: "Confirm that you own the website or are allowed to request the check.",
    url: "Enter a valid public website address.",
    blocked_url: "Enter the public address of the website, for example https://example.com.",
  },
  ro: {
    invalid: "Formularul nu a putut fi citit. Încearcă din nou.",
    name: "Introdu numele.",
    email: "Introdu o adresă de e-mail validă.",
    website: "Introdu o adresă de site validă sau lasă câmpul gol.",
    service: "Alege un serviciu.",
    message: "Descrie problema sau proiectul.",
    consent: "Confirmă că putem folosi aceste date ca să răspundem.",
    ownership: "Confirmă că deții site-ul sau că ai dreptul să ceri verificarea.",
    url: "Introdu o adresă publică validă.",
    blocked_url: "Introdu adresa publică a site-ului, de exemplu https://exemplu.ro.",
  },
};

export function serviceOptions(locale: Locale) {
  return (Object.keys(serviceLabels.en) as EnquiryService[]).map((value) => ({
    value,
    label: serviceLabels[locale][value],
  }));
}

export function websiteTypeOptions(locale: Locale) {
  return (Object.keys(typeLabels.en) as WebsiteType[]).map((value) => ({
    value,
    label: typeLabels[locale][value],
  }));
}

export function formError(locale: Locale, code: ParseError) {
  return errors[locale][code];
}

export function contactFormCopy(locale: Locale) {
  if (locale === "ro") {
    return {
      name: "Nume",
      email: "E-mail",
      website: "Adresa site-ului",
      websiteHint: "Opțional",
      service: "Serviciu de interes",
      message: "Problema sau proiectul",
      consent:
        "Înțeleg că Sienaworks folosește aceste date ca să răspundă la solicitare.",
      privacy: "Politica de confidențialitate",
      submit: "Trimite mesajul",
      sending: "Se trimite…",
      success:
        "Mesajul a plecat. Dacă nu primești răspuns, scrie direct la adresa de e-mail.",
      notConfigured: "Mesajul nu a putut fi trimis. Scrie-ne direct pe e-mail.",
      failed: "Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne direct.",
      limited: "Prea multe încercări. Așteaptă câteva minute și încearcă din nou.",
      requiredNote: "Câmpurile marcate cu * sunt obligatorii.",
      emailInstead: "Sau scrie la",
    };
  }

  return {
    name: "Name",
    email: "Email",
    website: "Website URL",
    websiteHint: "Optional",
    service: "Service of interest",
    message: "What is happening",
    consent: "I understand Sienaworks will use these details to reply to this enquiry.",
    privacy: "Privacy Policy",
    submit: "Send message",
    sending: "Sending…",
    success: "The message was sent. If you do not hear back, email us directly.",
    notConfigured: "The message could not be sent. Email us directly.",
    failed: "The message could not be sent. Try again, or email us directly.",
    limited: "Too many attempts. Wait a few minutes and try again.",
    requiredNote: "Fields marked * are required.",
    emailInstead: "Or email",
  };
}

export function healthFormCopy(locale: Locale) {
  if (locale === "ro") {
    return {
      url: "Adresa site-ului",
      email: "E-mail",
      type: "Tipul site-ului",
      typeHint: "Opțional",
      ownership:
        "Confirm că dețin site-ul sau că am dreptul să cer această verificare.",
      submit: "Trimite solicitarea",
      sending: "Se trimite…",
      success:
        "Solicitarea a ajuns. Vei primi răspunsul pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
      notConfigured: "Solicitarea nu a putut fi trimisă. Scrie-ne direct pe e-mail.",
      failed: "Solicitarea nu a putut fi trimisă. Încearcă din nou sau scrie-ne direct.",
      limited: "Prea multe încercări. Așteaptă câteva minute și încearcă din nou.",
      requiredNote: "Câmpurile marcate cu * sunt obligatorii.",
    };
  }

  return {
    url: "Website URL",
    email: "Email",
    type: "Website type",
    typeHint: "Optional",
    ownership: "I own this website or I am authorised to request this check.",
    submit: "Send request",
    sending: "Sending…",
    success:
      "The request arrived. You will get the PDF reply by email within 24–48 working hours.",
    notConfigured: "The request could not be sent. Email us directly.",
    failed: "The request could not be sent. Try again, or email us directly.",
    limited: "Too many attempts. Wait a few minutes and try again.",
    requiredNote: "Fields marked * are required.",
  };
}
