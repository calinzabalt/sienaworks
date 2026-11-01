import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DisplayTitle } from "@/components/ui/DisplayTitle";
import { Container } from "@/components/ui/Container";
import { ScanSketch } from "@/components/ui/ScanSketch";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeCopy } from "@/content/home";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { publishedCaseStudies } from "@/content/case-studies";
import { CaseStudyList } from "./CaseStudyList";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy(locale);
  const studies = publishedCaseStudies();

  return (
    <>
      <section className="hero relative overflow-hidden text-white">
        <div className="hero-grid" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:py-28">
          <div>
            <p className="flex flex-wrap gap-2">
              {copy.eyebrow.split(" · ").map((item) => (
                <span key={item} className="hero-chip">
                  {item}
                </span>
              ))}
            </p>
            <DisplayTitle
              as="h1"
              className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl md:leading-[1.05]"
            >
              {copy.title}
            </DisplayTitle>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">{copy.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={pathFor("healthCheck", locale)}>{copy.primaryCta}</Button>
              <Button href={pathFor("contact", locale)} variant="inverse">
                {copy.secondaryCta}
              </Button>
            </div>
            <p className="mt-6 max-w-xl text-sm text-mist">{copy.support}</p>
          </div>
          <div>
            <ScanSketch
              eyebrow={copy.sketch.eyebrow}
              title={copy.sketch.title}
              note={copy.sketch.note}
              items={copy.sketch.items}
            />
          </div>
        </Container>
      </section>

      <Section id="problems">
        <SectionHeading title={copy.problemsTitle} intro={copy.problemsIntro} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.problems.map((problem, index) => (
            <article key={problem.title} className="card p-5">
              <p className="font-mono text-xs text-accent-hover">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button href={pathFor("healthCheck", locale)}>{copy.problemsCta}</Button>
        </div>
      </Section>

      <Section id="services" className="bg-surface">
        <SectionHeading title={copy.servicesTitle} intro={copy.servicesIntro} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.services.map((service) => {
            const featured = service.routeId === "healthCheck";
            return (
              <Link
                key={service.routeId}
                href={pathFor(service.routeId, locale)}
                className={
                  featured
                    ? "card group flex flex-col border-accent bg-accent-soft p-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-24px_rgba(15,118,110,0.8)]"
                    : "card group flex flex-col p-5 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_32px_-24px_rgba(12,27,42,0.45)]"
                }
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.text}</p>
                <span className="action-link mt-5">
                  {service.cta}
                  <Arrow />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading title={copy.processTitle} />
        <ol className="process">
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-num">0{index + 1}</span>
              <h3 className="mt-5 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm text-muted">{copy.processNote}</p>
      </Section>

      <Section className="bg-surface">
        <SectionHeading title={copy.whyTitle} />
        <dl className="mt-10 grid gap-6 md:grid-cols-2">
          {copy.why.map((item) => (
            <div key={item.title} className="card p-5">
              <dt className="font-semibold">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {studies.length > 0 ? (
        <Section>
          <CaseStudyList locale={locale} items={studies} />
        </Section>
      ) : null}

      <section className="hero relative overflow-hidden text-white">
        <div className="hero-grid" aria-hidden="true" />
        <Container className="relative py-16 md:py-20">
          <DisplayTitle as="h2" className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            {copy.finalTitle}
          </DisplayTitle>
          <p className="mt-4 max-w-2xl text-mist">{copy.finalText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={pathFor("healthCheck", locale)}>{copy.finalPrimary}</Button>
            <Button href={pathFor("contact", locale)} variant="inverse">
              {copy.finalSecondary}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
