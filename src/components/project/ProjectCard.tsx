import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";
import { TechnologyList } from "@/components/ui/TechnologyList";
import { padIndex } from "@/lib/format";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  priority?: boolean;
  index?: number;
};

export function ProjectCard({
  project,
  featured = false,
  priority = false,
  index,
}: ProjectCardProps) {
  return (
    <article className={cn("group", featured && "md:col-span-2")}>
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline-offset-8"
      >
        <div className="relative overflow-hidden border border-line bg-paper-2">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={featured ? 1600 : 1200}
            height={featured ? 1000 : 800}
            priority={priority}
            sizes={
              featured
                ? "(min-width: 1180px) 1140px, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
            className={cn(
              "w-full object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.025]",
              featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/10]",
            )}
          />
          {typeof index === "number" ? (
            <span className="absolute top-3 left-3 font-mono text-[0.6875rem] tracking-widest bg-paper/95 text-ink px-2 py-1">
              {padIndex(index)}
            </span>
          ) : null}
          {project.status === "in-progress" ? (
            <span className="absolute bottom-3 left-3 kicker bg-ink text-paper px-2.5 py-1 max-w-[calc(100%-1.5rem)]">
              Currently under development
            </span>
          ) : null}
        </div>
        <div
          className={cn(
            "pt-5",
            featured && "md:flex md:items-end md:justify-between md:gap-10",
          )}
        >
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3
                className={cn(
                  "tracking-tight text-ink transition-colors duration-200 group-hover:text-accent",
                  featured
                    ? "font-display text-2xl md:text-3xl"
                    : "text-xl md:text-[1.35rem]",
                )}
              >
                {project.title}
              </h3>
              <span className="kicker">{project.category}</span>
            </div>
            <p
              className={cn(
                "mt-2 text-muted leading-relaxed",
                featured ? "max-w-xl" : "max-w-md",
              )}
            >
              {project.description}
            </p>
          </div>
          <div
            className={cn(
              "mt-4 flex flex-col gap-3",
              featured && "md:mt-0 md:items-end md:shrink-0",
            )}
          >
            <TechnologyList items={project.technologies} />
            <span className="text-[0.8125rem] font-medium tracking-wide text-ink">
              View case study
              <span
                aria-hidden="true"
                className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
