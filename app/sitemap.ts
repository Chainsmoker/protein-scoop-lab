import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://en.comesano.lat/protein-scoop-lab";
  const lastModified = new Date("2026-09-01");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://en.comesano.lat/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
