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
                'nav.cv': 'Curriculum',
                'nav.language': 'Langue',

                // Hero Section
                'hero.status': 'Disponible pour alternance Septembre 2027',
                'hero.role': 'Développeur IA, Data & Applications',
                'hero.location': 'Basé à Grenoble, France',
                'hero.description': 'Passionné par l\'ingénierie IA, l\'analyse de données et le développement d\'applications performantes. Actuellement en 2ᵉ année de BUT Informatique à l\'IUT2, je me spécialise dans des solutions data-driven et des systèmes intelligents.',
                'hero.btn-projects': 'Découvrir mes projets',
                'hero.btn-contact': 'Entrer en contact',
                'hero.stat-projects': 'Projets Réalisés',
                'hero.stat-diploma': 'Diplôme BUT',
                'hero.stat-age': 'Ans',
                'hero.focus': 'Focus 2027',
                'hero.focus-title': 'Concevoir des systèmes IA & data robustes.',
                'hero.focus-note': 'Ouvert aux missions IA, data et logiciels exigeants.',
                'hero.schedule': 'Planifier un échange',
                'hero.scroll': 'Défiler',

                // Profile Card
                'profile.specialty': 'Spécialité',
                'profile.specialty-value': 'IA appliquée & Data',
                'profile.location-label': 'Localisation',
                'profile.location-value': 'Grenoble, France',
                'profile.availability': 'Disponibilité',
                'profile.availability-value': 'Alternance 2027',

                // About Section
                'about.title': 'Mon Parcours',
                'about.section-number': '01',
                'about.student': 'Développeur en Formation',
                'about.bio1': 'Étudiant de 20 ans en troisième année de BUT Informatique à l\'IUT2 de Grenoble, titulaire d\'un baccalauréat scientifique mention Bien. Je me forme en développement logiciel, intelligence artificielle et analyse de données, avec un intérêt croissant pour les applications C++.',
                'about.bio2': 'Mon parcours m\'a permis d\'acquérir des compétences en programmation, notamment en Python, Java et C++, ainsi que des bases en machine learning, analyse de données et développement d\'applications.',
                'about.bio3': 'Je cherche à résoudre des problématiques réelles tout en continuant d\'apprendre et en développant mon autonomie et mon esprit de collaboration.',
                'about.age': 'Âge',
                'about.age-value': '20 ans',
                'about.location': 'Localisation',
                'about.location-value': 'Saint-Martin-d\'Hères, FR',
                'about.education': 'Formation',
                'about.education-value': 'BUT Informatique (IUT2)',
                'about.availability-label': 'Disponibilité',
                'about.availability-value': 'Alternance Septembre 2027',

                // Projects Section
                'projects.title': 'Projets Sélectionnés',
                'projects.section-number': '02',
                'projects.view': 'Voir le projet',
                'projects.context': 'Contexte',
                'projects.role': 'Mon Rôle',
                'projects.github': 'Voir sur GitHub',

                // Project Cards
                'project.wirepas.title': 'ExpoMiner - Plateforme IA Wirepas',
                'project.wirepas.category': 'Architecture Logicielle & IA',
                'project.wirepas.description': 'Automatisation qualification prospects B2B via scraping, enrichissement et scoring IA',
                'project.wirepas.context': 'Développement d\'une plateforme complète (Web + Backend) pour automatiser la qualification de prospects B2B lors de 12+ salons professionnels/an. ExpoMiner réduit le temps de préparation de 3 jours à <30min via scraping intelligent, enrichissement multi-source et scoring IA. Contexte: Wirepas participe à des salons (Electronica, Smart City Expo, IBS, Enlit) pour identifier prospects IoT industriel, avec processus préalablement entièrement manuel (3j/salon = perte 36j commerciaux/an).',
                'project.wirepas.role': 'Lead Developer & Architect. Conception complète de l\'architecture monorepo TypeScript (Backend Node.js + Frontend React). Orchestration du pipeline end-to-end: (1) Scraping multi-site via Playwright + détection heuristique des sélecteurs CSS, (2) Enrichissement via 8+ APIs (SIRENE/INPI/GLEIF/Wikidata/VIES/Pappers), (3) NLP local (TF-IDF + Embeddings MiniLM-L12-v2), (4) Scoring via LLM minimax-m2.5-free, (5) Intégration HubSpot automatisée. Implémentation infrastructure Docker + CI/CD GitHub Actions. Défis surmontés: pagination dynamique (scroll infini), extraction PDF avec reconnaissance technologique (DDG Lite + pdf-parse), déduplication multi-critères, optimisation NLP local pour <50ms/query, gestion erreurs APIs tierces. Résultats: automatisation 85% processus qualification, réduction temps 10h→30min/salon (97% gain), pipeline robuste 12+ salons/an, dashboard temps-réel avec exports HubSpot, couverture tests Vitest.',

                'project.ml.title': 'Classification de Dépêches',
                'project.ml.category': 'Machine Learning',
                'project.ml.description': 'Système de classification automatique d\'articles avec NLP et KNN',
                'project.ml.context': 'Développement d\'un système de classification automatique d\'articles de presse utilisant des techniques de traitement du langage naturel. Le projet implémente une approche par sacs de mots avec validation croisée.',
                'project.ml.role': 'Conception complète de l\'architecture du système et pipeline ML. Implémentation de l\'algorithme TF-IDF pour la vectorisation des textes et optimisation des hyperparamètres KNN. Résultats: précision de 89% sur l\'ensemble de test, temps de traitement <200ms par article, classifieur opérationnel sur 15+ catégories d\'articles.',

                'project.cnn.title': 'Classification par CNN',
                'project.cnn.category': 'Deep Learning',
                'project.cnn.description': 'Réseau de neurones convolutifs pour classification d\'images',
                'project.cnn.context': 'Implémentation d\'un réseau de neurones convolutifs profond pour la classification d\'images détectant les événements critiques en temps réel. Le projet inclut un pipeline complet de prétraitement et augmentation des données.',
                'project.cnn.role': 'Design complet de l\'architecture CNN avec 6 couches convolutives, batch normalization et dropout. Mise en place de data augmentation (rotation, flip, zoom). Défi résolu: overfitting via régularisation L2 et early stopping. Résultats: accuracy 94.2%, latence inférence <50ms, modèle déployable en edge.',

                'project.javafx.title': 'ERP Grand Prix',
                'project.javafx.category': 'Application Desktop',
                'project.javafx.description': 'Application de gestion complète pour événements sportifs',
                'project.javafx.context': 'Application de gestion complète pour événements sportifs développée dans le cadre d\'un projet universitaire. L\'application permet la gestion des participants, des épreuves, des résultats et des classements en temps réel.',
                'project.javafx.role': 'Architecture complète en pattern MVC avec séparation stricte des responsabilités. Développement de l\'interface utilisateur moderne avec JavaFX et CSS (20+ écrans). Conception et optimisation de la base de données MySQL (8 tables normalisées). Défi: synchronisation temps réel des résultats. Résultats: application stable pour 500+ participants, temps de réponse <100ms, génération automatique des classements.',

                'project.web.title': 'Site Hardis Group',
                'project.web.category': 'Prototype Web',
                'project.web.description': 'Prototype d\'interface avec design responsive et interactions UI',
                'project.web.context': 'Création d\'un prototype d\'interface présentant l\'entreprise Hardis Group et sa démarche de transition écologique. Site vitrine avec animations et interactive elements.',
                'project.web.role': 'Développement frontend complet avec HTML5/CSS3/JavaScript vanilla. Mise en place d\'interactions UI fluides (smooth scrolling, animations CSS, effects au hover). Design responsive mobile-first avec breakpoints optimisés. Résultats: temps chargement <1.5s, score Lighthouse 92+, 100% responsive sur tous les appareils.',

                'project.game.title': 'Sort Game',
                'project.game.category': 'Game Development',
                'project.game.description': 'Jeu de réflexion et stratégie avec interface Tkinter',
                'project.game.context': 'Jeu de réflexion et de stratégie développé en Python utilisant la bibliothèque Tkinter pour l\'interface graphique. Système de scoring et de niveaux progressifs.',
                'project.game.role': 'Conception de la logique du jeu en POO avec patterns (Factory, Observer). Développement de l\'interface graphique interactive Tkinter avec gestion d\'événements. Implémentation d\'algorithmes de tri pour la mécanique de jeu. Défi: optimisation du rendu en temps réel. Résultats: jeu fluide 60fps, système de progression 5+ niveaux, menus intuitifs.',

                'project.weave.title': 'Weave - Plateforme de Soins',
                'project.weave.category': 'Produit logiciel & Data',
                'project.weave.description': 'Plateforme logicielle pour coordonner les aidants avec focus sur les flux de données',
                'project.weave.context': 'Face au vieillissement de la population, Weave centralise la coordination du maintien à domicile avec un focus sur les flux de données et la fiabilité opérationnelle. Plateforme SaaS pour coordinateurs de soins.',
                'project.weave.role': 'Founder & Lead Developer. Conception de l\'architecture microservices (API, workers, dashboards). Modélisation de base de données complexe pour patients/intervenants/planning. Orchestration Docker + CI/CD Pipeline. Défis surmontés: synchronisation temps réel d\'équipes distribuées, scalabilité pour 1000+ utilisateurs simultanés. Résultats: 99.8% uptime, 50ms latence API, adoption par 5 structures pilotes.',

                // Skills Section
                'skills.title': 'Expertise Technique',
                'skills.section-number': '03',
                'skills.subtitle': 'IA, data et développement d\'applications',
                'skills.languages': 'Langues',

                // Skill Cards
                'skill.python.title': 'Python',
                'skill.python.desc': 'IA, Scraping, Automation, Data Science',
                'skill.java.title': 'Java',
                'skill.java.desc': 'POO, Applications Desktop, Algorithmes',
                'skill.cpp.title': 'C++ & Applications',
                'skill.cpp.desc': 'Applications natives, performance, algorithmique',
                'skill.ai.title': 'IA & Agents',
                'skill.ai.desc': 'Deep Learning, LLMs, NLP, Scoring & Agents',
                'skill.database.title': 'Databases',
                'skill.database.desc': 'SQL, Design, Optimisation',
                'skill.data.title': 'Data Analytics',
                'skill.data.desc': 'Exploration, visualisation et préparation des données',
                'skill.fullstack.title': 'Full-Stack Web',
                'skill.fullstack.desc': 'Backend & Frontend, APIs, Scraping, DevOps',

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
                'interest.gaming': 'League of Legends',
                'interest.gaming-desc': 'Stratégie en temps réel',

                // Footer
                'footer.title': 'Travaillons',
                'footer.title-accent': 'Ensemble',
                'footer.description': 'Je suis disponible pour des stages, projets ou collaborations. N\'hésitez pas à me contacter.',
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
                'nav.cv': 'Resume',
                'nav.language': 'Language',

                // Hero Section
                'hero.status': 'Available for internship September 2027',
                'hero.role': 'AI Developer, Data & Applications',
                'hero.location': 'Based in Grenoble, France',
                'hero.description': 'Passionate about AI engineering, data analysis and high-performance application development. Currently in 2nd year of BUT Computer Science at IUT2, specializing in data-driven solutions and intelligent systems.',
                'hero.btn-projects': 'Discover my projects',
                'hero.btn-contact': 'Get in touch',
                'hero.stat-projects': 'Projects Completed',
                'hero.stat-diploma': 'BUT Diploma',
                'hero.stat-age': 'Years',
                'hero.focus': 'Focus 2027',
                'hero.focus-title': 'Design robust AI & data systems.',
                'hero.focus-note': 'Open to AI, data and demanding software missions.',
                'hero.schedule': 'Schedule a conversation',
                'hero.scroll': 'Scroll',

                // Profile Card
                'profile.specialty': 'Specialty',
                'profile.specialty-value': 'Applied AI & Data',
                'profile.location-label': 'Location',
                'profile.location-value': 'Grenoble, France',
                'profile.availability': 'Availability',
                'profile.availability-value': 'Internship 2027',

                // About Section
                'about.title': 'My Journey',
                'about.section-number': '01',
                'about.student': 'Developer in Training',
                'about.bio1': '20-year-old student in the 3rd year of BUT Computer Science at IUT2 Grenoble, holding a scientific baccalaureate diploma with distinction. I\'m training in software development, artificial intelligence and data analysis, with growing interest in C++ applications.',
                'about.bio2': 'My journey has enabled me to acquire programming skills, particularly in Python, Java and C++, as well as foundations in machine learning, data analysis and application development.',
                'about.bio3': 'I seek to solve real-world challenges while continuing to learn and developing my autonomy and collaborative spirit.',
                'about.age': 'Age',
                'about.age-value': '20 years old',
                'about.location': 'Location',
                'about.location-value': 'Saint-Martin-d\'Hères, FR',
                'about.education': 'Education',
                'about.education-value': 'BUT Computer Science (IUT2)',
                'about.availability-label': 'Availability',
                'about.availability-value': 'Internship September 2027',

                // Projects Section
                'projects.title': 'Selected Projects',
                'projects.section-number': '02',
                'projects.view': 'View project',
                'projects.context': 'Context',
                'projects.role': 'My Role',
                'projects.github': 'View on GitHub',

                // Project Cards
                'project.wirepas.title': 'ExpoMiner - Wirepas AI Platform',
                'project.wirepas.category': 'Software Architecture & AI',
                'project.wirepas.description': 'B2B prospect qualification automation via scraping, enrichment and AI scoring',
                'project.wirepas.context': 'Development of a complete platform (Web + Backend) to automate B2B prospect qualification at 12+ trade shows annually. ExpoMiner reduces preparation time from 3 days to <30min via intelligent scraping, multi-source enrichment and AI scoring. Context: Wirepas participates in shows (Electronica, Smart City Expo, IBS, Enlit) to identify industrial IoT prospects, with previously entirely manual process (3 days/show = loss of 36 commercial days/year).',
                'project.wirepas.role': 'Lead Developer & Architect. Complete TypeScript monorepo architecture design (Node.js Backend + React Frontend). End-to-end pipeline orchestration: (1) Multi-site scraping via Playwright + heuristic CSS selector detection, (2) Enrichment via 8+ APIs (SIRENE/INPI/GLEIF/Wikidata/VIES/Pappers), (3) Local NLP (TF-IDF + MiniLM-L12-v2 Embeddings), (4) Scoring via LLM minimax-m2.5-free, (5) Automated HubSpot integration. Docker infrastructure + GitHub Actions CI/CD implementation. Challenges overcome: dynamic pagination (infinite scroll), PDF extraction with technology recognition (DDG Lite + pdf-parse), multi-criteria deduplication, local NLP optimization for <50ms/query, third-party API error handling. Results: 85% qualification process automation, time reduction 10h→30min/show (97% gain), robust pipeline 12+ shows/year, real-time dashboard with HubSpot exports, Vitest test coverage.',

                'project.ml.title': 'News Classification',
                'project.ml.category': 'Machine Learning',
                'project.ml.description': 'Automatic article classification system with NLP and KNN',
                'project.ml.context': 'Development of an automatic press article classification system using natural language processing techniques. The project implements a bag-of-words approach with cross-validation.',
                'project.ml.role': 'Complete system architecture and ML pipeline design. TF-IDF algorithm implementation for text vectorization and KNN hyperparameter optimization. Results: 89% accuracy on test set, processing time <200ms per article, operational classifier on 15+ article categories.',

                'project.cnn.title': 'CNN Classification',
                'project.cnn.category': 'Deep Learning',
                'project.cnn.description': 'Convolutional neural network for image classification',
                'project.cnn.context': 'Implementation of a deep convolutional neural network for image classification detecting critical events in real-time. The project includes complete preprocessing and data augmentation pipeline.',
                'project.cnn.role': 'Complete CNN architecture design with 6 convolutional layers, batch normalization and dropout. Data augmentation setup (rotation, flip, zoom). Solved challenge: overfitting via L2 regularization and early stopping. Results: 94.2% accuracy, inference latency <50ms, edge-deployable model.',

                'project.javafx.title': 'ERP Grand Prix',
                'project.javafx.category': 'Desktop Application',
                'project.javafx.description': 'Complete management application for sporting events',
                'project.javafx.context': 'Complete management application for sporting events developed as part of a university project. The application enables participant, event, result and ranking management in real-time.',
                'project.javafx.role': 'Complete MVC architecture with strict separation of concerns. Modern user interface development with JavaFX and CSS (20+ screens). MySQL database design and optimization (8 normalized tables). Challenge: real-time result synchronization. Results: stable application for 500+ participants, response time <100ms, automatic ranking generation.',

                'project.web.title': 'Hardis Group Website',
                'project.web.category': 'Web Prototype',
                'project.web.description': 'Interface prototype with responsive design and UI interactions',
                'project.web.context': 'Creation of an interface prototype presenting Hardis Group company and its ecological transition approach. Showcase website with animations and interactive elements.',
                'project.web.role': 'Complete frontend development with HTML5/CSS3/vanilla JavaScript. Implementation of smooth UI interactions (smooth scrolling, CSS animations, hover effects). Mobile-first responsive design with optimized breakpoints. Results: load time <1.5s, Lighthouse score 92+, 100% responsive on all devices.',

                'project.game.title': 'Sort Game',
                'project.game.category': 'Game Development',
                'project.game.description': 'Puzzle and strategy game with Tkinter interface',
                'project.game.context': 'Puzzle and strategy game developed in Python using Tkinter library for the graphical interface. Scoring system and progressive levels.',
                'project.game.role': 'Game logic design using OOP with patterns (Factory, Observer). Interactive Tkinter graphical interface development with event handling. Sorting algorithms implementation for game mechanics. Challenge: real-time rendering optimization. Results: smooth 60fps gameplay, 5+ level progression system, intuitive menus.',

                'project.weave.title': 'Weave - Healthcare Platform',
                'project.weave.category': 'Software Product & Data',
                'project.weave.description': 'Software platform to coordinate caregivers with focus on data flows',
                'project.weave.context': 'Facing population aging, Weave centralizes home care coordination with focus on data flows and operational reliability. SaaS platform for care coordinators.',
                'project.weave.role': 'Founder & Lead Developer. Microservices architecture design (API, workers, dashboards). Complex database modeling for patients/caregivers/scheduling. Docker orchestration + CI/CD Pipeline. Challenges overcome: real-time team synchronization across distributed locations, scalability for 1000+ simultaneous users. Results: 99.8% uptime, 50ms API latency, adoption by 5 pilot structures.',

                // Skills Section
                'skills.title': 'Technical Expertise',
                'skills.section-number': '03',
                'skills.subtitle': 'AI, data and application development',
                'skills.languages': 'Languages',

                // Skill Cards
                'skill.python.title': 'Python',
                'skill.python.desc': 'AI, Scraping, Automation, Data Science',
                'skill.java.title': 'Java',
                'skill.java.desc': 'OOP, Desktop Applications, Algorithms',
                'skill.cpp.title': 'C++ & Applications',
                'skill.cpp.desc': 'Native applications, performance, algorithms',
                'skill.ai.title': 'AI & Agents',
                'skill.ai.desc': 'Deep Learning, LLMs, NLP, Scoring & Agents',
                'skill.database.title': 'Databases',
                'skill.database.desc': 'SQL, Design, Optimization',
                'skill.data.title': 'Data Analytics',
                'skill.data.desc': 'Data exploration, visualization and preparation',
                'skill.fullstack.title': 'Full-Stack Web',
                'skill.fullstack.desc': 'Backend & Frontend, APIs, Scraping, DevOps',

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
                'interest.gaming': 'League of Legends',
                'interest.gaming-desc': 'Real-time strategy',

                // Footer
                'footer.title': 'Let\'s Work',
                'footer.title-accent': 'Together',
                'footer.description': 'I\'m available for internships, projects or collaborations. Feel free to reach out.',
                'footer.copyright': '© 2026 Anas KIOUAZ. All rights reserved.',
                'footer.location': 'Grenoble, France',
            }
        };
        this.init();
    }

    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && (saved === 'fr' || saved === 'en')) {
            return saved;
        }

        // Detect based on browser language
        // Browser language setting is a reliable indicator of user location/preference
        // Alternative: Use IP-based geolocation API for more precise location detection
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('fr')) {
            return 'fr';
        }

        // Default to English for international users
        return 'en';
    }

    setLanguage(lang) {
        if (lang !== 'fr' && lang !== 'en') return;
        
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        this.updatePageTranslations();
        
        // Dispatch custom event for other components
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
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translated = this.t(key);
            
            // Handle different element types
            if (element.tagName === 'INPUT') {
                element.placeholder = translated;
            } else if (element.tagName === 'IMG') {
                element.alt = translated;
            } else {
                element.textContent = translated;
            }
        });

        // Update all attributes with data-i18n-attr
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
