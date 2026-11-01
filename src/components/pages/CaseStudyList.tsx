import type { CaseStudy } from "@/content/case-studies";
import type { Locale } from "@/content/types";

export function CaseStudyList({
  locale,
  items,
}: {
  locale: Locale;
  items: CaseStudy[];
}) {
  const title = locale === "ro" ? "Proiecte reale. Soluții tehnice concrete." : "Real projects. Practical technical solutions.";
  const intro =
    locale === "ro"
      ? "Exemple despre cum investigăm și rezolvăm probleme tehnice."
      : "Explore how technical problems are investigated, resolved and improved.";

  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 max-w-2xl text-ink-soft">{intro}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.slug} className="card p-5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.client ? <p className="mt-1 text-sm text-muted">{item.client}</p> : null}
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.challenge}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
