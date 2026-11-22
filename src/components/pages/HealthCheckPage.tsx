import { HealthForm } from "@/components/contact/HealthForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { Crumbs, Eyebrow } from "@/components/ui/PageHero";
import { SecHead, Section } from "@/components/ui/Section";
import { chrome } from "@/content/chrome";
import { faqFor } from "@/content/faq";
import { healthPageCopy } from "@/content/pages";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { faqJsonLd } from "@/lib/schema";
import { keepHyphens } from "@/lib/text";

const labels = {
  en: { checks: "Checklist", note: "07 checks", pdf: "PDF report · 24–48 working hours · free" },
  ro: { checks: "Ce verificăm", note: "07 verificări", pdf: "Raport PDF · 24–48 de ore lucrătoare · gratuit" },
} as const;

export function HealthCheckPage({ locale }: { locale: Locale }) {
  const copy = healthPageCopy(locale);
  const ui = chrome(locale);
  const t = labels[locale];
  const faqs = faqFor("healthCheck", locale);

  return (
    <>
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <header className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="dots-bg" aria-hidden="true" />
        <Container className="relative">
          <Crumbs items={[{ label: ui.home, href: pathFor("home", locale) }, { label: copy.eyebrow }]} />
          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="min-w-0 lg:pt-6">
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h1 className="disp mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl md:text-[4.25rem]">{keepHyphens(copy.title)}</h1>
              <p className="lead mt-6 max-w-xl text-[1.15rem] text-ink-soft">{copy.intro}</p>
              <p className="mono mt-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-xs text-accent-hover">
                ● {t.pdf}
              </p>
            </div>
            <HealthForm locale={locale} />
          </div>
        </Container>
      </header>

      <Section className="pt-4 md:pt-8" crosses>
        <SecHead index={1} label={t.checks} note={t.note} />
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <h2 className="h-sec">{keepHyphens(copy.checksTitle)}</h2>
            <p className="lead mt-5">{copy.checksIntro}</p>
            <div className="card mt-8 p-6">
              <p className="leading-relaxed text-muted">{copy.aside}</p>
              <div className="mt-5">
                <Button href={pathFor("contact", locale)} variant="secondary">
                  {copy.contactCta}
                </Button>
              </div>
            </div>
          </div>
          <div>
            {copy.checks.map((check, i) => (
              <div key={check.title} className="prow">
                <span className="mono text-[13px] text-soft">C/{String(i + 1).padStart(2, "0")}</span>
                <h3>
                  <span className="sev" style={{ background: "var(--accent)" }} aria-hidden="true" />
                  {keepHyphens(check.title)}
                </h3>
                <p>{check.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <FaqList items={faqs} locale={locale} index={2} />
    </>
  );
}
