class ProjectsSystem {
    constructor() {
        this.projectData = {
            wirepas: {
                title: 'IA Wirepas France',
                category: 'Intelligence Artificielle',
                year: '2026',
                images: ['img/wirepas_sequence.svg', 'img/wirepas_arch_placeholder.svg'],
                tech: ['OpenRouter', 'Claude 4.5', 'Streamlit', 'Python', 'Scraping', 'HubSpot'],
                context: 'Développement d\'une application (Web/Desktop) durant mon stage chez Wirepas France visant à automatiser la détection et la recommandation de prospects pour les salons professionnels. Le système utilise des pipelines de données complexes intégrant du scraping avancé et des modèles d\'IA de pointe.',
                role: 'Conception de l\'architecture logicielle complet, implémentation des pipelines de traitement end-to-end (scraping avancé, enrichissement via APIs externes, intégration CRM HubSpot, routage IA via OpenRouter). Création du dashboard interactif Streamlit avec visualisation temps réel et exports de données. Résultats: automatisation de 80% du processus de qualification des prospects, réduction du temps d\'analyse de 10h à 30min par événement.',
                github: 'https://github.com/anaskiouaz/wirepas-ia-platform'
            },
            ml: {
                title: 'Classification de Dépêches',
                category: 'Machine Learning',
                year: '2025',
                images: ['img/ML1.png', 'img/ML2.png', 'img/ML1.png'],
                tech: ['Java', 'NLP', 'TF-IDF', 'KNN', 'Machine Learning'],
                context: 'Développement d\'un système de classification automatique d\'articles de presse utilisant des techniques de traitement du langage naturel. Le projet implémente une approche par sacs de mots avec validation croisée.',
                role: 'Conception complète de l\'architecture du système et pipeline ML. Implémentation de l\'algorithme TF-IDF pour la vectorisation des textes et optimisation des hyperparamètres KNN. Résultats: précision de 89% sur l\'ensemble de test, temps de traitement <200ms par article, classifieur opérationnel sur 15+ catégories d\'articles.',
                github: 'https://github.com/Jolly-Ak/News-Classification-ML'
            },
            cnn: {
                title: 'Classification par CNN',
                category: 'Deep Learning',
                year: '2024',
                images: ['img/1745556736982.jpg', 'img/VKD1.png', 'img/VKD2.png'],
                tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Data Augmentation', 'NumPy'],
                context: 'Implémentation d\'un réseau de neurones convolutifs profond pour la classification d\'images détectant les événements critiques en temps réel. Le projet inclut un pipeline complet de prétraitement et augmentation des données.',
                role: 'Design complet de l\'architecture CNN avec 6 couches convolutives, batch normalization et dropout. Mise en place de data augmentation (rotation, flip, zoom). Défi résolu: overfitting via régularisation L2 et early stopping. Résultats: accuracy 94.2%, latence inférence <50ms, modèle déployable en edge.',
                github: 'https://github.com/Jolly-Ak/Valorant-Kill-Detection'
            },
            javafx: {
                title: 'ERP Grand Prix',
                category: 'Application Desktop',
                year: '2025',
                images: ['img/JavaFX.png', 'img/mvc_ERP_GP(2).jpg'],
                tech: ['Java', 'JavaFX', 'MySQL', 'MVC', 'JDBC', 'Scene Builder'],
                context: 'Application de gestion complète pour événements sportifs développée dans le cadre d\'un projet universitaire. L\'application permet la gestion des participants, des épreuves, des résultats et des classements en temps réel.',
                role: 'Architecture complète en pattern MVC avec séparation stricte des responsabilités. Développement de l\'interface utilisateur moderne avec JavaFX et CSS (20+ écrans). Conception et optimisation de la base de données MySQL (8 tables normalisées). Défi: synchronisation temps réel des résultats. Résultats: application stable pour 500+ participants, temps de réponse <100ms, génération automatique des classements.',
                github: 'https://gricad-gitlab.univ-grenoble-alpes.fr/iut2-info-stud/2025-s2/r2.01.03/d2/kiouazan'
            },
            web: {
                title: 'Site Hardis Group',
                category: 'Prototype Web',
                year: '2024',
                images: ['img/Hardis.png', 'img/Hardis.png'],
                tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Design', 'Responsive', 'Git'],
                context: 'Création d\'un prototype d\'interface présentant l\'entreprise Hardis Group et sa démarche de transition écologique. Site vitrine avec animations et interactive elements.',
                role: 'Développement frontend complet avec HTML5/CSS3/JavaScript vanilla. Mise en place d\'interactions UI fluides (smooth scrolling, animations CSS, effects au hover). Design responsive mobile-first avec breakpoints optimisés. Résultats: temps chargement <1.5s, score Lighthouse 92+, 100% responsive sur tous les appareils.',
                github: 'https://github.com/Jolly-Ak/Hardis-Group'
            },
            game: {
                title: 'Sort Game',
                category: 'Game Development',
                year: '2023',
                images: ['img/sortgame.png', 'img/sortgame2.png'],
                tech: ['Python', 'Tkinter', 'POO', 'Algorithmes', 'Event-Driven'],
                context: 'Jeu de réflexion et de stratégie développé en Python utilisant la bibliothèque Tkinter pour l\'interface graphique. Système de scoring et de niveaux progressifs.',
                role: 'Conception de la logique du jeu en POO avec patterns (Factory, Observer). Développement de l\'interface graphique interactive Tkinter avec gestion d\'événements. Implémentation d\'algorithmes de tri pour la mécanique de jeu. Défi: optimisation du rendu en temps réel. Résultats: jeu fluide 60fps, système de progression 5+ niveaux, menus intuitifs.',
                github: 'https://github.com/Jolly-Ak/SortGame'
            },
            weave: {
                title: 'Weave - Plateforme de Soins',
                category: 'Produit logiciel & Data',
                year: '2025',
                images: ['img/weave_dashboard.png', 'img/weave_arch.png', 'img/weave_cicd.png'],
                tech: ['Architecture logicielle', 'PostgreSQL', 'Docker', 'API temps réel', 'CI/CD', 'Azure'],
                context: 'Face au vieillissement de la population, Weave centralise la coordination du maintien à domicile avec un focus sur les flux de données et la fiabilité opérationnelle. Plateforme SaaS pour coordinateurs de soins.',
                role: 'Founder & Lead Developer. Conception de l\'architecture microservices (API, workers, dashboards). Modélisation de base de données complexe pour patients/intervenants/planning. Orchestration Docker + CI/CD Pipeline. Défis surmontés: synchronisation temps réel d\'équipes distribuées, scalabilité pour 1000+ utilisateurs simultanés. Résultats: 99.8% uptime, 50ms latence API, adoption par 5 structures pilotes.',
                github: 'https://github.com/anaskiouaz/WEAVE'
            }
        };
        
        this.modal = null;
        this.fullscreenViewer = null;
        this.currentProject = null;
        this.scrollPosition = 0;
        this.defaultFallbackImage = 'img/project_placeholder.svg';
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

    openModal(projectId) {
        const project = this.projectData[projectId];
        if (!project) return;
        
        this.currentProject = projectId;
        this.scrollPosition = window.pageYOffset;
        
        document.body.classList.add('modal-open');
        document.body.style.top = `-${this.scrollPosition}px`;
        
        this.populateModal(project);
        
        requestAnimationFrame(() => {
            this.modal.classList.add('active');
        });
    }

    populateModal(project) {
        const category = this.modal.querySelector('.modal-category');
        const year = this.modal.querySelector('.modal-year');
        const title = this.modal.querySelector('.modal-title');
        const techStack = this.modal.querySelector('.modal-tech-stack');
        const context = this.modal.querySelector('.modal-context');
        const role = this.modal.querySelector('.modal-role');
        const githubLink = this.modal.querySelector('.modal-btn-github');
        const gallery = this.modal.querySelector('.modal-gallery');
        
        category.textContent = project.category;
        year.textContent = project.year;
        title.textContent = project.title;
        context.textContent = project.context;
        role.textContent = project.role;
        githubLink.href = project.github;
        
        techStack.innerHTML = project.tech
            .map(tech => `<span>${tech}</span>`)
            .join('');
        
        gallery.innerHTML = project.images
            .map((image, index) => `<img src="${image}" alt="${project.title} - visuel ${index + 1}" class="gallery-image">`)
            .join('');
        
        const galleryImages = gallery.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
            img.addEventListener('error', () => {
                if (img.dataset.fallbackApplied === 'true') return;
                img.dataset.fallbackApplied = 'true';
                img.src = this.defaultFallbackImage;
            });

            img.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openFullscreen(img.src, project.title);
            });
        });
    }

    closeModal() {
        this.modal.classList.remove('active');
        
        setTimeout(() => {
            document.body.classList.remove('modal-open');
            document.body.style.top = '';
            window.scrollTo(0, this.scrollPosition || 0);
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
    new ProjectsSystem();
});
