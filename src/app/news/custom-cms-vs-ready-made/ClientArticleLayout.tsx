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
        const sectionIds = ["sec-limitations","sec-custom","sec-roi"];
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

                    <h1 className="article-title anim">Custom CMS vs. Ready-Made: Which is Right for Your Business?</h1>
                    <p className="article-lead anim">A deep dive into why enterprise businesses are moving away from restrictive off-the-shelf platforms and investing in custom CMS development for maximum scalability.</p>

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
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Banner" className="article-banner-img" />
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
                                    <li><a href="#sec-limitations" className="toc-link">The Limitations of Ready-Made CMS</a></li>
                                    <li><a href="#sec-custom" className="toc-link">Why Custom CMS is the Future</a></li>
                                    <li><a href="#sec-roi" className="toc-link">Calculating the Long-Term ROI</a></li>
                                </ol>
                            </div>

                            <div className="prose anim">
                                <h2 id="sec-limitations">The Limitations of Ready-Made CMS</h2>
                                <p>Off-the-shelf platforms like basic WordPress or Wix are great for getting started, but as your business scales, you quickly hit a wall. Plugin bloat, security vulnerabilities, and restrictive templates hinder growth.</p>

                                <h2 id="sec-custom">Why Custom CMS is the Future</h2>
                                <p>A custom CMS built specifically for your operational workflows eliminates bloat. It allows for seamless third-party API integrations, robust security tailored to your industry, and blazing-fast performance.</p>

                                <h2 id="sec-roi">Calculating the Long-Term ROI</h2>
                                <p>While custom development requires an initial investment, the long-term ROI is massive. You save on expensive recurring enterprise licensing, prevent costly security breaches, and empower your marketing team with tools that actually work.</p>
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
