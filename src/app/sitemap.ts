import type { MetadataRoute } from "next";
import { pathFor } from "@/content/routes";
import { absoluteUrl } from "@/content/site";
import { routeIds, type Locale } from "@/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
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
