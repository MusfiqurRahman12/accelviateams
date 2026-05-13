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
        const sectionIds = ["sec-bottlenecks","sec-efficiency","sec-ux"];
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
                        <span>Insights</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">Insights</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> May 14, 2026</span>
                            <span className="news-read"><i className="fa-regular fa-clock"></i> 6 min read</span>
                        </div>
                    </div>

                    <h1 className="article-title anim">The Hidden ROI of Custom Web Applications in 2026</h1>
                    <p className="article-lead anim">Discover how custom web applications streamline internal processes, reduce overhead costs, and create unparalleled user experiences that drive revenue.</p>

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
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="Banner" className="article-banner-img" />
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
                                    <li><a href="#sec-bottlenecks" className="toc-link">Identifying Operational Bottlenecks</a></li>
                                    <li><a href="#sec-efficiency" className="toc-link">Driving Efficiency</a></li>
                                    <li><a href="#sec-ux" className="toc-link">Customer Experience as a Differentiator</a></li>
                                </ol>
                            </div>

                            <div className="prose anim">
                                <h2 id="sec-bottlenecks">Identifying Operational Bottlenecks</h2>
                                <p>Most companies rely on a patchwork of SaaS tools that don't talk to each other. This creates data silos and forces employees to do manual data entry. A custom web app unifies these systems.</p>

                                <h2 id="sec-efficiency">Driving Efficiency</h2>
                                <p>By automating routine tasks and creating unified dashboards, custom web applications can save hundreds of man-hours per month. This efficiency directly translates to the bottom line.</p>

                                <h2 id="sec-ux">Customer Experience as a Differentiator</h2>
                                <p>In 2026, user experience is the primary battlefield. A bespoke web application allows you to craft a frictionless journey for your customers, significantly increasing retention rates.</p>
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
