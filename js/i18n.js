// ============================================
// INTERNATIONALIZATION (i18n) SYSTEM
// ============================================

class I18n {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.translations = {
            fr: {
                // Navigation
                'nav.home': 'Accueil',
                'nav.about': 'Parcours',
                'nav.projects': 'Projets',
                'nav.skills': 'Expertise',
                'nav.contact': 'Contact',
                'nav.cv': 'Télécharger mon CV',
                'nav.language': 'Langue',

                // Hero Section
                'hero.status': 'Disponible pour alternance Septembre 2026',
                'hero.role': 'Développeur logiciel — Backend, Data & IA',
                'hero.location': 'Python · Java · Symfony · Docker — Étudiant BUT Informatique à Grenoble',
                'hero.description': 'Étudiant en 2ᵉ année de BUT Informatique à l\'IUT2 de Grenoble. Je conçois des applications backend, des outils data et des automatisations IA, du modèle relationnel à la mise en production conteneurisée. Je cherche une alternance à partir de Septembre 2026, rythme 3 semaines entreprise / 1 semaine école.',
                'hero.btn-projects': 'Découvrir mes projets',
                'hero.btn-cv': 'Télécharger CV',
                'hero.btn-contact': 'Entrer en contact',
                'hero.stat-projects': 'Projets Réalisés',
                'hero.stat-diploma': 'Diplôme BUT',
                'hero.stat-age': 'Ans',
                'hero.schedule': 'Contactez-moi',
                'hero.scroll': 'Défiler',

                // Profile Card
                'profile.specialty': 'Spécialité',
                'profile.specialty-value': 'Backend · Data · IA',
                'profile.location-label': 'Localisation',
                'profile.location-value': 'Grenoble, France',
                'profile.availability': 'Disponibilité',
                'profile.availability-value': 'Alternance Sept 2026',

                // About Section
                'about.title': 'Mon Parcours',
                'about.section-number': '01',
                'about.student': 'Développeur en Formation',
                'about.bio1': 'Étudiant en 2ᵉ année de BUT Informatique à l\'IUT2 de Grenoble, j\'ai été chef de projet sur une refonte logicielle complète impliquant 6 développeurs (Symfony + Android + Docker + PostgreSQL). J\'ai également contribué à WEAVE, projet d\'équipe élu meilleur de la promotion.',
                'about.bio2': 'Côté technique, je travaille au quotidien en Python (IA, automation, data), Java (POO, JavaFX) et autour de l\'écosystème Symfony / PostgreSQL / Docker. Je m\'intéresse à l\'industrialisation logicielle : tests automatisés, conteneurisation, schémas relationnels propres.',
                'about.bio3': 'Ce que je cherche en alternance : intégrer une équipe technique sur des projets backend, data ou IA appliquée. Concrètement, être autonome rapidement sur un script Python ou un service Symfony, documenter ce que je livre, et apprendre des seniors sur les pratiques de production (CI/CD, observabilité, code review).',
                'about.age': 'Âge',
                'about.age-value': '19 ans',
                'about.location': 'Localisation',
                'about.location-value': 'Saint-Martin-d\'Hères, FR',
                'about.education': 'Formation',
                'about.education-value': 'BUT Informatique (IUT2)',
                'about.availability-label': 'Disponibilité',
                'about.availability-value': 'Alternance Septembre 2026',

                // Projects Section
                'projects.title': 'Projets Sélectionnés',
                'projects.section-number': '02',
                'projects.view': 'Voir le projet',
                'projects.context': 'Contexte',
                'projects.role': 'Mon Rôle',
                'projects.github': 'Voir sur GitHub',

                // Skills Section
                'skills.title': 'Expertise Technique',
                'skills.section-number': '03',
                'skills.subtitle': 'IA, data et développement d\'applications',
                'skills.languages': 'Langues',

                // Languages
                'lang.french': 'Français',
                'lang.native': 'Natif',
                'lang.english': 'Anglais',
                'lang.arabic': 'Arabe',
                'lang.italian': 'Italien',
                'lang.italian-skills': 'Notions',

                // Interests
                'interests.title': 'Centres d\'Intérêt',
                'interests.intro': 'Au-delà du code, ce qui me passionne',
                'interest.boxing': 'Boxe Compétition',
                'interest.boxing-desc': 'Discipline, stratégie et dépassement de soi',
                'interest.swimming': 'Natation',
                'interest.swimming-desc': 'Endurance et clarté mentale',
                'interest.chess': 'Échecs',
                'interest.chess-desc': 'Tactique et anticipation',
                'interest.calisthenics': 'Callisthénie',
                'interest.calisthenics-desc': 'Force et contrôle du corps',
                'interest.ultimate': 'Ultimate Frisbee',
                'interest.ultimate-desc': 'Esprit d\'équipe et fair-play',

                // Footer
                'footer.title': 'Me',
                'footer.title-accent': 'Contacter',
                'footer.description': 'Je suis à la recherche d\'une alternance à partir de Septembre 2026 (rythme 3 semaines entreprise / 1 semaine école) sur des postes de développeur backend, data ou IA. Si mon profil vous intéresse, écrivez-moi — je réponds sous 24h.',
                'footer.copyright': '© 2026 Anas KIOUAZ. Tous droits réservés.',
                'footer.location': 'Grenoble, France',
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'Journey',
                'nav.projects': 'Projects',
                'nav.skills': 'Expertise',
                'nav.contact': 'Contact',
                'nav.cv': 'Download CV',
                'nav.language': 'Language',

                // Hero Section
                'hero.status': 'Available for apprenticeship September 2026',
                'hero.role': 'Software Developer — Backend, Data & AI',
                'hero.location': 'Python · Java · Symfony · Docker — BUT Computer Science student in Grenoble',
                'hero.description': '2nd-year BUT Computer Science student at IUT2 Grenoble. I build backend applications, data tools and AI automations, from relational modeling to containerized production. Looking for an apprenticeship from September 2026, rhythm 3 weeks company / 1 week school.',
                'hero.btn-projects': 'Discover my projects',
                'hero.btn-cv': 'Download CV',
                'hero.btn-contact': 'Get in touch',
                'hero.stat-projects': 'Projects Completed',
                'hero.stat-diploma': 'BUT Diploma',
                'hero.stat-age': 'Years',
                'hero.schedule': 'Contact me',
                'hero.scroll': 'Scroll',

                // Profile Card
                'profile.specialty': 'Specialty',
                'profile.specialty-value': 'Backend · Data · AI',
                'profile.location-label': 'Location',
                'profile.location-value': 'Grenoble, France',
                'profile.availability': 'Availability',
                'profile.availability-value': 'Apprenticeship Sept 2026',

                // About Section
                'about.title': 'My Journey',
                'about.section-number': '01',
                'about.student': 'Developer in Training',
                'about.bio1': '2nd-year BUT Computer Science student at IUT2 Grenoble. I led a full software refactor involving 6 developers (Symfony + Android + Docker + PostgreSQL). I also contributed to WEAVE, a team project elected best of the cohort.',
                'about.bio2': 'On the technical side, I work daily in Python (AI, automation, data), Java (OOP, JavaFX) and around the Symfony / PostgreSQL / Docker ecosystem. I care about software industrialization: automated tests, containerization, clean relational schemas.',
                'about.bio3': 'What I\'m looking for in an apprenticeship: join a technical team on backend, data or applied AI projects. Concretely, become autonomous quickly on a Python script or a Symfony service, document what I deliver, and learn from seniors about production practices (CI/CD, observability, code review).',
                'about.age': 'Age',
                'about.age-value': '19 years old',
                'about.location': 'Location',
                'about.location-value': 'Saint-Martin-d\'Hères, FR',
                'about.education': 'Education',
                'about.education-value': 'BUT Computer Science (IUT2)',
                'about.availability-label': 'Availability',
                'about.availability-value': 'Apprenticeship September 2026',

                // Projects Section
                'projects.title': 'Selected Projects',
                'projects.section-number': '02',
                'projects.view': 'View project',
                'projects.context': 'Context',
                'projects.role': 'My Role',
                'projects.github': 'View on GitHub',

                // Skills Section
                'skills.title': 'Technical Expertise',
                'skills.section-number': '03',
                'skills.subtitle': 'AI, data and application development',
                'skills.languages': 'Languages',

                // Languages
                'lang.french': 'French',
                'lang.native': 'Native',
                'lang.english': 'English',
                'lang.arabic': 'Arabic',
                'lang.italian': 'Italian',
                'lang.italian-skills': 'Beginner',

                // Interests
                'interests.title': 'Interests',
                'interests.intro': 'Beyond code, what drives me',
                'interest.boxing': 'Competitive Boxing',
                'interest.boxing-desc': 'Discipline, strategy and self-improvement',
                'interest.swimming': 'Swimming',
                'interest.swimming-desc': 'Endurance and mental clarity',
                'interest.chess': 'Chess',
                'interest.chess-desc': 'Tactics and anticipation',
                'interest.calisthenics': 'Calisthenics',
                'interest.calisthenics-desc': 'Strength and body control',
                'interest.ultimate': 'Ultimate Frisbee',
                'interest.ultimate-desc': 'Team spirit and fair play',

                // Footer
                'footer.title': 'Contact',
                'footer.title-accent': 'Me',
                'footer.description': 'I\'m looking for an apprenticeship from September 2026 (rhythm 3 weeks company / 1 week school) on backend, data or AI developer roles. If my profile interests you, write to me — I respond within 24h.',
                'footer.copyright': '© 2026 Anas KIOUAZ. All rights reserved.',
                'footer.location': 'Grenoble, France',
            }
        };
        this.init();
    }

    detectLanguage() {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && (saved === 'fr' || saved === 'en')) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('fr')) {
            return 'fr';
        }

        return 'en';
    }

    setLanguage(lang) {
        if (lang !== 'fr' && lang !== 'en') return;

        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;

        this.updatePageTranslations();

        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    t(key) {
        const translations = this.translations[this.currentLanguage];
        return translations[key] || key;
    }

    updatePageTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translated = this.t(key);

            if (element.tagName === 'INPUT') {
                element.placeholder = translated;
            } else if (element.tagName === 'IMG') {
                element.alt = translated;
            } else {
                element.textContent = translated;
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrs = JSON.parse(element.getAttribute('data-i18n-attr'));
            Object.entries(attrs).forEach(([attrName, key]) => {
                element.setAttribute(attrName, this.t(key));
            });
        });
    }

    init() {
        document.documentElement.lang = this.currentLanguage;
        this.updatePageTranslations();
    }
}

// Initialize i18n globally
const i18n = new I18n();
