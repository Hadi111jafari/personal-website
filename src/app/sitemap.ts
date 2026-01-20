import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const baseUrl = "https://mahdijafari.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const routes: MetadataRoute.Sitemap = ["/", "/posts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1.0 : 0.9,
  }));

  return [...routes, ...blogs];
}
