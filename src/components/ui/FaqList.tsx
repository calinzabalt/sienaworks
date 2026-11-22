import type { FaqItem } from "@/content/faq";
import type { Locale } from "@/content/types";
import { Container } from "./Container";
import { SecHead } from "./Section";
import { keepHyphens } from "@/lib/text";

const copy = {
  en: { label: "Questions", title: "Questions", text: "Write on WhatsApp or by email if the answer is not here." },
  ro: { label: "Întrebări", title: "Întrebări frecvente", text: "Scrie pe WhatsApp sau pe e-mail dacă nu găsești răspunsul aici." },
} as const;

export function FaqList({
  items,
  locale,
  index,
  title,
}: {
  items: FaqItem[];
  locale: Locale;
  index?: number;
  title?: string;
}) {
  if (items.length === 0) return null;
  const t = copy[locale];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SecHead index={index} label={t.label} note={String(items.length).padStart(2, "0")} />
        <div className="faq grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <h2 className="h-sec">{keepHyphens(title ?? t.title)}</h2>
            <p className="lead mt-4 max-w-sm">{t.text}</p>
          </div>
          <div>
            {items.map((item, i) => (
              <details key={item.question} open={i === 0}>
                <summary>
                  <span className="q">Q/{String(i + 1).padStart(2, "0")}</span>
                  <span>{keepHyphens(item.question)}</span>
                  <span className="pm" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
