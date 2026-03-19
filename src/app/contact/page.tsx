'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
    const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', msg: string }>({ type: 'idle', msg: '' });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.anim').forEach((el: any) => {
            gsap.fromTo(el,
                { opacity: 0, y: 32 },
                {
                    opacity: 1, y: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', msg: '' });

        const formData = new FormData(e.currentTarget);

        try {
            // Pointing to a potential Next.js API route instead of mail.php
            const res = await fetch('/api/contact', { method: 'POST', body: formData });

            if (res.ok) {
                setFormStatus({ type: 'success', msg: '✓ Message sent successfully. We will be in touch shortly.' });
                (e.target as HTMLFormElement).reset();
            } else {
                // If the user's cPanel is still set up to use mail.php in the root, /api/contact might 404 in dev.
                // But we will catch it here.
                setFormStatus({ type: 'error', msg: '✗ Server error. Please email us directly at hello@accelviateams.com' });
            }
        } catch (err) {
            setFormStatus({ type: 'error', msg: '✗ Network error. Please email us directly at hello@accelviateams.com' });
        }
    };

    return (
        <main>
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-label anim"><span className="label-line"></span><span>Get In Touch</span></div>
                    <h1 className="hero-title anim" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', marginTop: '1rem' }}>
                        Let's Build Something <span className="hero-title-accent">Together.</span>
                    </h1>
                    <p className="hero-subtitle anim" style={{ marginTop: '1.25rem' }}>
                        Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you
                        promptly.
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="section" style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="contact-wrap">
                        {/* Left: Contact Info */}
                        <div className="anim">
                            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Reach Out</h2>

                            <div className="contact-detail">
                                <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <p className="contact-value"><a href="mailto:hello@accelviateams.com">hello@accelviateams.com</a></p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-icon"><i className="fa-solid fa-globe"></i></div>
                                <div>
                                    <p className="contact-label">Website</p>
                                    <p className="contact-value"><a href="https://accelviateams.com" target="_blank" rel="noreferrer">accelviateams.com</a></p>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '1rem' }}>
                                    Follow Us</p>
                                <div className="footer-socials">
                                    <a href="#" className="social-btn" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#" className="social-btn" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="#" className="social-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#" className="social-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--dark-3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                                    What We Do</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {['CMS & Ecommerce', 'Custom Web Applications', 'WordPress Plugins', 'Theme Builders', 'Mobile App Development', 'Digital Marketing & SEO'].map((service, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--light)' }}>
                                            <i className="fa-solid fa-check" style={{ color: 'var(--green)', fontSize: '0.7rem' }}></i> {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="anim">
                            {formStatus.type === 'success' && (
                                <div style={{ display: 'block', background: 'rgba(45,189,90,0.1)', border: '1px solid rgba(45,189,90,0.3)', color: '#2DBD5A', padding: '1rem 1.5rem', borderRadius: '12px', marginBottom: '1rem', fontWeight: 500 }}>
                                    {formStatus.msg}
                                </div>
                            )}
                            {formStatus.type === 'error' && (
                                <div style={{ display: 'block', background: 'rgba(220,50,50,0.1)', border: '1px solid rgba(220,50,50,0.3)', color: '#e05252', padding: '1rem 1.5rem', borderRadius: '12px', marginBottom: '1rem', fontWeight: 500 }}>
                                    {formStatus.msg}
                                </div>
                            )}
                            <form className="form-wrap" id="contactForm" noValidate onSubmit={handleSubmit}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.75rem', color: 'var(--white)' }}>Send a Message</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="fname">First Name <span style={{ color: 'var(--green)' }}>*</span></label>
                                        <input type="text" id="fname" name="fname" className="form-control" placeholder="John" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" name="lname" className="form-control" placeholder="Smith" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address <span style={{ color: 'var(--green)' }}>*</span></label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="john@yourcompany.com" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="service">Service Interested In</label>
                                    <select id="service" name="service" className="form-control" defaultValue="">
                                        <option value="" disabled>Select a service...</option>
                                        <option value="CMS">CMS & Ecommerce</option>
                                        <option value="WebApp">Custom Web Application</option>
                                        <option value="Plugin">WordPress Plugin</option>
                                        <option value="Theme">Theme Development</option>
                                        <option value="Mobile">Mobile App</option>
                                        <option value="API">API Integration</option>
                                        <option value="Marketing">Digital Marketing & SEO</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="budget">Budget Range</label>
                                    <select id="budget" name="budget" className="form-control" defaultValue="">
                                        <option value="" disabled>Select range...</option>
                                        <option value="Under 5k">Under $5,000</option>
                                        <option value="5k - 15k">$5,000 – $15,000</option>
                                        <option value="15k - 50k">$15,000 – $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Tell Us About Your Project <span style={{ color: 'var(--green)' }}>*</span></label>
                                    <textarea id="message" name="message" className="form-control" placeholder="Describe your project, timeline, and any requirements..." required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={formStatus.type === 'loading'}>
                                    {formStatus.type === 'loading' ? (
                                        <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>
                                    ) : (
                                        <>Send Message <i className="fa-solid fa-paper-plane"></i></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}


