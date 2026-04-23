import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Accelvia Connect - Floating CTA | WordPress Plugin',
    description:
        'Add floating CTAs with Lottie animations, business hour rules, smart scroll triggers, dynamic transparency, and automatic GA4 tracking.',
};

const features = [
    {
        icon: 'fa-solid fa-layer-group',
        title: 'Multiple Stacked Buttons',
        desc: 'Create and manage multiple buttons that stack vertically with drag & drop reordering to control their sequence on the front end.',
    },
    {
        icon: 'fa-brands fa-whatsapp',
        title: '6 Button Types',
        desc: 'WhatsApp, Phone/Call, Email, Telegram, Discord, and Custom Link — each with automatic formatting and pre-filled message support.',
    },
    {
        icon: 'fa-solid fa-wand-magic-sparkles',
        title: 'Lottie Animations',
        desc: 'Integrate with LottieFiles — paste a .lottie or .json URL to replace static icons with high-quality, lightweight animations.',
    },
    {
        icon: 'fa-solid fa-bell',
        title: 'Badges & Greeting Bubbles',
        desc: 'Add notification badges ("1" or custom text) and persistent greeting bubbles like "Chat with us!" to boost engagement.',
    },
    {
        icon: 'fa-solid fa-clock',
        title: 'Business Hours',
        desc: 'Limit button visibility to specific days of the week and custom time ranges, synced with your WordPress timezone.',
    },
    {
        icon: 'fa-solid fa-bullseye',
        title: 'Smart Display Triggers',
        desc: 'Show buttons immediately, after a time delay, or after the user scrolls a specific percentage down the page.',
    },
    {
        icon: 'fa-solid fa-filter',
        title: 'Page-Specific Targeting',
        desc: 'Show everywhere, homepage only, or filter by specific Page IDs with include/exclude rules for precise targeting.',
    },
    {
        icon: 'fa-solid fa-mobile-screen',
        title: 'Device Visibility',
        desc: 'Toggle visibility for individual buttons specifically for Mobile or Desktop to optimize the experience per device.',
    },
    {
        icon: 'fa-solid fa-arrows-up-down-left-right',
        title: 'Positioning & Layout',
        desc: 'Left or right alignment, top/middle/bottom vertical pinning, and pixel-perfect horizontal and vertical offset controls.',
    },
    {
        icon: 'fa-solid fa-chart-simple',
        title: 'GA4 & Meta Pixel Tracking',
        desc: 'Built-in 1-click toggle for Google Analytics 4 and Meta (Facebook) Pixel click tracking — no manual coding required.',
    },
    {
        icon: 'fa-solid fa-wand-sparkles',
        title: 'Hover Animations',
        desc: 'Choose from Bounce, Pulse, Shake, Spin, or None — plus custom icon uploads (PNG/SVG) and global icon sizing (30–120px).',
    },
    {
        icon: 'fa-solid fa-code',
        title: 'Developer Features',
        desc: 'Built-in CSS editor, individual CSS classes per button, lightweight performance-optimized code, and full translation readiness.',
    },
];

const specs = [
    { label: 'Stable Tag', value: '1.0.0' },
    { label: 'Requires WordPress', value: '6.0+' },
    { label: 'Tested up to', value: '6.9' },
    { label: 'Requires PHP', value: '7.4+' },
    { label: 'License', value: 'GPL-2.0-or-later' },
    { label: 'Author', value: 'Md Musfiqur Rahman' },
];

