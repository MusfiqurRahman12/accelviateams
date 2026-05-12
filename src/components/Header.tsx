'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Sticky header + scroll progress bar
        const bar = document.getElementById('scrollProgress');
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
            if (bar) {
                const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
                bar.style.width = pct + '%';
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const toggleTheme = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <>
            <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
                <div className="container">
                    <nav className="nav-inner">
                        <Link href="/" className="site-logo">
                            <div className="logo-icon">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C25.5 38 30.4 35.5 33.7 31.5L20 20V2Z"
                                        fill="#2DBD5A" />
                                    <path d="M20 2V20L33.7 31.5C36.6 28.1 38 23.7 38 20C38 10.06 29.94 2 20 2Z"
                                        fill="#22A04B" />
                                </svg>
                            </div>
                            <span className="logo-text">Accelvia<span className="logo-accent">Teams</span></span>
                        </Link>

                        <ul className="nav-menu">
                            <li><Link href="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link></li>
                            <li><Link href="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link></li>
                            <li><Link href="/work" className={`nav-link${isActive('/work') ? ' active' : ''}`}>Work</Link></li>
                            <li><Link href="/news" className={`nav-link${isActive('/news') ? ' active' : ''}`}>News</Link></li>
                            <li><Link href="/contact" className={`nav-link nav-cta${isActive('/contact') ? ' active' : ''}`}>Let's Talk</Link></li>
                        </ul>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                                <i className="fa-solid fa-moon icon-moon"></i>
                                <i className="fa-solid fa-sun icon-sun"></i>
                            </button>
                            <button className="menu-toggle" id="menuToggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open Menu">
                                <span></span><span></span><span></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Nav */}
            <div className={`mobile-nav${mobileMenuOpen ? ' open' : ''}`} id="mobileNav">
                <button className="menu-close" id="menuClose" onClick={() => setMobileMenuOpen(false)} aria-label="Close">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <nav className="mobile-nav-links">
                    <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/work" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Work</Link>
                    <Link href="/news" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>News</Link>
                    <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </nav>
                <p className="mobile-nav-email">hello@accelviateams.com</p>
            </div>
            <div className={`mobile-overlay${mobileMenuOpen ? ' active' : ''}`} id="mobileOverlay" onClick={() => setMobileMenuOpen(false)}></div>
        </>
    );
}
