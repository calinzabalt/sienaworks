import type { MetadataRoute } from "next";
import { caseStudyPath, pathFor } from "@/content/routes";
import { publishedCaseStudies } from "@/content/case-studies";
import { absoluteUrl } from "@/content/site";
import { routeIds, type Locale } from "@/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const studies = publishedCaseStudies().flatMap((study) => {
    const languages = {
      en: absoluteUrl(caseStudyPath(study.slug, "en")),
      ro: absoluteUrl(caseStudyPath(study.slug, "ro")),
      "x-default": absoluteUrl(caseStudyPath(study.slug, "en")),
    };
    return (["en", "ro"] as Locale[]).map((locale) => ({
      url: absoluteUrl(caseStudyPath(study.slug, locale)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages },
    }));
  });

  return [...pages(), ...studies];
}

function pages(): MetadataRoute.Sitemap {
  return routeIds.flatMap((id) => {
    const languages = {
      en: absoluteUrl(pathFor(id, "en")),
      ro: absoluteUrl(pathFor(id, "ro")),
      "x-default": absoluteUrl(pathFor(id, "en")),
    };

    return (["en", "ro"] as Locale[]).map((locale) => ({
      url: absoluteUrl(pathFor(id, locale)),
      changeFrequency: "monthly" as const,
      priority: id === "home" ? 1 : id === "healthCheck" ? 0.9 : 0.7,
      alternates: { languages },
    }));
  });
}
