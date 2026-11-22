import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import { caseStudyBySlug, publishedCaseStudies } from "@/content/case-studies";
import { createCaseStudyMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  return study ? createCaseStudyMetadata(study, "en") : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} locale="en" />;
}
