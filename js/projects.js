class ProjectsSystem {
    constructor() {
        this.projectData = {
            wirepas: {
                title: 'IA Wirepas France',
                category: 'Intelligence Artificielle',
                year: '2026',
                images: ['img/wirepas_sequence.svg', 'img/wirepas_sequence.svg'],
                tech: ['OpenRouter', 'Claude 4.5', 'Streamlit', 'Python', 'Scrapling', 'HubSpot'],
                context: 'Développement d\'une application (Web/Desktop) durant mon stage chez Wirepas France visant à automatiser la détection et la recommandation de prospects pour les salons professionnels. Le système utilise des pipelines de données complexes intégrant du scraping avancé et des modèles d\'IA de pointe.',
                role: 'Conception de l\'architecture logicielle, implémentation des pipelines de traitement (scraping, enrichissement via APIs, routage IA via OpenRouter) et création du dashboard de visualisation sous Streamlit.',
                github: 'https://github.com/anaskiouaz/portfolio'
            },
            ml: {
                title: 'Classification de Dépêches',
                category: 'Machine Learning',
                year: '2025',
                images: ['img/ML1.png', 'img/ML1.png', 'img/ML1.png'],
                tech: ['Java', 'NLP', 'TF-IDF', 'KNN', 'Machine Learning'],
                context: 'Développement d\'un système de classification automatique d\'articles de presse utilisant des techniques de traitement du langage naturel. Le projet implémente une approche par sacs de mots.',
                role: 'Conception complète de l\'architecture du système, implémentation de l\'algorithme TF-IDF pour la vectorisation des textes, optimisation des hyperparamètres KNN.',
                github: 'https://github.com/Jolly-Ak/News-Classification-ML'
            },
            cnn: {
                title: 'Classification par CNN',
                category: 'Deep Learning',
                year: '2024',
                images: ['img/1745556736982.jpg', 'img/1745556736982.jpg'],
                tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Data Augmentation', 'NumPy'],
                context: 'Implémentation d\'un réseau de neurones convolutifs profond pour la classification d\'images. Le projet inclut un pipeline complet de prétraitement des données.',
                role: 'Design de l\'architecture du réseau neuronal avec multiples couches convolutives et pooling, mise en place de techniques de régularisation.',
                github: 'https://github.com/Jolly-Ak/Valorant-Kill-Detection'
            },
            javafx: {
                title: 'ERP Grand Prix',
                category: 'Application Desktop',
                year: '2025',
                images: ['img/JavaFX.png', 'img/JavaFX.png'],
                tech: ['Java', 'JavaFX', 'MySQL', 'MVC', 'JDBC', 'Scene Builder'],
                context: 'Application de gestion complète pour événements sportifs développée dans le cadre d\'un projet universitaire. L\'application permet la gestion des participants et des épreuves.',
                role: 'Architecture complète en pattern MVC, développement de l\'interface utilisateur moderne avec JavaFX et CSS, conception de la base de données MySQL.',
                github: 'https://gricad-gitlab.univ-grenoble-alpes.fr/iut2-info-stud/2025-s2/r2.01.03/d2/kiouazan'
            },
            web: {
                title: 'Site Hardis Group',
                category: 'Développement Web',
                year: '2024',
                images: ['img/Hardis.png', 'img/Hardis.png'],
                tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Responsive Design', 'Git'],
                context: 'Création d\'un site web institutionnel éducatif présentant l\'entreprise Hardis Group et sa démarche de transition écologique.',
                role: 'Développement frontend complet avec HTML5/CSS3, implémentation de l\'interactivité JavaScript, création d\'un design responsive mobile-first.',
                github: 'https://github.com/Jolly-Ak/Hardis-Group'
            },
            game: {
                title: 'Sort Game',
                category: 'Game Development',
                year: '2023',
                images: ['img/sortgame.png', 'img/sortgame.png'],
                tech: ['Python', 'Tkinter', 'POO', 'Algorithmes', 'Event-Driven'],
                context: 'Jeu de réflexion et de stratégie développé en Python utilisant la bibliothèque Tkinter pour l\'interface graphique.',
                role: 'Conception de la logique du jeu en programmation orientée objet, développement de l\'interface graphique interactive avec Tkinter.',
                github: 'https://github.com/Jolly-Ak/SortGame'
            },
            weave: {
                title: 'Weave - Plateforme de Soins',
                category: 'Full Stack Web & Mobile',
                year: '2025',
                images: ['img/weave_dashboard.png', 'img/weave_arch.png', 'img/weave_cicd.png'],
                tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Azure', 'Socket.IO', 'CI/CD'],
                context: 'Face au vieillissement de la population, Weave centralise la coordination du maintien à domicile. C\'est une plateforme collaborative qui connecte aidants et seniors.',
                role: 'Founder & Lead Developer. Conception de l\'architecture micro-services et de la base de données PostgreSQL.',
                github: 'https://github.com/anaskiouaz/WEAVE'
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
                img.src = 'img/wirepas_sequence.svg';
            }, { once: true });

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
