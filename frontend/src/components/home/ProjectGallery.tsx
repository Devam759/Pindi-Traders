'use client';

import { motion } from 'framer-motion';

export default function ProjectGallery() {
    const projects = [
        { title: 'The Marble Suite', size: 'Full Width', cat: 'Bikaner Heights', src: '/Hindware/img544.jpg' },
        { title: 'Modern Minimalism', size: 'Compact', cat: 'Private Villa', src: '/Hindware/img2030.jpg' },
        { title: 'Industrial Chic', size: 'Compact', cat: 'Luxury Penthouse', src: '/Hindware/img521.jpg' },
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
                        <p className="accent-text" style={{ fontFamily: 'var(--font-logo)', letterSpacing: '0.3em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Exhibition Labs</p>
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
                                <motion.img
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={project.src}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />

                                <div style={{
                                    position: 'absolute',
                                    bottom: '3rem',
                                    left: '3rem',
                                    zIndex: 2
                                }}>
                                    <p className="text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.2rem', color: '#999', marginBottom: '0.5rem' }}>{project.cat}</p>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: '400', fontFamily: 'var(--font-serif)' }}>{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
