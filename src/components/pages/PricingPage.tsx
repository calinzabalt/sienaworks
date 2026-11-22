import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { SecHead, Section } from "@/components/ui/Section";
import { chrome } from "@/content/chrome";
import { faqFor } from "@/content/faq";
import { pricingPageCopy } from "@/content/pages";
import { formatPrice, pricingPlans } from "@/content/pricing";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { faqJsonLd } from "@/lib/schema";
import { keepHyphens } from "@/lib/text";

const labels = {
  en: { plans: "Plans", note: "confirmed on request", plan: "Plan", complexKicker: "Something bigger" },
  ro: { plans: "Planuri", note: "prețuri de pornire, în lei", plan: "Plan", complexKicker: "Ceva mai complex" },
} as const;

export function PricingPage({ locale }: { locale: Locale }) {
  const copy = pricingPageCopy(locale);
  const ui = chrome(locale);
  const t = labels[locale];
  const faqs = faqFor("pricing", locale);
  const currency = locale === "ro" ? "RON" : "EUR";

  return (
    <>
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.intro}
        crumbs={[{ label: ui.home, href: pathFor("home", locale) }, { label: copy.eyebrow }]}
      />
      <Section className="pt-6 md:pt-10">
        <SecHead index={1} label={t.plans} note={t.note} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const text = plan[locale];
            const money = locale === "ro" ? plan.ron : plan.eur;
            const href = plan.enquiry ? `${pathFor("contact", locale)}?service=${plan.enquiry}` : pathFor(plan.details ?? "contact", locale);
            const isHealth = plan.id === "health";

            return (
              <article key={plan.id} className={isHealth ? "svc is-dark min-h-0 md:col-span-2 lg:col-span-3" : "svc"}>
                <div className="flex items-center justify-between">
                  <span className={`mono text-[11px] tracking-[0.14em] ${isHealth ? "text-mint" : "text-soft"}`}>
                    {isHealth ? copy.startHere.toUpperCase() : `${t.plan.toUpperCase()} · ${String(i + 1).padStart(2, "0")}`}
                  </span>
                </div>
                {/* The text block grows, so every button in a row sits on the same line. */}
                <div className={isHealth ? "grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12" : "flex flex-1 flex-col"}>
                  <div className={isHealth ? undefined : "flex flex-1 flex-col"}>
                    <h2 className={`disp m-0 mt-7 leading-[1.15] ${isHealth ? "text-[2rem]" : "text-[1.45rem]"}`}>{keepHyphens(text.name)}</h2>
                    <p className={`disp m-0 mt-4 flex-none leading-[1.05] ${isHealth ? "text-5xl text-mint" : "text-[2.1rem] text-ink"}`}>
                      {formatPrice(money, locale, currency)}
                    </p>
                    <p className="mt-4">{text.purpose}</p>
                    {plan.details && plan.enquiry ? (
                      <Link href={pathFor(plan.details, locale)} className="action-link mt-4 self-start whitespace-nowrap">
                        {copy.details} →
                      </Link>
                    ) : null}
                  </div>
                  <div className={`svc-bot ${isHealth ? "lg:mt-0 lg:border-t-0 lg:pt-0" : ""}`}>
                    <Button href={href} variant={isHealth ? "inverse" : "ink"} className="min-h-11 text-sm">
                      {text.cta}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mono mt-8 max-w-3xl text-xs leading-relaxed text-soft">{copy.note}</p>
      </Section>
      <FaqList items={faqs} locale={locale} index={2} />
      <CtaBand
        locale={locale}
        kicker={t.complexKicker}
        title={copy.complex}
        text=""
        primary={{ label: copy.complexCta, href: pathFor("contact", locale) }}
      />
    </>
  );
}
