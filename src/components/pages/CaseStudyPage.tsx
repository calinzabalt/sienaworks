import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { Crumbs } from "@/components/ui/PageHero";
import { SecHead, Section, SplitHeading } from "@/components/ui/Section";
import { chrome } from "@/content/chrome";
import { publishedCaseStudies, type CaseStudy } from "@/content/case-studies";
import { caseStudyPath, pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { breadcrumbJsonLd, caseStudyJsonLd } from "@/lib/schema";
import { keepHyphens } from "@/lib/text";

const labels = {
  en: {
    cases: "Case studies",
    order: "Work order · No.",
    period: "Period",
    domain: "Field",
    watch: "Watch the video · 1 min",
    live: "Visit the live site",
    videoTitle: "Case study video",
    brief: "Brief",
    briefNote: "problem → solution",
    problem: "The problem",
    solution: "What I built",
    hood: "Under the hood",
    screens: "Screens",
    screensNote: "the live site",
    mobile: "Mobile",
    mobileNote: "designed for the phone first",
    results: "Results",
    resultsNote: "Google PageSpeed Insights",
    stack: "Technologies",
    nextOrder: "Work order",
    next: "The next case study is on its way",
    all: "All case studies",
    ctaKicker: "Your project",
    ctaTitle: "Have a platform or a website to build?",
    ctaText: "Describe what you need, or start with a free technical check. You get a written reply within 24–48 working hours.",
    ctaPrimary: "Describe the project",
    ctaSecondary: "Free health check",
  },
  ro: {
    cases: "Studii de caz",
    order: "Fișă de lucrare · Nr.",
    period: "Perioadă",
    domain: "Domeniu",
    watch: "Urmărește videoclipul · 1 min",
    live: "Vezi site-ul live",
    videoTitle: "Studiu de caz video",
    brief: "Brief",
    briefNote: "problemă → soluție",
    problem: "Problema",
    solution: "Ce am construit",
    hood: "Sub capotă",
    screens: "Ecrane",
    screensNote: "site-ul live",
    mobile: "Mobil",
    mobileNote: "gândit întâi pentru telefon",
    results: "Rezultate",
    resultsNote: "Google PageSpeed Insights",
    stack: "Tehnologii",
    nextOrder: "Fișa de lucrare",
    next: "Următorul studiu de caz, în curând",
    all: "Toate studiile de caz",
    ctaKicker: "Proiectul tău",
    ctaTitle: "Ai o platformă sau un site de construit?",
    ctaText: "Descrie ce ai nevoie sau începe cu o verificare tehnică gratuită. Primești un răspuns scris în 24–48 de ore lucrătoare.",
    ctaPrimary: "Descrie proiectul",
    ctaSecondary: "Verificare gratuită",
  },
} as const;

const CIRC = 2 * Math.PI * 34;

function Gauge({ label, value }: { label: string; value: number }) {
  return (
    <div className="gauge">
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="34" className="gauge-bg" />
        <circle
          cx="40"
          cy="40"
          r="34"
          className={value < 90 ? "gauge-fg is-warn" : "gauge-fg"}
          style={{ strokeDasharray: `${(CIRC * value) / 100} ${CIRC}` }}
        />
      </svg>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}

export function CaseStudyPage({ study, locale }: { study: CaseStudy; locale: Locale }) {
  const copy = study.copy[locale];
  const t = labels[locale];
  const ui = chrome(locale);
  const path = caseStudyPath(study.slug, locale);
  const all = publishedCaseStudies();
  const nextStudy = all.length > 1 ? all[(all.findIndex((item) => item.slug === study.slug) + 1) % all.length] : undefined;
  let n = 0;
  const next = () => ++n;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: ui.home, path: pathFor("home", locale) },
          { name: t.cases, path: pathFor("caseStudies", locale) },
          { name: study.client, path },
        ])}
      />
      <JsonLd
        data={caseStudyJsonLd({
          name: `${study.client}: ${copy.title}`,
          description: copy.lead,
          path,
          locale,
          client: study.client,
          website: study.website,
          video: copy.video
            ? {
                name: `${study.client} · ${t.videoTitle}`,
                poster: copy.video.landscape.poster,
                src: copy.video.landscape.src,
                seconds: copy.video.seconds,
              }
            : undefined,
        })}
      />

      {/* Hero: work order */}
      <header className="relative overflow-hidden pt-12 md:pt-14">
        <div className="dots-bg" aria-hidden="true" />
        <Container className="relative">
          <Crumbs
            items={[
              { label: ui.home, href: pathFor("home", locale) },
              { label: t.cases, href: pathFor("caseStudies", locale) },
              { label: study.client },
            ]}
          />
          {/* Fixed rows below lg (one item per line on phones, the domain on its own line on
              tablets), so the bar's height never depends on how wide the label font is. With a
              free wrap, the late mono font changed the line count and the hero jumped. */}
          <div className="mono mt-8 grid grid-cols-1 items-center gap-x-7 gap-y-2.5 border-y border-b-line border-t-ink py-3.5 text-xs uppercase tracking-[0.1em] text-soft sm:grid-cols-2 lg:flex lg:flex-wrap">
            <span>
              {t.order} {String(study.number).padStart(3, "0")}
            </span>
            <span>
              {t.period}: <b className="font-medium text-ink">{copy.periodLabel}</b>
            </span>
            <span className="sm:col-span-2">
              {t.domain}: <b className="font-medium text-ink">{copy.domain}</b>
            </span>
            <span className="inline-flex items-center gap-2 justify-self-start rounded-full bg-accent-soft px-2.5 py-1 tracking-[0.04em] text-accent-hover lg:ml-auto">
              ● {copy.status}
            </span>
          </div>
          <div className="grid items-end gap-12 pt-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 lg:pt-14">
            <div>
              <h1 className="disp m-0 text-[3.25rem] leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-[6rem]">
                <ClientName name={study.client} mark={study.nameMark} />
              </h1>
              <p className="lead mt-6 max-w-2xl text-[1.2rem] text-ink-soft">{copy.lead}</p>
              {copy.video || study.website ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {copy.video ? (
                    <Button href="#video" arrow={false}>
                      <span aria-hidden="true">▶</span> {t.watch}
                    </Button>
                  ) : null}
                  {study.website ? (
                    <Button href={study.website} variant="secondary" arrow={false}>
                      {t.live} ↗
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
            <dl className="specs">
              {copy.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </header>

      {/* Video */}
      {copy.video ? (
        <section id="video" className="scroll-mt-24 pt-16 md:pt-[4.5rem]">
          <Container>
            <div className="vid-board">
              <div className="mono flex flex-wrap justify-between gap-3 px-2 pb-3.5 pt-1.5 text-xs tracking-[0.06em] text-[#e7ecf2]">
                <span>
                  <span className="text-mint">●</span> {t.videoTitle}
                </span>
                {copy.videoMeta ? <span className="text-faint">{copy.videoMeta}</span> : null}
              </div>
              <div className="vid-frame vid-wide">
                <video controls preload="none" playsInline poster={copy.video.landscape.poster} width={1920} height={1080}>
                  <source src={copy.video.landscape.src} type="video/mp4" />
                </video>
              </div>
              <div className="vid-frame vid-tall">
                <video controls preload="none" playsInline poster={copy.video.portrait.poster} width={1080} height={1920}>
                  <source src={copy.video.portrait.src} type="video/mp4" />
                </video>
              </div>
              {copy.chapters ? (
                <ol className="chapters">
                  {copy.chapters.map((chapter) => (
                    <li key={chapter}>{chapter}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Brief + numbers */}
      <Section className="pb-24 md:pb-28">
        <SecHead index={next()} label={t.brief} note={t.briefNote} />
        <h2 className="h-sec max-w-3xl">{keepHyphens(copy.brief.title)}</h2>
        <div className="mt-11 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="card p-7">
            <p className="label-mono m-0 flex items-center text-[#b2341a]">
              <span className="sev" style={{ background: "var(--red)" }} aria-hidden="true" />
              {t.problem}
            </p>
            <p className="mt-3 text-[1.06rem] leading-relaxed text-ink-soft">{copy.brief.problem}</p>
          </div>
          <div className="card p-7" style={{ borderColor: "#9ad8cf" }}>
            <p className="label-mono m-0 flex items-center text-accent-hover">
              <span className="sev" style={{ background: "var(--accent)" }} aria-hidden="true" />
              {t.solution}
            </p>
            <p className="mt-3 text-[1.06rem] leading-relaxed text-ink-soft">{copy.brief.solution}</p>
          </div>
        </div>
        <dl className="nums">
          {copy.numbers.map((item) => (
            <div key={item.label} className={item.lead ? "is-lead" : undefined}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Under the hood */}
      {copy.flow ? (
        <Section className="bg-bg-2" crosses>
          <SecHead index={next()} label={t.hood} note={copy.flow.tag} />
          <SplitHeading title={copy.flow.title} intro={copy.flow.intro} />
          <div className="flow mt-14">
            {copy.flow.rows.map((row, r) => (
              <div key={row.label} className={r > 0 ? "mt-8" : undefined}>
                <p className="flow-lbl">{row.label}</p>
                <div className="flow-row">
                  {row.steps.map((step, i) => (
                    <div key={step.title} className="contents">
                      {i > 0 ? <span className="fa" aria-hidden="true" /> : null}
                      <div className={step.kind === "key" ? "fb is-key" : step.kind === "ok" ? "fb is-ok" : "fb"}>
                        <b>{step.title}</b>
                        <span>{step.meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="mono m-0 mt-5 text-xs text-soft">{copy.flow.note}</p>
          </div>
          {copy.features ? (
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {copy.features.map((feature) => (
                <div key={feature.title} className="card p-6">
                  <p className="label-mono m-0 text-[0.68rem] text-accent">{feature.label}</p>
                  <h3 className="disp m-0 mt-2.5 text-[1.2rem] leading-[1.2]">{keepHyphens(feature.title)}</h3>
                  <p className="mt-2 text-sm text-muted">{feature.text}</p>
                </div>
              ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      {/* Screens */}
      {copy.screens ? (
        <Section>
          <SecHead index={next()} label={t.screens} note={copy.screens.tag ?? t.screensNote} />
          <h2 className="h-sec max-w-4xl">{keepHyphens(copy.screens.title)}</h2>
          <div className="mt-12 grid gap-x-6 gap-y-8 md:grid-cols-2">
            {copy.screens.items.map((shot) => (
              <figure key={shot.src} className={shot.wide ? "m-0 md:col-span-2" : "m-0"}>
                <div className="shot-frame">
                  <Image
                    src={shot.src}
                    width={shot.width}
                    height={shot.height}
                    alt={shot.alt}
                    sizes={shot.wide ? "(min-width: 1240px) 1156px, 100vw" : "(min-width: 1240px) 566px, (min-width: 768px) 50vw, 100vw"}
                  />
                </div>
                <figcaption className="mt-3 flex gap-3.5 text-[0.92rem] text-muted">
                  <span className="label-mono flex-none pt-0.5 text-[0.68rem] text-accent">{shot.label}</span>
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      {/* Mobile */}
      {copy.mobile ? (
        <section className="dark-band py-20 md:py-32">
          <Container>
            <SecHead index={next()} label={t.mobile} note={t.mobileNote} onDark />
            <SplitHeading title={copy.mobile.title} intro={copy.mobile.intro} onDark />
            <div className={`mt-14 grid max-w-[1040px] sm:gap-7 lg:grid-cols-4 ${copy.video ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3"}`}>
              {copy.mobile.phones.map((phone) => (
                <figure key={phone.src} className="m-0 grid justify-items-center gap-3">
                  <div className="phone">
                    <Image src={phone.src} width={phone.width} height={phone.height} alt={phone.alt} sizes="(min-width: 1024px) 240px, 45vw" />
                  </div>
                  <figcaption className="mono text-xs tracking-[0.06em] text-[#a7b0bc]">{phone.label}</figcaption>
                </figure>
              ))}
              {copy.video ? (
                <figure className="m-0 grid justify-items-center gap-3">
                  <div className="phone border-mint">
                    <video controls preload="none" playsInline poster={copy.video.portrait.poster} width={1080} height={1920}>
                      <source src={copy.video.portrait.src} type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="mono text-xs tracking-[0.06em] text-mint">{copy.mobile.videoLabel}</figcaption>
                </figure>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Results */}
      <Section>
        {copy.results ? (
          <>
            <SecHead index={next()} label={t.results} note={t.resultsNote} />
            <SplitHeading title={copy.results.title} intro={copy.results.intro} />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {copy.results.devices.map((device) => (
                <div key={device.name} className="card p-6 sm:p-7">
                  <p className="label-mono m-0 mb-5 text-soft">{device.name}</p>
                  <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-3">
                    {device.scores.map((score) => (
                      <Gauge key={score.label} label={score.label} value={score.value} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
        <div className="mt-9 flex flex-wrap items-center gap-2">
          <span className="label-mono mr-1 text-[0.68rem] text-soft">{t.stack}</span>
          {copy.stack.map((item) => (
            <span key={item} className="tag-mono">
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* Next case study */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[1.25rem] border border-dashed border-[#b9c2cc] px-6 py-7 sm:px-8">
            <div>
              <p className="label-mono m-0 text-soft">
                {t.nextOrder} · {String(nextStudy ? nextStudy.number : all.length + 1).padStart(3, "0")}
              </p>
              {nextStudy ? (
                <Link href={caseStudyPath(nextStudy.slug, locale)} className="disp mt-2 block text-[1.75rem] hover:text-accent">
                  {nextStudy.client}
                </Link>
              ) : (
                <p className="disp m-0 mt-2 text-[1.75rem]">{t.next}</p>
              )}
            </div>
            <Button href={pathFor("caseStudies", locale)} variant="secondary">
              {t.all}
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        kicker={t.ctaKicker}
        title={t.ctaTitle}
        text={t.ctaText}
        primary={{ label: t.ctaPrimary, href: pathFor("contact", locale) }}
        secondary={{
          label: t.ctaSecondary,
          href: pathFor("healthCheck", locale),
        }}
      />
    </>
  );
}

/**
 * Highlights part of the client name with the mint marker: `mark` when given
 * (with a break opportunity before it, so long one-word domains can wrap),
 * otherwise the last word.
 */
function ClientName({ name, mark }: { name: string; mark?: string }) {
  const at = mark ? name.indexOf(mark) : -1;
  if (mark && at !== -1) {
    return (
      <>
        {name.slice(0, at)}
        <wbr />
        <span className="mark-hl">{mark}</span>
        {name.slice(at + mark.length)}
      </>
    );
  }
  const cut = name.lastIndexOf(" ");
  if (cut === -1) return <span className="mark-hl">{name}</span>;
  return (
    <>
      {name.slice(0, cut + 1)}
      <span className="mark-hl">{name.slice(cut + 1)}</span>
    </>
  );
}
