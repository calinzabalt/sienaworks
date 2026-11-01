export type CaseStudyMeasurement = {
  label: string;
  before: string;
  after: string;
};

export type CaseStudy = {
  slug: string;
  published: boolean;
  permission: "approved" | "draft";
  title: string;
  client?: string;
  industry?: string;
  website?: string;
  challenge: string;
  symptoms: string;
  investigation: string;
  work: string;
  technologies: string[];
  measurements?: CaseStudyMeasurement[];
  outcome: string;
  images?: { src: string; alt: string }[];
};

export const caseStudies: CaseStudy[] = [];

export function publishedCaseStudies() {
  return caseStudies.filter(
    (item) => item.published && item.permission === "approved",
  );
}
