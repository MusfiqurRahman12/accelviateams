'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newsData from '@/data/news.json';

export default function News() {
    const [subscribed, setSubscribed] = useState(false);
    const [activeCat, setActiveCat] = useState('All');
    const [activePage, setActivePage] = useState(1);

    const ITEMS_PER_PAGE = 10;
    const allGridPosts = newsData.filter(post => !post.isFeatured);
    const totalPages = Math.ceil(allGridPosts.length / ITEMS_PER_PAGE) || 1;
    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    
    const featuredPost = activePage === 1 ? newsData.find(post => post.isFeatured) : null;
    const gridPosts = allGridPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const recentPosts = newsData.slice(0, 5);

    useEffect(() => {
        // Cleanup all triggers only when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Only animate elements that haven't been animated yet
        const uninitializedElements = gsap.utils.toArray('.anim:not(.gsap-initialized)');
        
        uninitializedElements.forEach((el: any) => {
            el.classList.add('gsap-initialized');
            gsap.fromTo(el,
                { opacity: 0, y: 32 },
                {
                    opacity: 1, y: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
                }
            );
        });

        // Tell ScrollTrigger to recalculate positions since DOM just changed
        setTimeout(() => ScrollTrigger.refresh(), 100);

    }, [activePage]);

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
                            {featuredPost && (
                                <article className="news-featured anim">
                                    <div className={`news-featured-img ${featuredPost.imageClass || ''}`}>
                                        <span className="news-cat">{featuredPost.category}</span>
                                    </div>
                                    <div className="news-featured-body">
                                        <div className="news-meta">
                                            <span className="news-date"><i className="fa-regular fa-calendar"></i> {featuredPost.date}</span>
                                            {featuredPost.readTime && <span className="news-read"><i className="fa-regular fa-clock"></i> {featuredPost.readTime}</span>}
                                        </div>
                                        <h2 className="news-featured-title">{featuredPost.title}</h2>
                                        <p className="news-excerpt">{featuredPost.excerpt}</p>
                                        <Link href={featuredPost.link} className="btn btn-outline news-read-btn">Read Article <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </article>
                            )}

                            {/* News Grid */}
                            <div className="news-grid">
                                {gridPosts.map((post) => (
                                    <article key={post.id} className="news-card anim">
                                        <div className={`news-card-img ${post.imageClass || ''}`}>
                                            <span className="news-cat">{post.category}</span>
                                        </div>
                                        <div className="news-card-body">
                                            <div className="news-meta">
                                                <span className="news-date"><i className="fa-regular fa-calendar"></i> {post.date}</span>
                                                {post.readTime && <span className="news-read"><i className="fa-regular fa-clock"></i> {post.readTime}</span>}
                                            </div>
                                            <h3 className="news-card-title">{post.title}</h3>
                                            <p className="news-card-excerpt">{post.excerpt}</p>
                                            <Link href={post.link} className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="news-pagination anim">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button 
                                            key={page} 
                                            className={`pagination-btn ${activePage === page ? 'active' : ''}`} 
                                            onClick={() => {
                                                setActivePage(page);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    {activePage < totalPages && (
                                        <button 
                                            className="pagination-next"
                                            onClick={() => {
                                                setActivePage(activePage + 1);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            Next <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    )}
                                </div>
                            )}

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
                                    {recentPosts.map((post) => (
                                        <li key={`recent-${post.id}`} className="recent-news-item">
                                            <Link href={post.link} className="recent-news-link">
                                                <div className="recent-news-dot"></div>
                                                <div className="recent-news-info">
                                                    <span className="recent-news-cat">{post.category}</span>
                                                    <span className="recent-news-headline">{post.title}</span>
                                                    <span className="recent-news-date">{post.date}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
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



