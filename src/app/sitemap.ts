import { MetadataRoute } from 'next';
import { CATEGORY_DATA } from '@/lib/categories';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pinditraders.com';

    // Static routes
    const routes = [
        '',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }));

    // Dynamic category routes
    const categories = Object.keys(CATEGORY_DATA).map((category) => ({
        url: `${baseUrl}/category/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...categories];
}
