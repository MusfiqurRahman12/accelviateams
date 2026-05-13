'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newsData from '@/data/news.json';

export default function ClientArticleLayout() {
    const [copied, setCopied] = useState(false);
    const [tocOpen, setTocOpen] = useState(true);

    const recentPosts = newsData.slice(0, 5);
    const relatedPosts = newsData.filter(p => !p.isFeatured).slice(0, 3);

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

        const tocLinks = document.querySelectorAll('.toc-link');
        const sectionIds = ['section-intro', 'section-models', 'section-agentic', 'section-future', 'section-conclusion'];
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
                    <nav className="article-breadcrumb anim">
                        <Link href="/"><i className="fa-solid fa-house"></i></Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link href="/news">News</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span>AI Models & Agentic Coding</span>
                    </nav>

                    <div className="article-hero-meta anim">
                        <span className="news-cat">Technology</span>
                        <div className="news-meta" style={{ display: 'inline-flex' }}>
                            <span className="news-date"><i className="fa-regular fa-calendar"></i> May 14, 2026</span>
                            <span className="news-read"><i className="fa-regular fa-clock"></i> 6 min read</span>
                        </div>
                    </div>

                    <h1 className="article-title anim">
                        2026 AI Models Comparison: How Agentic Coding is Thriving
                    </h1>
                    <p className="article-lead anim">
                        The era of simple code-completion is over. We dive into a comprehensive comparison of the best trending AI models in 2026 and explore how agentic coding is autonomously building, debugging, and deploying complex software at unprecedented speeds.
                    </p>

                    <div className="article-byline anim">
                        <div className="article-author">
                            <div className="author-avatar"><i className="fa-solid fa-microchip"></i></div>
                            <div>
                                <span className="author-name">AccelviaTeams AI Research</span>
                                <span className="author-role">Technology Insights</span>
                            </div>
                        </div>
                        <div className="article-share">
                            <span className="share-label">Share</span>
                            <a href="#" className="share-btn" title="Share on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="share-btn" title="Share on X"><i className="fa-brands fa-x-twitter"></i></a>
                            <button className="share-btn" title="Copy link" onClick={copyLink}>
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
                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
                            alt="Abstract AI and Neural Network Banner"
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
                            <div className={`toc anim${tocOpen ? '' : ' toc-collapsed'}`} id="tocBox">
                                <button className="toc-header toc-toggle" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen} type="button">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <i className="fa-solid fa-list"></i>
                                        <span>Table of Contents</span>
                                    </div>
                                    <i className={`fa-solid fa-chevron-down toc-toggle-icon${tocOpen ? '' : ' toc-toggle-icon--collapsed'}`}></i>
                                </button>
                                <ol className={`toc-list${tocOpen ? '' : ' toc-list--hidden'}`}>
                                    <li><a href="#section-intro" className="toc-link">The Shift from Copilots to Agents</a></li>
                                    <li><a href="#section-models" className="toc-link">Comparing the Top AI Models of 2026</a></li>
                                    <li><a href="#section-agentic" className="toc-link">How Agentic Coding is Thriving</a></li>
                                    <li><a href="#section-future" className="toc-link">What Does This Mean for Developers?</a></li>
                                    <li><a href="#section-conclusion" className="toc-link">Conclusion</a></li>
                                </ol>
                            </div>

                            <div className="prose anim">
                                <h2 id="section-intro">The Shift from Copilots to Agents</h2>
                                <p>Just a couple of years ago, we were amazed when AI could accurately autocomplete a function or generate a basic boilerplate. Today, the landscape has fundamentally shifted. We are no longer working alongside "copilots" that wait for our instruction on every line; we are collaborating with autonomous <strong>AI Agents</strong> that can read an entire repository, understand the architectural intent, and execute multi-file changes independently.</p>
                                <p>This transition marks the beginning of true "Agentic Coding," where AI assumes the role of an autonomous developer executing tasks end-to-end. Let's compare the frontier models making this possible.</p>

                                <h2 id="section-models">Comparing the Top AI Models of 2026</h2>
                                <p>The race for AGI (Artificial General Intelligence) has yielded highly specialized models for software engineering. Here is a breakdown of the leading contenders:</p>

                                <div className="tech-stack">
                                    <div className="tech-card">
                                        <div className="tech-card-icon"><i className="fa-brands fa-google"></i></div>
                                        <div>
                                            <h4>Google Gemini 3 Pro/Flash</h4>
                                            <p>With its massive 2-million+ token context window, Gemini 3 excels at repository-wide refactoring. It can ingest entire codebases, documentation, and error logs simultaneously. The Flash variant provides unparalleled speed for real-time agentic loop execution.</p>
                                        </div>
                                    </div>
                                    <div className="tech-card">
                                        <div className="tech-card-icon"><i className="fa-solid fa-robot"></i></div>
                                        <div>
                                            <h4>OpenAI GPT-5 / o1 Series</h4>
                                            <p>OpenAI's reasoning-focused models are the gold standard for complex logic resolution. When an agent hits an unexpected bug or API deprecation, o1 acts as the reasoning engine, methodically testing hypotheses until the software compiles correctly.</p>
                                        </div>
                                    </div>
                                    <div className="tech-card">
                                        <div className="tech-card-icon"><i className="fa-solid fa-brain"></i></div>
                                        <div>
                                            <h4>Anthropic Claude 4.0</h4>
                                            <p>Claude remains the developer's favorite for nuanced syntax and zero-shot code generation. Its strict adherence to system prompts makes it the most reliable model for strictly defined enterprise environments where security boundaries are critical.</p>
                                        </div>
                                    </div>
                                </div>

                                <h2 id="section-agentic">How Agentic Coding is Thriving</h2>
                                <p>Agentic coding thrives because it mimics the human software development lifecycle (SDLC) rather than just functioning as a fancy text predictor. Here is how modern agents are operating in production environments:</p>
                                <ul>
                                    <li><strong>Autonomous Debugging:</strong> Agents can trigger tests, read the stack trace, formulate a fix, apply it to the file, and re-run the tests. They iterate autonomously until the build passes.</li>
                                    <li><strong>Environment Awareness:</strong> Tools like Docker and secure sandboxes allow agents to interact directly with the terminal, installing packages and setting up environments without human intervention.</li>
                                    <li><strong>Full Feature Delivery:</strong> You can provide a Jira ticket or a GitHub issue, and an agentic framework will scaffold the frontend UI, write the backend logic, update the database schema, and open a Pull Request.</li>
                                </ul>

                                <blockquote className="article-quote">
                                    <p>"Agentic AI is not replacing software engineers; it is elevating them to software architects. You spend less time typing syntax and more time designing resilient systems."</p>
                                    <cite>— AccelviaTeams AI Engineering</cite>
                                </blockquote>

                                <h2 id="section-future">What Does This Mean for Developers?</h2>
                                <p>The democratization of coding continues. Startups can build robust MVPs at a fraction of the historical cost and time. However, this raises the bar for software quality. Because AI can generate thousands of lines of code instantly, human developers must excel at system architecture, security auditing, and product management.</p>
                                <p>To thrive in 2026, developers must learn to orchestrate these agents. Understanding prompt engineering, agent frameworks (like LangChain, AutoGen, or custom solutions), and CI/CD pipelines for AI validation is the new baseline.</p>

                                <h2 id="section-conclusion">Conclusion</h2>
                                <p>The transition to agentic coding is the most significant leap since the invention of high-level programming languages. Whether you leverage Gemini's context, GPT's reasoning, or Claude's precision, integrating autonomous agents into your workflow is no longer optional—it is the definitive competitive advantage of this era.</p>
                            </div>

                            <div className="article-tags anim">
                                <span className="tag-label">Tags:</span>
                                <Link href="/news" className="article-tag">Artificial Intelligence</Link>
                                <Link href="/news" className="article-tag">Agentic Coding</Link>
                                <Link href="/news" className="article-tag">Software Engineering</Link>
                                <Link href="/news" className="article-tag">Gemini 3</Link>
                                <Link href="/news" className="article-tag">GPT-5</Link>
                            </div>

                            <div className="article-share-bottom anim">
                                <span className="share-label">Found this useful? Share it:</span>
                                <div className="article-share" style={{ justifyContent: 'flex-start' }}>
                                    <a href="#" className="share-btn" title="Share on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#" className="share-btn" title="Share on X"><i className="fa-brands fa-x-twitter"></i></a>
                                    <button className="share-btn" title="Copy link" onClick={copyLink}>
                                        <i className={copied ? 'fa-solid fa-check' : 'fa-solid fa-link'}></i>
                                    </button>
                                </div>
                            </div>

                            <div className="article-back anim">
                                <Link href="/news" className="btn btn-outline"><i className="fa-solid fa-arrow-left"></i> Back to News</Link>
                            </div>

                            <div className="related-section anim">
                                <div className="section-label"><span className="label-line"></span><span>Keep Reading</span></div>
                                <h2 className="related-title">Related Articles</h2>
                                <div className="related-grid">
                                    {relatedPosts.map((post) => (
                                        <Link key={`related-${post.id}`} href={post.link} className="related-card">
                                            <div className={`related-card-img ${post.imageClass || ''}`}>
                                                <span className="news-cat">{post.category}</span>
                                            </div>
                                            <div className="related-card-body">
                                                <div className="news-meta">
                                                    <span className="news-date"><i className="fa-regular fa-calendar"></i> {post.date}</span>
                                                </div>
                                                <h3 className="related-card-title">{post.title}</h3>
                                                <span className="news-link">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* SIDEBAR */}
                        <aside className="news-sidebar article-sidebar">
                            <div className="sidebar-widget anim">
                                <div className="author-card">
                                    <div className="author-card-avatar"><i className="fa-solid fa-microchip"></i></div>
                                    <h4 className="author-card-name">AccelviaTeams AI Research</h4>
                                    <p className="author-card-role">Technology Insights</p>
                                    <p className="author-card-bio">Exploring the frontier of AI integration in modern software development pipelines.</p>
                                    <div className="footer-socials" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                                        <a href="#" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#" className="social-btn"><i className="fa-brands fa-x-twitter"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget sidebar-toc anim" id="sidebarToc">
                                <h3 className="sidebar-title"><span className="label-line"></span>In This Article</h3>
                                <ol className="toc-list">
                                    <li><a href="#section-intro" className="toc-link">The Shift from Copilots to Agents</a></li>
                                    <li><a href="#section-models" className="toc-link">Comparing Top AI Models</a></li>
                                    <li><a href="#section-agentic" className="toc-link">How Agentic Coding Thrives</a></li>
                                    <li><a href="#section-future" className="toc-link">Meaning for Developers</a></li>
                                </ol>
                            </div>

                            <div className="sidebar-widget anim">
                                <h3 className="sidebar-title"><span className="label-line"></span>Recent News</h3>
                                <ul className="recent-news-list">
                                    {recentPosts.map((post) => (
                                        <li key={`recent-${post.id}`} className="recent-news-item">
                                            <Link href={post.link} className="recent-news-link">
                                                <div className="recent-news-dot"></div>
                                                <div className="recent-news-info">
                                                    <span className="recent-news-cat">{post.category}</span>
                                                    <span className="recent-news-headline">{post.title}</span>
                                                    <span className="recent-news-date">{post.date}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-widget sidebar-newsletter anim">
                                <div className="newsletter-icon"><i className="fa-solid fa-robot"></i></div>
                                <h3 className="newsletter-title">Integrate AI</h3>
                                <p className="newsletter-body">Want to leverage agentic workflows in your own projects? Let's discuss.</p>
                                <Link href="/contact" className="btn btn-primary newsletter-btn">Get in Touch <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container">
                    <div className="cta-inner anim">
                        <div className="section-label" style={{ justifyContent: 'center' }}><span className="label-line"></span><span>Future-Proof Your Tech</span><span className="label-line"></span></div>
                        <h2 className="cta-title">Ready to embrace Agentic Coding?</h2>
                        <p className="cta-sub">Let our experts help you build intelligent systems that accelerate your growth.</p>
                        <div className="cta-actions">
                            <Link href="/contact" className="btn btn-primary btn-lg">Start a Conversation <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
