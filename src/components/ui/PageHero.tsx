import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  descriptionClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <header className={cn("pt-12 md:pt-16 pb-10 md:pb-12", className)}>
      {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
      <h1
        className={cn(
          "font-display text-[2.15rem] sm:text-5xl md:text-[3.5rem] leading-[1.08] tracking-[-0.03em] text-ink max-w-4xl text-pretty",
          eyebrow && "mt-4",
        )}
      >
        {title}
      </h1>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-[1.05rem] text-muted leading-relaxed",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-7">{children}</div> : null}
    </header>
  );
}
