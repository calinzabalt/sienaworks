import type { Locale } from "./types";

export function healthPageCopy(locale: Locale) {
  if (locale === "ro") {
    return {
      eyebrow: "Verificare gratuită",
      title: "Află ce probleme ar putea afecta site-ul tău.",
      intro:
        "Lasă adresa site-ului. Primești un răspuns scris pe e-mail, în PDF, în 24–48 de ore lucrătoare.",
      checksTitle: "Ce verificăm",
      checksIntro:
        "Răspunsul trece prin site de sus până jos. În PDF vezi ce am găsit și ce merită făcut mai departe.",
      checks: [
        {
          title: "Viteză",
          text: "Cum se încarcă paginile pe telefon și pe calculator, și ce le încetinește.",
        },
        {
          title: "SEO",
          text: "Titluri, descrieri, structură și dacă motoarele de căutare pot citi site-ul.",
        },
        {
          title: "Mobil",
          text: "Dacă paginile se pot folosi pe un ecran mic, nu doar dacă se văd.",
        },
        {
          title: "Funcții",
          text: "Formulare, navigare și, la un magazin, drumul până la comandă.",
        },
        {
          title: "Actualizări",
          text: "Nucleu, module, teme și setări rămase în urmă.",
        },
        {
          title: "Securitate",
          text: "Certificatul, semne că site-ul a fost atins și ce merită închis repede.",
        },
        {
          title: "Disponibilitate",
          text: "Dacă site-ul se deschide și răspunde vizitatorilor.",
        },
      ],
      aside:
        "Primești PDF-ul pe e-mail, în 24–48 de ore lucrătoare. Dacă știi deja problema, o poți descrie direct.",
      contactCta: "Contactează Sienaworks",
    };
  }

  return {
    eyebrow: "Free website health check",
    title: "Find out what might be holding your website back.",
    intro:
      "Leave the website address. You receive a written reply by email, as a PDF, within 24–48 working hours.",
    checksTitle: "What we check",
    checksIntro:
      "The reply goes through the website from top to bottom. The PDF says what we found and what is worth doing next.",
    checks: [
      {
        title: "Speed",
        text: "How pages load on a phone and on a computer, and what slows them down.",
      },
      {
        title: "SEO",
        text: "Titles, descriptions, structure, and whether search engines can read the site.",
      },
      {
        title: "Mobile",
        text: "Whether the pages can be used on a small screen, not only whether they appear.",
      },
      {
        title: "Functionality",
        text: "Forms, navigation and, for a shop, the path through to checkout.",
      },
      {
        title: "Updates",
        text: "Core, plugins, themes and settings that have fallen behind.",
      },
      {
        title: "Security",
        text: "The certificate, signs the site was touched, and what should be closed quickly.",
      },
      {
        title: "Availability",
        text: "Whether the site opens and responds to visitors.",
      },
    ],
    aside:
      "You receive the PDF by email within 24–48 working hours. If you already know the problem, describe it directly.",
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
