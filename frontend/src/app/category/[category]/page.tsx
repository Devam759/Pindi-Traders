'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContactSection from '@/components/home/ContactSection';

const CATEGORY_DATA: Record<string, {
    title: string,
    subtitle: string,
    image: string,
    description: string,
    gallery: string[]
}> = {
    'ceramics': {
        title: 'The Platinum Suite',
        subtitle: 'Ceramic Excellence',
        image: '/Hindware/img2001.jpg',
        description: 'Discover our collection of premium ceramics, where traditional craftsmanship meets modern architectural requirements. Each piece is selected for its superior finish and durability.',
        gallery: [
            '/Hindware/img587.jpg', '/Hindware/img588.jpg', '/Hindware/img589.jpg',
            '/Hindware/img590.jpg', '/Hindware/img591.jpg', '/Hindware/img592.jpg',
            '/Hindware/img593.jpg', '/Hindware/img594.jpg', '/Hindware/img2001.jpg',
            '/Hindware/img544.jpg', '/Hindware/img545.jpg', '/Hindware/img1405.jpg'
        ]
    },
    'faucets': {
        title: 'Waterfall Flow',
        subtitle: 'Precision Engineering',
        image: '/Hindware/img981.jpg',
        description: 'Experience the perfect blend of form and function. Our faucets collection features the latest in water-saving technology and ergonomic design for the modern home.',
        gallery: [
            '/Hindware/img983.jpg', '/Hindware/img984.jpg', '/Hindware/img986.jpg',
            '/Hindware/img987.jpg', '/Hindware/img989.jpg', '/Hindware/img991.jpg',
            '/Hindware/img875.jpg', '/Hindware/img715.jpg', '/Hindware/img2030.jpg',
            '/Hindware/img731.jpg', '/Hindware/img520.jpg', '/Hindware/img521.jpg'
        ]
    },
    'sanitaryware': {
        title: 'Obsidian Deep',
        subtitle: 'Sanitary Innovation',
        image: '/Hindware/img1141.jpg',
        description: 'Transform your most private spaces into luxurious sanctuaries. Our sanitaryware range offers unparalleled comfort and aesthetic appeal, setting new standards in bathroom design.',
        gallery: [
            '/Hindware/img1983.jpg', '/Hindware/img1984.jpg', '/Hindware/img1985.jpg',
            '/Hindware/img1986.jpg', '/Hindware/img1987.jpg', '/Hindware/img1244.jpg',
            '/Hindware/img1141.jpg', '/Hindware/img1182.jpg', '/Hindware/img1183.jpg',
            '/Hindware/img3045.jpg', '/Hindware/img1983.jpg', '/Hindware/img571.jpg'
        ]
    }
};

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as string;
    const [data, setData] = useState<{ title: string, subtitle: string, image: string, description: string, gallery: string[] } | null>(null);

    useEffect(() => {
        if (category && CATEGORY_DATA[category.toLowerCase()]) {
            setData(CATEGORY_DATA[category.toLowerCase()]);
        }
    }, [category]);

    if (!data) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

    return (
        <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingTop: '10rem' }}>
            <div className="container">
                {/* Hero Section of Category */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '12rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="accent-text" style={{ letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem' }}>
                            Collection 2026 / 01
                        </p>
                        <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: '1', marginBottom: '3rem', fontWeight: '400', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                            {data.title}
                        </h1>
                        <p style={{ maxWidth: '450px', color: 'var(--text-soft)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '4rem' }}>
                            {data.description}
                        </p>

                        <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--accent)', marginBottom: '4rem' }}></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--bg-soft)' }}
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>

                {/* Premium Gallery Section */}
                <section style={{ paddingBottom: '12rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '6rem' }}
                    >
                        <p className="accent-text" style={{ letterSpacing: '0.3em', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Visual Catalog</p>
                        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Curated <span style={{ fontStyle: 'normal', fontWeight: '300' }}>Excellence</span></h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {data.gallery.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    aspectRatio: '1/1',
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--bg-soft)',
                                    position: 'relative',
                                    borderRadius: '2px'
                                }}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    src={img}
                                    alt={`${data.title} detail ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Global Contact Section */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
                <ContactSection />
            </div>
        </main>
    );
}
