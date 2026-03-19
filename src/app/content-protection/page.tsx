import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Accelvia – Content Protection | WordPress Plugin',
    description:
        'Lightweight frontend content protection WordPress plugin. Zero-dependency deterrent to disable right-click, keyboard shortcuts, text selection, image drag, and copy. By Md Musfiqur Rahman.',
};

const features = [
    {
        icon: 'fa-hand',
        title: 'Disable Right-Click',
        desc: 'Blocks the browser context menu across the entire page so visitors cannot access "Save As", "Inspect", or "View Source" via right-click.',
    },
    {
        icon: 'fa-keyboard',
        title: 'Block Keyboard Shortcuts',
        desc: 'Intercepts Ctrl+U (view source), Ctrl+S (save), Ctrl+A (select all), F12, and DevTools shortcuts to deter casual scraping.',
    },
    {
        icon: 'fa-i-cursor',
        title: 'Prevent Text Selection',
        desc: 'Disables mouse-based text highlighting site-wide so written content cannot be trivially copy-pasted from the browser.',
    },
    {
        icon: 'fa-image',
        title: 'Stop Image Drag',
        desc: 'Prevents users from dragging images out of the browser window, protecting visual assets from easy local saving.',
    },
    {
        icon: 'fa-copy',
        title: 'Block Copy Events',
        desc: 'Intercepts the clipboard copy event so text cannot be copied even if selection is achieved via alternative methods.',
    },
    {
        icon: 'fa-feather',
        title: 'Zero Dependencies',
        desc: 'Pure vanilla JavaScript — no jQuery, no npm, no bloat. A single lightweight script that loads fast and stays out of your way.',
    },
];

const specs = [
    { label: 'Version', value: '1.0.0' },
    { label: 'Requires WordPress', value: '6.0+' },
    { label: 'Requires PHP', value: '7.4+' },
    { label: 'License', value: 'GPL-2.0-or-later' },
    { label: 'Text Domain', value: 'accelvia-content-protection' },
    { label: 'Author', value: 'Md Musfiqur Rahman' },
];

const faqs = [
    {
        q: 'Does this plugin affect SEO?',
        a: 'No. The protection is purely frontend JavaScript. Search engine crawlers are not affected — they index your content normally.',
    },
    {
        q: 'Does it work with page builders like Elementor or Divi?',
        a: 'Yes. Because the script is enqueued globally via WordPress, it works regardless of the theme or page builder you use.',
    },
    {
        q: 'Can a determined user still bypass this?',
        a: 'This plugin is a lightweight deterrent, not an absolute lock. It stops casual copying effectively but a technically advanced user can always work around frontend protections.',
    },
    {
        q: 'Is there a settings page?',
        a: 'Version 1.0.0 activates all protections globally by default. Granular per-feature controls are planned for a future release.',
    },
];

export default function ContentProtectionPage() {
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
                            Accelvia –{' '}
                            <span>Content</span>
                            <br />Protection
                        </h1>

                        <p className="pf-hero-bio" style={{ maxWidth: 600, marginBottom: '2.5rem' }}>
                            A lightweight, zero-dependency WordPress plugin that deters casual content
                            theft by disabling right-click, keyboard shortcuts, text selection, image
                            drag, and clipboard copy — with no impact on SEO or page performance.
                        </p>

                        <div className="pf-hero-actions">
                            <a
                                href="https://accelviateams.com/content-protection"
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
                                <span className="pf-stat-num">5<span>+</span></span>
                                <span className="pf-stat-lbl">Protections</span>
                            </div>
                            <div className="pf-stat-divider" />
                            <div className="pf-stat">
                                <span className="pf-stat-num">0</span>
                                <span className="pf-stat-lbl">Dependencies</span>
                            </div>
                            <div className="pf-stat-divider" />
                            <div className="pf-stat">
                                <span className="pf-stat-num">WP<span> 6+</span></span>
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
                        Features
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        What Gets Protected
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
                        How It Works
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Simple &amp; Lightweight
                    </h2>

                    <div className="cp-steps">
                        {[
                            { n: '01', title: 'Install &amp; Activate', desc: 'Upload the plugin zip to your WordPress installation and click Activate. No configuration required.' },
                            { n: '02', title: 'Auto-Enqueue', desc: 'The plugin automatically enqueues a single tiny JavaScript file on every frontend page of your site.' },
                            { n: '03', title: 'Protection Active', desc: 'Right-click, keyboard shortcuts, text selection, image drag, and copy are all disabled instantly — zero setup.' },
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
 * Plugin Name: Accelvia – Content Protection
 * Plugin URI:  https://accelviateams.com/content-protection
 * Description: Lightweight frontend content protection:
 *              zero-dependency deterrent to disable right-click,
 *              keyboard shortcuts, text selection, image drag,
 *              and copy.
 * Version:     1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author:      Md Musfiqur Rahman
 * Author URI:  https://accelviateams.com/musfiqurrahman
 * License:     GPL-2.0-or-later
 * Text Domain: accelvia-content-protection
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
                            Protect Your<br /><span>Content Today</span>
                        </h2>
                        <p className="pf-contact-desc">
                            Free, open-source, and ready to install. Built by{' '}
                            <Link href="/musfiqurrahman" className="text-green">Md Musfiqur Rahman</Link>{' '}
                            at AccelviaTeams.
                        </p>
                        <div className="pf-contact-actions">
                            <a
                                href="https://accelviateams.com/content-protection"
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
