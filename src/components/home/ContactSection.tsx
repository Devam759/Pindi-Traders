'use client';

import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '@/utils/constants';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const submissionData = {
                ...formData,
                access_key: ACCESS_KEY,
                subject: `New Inquiry from ${formData.name}`,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                setErrorMessage('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Submission failed. Please check your details and try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            setErrorMessage('Network error. Please check your internet connection and try again.');
        }
    };

    return (
        <section className="section" id="contact" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-main)', transition: 'background-color 1s ease' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start' }}>

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="accent-text" style={{ fontFamily: 'var(--font-logo)', letterSpacing: '0.4em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem' }}>Contact</p>
                    <h2 style={{ fontSize: '4rem', marginBottom: '3rem', lineHeight: '1', fontWeight: '800' }}>
                        Let's Talk <br />
                        <span style={{ fontStyle: 'italic', fontWeight: '400', fontFamily: 'var(--font-serif)', color: 'var(--accent)' }}>Design</span>.
                    </h2>

                    <div style={{ marginTop: '2.5rem' }}>
                        <div style={{ marginBottom: '4rem' }}>
                            <p style={{ color: 'var(--text-soft)', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>ADDRESS</p>
                            <p style={{ fontSize: '1.3rem', fontWeight: '400', maxWidth: '300px', lineHeight: '1.4' }}>{BUSINESS_INFO.address}</p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <p style={{ color: 'var(--text-soft)', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>For Inquiries contact</p>
                            <p style={{ fontSize: '2.2rem', fontWeight: '500', fontFamily: 'var(--font-logo)', letterSpacing: '0.05em' }}>{BUSINESS_INFO.phone}</p>
                            <p style={{ marginTop: '0.8rem', color: 'var(--text-soft)', fontSize: '0.9rem' }}>{BUSINESS_INFO.hours}</p>
                        </div>

                        <div style={{ marginTop: '6rem', display: 'flex', gap: '4rem' }}>
                            {[
                                { name: 'Instagram', url: BUSINESS_INFO.instagram },
                                { name: 'Mail', url: `mailto:${BUSINESS_INFO.email}` },
                                { name: 'Directions', url: BUSINESS_INFO.maps }
                            ].map(social => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        color: 'var(--text-main)',
                                        borderBottom: '1px solid var(--border)',
                                        paddingBottom: '0.5rem'
                                    }}
                                >
                                    {social.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Redesigned Premium Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: '3rem' }}>
                            <div className="form-group-lux">
                                <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-soft)', display: 'block', marginBottom: '1rem' }}>Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', padding: '1rem 0', fontSize: '1rem', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                            <div className="form-group-lux">
                                <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-soft)', display: 'block', marginBottom: '1rem' }}>Mobile Number</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Contact"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', padding: '1rem 0', fontSize: '1rem', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                            <div className="form-group-lux">
                                <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-soft)', display: 'block', marginBottom: '1rem' }}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', padding: '1rem 0', fontSize: '1rem', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                        </div>

                        <div className="form-group-lux">
                            <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-soft)', display: 'block', marginBottom: '1rem' }}>Message</label>
                            <textarea
                                placeholder="Tell us about your requirements"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', padding: '1rem 0', fontSize: '1rem', color: 'var(--text-main)', outline: 'none', minHeight: '120px', resize: 'none' }}
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            whileHover={{ scale: 1.02, backgroundColor: 'var(--text-main)', color: 'var(--bg-main)' }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%',
                                padding: '1.8rem',
                                background: 'transparent',
                                border: '1px solid var(--text-main)',
                                color: 'var(--text-main)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.4em',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                cursor: status === 'loading' ? 'wait' : 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            {status === 'loading' ? 'PROCESSING...' : 'SUBMIT INQUIRY'}
                        </motion.button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ textAlign: 'center', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.05em' }}
                            >
                                Your message has been sent successfully.
                            </motion.p>
                        )}
                        {status === 'error' && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ textAlign: 'center', color: '#ff4b2b', fontSize: '0.9rem', fontWeight: '500' }}
                            >
                                {errorMessage || "Something went wrong. Please try again later."}
                            </motion.p>
                        )}
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
