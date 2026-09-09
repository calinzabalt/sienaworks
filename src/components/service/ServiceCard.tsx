import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Service } from "@/data/services";
import { padIndex } from "@/lib/format";

export function ServiceCard({
  service,
  className,
  index,
}: {
  service: Service;
  className?: string;
  index?: number;
}) {
  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full flex-col border border-line bg-paper p-6 md:p-8 focus-visible:outline-offset-4"
      >
        <div className="flex items-start justify-between gap-4">
          {typeof index === "number" ? (
            <span className="font-mono text-[0.75rem] text-accent">
              {padIndex(index)}
            </span>
          ) : null}
          <span
            aria-hidden="true"
            className="text-ink/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
          >
            →
          </span>
        </div>
        <h3 className="mt-6 font-display text-2xl md:text-[1.75rem] leading-tight tracking-[-0.02em] group-hover:text-accent transition-colors duration-200">
          {service.title}
        </h3>
        <p className="mt-3 text-muted leading-relaxed flex-1">
          {service.cardDescription}
        </p>
        <span className="mt-8 text-[0.8125rem] font-medium tracking-wide">
          Learn more
        </span>
      </Link>
    </article>
  );
}
