import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Md Musfiqur Rahman | SQA Engineer & PMP® — AccelviaTeams',
    description:
        'Personal portfolio of Md Musfiqur Rahman — Software Quality Assurance Engineer, PMP® certified, Test Automation specialist, and Plugin Developer at AccelviaTeams.',
};

const skills = {
    automation: [
        { name: 'Selenium WebDriver', pct: 92 },
        { name: 'Playwright', pct: 85 },
        { name: 'Appium (Mobile)', pct: 78 },
        { name: 'JMeter (Performance)', pct: 80 },
    ],
    testing: [
        { name: 'Manual Testing', pct: 95 },
        { name: 'API Testing (Postman)', pct: 90 },
        { name: 'Cross-Browser Testing', pct: 88 },
        { name: 'Regression Testing', pct: 92 },
    ],
};

const tools = [
    { icon: 'fa-bug', name: 'Selenium' },
    { icon: 'fa-robot', name: 'Playwright' },
    { icon: 'fa-mobile-screen', name: 'Appium' },
    { icon: 'fa-bolt', name: 'JMeter' },
    { icon: 'fa-paper-plane', name: 'Postman' },
    { icon: 'fa-code', name: 'Jest' },
    { icon: 'fa-github', name: 'GitHub' },
    { icon: 'fa-jenkins', name: 'CI/CD' },
    { icon: 'fa-wordpress', name: 'WordPress' },
    { icon: 'fa-js', name: 'JavaScript' },
    { icon: 'fa-python', name: 'Python' },
    { icon: 'fa-file-lines', name: 'TestRail' },
];

const certifications = [
    {
        icon: 'fa-award',
        name: 'PMP® Certified',
        org: 'Project Management Institute (USA)',
        desc: 'Project Management Professional certification from the globally recognised PMI.',
    },
    {
        icon: 'fa-chart-line',
        name: 'PMI Agile® Project Management',
        org: 'Project Management Institute (USA)',
        desc: 'Agile certified practitioner focused on adaptive project delivery.',
    },
    {
        icon: 'fa-flask',
        name: 'Advanced Automation Testing',
        org: 'Road To SDET',
        desc: 'Advanced course covering Selenium, Playwright, CI/CD integration, and framework design.',
    },
    {
        icon: 'fa-briefcase',
        name: 'Product Management — Intermediate',
        org: 'Interactive Cares',
        desc: 'Product lifecycle, roadmap planning, and stakeholder collaboration.',
    },
];

const projects = [
    {
        icon: 'fa-shield-halved',
        tag: 'WordPress Plugin',
        name: 'Accelvia Content Protection',
        desc: 'A WordPress plugin that protects website content by disabling right-click, copy, inspect, and other browser actions that could expose source code or text.',
        link: 'https://github.com/MusfiqurRahman12',
    },
    {
        icon: 'fa-bullhorn',
        tag: 'WordPress Plugin',
        name: 'Accelvia CTA',
        desc: 'A call-to-action plugin for WordPress sites that allows site owners to add customisable CTA buttons and banners throughout their pages with ease.',
        link: 'https://github.com/MusfiqurRahman12',
    },
];

const services = [
    { icon: 'fa-vial', name: 'Manual & Automated Testing', desc: 'Selenium, Playwright end-to-end coverage' },
    { icon: 'fa-tablet-screen-button', name: 'UI & Pixel-Perfect Testing', desc: 'Cross-device & browser layout checks' },
    { icon: 'fa-plug', name: 'API Testing & Validation', desc: 'Postman integration & contract testing' },
    { icon: 'fa-gauge-high', name: 'Performance Testing', desc: 'Load, stress & regression with JMeter' },
    { icon: 'fa-file-circle-check', name: 'QA Documentation', desc: 'Test cases, plans & bug reports' },
    { icon: 'fa-puzzle-piece', name: 'Plugin Development', desc: 'Custom WordPress plugins & solutions' },
];

