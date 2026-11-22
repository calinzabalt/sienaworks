import type { Metadata } from "next";
import { metaFor } from "@/content/meta";
import { caseStudyPath, pathFor } from "@/content/routes";
import type { CaseStudy } from "@/content/case-studies";
import { absoluteUrl, site } from "@/content/site";
import type { Locale, RouteId } from "@/content/types";

export function createMetadata({
  locale,
  routeId,
  noIndex = false,
}: {
  locale: Locale;
  routeId: RouteId;
  noIndex?: boolean;
}): Metadata {
  const meta = metaFor(routeId, locale);
  const path = pathFor(routeId, locale);
  const url = absoluteUrl(path);
  const languages = {
    en: absoluteUrl(pathFor(routeId, "en")),
    ro: absoluteUrl(pathFor(routeId, "ro")),
    "x-default": absoluteUrl(pathFor(routeId, "en")),
  };

  const image =
    locale === "ro"
      ? {
          url: "/share/ro",
          alt: "Sienaworks — servicii tehnice pentru site-uri",
        }
      : {
          url: "/share/en",
          alt: "Sienaworks — technical website services",
        };

  return {
    title: meta.absolute ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: site.name,
      locale: locale === "ro" ? "ro_RO" : "en_GB",
      type: "website",
      images: [{ ...image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function createCaseStudyMetadata(study: CaseStudy, locale: Locale): Metadata {
  const copy = study.copy[locale];
  const title = `${study.client}: ${locale === "ro" ? "studiu de caz" : "case study"}`;
  const description = copy.seoDescription;
  const url = absoluteUrl(caseStudyPath(study.slug, locale));
  const poster = copy.video?.landscape.poster;
  const still = copy.image ?? study.image;
  const images = poster
    ? [{ url: poster, width: 1920, height: 1080, alt: copy.imageAlt }]
    : still
      ? [{ url: still.src, width: still.width, height: still.height, alt: copy.imageAlt }]
      : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(caseStudyPath(study.slug, "en")),
        ro: absoluteUrl(caseStudyPath(study.slug, "ro")),
        "x-default": absoluteUrl(caseStudyPath(study.slug, "en")),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: locale === "ro" ? "ro_RO" : "en_GB",
      type: "article",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
    robots: { index: true, follow: true },
  };
}
