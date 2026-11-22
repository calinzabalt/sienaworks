import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { Ruler } from "@/components/ui/Ruler";
import { SecHead, Section } from "@/components/ui/Section";
import { chrome } from "@/content/chrome";
import { faqFor } from "@/content/faq";
import { metaFor } from "@/content/meta";
import { shortPrice } from "@/content/pricing";
import { pathFor } from "@/content/routes";
import { serviceCopy, type ServiceId } from "@/content/services";
import type { Locale } from "@/content/types";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { keepHyphens } from "@/lib/text";

const labels = {
  en: { includes: "Scope", deliverables: "Deliverables", process: "Process", limits: "Good to know", price: "Price", first: "First step", firstValue: "Free health check", reply: "Reply", replyValue: "In writing, 24–48 working hours", items: "items", steps: "steps" },
  ro: { includes: "Ce include", deliverables: "Ce primești", process: "Proces", limits: "Bine de știut", price: "Preț", first: "Primul pas", firstValue: "Verificare gratuită", reply: "Răspuns", replyValue: "Scris, în 24–48 de ore lucrătoare", items: "puncte", steps: "pași" },
} as const;

export function ServicePageView({ locale, id }: { locale: Locale; id: ServiceId }) {
  const service = serviceCopy(id, locale);
  const copy = service.copy;
  const ui = chrome(locale);
  const t = labels[locale];
  const path = pathFor(service.routeId, locale);
  const faqs = faqFor(service.routeId, locale);
  const meta = metaFor(service.routeId, locale);
  const contactHref = `${pathFor("contact", locale)}?service=${service.enquiry}`;
  let n = 0;
  const next = () => ++n;
  const count = (value: number, word: string) => `${String(value).padStart(2, "0")} ${word}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: ui.home, path: pathFor("home", locale) },
          { name: copy.h1, path },
        ])}
      />
      <JsonLd data={serviceJsonLd({ name: copy.h1, description: meta.description, path })} />
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}

      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.h1}
        description={copy.intro}
        crumbs={[{ label: ui.home, href: pathFor("home", locale) }, { label: copy.eyebrow }]}
        aside={
          <dl className="specs">
            <div>
              <dt>{t.price}</dt>
              <dd className="text-accent-hover">{shortPrice(service.routeId, locale)}</dd>
            </div>
            <div>
              <dt>{t.first}</dt>
              <dd>{t.firstValue}</dd>
            </div>
            <div>
              <dt>{t.reply}</dt>
              <dd>{t.replyValue}</dd>
            </div>
          </dl>
        }
      >
        <Button href={contactHref}>{copy.primaryCta}</Button>
        {copy.secondaryCta && copy.secondaryRoute ? (
          <Button href={pathFor(copy.secondaryRoute, locale)} variant="secondary" arrow={false}>
            {copy.secondaryCta}
          </Button>
        ) : null}
      </PageHero>

      <Section className="pt-6 md:pt-10" crosses>
        <SecHead index={next()} label={t.includes} note={count(copy.includes.length, t.items)} />
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <h2 className="h-sec lg:sticky lg:top-28">{keepHyphens(copy.includesTitle)}</h2>
          <div>
            {copy.includes.map((item, i) => (
              <div key={item.title} className="prow">
                <span className="mono text-[13px] text-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3>{keepHyphens(item.title)}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {copy.deliverables && copy.deliverablesTitle ? (
        <Section className="bg-bg-2">
          <SecHead index={next()} label={t.deliverables} note={count(copy.deliverables.length, t.items)} />
          <h2 className="h-sec max-w-3xl">{keepHyphens(copy.deliverablesTitle)}</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {copy.deliverables.map((item, i) => (
              <div key={item.title} className="card flex gap-5 p-6 sm:p-7">
                <span className="mono inline-grid size-10 flex-none place-items-center rounded-xl bg-accent-soft text-xs font-medium text-accent-hover">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="disp m-0 text-[1.3rem] leading-[1.2]">{keepHyphens(item.title)}</h3>
                  <p className="mt-1.5 text-[0.94rem] text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {copy.process && copy.processTitle ? (
        <Section>
          <SecHead index={next()} label={t.process} note={count(copy.process.length, t.steps)} />
          <h2 className="h-sec max-w-3xl">{keepHyphens(copy.processTitle)}</h2>
          <Ruler steps={copy.process} />
        </Section>
      ) : null}

      {copy.limits && copy.limitsTitle ? (
        <section className="pb-8">
          <Container>
            <div className="rounded-[1.25rem] border border-ink bg-surface p-6 sm:p-8">
              <p className="label-mono m-0 text-accent">{t.limits}</p>
              <h2 className="disp m-0 mt-3 text-[1.6rem]">{keepHyphens(copy.limitsTitle)}</h2>
              <ul className="m-0 mt-5 grid list-none gap-3 p-0">
                {copy.limits.map((limit) => (
                  <li key={limit} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3 text-[0.97rem] leading-relaxed text-ink-soft">
                    <span className="mono pt-0.5 text-accent" aria-hidden="true">
                      →
                    </span>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      <FaqList items={faqs} locale={locale} index={next()} />
      <CtaBand locale={locale} />
    </>
  );
}
