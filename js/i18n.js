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
                'nav.cv': 'Voir mon CV',
                'nav.language': 'Langue',

                // Hero Section
                'hero.status': 'Disponible pour alternance septembre 2026',
                'hero.rhythm': 'Rythme d\'alternance :',
                'hero.rhythm-calendar': 'Voir le calendrier officiel BUT3',
                'hero.role': 'Développeur logiciel — Backend, Data & IA',
                'hero.location': 'Python · Java · Symfony · Docker — Étudiant BUT Informatique à Grenoble',
                'hero.description': 'Étudiant en 2ᵉ année de BUT Informatique à l\'IUT2 de Grenoble. Je conçois des applications backend, des outils data et des automatisations IA, du modèle relationnel à la mise en production conteneurisée. Je cherche une alternance à partir de septembre 2026, rythme 3 semaines entreprise / 1 semaine école.',
                'hero.btn-projects': 'Découvrir mes projets',
                'hero.btn-cv': 'Voir mon CV',
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
                'about.availability-value': 'Alternance septembre 2026',
                'about.license': 'Permis',
                'about.license-value': 'Permis B ',

                // Projects Section
                'projects.title': 'Projets Sélectionnés',
                'projects.section-number': '02',
                'projects.view': 'Voir le projet',
                'projects.context': 'Contexte',
                'projects.role': 'Mon Rôle',
                'projects.github': 'Voir sur GitHub',
                'projects.report': 'Lire le mémoire',

                // Skills Section
                'skills.title': 'Compétences BUT Informatique',
                'skills.section-number': '03',
                'skills.subtitle': 'Parcours Développement d\'Application — 6 compétences du référentiel national',
                'skills.languages': 'Langues',
                'skills.knowledge': 'Langages & Outils',
                'skills.competence': 'Compétences',
                'skills.legend-knowledge': 'Langages & Outils utilisés dans mes projets',
                'skills.legend-skill': 'Compétences — savoir-faire pratiques démontrés',

                // Compétence 1 — Réaliser un développement d'application
                'comp1.title': 'Réaliser un développement d\'application',
                'comp1.badge': 'Cœur de métier',
                'comp1.k1': 'Algorithmique et structures de données',
                'comp1.k2': 'Paradigmes de programmation (POO, fonctionnel)',
                'comp1.k3': 'Patrons de conception (MVC, Repository…)',
                'comp1.k4': 'Qualité logicielle & tests (unitaires, E2E)',
                'comp1.s1': 'Développer en Java (JavaFX, JDBC) et Python',
                'comp1.s2': 'Concevoir et implémenter des API REST (Symfony)',
                'comp1.s3': 'Rédiger des tests automatisés (Cypress, Espresso)',
                'comp1.s4': 'Appliquer des patrons MVC sur projets réels',

                // Compétence 2 — Optimiser des applications
                'comp2.title': 'Optimiser des applications informatiques',
                'comp2.badge': 'Performance',
                'comp2.k1': 'Complexité algorithmique (O-notation)',
                'comp2.k2': 'Optimisation de requêtes SQL (index, plans)',
                'comp2.k3': 'Algorithmes d\'apprentissage machine (KNN, K-Means)',
                'comp2.k4': 'Réseaux de neurones convolutifs (CNN)',
                'comp2.s1': 'Classifier des données avec KNN et TF-IDF',
                'comp2.s2': 'Entraîner un CNN (TensorFlow/Keras)',
                'comp2.s3': 'Normaliser un schéma relationnel en 3FN',
                'comp2.s4': 'Profiler et réduire les goulets d\'étranglement',

                // Compétence 3 — Administrer des systèmes
                'comp3.title': 'Administrer des systèmes informatiques communicants',
                'comp3.badge': 'Infrastructure',
                'comp3.k1': 'Protocoles réseau (HTTP/S, TCP/IP, DNS)',
                'comp3.k2': 'Systèmes Linux (shell, droits, services)',
                'comp3.k3': 'Conteneurisation & orchestration (Docker)',
                'comp3.k4': 'Architecture client-serveur et API REST',
                'comp3.s1': 'Déployer une stack multi-conteneurs (Docker Compose)',
                'comp3.s2': 'Configurer Nginx comme reverse proxy',
                'comp3.s3': 'Mettre en place un pipeline CI/CD (GitHub Actions)',
                'comp3.s4': 'Gérer l\'environnement de production conteneurisé',

                // Compétence 4 — Gérer les données
                'comp4.title': 'Gérer les données de l\'information',
                'comp4.badge': 'Data',
                'comp4.k1': 'Modélisation relationnelle (MCD, MLD, 3FN)',
                'comp4.k2': 'Langage SQL avancé (jointures, agrégats, vues)',
                'comp4.k3': 'Traitement de données (Pandas, NumPy)',
                'comp4.k4': 'Visualisation et exploration (DataViz)',
                'comp4.s1': 'Concevoir et normaliser des BDD (PostgreSQL, MySQL)',
                'comp4.s2': 'Écrire des requêtes SQL complexes et optimisées',
                'comp4.s3': 'Nettoyer et transformer des jeux de données (Pandas)',
                'comp4.s4': 'Produire des analyses et visualisations exploratoires',

                // Compétence 5 — Conduire un projet
                'comp5.title': 'Conduire un projet',
                'comp5.badge': 'Gestion de projet',
                'comp5.k1': 'Méthodes agiles (Scrum, sprints, rétrospectives)',
                'comp5.k2': 'Gestion du backlog et priorisation',
                'comp5.k3': 'Outils de versionnement (Git, GitHub)',
                'comp5.k4': 'Documentation technique et livrables',
                'comp5.s1': 'Piloter une équipe de 6 développeurs (chef de projet)',
                'comp5.s2': 'Planifier et suivre des sprints en méthode agile',
                'comp5.s3': 'Versionner et coordonner via Git/GitHub',
                'comp5.s4': 'Livrer une documentation claire à chaque sprint',

                // Compétence 6 — Travailler en équipe
                'comp6.title': 'Travailler dans une équipe informatique',
                'comp6.badge': 'Collaboration',
                'comp6.k1': 'Communication technique en équipe pluridisciplinaire',
                'comp6.k2': 'Revue de code et bonnes pratiques collaboratives',
                'comp6.k3': 'Conventions de nommage & clean code',
                'comp6.k4': 'Résolution de conflits Git en équipe',
                'comp6.s1': 'Collaborer efficacement sur des dépôts partagés',
                'comp6.s2': 'Participer et animer des réunions de sprint',
                'comp6.s3': 'Adapter son niveau de communication (tech/non-tech)',
                'comp6.s4': 'Contribuer à un projet primé en équipe (WEAVE 🏆)',

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
                'footer.description': 'Je suis à la recherche d\'une alternance à partir de septembre 2026 (rythme 3 semaines entreprise / 1 semaine école) sur des postes de développeur backend, data ou IA. Si mon profil vous intéresse, écrivez-moi — je réponds sous 24h.',
                'footer.copyright': '© 2026 Anas KIOUAZ. Tous droits réservés.',
                'footer.location': 'Grenoble, France',

                // Contact Form
                'form.name': 'Nom complet',
                'form.email': 'Email',
                'form.company': 'Entreprise (optionnel)',
                'form.message': 'Votre message',
                'form.message-placeholder': 'Décrivez brièvement le poste, le contexte ou votre question…',
                'form.submit': 'Envoyer le message',
                'form.success': 'Message envoyé avec succès. Je vous réponds sous 24h.',
                'form.error': 'Une erreur est survenue. Réessayez ou écrivez-moi directement par email.',
                'form.error-network': 'Connexion impossible. Vérifiez votre réseau et réessayez.',
                'form.error-validation': 'Merci de compléter les champs obligatoires.',
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'Journey',
                'nav.projects': 'Projects',
                'nav.skills': 'Expertise',
                'nav.contact': 'Contact',
                'nav.cv': 'View my CV',
                'nav.language': 'Language',

                // Hero Section
                'hero.status': 'Available for apprenticeship September 2026',
                'hero.rhythm': 'Apprenticeship rhythm:',
                'hero.rhythm-calendar': 'View official BUT3 calendar',
                'hero.role': 'Software Developer — Backend, Data & AI',
                'hero.location': 'Python · Java · Symfony · Docker — BUT Computer Science student in Grenoble',
                'hero.description': '2nd-year BUT Computer Science student at IUT2 Grenoble. I build backend applications, data tools and AI automations, from relational modeling to containerized production. Looking for an apprenticeship from September 2026, rhythm 3 weeks company / 1 week school.',
                'hero.btn-projects': 'Discover my projects',
                'hero.btn-cv': 'View my CV',
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
                'about.license': 'Driving Licence',
                'about.license-value': 'Category B ',

                // Projects Section
                'projects.title': 'Selected Projects',
                'projects.section-number': '02',
                'projects.view': 'View project',
                'projects.context': 'Context',
                'projects.role': 'My Role',
                'projects.github': 'View on GitHub',
                'projects.report': 'Read Stage Report',

                // Skills Section
                'skills.title': 'BUT Computer Science Skills',
                'skills.section-number': '03',
                'skills.subtitle': 'Application Development Track — 6 national programme competencies',
                'skills.languages': 'Languages',
                'skills.knowledge': 'Languages & Tools',
                'skills.competence': 'Skills',
                'skills.legend-knowledge': 'Languages & Tools used in my projects',
                'skills.legend-skill': 'Skills — practical know-how demonstrated',

                // Competency 1 — Build applications
                'comp1.title': 'Build application software',
                'comp1.badge': 'Core skill',
                'comp1.k1': 'Algorithms and data structures',
                'comp1.k2': 'Programming paradigms (OOP, functional)',
                'comp1.k3': 'Design patterns (MVC, Repository…)',
                'comp1.k4': 'Software quality & testing (unit, E2E)',
                'comp1.s1': 'Develop in Java (JavaFX, JDBC) and Python',
                'comp1.s2': 'Design and implement REST APIs (Symfony)',
                'comp1.s3': 'Write automated tests (Cypress, Espresso)',
                'comp1.s4': 'Apply MVC patterns on real-world projects',

                // Competency 2 — Optimise applications
                'comp2.title': 'Optimise computer applications',
                'comp2.badge': 'Performance',
                'comp2.k1': 'Algorithmic complexity (O-notation)',
                'comp2.k2': 'SQL query optimisation (indexes, plans)',
                'comp2.k3': 'Machine learning algorithms (KNN, K-Means)',
                'comp2.k4': 'Convolutional neural networks (CNN)',
                'comp2.s1': 'Classify data using KNN and TF-IDF',
                'comp2.s2': 'Train a CNN (TensorFlow/Keras)',
                'comp2.s3': 'Normalise a relational schema to 3NF',
                'comp2.s4': 'Profile and eliminate performance bottlenecks',

                // Competency 3 — Administer systems
                'comp3.title': 'Administer complex communicating systems',
                'comp3.badge': 'Infrastructure',
                'comp3.k1': 'Network protocols (HTTP/S, TCP/IP, DNS)',
                'comp3.k2': 'Linux systems (shell, permissions, services)',
                'comp3.k3': 'Containerisation & orchestration (Docker)',
                'comp3.k4': 'Client-server architecture and REST APIs',
                'comp3.s1': 'Deploy a multi-container stack (Docker Compose)',
                'comp3.s2': 'Configure Nginx as a reverse proxy',
                'comp3.s3': 'Set up a CI/CD pipeline (GitHub Actions)',
                'comp3.s4': 'Manage containerised production environments',

                // Competency 4 — Manage data
                'comp4.title': 'Manage information data',
                'comp4.badge': 'Data',
                'comp4.k1': 'Relational modelling (ERD, logical model, 3NF)',
                'comp4.k2': 'Advanced SQL (joins, aggregates, views)',
                'comp4.k3': 'Data processing (Pandas, NumPy)',
                'comp4.k4': 'Visualisation and exploration (DataViz)',
                'comp4.s1': 'Design and normalise databases (PostgreSQL, MySQL)',
                'comp4.s2': 'Write complex and optimised SQL queries',
                'comp4.s3': 'Clean and transform datasets (Pandas)',
                'comp4.s4': 'Produce exploratory analyses and visualisations',

                // Competency 5 — Lead a project
                'comp5.title': 'Lead a software project',
                'comp5.badge': 'Project management',
                'comp5.k1': 'Agile methods (Scrum, sprints, retrospectives)',
                'comp5.k2': 'Backlog management and prioritisation',
                'comp5.k3': 'Version control tools (Git, GitHub)',
                'comp5.k4': 'Technical documentation and deliverables',
                'comp5.s1': 'Lead a team of 6 developers (project manager)',
                'comp5.s2': 'Plan and track sprints using agile methods',
                'comp5.s3': 'Version and coordinate via Git/GitHub',
                'comp5.s4': 'Deliver clear documentation at each sprint',

                // Competency 6 — Work in a team
                'comp6.title': 'Work within an IT team',
                'comp6.badge': 'Collaboration',
                'comp6.k1': 'Technical communication in cross-functional teams',
                'comp6.k2': 'Code review and collaborative best practices',
                'comp6.k3': 'Naming conventions & clean code',
                'comp6.k4': 'Resolving Git conflicts within a team',
                'comp6.s1': 'Collaborate effectively on shared repositories',
                'comp6.s2': 'Participate in and facilitate sprint meetings',
                'comp6.s3': 'Adapt communication level (tech/non-tech)',
                'comp6.s4': 'Contribute to an award-winning team project (WEAVE 🏆)',

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

                // Contact Form
                'form.name': 'Full name',
                'form.email': 'Email',
                'form.company': 'Company (optional)',
                'form.message': 'Your message',
                'form.message-placeholder': 'Briefly describe the role, context or your question…',
                'form.submit': 'Send message',
                'form.success': 'Message sent successfully. I\'ll get back to you within 24h.',
                'form.error': 'Something went wrong. Please try again or email me directly.',
                'form.error-network': 'Network error. Check your connection and try again.',
                'form.error-validation': 'Please fill in the required fields.',
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
