'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/home/Hero';
import ProjectGallery from '@/components/sections/home/ProjectGallery';
import ContactSection from '@/components/sections/home/ContactSection';
import { BUSINESS_INFO } from '@/lib/constants';

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardY1 = useTransform(selectionProgress, [0, 1], isMobile ? [0, 0] : [0, -120]);
  const cardY2 = useTransform(selectionProgress, [0, 1], isMobile ? [0, 0] : [0, -30]);
  const cardY3 = useTransform(selectionProgress, [0, 1], isMobile ? [0, 0] : [0, -180]);

  return (
    <main style={{ position: 'relative' }}>
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
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
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
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
                whileHover={{ filter: 'grayscale(0) opacity(1)', scale: 1.1 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="140px"
                  style={{ objectFit: 'contain', padding: '10px' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="shop"
        ref={selectionRef}
        className="shop-section"
        style={{
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
          <div className="shop-grid">
            {[
              { cat: 'Sanitaryware', y: cardY1, src: '/Categories/Sanitaryware/img1141.webp', slug: 'sanitary' },
              { cat: 'Basins', y: cardY2, src: '/Categories/Basins/img00001.webp', slug: 'basins' },
              { cat: 'Taps', y: cardY3, src: '/Categories/Taps/img2001.webp', slug: 'taps' },
              { cat: 'Showers', y: cardY1, src: '/Categories/Showers/img00408.webp', slug: 'showers' },
              { cat: 'Water Storage', y: cardY2, src: '/Categories/Sanitaryware/img1244.webp', slug: 'water-storage' },
              { cat: 'Kitchen Sinks', y: cardY3, src: '/Categories/Showers/img715.webp', slug: 'kitchen-sinks' },
              { cat: 'Tiles', y: cardY1, src: '/Categories/Tiles/img991.jpg', slug: 'tiles' },
              { cat: 'Bathtubs', y: cardY2, src: '/Categories/Bathtubs/img1092.webp', slug: 'bathtubs' },
              { cat: 'Accessories', y: cardY3, src: '/Categories/Accessories/img00453.webp', slug: 'accessories' }
            ].map((item, i) => (
              <Link key={i} href={`/category/${item.slug}`} style={{ textDecoration: 'none' }}>
                <motion.div
                  style={{ y: item.y, cursor: 'pointer' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <div style={{ aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '1rem', overflow: 'hidden', position: 'relative', borderRadius: '2px' }}>
                    <Image
                      src={item.src}
                      alt={`${item.cat} - Luxury Collection at Pindi Traders Bikaner`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="category-image"
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
