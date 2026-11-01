import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { DisplayTitle } from "./DisplayTitle";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="kicker mb-3">{eyebrow}</p> : null}
      <DisplayTitle as="h2" className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </DisplayTitle>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
    </div>
  );
}
