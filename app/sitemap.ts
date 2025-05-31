import { MetadataRoute } from 'next'

const buildDate = new Date().toISOString().split('T')[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://atomic-code.ru/'

  return [
    {
      url: baseUrl,
      lastModified: new Date(buildDate),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}