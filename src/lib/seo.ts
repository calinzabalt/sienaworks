import type { Metadata } from "next";
import { metaFor } from "@/content/meta";
import { pathFor } from "@/content/routes";
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
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
