import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({
  projects,
  featuredFirst = false,
}: {
  projects: Project[];
  featuredFirst?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12 md:gap-y-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          featured={featuredFirst && index === 0}
          priority={index < 2}
          index={index}
        />
      ))}
    </div>
  );
}
