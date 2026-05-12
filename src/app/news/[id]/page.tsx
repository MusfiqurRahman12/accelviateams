'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams, notFound } from 'next/navigation';
import newsData from '@/data/news.json';

export default function NewsDetailPage() {
    const params = useParams();
    const id = params.id as string;
    
    const post = newsData.find(p => p.id === id);

    const [copied, setCopied] = useState(false);

    if (!post) {
        return notFound();
    }

    const recentPosts = newsData.slice(0, 5);
    const relatedPosts = newsData.filter(p => !p.isFeatured && p.id !== id).slice(0, 3);

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

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <main>
            {/* ARTICLE HERO */}
            <section className="article-hero">
                <div className="container">
                    {/* Breadcrumb */}
                    <nav className="article-breadcrumb anim">
                        <Link href="/"><i className="fa-solid fa-house"></i></Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link href="/news">News</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span>{post.title}</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">{post.category}</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> {post.date}</span>
                            {post.readTime && <span className="news-read"><i className="fa-regular fa-clock"></i> {post.readTime}</span>}
                        </div>
                    </div>

                    <h1 className="article-title anim">{post.title}</h1>
                    <p className="article-lead anim">{post.excerpt}</p>

                    {/* Author + Share */}
                    <div className="article-byline anim">
                        <div className="article-author">
                            <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                            <div>
                                <span className="author-name">{post.author || 'Editorial Team'}</span>
                                {post.sourceLink ? (
                                    <a href={post.sourceLink} target="_blank" rel="noreferrer" className="author-role" style={{ color: 'var(--green-main)', textDecoration: 'underline' }}>View Original Source</a>
                                ) : (
                                    <span className="author-role">Official Blog</span>
                                )}
                            </div>
                        </div>
                        <div className="article-share">
                            <span className="share-label">Share</span>
                            <a href="#" className="share-btn" title="Share on LinkedIn" id="shareLinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="share-btn" title="Share on X" id="shareX"><i className="fa-brands fa-x-twitter"></i></a>
                            <button className="share-btn" title="Copy link" id="copyLink" onClick={copyLink}>
                                <i className={copied ? 'fa-solid fa-check' : 'fa-solid fa-link'}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Image Banner */}
                <div className="container">
                    <div className="article-hero-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/news-banner.jpg"
                            alt="Mobile App Development Banner"
                            className="article-banner-img"
                        />
                        <div className="article-banner-overlay"></div>
                    </div>
                </div>
            </section>

            {/* ARTICLE BODY */}
            <section className="section" style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="article-layout">

                        {/* MAIN CONTENT */}
                        <article className="article-body" id="articleBody">

                            {/* Body */}
                            <div 
                                className="prose anim" 
                                dangerouslySetInnerHTML={{ __html: post.fullContent || post.excerpt }}
                                style={{ overflowX: 'hidden' }}
                            ></div>

                            {/* Tags */}
                            <div className="article-tags anim">
                                <span className="tag-label">Category:</span>
                                <Link href="/news" className="article-tag">{post.category}</Link>
                            </div>

                            {/* Share bottom */}
                            <div className="article-share-bottom anim">
                                <span className="share-label">Found this useful? Share it:</span>
                                <div className="article-share" style={{ justifyContent: 'flex-start' }}>
                                    <a href="#" className="share-btn" title="Share on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#" className="share-btn" title="Share on X"><i className="fa-brands fa-x-twitter"></i></a>
                                    <button className="share-btn" title="Copy link" id="copyLinkBottom" onClick={copyLink}>
                                        <i className={copied ? 'fa-solid fa-check' : 'fa-solid fa-link'}></i>
                                    </button>
                                </div>
                            </div>

                            {/* Back to News */}
                            <div className="article-back anim">
                                <Link href="/news" className="btn btn-outline"><i className="fa-solid fa-arrow-left"></i> Back to News</Link>
                            </div>

                            {/* Related Articles */}
                            <div className="related-section anim">
                                <div className="section-label"><span className="label-line"></span><span>Keep Reading</span></div>
                                <h2 className="related-title">Related Articles</h2>
                                <div className="related-grid">
                                    {relatedPosts.map((post) => (
                                        <Link key={`related-${post.id}`} href={post.link} className="related-card">
                                            <div className={`related-card-img ${post.imageClass || ''}`}>
                                                <span className="news-cat">{post.category}</span>
                                            </div>
                                            <div className="related-card-body">
                                                <div className="news-meta">
                                                    <span className="news-date"><i className="fa-regular fa-calendar"></i> {post.date}</span>
                                                </div>
                                                <h3 className="related-card-title">{post.title}</h3>
                                                <span className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </article>

                        {/* SIDEBAR */}
                        <aside className="news-sidebar article-sidebar">

                            {/* Author Card */}
                            <div className="sidebar-widget anim">
                                <div className="author-card">
                                    <div className="author-card-avatar"><i className="fa-solid fa-user"></i></div>
                                    <h4 className="author-card-name">{post.author || 'Editorial Team'}</h4>
                                    {post.sourceLink ? (
                                        <div style={{ marginTop: '1rem' }}>
                                            <a href={post.sourceLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                                Read on Source <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '0.5rem' }}></i>
                                            </a>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="author-card-role">Official Blog</p>
                                            <p className="author-card-bio">We share insights, product updates, and engineering stories from
                                                the AccelviaTeams team.</p>
                                        </>
                                    )}
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

                            {/* Location Map */}
                            <div className="sidebar-widget anim">
                                <h3 className="sidebar-title"><span className="label-line"></span>Our Location</h3>
                                <div className="map-wrap">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9021707823246!2d90.40715167507682!3d23.74921927867811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c93f62d19%3A0x5db53bde6f8f437f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1709900000000!5m2!1sen!2sbd"
                                        width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
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

                            {/* CTA Widget */}
                            <div className="sidebar-widget sidebar-newsletter anim">
                                <div className="newsletter-icon"><i className="fa-solid fa-rocket"></i></div>
                                <h3 className="newsletter-title">Start a Project</h3>
                                <p className="newsletter-body">Ready to build your mobile app? Let's talk about your project.</p>
                                <Link href="/contact" className="btn btn-primary newsletter-btn">Get in Touch <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-inner anim">
                        <div className="section-label" style={{ justifyContent: 'center' }}><span className="label-line"></span><span>Work With Us</span><span className="label-line"></span></div>
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

