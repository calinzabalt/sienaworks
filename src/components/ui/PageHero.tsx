import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { DisplayTitle } from "./DisplayTitle";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="hero relative overflow-hidden text-white">
      <div className="hero-grid" aria-hidden="true" />
      <Container className="relative py-14 md:py-20">
        {crumbs ? <Breadcrumbs items={crumbs} onDark /> : null}
        {eyebrow ? (
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#99f6e4]">
            {eyebrow}
          </p>
        ) : null}
        <DisplayTitle
          as="h1"
          className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </DisplayTitle>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">{description}</p>
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </Container>
    </header>
  );
}
