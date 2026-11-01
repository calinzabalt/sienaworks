import { HealthForm } from "@/components/contact/HealthForm";
import { DisplayTitle } from "@/components/ui/DisplayTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqFor } from "@/content/faq";
import { healthPageCopy } from "@/content/pages";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { faqJsonLd } from "@/lib/schema";

export function HealthCheckPage({ locale }: { locale: Locale }) {
  const copy = healthPageCopy(locale);
  const faqs = faqFor("healthCheck", locale);

  return (
    <>
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <section className="hero relative overflow-hidden text-white">
        <div className="hero-grid" aria-hidden="true" />
        <Container className="relative grid items-start gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="min-w-0">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#99f6e4]">
              {copy.eyebrow}
            </p>
            <DisplayTitle
              as="h1"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              {copy.title}
            </DisplayTitle>
            <p className="mt-5 text-lg leading-relaxed text-mist">{copy.intro}</p>
          </div>
          <HealthForm locale={locale} />
        </Container>
      </section>
      <Container className="grid gap-8 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{copy.checksTitle}</h2>
          <ul className="mt-6 grid gap-3">
            {copy.checks.map((check, index) => (
              <li key={check} className="card flex items-baseline gap-4 p-4">
                <span className="font-mono text-xs text-accent-hover">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-ink-soft">{check}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="card h-fit p-6">
          <p className="leading-relaxed text-ink-soft">
            {locale === "ro"
              ? "Dacă știi deja problema, o poți descrie direct."
              : "If you already know the problem, describe it directly."}
          </p>
          <div className="mt-5">
            <Button href={pathFor("contact", locale)} variant="secondary">
              {copy.contactCta}
            </Button>
          </div>
        </aside>
      </Container>
      <FaqList title={locale === "ro" ? "Întrebări frecvente" : "Questions"} items={faqs} />
    </>
  );
}
