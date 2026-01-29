import { MetadataRoute } from 'next';

export const baseUrl = 'https://hadijafari.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ['/'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }));

  return routes;
}
