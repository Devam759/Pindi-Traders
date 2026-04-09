'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

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

    const navItems = ['Home', 'Shop', 'Gallery'];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
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
                    {/* Desktop Navigation Left */}
                    <div className="hide-mobile" style={{ display: 'flex', gap: '3rem', flex: 1 }}>
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                onClick={() => setActiveItem(item)}
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                                style={{ position: 'relative', padding: '0.6rem 0' }}
                            >
                                <motion.span
                                    className="text-uppercase"
                                    style={{
                                        fontSize: '0.7rem',
                                        fontWeight: '500',
                                        display: 'inline-block',
                                        color: hoveredItem === item ? 'var(--accent)' : 'var(--text-main)',
                                        letterSpacing: '0.2em',
                                        transition: 'color 0.4s ease'
                                    }}
                                >
                                    {item}
                                </motion.span>
                                {hoveredItem === item && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            backgroundColor: 'var(--accent)',
                                            zIndex: 1
                                        }}
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>



                    {/* Logo - Center */}
                    <Link
                        href="/"
                        onClick={() => { setActiveItem('Home'); setIsOpen(false); }}
                        onMouseEnter={() => setHoveredItem('Logo')}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="nav-logo-link"
                        style={{ display: 'flex', alignItems: 'center', position: 'relative', gap: '1rem' }}
                    >
                        <div style={{ position: 'relative', width: '40px', height: '40px', flexShrink: 0 }}>
                            <Image
                                src="/Logos/logo_bg_remove.png"
                                alt="Pindi Traders Logo"
                                fill
                                sizes="40px"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <motion.span
                            style={{
                                fontFamily: 'var(--font-logo)',
                                fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
                                letterSpacing: '0.4em',
                                fontWeight: '400',
                                color: 'var(--text-main)',
                                transition: 'color 0.8s ease',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            PINDI TRADERS
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation Right */}
                    <div className="hide-mobile" style={{ display: 'flex', gap: '3rem', justifyContent: 'flex-end', flex: 1 }}>
                        <Link
                            href="/#contact"
                            className="text-uppercase"
                            onClick={() => setActiveItem('Inquiry')}
                            onMouseEnter={() => setHoveredItem('Inquiry')}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={{ fontSize: '0.7rem', fontWeight: '500', color: hoveredItem === 'Inquiry' ? 'var(--accent)' : 'var(--text-main)', letterSpacing: '0.2em', position: 'relative', padding: '0.6rem 0' }}
                        >
                            Inquiry
                            {hoveredItem === 'Inquiry' && (
                                <motion.div
                                    layoutId="navbar-underline-right"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        backgroundColor: 'var(--accent)',
                                        zIndex: 1
                                    }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="show-mobile" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '6px',
                                zIndex: 1101
                            }}
                            aria-label="Toggle Menu"
                        >
                            <motion.span
                                animate={{
                                    rotate: isOpen ? 45 : 0,
                                    y: isOpen ? 7 : 0,
                                    width: isOpen ? '24px' : '20px'
                                }}
                                style={{
                                    height: '1.5px',
                                    backgroundColor: 'var(--text-main)',
                                    display: 'block',
                                    transformOrigin: 'center'
                                }}
                            />
                            <motion.span
                                animate={{
                                    opacity: isOpen ? 0 : 1,
                                    width: '20px'
                                }}
                                style={{
                                    height: '1.5px',
                                    backgroundColor: 'var(--text-main)',
                                    display: 'block'
                                }}
                            />
                            <motion.span
                                animate={{
                                    rotate: isOpen ? -45 : 0,
                                    y: isOpen ? -7 : 0,
                                    width: isOpen ? '24px' : '20px'
                                }}
                                style={{
                                    height: '1.5px',
                                    backgroundColor: 'var(--text-main)',
                                    display: 'block',
                                    transformOrigin: 'center'
                                }}
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.98)' : 'rgba(255,255,255,0.98)',
                            zIndex: 1050,
                            padding: '120px 2rem 4rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {[...navItems, 'Inquiry'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={item === 'Home' ? '/' : (item === 'Inquiry' ? '/#contact' : `/#${item.toLowerCase()}`)}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            fontSize: '2.5rem',
                                            fontFamily: 'var(--font-serif)',
                                            fontWeight: '300',
                                            color: 'var(--text-main)',
                                            display: 'block',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {item === 'Inquiry' ? 'Get in Touch' : item}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '40px' }}
                                            style={{ height: '2px', backgroundColor: 'var(--accent)', marginTop: '0.5rem' }}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}
                        >
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '1rem' }}>Visit Our Showroom</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', maxWidth: '240px' }}>
                                Main Rani Bazar Circle, Rani Bazar, Bikaner, Rajasthan 334001
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
