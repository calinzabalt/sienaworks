import type { Locale } from "./types";

export function healthPageCopy(locale: Locale) {
  if (locale === "ro") {
    return {
      eyebrow: "Verificare gratuită",
      title: "Află ce probleme ar putea afecta site-ul tău.",
      intro:
        "Lasă adresa site-ului. Primești un răspuns scris pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
      checksTitle: "Ce urmează",
      checks: [
        "Trimiți adresa site-ului și adresa ta de e-mail.",
        "Primești răspunsul pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
        "În răspuns vezi ce merită rezolvat și care este următorul pas.",
      ],
      contactCta: "Contactează Sienaworks",
    };
  }

  return {
    eyebrow: "Free website health check",
    title: "Find out what might be holding your website back.",
    intro:
      "Leave the website address. You receive a written reply by email, as a PDF, within 24–48 working hours.",
    checksTitle: "What happens next",
    checks: [
      "You send the website address and your email.",
      "You receive the reply by email, as a PDF, within 24–48 working hours.",
      "The reply says what is worth fixing and what the next step is.",
    ],
    contactCta: "Contact Sienaworks",
  };
}

export function caseStudyCopy(locale: Locale) {
  if (locale === "ro") {
    return {
      eyebrow: "Studii de caz",
      title: "Proiecte reale. Soluții tehnice concrete.",
      intro: "Exemple despre cum investigăm și rezolvăm probleme tehnice.",
      empty:
        "Pregătim exemple de proiecte și soluții tehnice. Contactează-ne pentru a discuta despre site-ul și provocările afacerii tale.",
      cta: "Contactează Sienaworks",
    };
  }

  return {
    eyebrow: "Case studies",
    title: "Real projects. Practical technical solutions.",
    intro: "Explore how technical problems are investigated, resolved and improved.",
    empty:
      "Case studies are being prepared. Contact us to discuss your website and the challenges you need to solve.",
    cta: "Contact Sienaworks",
  };
}

export function pricingPageCopy(locale: Locale) {
  if (locale === "ro") {
    return {
      eyebrow: "Prețuri",
      title: "Prețuri de pornire, nu oferte finale.",
      intro:
        "Sumele de mai jos sunt orientative, în lei. Prețul final depinde de site și de cât de mare este lucrarea.",
      note: "Înainte să începem, stabilim împreună ce este inclus.",
      details: "Detalii serviciu",
      complex: "Pentru o cerință mai complexă, descrie situația și stabilim împreună următorul pas.",
      complexCta: "Descrie proiectul",
    };
  }

  return {
    eyebrow: "Pricing",
    title: "Starting points, not final quotations.",
    intro:
      "Starting prices in euro. Where a figure is not shown yet, we confirm it when you ask. The final price depends on the website and the size of the work.",
    note: "Before we start, we agree what is included.",
    details: "Service details",
    complex: "For a more complex requirement, describe the situation and we can agree the next step.",
    complexCta: "Describe the project",
  };
}