const faqs = [
    {
        q: 'Does this plugin slow down my website?',
        a: 'No. The plugin is lightweight and only loads minimal CSS and JavaScript. The DotLottie player is conditionally loaded only when Lottie animations are used.',
    },
    {
        q: 'Can I add multiple buttons?',
        a: 'Yes. You can create and stack multiple floating buttons with drag & drop reordering to control their display order.',
    },
    {
        q: 'Is this plugin mobile friendly?',
        a: 'Yes. The buttons are fully responsive with per-button device visibility controls for Mobile and Desktop.',
    },
    {
        q: 'What button types are supported?',
        a: 'WhatsApp (with pre-filled messages), Phone/Call, Email, Telegram, Discord, and Custom Link with any external or internal URL.',
    },
    {
        q: 'Can I show buttons only during business hours?',
        a: 'Yes. The Business Hours feature lets you limit visibility to specific days and time ranges, synced with your WordPress timezone.',
    },
    {
        q: 'Does it track button clicks?',
        a: 'Yes. Built-in 1-click integration for Google Analytics 4 and Meta (Facebook) Pixel. The plugin detects tracking scripts and sends events automatically.',
    },
];

export default function AccelviaConnectFloatingCTAPage() {
    return (
        <main className="pf-page">

            {/* ── HERO ─────────────────────────────────── */}
            <section className="pf-hero">
                <div className="pf-hero-bg">
                    <div className="pf-hero-glow" />
                    <div className="pf-hero-grid" />
                </div>

                <div className="container">
                    <div className="cp-hero-layout">

                        <div className="cp-plugin-badge-row">
                            <span className="cp-wp-badge">
                                <i className="fa-brands fa-wordpress" />
                                WordPress Plugin
                            </span>
                            <span className="cp-version-badge">v1.0.0</span>
                            <span className="cp-license-badge">GPL-2.0-or-later</span>
                        </div>

                        <h1 className="pf-hero-name" style={{ marginBottom: '1rem' }}>
                            Accelvia Connect - <br />
                            <span>Floating CTA</span>
                        </h1>

                        <p className="pf-hero-bio" style={{ maxWidth: 600, marginBottom: '2.5rem' }}>
                            Add floating CTAs with Lottie animations, business hour rules, smart scroll
                            triggers, dynamic transparency, and automatic GA4 tracking. Perfect for
                            businesses, agencies, freelancers, and ecommerce websites.
                        </p>

                        <div className="pf-hero-actions">
                            <a
                                href="https://wordpress.org/plugins/accelvia-connect-floating-cta/"
                                className="btn btn-primary btn-lg"
                                id="cp-download-btn"
                            >
                                <i className="fa-solid fa-download" />
                                Download Plugin
                            </a>
                            <a
                                href="https://github.com/MusfiqurRahman12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-lg"
                                id="cp-github-btn"
                            >
                                <i className="fa-brands fa-github" />
                                View on GitHub
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="pf-hero-stats">
                            <div className="pf-stat">
                                <span className="pf-stat-num">6<span>+</span></span>
                                <span className="pf-stat-lbl">Button Types</span>
                            </div>
                            <div className="pf-stat-divider" />
                            <div className="pf-stat">
                                <span className="pf-stat-num"><i className="fa-brands fa-whatsapp"></i></span>
                                <span className="pf-stat-lbl">Integration</span>
                            </div>
                            <div className="pf-stat-divider" />
                            <div className="pf-stat">
                                <span className="pf-stat-num">WP<span> 6.0+</span></span>
                                <span className="pf-stat-lbl">Compatible</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SHOWCASE ────────────────────────── */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cp-video-container">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/alAcXX6xINA"
                            title="Accelvia Connect Video Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── FEATURES ─────────────────────────────── */}
            <section className="pf-about section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Features
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Powerful Engagement Tools
                    </h2>
                    <div className="cp-features-grid">
                        {features.map((f) => (
                            <div className="pf-cert-card" key={f.title}>
                                <div className="pf-cert-icon">
                                    <i className={f.icon} />
                                </div>
                                <h3 className="pf-cert-name">{f.title}</h3>
                                <p className="pf-cert-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ─────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        How It Works
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Simple &amp; Fast Setup
                    </h2>

                    <div className="cp-steps">
                        {[
                            { n: '01', title: 'Install Plugin', desc: 'Upload the plugin files to your WordPress directory or install directly via the plugins screen.' },
                            { n: '02', title: 'Activate', desc: "Activate Accelvia Connect through the 'Plugins' screen in your WordPress dashboard." },
                            { n: '03', title: 'Configure Options', desc: 'Navigate to Settings → Accelvia Connect to design your floating buttons, set business hours, display triggers, and enable GA4/Meta tracking.' },
                        ].map((step) => (
                            <div className="cp-step" key={step.n}>
                                <div className="cp-step-num">{step.n}</div>
                                <div className="cp-step-body">
                                    <h3 className="cp-step-title" dangerouslySetInnerHTML={{ __html: step.title }} />
                                    <p className="cp-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PLUGIN DETAILS ───────────────────────── */}
            <section className="pf-certs section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Plugin Info
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Technical Specifications
                    </h2>

                    <div className="cp-specs-layout">
                        <div className="cp-specs-table">
                            {specs.map((s) => (
                                <div className="cp-spec-row" key={s.label}>
                                    <span className="cp-spec-label">{s.label}</span>
                                    <span className="cp-spec-value">{s.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cp-code-block">
                            <div className="cp-code-header">
                                <i className="fa-solid fa-code" />
                                <span>Plugin Header (PHP)</span>
                                <span className="cp-code-lang">PHP</span>
                            </div>
                            <pre className="cp-code-pre"><code>{`/**
 * Plugin Name: Accelvia Connect - Floating CTA
 * Plugin URI:  https://accelviateams.com/accelvia-connect-floating-cta
 * Description: Add floating CTAs with Lottie animations,
 *              business hour rules, smart scroll triggers,
 *              dynamic transparency, and automatic GA4 tracking.
 * Version:     1.0.0
 * Requires at least: 6.0
 * Tested up to: 6.9
 * Requires PHP: 7.4
 * Author:      Md Musfiqur Rahman
 * Author URI:  https://accelviateams.com/musfiqurrahman
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */`}</code></pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        FAQ
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Frequently Asked Questions
                    </h2>
                    <div className="cp-faq-list">
                        {faqs.map((f) => (
                            <div className="cp-faq-item" key={f.q}>
                                <h3 className="cp-faq-q">
                                    <i className="fa-solid fa-circle-question" />
                                    {f.q}
                                </h3>
                                <p className="cp-faq-a">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────── */}
            <section className="pf-contact section">
                <div className="container">
                    <div className="pf-contact-inner">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="label-line" />
                            Get Started
                            <span className="label-line" />
                        </div>
                        <h2 className="pf-contact-title">
                            Boost Engagement<br /><span>Today</span>
                        </h2>
                        <p className="pf-contact-desc">
                            Ready to install and customize. Built by{' '}
                            <Link href="/musfiqurrahman" className="text-green">Md Musfiqur Rahman</Link>{' '}
                            at AccelviaTeams.
                        </p>
                        <div className="pf-contact-actions">
                            <a
                                href="https://wordpress.org/plugins/accelvia-connect-floating-cta/"
                                className="btn btn-primary btn-lg"
                                id="cp-cta-download-btn"
                            >
                                <i className="fa-solid fa-download" />
                                Download Plugin
                            </a>
                            <Link
                                href="/musfiqurrahman"
                                className="btn btn-outline btn-lg"
                                id="cp-author-btn"
                            >
                                <i className="fa-solid fa-user" />
                                View Author
                            </Link>
                        </div>
                        <div className="pf-contact-links">
                            <a
                                href="https://www.gnu.org/licenses/gpl-2.0.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pf-contact-link-item"
                            >
                                <i className="fa-solid fa-scale-balanced" />
                                GPL-2.0 License
                            </a>
                            <a
                                href="https://github.com/MusfiqurRahman12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pf-contact-link-item"
                            >
                                <i className="fa-brands fa-github" />
                                GitHub
                            </a>
                            <a
                                href="mailto:musfiqurrahman@accelviateams.com"
                                className="pf-contact-link-item"
                            >
                                <i className="fa-solid fa-envelope" />
                                Contact Author
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
