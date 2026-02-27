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
    brands: string[],
    gallery: string[]
}> = {
    'sanitary': {
        title: 'Sanitaryware',
        subtitle: 'Ceramic Excellence',
        image: '/Categories/Sanitaryware/img1141.jpg',
        description: 'Transform your most private spaces into luxurious sanctuaries. Our sanitaryware range offers unparalleled comfort and aesthetic appeal, setting new standards in bathroom design.',
        brands: ['Hindware', 'Cera', 'Sona'],
        gallery: [
            '/Categories/Sanitaryware/img1141.jpg', '/Categories/Sanitaryware/img1183.jpg', '/Categories/Sanitaryware/img1244.jpg',
            '/Categories/Sanitaryware/img544.jpg', '/Categories/Sanitaryware/img545.jpg', '/Categories/Sanitaryware/img875.jpg',
            '/Categories/Sanitaryware/img00154.jpg', '/Categories/Sanitaryware/img00210.jpg', '/Categories/Sanitaryware/img00486.jpg',
            '/Categories/Sanitaryware/img00592.jpg', '/Categories/Sanitaryware/img5390.jpg', '/Categories/Showers/img731.jpg'
        ]
    },
    'basins': {
        title: 'Premium Basins',
        subtitle: 'Sculpted Elegance',
        image: '/Categories/Basins/img00001.jpg',
        description: 'Discover our collection of designer basins, from minimalist wall-hung units to statement tabletop pieces. Crafted with the finest ceramics and metallic finishes.',
        brands: ['Hindware', 'Cera'],
        gallery: [
            '/Categories/Basins/img00001.jpg', '/Categories/Basins/img00057.jpg', '/Categories/Basins/img00083.jpg',
            '/Categories/Basins/img00132.jpg', '/Categories/Basins/img00209.jpg', '/Categories/Basins/img00212.jpg',
            '/Categories/Basins/img00352.jpg', '/Categories/Basins/img00484.jpg', '/Categories/Basins/img00491.jpg',
            '/Categories/Basins/img00532.jpg', '/Categories/Taps/img360.jpg', '/Categories/Taps/img600.jpg'
        ]
    },
    'taps': {
        title: 'Designer Taps',
        subtitle: 'Precision Flow',
        image: '/Categories/Taps/img2001.jpg',
        description: 'Experience precision engineering with our range of luxury taps and faucets. Combining water-saving technology with state-of-the-art Italian design.',
        brands: ['Essco', 'Plumber', 'Hindware'],
        gallery: [
            '/Categories/Taps/img2001.jpg', '/Categories/Taps/img00083.jpg', '/Categories/Taps/img178.jpg',
            '/Categories/Taps/img182.jpg', '/Categories/Taps/img1844.jpg', '/Categories/Taps/img360.jpg',
            '/Categories/Taps/img600.jpg', '/Categories/Taps/img685.jpg', '/Categories/Showers/img981.jpg',
            '/Categories/Showers/img984.jpg', '/Categories/Showers/img986.jpg', '/Categories/Showers/img987.jpg'
        ]
    },
    'showers': {
        title: 'Luxury Showers',
        subtitle: 'Sensory Immersion',
        image: '/Categories/Showers/img00408.jpg',
        description: 'Redefine your bathing ritual with our sensory shower systems. Featuring rain-dance technology, body jets, and thermostatic controls for the ultimate sanctuary.',
        brands: ['Hindware', 'L&K', 'Plumber'],
        gallery: [
            '/Categories/Showers/img00408.jpg', '/Categories/Showers/img00425.jpg', '/Categories/Showers/img00427.jpg',
            '/Categories/Showers/img1036.jpg', '/Categories/Showers/img1048.jpg', '/Categories/Showers/img1070.jpg',
            '/Categories/Showers/img1137.jpg', '/Categories/Showers/img2202.jpg', '/Categories/Showers/img981.jpg',
            '/Categories/Showers/img984.jpg', '/Categories/Showers/img986.jpg', '/Categories/Showers/img987.jpg'
        ]
    },
    'water-storage': {
        title: 'Water Storage',
        subtitle: 'Pure Conservation',
        image: '/Categories/Sanitaryware/img1244.jpg',
        description: 'Reliable water storage solutions designed for longevity and hygiene. We provide the highest standard of tanks and storage systems for every household need.',
        brands: ['Ganga by Vectus', 'Sintex'],
        gallery: [
            '/Categories/Sanitaryware/img1244.jpg', '/Categories/Sanitaryware/img1141.jpg', '/Categories/Sanitaryware/img1244.jpg',
            '/Categories/Sanitaryware/img1244.jpg', '/Categories/Sanitaryware/img1141.jpg', '/Categories/Sanitaryware/img1244.jpg',
            '/Categories/Sanitaryware/img1244.jpg', '/Categories/Sanitaryware/img1141.jpg', '/Categories/Sanitaryware/img1244.jpg',
            '/Categories/Sanitaryware/img1244.jpg', '/Categories/Sanitaryware/img1141.jpg', '/Categories/Sanitaryware/img1244.jpg'
        ]
    },
    'kitchen-sinks': {
        title: 'Kitchen Sinks',
        subtitle: 'Culinary Sophistication',
        image: '/Categories/Showers/img715.jpg',
        description: 'Elevate your kitchen with our premium range of stainless steel sinks. Designed for heavy performance while maintaining a sleek, modern aesthetic.',
        brands: ['Nirali', 'Deepali'],
        gallery: [
            '/Categories/Showers/img715.jpg', '/Categories/Showers/img731.jpg', '/Categories/Sanitaryware/img875.jpg',
            '/Categories/Taps/img360.jpg', '/Categories/Taps/img600.jpg', '/Categories/Taps/img685.jpg',
            '/Categories/Showers/img715.jpg', '/Categories/Showers/img731.jpg', '/Categories/Sanitaryware/img875.jpg',
            '/Categories/Taps/img360.jpg', '/Categories/Taps/img600.jpg', '/Categories/Taps/img685.jpg'
        ]
    },
    'tiles': {
        title: 'Tiles',
        subtitle: 'Surface Artistry',
        image: '/Categories/Tiles/img991.jpg',
        description: 'Transform your floors and walls into artistic statements with our curated tiles. From minimalist textures to bold patterns, we offer surfaces for every vision.',
        brands: ['Orientbell', 'Suzlon Tiles'],
        gallery: [
            '/Categories/Tiles/img991.jpg', '/Categories/Tiles/img983.jpg', '/Categories/Tiles/img991.jpg',
            '/Categories/Tiles/img983.jpg', '/Categories/Tiles/img991.jpg', '/Categories/Tiles/img983.jpg',
            '/Categories/Tiles/img991.jpg', '/Categories/Tiles/img983.jpg', '/Categories/Tiles/img991.jpg',
            '/Categories/Tiles/img983.jpg', '/Categories/Tiles/img991.jpg', '/Categories/Tiles/img983.jpg'
        ]
    },
    'bathtubs': {
        title: 'Luxury Bathtubs',
        subtitle: 'Ultimate Relaxation',
        image: '/Categories/Bathtubs/img1092.jpg',
        description: 'Immerse yourself in pure luxury with our collection of freestanding and built-in bathtubs. Designed for maximum comfort and an exquisite spa-like experience at home.',
        brands: ['Hindware', 'Cera'],
        gallery: [
            '/Categories/Bathtubs/img1086.jpg', '/Categories/Bathtubs/img1087.jpg', '/Categories/Bathtubs/img1088.jpg',
            '/Categories/Bathtubs/img1092.jpg', '/Categories/Bathtubs/img1094.jpg', '/Categories/Bathtubs/img1097.jpg',
            '/Categories/Bathtubs/img1098.jpg', '/Categories/Bathtubs/img1115.jpg', '/Categories/Bathtubs/img1116.jpg',
            '/Categories/Sanitaryware/img544.jpg', '/Categories/Sanitaryware/img545.jpg', '/Categories/Sanitaryware/img875.jpg'
        ]
    },
    'accessories': {
        title: 'Bathroom Accessories',
        subtitle: 'Functional Elegance',
        image: '/Categories/Accessories/img00453.jpg',
        description: 'The final touches that complete your bathroom. From designer soap dispensers to premium towel racks, our accessories blend utility with sophisticated style.',
        brands: ['Hindware', 'Cera', 'Plumber'],
        gallery: [
            '/Categories/Accessories/img00453.jpg', '/Categories/Accessories/img00468.jpg', '/Categories/Accessories/img00469.jpg',
            '/Categories/Showers/img731.jpg', '/Categories/Taps/img685.jpg', '/Categories/Sanitaryware/img875.jpg',
            '/Categories/Accessories/img00453.jpg', '/Categories/Accessories/img00468.jpg', '/Categories/Accessories/img00469.jpg',
            '/Categories/Showers/img731.jpg', '/Categories/Taps/img685.jpg', '/Categories/Sanitaryware/img875.jpg'
        ]
    }
};

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as string;
    const [data, setData] = useState<{ title: string, subtitle: string, image: string, description: string, brands: string[], gallery: string[] } | null>(null);

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
                        <p style={{ maxWidth: '450px', color: 'var(--text-soft)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            {data.description}
                        </p>

                        <div style={{ marginBottom: '4rem' }}>
                            <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-soft)', marginBottom: '1rem' }}>Brands we deal in</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {data.brands.map(brand => (
                                    <span key={brand} style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)', border: '1px solid var(--border)', padding: '0.5rem 1.2rem', borderRadius: '100px' }}>
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </div>

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
