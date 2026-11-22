import { pathFor } from "@/content/routes";
import { absoluteUrl, site } from "@/content/site";
import type { FaqItem } from "@/content/faq";
import type { Locale } from "@/content/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    email: site.email,
    telephone: site.phone,
    description:
      "Technical website services: speed, repairs, maintenance, new websites and custom development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zăbalț",
      addressRegion: "Arad",
      addressCountry: "RO",
    },
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl(pathFor("home", locale)),
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function caseStudyJsonLd(input: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  client: string;
  website?: string;
  video?: { name: string; poster: string; src: string; seconds: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: input.locale,
    author: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
    about: input.website ? { "@type": "WebSite", name: input.client, url: input.website } : { "@type": "Organization", name: input.client },
    ...(input.video
      ? {
          video: {
            "@type": "VideoObject",
            name: input.video.name,
            description: input.description,
            thumbnailUrl: absoluteUrl(input.video.poster),
            contentUrl: absoluteUrl(input.video.src),
            duration: `PT${input.video.seconds}S`,
            uploadDate: "2026-11-21",
          },
        }
      : {}),
  };
}
