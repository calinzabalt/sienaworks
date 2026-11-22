import Image from "next/image";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";

const copy = {
  en: {
    title: "Write directly",
    whatsapp: "WhatsApp",
    email: "Email",
    quote: "From a single repair to a new website, we start from what the business needs.",
    who: "You talk directly to Călin Cozma, the developer who does the work.",
    alt: "Călin Cozma",
  },
  ro: {
    title: "Scrie direct",
    whatsapp: "WhatsApp",
    email: "E-mail",
    quote: "De la o reparație punctuală până la un site nou, pornim de la ce are nevoie afacerea.",
    who: "Vorbești direct cu Călin Cozma, dezvoltatorul care face lucrarea.",
    alt: "Călin Cozma",
  },
} as const;

export function ContactAside({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <div className="grid gap-4">
      <p className="label-mono m-0 text-accent">{text.title}</p>
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
      <div className="card flex items-center gap-4 p-4">
        <Image
          src="/images/about/portrait.jpg"
          width={768}
          height={1024}
          alt={text.alt}
          sizes="56px"
          className="size-14 shrink-0 rounded-full object-cover object-[50%_22%]"
        />
        <p className="text-sm leading-relaxed text-ink-soft">{text.who}</p>
      </div>
      <blockquote className="disp m-0 border-l-2 border-accent pl-4 text-[1.3rem] leading-snug text-ink">{text.quote}</blockquote>
    </div>
  );
}
