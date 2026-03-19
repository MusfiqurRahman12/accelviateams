'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Work() {
    const [filter, setFilter] = useState('all');

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

    const getCardStyle = (cat: string) => {
        const match = filter === 'all' || cat === filter;
        return {
            transition: 'opacity 0.3s, transform 0.3s',
            opacity: match ? 1 : 0.2,
            transform: match ? 'scale(1)' : 'scale(0.97)',
            pointerEvents: match ? 'auto' : 'none'
        } as React.CSSProperties;
    };

    const projects = [
        { cat: 'cms', label: 'CMS & Ecommerce', title: 'Enterprise WordPress Platform', desc: 'Custom WordPress multisite with headless architecture, custom Gutenberg blocks, and RESTful API layer for a global enterprise client.', icon: 'fa-database', bg: 'linear-gradient(135deg,#152217,#0D1410)' },
        { cat: 'mobile', label: 'Mobile App', title: 'Customer Service Portal App', desc: 'Flutter cross-platform app with real-time notifications, service booking, and integrated payment gateway for iOS and Android.', icon: 'fa-mobile-screen', bg: 'linear-gradient(135deg,#1C3A2D,#0D1F17)' },
        { cat: 'plugin', label: 'WordPress Plugin', title: 'Advanced Booking System', desc: 'WooCommerce extension for appointment scheduling with calendar sync, email notifications, and multi-location management.', icon: 'fa-puzzle-piece', bg: 'linear-gradient(135deg,#1A2C3A,#0D1720)' },
        { cat: 'webapp', label: 'Custom Web App', title: 'SaaS Analytics Dashboard', desc: 'Full-stack analytics platform with real-time charts, user management, role-based access control, and CSV export functionality.', icon: 'fa-window-restore', bg: 'linear-gradient(135deg,#2A1C38,#160D20)' },
        { cat: 'theme', label: 'Theme Builder', title: 'Luxury Hotel Theme', desc: 'Custom WordPress theme for a luxury hotel brand — with booking integration, multilingual support, and a 99 Lighthouse score.', icon: 'fa-brush', bg: 'linear-gradient(135deg,#1A2A1C,#0D170E)' },
        { cat: 'cms', label: 'CMS & Ecommerce', title: 'Media Publishing Platform', desc: 'Headless WordPress CMS powering a high-traffic media site with custom post types, taxonomies, and a Next.js front end.', icon: 'fa-newspaper', bg: 'linear-gradient(135deg,#2A2218,#171210)' },
        { cat: 'marketing', label: 'Digital Marketing & SEO', title: 'SaaS Growth Campaign', desc: 'Comprehensive SEO and paid acquisition strategy that increased organic traffic by 300% and reduced customer acquisition cost.', icon: 'fa-bullhorn', bg: 'linear-gradient(135deg,#3A1C2A,#200D17)' }
    ];

    return (
        <main>
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-label anim"><span className="label-line"></span><span>Our Portfolio</span></div>
                    <h1 className="hero-title anim" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', marginTop: '1rem' }}>
                        Work We're <span className="hero-title-accent">Proud Of.</span>
                    </h1>
                    <p className="hero-subtitle anim" style={{ marginTop: '1.25rem' }}>
                        A selection of projects across CMS development, custom web applications, WordPress plugins, mobile apps,
                        and more.
                    </p>
                </div>
            </section>

            {/* PORTFOLIO */}
            <section className="section" style={{ paddingTop: '3rem' }}>
                <div className="container">

                    {/* Filters */}
                    <div className="filter-bar anim">
                        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                        <button className={`filter-btn ${filter === 'cms' ? 'active' : ''}`} onClick={() => setFilter('cms')}>CMS</button>
                        <button className={`filter-btn ${filter === 'webapp' ? 'active' : ''}`} onClick={() => setFilter('webapp')}>Web App</button>
                        <button className={`filter-btn ${filter === 'plugin' ? 'active' : ''}`} onClick={() => setFilter('plugin')}>WordPress Plugin</button>
                        <button className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>Mobile App</button>
                        <button className={`filter-btn ${filter === 'theme' ? 'active' : ''}`} onClick={() => setFilter('theme')}>Theme</button>
                        <button className={`filter-btn ${filter === 'marketing' ? 'active' : ''}`} onClick={() => setFilter('marketing')}>Digital Marketing & SEO</button>
                    </div>

                    {/* Projects */}
                    <div className="work-full-grid">
                        {projects.map((p, i) => (
                            <Link href="/contact" className="project-card anim" data-cat={p.cat} style={getCardStyle(p.cat)} key={i}>
                                <div className="project-img" style={{ aspectRatio: '16/9' }}>
                                    <div className="project-img-placeholder" style={{ background: p.bg }}>
                                        <i className={`fa-solid ${p.icon}`}></i>
                                    </div>
                                    <div className="project-overlay"></div>
                                </div>
                                <div className="project-info">
                                    <span className="project-cat">{p.label}</span>
                                    <h3 className="project-name">{p.title}</h3>
                                    <p className="project-desc">{p.desc}</p>
                                    <span className="project-cta">View Details <i className="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }} className="anim">
                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>These are sample projects. Your actual portfolio
                            will replace these.</p>
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Project <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-inner anim">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="label-line"></span><span>Next Project</span><span className="label-line"></span>
                        </div>
                        <h2 className="cta-title">Have a project in mind?</h2>
                        <p className="cta-sub">Let's talk about what you're building. We'd love to make it happen.</p>
                        <div className="cta-actions">
                            <a href="mailto:hello@accelviateams.com" className="cta-email">
                                <i className="fa-solid fa-envelope"></i> hello@accelviateams.com
                            </a>
                            <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}


