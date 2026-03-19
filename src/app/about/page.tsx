'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate all .anim elements
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

        // Counter animation
        document.querySelectorAll('.stat-num, .stats-bar-num').forEach(el => {
            const raw = el.textContent || '';
            const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
            const suffix = raw.replace(/[0-9.]/g, '');
            if (isNaN(num)) return;
            ScrollTrigger.create({
                trigger: el, start: 'top 88%', once: true,
                onEnter: () => {
                    gsap.fromTo({ v: 0 }, { v: num }, {
                        duration: 1.6, ease: 'power2.out',
                        onUpdate: function () {
                            el.textContent = Math.round(this.targets()[0].v) + suffix;
                        }
                    });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main>
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-label anim"><span className="label-line"></span><span>About Us</span></div>
                    <h1 className="hero-title anim" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', marginTop: '1rem' }}>
                        We Build Digital<br />Products That <span className="hero-title-accent">Move.</span>
                    </h1>
                    <p className="hero-subtitle anim" style={{ marginTop: '1.25rem' }}>
                        AccelviaTeams is an IT service provider specializing in CMS development, custom web applications,
                        WordPress plugins, theme builders, mobile app development, and digital marketing & SEO.
                    </p>
                </div>
            </section>

            {/* STATS BAR */}
            <section style={{ paddingBlock: 0 }}>
                <div className="container">
                    <div className="stats-bar">
                        <div className="stats-bar-item">
                            <div className="stats-bar-num">50<span>+</span></div>
                            <div className="stats-bar-lbl">Projects Delivered</div>
                        </div>
                        <div className="stats-bar-item">
                            <div className="stats-bar-num">30<span>+</span></div>
                            <div className="stats-bar-lbl">Happy Clients</div>
                        </div>
                        <div className="stats-bar-item">
                            <div className="stats-bar-num">5<span>+</span></div>
                            <div className="stats-bar-lbl">Years Experience</div>
                        </div>
                        <div className="stats-bar-item">
                            <div className="stats-bar-num">10<span>+</span></div>
                            <div className="stats-bar-lbl">Technologies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT BODY */}
            <section className="section">
                <div className="container">
                    <div className="about-body-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                        <div className="anim">
                            <div className="section-label"><span className="label-line"></span><span>Our Story</span></div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Who We Are</h2>
                            <p className="about-body">AccelviaTeams is an IT service provider passionate about turning complex
                                requirements into elegant digital solutions.</p>
                            <p className="about-body" style={{ marginTop: '1rem' }}>We help businesses design, build, and scale powerful
                                digital products and platforms using modern technologies — delivering results that matter.</p>
                            <p className="about-body" style={{ marginTop: '1rem' }}>From startups building their first product to
                                enterprises modernizing legacy systems, we bring engineering excellence and creative thinking to
                                every engagement.</p>
                        </div>
                        <div className="anim">
                            <div className="section-label"><span className="label-line"></span><span>Our Mission</span></div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>What Drives Us</h2>
                            <p className="about-body">We believe great software transforms businesses. Our mission is to make
                                powerful technology accessible — building products that are not just functional, but delightful
                                to use.</p>
                            <div className="about-tags" style={{ marginTop: '2rem' }}>
                                <span className="tag">Reliable</span>
                                <span className="tag">Modern Stack</span>
                                <span className="tag">On Time</span>
                                <span className="tag">Scalable</span>
                                <span className="tag">Client First</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-label anim"><span className="label-line"></span><span>Solutions</span></div>
                    <h2 className="section-title anim" style={{ marginBottom: '3rem' }}>What We Specialize In</h2>
                    <div className="services-grid">
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-store"></i></div>
                            <h3>CMS & Ecommerce</h3>
                            <p>Custom WordPress sites, Shopify stores, and bespoke content management solutions built for scale, speed, and editorial ease.</p>
                            <Link href="/work" className="svc-link">Projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-window-restore"></i></div>
                            <h3>Custom Web Apps</h3>
                            <p>Full-stack web applications using React, Next.js, Laravel, and Node — built for your exact business logic and user experience.</p>
                            <Link href="/work" className="svc-link">Projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-puzzle-piece"></i></div>
                            <h3>WordPress Plugins</h3>
                            <p>Custom plugin development — from simple admin tools to complex marketplace extensions, payment integrations, and automation workflows.</p>
                            <Link href="/work" className="svc-link">Projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-brush"></i></div>
                            <h3>Theme Builders</h3>
                            <p>Custom WordPress themes and Elementor/Gutenberg builders — pixel-perfect, performant, and fully brand-aligned.</p>
                            <Link href="/work" className="svc-link">Projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-mobile-screen"></i></div>
                            <h3>Mobile Apps</h3>
                            <p>cross-platform mobile apps for iOS and Android — built with Flutter and React Native for smooth, native-feeling experiences.</p>
                            <Link href="/work" className="svc-link">Projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-gears"></i></div>
                            <h3>API Integration</h3>
                            <p>RESTful API design, third-party integrations, and microservices architecture that keeps your digital systems connected and efficient.</p>
                            <Link href="/work" className="svc-link">Projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="service-card anim">
                            <div className="svc-card-icon"><i className="fa-solid fa-bullhorn"></i></div>
                            <h3>Digital Marketing & SEO</h3>
                            <p>Comprehensive SEO services, conversion rate optimization, and targeted campaigns designed to grow your audience and drive measurable revenue.</p>
                            <Link href="/contact" className="svc-link">Let's Talk <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-inner anim">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="label-line"></span><span>Work With Us</span><span className="label-line"></span>
                        </div>
                        <h2 className="cta-title">Ready to build something?</h2>
                        <p className="cta-sub">Tell us about your project — we'll find the right solution together.</p>
                        <div className="cta-actions">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start a Conversation <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


