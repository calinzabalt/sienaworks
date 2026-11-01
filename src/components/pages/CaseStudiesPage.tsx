import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { publishedCaseStudies } from "@/content/case-studies";
import { caseStudyCopy } from "@/content/pages";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { CaseStudyList } from "./CaseStudyList";

export function CaseStudiesPage({ locale }: { locale: Locale }) {
  const copy = caseStudyCopy(locale);
  const items = publishedCaseStudies();

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.intro} />
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        {items.length === 0 ? (
          <div className="card max-w-2xl p-8">
            <p className="leading-relaxed text-ink-soft">{copy.empty}</p>
            <div className="mt-6">
              <Button href={pathFor("contact", locale)}>{copy.cta}</Button>
            </div>
          </div>
        ) : (
          <CaseStudyList locale={locale} items={items} />
        )}
      </div>
    </>
  );
}
