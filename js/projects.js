class ProjectsSystem {
    constructor() {
        this.projectData = {
            weave: {
                title: {
                    fr: 'WEAVE — Plateforme d\'aide aux aidants',
                    en: 'WEAVE — Caregiver Coordination Platform'
                },
                category: {
                    fr: 'Produit logiciel & Data · 2025',
                    en: 'Software Product & Data · 2025'
                },
                year: '2025',
                images: ['img/weave_dashboard.png', 'img/weave_arch.png', 'img/weave_cicd.png'],
                tech: ['Architecture logicielle', 'PostgreSQL', 'Docker', 'API temps réel', 'CI/CD', 'Azure'],
                context: {
                    fr: 'Projet universitaire BUT S3 — concevoir une plateforme logicielle pour coordonner les aidants familiaux autour d\'une personne dépendante. Face au vieillissement de la population, WEAVE centralise la coordination du maintien à domicile avec un focus sur les flux de données et la fiabilité opérationnelle. Projet élu meilleur de la promotion, première équipe à livrer, classé n°1 sur l\'ensemble de la promo.',
                    en: 'BUT S3 university project — design a software platform to coordinate family caregivers around a dependent person. WEAVE centralizes home care coordination with focus on data flows and operational reliability. Elected best project of the class, first team to deliver, ranked #1 across the entire cohort.'
                },
                role: {
                    fr: 'Conception de l\'architecture microservices (API, workers, dashboards). Modélisation de base de données complexe pour patients/intervenants/planning. Orchestration Docker + CI/CD Pipeline. Défis surmontés : synchronisation temps réel d\'équipes distribuées. Résultats : projet élu meilleur de la promotion, première équipe à livrer.',
                    en: 'Microservices architecture design (API, workers, dashboards). Complex database modeling for patients/caregivers/scheduling. Docker orchestration + CI/CD Pipeline. Challenges: real-time team synchronization. Results: elected best project of the cohort, first team to deliver.'
                },
                description: {
                    fr: 'Plateforme logicielle pour coordonner les aidants familiaux autour d\'une personne dépendante. Architecture data, modèle relationnel et flux d\'événements.',
                    en: 'Software platform to coordinate family caregivers around a dependent person. Data architecture, relational model and event flows.'
                },
                github: 'https://github.com/anaskiouaz/WEAVE',
                teamwork: {
                    fr: 'Équipe de 5 développeurs — répartition Backend / Frontend / Data / Mobile. Sprints Agile bimensuels, revues de code croisées, intégration continue partagée sur GitLab. Première équipe à livrer, classée n°1 sur l\'ensemble de la promotion.',
                    en: 'Team of 5 developers — Backend / Frontend / Data / Mobile split. Bi-weekly Agile sprints, cross code reviews, shared CI on GitLab. First team to deliver, ranked #1 across the entire cohort.'
                },
                skills_acquired: ['Architecture microservices', 'Modélisation relationnelle', 'Docker / CI-CD', 'Coordination d\'équipe Agile', 'API temps réel', 'Azure']
            },
            sae4: {
                title: {
                    fr: 'Refonte qualité — Carnet de suivi de stage',
                    en: 'Quality Refactor — Internship Tracking App'
                },
                category: {
                    fr: 'Génie logiciel & DevOps · 2026',
                    en: 'Software Engineering & DevOps · 2026'
                },
                year: '2026',
                images: ['img/sae4.svg'],
                tech: ['Symfony 7', 'PostgreSQL 18', 'Docker / docker-compose', 'Android', 'Cypress', 'Espresso', 'K-Means', 'Linear', 'GitLab'],
                context: {
                    fr: 'Projet SAE S4 du BUT Informatique IUT2 Grenoble : améliorer la qualité et les performances d\'une application existante de gestion des stages, sans en recréer le périmètre fonctionnel. Application initialement instable (crashs Android, base non normalisée, environnement VM lourd).',
                    en: 'BUT S4 SAE project at IUT2 Grenoble: improve the quality and performance of an existing internship management application without recreating its functional scope. Initially unstable app (Android crashes, non-normalized database, heavy VM environment).'
                },
                role: {
                    fr: '<strong>Chef de projet</strong> d\'une équipe de 6 développeurs. Responsable de la conteneurisation Docker complète, de la rétroconception du modèle relationnel, de la mise en place des tests UI Cypress sur le back-office Symfony, et de la coordination via Linear (workflow Kanban, lien Issues-Branches Git).\n\n<strong>Réalisations techniques :</strong>\n• Conteneurisation Docker complète : 3 services orchestrés (PostgreSQL 18, PHP-FPM 8.4, Nginx) via docker-compose, suppression de la VM monolithique, déploiement instantané indépendant de l\'OS hôte\n• Refonte du schéma relationnel en 3ᵉ forme normale : élimination des attributs multivalués, atomisation des rôles utilisateurs, clés composites pour garantir l\'unicité métier des candidatures\n• Tests E2E Cypress sur le back-office Symfony pour valider les parcours administrateur\n• Pilotage projet sur Linear (vues Kanban filtrées par domaine, traçabilité Issue-Branche-Commit)\n\n<strong>Résultats :</strong>\n• Application stable, déploiement reproductible sur n\'importe quel poste en une commande\n• Modèle de données conforme aux standards académiques et prêt à évoluer\n• Base prête pour une chaîne CI/CD GitLab',
                    en: '<strong>Project lead</strong> for a team of 6 developers. Responsible for complete Docker containerization, relational model reverse-engineering, Cypress UI test setup on the Symfony back-office, and coordination via Linear (Kanban workflow, Issue-Branch-Git traceability).\n\n<strong>Technical achievements:</strong>\n• Full Docker containerization: 3 orchestrated services (PostgreSQL 18, PHP-FPM 8.4, Nginx) via docker-compose, VM removed, instant OS-independent deployment\n• Relational schema refactored to 3rd normal form: multi-valued attributes eliminated, user roles atomized, composite keys to enforce business uniqueness of applications\n• E2E Cypress tests on the Symfony back-office to validate admin flows\n• Project tracking on Linear (domain-filtered Kanban views, Issue-Branch-Commit traceability)\n\n<strong>Results:</strong>\n• Stable app, one-command reproducible deployment on any machine\n• Data model compliant with academic standards and ready to evolve\n• Ready for GitLab CI/CD pipeline'
                },
                description: {
                    fr: 'Audit et refonte complète d\'une application existante (back-office Symfony + app mobile Android + API REST + BDD PostgreSQL). Conteneurisation Docker, mise en 3FN, tests E2E Cypress, clustering K-Means.',
                    en: 'Full audit and refactor of an existing app (Symfony back-office + Android app + REST API + PostgreSQL). Docker containerization, 3NF normalization, E2E Cypress tests, K-Means clustering.'
                },
                github: null,
                teamwork: {
                    fr: 'Équipe de 6 développeurs — répartition Backend Symfony / Application Android / Base de données / Tests / DevOps. Pilotage Kanban sur Linear avec traçabilité Issue-Branche-Commit. Revues de code croisées et sprints de deux semaines.',
                    en: 'Team of 6 developers — Symfony Backend / Android App / Database / Testing / DevOps split. Kanban tracking on Linear with Issue-Branch-Commit traceability. Cross code reviews and two-week sprints.'
                },
                skills_acquired: ['Docker / docker-compose', 'Normalisation 3FN', 'Tests E2E Cypress', 'Gestion de projet Kanban', 'Symfony 7', 'Android / Espresso', 'K-Means clustering']
            },
            wirepas: {
                title: {
                    fr: 'ExpoMiner - Plateforme IA Wirepas',
                    en: 'ExpoMiner - Wirepas AI Platform'
                },
                category: {
                    fr: 'Architecture Logicielle & IA',
                    en: 'Software Architecture & AI'
                },
                year: '2025',
                images: ['img/wirepas_sequence.svg', 'img/wirepas_arch_placeholder.svg'],
                tech: ['Node.js 20', 'TypeScript', 'Express.js', 'SQLite', 'Prisma ORM', 'Playwright', 'React', 'Tailwind', 'APIs Externes (SIRENE/INPI/GLEIF)', 'HubSpot', 'NLP', 'LLM'],
                context: {
                    fr: 'Développement d\'une plateforme complète (Web + Backend) pour automatiser la qualification de prospects B2B lors de 12+ salons professionnels par an. ExpoMiner réduit le temps de préparation de 3 jours à moins de 30 min via scraping intelligent, enrichissement multi-source et scoring IA. Contexte : Wirepas participe à des salons (Electronica, Smart City Expo, IBS, Enlit) pour identifier des prospects IoT industriels, avec un processus préalablement entièrement manuel (3 j/salon = perte de 36 jours commerciaux par an).',
                    en: 'Development of a complete platform (Web + Backend) to automate B2B prospect qualification at 12+ trade shows annually. ExpoMiner reduces preparation time from 3 days to <30min via intelligent scraping, multi-source enrichment and AI scoring. Context: Wirepas participates in shows (Electronica, Smart City Expo, IBS, Enlit) to identify industrial IoT prospects, with previously entirely manual process (3 days/show = loss of 36 commercial days/year).'
                },
                role: {
                    fr: 'Lead Developer & Architect. Conception complète de l\'architecture monorepo TypeScript (Backend Node.js + Frontend React). Orchestration du pipeline end-to-end : (1) Scraping multi-site via Playwright + détection heuristique des sélecteurs CSS, (2) Enrichissement via 8+ APIs (SIRENE/INPI/GLEIF/Wikidata/VIES/Pappers), (3) NLP local (TF-IDF + Embeddings MiniLM-L12-v2), (4) Scoring via LLM, (5) Intégration HubSpot automatisée. Mise en place de l\'infrastructure Docker + CI/CD GitHub Actions. Résultats : 85 % du processus de qualification automatisé, réduction du temps 10h → 30 min/salon (97 % de gain).',
                    en: 'Lead Developer & Architect. Complete TypeScript monorepo architecture design (Node.js Backend + React Frontend). End-to-end pipeline orchestration: (1) Multi-site scraping via Playwright + heuristic CSS selector detection, (2) Enrichment via 8+ APIs (SIRENE/INPI/GLEIF/Wikidata/VIES/Pappers), (3) Local NLP (TF-IDF + MiniLM-L12-v2 Embeddings), (4) LLM scoring, (5) Automated HubSpot integration. Docker infrastructure + GitHub Actions CI/CD implementation. Results: 85% qualification process automation, time reduction 10h→30min/show (97% gain).'
                },
                description: {
                    fr: 'Automatisation qualification prospects B2B via scraping, enrichissement et scoring IA',
                    en: 'B2B prospect qualification automation via scraping, enrichment and AI scoring'
                },
                github: 'https://github.com/anaskiouaz/wirepas-ia-platform',
                teamwork: null,
                skills_acquired: ['Architecture monorepo TypeScript', 'Scraping Playwright', 'NLP / Embeddings', 'Scoring LLM', 'API REST Node.js', 'React / Tailwind', 'Docker / GitHub Actions CI-CD', 'Intégration HubSpot']
            },
            ml: {
                title: 'Classification de Dépêches',
                category: 'Machine Learning',
                year: '2025',
                images: ['img/ML1.png', 'img/ML1.png', 'img/ML1.png'],
                tech: ['Java', 'NLP', 'TF-IDF', 'KNN', 'Machine Learning'],
                context: {
                    fr: 'Développement d\'un système de classification automatique d\'articles de presse utilisant des techniques de traitement du langage naturel. Le projet implémente une approche par sacs de mots avec validation croisée.',
                    en: 'Development of an automatic press article classification system using natural language processing techniques. The project implements a bag-of-words approach with cross-validation.'
                },
                role: {
                    fr: 'Conception complète de l\'architecture du système et pipeline ML. Implémentation de l\'algorithme TF-IDF pour la vectorisation des textes et optimisation des hyperparamètres KNN. Résultats : précision de 89% sur l\'ensemble de test, temps de traitement <200ms par article, classifieur opérationnel sur 15+ catégories d\'articles.',
                    en: 'Complete system architecture and ML pipeline design. TF-IDF algorithm implementation for text vectorization and KNN hyperparameter optimization. Results: 89% accuracy on test set, processing time <200ms per article, operational classifier on 15+ article categories.'
                },
                description: {
                    fr: 'Système de classification automatique d\'articles avec NLP et KNN',
                    en: 'Automatic article classification system with NLP and KNN'
                },
                github: 'https://github.com/Jolly-Ak/News-Classification-ML',
                teamwork: null,
                skills_acquired: ['TF-IDF', 'Algorithme KNN', 'Validation croisée', 'NLP (tokenisation, stop words)', 'Java algorithmique', 'Évaluation de modèle ML']
            },
            cnn: {
                title: 'Classification par CNN',
                category: 'Deep Learning',
                year: '2024',
                images: ['img/1745556736982.jpg', 'img/1745556736982.jpg'],
                tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Data Augmentation', 'NumPy'],
                context: {
                    fr: 'Implémentation d\'un réseau de neurones convolutifs profond pour la classification d\'images, permettant la détection d\'événements critiques en temps réel. Le projet inclut un pipeline complet de prétraitement et d\'augmentation des données.',
                    en: 'Implementation of a deep convolutional neural network for image classification detecting critical events in real-time. The project includes complete preprocessing and data augmentation pipeline.'
                },
                role: {
                    fr: 'Design complet de l\'architecture CNN avec 6 couches convolutives, batch normalization et dropout. Mise en place de data augmentation (rotation, flip, zoom). Défi résolu : overfitting via régularisation L2 et early stopping. Résultats : accuracy 94.2%, latence inférence <50ms, modèle déployable en edge.',
                    en: 'Complete CNN architecture design with 6 convolutional layers, batch normalization and dropout. Data augmentation setup (rotation, flip, zoom). Solved challenge: overfitting via L2 regularization and early stopping. Results: 94.2% accuracy, inference latency <50ms, edge-deployable model.'
                },
                description: {
                    fr: 'Réseau de neurones convolutifs pour classification d\'images',
                    en: 'Convolutional neural network for image classification'
                },
                github: 'https://github.com/Jolly-Ak/Valorant-Kill-Detection',
                teamwork: null,
                skills_acquired: ['Réseaux de neurones convolutifs (CNN)', 'TensorFlow / Keras', 'Data augmentation', 'Régularisation L2 / Early stopping', 'Pipeline prétraitement images', 'Déploiement modèle edge']
            },
            javafx: {
                title: 'ERP Grand Prix',
                category: 'Application Desktop',
                year: '2025',
                images: ['img/JavaFX.png', 'img/JavaFX.png'],
                tech: ['Java', 'JavaFX', 'MySQL', 'MVC', 'JDBC', 'Scene Builder'],
                context: {
                    fr: 'Application de gestion complète pour événements sportifs développée dans le cadre d\'un projet universitaire. L\'application permet la gestion des participants, des épreuves, des résultats et des classements en temps réel.',
                    en: 'Complete management application for sporting events developed as part of a university project. The application enables participant, event, result and ranking management in real-time.'
                },
                role: {
                    fr: 'Architecture complète en pattern MVC avec séparation stricte des responsabilités. Développement de l\'interface utilisateur moderne avec JavaFX et CSS (20+ écrans). Conception et optimisation de la base de données MySQL (8 tables normalisées). Défi : synchronisation temps réel des résultats. Résultats : application stable pour 500+ participants, temps de réponse <100ms.',
                    en: 'Complete MVC architecture with strict separation of concerns. Modern user interface development with JavaFX and CSS (20+ screens). MySQL database design and optimization (8 normalized tables). Challenge: real-time result synchronization. Results: stable application for 500+ participants, response time <100ms.'
                },
                description: {
                    fr: 'Application de gestion complète pour événements sportifs',
                    en: 'Complete management application for sporting events'
                },
                github: 'https://gricad-gitlab.univ-grenoble-alpes.fr/iut2-info-stud/2025-s2/r2.01.03/d2/kiouazan',
                teamwork: {
                    fr: 'Équipe de 3 développeurs — répartition Interface / Base de données / Logique métier. Intégration en binôme via Git, revues de code entre membres.',
                    en: 'Team of 3 developers — Interface / Database / Business logic split. Pair integration via Git, code reviews between members.'
                },
                skills_acquired: ['Pattern MVC Java', 'JavaFX / Scene Builder', 'JDBC / MySQL', 'Conception BDD normalisée', 'Synchronisation temps réel', 'Gestion d\'événements complexes']
            },
            web: {
                title: 'Site Hardis Group',
                category: 'Développement Web',
                year: '2024',
                images: ['img/Hardis.png', 'img/Hardis.png'],
                tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Design', 'Responsive', 'Git'],
                context: {
                    fr: 'Création d\'un prototype d\'interface présentant l\'entreprise Hardis Group et sa démarche de transition écologique. Site vitrine avec animations et éléments interactifs.',
                    en: 'Creation of an interface prototype presenting Hardis Group company and its ecological transition approach. Showcase website with animations and interactive elements.'
                },
                role: {
                    fr: 'Développement frontend complet avec HTML5/CSS3/JavaScript vanilla. Mise en place d\'interactions UI fluides (smooth scrolling, animations CSS, effets au hover). Design responsive mobile-first avec breakpoints optimisés. Résultats : temps chargement <1.5s, score Lighthouse 92+, 100% responsive.',
                    en: 'Complete frontend development with HTML5/CSS3/vanilla JavaScript. Implementation of smooth UI interactions (smooth scrolling, CSS animations, hover effects). Mobile-first responsive design with optimized breakpoints. Results: load time <1.5s, Lighthouse score 92+, 100% responsive.'
                },
                description: {
                    fr: 'Prototype d\'interface avec design responsive et interactions UI',
                    en: 'Interface prototype with responsive design and UI interactions'
                },
                github: 'https://github.com/Jolly-Ak/Hardis-Group',
                teamwork: null,
                skills_acquired: ['HTML5 sémantique', 'CSS3 animations', 'JavaScript vanilla', 'Design responsive mobile-first', 'Optimisation Lighthouse', 'Accessibilité web']
            },
            game: {
                title: 'Sort Game',
                category: 'Game Development',
                year: '2023',
                images: ['img/sortgame.png', 'img/sortgame.png'],
                tech: ['Python', 'Tkinter', 'POO', 'Algorithmes', 'Event-Driven'],
                context: {
                    fr: 'Jeu de réflexion et de stratégie développé en Python utilisant la bibliothèque Tkinter pour l\'interface graphique. Système de scoring et de niveaux progressifs.',
                    en: 'Puzzle and strategy game developed in Python using Tkinter library for the graphical interface. Scoring system and progressive levels.'
                },
                role: {
                    fr: 'Conception de la logique du jeu en POO avec patterns (Factory, Observer). Développement de l\'interface graphique interactive Tkinter avec gestion d\'événements. Implémentation d\'algorithmes de tri pour la mécanique de jeu. Résultats : jeu fluide 60fps, système de progression 5+ niveaux.',
                    en: 'Game logic design using OOP with patterns (Factory, Observer). Interactive Tkinter graphical interface development with event handling. Sorting algorithms implementation for game mechanics. Results: smooth 60fps gameplay, 5+ level progression system.'
                },
                description: {
                    fr: 'Jeu de réflexion et stratégie avec interface Tkinter',
                    en: 'Puzzle and strategy game with Tkinter interface'
                },
                github: 'https://github.com/Jolly-Ak/SortGame',
                teamwork: null,
                skills_acquired: ['POO Python', 'Tkinter / GUI event-driven', 'Design patterns Factory & Observer', 'Algorithmes de tri', 'Gestion d\'état de jeu', 'Optimisation 60fps']
            }
        };
        
        this.modal = null;
        this.fullscreenViewer = null;
        this.currentProject = null;
        this.scrollPosition = 0;
        this.init();
    }

    init() {
        this.setupModal();
        this.setupFullscreenViewer();
        this.setupProjectCards();
        this.setupKeyboardNavigation();
    }

    setupModal() {
        this.modal = document.querySelector('.project-detail-modal');
        const closeBtn = this.modal.querySelector('.modal-close-btn');
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeModal();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    setupFullscreenViewer() {
        this.fullscreenViewer = document.querySelector('.fullscreen-viewer');
        const closeBtn = this.fullscreenViewer.querySelector('.fullscreen-close-btn');
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeFullscreen();
        });
        
        this.fullscreenViewer.addEventListener('click', (e) => {
            if (e.target === this.fullscreenViewer || e.target.classList.contains('fullscreen-image')) {
                this.closeFullscreen();
            }
        });
    }

    setupProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.dataset.projectId;
                this.openModal(projectId);
            });
        });
    }

    getTranslatedValue(value, lang) {
        if (!value) return '';
        if (typeof value === 'string') return value;
        return value[lang] || value['fr'] || '';
    }

    openModal(projectId) {
        const project = this.projectData[projectId];
        if (!project) return;
        
        this.currentProject = projectId;
        this.scrollPosition = window.pageYOffset;
        
        document.body.style.overflow = 'hidden';
        
        this.populateModal(project);
        
        requestAnimationFrame(() => {
            this.modal.classList.add('active');
        });
    }

    populateModal(project) {
        const lang = document.documentElement.lang || 'fr';
        const category = this.modal.querySelector('.modal-category');
        const year = this.modal.querySelector('.modal-year');
        const title = this.modal.querySelector('.modal-title');
        const techStack = this.modal.querySelector('.modal-tech-stack');
        const context = this.modal.querySelector('.modal-context');
        const roleEl = this.modal.querySelector('.modal-role');
        const githubLink = this.modal.querySelector('.modal-btn-github');
        const gallery = this.modal.querySelector('.modal-gallery');
        
        category.textContent = this.getTranslatedValue(project.category, lang);
        year.textContent = project.year;
        title.textContent = this.getTranslatedValue(project.title, lang);
        context.textContent = this.getTranslatedValue(project.context, lang);

        const roleContent = this.getTranslatedValue(project.role, lang);
        roleEl.innerHTML = roleContent.replace(/\n/g, '<br>');

        const teamworkEl   = this.modal.querySelector('.modal-teamwork');
        const teamworkSect = this.modal.querySelector('.modal-teamwork-section');
        const skillsEl     = this.modal.querySelector('.modal-skills-acquired');

        const teamworkText = project.teamwork ? this.getTranslatedValue(project.teamwork, lang) : null;
        if (teamworkSect) teamworkSect.style.display = teamworkText ? '' : 'none';
        if (teamworkText && teamworkEl) teamworkEl.textContent = teamworkText;

        if (skillsEl && project.skills_acquired) {
            skillsEl.innerHTML = project.skills_acquired
                .map(s => `<span class="skill-acquired-tag">${s}</span>`)
                .join('');
        }

        if (project.github) {
            githubLink.href = project.github;
            githubLink.classList.remove('disabled');
            githubLink.style.pointerEvents = '';
            githubLink.style.opacity = '';
        } else {
            githubLink.href = '#';
            githubLink.classList.add('disabled');
            githubLink.style.pointerEvents = 'none';
            githubLink.style.opacity = '0.4';
        }

        techStack.innerHTML = project.tech
            .map(tech => `<span>${tech}</span>`)
            .join('');
        
        gallery.innerHTML = project.images
            .map(image => `<img src="${image}" alt="${this.getTranslatedValue(project.title, lang)}" class="gallery-image">`)
            .join('');
        
        const galleryImages = gallery.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openFullscreen(img.src, this.getTranslatedValue(project.title, lang));
            });
        });
    }

    closeModal() {
        this.modal.classList.remove('active');
        
        setTimeout(() => {
            document.body.style.overflow = '';
            // Only scroll back if we opened a project (and thus saved a position)
            if (this.currentProject) {
                window.scrollTo(0, this.scrollPosition);
                this.currentProject = null; // Reset
            }
        }, 500);
    }

    openFullscreen(imageSrc, alt) {
        const fullscreenImage = this.fullscreenViewer.querySelector('.fullscreen-image');
        fullscreenImage.src = imageSrc;
        fullscreenImage.alt = alt;
        
        requestAnimationFrame(() => {
            this.fullscreenViewer.classList.add('active');
        });
    }

    closeFullscreen() {
        this.fullscreenViewer.classList.remove('active');
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.fullscreenViewer.classList.contains('active')) {
                    this.closeFullscreen();
                } else if (this.modal.classList.contains('active')) {
                    this.closeModal();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.projectsSystem = new ProjectsSystem();
});