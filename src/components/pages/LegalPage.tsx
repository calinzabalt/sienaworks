import { Container } from "@/components/ui/Container";
import { DisplayTitle } from "@/components/ui/DisplayTitle";
import { legalPage } from "@/content/legal";
import type { Locale } from "@/content/types";

export function LegalPage({
  locale,
  kind,
}: {
  locale: Locale;
  kind: "privacy" | "cookies" | "terms";
}) {
  const page = legalPage(kind, locale);

  return (
    <article>
      <header className="hero relative overflow-hidden text-white">
        <div className="hero-grid" aria-hidden="true" />
        <Container className="relative max-w-3xl py-14 md:py-20">
          <DisplayTitle as="h1" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.title}
          </DisplayTitle>
          <p className="mt-3 text-sm text-mist">
            {page.updatedLabel}: {page.updated}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#d7efe9]">{page.review}</p>
        </Container>
      </header>
      <div className="mx-auto grid w-full max-w-3xl gap-8 px-5 py-14 sm:px-8 md:py-16">
        {page.sections.map((section) => (
          <section key={section.title} className="border-t border-line pt-8">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <div className="mt-3 grid gap-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
