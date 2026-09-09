import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectGallery({ project }: { project: Project }) {
  if (project.gallery.length === 0) return null;

  return (
    <section className="pt-7 md:pt-8 border-t border-line">
      <h2 className="kicker text-ink">Gallery</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {project.gallery.map((image) => (
          <figure key={image.src} className="overflow-hidden border border-line bg-paper-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full aspect-[16/10] object-cover object-top"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
