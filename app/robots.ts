import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: ["/", "/products/", "/legal/"],
      },
    ],
    sitemap: "https://arcanetechnologies.org/sitemap.xml",
    host: "https://arcanetechnologies.org",
  };
}
