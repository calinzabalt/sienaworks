import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { keepHyphens } from "@/lib/text";

export function Section({
  id,
  children,
  className,
  crosses = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  crosses?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-32", className)}>
      {crosses ? (
        <>
          <span className="cross left-4 top-10 md:left-8" aria-hidden="true" />
          <span className="cross right-4 top-10 md:right-8" aria-hidden="true" />
        </>
      ) : null}
      <Container>{children}</Container>
    </section>
  );
}

/** "§ 01 — Label ———— note" */
export function SecHead({
  index,
  label,
  note,
  onDark = false,
}: {
  index?: number;
  label: string;
  note?: React.ReactNode;
  onDark?: boolean;
}) {
  const prefix = index ? `§ ${String(index).padStart(2, "0")} — ` : "";
  return (
    <div className={cn("sech", onDark && "on-dark")}>
      <span className="sech-label">
        {prefix}
        {label}
      </span>
      <span className="sech-rule" aria-hidden="true" />
      {note ? <span className="sech-note">{note}</span> : null}
    </div>
  );
}

/** Big heading on the left, intro on the right, bottoms aligned. */
export function SplitHeading({
  title,
  intro,
  as: Tag = "h2",
  onDark = false,
}: {
  title: string;
  intro?: React.ReactNode;
  as?: "h1" | "h2";
  onDark?: boolean;
}) {
  return (
    <div className="grid items-end gap-6 md:grid-cols-2 md:gap-16">
      <Tag className={cn("h-sec", onDark && "text-white")}>{keepHyphens(title)}</Tag>
      {intro ? <p className={cn("lead m-0 max-w-xl", onDark && "text-[#a7b0bc]")}>{intro}</p> : null}
    </div>
  );
}
