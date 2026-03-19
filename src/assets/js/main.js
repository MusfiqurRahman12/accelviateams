/**
 * AccelviaTeams — Main JS
 * Scroll progress, nav, mobile menu, GSAP animations
 */
document.addEventListener('DOMContentLoaded', () => {

    // ---- Theme Toggle ----
    const themeToggleBtn = document.getElementById('themeToggle');
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };
    // Initial state: already set by the no-flash inline script; just make sure button icon is correct
    // (no-op if already set; safe to call again)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // ---- Video Modal ----
    const playVideoBtn = document.getElementById('playVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const videoCloseBtn = document.getElementById('videoCloseBtn');
    const videoModalOverlay = document.getElementById('videoModalOverlay');
    const heroVideoIframe = document.getElementById('heroVideoIframe');

    // Use a high-quality placeholder tech video (can be replaced by client later)
    // We append ?enablejsapi=1 so we could potentially control it, but the simplest 
    // way to stop a youtube iframe is just reloading its src
    const placeholderVideoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1";

    function openVideoModal() {
        if (!videoModal) return;
        // Set the src only when opening so it doesn't load/play in background on page load
        if (heroVideoIframe && !heroVideoIframe.src) {
            // Using a generic placeholder tech/office video from youtube
            heroVideoIframe.src = "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1";
        }
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    }

    function closeVideoModal() {
        if (!videoModal) return;
        videoModal.classList.remove('active');
        document.body.style.overflow = '';

        // Stop video playback by clearing the src
        if (heroVideoIframe) {
            const currentSrc = heroVideoIframe.src;
            heroVideoIframe.src = '';
            // Restore src without autoplay so it's ready for next time
            setTimeout(() => { heroVideoIframe.src = currentSrc.replace('autoplay=1', 'autoplay=0'); }, 300);
        }
    }

    if (playVideoBtn) playVideoBtn.addEventListener('click', openVideoModal);
    if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
    if (videoModalOverlay) videoModalOverlay.addEventListener('click', closeVideoModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // ---- Scroll Progress ----
    const bar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        if (bar) {
            const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
            bar.style.width = pct + '%';
        }
    }, { passive: true });

    // ---- Sticky Header ----
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        header?.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ---- Mobile Menu ----
    const toggle = document.getElementById('menuToggle');
    const close = document.getElementById('menuClose');
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    const open = () => { nav?.classList.add('open'); overlay?.classList.add('active'); document.body.style.overflow = 'hidden'; };
    const shut = () => { nav?.classList.remove('open'); overlay?.classList.remove('active'); document.body.style.overflow = ''; };
    toggle?.addEventListener('click', open);
    close?.addEventListener('click', shut);
    overlay?.addEventListener('click', shut);
    document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', shut));

    // ---- GSAP Animations ----
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // ---- HORIZONTAL SCROLL PIN ----
        const track = document.getElementById('hscrollTrack');
        const wrap = document.getElementById('hscrollWrap');
        const section = document.getElementById('hscrollSection');

        if (track && wrap && section && window.innerWidth > 768) {
            const getScrollAmount = () => -(track.scrollWidth - wrap.offsetWidth);

            const hTween = gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${Math.abs(getScrollAmount())}`,
                    pin: true,
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });

            // Recalc on resize
            window.addEventListener('resize', () => ScrollTrigger.refresh());
        }

        // Animate all .anim elements
        gsap.utils.toArray('.anim').forEach((el, i) => {
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
        if (visual) tl.fromTo(visual, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8');

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
            // Remove anim class from service cards so they don't double-animate
            cards.forEach(c => c.classList.remove('anim'));
        }

        // Counter animation
        document.querySelectorAll('.stat-num, .stats-bar-num').forEach(el => {
            const raw = el.textContent;
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
    } else {
        // Fallback: just show everything without animation
        document.querySelectorAll('.anim').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // ---- Mobile Auto-Scroll Carousel (Selected Projects) ----
    // Only runs on mobile — GSAP pin is desktop-only (see above)
    if (window.innerWidth <= 768) {
        const mobileTrack = document.getElementById('hscrollTrack');
        const hscrollSection = document.getElementById('hscrollSection');

        if (mobileTrack && hscrollSection) {

            let autoTimer = null;
            let resumeTimer = null;
            let isPaused = false;
            let isInView = false;
            const INTERVAL = 4000;   // advance every 4 s
            const RESUME_DELAY = 2000; // resume 2 s after touch release

            // --- Dot indicators ---
            const cards = mobileTrack.querySelectorAll('.hcard');
            const dotsWrap = document.createElement('div');
            dotsWrap.className = 'carousel-dots';
            cards.forEach((_, i) => {
                const d = document.createElement('button');
                d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
                d.addEventListener('click', () => {
                    const cardW = cards[i].offsetWidth + 16; // gap ≈ 16px
                    mobileTrack.scrollTo({ left: i * cardW, behavior: 'smooth' });
                });
                dotsWrap.appendChild(d);
            });
            hscrollSection.appendChild(dotsWrap);

            const updateDots = () => {
                const dots = dotsWrap.querySelectorAll('.carousel-dot');
                const cardW = mobileTrack.querySelector('.hcard')?.offsetWidth || mobileTrack.offsetWidth;
                const idx = Math.round(mobileTrack.scrollLeft / (cardW + 16));
                dots.forEach((d, i) => d.classList.toggle('active', i === idx));
            };
            mobileTrack.addEventListener('scroll', updateDots, { passive: true });

            // --- Scroll advance ---
            const getCardW = () => {
                const card = mobileTrack.querySelector('.hcard');
                if (!card) return mobileTrack.offsetWidth;
                const gap = parseFloat(getComputedStyle(mobileTrack).gap || '16');
                return card.offsetWidth + gap;
            };

            const scrollNext = () => {
                if (isPaused || !isInView) return;
                const cardW = getCardW();
                const maxScroll = mobileTrack.scrollWidth - mobileTrack.offsetWidth;
                const next = mobileTrack.scrollLeft + cardW;
                mobileTrack.scrollTo({ left: next >= maxScroll - 4 ? 0 : next, behavior: 'smooth' });
            };

            const startAuto = () => { clearInterval(autoTimer); autoTimer = setInterval(scrollNext, INTERVAL); };
            const stopAuto = () => { clearInterval(autoTimer); autoTimer = null; };
            const pauseAuto = () => { isPaused = true; stopAuto(); clearTimeout(resumeTimer); };
            const scheduleResume = () => {
                clearTimeout(resumeTimer);
                resumeTimer = setTimeout(() => { isPaused = false; if (isInView) startAuto(); }, RESUME_DELAY);
            };

            // --- Touch / mouse events ---
            mobileTrack.addEventListener('touchstart', pauseAuto, { passive: true });
            mobileTrack.addEventListener('touchend', scheduleResume, { passive: true });
            mobileTrack.addEventListener('touchcancel', scheduleResume, { passive: true });
            mobileTrack.addEventListener('mousedown', pauseAuto);
            mobileTrack.addEventListener('mouseup', scheduleResume);

            // --- Start only when section is visible (saves battery) ---
            const observer = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    isInView = e.isIntersecting;
                    if (isInView && !isPaused) startAuto();
                    else stopAuto();
                });
            }, { threshold: 0.3 });
            observer.observe(hscrollSection);
        }
    }


    // ---- Portfolio Filter (work.html) ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('[data-cat]');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const f = this.dataset.filter;
            projectCards.forEach(card => {
                const match = f === 'all' || card.dataset.cat === f;
                card.style.transition = 'opacity 0.3s, transform 0.3s';
                card.style.opacity = match ? '1' : '0.2';
                card.style.transform = match ? 'scale(1)' : 'scale(0.97)';
                card.style.pointerEvents = match ? '' : 'none';
            });
        });
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-a');
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // Close all other open items
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== item) {
                    other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
                    other.querySelector('.faq-a').classList.remove('open');
                }
            });

            // Toggle current item
            btn.setAttribute('aria-expanded', String(!isOpen));
            answer.classList.toggle('open', !isOpen);
        });
    });

    // ---- Contact Form → mail.php ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('[type=submit]');
            const msg = document.getElementById('formMsg');

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            msg.style.display = 'none';

            try {
                const res = await fetch('mail.php', { method: 'POST', body: new FormData(form) });
                const data = await res.json();

                msg.style.display = 'block';
                if (data.success) {
                    msg.style.cssText = 'display:block;background:rgba(45,189,90,0.1);border:1px solid rgba(45,189,90,0.3);color:#2DBD5A;padding:1rem 1.5rem;border-radius:12px;margin-bottom:1rem;font-weight:500;';
                    msg.textContent = '✓ ' + data.message;
                    form.reset();
                } else {
                    msg.style.cssText = 'display:block;background:rgba(220,50,50,0.1);border:1px solid rgba(220,50,50,0.3);color:#e05252;padding:1rem 1.5rem;border-radius:12px;margin-bottom:1rem;font-weight:500;';
                    msg.textContent = '✗ ' + data.message;
                }
            } catch (err) {
                msg.style.display = 'block';
                msg.style.cssText = 'display:block;background:rgba(220,50,50,0.1);border:1px solid rgba(220,50,50,0.3);color:#e05252;padding:1rem 1.5rem;border-radius:12px;margin-bottom:1rem;font-weight:500;';
                msg.textContent = '✗ Network error. Please email us directly at hello@accelviateams.com';
            } finally {
                btn.disabled = false;
                btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
            }
        });
    }

});

