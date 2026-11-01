import { site } from "@/content/site";
import type { Locale } from "@/content/types";

const copy = {
  en: {
    title: "Write directly",
    whatsapp: "WhatsApp",
    email: "Email",
    quote: "From a single repair to a new website, we start from what the business needs.",
  },
  ro: {
    title: "Scrie direct",
    whatsapp: "WhatsApp",
    email: "E-mail",
    quote: "De la o reparație punctuală până la un site nou, pornim de la ce are nevoie afacerea.",
  },
} as const;

export function ContactAside({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <div className="grid gap-4">
      <p className="kicker">{text.title}</p>
      <div className="card grid">
        <a className="contact-channel" href={site.whatsapp}>
          <span>{text.whatsapp}</span>
          <strong>{site.phone}</strong>
        </a>
        <a className="contact-channel" href={`mailto:${site.email}`}>
          <span>{text.email}</span>
          <strong>{site.email}</strong>
        </a>
      </div>
      <blockquote className="contact-quote">{text.quote}</blockquote>
    </div>
  );
}
