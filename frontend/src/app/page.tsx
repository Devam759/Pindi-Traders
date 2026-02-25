'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-main)', position: 'relative', zIndex: 1 }}>
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
              padding: '4rem 0'
            }}
          >
            {BUSINESS_INFO.brands.map((brand) => (
              <motion.span
                key={brand}
                variants={fadeUp}
                className="text-uppercase"
                style={{ fontSize: '0.85rem', fontWeight: '500', color: '#888', letterSpacing: '0.2rem' }}
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Collections Gallery */}
      <section
        id="shop"
        ref={selectionRef}
        style={{
          padding: '12rem 0',
          backgroundColor: 'var(--bg-soft)',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <div className="container">
          {/* Grid items with Parallax */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '6rem',
            position: 'relative',
            zIndex: 2
          }}>
            {[
              { title: 'The Platinum Suite', cat: 'Ceramics', y: cardY1 },
              { title: 'Waterfall Flow', cat: 'Faucets', y: cardY2 },
              { title: 'Obsidian Deep', cat: 'Sanitaryware', y: cardY3 }
            ].map((item, i) => (
              <motion.div
                key={i}
                style={{ y: item.y, cursor: 'pointer' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div style={{ aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '2.5rem', overflow: 'hidden', position: 'relative', borderRadius: '2px' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%', backgroundColor: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.65rem', border: '1px solid rgba(0,0,0,0.03)' }}
                  >
                    Exhibition Visual
                  </motion.div>
                </div>
                <div>
                  <p className="accent-text" style={{ fontSize: '0.6rem', color: 'var(--accent)', marginBottom: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>{item.cat}</p>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-main)' }}>{item.title}</h3>
                </div>
              </motion.div>
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
