import { WorkOrderCard } from "@/components/case/WorkOrderCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SecHead } from "@/components/ui/Section";
import { chrome } from "@/content/chrome";
import { publishedCaseStudies } from "@/content/case-studies";
import { caseStudyCopy } from "@/content/pages";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";

const labels = {
  en: { order: "Work order", next: "The next case study is on its way", soon: "Coming soon", count: "projects" },
  ro: { order: "Fișa de lucrare", next: "Următorul studiu de caz, în curând", soon: "În curând", count: "proiecte" },
} as const;

export function CaseStudiesPage({ locale }: { locale: Locale }) {
  const copy = caseStudyCopy(locale);
  const ui = chrome(locale);
  const t = labels[locale];
  const items = publishedCaseStudies();
  const nextNumber = String(items.length + 1).padStart(3, "0");

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.intro}
        crumbs={[{ label: ui.home, href: pathFor("home", locale) }, { label: copy.eyebrow }]}
      />
      <section className="pb-20 md:pb-28">
        <Container>
          <SecHead label={copy.eyebrow} note={`${String(items.length).padStart(2, "0")} ${t.count}`} />
          {items.length === 0 ? (
            <div className="card max-w-2xl p-8">
              <p className="leading-relaxed text-muted">{copy.empty}</p>
              <div className="mt-6">
                <Button href={pathFor("contact", locale)}>{copy.cta}</Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-10">
              {items.map((study, i) => (
                <WorkOrderCard key={study.slug} study={study} locale={locale} priority={i === 0} />
              ))}
              <div className="flex flex-wrap items-center justify-between gap-5 rounded-[1.25rem] border border-dashed border-[#b9c2cc] px-6 py-7 sm:px-8">
                <div>
                  <p className="label-mono m-0 text-soft">
                    {t.order} · {nextNumber}
                  </p>
                  <p className="disp m-0 mt-2 text-[1.75rem]">{t.next}</p>
                </div>
                <span className="mono rounded-full border border-line-strong px-3 py-1.5 text-xs text-soft">{t.soon}</span>
              </div>
            </div>
          )}
        </Container>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
