import { Metadata } from 'next';
import CategoryContent from './CategoryContent';
import { CATEGORY_DATA } from '@/utils/categories';

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
        },
    };
}

export default function CategoryPage() {
    return <CategoryContent />;
}
