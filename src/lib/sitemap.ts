import { projects } from "@/data/projects";
import { publishedSeoPages } from "@/data/seo-pages";
import { services } from "@/data/services";
import { site } from "@/data/site";

export type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const staticRoutes: SitemapEntry[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/work", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agency-partners", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export function getSitemapEntries(): SitemapEntry[] {
  const base = site.url.replace(/\/$/, "");

  const serviceRoutes: SitemapEntry[] = services.map((service) => ({
    path: `/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectRoutes: SitemapEntry[] = projects.map((project) => ({
    path: `/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const seoRoutes: SitemapEntry[] = publishedSeoPages.map((page) => ({
    path: page.path,
    changeFrequency: page.changeFrequency ?? "monthly",
    priority: page.priority ?? 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...seoRoutes].map(
    (entry) => ({
      ...entry,
      path: entry.path === "/" ? `${base}/` : `${base}${entry.path}`,
    }),
  );
}
