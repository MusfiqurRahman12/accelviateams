'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newsData from '@/data/news.json';

export default function ClientArticleLayout() {
    const [copied, setCopied] = useState(false);
    const [tocOpen, setTocOpen] = useState(true);

    const recentPosts = newsData.slice(0, 5);
    const relatedPosts = newsData.filter(p => !p.isFeatured).slice(0, 3);

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

        const tocLinks = document.querySelectorAll('.toc-link');
        const sectionIds = ["sec-engagement","sec-crossplatform","sec-loyalty"];
        const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        const updateActiveToc = () => {
            let current = '';
            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
            });
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) link.classList.add('active');
            });
        };
        window.addEventListener('scroll', updateActiveToc, { passive: true });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.removeEventListener('scroll', updateActiveToc);
        };
    }, []);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <main>
            <section className="article-hero">
                <div className="container">
                    <nav className="article-breadcrumb anim">
                        <Link href="/"><i className="fa-solid fa-house"></i></Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link href="/news">News</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span>Product</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">Product</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> May 14, 2026</span>
                            <span className="news-read"><i className="fa-regular fa-clock"></i> 4 min read</span>
                        </div>
                    </div>

                    <h1 className="article-title anim">Why Mobile App Development is Crucial for Enterprise Growth</h1>
                    <p className="article-lead anim">With over 70% of digital traffic coming from mobile, having a responsive website is no longer enough. Here is why your business needs a dedicated mobile app.</p>

                    <div className="article-byline anim">
                        <div className="article-author">
                            <div className="author-avatar"><i className="fa-solid fa-laptop-code"></i></div>
                            <div>
                                <span className="author-name">AccelviaTeams Experts</span>
                                <span className="author-role">IT Solutions</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="article-hero-img">
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop" alt="Banner" className="article-banner-img" />
                        <div className="article-banner-overlay"></div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="article-layout">
                        <article className="article-body" id="articleBody">
                            <div className={`toc anim${tocOpen ? '' : ' toc-collapsed'}`} id="tocBox">
                                <button className="toc-header toc-toggle" onClick={() => setTocOpen(!tocOpen)} type="button">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <i className="fa-solid fa-list"></i><span>Table of Contents</span>
                                    </div>
                                </button>
                                <ol className={`toc-list${tocOpen ? '' : ' toc-list--hidden'}`}>
                                    <li><a href="#sec-engagement" className="toc-link">Unmatched User Engagement</a></li>
                                    <li><a href="#sec-crossplatform" className="toc-link">The Power of Cross-Platform</a></li>
                                    <li><a href="#sec-loyalty" className="toc-link">Building Brand Loyalty</a></li>
                                </ol>
                            </div>

                            <div className="prose anim">
                                <h2 id="sec-engagement">Unmatched User Engagement</h2>
                                <p>Mobile apps offer push notifications, offline access, and hardware integration (like cameras and GPS) that websites simply cannot match. This leads to significantly higher user engagement.</p>

                                <h2 id="sec-crossplatform">The Power of Cross-Platform</h2>
                                <p>Frameworks like Flutter and React Native have matured. You no longer need separate iOS and Android teams. A single codebase can deploy native-feeling apps to both stores efficiently.</p>

                                <h2 id="sec-loyalty">Building Brand Loyalty</h2>
                                <p>An icon on your customer's home screen is prime real estate. It keeps your brand top-of-mind and provides a direct, unmediated channel to your most loyal users.</p>
                            </div>
                        </article>

                        <aside className="news-sidebar article-sidebar">
                            <div className="sidebar-widget anim">
                                <div className="author-card">
                                    <h4 className="author-card-name">AccelviaTeams</h4>
                                    <p className="author-card-bio">Your trusted partner in enterprise IT solutions, CMS development, and custom web applications.</p>
                                </div>
                            </div>
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
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
