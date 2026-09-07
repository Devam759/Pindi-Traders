import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryContent from '@/components/sections/category/CategoryContent';
import { CATEGORY_DATA } from '@/lib/categories';

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const data = CATEGORY_DATA[category.toLowerCase()];

    if (!data) {
        return {
            title: 'Category Not Found | Pindi Traders',
        };
    }

    const title = `${data.title} | Premium Bathroom Collections | Pindi Traders`;
    const description = data.description.length > 160
        ? data.description.substring(0, 157) + "..."
        : data.description;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            images: [{ url: data.image }],
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;

    if (!CATEGORY_DATA[category.toLowerCase()]) {
        notFound();
    }

    return <CategoryContent category={category} />;
}
