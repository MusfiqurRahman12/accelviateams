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
        const sectionIds = ["sec-vulnerabilities","sec-bespoke","sec-performance"];
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
                        <span>Technology</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">Technology</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> May 14, 2026</span>
                            <span className="news-read"><i className="fa-regular fa-clock"></i> 5 min read</span>
                        </div>
                    </div>

                    <h1 className="article-title anim">Securing WordPress: Why Custom Plugins Outperform Off-the-Shelf</h1>
                    <p className="article-lead anim">A deep technical analysis of WordPress security vulnerabilities and how bespoke plugin development mitigates risk for enterprise platforms.</p>

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
                        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop" alt="Banner" className="article-banner-img" />
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
                                    <li><a href="#sec-vulnerabilities" className="toc-link">The Vulnerability of Popular Plugins</a></li>
                                    <li><a href="#sec-bespoke" className="toc-link">The Security of Bespoke Code</a></li>
                                    <li><a href="#sec-performance" className="toc-link">Performance Benefits</a></li>
                                </ol>
                            </div>

                            <div className="prose anim">
                                <h2 id="sec-vulnerabilities">The Vulnerability of Popular Plugins</h2>
                                <p>Popular WordPress plugins are massive targets for hackers. Because their codebase is public and widely used, a single zero-day exploit can compromise millions of sites simultaneously.</p>

                                <h2 id="sec-bespoke">The Security of Bespoke Code</h2>
                                <p>Custom plugins are built specifically for your needs. They don't include thousands of lines of unnecessary code (bloat), reducing the attack surface. Furthermore, the codebase is private, making automated attacks nearly impossible.</p>

                                <h2 id="sec-performance">Performance Benefits</h2>
                                <p>Beyond security, custom plugins execute faster. They only run the queries you actually need, keeping your WordPress database lean and your site loading in milliseconds.</p>
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
