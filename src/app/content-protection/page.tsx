import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Accelvia – Content Protection | WordPress Plugin',
    description:
        'Advanced multi-layered content protection with DevTools detection, screenshot prevention, encrypted content delivery, download-proof watermarking, and cross-platform security — all zero-dependency.',
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
        desc: 'Intercepts F12, Ctrl+Shift+I/J, Ctrl+U, Ctrl+S, and Ctrl+P to deter casual scraping and source viewing.',
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
        icon: 'fa-bug-slash',
        title: 'DevTools Detection',
        desc: '3-layer detection engine using window size delta, console getter trap, and debugger timing — catches DevTools opened from any method.',
    },
    {
        icon: 'fa-lock',
        title: 'Encrypted Content',
        desc: 'Base64 body encoding makes view-source: show gibberish. SEO-safe with automatic bot whitelisting for Google, Bing, social media crawlers, and more.',
    },
    {
        icon: 'fa-camera-slash',
        title: 'Screenshot Protection',
        desc: 'Blocks screenshot shortcuts on Windows, macOS, and Linux. Auto-blurs on tab switch, intercepts Screen Capture API, and clears clipboard periodically.',
    },
    {
        icon: 'fa-droplet',
        title: 'Canvas-Baked Watermarks',
        desc: 'Burns watermarks into image pixels via HTML5 Canvas. Replaces img.src with blob: URLs so copied/saved images are always watermarked.',
    },
    {
        icon: 'fa-feather',
        title: 'Zero Dependencies',
        desc: 'Pure vanilla JavaScript — no jQuery, no npm, no bloat. DevTools polling uses less than 0.04% CPU. Server-side encoding adds only 2-4ms.',
    },
    {
        icon: 'fa-shield-halved',
        title: 'Head Guard & JS Guard',
        desc: 'Protection activates instantly in the <head> before body loads. When JavaScript is disabled, all content is hidden with a friendly message.',
    },
    {
        icon: 'fa-sliders',
        title: 'Granular Control',
        desc: 'Exclude specific post types, page/post IDs, or bypass protection entirely for logged-in administrators. Custom notification messages.',
    },
];

const specs = [
    { label: 'Version', value: '1.2.0' },
    { label: 'Requires WordPress', value: '6.0+' },
    { label: 'Tested up to', value: '6.9' },
    { label: 'Requires PHP', value: '7.4+' },
    { label: 'License', value: 'GPLv2 or later' },
    { label: 'Text Domain', value: 'accelvia-content-protection' },
    { label: 'Author', value: 'Md Musfiqur Rahman' },
];

const faqs = [
    {
        q: 'Does this plugin completely prevent content theft?',
        a: 'No tool can 100% prevent content theft (e.g. phone cameras or external capture hardware). This plugin acts as a very strong, multi-layered deterrent against casual copying, right-clicking, screenshot tools, DevTools inspection, and source code viewing.',
    },
    {
        q: 'Will this slow down my website?',
        a: 'No. The plugin uses pure Vanilla JavaScript. DevTools detection uses optimised 1.5s polling with cached function objects consuming less than 0.04% CPU. Server-side encoding adds only 2-4ms.',
    },
    {
        q: 'Will Encrypted Content affect my SEO?',
        a: 'No. Search engine crawlers (Google, Bing, Yandex, Baidu, DuckDuckBot) and social media bots (Facebook, Twitter, LinkedIn, WhatsApp, Pinterest, Telegram) are automatically whitelisted and receive raw HTML.',
    },
    {
        q: 'Does it work with page builders like Elementor or Divi?',
        a: 'Yes. Because the script is enqueued globally via WordPress, it works regardless of the theme or page builder you use.',
    },
    {
        q: 'Can I still edit my site and use right-click?',
        a: 'Yes. Enable the "Skip Administrators" option in settings so all protection is disabled for logged-in administrators.',
    },
    {
        q: 'Does the watermark modify my original images?',
        a: 'No. Original image files in your Media Library are never touched. Watermarks are rendered at runtime via Canvas and CSS overlays.',
    },
    {
        q: 'Does the screenshot protection work on all platforms?',
        a: 'Yes. It blocks shortcuts on Windows, macOS, and Linux. It also blurs the page on tab/window focus loss and intercepts the Screen Capture API. Hardware capture methods cannot be blocked by any browser solution.',
    },
    {
        q: 'What happens when JavaScript is disabled?',
        a: 'All page content is hidden and a friendly message is displayed asking the visitor to enable JavaScript, since all protection features require it.',
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
                            <span className="cp-version-badge">v1.2.0</span>
                            <span className="cp-license-badge">GPLv2 or later</span>
                        </div>

                        <h1 className="pf-hero-name" style={{ marginBottom: '1rem' }}>
                            Accelvia –{' '}
                            <span>Content</span>
                            <br />Protection
                        </h1>

                        <p className="pf-hero-bio" style={{ maxWidth: 600, marginBottom: '2.5rem' }}>
                            Advanced multi-layered content protection with DevTools detection,
                            screenshot prevention, encrypted content delivery, download-proof
                            watermarking, and cross-platform security — all zero-dependency.
                        </p>

                        <div className="pf-hero-actions">
                            <a
                                href="https://wordpress.org/plugins/accelvia-content-protection/"
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
                            <a 
                                href="https://www.producthunt.com/products/accelvia-content-protection?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-accelvia-content-protection" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img 
                                    alt="Accelvia Content Protection - A lightweight, zero-dependency WordPress plugin that protect | Product Hunt" 
                                    width="250" 
                                    height="54" 
                                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1134625&theme=light&t=1777409286265" 
                                />
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="pf-hero-stats">
                            <div className="pf-stat">
                                <span className="pf-stat-num">12<span>+</span></span>
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
                        Multi-Layered Security
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
                            { n: '01', title: 'Install &amp; Activate', desc: 'Upload the plugin files to your WordPress installation or install directly via the plugins screen and click Activate.' },
                            { n: '02', title: 'Configure Settings', desc: 'Navigate to Settings → Accelvia Protection to toggle protection features, configure DevTools detection, encrypted content, and watermark settings.' },
                            { n: '03', title: 'Protection Active', desc: 'Right-click, shortcuts, text selection, screenshots, DevTools, and source viewing are all blocked. Watermarks are canvas-baked onto images automatically.' },
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
 * Description: Advanced multi-layered content protection with
 *              DevTools detection, screenshot prevention,
 *              encrypted content delivery, download-proof
 *              watermarking, and cross-platform security.
 * Version:     1.2.0
 * Requires at least: 6.0
 * Tested up to: 6.9
 * Requires PHP: 7.4
 * Author:      Md Musfiqur Rahman
 * Author URI:  https://accelviateams.com/musfiqurrahman
 * License:     GPLv2 or later
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
                                href="https://wordpress.org/plugins/accelvia-content-protection/"
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
