import { site } from "@/data/site";
import { services } from "@/data/services";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";

const base = site.url.replace(/\/$/, "");

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: `${base}/`,
    email: site.email,
    description: site.shortDescription,
    areaServed: ["GB", "US", "CA", "EU"],
    knowsAbout: [...site.technologies],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${base}/`,
    description: site.shortDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: site.legalName,
    },
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description,
    url: `${base}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: `${base}/`,
    },
    areaServed: ["GB", "US", "CA", "EU"],
    serviceType: service.title,
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    url: `${base}/`,
    email: site.email,
    description: site.shortDescription,
    areaServed: ["GB", "US", "CA", "EU"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web development services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${base}/services/${service.slug}`,
        },
      })),
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function creativeWorkJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo.description,
    url: `${base}/work/${project.slug}`,
    image: `${base}${project.image}`,
    creator: {
      "@type": "Organization",
      name: site.legalName,
    },
    keywords: project.technologies.join(", "),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}
