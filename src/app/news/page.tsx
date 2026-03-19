'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function News() {
    const [subscribed, setSubscribed] = useState(false);
    const [activeCat, setActiveCat] = useState('All');
    const [activePage, setActivePage] = useState(1);

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

    const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubscribed(true);
        (e.target as HTMLFormElement).reset();
    };

    const categories = [
        { name: 'All', count: 14 },
        { name: 'Company', count: 5 },
        { name: 'Technology', count: 4 },
        { name: 'Insights', count: 3 },
        { name: 'Product', count: 2 }
    ];

    return (
        <main>
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-label anim"><span className="label-line"></span><span>Latest Updates</span></div>
                    <h1 className="hero-title anim" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', marginTop: '1rem' }}>
                        News &amp; <span className="hero-title-accent">Insights</span>
                    </h1>
                    <p className="hero-subtitle anim" style={{ marginTop: '1.25rem' }}>
                        Stay in the loop with AccelviaTeams — product updates, industry insights, team news, and more.
                    </p>
                </div>
            </section>

            {/* NEWS LAYOUT */}
            <section className="section">
                <div className="container">
                    <div className="news-layout">

                        {/* MAIN NEWS FEED */}
                        <main>

                            {/* Featured Article */}
                            <article className="news-featured anim">
                                <div className="news-featured-img">
                                    <span className="news-cat">Company</span>
                                </div>
                                <div className="news-featured-body">
                                    <div className="news-meta">
                                        <span className="news-date"><i className="fa-regular fa-calendar"></i> March 5, 2026</span>
                                        <span className="news-read"><i className="fa-regular fa-clock"></i> 4 min read</span>
                                    </div>
                                    <h2 className="news-featured-title">AccelviaTeams Launches New Mobile App Development Service for Startups</h2>
                                    <p className="news-excerpt">We're excited to announce our expanded mobile development offering — purpose-built for early-stage startups who need fast, production-ready iOS and Android apps built with Flutter and React Native.</p>
                                    <Link href="/news/article" className="btn btn-outline news-read-btn">Read Article <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </article>

                            {/* News Grid */}
                            <div className="news-grid">

                                <article className="news-card anim">
                                    <div className="news-card-img news-card-img--1">
                                        <span className="news-cat">Technology</span>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> Feb 22, 2026</span>
                                            <span className="news-read"><i className="fa-regular fa-clock"></i> 3 min</span>
                                        </div>
                                        <h3 className="news-card-title">Why We're Betting Big on Next.js 15 for Client Projects</h3>
                                        <p className="news-card-excerpt">Server components, partial prerendering, and the App Router have changed how we architect modern web apps. Here's our take.</p>
                                        <Link href="/news/article" className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>

                                <article className="news-card anim">
                                    <div className="news-card-img news-card-img--2">
                                        <span className="news-cat">Insights</span>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> Feb 15, 2026</span>
                                            <span className="news-read"><i className="fa-regular fa-clock"></i> 5 min</span>
                                        </div>
                                        <h3 className="news-card-title">Headless CMS vs Traditional CMS: What's Right for Your Business?</h3>
                                        <p className="news-card-excerpt">We break down the key differences, trade-offs, and which approach we recommend depending on your content strategy and scale.</p>
                                        <Link href="/news/article" className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>

                                <article className="news-card anim">
                                    <div className="news-card-img news-card-img--3">
                                        <span className="news-cat">Product</span>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> Feb 7, 2026</span>
                                            <span className="news-read"><i className="fa-regular fa-clock"></i> 2 min</span>
                                        </div>
                                        <h3 className="news-card-title">New WordPress Plugin Released: AccelviaTeams Content Protection v2.0</h3>
                                        <p className="news-card-excerpt">Version 2.0 brings role-based content gates, improved performance, and full WordPress 6.7 compatibility — now available on WordPress.org.</p>
                                        <Link href="/news/article" className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>

                                <article className="news-card anim">
                                    <div className="news-card-img news-card-img--4">
                                        <span className="news-cat">Team</span>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> Jan 28, 2026</span>
                                            <span className="news-read"><i className="fa-regular fa-clock"></i> 3 min</span>
                                        </div>
                                        <h3 className="news-card-title">AccelviaTeams Grows to 12 Engineers — Meet Our Newest Members</h3>
                                        <p className="news-card-excerpt">We've welcomed four new engineers to the team across frontend, backend, and mobile — here's what they'll be working on.</p>
                                        <Link href="/news/article" className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>

                                <article className="news-card anim">
                                    <div className="news-card-img news-card-img--5">
                                        <span className="news-cat">Insights</span>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> Jan 18, 2026</span>
                                            <span className="news-read"><i className="fa-regular fa-clock"></i> 6 min</span>
                                        </div>
                                        <h3 className="news-card-title">API-First Development: How We Build Integrations That Scale</h3>
                                        <p className="news-card-excerpt">From RESTful design to GraphQL federation — a deep dive into our API integration methodology and lessons learned from 50+ client projects.</p>
                                        <Link href="/news/article" className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>

                                <article className="news-card anim">
                                    <div className="news-card-img news-card-img--6">
                                        <span className="news-cat">Company</span>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> Jan 5, 2026</span>
                                            <span className="news-read"><i className="fa-regular fa-clock"></i> 2 min</span>
                                        </div>
                                        <h3 className="news-card-title">Year in Review 2025: 50+ Projects, 30+ Clients, and What's Ahead</h3>
                                        <p className="news-card-excerpt">2025 was a landmark year for AccelviaTeams. We look back on our biggest milestones and share where we're headed in 2026.</p>
                                        <Link href="/news/article" className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>

                            </div>

                            {/* Pagination */}
                            <div className="news-pagination anim">
                                <button className={`pagination-btn ${activePage === 1 ? 'active' : ''}`} onClick={() => setActivePage(1)}>1</button>
                                <button className={`pagination-btn ${activePage === 2 ? 'active' : ''}`} onClick={() => setActivePage(2)}>2</button>
                                <button className={`pagination-btn ${activePage === 3 ? 'active' : ''}`} onClick={() => setActivePage(3)}>3</button>
                                <span className="pagination-dots">…</span>
                                <button className={`pagination-btn ${activePage === 8 ? 'active' : ''}`} onClick={() => setActivePage(8)}>8</button>
                                <button className="pagination-next">Next <i className="fa-solid fa-arrow-right"></i></button>
                            </div>

                        </main>

                        {/* SIDEBAR */}
                        <aside className="news-sidebar">

                            {/* Search */}
                            <div className="sidebar-widget anim">
                                <div className="sidebar-search">
                                    <input type="text" placeholder="Search articles…" className="sidebar-search-input" id="newsSearch" />
                                    <button className="sidebar-search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>

                            {/* Recent News */}
                            <div className="sidebar-widget anim">
                                <h3 className="sidebar-title"><span className="label-line"></span>Recent News</h3>
                                <ul className="recent-news-list">
                                    <li className="recent-news-item">
                                        <Link href="/news" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Company</span>
                                                <span className="recent-news-headline">AccelviaTeams Launches Mobile App Service for Startups</span>
                                                <span className="recent-news-date">Mar 5, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Technology</span>
                                                <span className="recent-news-headline">Why We're Betting Big on Next.js 15</span>
                                                <span className="recent-news-date">Feb 22, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Insights</span>
                                                <span className="recent-news-headline">Headless CMS vs Traditional CMS Explained</span>
                                                <span className="recent-news-date">Feb 15, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Product</span>
                                                <span className="recent-news-headline">Content Protection Plugin v2.0 Released</span>
                                                <span className="recent-news-date">Feb 7, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Team</span>
                                                <span className="recent-news-headline">Meet Our 4 Newest Engineers</span>
                                                <span className="recent-news-date">Jan 28, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Categories */}
                            <div className="sidebar-widget anim">
                                <h3 className="sidebar-title"><span className="label-line"></span>Categories</h3>
                                <div className="cat-list">
                                    {categories.map((cat, i) => (
                                        <button
                                            key={i}
                                            className={`cat-item ${activeCat === cat.name ? 'active' : ''}`}
                                            onClick={() => setActiveCat(cat.name)}
                                        >
                                            {cat.name} <span className="cat-count">{cat.count}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Location Map */}
                            <div className="sidebar-widget anim">
                                <h3 className="sidebar-title"><span className="label-line"></span>Our Location</h3>
                                <div className="map-wrap">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9021707823246!2d90.40715167507682!3d23.74921927867811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c93f62d19%3A0x5db53bde6f8f437f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1709900000000!5m2!1sen!2sbd"
                                        width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade" title="AccelviaTeams Office Location"
                                        id="officeMap">
                                    </iframe>
                                </div>
                                <div className="map-address">
                                    <div className="map-address-row">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                    <div className="map-address-row">
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href="mailto:hello@accelviateams.com">hello@accelviateams.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="sidebar-widget sidebar-newsletter anim">
                                <div className="newsletter-icon"><i className="fa-solid fa-newspaper"></i></div>
                                <h3 className="newsletter-title">Get Updates</h3>
                                <p className="newsletter-body">Subscribe to receive our latest news and insights directly to your inbox.</p>
                                <form className="newsletter-form" id="newsletterForm" onSubmit={handleNewsletter}>
                                    <input type="email" placeholder="your@email.com" className="newsletter-input" required disabled={subscribed} />
                                    <button type="submit" className="btn btn-primary newsletter-btn" style={subscribed ? { background: 'var(--green-dark)' } : {}} disabled={subscribed}>
                                        {subscribed ? 'Subscribed!' : 'Subscribe'}
                                    </button>
                                </form>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-inner anim">
                        <div className="section-label" style={{ justifyContent: 'center' }}><span className="label-line"></span><span>Work
                            With Us</span><span className="label-line"></span></div>
                        <h2 className="cta-title">Ready to build something?</h2>
                        <p className="cta-sub">Tell us about your project — we'll find the right solution together.</p>
                        <div className="cta-actions">
                            <Link href="/contact" className="btn btn-primary btn-lg">Start a Conversation <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}



