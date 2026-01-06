import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const serviceRoutes = services.map((service) => ({
        url: `${siteConfig.url}/servicios/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteConfig.url}/nosotros`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.url}/proyectos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteConfig.url}/servicios`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...serviceRoutes,
    ];
}
