'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import ProjectGallery from '@/components/home/ProjectGallery';
import ContactSection from '@/components/home/ContactSection';
import { BUSINESS_INFO } from '@/utils/constants';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const legacyRef = useRef<HTMLDivElement>(null);
  const selectionRef = useRef<HTMLDivElement>(null);

  // High-precision scroll tracking for theme and parallax
  const { scrollY } = useScroll();
  const { scrollYProgress: selectionProgress } = useScroll({
    target: selectionRef,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (legacyRef.current) {
      const legacyTop = legacyRef.current.offsetTop;
      const navbarHeight = 75;
      if (latest >= legacyTop - navbarHeight) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }
  });

  const cardY1 = useTransform(selectionProgress, [0, 1], [0, -120]);
  const cardY2 = useTransform(selectionProgress, [0, 1], [0, -30]);
  const cardY3 = useTransform(selectionProgress, [0, 1], [0, -180]);

  return (
    <main>
      <Hero />

      {/* Brand Ethos Strip */}
      <section style={{ padding: '4rem 0 0 0', backgroundColor: 'var(--bg-main)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '3rem',
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              padding: '6rem 0'
            }}
          >
            {[
              { src: '/Logos/hindware_logo.png', alt: 'Hindware' },
              { src: '/Logos/cera_logo.png', alt: 'Cera' },
              { src: '/Logos/sona_logo.png', alt: 'Sona' },
              { src: '/Logos/essco_logo.png', alt: 'Essco' },
              { src: '/Logos/plumber_logo.png', alt: 'Plumber' },
              { src: '/Logos/l&k_logo.png', alt: 'L&K' },
              { src: '/Logos/ganga_logo.png', alt: 'Ganga' },
              { src: '/Logos/sintex_logo.png', alt: 'Sintex' },
              { src: '/Logos/supreme_logo.png', alt: 'Supreme' },
              { src: '/Logos/prince_logo.png', alt: 'Prince' },
              { src: '/Logos/nirali_logo.png', alt: 'Nirali' },
              { src: '/Logos/orient_logo.png', alt: 'Orient' }
            ].map((logo) => (
              <motion.div
                key={logo.alt}
                variants={fadeUp}
                style={{
                  width: '140px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'grayscale(1) opacity(0.5)',
                  transition: 'all 0.4s ease'
                }}
                whileHover={{ filter: 'grayscale(0) opacity(1)', scale: 1.1 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Collections Gallery */}
      <section
        id="shop"
        ref={selectionRef}
        style={{
          padding: '2.5rem 0 12rem 0',
          backgroundColor: 'var(--bg-soft)',
          position: 'relative',
          zIndex: 1,
          scrollMarginTop: '100px',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem', textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '600',
              color: '#000000',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Products We Offer
            </h2>
          </motion.div>

          {/* Grid items with Parallax */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '6rem',
            position: 'relative',
            zIndex: 2
          }}>
            {[
              { cat: 'Sanitaryware', y: cardY1, src: '/Hindware/img1141.jpg', slug: 'sanitary' },
              { cat: 'Basins', y: cardY2, src: '/Hindware/img2001.jpg', slug: 'basins' },
              { cat: 'Taps', y: cardY3, src: '/Hindware/img981.jpg', slug: 'taps' },
              { cat: 'Showers', y: cardY1, src: '/Hindware/img1983.jpg', slug: 'showers' },
              { cat: 'Water Storage', y: cardY2, src: '/Hindware/img1244.jpg', slug: 'water-storage' },
              { cat: 'CPVC Pipes & Fittings', y: cardY3, src: '/Hindware/img571.jpg', slug: 'cpvc-pipes' },
              { cat: 'Kitchen Sinks', y: cardY1, src: '/Hindware/img715.jpg', slug: 'kitchen-sinks' },
              { cat: 'Tiles', y: cardY2, src: '/Hindware/img520.jpg', slug: 'tiles' },
              { cat: 'Bathtubs', y: cardY3, src: '/Hindware/img544.jpg', slug: 'bathtubs' }
            ].map((item, i) => (
              <Link key={i} href={`/category/${item.slug}`} style={{ textDecoration: 'none' }}>
                <motion.div
                  style={{ y: item.y, cursor: 'pointer' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <div style={{ aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '2.5rem', overflow: 'hidden', position: 'relative', borderRadius: '2px' }}>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      src={item.src}
                      alt={item.cat}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#000000',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase'
                    }}>
                      {item.cat}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
          This is the "Dark Zone". 
          By wrapping everything from Legacy downwards in a div with a black background,
          we ensure that the scroll journey feels like entering a separate world.
      */}
      <div
        ref={legacyRef}
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          position: 'relative',
          zIndex: 2,
          transition: 'background-color 1s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Philosophy Section */}
        <section style={{ padding: '12rem 0', backgroundColor: 'transparent' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              <p className="text-uppercase" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.4em', fontSize: '0.7rem', marginBottom: '3rem' }}>The Pindi Legacy</p>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.5', fontWeight: '300', fontFamily: 'var(--font-serif)' }}>
                We don't just provide <span style={{ fontStyle: 'italic', fontWeight: '400' }}>fixtures</span>. <br />
                We curate the <span style={{ color: 'var(--accent)', fontWeight: '500' }}>landscape</span> of your everyday rituals.
              </h2>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent)', margin: '4rem auto' }}></div>
            </motion.div>
          </div>
        </section>

        <ProjectGallery />
        <ContactSection />
      </div>

      <footer style={{ height: '10vh', backgroundColor: '#000000' }} />
    </main>
  );
}
