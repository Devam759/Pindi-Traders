'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-main)', overflow: 'hidden' }}>
            <div className="container" style={{ height: '85vh', display: 'flex', gap: '2rem' }}>

                {/* Left Side: Editorial Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        style={{ fontFamily: 'var(--font-logo)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem' }}
                    >
                        Collection 2026 / 01
                    </motion.p>

                    <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '0.95', marginBottom: '3rem', fontWeight: '800' }}>
                        Elevate <br />
                        <span style={{ fontStyle: 'italic', fontWeight: '400', fontFamily: 'var(--font-serif)', marginLeft: '1rem' }}>Artistic</span> <br />
                        Living.
                    </h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
                        style={{ height: '1px', backgroundColor: 'var(--primary)', marginBottom: '3rem' }}
                    />

                    <p style={{ maxWidth: '360px', color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                        A curated selection of the world's most sophisticated sanitaryware, fittings, and designer tiles. Redefining high-end living in Bikaner.
                    </p>
                </motion.div>

                {/* Right Side: Large Cinematic Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ flex: '1.5', position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5' }}
                >
                    {/* Main Visual Image */}
                    <img
                        src="/Mains/hero.jpg"
                        alt="Cinematic Exhibition"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />


                </motion.div>

            </div>
        </section>
    );
}
