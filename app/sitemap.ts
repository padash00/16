import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.f16-arena.kz' // Замените на ваш домен

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}#zones`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}#pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}#gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}#contacts`,
      lastModified: new Date(),
    },
  ]
}
