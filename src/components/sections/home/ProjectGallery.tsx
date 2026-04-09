'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectGallery() {
    const projects = [
        { size: 'Full Width', src: '/Mains/img00137.webp' },
        { size: 'Compact', src: '/Mains/img00086.webp' },
        { size: 'Compact', src: '/Mains/img00027.webp' },
        { size: 'Compact', src: '/Mains/img00496.webp' },
        { size: 'Compact', src: '/Mains/img00591.webp' },
    ];

    return (
        <section className="section" id="gallery" style={{ backgroundColor: 'var(--bg-main)', padding: '6rem 0', transition: 'background-color 0.8s ease', scrollMarginTop: '100px' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(4rem, 10vw, 8rem)', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="accent-text" style={{ fontFamily: 'var(--font-logo)', letterSpacing: '0.3em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}></p>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>Global Standards, <br /><span style={{ fontStyle: 'italic', fontWeight: '400', fontFamily: 'var(--font-serif)' }}>Local Prices</span></h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '420px' }}
                    >
                        <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                            Discover our extensive collection of high-performance fixtures and designer tiles, curated from the world&apos;s most trusted brands for every home.
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                    {/* Main Featured Project */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', width: '100%' }}
                    >
                        <div style={{
                            aspectRatio: '21/9',
                            backgroundColor: 'var(--bg-soft)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ width: '100%', height: '100%', position: 'relative' }}
                            >
                                <Image
                                    src={projects[0].src}
                                    alt="Luxury Bathroom Design - Main Feature"
                                    fill
                                    sizes="100vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 2x2 Sub-Grid */}
                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 'clamp(1rem, 3vw, 2rem)'
                    }}>
                        {projects.slice(1).map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                style={{ position: 'relative', width: '100%' }}
                            >
                                <div style={{
                                    aspectRatio: '1/1',
                                    backgroundColor: 'var(--bg-soft)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    borderRadius: '2px'
                                }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: '100%', height: '100%', position: 'relative' }}
                                    >
                                        <Image
                                            src={project.src}
                                            alt={`Luxury Bathroom Detail ${i + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 50vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
