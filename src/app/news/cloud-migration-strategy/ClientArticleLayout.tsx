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
        const sectionIds = ["sec-assessment","sec-execution","sec-optimization"];
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
                        <span>Company</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">Company</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> May 14, 2026</span>
                            <span className="news-read"><i className="fa-regular fa-clock"></i> 7 min read</span>
                        </div>
                    </div>

                    <h1 className="article-title anim">A Fail-Proof Cloud Migration Strategy for Growing Businesses</h1>
                    <p className="article-lead anim">Moving from on-premise to the cloud is daunting. We outline the exact step-by-step strategy to ensure zero downtime and maximum data integrity.</p>

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
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Banner" className="article-banner-img" />
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
                                    <li><a href="#sec-assessment" className="toc-link">Phase 1: Deep Assessment</a></li>
                                    <li><a href="#sec-execution" className="toc-link">Phase 2: Staged Execution</a></li>
                                    <li><a href="#sec-optimization" className="toc-link">Phase 3: Cloud Optimization</a></li>
                                </ol>
                            </div>

                            <div className="prose anim">
                                <h2 id="sec-assessment">Phase 1: Deep Assessment</h2>
                                <p>Before moving a single byte, a thorough audit of your existing infrastructure is required. We map dependencies, identify legacy systems, and choose the right cloud model (IaaS, PaaS, or SaaS).</p>

                                <h2 id="sec-execution">Phase 2: Staged Execution</h2>
                                <p>A 'lift and shift' approach often fails. We advocate for staged migrations, moving non-critical workloads first to validate the architecture, followed by core databases using real-time replication to ensure zero downtime.</p>

                                <h2 id="sec-optimization">Phase 3: Cloud Optimization</h2>
                                <p>Once in the cloud, the work isn't over. We implement auto-scaling, containerization (Docker/Kubernetes), and cost-management alerts to ensure you only pay for the compute you actually use.</p>
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
