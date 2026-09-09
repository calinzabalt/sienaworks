import type { Metadata } from "next";
import { site } from "@/data/site";

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

function absoluteUrl(path: string) {
  const base = site.url.replace(/\/$/, "");
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return normalised === "/" ? `${base}/` : `${base}${normalised}`;
}

export function createMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ? [{ url: ogImage }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export { absoluteUrl };
