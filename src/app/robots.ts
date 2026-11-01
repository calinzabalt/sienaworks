import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");

  const shared = { allow: "/", disallow: ["/api/"] };

  return {
    rules: [
      { userAgent: "*", ...shared },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "GoogleOther",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Applebot-Extended",
        ],
        ...shared,
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: absoluteUrl("/"),
  };
}
