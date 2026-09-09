import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/cta/CTASection";
import { CaseStudyHero } from "@/components/project/CaseStudyHero";
import { CaseStudySection } from "@/components/project/CaseStudySection";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import { breadcrumbJsonLd, creativeWorkJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/work/${project.slug}`,
    ogImage: project.image,
  });
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={creativeWorkJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <Container>
        <CaseStudyHero project={project} />
        <div className="mt-10 md:mt-12 pb-16 md:pb-20">
          <CaseStudySection title="Overview">
            <p>{project.overview}</p>
          </CaseStudySection>
          <CaseStudySection title="Challenge">
            <p>{project.challenge}</p>
          </CaseStudySection>
          <CaseStudySection title="Solution">
            <p>{project.solution}</p>
          </CaseStudySection>
          <CaseStudySection title="What we built">
            <p>{project.contribution}</p>
          </CaseStudySection>
          <CaseStudySection title="Technology">
            <p>{project.technologyNotes}</p>
          </CaseStudySection>
          <ProjectGallery project={project} />
        </div>
      </Container>
      <CTASection
        title="Have a similar project?"
        description="Tell us what you're building."
      />
    </>
  );
}
