// ============================================
// VISUAL EFFECTS — Futuristic UI
// ============================================

class ParticleField {
    constructor(canvas) {
        if (!canvas) return;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.raf = null;
        this.init();
    }

    init() {
        this.resize();
        this.loop();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        const parent = this.canvas.parentElement;
        this.canvas.width = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
        this.particles = [];
        const count = Math.min(Math.floor(this.canvas.width * this.canvas.height / 7000), 110);
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                r: Math.random() * 1.3 + 0.25,
                vx: (Math.random() - 0.5) * 0.22,
                vy: (Math.random() - 0.5) * 0.22,
                alpha: Math.random() * 0.5 + 0.12,
                color: Math.random() > 0.55 ? '0,255,136' : Math.random() > 0.4 ? '255,0,128' : Math.random() > 0.5 ? '0,229,255' : '226,232,240'
            });
        }
    }

    loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
            this.ctx.fill();
        }
        this.raf = requestAnimationFrame(() => this.loop());
    }

    destroy() {
        if (this.raf) cancelAnimationFrame(this.raf);
    }
}

class CardTilt3D {
    constructor(elements) {
        if (window.matchMedia('(hover: none)').matches) return;
        for (const el of elements) {
            const shine = document.createElement('div');
            shine.className = 'card-shine';
            el.appendChild(shine);
            this.bind(el);
        }
    }

    bind(el) {
        el.addEventListener('mouseenter', () => {
            el.style.willChange = 'transform';
        });

        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotX = (-y / rect.height) * 9;
            const rotY = (x / rect.width) * 9;
            el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
            el.style.transition = 'none';
            const px = ((e.clientX - rect.left) / rect.width) * 100;
            const py = ((e.clientY - rect.top) / rect.height) * 100;
            const shine = el.querySelector('.card-shine');
            if (shine) {
                shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.07) 0%, transparent 55%)`;
                shine.style.opacity = '1';
            }
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
            el.style.transition = 'transform 0.55s cubic-bezier(0.2,0,0,1)';
            el.style.willChange = '';
            const shine = el.querySelector('.card-shine');
            if (shine) shine.style.opacity = '0';
        });
    }
}

class TypeWriter {
    constructor(el, texts, opts) {
        if (!el) return;
        this.el = el;
        this.texts = texts;
        this.speed = (opts && opts.speed) || 78;
        this.pause = (opts && opts.pause) || 2600;
        this.current = 0;
        this.idx = 0;
        this.deleting = false;
        this.run();
    }

    run() {
        const text = this.texts[this.current];
        const shown = this.deleting
            ? text.substring(0, this.idx - 1)
            : text.substring(0, this.idx + 1);
        this.el.textContent = shown;
        this.idx = this.deleting ? this.idx - 1 : this.idx + 1;

        let delay = this.deleting ? this.speed * 0.55 : this.speed;
        if (!this.deleting && this.idx > text.length) {
            delay = this.pause;
            this.deleting = true;
        } else if (this.deleting && this.idx < 0) {
            this.deleting = false;
            this.idx = 0;
            this.current = (this.current + 1) % this.texts.length;
            delay = 420;
        }
        setTimeout(() => this.run(), delay);
    }
}

class MagneticButton {
    constructor(els) {
        if (window.matchMedia('(hover: none)').matches) return;
        for (const el of els) this.bind(el);
    }

    bind(el) {
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'transform 0.12s ease';
        });
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0,0)';
            el.style.transition = 'transform 0.5s cubic-bezier(0.2,0,0,1)';
        });
    }
}

class SpotlightSection {
    constructor(container) {
        if (!container || window.matchMedia('(hover: none)').matches) return;
        const el = document.createElement('div');
        el.className = 'section-spotlight';
        container.appendChild(el);
        container.addEventListener('mousemove', e => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(34,211,238,0.055) 0%, transparent 70%)`;
        });
        container.addEventListener('mouseleave', () => {
            el.style.background = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
        const canvas = document.getElementById('heroCanvas');
        if (canvas) new ParticleField(canvas);
    }

    const cards = document.querySelectorAll('.project-card');
    if (cards.length) new CardTilt3D(cards);

    const twEl = document.getElementById('typewriterRole');
    if (twEl && !prefersReduced) {
        const textsFr = ['Backend, Data & IA', 'Développeur Python', 'Architecte backend', 'Ingénieur IA'];
        const textsEn = ['Backend, Data & AI', 'Python Developer', 'Backend Architect', 'AI Engineer'];
        const currentLang = () => (typeof i18n !== 'undefined' ? i18n.getCurrentLanguage() : 'fr');

        window.__tw = new TypeWriter(twEl, currentLang() === 'fr' ? textsFr : textsEn);
        window.addEventListener('languageChanged', () => {
            if (window.__tw) {
                window.__tw.texts = currentLang() === 'fr' ? textsFr : textsEn;
                window.__tw.idx = 0;
                window.__tw.deleting = false;
            }
        });
    }

    const magEls = document.querySelectorAll('.btn-magnetic');
    if (magEls.length) new MagneticButton(magEls);

    const projectsSection = document.getElementById('projects');
    if (projectsSection) new SpotlightSection(projectsSection);
});
