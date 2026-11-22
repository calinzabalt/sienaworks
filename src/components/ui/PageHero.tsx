import Link from "next/link";
import { Container } from "./Container";
import { keepHyphens } from "@/lib/text";

export type Crumb = { label: string; href?: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="min-w-0">
      <ol className="mono m-0 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 p-0 text-xs text-soft">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-ink" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    // The dash lines up with the first line, so a label that wraps still reads cleanly.
    <p className="label-mono m-0 flex items-start gap-3 text-accent">
      <span className="mt-[0.8em] h-px w-7 flex-none bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Light page header with the dotted paper grid. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pb-14 pt-12 md:pb-20 md:pt-16">
      <div className="dots-bg" aria-hidden="true" />
      <Container className="relative">
        {crumbs ? <Crumbs items={crumbs} /> : null}
        <div className={aside ? "mt-10 grid items-end gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16" : "mt-10"}>
          <div className="min-w-0">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="disp mt-6 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl md:text-[4.25rem]">{keepHyphens(title)}</h1>
            {description ? <p className="lead mt-6 max-w-2xl text-[1.15rem] text-ink-soft">{description}</p> : null}
            {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div> : null}
          </div>
          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </Container>
    </header>
  );
}
