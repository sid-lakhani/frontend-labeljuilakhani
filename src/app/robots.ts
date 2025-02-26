import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/blogs", "/customs", "/lookbook"],
      disallow: "/pages/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://labeljuilakhani.in"}/sitemap.xml`,
  };
}