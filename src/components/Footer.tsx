import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="site-logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                            <div className="logo-icon" style={{ width: '32px', height: '32px' }}>
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C25.5 38 30.4 35.5 33.7 31.5L20 20V2Z"
                                        fill="#2DBD5A" />
                                    <path d="M20 2V20L33.7 31.5C36.6 28.1 38 23.7 38 20C38 10.06 29.94 2 20 2Z"
                                        fill="#22A04B" />
                                </svg>
                            </div>
                            <span className="logo-text" style={{ fontSize: '1.1rem' }}>Accelvia<span
                                className="logo-accent">Teams</span></span>
                        </Link>
                        <p className="footer-tagline">Building digital products that help businesses design, build, and scale using modern technologies.</p>
                        <div className="footer-socials">
                            <a href="#" className="social-btn" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="social-btn" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className="social-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Services</h4>
                        <ul>
                            <li><Link href="/about">CMS Development</Link></li>
                            <li><Link href="/about">Web Applications</Link></li>
                            <li><Link href="/about">WordPress Plugins</Link></li>
                            <li><Link href="/about">Theme Builders</Link></li>
                            <li><Link href="/about">Mobile Apps</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/work">Our Work</Link></li>
                            <li><Link href="/news">News</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact</h4>
                        <ul>
                            <li><a href="mailto:hello@accelviateams.com">hello@accelviateams.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 AccelviaTeams. All rights reserved.</p>
                    <p>accelviateams.com</p>
                </div>
            </div>
        </footer>
    );
}
