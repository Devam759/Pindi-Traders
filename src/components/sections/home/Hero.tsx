'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-main)', overflow: 'hidden', scrollMarginTop: '100px' }}>
            <div className="container" style={{ height: '85vh', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                {/* Left Side: Editorial Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10, minWidth: 0 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        style={{ fontFamily: 'var(--font-logo)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem' }}
                    >
                        Collection 2026 / 01
                    </motion.p>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '0.95', marginBottom: '3rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                        Elevate <br />
                        <span style={{ fontStyle: 'italic', fontWeight: '400', fontFamily: 'var(--font-serif)', marginLeft: '0.5rem' }}>Artistic</span> <br />
                        Living.
                    </h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
                        style={{ height: '1px', backgroundColor: 'var(--primary)', marginBottom: '3rem' }}
                    />

                    <p style={{ maxWidth: '420px', color: 'var(--text-soft)', fontSize: '1rem', lineHeight: '1.8' }}>
                        A curated selection of the world&apos;s most sophisticated sanitaryware, fittings, and designer tiles. Redefining high-end living in Bikaner.
                    </p>
                </motion.div>

                {/* Right Side: Large Cinematic Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-soft)', borderRadius: '2px' }}
                >
                    {/* Main Visual Image */}
                    <Image
                        src="/Mains/hero.webp"
                        alt="Pindi Traders Bikaner - Premium Luxury Bathroom Showroom and Sanitaryware"
                        fill
                        priority
                        className="hero-image"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </motion.div>

            </div>
        </section>
    );
}
