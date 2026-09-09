import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/cta/CTASection";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Selected Work",
  description:
    "Selected WordPress, WooCommerce, React and headless projects from a boutique web development studio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <Container className="pb-16 md:pb-20">
        <PageHero
          eyebrow="Portfolio"
          title="Selected Work"
          description="WordPress, WooCommerce, React and headless projects. Case studies are kept short — more detail is added as it is available."
        />
        <ProjectGrid projects={projects} featuredFirst />
      </Container>
      <CTASection
        title="Have a similar project?"
        description="Tell us what you're building."
      />
    </>
  );
}
