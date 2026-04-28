'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import VideoModal from '@/components/VideoModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    // Auto-scroll loop for the Selected Projects track
    const track = document.getElementById('hscrollTrack');
    if (!track) return;

    let intervalId = setInterval(() => {
      // Allow for a small sub-pixel variance when checking the end
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Find the width of a single card to accurately scroll by one item
        const card = track.querySelector('.hcard');
        const scrollAmt = card ? (card as HTMLElement).offsetWidth + 24 /* gap */ : 400;
        track.scrollBy({ left: scrollAmt, behavior: 'smooth' });
      }
    }, 3000);

    const pause = () => clearInterval(intervalId);
    const resume = () => {
      intervalId = setInterval(() => {
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const card = track.querySelector('.hcard');
          const scrollAmt = card ? (card as HTMLElement).offsetWidth + 24 : 400;
          track.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      }, 3000);
    };

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resume, { passive: true });

    return () => {
      clearInterval(intervalId);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', resume);
    };
  }, []);

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

    // Hero entrance
    const tl = gsap.timeline({ delay: 0.2 });
    const badge = document.getElementById('heroBadge');
    const title = document.getElementById('heroTitle');
    const sub = document.getElementById('heroSubtitle');
    const actions = document.getElementById('heroActions');
    const stats = document.getElementById('heroStats');
    const visual = document.getElementById('heroVisual');

    if (badge) tl.fromTo(badge, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    if (title) tl.fromTo(title, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');
    if (sub) tl.fromTo(sub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');
    if (actions) tl.fromTo(actions, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    if (stats) tl.fromTo(stats, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    const phBadge = document.getElementById('phBadge');
    if (phBadge) tl.fromTo(phBadge, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');

    if (visual) {
      tl.fromTo(visual, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8');
      const pluginCards = visual.querySelectorAll('.plugin-card-wrapper');
      if (pluginCards.length) {
        tl.fromTo(pluginCards, 
          { opacity: 0, x: 30 }, 
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' }, 
          '-=0.6'
        );
      }
    }

    // Service cards stagger
    const cards = document.querySelectorAll('.service-card');
    if (cards.length) {
      gsap.fromTo(cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
      cards.forEach(c => c.classList.remove('anim'));
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
        <main>
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-glow"></div>
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge" id="heroBadge">
                <span className="badge-dot"></span> Available for Projects
              </div>

              <h1 className="hero-title" id="heroTitle">
                Building Digital<br />Products That<br />
                <span className="hero-title-accent">Scale.</span>
              </h1>

              <p className="hero-subtitle" id="heroSubtitle">
                We help businesses design, build, and scale powerful digital products using modern technologies
                — from CMS to mobile apps.
              </p>

              <div className="hero-actions" id="heroActions">
                <Link href="/work" className="btn btn-primary btn-lg">
                  See Our Work <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="/about" className="btn btn-ghost btn-lg">
                  About Us <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <button className="btn btn-video btn-lg" onClick={() => setVideoOpen(true)} aria-label="Play Intro Video">
                  <i className="fa-solid fa-circle-play"></i> Watch Intro
                </button>
              </div>

              <div className="hero-stats" id="heroStats">
                <div className="stat">
                  <span className="stat-num">50<span className="stat-plus">+</span></span>
                  <span className="stat-lbl">Projects Done</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-num">30<span className="stat-plus">+</span></span>
                  <span className="stat-lbl">Happy Clients</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-num">5<span className="stat-plus">+</span></span>
                  <span className="stat-lbl">Years Building</span>
                </div>
              </div>

              <div id="phBadge" style={{ marginTop: '2.5rem' }}>
                <a href="https://www.producthunt.com/products/accelvia-content-protection?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-accelvia-content-protection" target="_blank" rel="noopener noreferrer">
                  <img alt="Accelvia Content Protection - A lightweight, zero-dependency WordPress plugin that protect | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1134625&theme=light&t=1777409286265" />
                </a>
              </div>
            </div>

            <div className="hero-visual" id="heroVisual">
              <div style={{ marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem', background: 'rgba(23, 27, 24, 0.6)', border: '1px solid var(--border)', borderRadius: 'var(--radius-full)', backdropFilter: 'blur(10px)' }}>
                <i className="fa-brands fa-wordpress" style={{ color: '#21759b', fontSize: '1.1rem' }}></i>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--light)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Our WordPress.org Plugins</span>
              </div>
              <div className="plugin-stack">
                <div className="plugin-card-wrapper">
                  <Link href="/accelvia-connect-floating-cta" className="plugin-card plugin-card-1">
                    <div className="plugin-icon"><i className="fa-brands fa-whatsapp"></i></div>
                    <div className="plugin-content">
                      <p className="plugin-title">Accelvia Connect</p>
                      <p className="plugin-sub">Floating CTA · 6+ Channels</p>
                    </div>
                  </Link>
                </div>
                <div className="plugin-card-wrapper">
                  <Link href="/accelvia-uptime-monitor" className="plugin-card plugin-card-2">
                    <div className="plugin-icon"><i className="fa-solid fa-tower-broadcast"></i></div>
                    <div className="plugin-content">
                      <p className="plugin-title">Uptime Monitor</p>
                      <p className="plugin-sub">Deadman's Switch · Alerts</p>
                    </div>
                  </Link>
                </div>
                <div className="plugin-card-wrapper">
                  <Link href="/content-protection" className="plugin-card plugin-card-3">
                    <div className="plugin-icon"><i className="fa-solid fa-shield-halved"></i></div>
                    <div className="plugin-content">
                      <p className="plugin-title">Content Protection</p>
                      <p className="plugin-sub">Anti-Theft · Watermarking</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hero-floating-badge">
                <i className="fa-solid fa-shield-check" style={{ color: '#2DBD5A' }}></i>
                Trusted by WordPress.org
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-inner">
            <span>CMS & Shopify</span><span className="mx">✦</span>
            <span>WordPress Plugins</span><span className="mx">✦</span>
            <span>Custom Web Apps</span><span className="mx">✦</span>
            <span>Mobile Development</span><span className="mx">✦</span>
            <span>Theme Builders</span><span className="mx">✦</span>
            <span>API Integration</span><span className="mx">✦</span>
            <span>Digital Marketing & SEO</span><span className="mx">✦</span>
            <span>CMS & Shopify</span><span className="mx">✦</span>
            <span>WordPress Plugins</span><span className="mx">✦</span>
            <span>Custom Web Apps</span><span className="mx">✦</span>
            <span>Mobile Development</span><span className="mx">✦</span>
            <span>Theme Builders</span><span className="mx">✦</span>
            <span>API Integration</span><span className="mx">✦</span>
            <span>Digital Marketing & SEO</span><span className="mx">✦</span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">
                <span className="label-line"></span>
                <span>What We Build</span>
              </div>
              <h2 className="section-title anim">Our Core Services</h2>
            </div>
            <p className="section-desc anim">End-to-end digital solutions — from idea to launch and beyond.</p>
          </div>

          <div className="services-grid">
            <div className="service-card anim">
              <div className="svc-card-icon"><i className="fa-solid fa-store"></i></div>
              <h3>CMS & Ecommerce</h3>
              <p>Custom WordPress sites, Shopify stores, and bespoke content management solutions built for scale and ease of use.</p>
              <Link href="/work" className="svc-link">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card anim">
              <div className="svc-card-icon"><i className="fa-solid fa-window-restore"></i></div>
              <h3>Custom Web Apps</h3>
              <p>Full-stack web applications tailored to your business logic, built with modern frameworks, clean APIs, and scalable architecture.</p>
              <Link href="/work" className="svc-link">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card anim">
              <div className="svc-card-icon"><i className="fa-solid fa-puzzle-piece"></i></div>
              <h3>WordPress Plugins</h3>
              <p>Custom plugin development that extends WordPress capabilities — from simple admin tools to complex integrations and marketplaces.</p>
              <Link href="/work" className="svc-link">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card anim">
              <div className="svc-card-icon"><i className="fa-solid fa-brush"></i></div>
              <h3>Theme Builders</h3>
              <p>Pixel-perfect WordPress theme development with performance-first design, full ACF integration, and seamless brand alignment.</p>
              <Link href="/work" className="svc-link">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card anim">
              <div className="svc-card-icon"><i className="fa-solid fa-mobile-screen"></i></div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications for iOS and Android, built with Flutter and React Native for smooth user experiences.</p>
              <Link href="/work" className="svc-link">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card anim">
              <div className="svc-card-icon"><i className="fa-solid fa-gears"></i></div>
              <h3>API Integration</h3>
              <p>RESTful API design, third-party integrations, and microservices architecture that keeps your digital systems connected and efficient.</p>
              <Link href="/work" className="svc-link">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
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

      {/* ABOUT TEASER */}
      <section className="about-teaser section">
        <div className="container">
          <div className="about-teaser-grid">
            <div className="about-visual-wrap anim">
              <div className="about-img-block">
                <div className="about-img-placeholder">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="about-float-card">
                  <div className="about-float-icon"><i className="fa-solid fa-star"></i></div>
                  <div>
                    <p className="about-float-title">5+ Years</p>
                    <p className="about-float-sub">Building digital products</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text anim">
              <div className="section-label">
                <span className="label-line"></span>
                <span>Who We Are</span>
              </div>
              <h2 className="section-title">We're AccelviaTeams</h2>
              <p className="about-body">
                An IT service provider passionate about turning complex requirements into elegant digital
                solutions. We specialize in CMS development, custom web applications, WordPress plugins, theme
                builders, mobile app development, and digital marketing & SEO.
              </p>
              <p className="about-body" style={{ marginTop: '1rem' }}>
                From startups to enterprises — we help businesses design, build, and scale powerful digital
                products and platforms using modern technologies.
              </p>
              <div className="about-tags">
                <span className="tag">CMS & Shopify</span>
                <span className="tag">Web Applications</span>
                <span className="tag">WordPress</span>
                <span className="tag">Mobile Apps</span>
                <span className="tag">Theme Builders</span>
                <span className="tag">Digital Marketing & SEO</span>
              </div>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Learn About Us <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL — WORK */}
      <section className="hscroll-section" id="hscrollSection">
        <div className="hscroll-header">
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label"><span className="label-line"></span><span>Our Work</span></div>
              <h2 className="section-title" style={{ marginTop: '0.4rem' }}>Selected Projects</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div className="hscroll-nav" style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  className="btn btn-outline" 
                  style={{ padding: '0.8rem 1.2rem', minWidth: 'auto' }}
                  onClick={() => {
                    document.getElementById('hscrollTrack')?.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  aria-label="Previous Project"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button 
                  className="btn btn-outline" 
                  style={{ padding: '0.8rem 1.2rem', minWidth: 'auto' }}
                  onClick={() => {
                    document.getElementById('hscrollTrack')?.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  aria-label="Next Project"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <Link href="/work" className="btn btn-outline">View All <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>

        <div className="hscroll-track-wrap" id="hscrollWrap">
          <div className="hscroll-track" id="hscrollTrack">
            {/* Cards */}
            {[
              { num: '01', icon: 'fa-database', bg: 'linear-gradient(135deg,#152217 0%,#0A100C 100%)', cat: 'CMS Development', title: 'Enterprise WordPress Platform', desc: 'Custom WordPress multisite with headless architecture, ACF, and REST API layer for a global client.' },
              { num: '02', icon: 'fa-mobile-screen', bg: 'linear-gradient(135deg,#1C3A2D 0%,#0D1F17 100%)', cat: 'Mobile App', title: 'Customer Service Portal App', desc: 'Flutter cross-platform app with real-time notifications, booking, and integrated payment gateway.' },
              { num: '03', icon: 'fa-puzzle-piece', bg: 'linear-gradient(135deg,#1A2C3A 0%,#0D1720 100%)', cat: 'WordPress Plugin', title: 'Advanced Booking System', desc: 'WooCommerce extension for appointment scheduling with calendar sync and multi-location support.' },
              { num: '04', icon: 'fa-window-restore', bg: 'linear-gradient(135deg,#2A1C38 0%,#160D20 100%)', cat: 'Custom Web App', title: 'SaaS Analytics Dashboard', desc: 'Full-stack analytics platform with real-time charts, role-based access control, and CSV exports.' },
              { num: '05', icon: 'fa-brush', bg: 'linear-gradient(135deg,#1A2A1C 0%,#0D170E 100%)', cat: 'Theme Builder', title: 'Luxury Hotel Theme', desc: 'Custom WordPress theme with booking integration, multilingual support, and a 99 Lighthouse score.' }
            ].map((item, idx) => (
              <Link href="/work" className="hcard" data-num={item.num} key={idx}>
                <div className="hcard-img">
                  <div className="hcard-bg" style={{ background: item.bg }}>
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="hcard-overlay"></div>
                </div>
                <div className="hcard-body">
                  <span className="hcard-num">{item.num}</span>
                  <div>
                    <span className="project-cat">{item.cat}</span>
                    <h3 className="hcard-title">{item.title}</h3>
                    <p className="hcard-desc">{item.desc}</p>
                  </div>
                  <span className="hcard-cta">View Project <i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section section" id="faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-header">
              <div className="section-label">
                <span className="label-line"></span>
                <span>Got Questions?</span>
              </div>
              <h2 className="section-title anim">Frequently Asked<br /><span className="text-green">Questions</span></h2>
              <p className="section-desc anim" style={{ marginTop: '1rem' }}>Everything you need to know about working with AccelviaTeams. Can't find an answer? <Link href="/contact" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Reach out →</Link></p>
            </div>

            <div className="faq-list" id="faqList">
              {[
                { q: "How much does it cost?", a: "Website projects start at $500. We offer packages and custom scopes designed to align with your goals and budget." },
                { q: "How long does it take?", a: "Many websites can be completed in 1–2 months. This is dependent on scope and complexity." },
                { q: "Do you offer payment plans?", a: "While we don't offer traditional payment plans, we work closely with clients to structure projects in a way that aligns with their budgets." },
                { q: "Can you redesign my existing site?", a: "Absolutely. Website redesigns are one of our most common engagements." },
                { q: "Do you provide custom builds?", a: "Yes. We develop fully custom websites strategically designed to meet your specific goals and functionality needs." },
                { q: "Can you work with templated platforms like Squarespace?", a: "Yes. We work with platforms like Squarespace and can optimize or customize them to elevate performance and design." },
                { q: "Will it rank on Google?", a: "Every website we build follows SEO best practices, including technical optimization, site structure, and on-page fundamentals. Rankings depend on your industry, competition, and ongoing SEO strategy, but we build every site with visibility in mind." },
                { q: "Do you manage ads too?", a: "Yes. We are a full-service agency with an in-house media team that manages paid search, social, and digital advertising campaigns." },
                { q: "What industries do you specialize in?", a: "We work across a range of industries, with primary expertise in commercial and residential real estate, corporate, retail, healthcare, finance, architecture, life sciences, industrial, mixed-use, hospitality, and logistics." },
                { q: "What makes you different from other web agencies?", a: "We're not just a web agency — we're a full-service marketing and branding partner. Our integrated, strategic approach ensures your website supports broader brand, marketing, and business objectives from start to finish." },
                { q: "What happens if I need additional features later?", a: "Our websites are built for scalability. As your business evolves, we can expand functionality, add sections, or integrate new tools seamlessly." },
                { q: "How do you design websites to convert visitors into leads?", a: "Every website is built around your specific conversion goals. From strategic calls-to-action to CRM-integrated forms and reporting dashboards, we design the user journey to drive measurable results." },
                { q: "How do you set up tracking and analytics?", a: "Each site includes integrated analytics and tracking tools. You'll have full visibility into performance data and reporting." },
                { q: "Will my site be optimized for paid advertising?", a: "If paid media is part of your strategy, we ensure your website is structured to support campaign performance — including landing page optimization, tracking integration, and conversion-focused design. If paid advertising isn't a priority, we build the site to support your broader marketing goals." },
                { q: "How do you measure success after launch?", a: "We define KPIs during the strategy phase to ensure your site is built to track and measure what matters most — from traffic and engagement to leads and conversions." },
                { q: "Can you improve my existing site's conversion rate?", a: "Yes. We evaluate user behavior, site structure, messaging, and calls-to-action to identify opportunities for improvement. Through strategic updates and testing, we optimize performance to increase engagement and lead generation." },
                { q: "Do you provide hosting?", a: "Yes. We can manage secure, reliable hosting on your behalf or work within your existing hosting environment, depending on your preference." },
                { q: "How do you handle ongoing website maintenance?", a: "We offer ongoing maintenance and support to ensure your site remains secure, up-to-date, and performing optimally. This includes updates, monitoring, performance enhancements, and strategic refinements as your business evolves." }
              ].map((faq, idx) => (
                <div className="faq-item anim" key={idx}>
                  <button className="faq-q" aria-expanded="false" onClick={(e) => {
                    const btn = e.currentTarget;
                    const item = btn.closest('.faq-item');
                    const answer = item?.querySelector('.faq-a');
                    const isOpen = btn.getAttribute('aria-expanded') === 'true';

                    document.querySelectorAll('.faq-item').forEach(other => {
                      if (other !== item) {
                        other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
                        other.querySelector('.faq-a')?.classList.remove('open');
                      }
                    });

                    btn.setAttribute('aria-expanded', String(!isOpen));
                    answer?.classList.toggle('open', !isOpen);
                  }}>
                    <span>{faq.q}</span>
                    <span className="faq-icon"><i className="fa-solid fa-plus"></i></span>
                  </button>
                  <div className="faq-a">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-inner anim">
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="label-line"></span>
              <span>Start a Project</span>
              <span className="label-line"></span>
            </div>
            <h2 className="cta-title">Let's build something <span className="text-green">great</span> together.</h2>
            <p className="cta-sub">Have a project in mind? Tell us what you're building and we'll make it happen.</p>
            <div className="cta-actions">
              <a href="mailto:hello@accelviateams.com" className="cta-email">
                <i className="fa-solid fa-envelope"></i> hello@accelviateams.com
              </a>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get in Touch <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal component linked to button */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

    </main>
    );
}


