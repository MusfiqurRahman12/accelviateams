'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NewsDetailPage() {
    const [copied, setCopied] = useState(false);
    const [tocOpen, setTocOpen] = useState(true);

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

        // Active TOC link highlighting on scroll
        const tocLinks = document.querySelectorAll('.toc-link');
        const sectionIds = ['section-why', 'section-what', 'section-tech', 'section-who', 'section-next'];
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
            {/* ARTICLE HERO */}
            <section className="article-hero">
                <div className="container">
                    {/* Breadcrumb */}
                    <nav className="article-breadcrumb anim">
                        <Link href="/"><i className="fa-solid fa-house"></i></Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link href="/news">News</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span>Mobile App Service Launch</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">Company</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> March 5, 2026</span>
                            <span className="news-read"><i className="fa-regular fa-clock"></i> 4 min read</span>
                        </div>
                    </div>

                    <h1 className="article-title anim">
                        AccelviaTeams Launches New Mobile App Development Service for Startups
                    </h1>
                    <p className="article-lead anim">
                        We're excited to announce our expanded mobile development offering — purpose-built for early-stage
                        startups who need fast, production-ready iOS and Android apps built with Flutter and React Native.
                    </p>

                    {/* Author + Share */}
                    <div className="article-byline anim">
                        <div className="article-author">
                            <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                            <div>
                                <span className="author-name">AccelviaTeams Team</span>
                                <span className="author-role">Official Blog</span>
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

                            {/* Table of Contents */}
                            <div className={`toc anim${tocOpen ? '' : ' toc-collapsed'}`} id="tocBox">
                                <button className="toc-header toc-toggle" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen} type="button">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <i className="fa-solid fa-list"></i>
                                        <span>Table of Contents</span>
                                    </div>
                                    <i className={`fa-solid fa-chevron-down toc-toggle-icon${tocOpen ? '' : ' toc-toggle-icon--collapsed'}`}></i>
                                </button>
                                <ol className={`toc-list${tocOpen ? '' : ' toc-list--hidden'}`}>
                                    <li><a href="#section-why" className="toc-link">Why We're Expanding into Mobile</a></li>
                                    <li><a href="#section-what" className="toc-link">What the Service Includes</a></li>
                                    <li><a href="#section-tech" className="toc-link">Our Technology Stack</a></li>
                                    <li><a href="#section-who" className="toc-link">Who This Is For</a></li>
                                    <li><a href="#section-next" className="toc-link">What Comes Next</a></li>
                                </ol>
                            </div>

                            {/* Body */}
                            <div className="prose anim">
                                <p>At AccelviaTeams, we've spent the last several years helping businesses build powerful
                                    digital products — from enterprise WordPress platforms and custom web applications to
                                    complex plugin systems. Today, we're taking that same engineering excellence into mobile.</p>

                                <p>Effective immediately, we are offering a dedicated <strong>Mobile App Development
                                    service</strong> tailored specifically for startups and early-stage businesses that need
                                    their first production-ready application, fast.</p>

                                <h2 id="section-why">Why We're Expanding into Mobile</h2>

                                <p>Over the past 18 months, we've had dozens of conversations with founders and product leads
                                    who face the same challenge: they need a quality mobile app, but traditional agencies are
                                    either too expensive, too slow, or over-engineered for their stage.</p>

                                <p>Startups don't need a 6-month agency engagement. They need a trusted engineering partner who
                                    can ship a solid v1 — something they can put in front of investors and real users — in a
                                    matter of weeks.</p>

                                <blockquote className="article-quote">
                                    <p>"The best mobile product isn't the most complex one. It's the one that ships with the
                                        right features, performs reliably, and can be iterated on quickly."</p>
                                    <cite>— AccelviaTeams Engineering Team</cite>
                                </blockquote>

                                <h2 id="section-what">What the Service Includes</h2>

                                <p>Our mobile development offering covers the full product lifecycle, from initial discovery
                                    through App Store submission:</p>

                                <ul>
                                    <li><strong>Product Discovery &amp; Scoping</strong> — We work with you to define the MVP
                                        scope, user flows, and feature set that will get you to market fastest.</li>
                                    <li><strong>UI/UX Design</strong> — Mobile-first design using Figma, optimized for native
                                        iOS and Android conventions.</li>
                                    <li><strong>Cross-Platform Development</strong> — Built with Flutter or React Native, so you
                                        get both iOS and Android from a single codebase.</li>
                                    <li><strong>Backend Integration</strong> — REST or GraphQL API integration with your
                                        existing backend, or we can build the backend too using Node.js or Laravel.</li>
                                    <li><strong>App Store Submission</strong> — We handle the Apple App Store and Google Play
                                        Store submission process end-to-end.</li>
                                    <li><strong>Post-Launch Support</strong> — 30-day warranty period with bug fixes and
                                        performance monitoring included.</li>
                                </ul>

                                <h2 id="section-tech">Our Technology Stack</h2>

                                <p>We've evaluated the landscape carefully and landed on two primary frameworks depending on
                                    project requirements:</p>

                                <div className="tech-stack">
                                    <div className="tech-card">
                                        <div className="tech-card-icon"><i className="fa-brands fa-google"></i></div>
                                        <div>
                                            <h4>Flutter</h4>
                                            <p>Google's UI toolkit for building natively compiled applications. Our primary
                                                recommendation for most startup projects — one codebase, two stores,
                                                pixel-perfect UI.</p>
                                        </div>
                                    </div>
                                    <div className="tech-card">
                                        <div className="tech-card-icon"><i className="fa-brands fa-react"></i></div>
                                        <div>
                                            <h4>React Native</h4>
                                            <p>Meta's framework for building native apps using JavaScript/TypeScript. Ideal when
                                                you have an existing React web team or need deep web-to-mobile code sharing.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>For backend services, we work with <strong>Node.js</strong>, <strong>Laravel</strong>, and
                                    <strong>Firebase</strong> depending on your project's scalability needs and existing
                                    infrastructure.</p>

                                <h2 id="section-who">Who This Is For</h2>

                                <p>This service is specifically designed for:</p>

                                <ul>
                                    <li>Pre-seed or Seed-stage startups building their first mobile product</li>
                                    <li>Businesses with a proven web product that need a native mobile companion</li>
                                    <li>Founders who have a design ready and need a trusted engineering partner to build it</li>
                                    <li>Companies that need a fast, reliable MVP to test with users before committing to a
                                        larger build</li>
                                </ul>

                                <div className="article-callout">
                                    <i className="fa-solid fa-circle-info"></i>
                                    <div>
                                        <strong>Project timelines:</strong> A standard mobile MVP with Flutter or React Native
                                        typically takes 6–12 weeks from kickoff to App Store submission, depending on complexity
                                        and scope.
                                    </div>
                                </div>

                                <h2 id="section-next">What Comes Next</h2>

                                <p>We're taking on a limited number of mobile projects this quarter to ensure every client gets
                                    the attention and quality they deserve. If you're building a mobile product and want to
                                    explore working together, we'd love to hear from you.</p>

                                <p>You can reach us directly via our <Link href="/contact" className="prose-link">contact page</Link>,
                                    or email us at <a href="mailto:hello@accelviateams.com" className="prose-link">hello@accelviateams.com</a>. We'll schedule a no-obligation discovery
                                    call to understand your project and determine if it's a good fit.</p>

                                <p>Exciting times ahead — we can't wait to ship great mobile products with you.</p>
                            </div>

                            {/* Tags */}
                            <div className="article-tags anim">
                                <span className="tag-label">Tags:</span>
                                <Link href="/news" className="article-tag">Mobile Apps</Link>
                                <Link href="/news" className="article-tag">Flutter</Link>
                                <Link href="/news" className="article-tag">React Native</Link>
                                <Link href="/news" className="article-tag">Startups</Link>
                                <Link href="/news" className="article-tag">Company News</Link>
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
                                    <Link href="/news/article" className="related-card">
                                        <div className="related-card-img related-img--1">
                                            <span className="news-cat">Technology</span>
                                        </div>
                                        <div className="related-card-body">
                                            <div className="news-meta">
                                                <span className="news-date"><i className="fa-regular fa-calendar"></i> Feb 22, 2026</span>
                                            </div>
                                            <h3 className="related-card-title">Why We're Betting Big on Next.js 15 for Client Projects</h3>
                                            <span className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link href="/news/article" className="related-card">
                                        <div className="related-card-img related-img--2">
                                            <span className="news-cat">Insights</span>
                                        </div>
                                        <div className="related-card-body">
                                            <div className="news-meta">
                                                <span className="news-date"><i className="fa-regular fa-calendar"></i> Feb 15, 2026</span>
                                            </div>
                                            <h3 className="related-card-title">Headless CMS vs Traditional CMS: What's Right for Your Business?</h3>
                                            <span className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link href="/news/article" className="related-card">
                                        <div className="related-card-img related-img--3">
                                            <span className="news-cat">Insights</span>
                                        </div>
                                        <div className="related-card-body">
                                            <div className="news-meta">
                                                <span className="news-date"><i className="fa-regular fa-calendar"></i> Jan 18, 2026</span>
                                            </div>
                                            <h3 className="related-card-title">API-First Development: How We Build Integrations That Scale</h3>
                                            <span className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </article>

                        {/* SIDEBAR */}
                        <aside className="news-sidebar article-sidebar">

                            {/* Author Card */}
                            <div className="sidebar-widget anim">
                                <div className="author-card">
                                    <div className="author-card-avatar"><i className="fa-solid fa-users"></i></div>
                                    <h4 className="author-card-name">AccelviaTeams Team</h4>
                                    <p className="author-card-role">Official Blog</p>
                                    <p className="author-card-bio">We share insights, product updates, and engineering stories from
                                        the AccelviaTeams team.</p>
                                    <div className="footer-socials" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                                        <a href="#" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#" className="social-btn"><i className="fa-brands fa-x-twitter"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Table of Contents (sticky sidebar) */}
                            <div className="sidebar-widget sidebar-toc anim" id="sidebarToc">
                                <h3 className="sidebar-title"><span className="label-line"></span>In This Article</h3>
                                <ol className="toc-list">
                                    <li><a href="#section-why" className="toc-link">Why We're Expanding into Mobile</a></li>
                                    <li><a href="#section-what" className="toc-link">What the Service Includes</a></li>
                                    <li><a href="#section-tech" className="toc-link">Our Technology Stack</a></li>
                                    <li><a href="#section-who" className="toc-link">Who This Is For</a></li>
                                    <li><a href="#section-next" className="toc-link">What Comes Next</a></li>
                                </ol>
                            </div>

                            {/* Recent News */}
                            <div className="sidebar-widget anim">
                                <h3 className="sidebar-title"><span className="label-line"></span>Recent News</h3>
                                <ul className="recent-news-list">
                                    <li className="recent-news-item">
                                        <Link href="/news/article" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Technology</span>
                                                <span className="recent-news-headline">Why We're Betting Big on Next.js 15</span>
                                                <span className="recent-news-date">Feb 22, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news/article" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Insights</span>
                                                <span className="recent-news-headline">Headless CMS vs Traditional CMS Explained</span>
                                                <span className="recent-news-date">Feb 15, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news/article" className="recent-news-link">
                                            <div className="recent-news-dot"></div>
                                            <div className="recent-news-info">
                                                <span className="recent-news-cat">Product</span>
                                                <span className="recent-news-headline">Content Protection Plugin v2.0 Released</span>
                                                <span className="recent-news-date">Feb 7, 2026</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="recent-news-item">
                                        <Link href="/news/article" className="recent-news-link">
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

