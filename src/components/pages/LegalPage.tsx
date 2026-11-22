import { Container } from "@/components/ui/Container";
import { Crumbs } from "@/components/ui/PageHero";
import { chrome } from "@/content/chrome";
import { legalPage } from "@/content/legal";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { keepHyphens } from "@/lib/text";

export function LegalPage({ locale, kind }: { locale: Locale; kind: "privacy" | "cookies" | "terms" }) {
  const page = legalPage(kind, locale);
  const ui = chrome(locale);

  return (
    <article>
      <header className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-16">
        <div className="dots-bg" aria-hidden="true" />
        <Container className="relative">
          <Crumbs items={[{ label: ui.home, href: pathFor("home", locale) }, { label: page.title }]} />
          <h1 className="disp mt-10 max-w-3xl text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl">{keepHyphens(page.title)}</h1>
          <p className="mono mt-5 text-xs text-soft">
            {page.updatedLabel}: {page.updated}
          </p>
          <p className="mt-6 max-w-2xl rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-muted">{page.review}</p>
        </Container>
      </header>
      <Container className="pb-24">
        <div className="max-w-3xl">
          {page.sections.map((section, i) => (
            <section key={section.title} className="grid gap-x-6 border-t border-line py-8 sm:grid-cols-[56px_minmax(0,1fr)]">
              <span className="mono pt-1.5 text-xs text-accent">§ {String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="disp m-0 text-[1.4rem]">{keepHyphens(section.title)}</h2>
                <div className="mt-3 grid gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="m-0 leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
