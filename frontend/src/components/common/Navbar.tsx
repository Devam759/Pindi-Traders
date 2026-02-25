'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Observe theme changes on the root element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    const theme = document.documentElement.getAttribute('data-theme');
                    setIsDarkTheme(theme === 'dark');
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                height: isScrolled ? '75px' : '100px',
                backgroundColor: isScrolled
                    ? (isDarkTheme ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)')
                    : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', gap: '3rem', flex: 1 }}>
                    {['Home', 'Shop', 'Gallery'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} style={{ position: 'relative' }}>
                            <motion.span
                                className="text-uppercase"
                                style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '500',
                                    display: 'inline-block',
                                    color: 'var(--text-main)',
                                    letterSpacing: '0.2em'
                                }}
                                whileHover={{ y: -2 }}
                            >
                                {item}
                            </motion.span>
                        </Link>
                    ))}
                </div>

                <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <motion.span
                        style={{
                            fontFamily: 'var(--font-logo)',
                            fontSize: '1.55rem',
                            letterSpacing: '0.5em',
                            fontWeight: '400',
                            color: 'var(--text-main)',
                            transition: 'color 0.8s ease'
                        }}
                    >
                        PINDI TRADERS
                    </motion.span>
                </Link>

                <div style={{ display: 'flex', gap: '3rem', justifyContent: 'flex-end', flex: 1 }}>
                    <Link href="#contact" className="text-uppercase" style={{ fontSize: '0.7rem', fontWeight: '500', color: 'var(--text-main)', letterSpacing: '0.2em' }}>
                        Inquiry
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
