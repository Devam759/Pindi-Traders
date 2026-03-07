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
        <section className="section" id="gallery" style={{ backgroundColor: 'var(--bg-main)', padding: '6rem 0', transition: 'background-color 0.8s ease' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="accent-text" style={{ fontFamily: 'var(--font-logo)', letterSpacing: '0.3em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}></p>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>Bespoke <br /><span style={{ fontStyle: 'italic', fontWeight: '400', fontFamily: 'var(--font-serif)' }}>Environments</span></h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '340px' }}
                    >
                        <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                            Transforming functional spaces into artistic sanctuaries through precise engineering and world-class design elements.
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem'
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: project.size === 'Full Width' ? '1 / span 2' : 'auto',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                aspectRatio: project.size === 'Full Width' ? '21/9' : '1/1',
                                backgroundColor: 'var(--bg-soft)',
                                overflow: 'hidden',
                                position: 'relative',
                                transition: 'background-color 0.8s ease'
                            }}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ width: '100%', height: '100%', position: 'relative' }}
                                >
                                    <Image
                                        src={project.src}
                                        alt={`Luxury Bathroom Design ${i + 1} - Pindi Traders Bikaner`}
                                        fill
                                        sizes={project.size === 'Full Width' ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
