import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SecHead, Section } from "@/components/ui/Section";
import { aboutCopy } from "@/content/about";
import { chrome } from "@/content/chrome";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { keepHyphens } from "@/lib/text";

const labels = {
  en: { person: "Who", audiences: "For whom", focus: "Scope", start: "How to start", role: "founder", since: "In web development since 2019" },
  ro: { person: "Cine", audiences: "Pentru cine", focus: "Ce acoperă", start: "Cum începi", role: "fondator", since: "În dezvoltare web din 2019" },
} as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = aboutCopy(locale);
  const ui = chrome(locale);
  const t = labels[locale];

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.lede}
        crumbs={[{ label: ui.home, href: pathFor("home", locale) }, { label: copy.eyebrow }]}
      >
        <Button href={pathFor("contact", locale)}>{copy.cta}</Button>
        <Button href={pathFor("healthCheck", locale)} variant="secondary" arrow={false}>
          {copy.secondary}
        </Button>
      </PageHero>

      <Section className="pt-6 md:pt-10">
        <SecHead index={1} label={t.person} note="2019" />
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[4.5rem]">
          <figure className="viewfinder m-0 max-w-[460px]">
            <span className="vf vf-tl" aria-hidden="true" />
            <span className="vf vf-tr" aria-hidden="true" />
            <span className="vf vf-bl" aria-hidden="true" />
            <span className="vf vf-br" aria-hidden="true" />
            <div className="relative">
              <Image
                src="/images/about/portrait.jpg"
                width={768}
                height={1024}
                alt={copy.person.imageAlt}
                sizes="(min-width: 1024px) 424px, 90vw"
                preload
                className="block aspect-[4/5] w-full rounded-xl object-cover object-[50%_22%]"
              />
              <span className="mono absolute bottom-[54px] left-4 rounded-lg bg-white px-3 py-1.5 text-xs shadow-[0_10px_24px_-12px_rgba(13,17,23,.5)]">
                <b className="font-medium">Călin Cozma</b> · {t.role}
              </span>
              <span className="mono absolute bottom-4 left-4 rounded-lg bg-ink px-3 py-1.5 text-xs text-white">
                <span className="text-mint">●</span> {t.since}
              </span>
            </div>
          </figure>
          <div>
            <p className="label-mono m-0 text-accent">{copy.person.kicker}</p>
            <h2 className="h-sec mt-4">{keepHyphens(copy.person.title)}</h2>
            <p className="lead mt-5 text-ink-soft">{copy.person.text}</p>
            <dl className="nums mt-10 !grid-cols-3">
              {copy.person.facts.map((fact, i) => (
                <div key={fact.label} className={i === 0 ? "is-lead" : undefined}>
                  <dt className="!text-[2.6rem]">{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section className="bg-bg-2" crosses>
        <SecHead index={2} label={t.audiences} note={`0${copy.audiences.length}`} />
        <h2 className="h-sec max-w-3xl">{keepHyphens(copy.audiencesTitle)}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {copy.audiences.map((item, index) => (
            <article key={item.title} className="card p-6 sm:p-7">
              <span className="mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="disp m-0 mt-5 text-[1.35rem] leading-[1.2]">{keepHyphens(item.title)}</h3>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SecHead index={3} label={t.focus} />
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <h2 className="h-sec">{keepHyphens(copy.focusTitle)}</h2>
          <ul className="m-0 list-none p-0">
            {copy.focus.map((item, i) => (
              <li key={item} className="prow !grid-cols-[64px_minmax(0,1fr)]">
                <span className="mono text-[13px] text-soft">{String(i + 1).padStart(2, "0")}</span>
                <p className="!text-[1.06rem] !text-ink-soft">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="pb-8">
        <Container>
          <div className="rounded-[1.25rem] border border-ink bg-surface p-6 sm:p-8">
            <p className="label-mono m-0 text-accent">{t.start}</p>
            <h2 className="disp m-0 mt-3 text-[1.6rem]">{keepHyphens(copy.limitsTitle)}</h2>
            <ul className="m-0 mt-5 grid list-none gap-3 p-0">
              {copy.limits.map((item) => (
                <li key={item} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3 text-[0.97rem] leading-relaxed text-ink-soft">
                  <span className="mono pt-0.5 text-accent" aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <div className="pt-12">
        <CtaBand locale={locale} />
      </div>
    </>
  );
}
