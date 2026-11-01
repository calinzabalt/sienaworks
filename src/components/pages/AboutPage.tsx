import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { aboutCopy } from "@/content/about";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = aboutCopy(locale);

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.lede}>
        <Button href={pathFor("contact", locale)}>{copy.cta}</Button>
        <Button href={pathFor("healthCheck", locale)} variant="secondary">
          {copy.secondary}
        </Button>
      </PageHero>
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">{copy.audiencesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.audiences.map((item, index) => (
              <article key={item.title} className="card p-5">
                <p className="font-mono text-xs text-accent-hover">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">{copy.focusTitle}</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.focus.map((item) => (
              <li key={item} className="card p-5 text-sm leading-relaxed text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="callout">
          <h2 className="text-xl font-semibold">{copy.limitsTitle}</h2>
          <ul className="mt-4 grid gap-3">
            {copy.limits.map((item) => (
              <li key={item} className="text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
