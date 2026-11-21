import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blogs";
import { getAllLocationSlugs } from "@/data/locations";
import {
  BASE_URL,
  SITEMAP_GROUPS,
  SITEMAP_LAST_MODIFIED,
} from "@/data/sitemapData";

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  const pushEntry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number
  ) => {
    const normalizedPath = path === "/" ? "" : path.replace(/\/+$/, "");
    const url = `${BASE_URL}${normalizedPath}`;
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({
      url,
      lastModified: SITEMAP_LAST_MODIFIED,
      changeFrequency,
      priority,
    });
  };

  for (const group of SITEMAP_GROUPS) {
    for (const item of group.items) {
      pushEntry(item.href, item.changeFrequency, item.priority);
    }
  }

  for (const slug of getAllLocationSlugs()) {
    pushEntry(`/location/${slug}`, "monthly", 0.75);
  }

  for (const slug of getAllBlogSlugs()) {
    pushEntry(`/blog/${slug}`, "monthly", 0.7);
  }

  return entries;
}
