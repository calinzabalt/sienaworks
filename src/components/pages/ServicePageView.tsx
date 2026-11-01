import { Button } from "@/components/ui/Button";
import { DisplayTitle } from "@/components/ui/DisplayTitle";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { chrome } from "@/content/chrome";
import { faqFor } from "@/content/faq";
import { pathFor } from "@/content/routes";
import { serviceCopy, type ServiceId } from "@/content/services";
import type { Locale } from "@/content/types";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { metaFor } from "@/content/meta";

export function ServicePageView({
  locale,
  id,
}: {
  locale: Locale;
  id: ServiceId;
}) {
  const service = serviceCopy(id, locale);
  const copy = service.copy;
  const ui = chrome(locale);
  const path = pathFor(service.routeId, locale);
  const faqs = faqFor(service.routeId, locale);
  const meta = metaFor(service.routeId, locale);
  const contactHref = `${pathFor("contact", locale)}?service=${service.enquiry}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: ui.home, path: pathFor("home", locale) },
          { name: copy.h1, path },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: copy.h1,
          description: meta.description,
          path,
        })}
      />
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.h1}
        description={copy.intro}
        crumbs={[
          { label: ui.home, href: pathFor("home", locale) },
          { label: copy.h1 },
        ]}
      >
        <Button href={contactHref}>{copy.primaryCta}</Button>
        {copy.secondaryCta && copy.secondaryRoute ? (
          <Button href={pathFor(copy.secondaryRoute, locale)} variant="secondary">
            {copy.secondaryCta}
          </Button>
        ) : null}
      </PageHero>
      <Container className="grid gap-12 py-16">
        <BlockList title={copy.includesTitle} items={copy.includes} />
        {copy.deliverables && copy.deliverablesTitle ? (
          <BlockList title={copy.deliverablesTitle} items={copy.deliverables} />
        ) : null}
        {copy.process && copy.processTitle ? (
          <div>
            <DisplayTitle as="h2" className="text-2xl font-semibold tracking-tight">
              {copy.processTitle}
            </DisplayTitle>
            <ol className="process-rail">
              {copy.process.map((step, index) => (
                <li key={step.title}>
                  <span className="process-num">0{index + 1}</span>
                  <div className="process-body">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        {copy.limits && copy.limitsTitle ? (
          <div className="callout">
            <h2 className="text-xl font-semibold">{copy.limitsTitle}</h2>
            <ul className="mt-4 grid gap-3">
              {copy.limits.map((limit) => (
                <li key={limit} className="text-sm leading-relaxed">
                  {limit}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
      <FaqList title={locale === "ro" ? "Întrebări frecvente" : "Questions"} items={faqs} />
    </>
  );
}

function BlockList({
  title,
  items,
}: {
  title: string;
  items: { title: string; text: string }[];
}) {
  return (
    <div>
      <DisplayTitle as="h2" className="text-2xl font-semibold tracking-tight">
        {title}
      </DisplayTitle>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.title} className="card p-5">
            <p className="font-mono text-xs text-accent-hover">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
