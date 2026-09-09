import Image from "next/image";
import type { Project } from "@/data/projects";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TechnologyList } from "@/components/ui/TechnologyList";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <header className="pt-12 md:pt-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: project.title },
        ]}
      />
      <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <p className="kicker">{project.category}</p>
        {project.status === "in-progress" ? (
          <p className="kicker text-accent">Currently under development</p>
        ) : null}
      </div>
      <h1 className="mt-3 font-display text-[2.15rem] sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] text-pretty">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-muted text-[1.05rem] leading-relaxed">
        {project.description}
      </p>
      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <TechnologyList items={project.technologies} />
        {project.liveUrl ? (
          <Button
            href={project.liveUrl}
            variant="secondary"
            className="w-full sm:w-auto shrink-0"
          >
            {project.status === "in-progress" ? "View staging site" : "Visit website"}
          </Button>
        ) : null}
      </div>
      <div className="mt-8 md:mt-10 overflow-hidden border border-line bg-paper-2">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={1000}
          priority
          sizes="(min-width: 1180px) 1140px, 100vw"
          className="w-full aspect-[16/10] object-cover object-top"
        />
      </div>
    </header>
  );
}
