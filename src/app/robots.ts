import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example of blocking a path
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
