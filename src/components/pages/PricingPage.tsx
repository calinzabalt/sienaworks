import { Button } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqFor } from "@/content/faq";
import { pricingPageCopy } from "@/content/pages";
import { formatPrice, pricingPlans } from "@/content/pricing";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { faqJsonLd } from "@/lib/schema";

export function PricingPage({ locale }: { locale: Locale }) {
  const copy = pricingPageCopy(locale);
  const faqs = faqFor("pricing", locale);
  const currency = locale === "ro" ? "RON" : "EUR";

  return (
    <>
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.intro} />
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-16 sm:px-8 md:grid-cols-2">
        {pricingPlans.map((plan) => {
          const text = plan[locale];
          const money = locale === "ro" ? plan.ron : plan.eur;
          const href = plan.enquiry
            ? `${pathFor("contact", locale)}?service=${plan.enquiry}`
            : pathFor(plan.details ?? "contact", locale);

          return (
            <article
              key={plan.id}
              className={
                plan.id === "health"
                  ? "card flex flex-col bg-accent-soft p-6"
                  : "card flex flex-col p-6"
              }
            >
              <h2 className="text-xl font-semibold">{text.name}</h2>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-navy">
                {formatPrice(money, locale, currency)}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{text.purpose}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button href={href}>{text.cta}</Button>
                {plan.details && plan.enquiry ? (
                  <a href={pathFor(plan.details, locale)} className="action-link">
                    {copy.details}
                    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">{copy.note}</p>
        <div className="callout mt-8 md:p-8">
          <p className="max-w-2xl">{copy.complex}</p>
          <div className="mt-5">
            <Button href={pathFor("contact", locale)} variant="inverse">
              {copy.complexCta}
            </Button>
          </div>
        </div>
      </div>
      <FaqList title={locale === "ro" ? "Întrebări frecvente" : "Questions"} items={faqs} />
    </>
  );
}