export default function PortfolioPage() {
    return (
        <main className="pf-page">

            {/* ── HERO ─────────────────────────────────────── */}
            <section className="pf-hero">
                <div className="pf-hero-bg">
                    <div className="pf-hero-glow" />
                    <div className="pf-hero-grid" />
                </div>

                <div className="container">
                    <div className="pf-hero-layout">

                        {/* Content */}
                        <div className="pf-hero-content">
                            <div className="pf-available-badge">
                                <span className="pf-available-dot" />
                                Available for Collaboration
                            </div>

                            <h1 className="pf-hero-name">
                                Md <span>Musfiqur</span><br />Rahman
                            </h1>

                            <p className="pf-hero-title">
                                Software Quality Assurance Engineer &nbsp;·&nbsp; PMP® &nbsp;·&nbsp; Test Automation &nbsp;·&nbsp; PCO &nbsp;·&nbsp; Plugin Developer
                            </p>

                            <p className="pf-hero-bio">
                                Skilled SQA Engineer with years of hands-on experience ensuring software
                                quality through manual and automated testing across web and mobile platforms.
                                Certified PMP® and Agile practitioner passionate about building quality into
                                products from day one.
                            </p>

                            <div className="pf-hero-actions">
                                <a
                                    href="mailto:musfiqurrahman@accelviateams.com"
                                    className="btn btn-primary btn-lg"
                                    id="pf-hire-btn"
                                >
                                    <i className="fa-solid fa-paper-plane" />
                                    Hire Me
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/musfiqurrahmansqa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-lg"
                                    id="pf-linkedin-btn"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                    LinkedIn
                                </a>
                            </div>

                            {/* Social Row */}
                            <div className="pf-social-links">
                                <a
                                    href="mailto:musfiqurrahman@accelviateams.com"
                                    className="pf-social-link"
                                    title="Email"
                                    id="pf-email-icon"
                                >
                                    <i className="fa-solid fa-envelope" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/musfiqurrahmansqa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pf-social-link"
                                    title="LinkedIn"
                                    id="pf-linkedin-icon"
                                >
                                    <i className="fa-brands fa-linkedin-in" />
                                </a>
                                <a
                                    href="https://github.com/MusfiqurRahman12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pf-social-link"
                                    title="GitHub"
                                    id="pf-github-icon"
                                >
                                    <i className="fa-brands fa-github" />
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="pf-hero-stats">
                                <div className="pf-stat">
                                    <span className="pf-stat-num">5<span>+</span></span>
                                    <span className="pf-stat-lbl">Years Experience</span>
                                </div>
                                <div className="pf-stat-divider" />
                                <div className="pf-stat">
                                    <span className="pf-stat-num">50<span>+</span></span>
                                    <span className="pf-stat-lbl">Projects Tested</span>
                                </div>
                                <div className="pf-stat-divider" />
                                <div className="pf-stat">
                                    <span className="pf-stat-num">4</span>
                                    <span className="pf-stat-lbl">Certifications</span>
                                </div>
                            </div>
                        </div>

                        {/* Avatar */}
                        <div className="pf-hero-visual">
                            <div className="pf-avatar-glow" />
                            <div className="pf-avatar-wrapper">
                                <div className="pf-avatar-ring" />
                                <div className="pf-avatar-ring-inner" />
                                <Image
                                    src="/musfiqur-avatar.jpg"
                                    alt="Md Musfiqur Rahman"
                                    width={320}
                                    height={320}
                                    className="pf-avatar-img"
                                    priority
                                />
                            </div>
                            <div className="pf-cert-badge">
                                <i className="fa-solid fa-certificate" />
                                PMP® Certified
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ABOUT / SERVICES ─────────────────────────── */}
            <section className="pf-about section">
                <div className="container">
                    <div className="pf-about-layout">
                        <div>
                            <div className="section-label">
                                <span className="label-line" />
                                About Me
                            </div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                                Building Quality Into<br />Every Release
                            </h2>
                            <div className="pf-about-text">
                                <p>
                                    I am Musfiqur, a skilled Software Quality Assurance Engineer with years of
                                    experience. I am responsible for ensuring the quality of software applications
                                    by conducting various testing methods and evaluating results.
                                </p>
                                <p>
                                    I have experience designing, implementing, and executing test cases and test
                                    plans to identify and report software defects. I possess expertise in both
                                    manual and automated testing using Selenium, Appium, and JMeter, with
                                    experience across web and mobile platforms on multiple devices.
                                </p>
                                <p>
                                    My attention to detail, critical thinking, and collaborative approach have
                                    helped me work closely with developers and stakeholders to build quality
                                    in from the start — not as an afterthought.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="section-label">
                                <span className="label-line" />
                                What I Do
                            </div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                                Services &amp;<br />Expertise
                            </h2>
                            <div className="pf-services-grid">
                                {services.map((s) => (
                                    <div className="pf-service-card" key={s.name}>
                                        <div className="pf-service-icon">
                                            <i className={`fa-solid ${s.icon}`} />
                                        </div>
                                        <p className="pf-service-name">{s.name}</p>
                                        <p className="pf-service-desc">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKILLS ───────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Skills &amp; Tools
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Technical Proficiency
                    </h2>

                    <div className="pf-skills-layout">
                        {/* Skill Bars */}
                        <div>
                            <div className="pf-skill-category">
                                <div className="pf-skill-category-title">Test Automation</div>
                                {skills.automation.map((s) => (
                                    <div className="pf-skill-item" key={s.name}>
                                        <div className="pf-skill-meta">
                                            <span className="pf-skill-name">{s.name}</span>
                                            <span className="pf-skill-pct">{s.pct}%</span>
                                        </div>
                                        <div className="pf-skill-bar-track">
                                            <div
                                                className="pf-skill-bar-fill"
                                                style={{ width: `${s.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pf-skill-category">
                                <div className="pf-skill-category-title">QA &amp; Testing</div>
                                {skills.testing.map((s) => (
                                    <div className="pf-skill-item" key={s.name}>
                                        <div className="pf-skill-meta">
                                            <span className="pf-skill-name">{s.name}</span>
                                            <span className="pf-skill-pct">{s.pct}%</span>
                                        </div>
                                        <div className="pf-skill-bar-track">
                                            <div
                                                className="pf-skill-bar-fill"
                                                style={{ width: `${s.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools Pill Grid */}
                        <div>
                            <div className="pf-skill-category-title" style={{ marginBottom: '1.5rem' }}>
                                Tools &amp; Technologies
                            </div>
                            <div className="pf-pills">
                                {tools.map((t) => (
                                    <span className="pf-pill" key={t.name}>
                                        <i className={`fa-brands ${t.icon}`} />
                                        {t.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CERTIFICATIONS ───────────────────────────── */}
            <section className="pf-certs section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Certifications
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Professional Credentials
                    </h2>
                    <div className="pf-certs-grid">
                        {certifications.map((c) => (
                            <div className="pf-cert-card" key={c.name}>
                                <div className="pf-cert-icon">
                                    <i className={`fa-solid ${c.icon}`} />
                                </div>
                                <h3 className="pf-cert-name">{c.name}</h3>
                                <p className="pf-cert-org">{c.org}</p>
                                <p className="pf-cert-desc">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EDUCATION ────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Education
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Academic Background
                    </h2>
                    <div className="pf-edu-card">
                        <div className="pf-edu-icon">
                            <i className="fa-solid fa-graduation-cap" />
                        </div>
                        <div>
                            <p className="pf-edu-degree">Bachelor of Technology</p>
                            <p className="pf-edu-field">Software Engineering</p>
                            <p className="pf-edu-university">
                                Lovely Professional University &nbsp;·&nbsp; Punjab, India
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ─────────────────────────────────── */}
            <section className="pf-certs section">
                <div className="container">
                    <div className="section-label">
                        <span className="label-line" />
                        Projects
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                        Selected Work
                    </h2>
                    <div className="pf-projects-grid">
                        {projects.map((p) => (
                            <div className="pf-project-card" key={p.name}>
                                <div className="pf-project-thumb">
                                    <i className={`fa-solid ${p.icon}`} />
                                </div>
                                <div className="pf-project-body">
                                    <span className="pf-project-tag">{p.tag}</span>
                                    <h3 className="pf-project-name">{p.name}</h3>
                                    <p className="pf-project-desc">{p.desc}</p>
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pf-project-link"
                                    >
                                        View on GitHub <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ──────────────────────────────────── */}
            <section className="pf-contact section">
                <div className="container">
                    <div className="pf-contact-inner">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="label-line" />
                            Contact
                            <span className="label-line" />
                        </div>
                        <h2 className="pf-contact-title">
                            Let&apos;s Work<br /><span>Together</span>
                        </h2>
                        <p className="pf-contact-desc">
                            Have a project that needs quality assurance, automation expertise, or
                            plugin development? I&apos;d love to hear from you.
                        </p>
                        <div className="pf-contact-actions">
                            <a
                                href="mailto:musfiqurrahman@accelviateams.com"
                                className="btn btn-primary btn-lg"
                                id="pf-contact-email-btn"
                            >
                                <i className="fa-solid fa-envelope" />
                                Send Me an Email
                            </a>
                            <Link
                                href="/contact"
                                className="btn btn-outline btn-lg"
                                id="pf-contact-page-btn"
                            >
                                Contact Page
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                        <div className="pf-contact-links">
                            <a
                                href="https://www.linkedin.com/in/musfiqurrahmansqa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pf-contact-link-item"
                            >
                                <i className="fa-brands fa-linkedin" />
                                LinkedIn
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
                                musfiqurrahman@accelviateams.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
