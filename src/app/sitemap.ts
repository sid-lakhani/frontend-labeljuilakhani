import { MetadataRoute } from "next";

const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labeljuilakhani.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: host,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily", // Homepage changes often
      priority: 1.0,
    },
    {
      url: `${host}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly", // About page rarely changes
      priority: 0.8,
    },
    {
      url: `${host}/blogs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily", // Blogs update often
      priority: 0.8,
    },
    {
      url: `${host}/customs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly", // Custom orders may update frequently
      priority: 0.8,
    },
    {
      url: `${host}/lookbook`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly", // Lookbooks change seasonally
      priority: 0.8,
    },
  ];
}
