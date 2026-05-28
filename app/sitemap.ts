import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const [homepage, pricing, faq] = await Promise.all([
    client.fetch(`*[_type == "homepage"][0]{_updatedAt}`),
    client.fetch(`*[_type == "pricingpage"][0]{_updatedAt}`),
    client.fetch(`*[_type == "faqpage"][0]{_updatedAt}`),
  ])

  const legalPages = await client.fetch(`
    *[_type == "legalpage"]{
      "slug": slug.current,
      updatedAt
    }
  `)

  const baseUrl = 'https://karlydev.vercel.app'

  return [
    // Homepage
    {
      url: `${baseUrl}/`,
      lastModified: homepage?._updatedAt ? new Date(homepage._updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },

    // Pricing
    {
      url: `${baseUrl}/pricing`,
      lastModified: pricing?._updatedAt ? new Date(pricing._updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // FAQ
    {
      url: `${baseUrl}/faq`,
      lastModified: faq?._updatedAt ? new Date(faq._updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Legal pages (dynamic)
    ...legalPages.map((page: any) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ]
}