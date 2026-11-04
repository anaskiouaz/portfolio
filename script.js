// ============================================
// PROFESSIONAL PORTFOLIO INTERACTIONS
// ============================================

class PortfolioUI {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollProgress();
        this.setupScrollReveal();
        this.setupSmoothScroll();
        this.setupNavigation();
        this.setupSpotlights();
        this.setupPcbTrace();
        this.setupEmailCopy();
        this.setupHeroWords();
        this.animateStats();
        this.animateSkillBars();
        this.animateLanguageBars();
    }

    setupScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (windowHeight > 0) ? (window.pageYOffset / windowHeight) * 100 : 0;
            progressBar.style.width = `${scrolled}%`;
        });
    }

    setupScrollReveal() {
        const revealElements = document.querySelectorAll('[data-scroll-reveal]');
        if (!revealElements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;
                const target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }

    setupNavigation() {
        const nav = document.getElementById('mainNav');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            if (nav) {
                nav.classList.toggle('scrolled', window.scrollY > 50);
            }

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
            });
        });
    }

    setupSpotlights() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        document.querySelectorAll('.project-card, .profile-card, .but-competence-card, .interest-card-new, .language-card-new')
            .forEach(card => {
                card.addEventListener('pointermove', (event) => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
                    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
                });
            });
    }

    setupPcbTrace() {
        const trace = document.querySelector('.pcb-trace');
        if (!trace) return;

        const path = trace.querySelector('path');
        const nodes = [...trace.querySelectorAll('circle')];
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const updateTrace = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
            trace.style.setProperty('--trace-progress', reducedMotion ? 1 : progress);
            nodes.forEach((node, index) => {
                const threshold = (index + 1) / (nodes.length + 1);
                node.style.setProperty('--node-opacity', progress >= threshold ? 1 : .35);
            });
        };

        if (path && !reducedMotion) path.style.strokeDasharray = '1';
        updateTrace();
        window.addEventListener('scroll', updateTrace, { passive: true });
        window.addEventListener('resize', updateTrace);
    }

    setupEmailCopy() {
        const copyButton = document.querySelector('.copy-email');
        if (!copyButton) return;

        copyButton.addEventListener('click', async () => {
            const email = copyButton.dataset.email;
            try {
                await navigator.clipboard.writeText(email);
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copié';
                copyButton.classList.add('copied');
                window.setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.classList.remove('copied');
                }, 1800);
            } catch (error) {
                copyButton.textContent = 'Sélectionnez l’email';
            }
        });
    }

    setupHeroWords() {
        const title = document.querySelector('.hero-title');
        if (!title || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        title.querySelectorAll('.title-line').forEach(line => {
            const words = line.textContent.trim().split(/\s+/);
            line.textContent = '';
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.className = 'hero-word';
                span.textContent = word;
                span.style.setProperty('--word-delay', `${index * 60}ms`);
                line.append(span, ' ');
            });
        });
        title.classList.add('hero-words-ready');
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        if (!statNumbers.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const element = entry.target;
                const originalText = element.textContent;
                const hasPlus = originalText.includes('+');
                const rawValue = originalText.replace('+', '').trim();
                const target = Number(rawValue);

                if (Number.isNaN(target)) {
                    observer.unobserve(element);
                    return;
                }

                const duration = 1200;
                const steps = 60;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target + (hasPlus ? '+' : '');
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                    }
                }, duration / steps);

                observer.unobserve(element);
            });
        }, { threshold: 0.3 });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    animateSkillBars() {
        const skillCards = document.querySelectorAll('.skill-card');
        if (!skillCards.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const bar = entry.target.querySelector('.skill-bar');
                if (bar) {
                    const level = bar.getAttribute('data-level');
                    bar.style.width = `${level}%`;
                }
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.2 });

        skillCards.forEach(card => observer.observe(card));
    }

    animateLanguageBars() {
        const languageCards = document.querySelectorAll('.language-card-new');
        if (!languageCards.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const fill = entry.target.querySelector('.lang-level-fill');
                if (fill) {
                    const level = fill.getAttribute('data-level');
                    fill.style.width = `${level}%`;
                }
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.3 });

        languageCards.forEach(card => observer.observe(card));
    }
}

// ============================================
// LANGUAGE SWITCHER FUNCTIONALITY
// ============================================

class LanguageSwitcher {
    constructor() {
        this.init();
    }

    init() {
        const langToggle = document.getElementById('langToggle');
        if (!langToggle) return;

        // Set initial text
        this.updateToggleText();

        // Add click listener
        langToggle.addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Listen for language changes from i18n
        window.addEventListener('languageChanged', () => {
            this.updateToggleText();
        });
    }

    toggleLanguage() {
        const current = i18n.getCurrentLanguage();
        const newLang = current === 'fr' ? 'en' : 'fr';
        i18n.setLanguage(newLang);
    }

    updateToggleText() {
        const toggle = document.getElementById('langToggle');
        if (!toggle) return;
        
        const langText = toggle.querySelector('.lang-text');
        if (!langText) return;
        
        const current = i18n.getCurrentLanguage();
        langText.textContent = current === 'fr' ? 'EN' : 'FR';
    }
}

// ============================================
// CONTACT FORM SUBMISSION (Web3Forms AJAX)
// ============================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.status = document.getElementById('formStatus');
        this.currentStatusType = null;
        this.currentStatusCategory = null;
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        window.addEventListener('languageChanged', () => {
            if (this.currentStatusType) {
                this.updateStatusText();
            }
        });
    }

    async handleSubmit() {
        // Basic validation check
        if (!this.form.checkValidity()) {
            this.showStatus('validation', 'error');
            return;
        }

        const formData = new FormData(this.form);
        
        // Spam honeypot validation
        if (formData.get('botcheck')) {
            return;
        }

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        this.setLoading(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (response.status === 200 && result.success) {
                this.showStatus('success', 'success');
                this.form.reset();
            } else {
                this.showStatus('error', 'error');
            }
        } catch (error) {
            this.showStatus('network', 'error');
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(isLoading) {
        const submitBtn = this.form.querySelector('.form-submit');
        if (!submitBtn) return;

        if (isLoading) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }

    showStatus(type, category) {
        this.currentStatusType = type;
        this.currentStatusCategory = category;
        this.updateStatusText();
    }

    updateStatusText() {
        if (!this.status || !this.currentStatusType) return;

        let messageKey = '';
        if (this.currentStatusType === 'success') messageKey = 'form.success';
        else if (this.currentStatusType === 'error') messageKey = 'form.error';
        else if (this.currentStatusType === 'network') messageKey = 'form.error-network';
        else if (this.currentStatusType === 'validation') messageKey = 'form.error-validation';

        const translation = i18n.t(messageKey);

        this.status.textContent = translation;
        this.status.className = `form-status visible ${this.currentStatusCategory}`;

        // Automatically hide error/validation status updates after 6 seconds
        if (this.currentStatusCategory === 'error') {
            setTimeout(() => {
                if (this.currentStatusType === messageKey.split('.')[1]) {
                    this.status.classList.remove('visible');
                    this.currentStatusType = null;
                    this.currentStatusCategory = null;
                }
            }, 6000);
        }
    }
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioUI();
    new LanguageSwitcher();
    new ContactForm();
});
