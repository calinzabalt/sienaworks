import type { Metadata, Viewport } from "next";
import { Document } from "@/components/layout/Document";
import { site } from "@/content/site";
import "../globals.css";

export const viewport: Viewport = {
  themeColor: "#0c1b2a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sienaworks | Website Fixes, Performance & Development",
    template: "%s | Sienaworks",
  },
  applicationName: site.name,
  icons: { icon: "/favicon.svg" },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
