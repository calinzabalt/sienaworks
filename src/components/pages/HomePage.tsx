import Image from "next/image";
import Link from "next/link";
import { WorkOrderCard } from "@/components/case/WorkOrderCard";
import { DiagnosticBoard } from "@/components/home/DiagnosticBoard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/PageHero";
import { Ruler } from "@/components/ui/Ruler";
import { SecHead, Section, SplitHeading } from "@/components/ui/Section";
import { publishedCaseStudies } from "@/content/case-studies";
import { faqFor } from "@/content/faq";
import { homeCopy } from "@/content/home";
import { shortPrice } from "@/content/pricing";
import { pathFor } from "@/content/routes";
import type { Locale, RouteId } from "@/content/types";
import { faqJsonLd } from "@/lib/schema";
import { keepHyphens } from "@/lib/text";

const serviceIcons: Partial<Record<RouteId, IconName>> = {
  performance: "gauge",
  fix: "wrench",
  maintenance: "shield",
  development: "layout",
  custom: "code",
  healthCheck: "search",
};

/** severity dot per problem, in the live order */
const severity = ["var(--amber)", "var(--red)", "var(--red)", "var(--amber)", "#9aa5b1", "#9aa5b1"];

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy(locale);
  const faqs = faqFor("home", locale);
  const studies = publishedCaseStudies();
  const featured = studies.find((item) => item.featured) ?? studies[0];
  const l = copy.labels;
  let section = 0;
  const next = () => ++section;

  return (
    <>
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}

      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-16 md:pt-24">
        <div
          className="dots-bg"
          style={{
            WebkitMaskImage: "linear-gradient(180deg, transparent, #000 25%, #000 70%, transparent)",
            maskImage: "linear-gradient(180deg, transparent, #000 25%, #000 70%, transparent)",
          }}
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h1 className="disp mt-6 text-[2.75rem] leading-[1.02] tracking-[-0.034em] sm:text-6xl md:text-[4.6rem]">
                <HighlightLast text={copy.title} />
              </h1>
            </div>
            <div className="pb-1.5">
              <p className="lead m-0">{copy.lede}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={pathFor("healthCheck", locale)}>{copy.primaryCta}</Button>
                <Button href={pathFor("contact", locale)} variant="secondary" arrow={false}>
                  {copy.secondaryCta}
                </Button>
              </div>
              <p className="mono mt-5 text-xs text-soft">{copy.support}</p>
            </div>
          </div>
          <DiagnosticBoard sketch={copy.sketch} />
        </Container>
      </section>

      {/* Problems */}
      <Section crosses>
        <SecHead index={next()} label={l.problems} note={l.symptoms} />
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <h2 className="h-sec">{keepHyphens(copy.problemsTitle)}</h2>
            <p className="lead mt-5">{copy.problemsIntro}</p>
            <div className="mt-8">
              <Button href={pathFor("healthCheck", locale)} variant="ink">
                {copy.problemsCta}
              </Button>
            </div>
          </div>
          <div>
            {copy.problems.map((problem, i) => (
              <div key={problem.title} className="prow">
                <span className="mono text-[13px] text-soft">P/{String(i + 1).padStart(2, "0")}</span>
                <h3>
                  <span className="sev" style={{ background: severity[i] ?? "#9aa5b1" }} aria-hidden="true" />
                  {keepHyphens(problem.title)}
                </h3>
                <p>{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case study */}
      {featured ? (
        <section className="pb-20 md:pb-32">
          <Container>
            <SecHead
              index={next()}
              label={l.caseStudy}
              note={
                <Link href={pathFor("caseStudies", locale)} className="text-accent hover:text-accent-hover">
                  {l.allCases} →
                </Link>
              }
            />
            <WorkOrderCard study={featured} locale={locale} />
          </Container>
        </section>
      ) : null}

      {/* Services */}
      <Section className="bg-bg-2" crosses>
        <SecHead index={next()} label={l.services} note={l.pricesNote} />
        <SplitHeading title={copy.servicesTitle} intro={copy.servicesIntro} />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.services.map((service, i) => {
            const isHealth = service.routeId === "healthCheck";
            return (
              <Link key={service.routeId} href={pathFor(service.routeId, locale)} className={isHealth ? "svc is-dark" : "svc"}>
                <div className="flex items-center justify-between">
                  <span className={`mono text-[11px] tracking-[0.14em] ${isHealth ? "text-mint" : "text-soft"}`}>
                    {isHealth ? l.startHere.toUpperCase() : `${l.services.toUpperCase()} · ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <span className="svc-ic">
                    <Icon name={serviceIcons[service.routeId] ?? "check"} />
                  </span>
                </div>
                <h3>{keepHyphens(service.title)}</h3>
                <p>{service.text}</p>
                <div className="svc-bot">
                  <span className={`mono text-[13px] ${isHealth ? "text-mint" : "text-ink"}`}>{shortPrice(service.routeId, locale)}</span>
                  <span className="svc-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SecHead index={next()} label={l.process} note={l.steps} />
        <SplitHeading title={copy.processTitle} intro={copy.processNote} />
        <Ruler steps={copy.steps} />
      </Section>

      {/* About */}
      <section className="pb-20 md:pb-32">
        <Container>
          <SecHead index={next()} label={l.about} note={l.since} />
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-[4.5rem]">
            <figure className="viewfinder m-0 max-w-[480px]">
              <span className="vf vf-tl" aria-hidden="true" />
              <span className="vf vf-tr" aria-hidden="true" />
              <span className="vf vf-bl" aria-hidden="true" />
              <span className="vf vf-br" aria-hidden="true" />
              <div className="relative">
                <Image
                  src="/images/about/portrait.jpg"
                  width={768}
                  height={1024}
                  alt={`${l.portraitName}, ${l.portraitRole} Sienaworks`}
                  sizes="(min-width: 1024px) 444px, 90vw"
                  className="block aspect-[4/5] w-full rounded-xl object-cover object-[50%_22%]"
                />
                <span className="mono absolute bottom-[54px] left-4 rounded-lg bg-white px-3 py-1.5 text-xs shadow-[0_10px_24px_-12px_rgba(13,17,23,.5)]">
                  <b className="font-medium">{l.portraitName}</b> · {l.portraitRole}
                </span>
                <span className="mono absolute bottom-4 left-4 rounded-lg bg-ink px-3 py-1.5 text-xs text-white">
                  <span className="text-mint">●</span> {l.portraitSince}
                </span>
              </div>
            </figure>
            <div>
              <h2 className="h-sec">{keepHyphens(copy.whyTitle)}</h2>
              <p className="lead mt-5">{copy.aboutText}</p>
              <ul className="m-0 mt-8 list-none p-0">
                {copy.why.map((item) => (
                  <li
                    key={item.title}
                    className="grid grid-cols-[26px_minmax(0,1fr)] gap-x-3.5 border-t border-line py-3.5 last:border-b sm:grid-cols-[26px_200px_minmax(0,1fr)] sm:items-baseline"
                  >
                    <span className="inline-grid size-5 place-items-center rounded-[5px] bg-accent text-xs text-white" aria-hidden="true">
                      ✓
                    </span>
                    <b className="font-semibold">{item.title}</b>
                    <span className="col-start-2 text-[0.94rem] text-muted sm:col-start-auto">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={pathFor("about", locale)} variant="secondary">
                  {l.aboutCta}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqList items={faqs} locale={locale} index={next()} />
      <CtaBand
        locale={locale}
        title={copy.finalTitle}
        text={copy.finalText}
        primary={{ label: copy.finalPrimary, href: pathFor("healthCheck", locale) }}
        secondary={{ label: copy.finalSecondary, href: pathFor("contact", locale) }}
      />
    </>
  );
}

/** Marks the clause after the last comma with the mint highlighter. */
function HighlightLast({ text }: { text: string }) {
  const cut = text.lastIndexOf(", ");
  if (cut === -1) return <>{keepHyphens(text)}</>;
  return (
    <>
      {keepHyphens(text.slice(0, cut + 2))}
      <span className="mark-hl">{keepHyphens(text.slice(cut + 2))}</span>
    </>
  );
}
