import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Accelvia – Uptime Monitor | WordPress Plugin',
    description:
        'The ultimate all-in-one website monitoring solution built directly into your WordPress dashboard, featuring Dual-Layer Reliability and an autonomous Deadman\'s Switch.',
};

const features = [
    {
        icon: 'fa-network-wired',
        title: 'Global Edge Proxy',
        desc: 'Configure a secure, external Cloud Network that continuously polls your site. If your server crashes, the autonomous external proxy instantly blasts an alert.',
    },
    {
        icon: 'fa-shield-halved',
        title: 'Smart SSL Intelligence',
        desc: 'Intercepts cryptographic handshakes to calculate when your SSL certificate expires. Dispatches warnings 7 Days, 3 Days, and 1 Day before expiration.',
    },
    {
        icon: 'fa-file-code',
        title: 'Defacement Protection',
        desc: 'Extracts your exact HTML source code to verify the presence of a "Master Keyword", instantly trapping silent database errors or White Screen of Death crashes.',
    },
    {
        icon: 'fa-chart-line',
        title: 'Unlimited Local Analytics',
        desc: 'Metric vector arrays run natively within your MySQL tables, giving you zero limits on historical tracking and bypassing standard SaaS paywalls.',
    },
    {
        icon: 'fa-tower-broadcast',
        title: 'Omni-Channel Alerting',
        desc: 'Route disaster alerts and summary reports to Slack, Discord, Telegram, WhatsApp, and Native Email simultaneously — without premium webhooks.',
    },
    {
        icon: 'fa-bolt',
        title: 'Automated Lighthouse',
        desc: 'Queries Google\'s Core Web Vitals to silently chart Desktop & Mobile page speed rendering behaviors securely over time.',
    },
];

const specs = [
    { label: 'Version', value: '1.0.0' },
    { label: 'Requires WordPress', value: '6.0+' },
    { label: 'Tested up to', value: '6.9' },
    { label: 'License', value: 'GPLv2 or later' },
    { label: 'Text Domain', value: 'accelvia-uptime-monitor' },
    { label: 'Author', value: 'Md Musfiqur Rahman' },
];

const faqs = [
    {
        q: 'Why is a Server-Side Cron required?',
        a: 'WordPress relies on "simulated cron" which only fires on visitor traffic. For pixel-perfect 24/7/365 monitoring regardless of traffic, a true Server-Side Cron Job is essential.',
    },
    {
        q: 'How does the Deadman\'s Switch work?',
        a: 'While your local WP instance handles deep analytics, it synchronizes with a Global Edge Network. If your server completely dies, the external proxy detects the failure and alerts you independently.',
    },
    {
        q: 'Are there any monitoring limits?',
        a: 'For this version, you can monitor exactly one (1) website globally per installation. However, you get unlimited local analytics logging without SaaS paywalls.',
    },
    {
        q: 'Does this replace my current uptime monitor?',
        a: 'Yes. It brings enterprise-grade uptime monitoring, SSL checks, and defacement detection directly into your WordPress dashboard, completely replacing external paid subscriptions.',
    },
];

export default function UptimeMonitorPage() {
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
                            <span className="cp-license-badge">GPLv2 or later</span>
                        </div>

                        <h1 className="pf-hero-name" style={{ marginBottom: '1rem' }}>
                            Accelvia –{' '}
                            <span>Uptime</span>
                            <br />Monitor
                        </h1>

                        <p className="pf-hero-bio" style={{ maxWidth: 600, marginBottom: '2.5rem' }}>
                            Uptime Monitor Accelvia represents a structural shift in how websites are monitored. 
                            Instead of paying expensive SaaS fees, this plugin transforms your existing WordPress environment 
                            into a self-hosted, standalone monitoring powerhouse with an autonomous Deadman&apos;s Switch.
                        </p>

                        <div className="pf-hero-actions">
                            <a
                                href="https://wordpress.org/plugins/accelvia-uptime-monitor"
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
                                <span className="pf-stat-num">Dual<span>-Layer</span></span>
                                <span className="pf-stat-lbl">Reliability</span>
                            </div>
                            <div className="pf-stat-divider" />
                            <div className="pf-stat">
                                <span className="pf-stat-num">$0</span>
                                <span className="pf-stat-lbl">SaaS Paywalls</span>
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

            {/* ── FEATURES ─────────────────────────────── */}
            <section className="pf-about section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Core Features
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Enterprise-Grade Monitoring
                    </h2>
                    <div className="cp-features-grid">
                        {features.map((f) => (
                            <div className="pf-cert-card" key={f.title}>
                                <div className="pf-cert-icon">
                                    <i className={`fa-solid ${f.icon}`} />
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
                        Installation
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        How to Get Started
                    </h2>

                    <div className="cp-steps">
                        {[
                            { n: '01', title: 'Install &amp; Activate', desc: 'Upload the accelvia-uptime-monitor plugin directory to your /wp-content/plugins/ directory and activate it. Your site is monitored upon activation.' },
                            { n: '02', title: 'Configure Channels', desc: 'Access "Accelvia Monitor" in the sidebar to configure your notification settings and edge networking fallbacks.' },
                            { n: '03', title: 'Server-Side Cron', desc: '⚠️ Essential: Disable default WP-Cron and set up a true Server-Side Cron Job (via cPanel) to execute wp-cron.php every 5 minutes.' },
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
 * Plugin Name: Accelvia Uptime Monitor
 * Description: The ultimate all-in-one website monitoring solution 
 *              built directly into your WordPress dashboard, empowering 
 *              you to host your own enterprise-grade monitoring infrastructure.
 * Version:     1.0.0
 * Requires at least: 6.0
 * Tested up to: 6.9
 * Author:      Md Musfiqur Rahman
 * License:     GPLv2 or later
 * Text Domain: accelvia-uptime-monitor
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
                            Take Control
                            <span className="label-line" />
                        </div>
                        <h2 className="pf-contact-title">
                            Host Your Own<br /><span>Monitoring Network</span>
                        </h2>
                        <p className="pf-contact-desc">
                            Free, self-hosted, and robust. Built by{' '}
                            <Link href="/musfiqurrahman" className="text-green">Md Musfiqur Rahman</Link>{' '}
                            at AccelviaTeams.
                        </p>
                        <div className="pf-contact-actions">
                            <a
                                href="https://wordpress.org/plugins/accelvia-uptime-monitor"
                                className="btn btn-primary btn-lg"
                                id="cp-cta-download-btn"
                            >
                                <i className="fa-solid fa-download" />
                                Download Free
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
                                GPLv2 License
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
