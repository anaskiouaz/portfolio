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
        this.animateStats();
        this.animateSkillBars();
        this.animateLanguageBars();
    }

    setupScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
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
        }, { threshold: 0.2 });

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
        }, { threshold: 0.4 });

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
        }, { threshold: 0.3 });

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
        }, { threshold: 0.4 });

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
            this.updateProjectCardTitles();
        });
    }

    toggleLanguage() {
        const current = i18n.getCurrentLanguage();
        const newLang = current === 'fr' ? 'en' : 'fr';
        i18n.setLanguage(newLang);
    }

    updateToggleText() {
        const toggle = document.getElementById('langToggle');
        const current = i18n.getCurrentLanguage();
        toggle.querySelector('.lang-text').textContent = current === 'fr' ? 'EN' : 'FR';
    }

    updateProjectCardTitles() {
        const lang = i18n.getCurrentLanguage();
        document.querySelectorAll('.project-card').forEach(card => {
            const projectId = card.dataset.projectId;
            const projectsSystem = window.projectsSystem;
            if (!projectsSystem) return;
            
            const project = projectsSystem.projectData[projectId];
            
            if (project) {
                const titleEl = card.querySelector('.project-title');
                const categoryEl = card.querySelector('.project-category');
                const descEl = card.querySelector('.project-description');
                
                if (titleEl && project.title) {
                    titleEl.textContent = typeof project.title === 'object' ? project.title[lang] : project.title;
                }
                if (categoryEl && project.category) {
                    categoryEl.textContent = typeof project.category === 'object' ? project.category[lang] : project.category;
                }
                if (descEl && project.description) {
                    descEl.textContent = typeof project.description === 'object' ? project.description[lang] : project.description;
                }
            }
        });
    }
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioUI();
    new LanguageSwitcher();
});

