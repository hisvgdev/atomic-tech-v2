import { MetadataRoute } from 'next'

export default async function sitemap(props: unknown): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://atomic-code.ru/'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}