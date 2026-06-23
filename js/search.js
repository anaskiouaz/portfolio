// ============================================
// SKILLS SEARCH SYSTEM
// ============================================

const CATEGORY_COLORS = {
    language:  '#00ff88',
    ai:        '#bf5fff',
    data:      '#00e5ff',
    framework: '#ccff00',
    devops:    '#ff0080',
    tool:      '#ff8c00'
};

const CATEGORY_LABELS = {
    language:  { fr: 'Langage', en: 'Language' },
    ai:        { fr: 'IA & ML', en: 'AI & ML' },
    data:      { fr: 'Data', en: 'Data' },
    framework: { fr: 'Framework', en: 'Framework' },
    devops:    { fr: 'DevOps', en: 'DevOps' },
    tool:      { fr: 'Outil', en: 'Tool' }
};

const ORIGIN_META = {
    but:      { icon: '🎓', fr: 'BUT Informatique',       en: 'BUT Computer Science', color: '#00e5ff' },
    stage:    { icon: '💼', fr: 'Stage professionnel',    en: 'Internship',           color: '#00ff88' },
    personal: { icon: '🔧', fr: 'Apprentissage personnel',en: 'Self-learning',        color: '#ff8c00' },
    project:  { icon: '📁', fr: 'Projet universitaire',   en: 'University project',   color: '#bf5fff' }
};

const PROJECT_NAMES = {
    weave: 'WEAVE', sae4: 'SAE4', wirepas: 'ExpoMiner',
    ml: 'Classification ML', cnn: 'CNN Deep Learning',
    javafx: 'ERP Grand Prix', web: 'Site Hardis', game: 'Sort Game'
};

const SKILLS_DB = [
    // --- LANGAGES ---
    { id: 'python', name: 'Python', aliases: ['py', 'script python', 'python3'], level: 75, category: 'language', icon: '🐍',
      description: { fr: 'IA, scraping, data science, automatisation de pipelines', en: 'AI, scraping, data science, pipeline automation' },
      origins: [
          { type: 'but',      fr: 'BUT Informatique S1→S4 — algorithmique, IA, scripts Python',          en: 'BUT Inf. S1→S4 — algorithms, AI, Python scripting' },
          { type: 'stage',    fr: 'Stage Wirepas 2025 — pipeline NLP, enrichissement de données',         en: 'Wirepas internship 2025 — NLP pipeline, data enrichment' },
          { type: 'personal', fr: 'Projets personnels : CNN (TensorFlow), classification ML',              en: 'Personal projects: CNN (TensorFlow), ML classification' }
      ], projects: ['wirepas', 'cnn', 'game'] },

    { id: 'java', name: 'Java', aliases: ['javase', 'jdk', 'java se'], level: 85, category: 'language', icon: '☕',
      description: { fr: 'POO avancée, applications desktop, algorithmes, architecture MVC', en: 'Advanced OOP, desktop apps, algorithms, MVC architecture' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S1→S4 — POO avancée, patterns de conception', en: 'BUT Inf. S1→S4 — advanced OOP, design patterns' },
          { type: 'project', fr: 'ERP Grand Prix — JavaFX + MySQL, gestion de 500+ participants', en: 'ERP Grand Prix — JavaFX + MySQL, 500+ participants management' },
          { type: 'project', fr: 'Classification de Dépêches — TF-IDF/KNN implémentés en Java',  en: 'News Classification — TF-IDF/KNN implemented in Java' }
      ], projects: ['javafx', 'ml'] },

    { id: 'typescript', name: 'TypeScript', aliases: ['ts', 'node ts', 'type'], level: 82, category: 'language', icon: '📘',
      description: { fr: 'Typage statique, monorepo, développement fullstack', en: 'Static typing, monorepo, fullstack development' },
      origins: [
          { type: 'stage', fr: 'Stage Wirepas 2025 — architecture monorepo TypeScript (Backend + Frontend)', en: 'Wirepas internship 2025 — TypeScript monorepo architecture' }
      ], projects: ['wirepas'] },

    { id: 'javascript', name: 'JavaScript', aliases: ['js', 'vanilla', 'es6', 'ecmascript'], level: 82, category: 'language', icon: '📜',
      description: { fr: 'Frontend interactif, DOM, fetch API, interactions UI', en: 'Interactive frontend, DOM, fetch API, UI interactions' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S1→S2 — bases JS, DOM, requêtes AJAX',  en: 'BUT Inf. S1→S2 — JS basics, DOM, AJAX' },
          { type: 'project', fr: 'Site Hardis Group — animations, smooth scroll, hover effects', en: 'Hardis Group site — animations, smooth scroll, hover effects' },
          { type: 'personal', fr: 'Portfolio — i18n, animations sur mesure, effets visuels',   en: 'Portfolio — custom i18n, animations, visual effects' }
      ], projects: ['web'] },

    { id: 'cpp', name: 'C++', aliases: ['c plus plus', 'cpp', 'c++11', 'stl'], level: 70, category: 'language', icon: '⚡',
      description: { fr: 'Programmation système, performance, algorithmique avancée (en cours)', en: 'Systems programming, performance, advanced algorithms (ongoing)' },
      origins: [
          { type: 'but', fr: 'BUT Informatique S3→S4 — algorithmique, structures de données, STL', en: 'BUT Inf. S3→S4 — algorithms, data structures, STL' }
      ], projects: [] },

    { id: 'php', name: 'PHP', aliases: ['php8', 'php 8', 'backend php'], level: 80, category: 'language', icon: '🐘',
      description: { fr: 'Backend web, API REST, Symfony, Doctrine ORM', en: 'Web backend, REST API, Symfony, Doctrine ORM' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S3→S4 — développement web backend',    en: 'BUT Inf. S3→S4 — backend web development' },
          { type: 'project', fr: 'SAE4 — refonte back-office Symfony 7 + API REST',       en: 'SAE4 — Symfony 7 back-office & REST API refactor' },
          { type: 'project', fr: 'WEAVE — API Symfony pour coordination des aidants',     en: 'WEAVE — Symfony API for caregiver coordination' }
      ], projects: ['sae4', 'weave'] },

    { id: 'sql', name: 'SQL', aliases: ['sql', 'requete', 'query', 'select', 'jointure'], level: 82, category: 'data', icon: '🗃️',
      description: { fr: 'Requêtes complexes, jointures, normalisation, transactions', en: 'Complex queries, joins, normalization, transactions' },
      origins: [
          { type: 'but', fr: 'BUT Informatique S1→S4 — bases de données, normalisation 3FN', en: 'BUT Inf. S1→S4 — databases, 3NF normalization' }
      ], projects: ['sae4', 'weave', 'javafx'] },

    // --- FRAMEWORKS ---
    { id: 'symfony', name: 'Symfony', aliases: ['symfony 7', 'php framework', 'doctrine'], level: 85, category: 'framework', icon: '🎯',
      description: { fr: 'Backend PHP, ORM Doctrine, services, API REST, tests', en: 'PHP backend, Doctrine ORM, services, REST API, testing' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S3 — framework Symfony, MVC, Doctrine',         en: 'BUT Inf. S3 — Symfony, MVC, Doctrine ORM' },
          { type: 'project', fr: 'SAE4 — chef de projet, refonte back-office Symfony 7',           en: 'SAE4 — project lead, Symfony 7 back-office refactor' },
          { type: 'project', fr: 'WEAVE — API REST Symfony, modélisation patients/planning',       en: 'WEAVE — Symfony REST API, patient/schedule modeling' }
      ], projects: ['sae4', 'weave'] },

    { id: 'react', name: 'React', aliases: ['reactjs', 'react.js', 'hooks', 'composant'], level: 80, category: 'framework', icon: '⚛️',
      description: { fr: 'Composants, hooks, state management, SPA', en: 'Components, hooks, state management, SPA' },
      origins: [
          { type: 'stage', fr: 'Stage Wirepas 2025 — dashboard React pour la plateforme ExpoMiner', en: 'Wirepas 2025 — React dashboard for ExpoMiner platform' }
      ], projects: ['wirepas'] },

    { id: 'nodejs', name: 'Node.js', aliases: ['node', 'nodejs', 'express', 'express.js'], level: 80, category: 'framework', icon: '🟢',
      description: { fr: 'Serveurs Express, API REST, workers, pipelines de données', en: 'Express servers, REST API, workers, data pipelines' },
      origins: [
          { type: 'stage', fr: 'Stage Wirepas 2025 — backend Node.js 20 + Express.js, pipeline end-to-end', en: 'Wirepas 2025 — Node.js 20 + Express.js backend, end-to-end pipeline' }
      ], projects: ['wirepas'] },

    { id: 'javafx', name: 'JavaFX', aliases: ['javafx', 'scene builder', 'fxml', 'ihm'], level: 85, category: 'framework', icon: '🖥️',
      description: { fr: 'IHM desktop Java, Scene Builder, CSS, MVC', en: 'Java desktop GUI, Scene Builder, CSS, MVC' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S2→S3 — développement IHM avec JavaFX',        en: 'BUT Inf. S2→S3 — GUI development with JavaFX' },
          { type: 'project', fr: 'ERP Grand Prix — 20+ écrans, résultats temps réel, 500 participants', en: 'ERP Grand Prix — 20+ screens, real-time results, 500 participants' }
      ], projects: ['javafx'] },

    { id: 'android', name: 'Android', aliases: ['android studio', 'mobile', 'espresso', 'apk'], level: 70, category: 'framework', icon: '📱',
      description: { fr: 'Développement mobile Android, tests Espresso, Retrofit', en: 'Android mobile development, Espresso testing, Retrofit' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S3→S4 — développement mobile Android',   en: 'BUT Inf. S3→S4 — Android mobile development' },
          { type: 'project', fr: 'SAE4 — maintenance app Android + tests Espresso automatisés', en: 'SAE4 — Android app maintenance + automated Espresso tests' }
      ], projects: ['sae4'] },

    { id: 'api', name: 'API REST', aliases: ['api', 'rest', 'restful', 'http', 'endpoint', 'backend api'], level: 85, category: 'framework', icon: '🔌',
      description: { fr: 'Conception et consommation d\'APIs RESTful, JSON, OAuth', en: 'RESTful API design and consumption, JSON, OAuth' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S2→S4 — conception d\'APIs REST, authentification', en: 'BUT Inf. S2→S4 — REST API design, authentication' },
          { type: 'project', fr: 'WEAVE — API temps réel pour coordination des aidants',             en: 'WEAVE — real-time API for caregiver coordination' },
          { type: 'stage',   fr: 'Stage Wirepas — 8+ APIs intégrées (SIRENE, INPI, GLEIF, HubSpot)', en: 'Wirepas — 8+ APIs integrated (SIRENE, INPI, GLEIF, HubSpot)' }
      ], projects: ['weave', 'sae4', 'wirepas'] },

    // --- IA / ML ---
    { id: 'tensorflow', name: 'TensorFlow / Keras', aliases: ['tensorflow', 'tf', 'keras', 'deep learning', 'reseau neurones', 'cnn'], level: 75, category: 'ai', icon: '🧠',
      description: { fr: 'Deep learning, CNN, classification d\'images, data augmentation', en: 'Deep learning, CNN, image classification, data augmentation' },
      origins: [
          { type: 'personal', fr: 'Projet CNN personnel — réseau 6 couches convolutives, 94.2% accuracy', en: 'Personal CNN project — 6-layer convolutional network, 94.2% accuracy' },
          { type: 'personal', fr: 'Auto-formation deep learning : cours en ligne, papers',               en: 'Self-learning deep learning: online courses, papers' }
      ], projects: ['cnn'] },

    { id: 'nlp', name: 'NLP', aliases: ['nlp', 'traitement langage', 'natural language', 'texte', 'text processing', 'tokenisation', 'tf-idf', 'tfidf'], level: 80, category: 'ai', icon: '💬',
      description: { fr: 'Tokenisation, TF-IDF, embeddings, classification de texte', en: 'Tokenization, TF-IDF, embeddings, text classification' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S3 — module traitement du langage naturel',             en: 'BUT Inf. S3 — natural language processing module' },
          { type: 'project', fr: 'Classification de Dépêches — TF-IDF + KNN, 89% accuracy',               en: 'News Classification — TF-IDF + KNN, 89% accuracy' },
          { type: 'stage',   fr: 'Stage Wirepas 2025 — NLP local (TF-IDF + MiniLM-L12-v2 embeddings)',    en: 'Wirepas 2025 — local NLP (TF-IDF + MiniLM-L12-v2 embeddings)' }
      ], projects: ['wirepas', 'ml'] },

    { id: 'ml_gen', name: 'Machine Learning', aliases: ['ml', 'apprentissage automatique', 'knn', 'kmeans', 'k-means', 'classification', 'clustering', 'modele'], level: 78, category: 'ai', icon: '🤖',
      description: { fr: 'Classification, clustering, validation croisée, évaluation de modèles', en: 'Classification, clustering, cross-validation, model evaluation' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S3→S4 — modules IA et machine learning',          en: 'BUT Inf. S3→S4 — AI and ML modules' },
          { type: 'project', fr: 'Classification de Dépêches — KNN, TF-IDF, 15+ catégories, 89%',   en: 'News Classification — KNN, TF-IDF, 15+ categories, 89%' },
          { type: 'project', fr: 'SAE4 — K-Means clustering sur données de stages',                  en: 'SAE4 — K-Means clustering on internship data' }
      ], projects: ['ml', 'cnn', 'sae4'] },

    { id: 'llm', name: 'LLM & Agents IA', aliases: ['llm', 'gpt', 'agent', 'ia generative', 'prompt engineering', 'rag', 'rag retrieval'], level: 72, category: 'ai', icon: '✨',
      description: { fr: 'Scoring par LLM, prompt engineering, agents IA, RAG', en: 'LLM scoring, prompt engineering, AI agents, RAG' },
      origins: [
          { type: 'stage',   fr: 'Stage Wirepas 2025 — scoring de prospects B2B via LLM, agents IA',    en: 'Wirepas 2025 — B2B prospect scoring via LLM, AI agents' },
          { type: 'personal', fr: 'Auto-formation : RAG, prompt engineering, architectures multi-agents', en: 'Self-learning: RAG, prompt engineering, multi-agent architectures' }
      ], projects: ['wirepas'] },

    // --- DATA ---
    { id: 'postgresql', name: 'PostgreSQL', aliases: ['postgres', 'pg', 'psql', 'bdd relationnelle', '3fn', '3nf', 'normalisation'], level: 82, category: 'data', icon: '🐘',
      description: { fr: 'BDD relationnelle, 3FN, optimisation, indexation, schémas complexes', en: 'Relational DB, 3NF normalization, optimization, complex schemas' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S3→S4 — bases de données avancées, normalisation',   en: 'BUT Inf. S3→S4 — advanced databases, normalization' },
          { type: 'project', fr: 'SAE4 — refonte schéma 3FN, PostgreSQL 18, chef de projet',            en: 'SAE4 — 3NF schema refactor, PostgreSQL 18, project lead' },
          { type: 'project', fr: 'WEAVE — modélisation patients/intervenants/planning (prix meilleur)',  en: 'WEAVE — patient/caregiver/schedule modeling (best project award)' }
      ], projects: ['sae4', 'weave'] },

    { id: 'mysql', name: 'MySQL', aliases: ['mysql', 'mariadb', 'base de données'], level: 80, category: 'data', icon: '🗄️',
      description: { fr: 'BDD relationnelle, schéma normalisé, JDBC, requêtes optimisées', en: 'Relational DB, normalized schema, JDBC, optimized queries' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S1→S3 — MySQL, modélisation entité-association', en: 'BUT Inf. S1→S3 — MySQL, entity-relationship modeling' },
          { type: 'project', fr: 'ERP Grand Prix — 8 tables normalisées, gestion temps réel',       en: 'ERP Grand Prix — 8 normalized tables, real-time management' }
      ], projects: ['javafx'] },

    { id: 'pandas', name: 'Pandas / NumPy', aliases: ['pandas', 'numpy', 'dataframe', 'data science', 'analyse donnees', 'dataviz'], level: 75, category: 'data', icon: '📊',
      description: { fr: 'Manipulation de données, DataFrames, analyse, visualisation', en: 'Data manipulation, DataFrames, analysis, visualization' },
      origins: [
          { type: 'personal', fr: 'Projets ML — preprocessing datasets pour CNN et classification',   en: 'ML projects — dataset preprocessing for CNN and classification' },
          { type: 'stage',    fr: 'Stage Wirepas — enrichissement et nettoyage de données prospects', en: 'Wirepas — prospect data enrichment and cleaning' }
      ], projects: ['wirepas', 'cnn', 'ml'] },

    // --- DEVOPS ---
    { id: 'docker', name: 'Docker', aliases: ['docker', 'conteneur', 'container', 'conteneurisation', 'docker-compose', 'compose'], level: 72, category: 'devops', icon: '🐳',
      description: { fr: 'Conteneurisation, docker-compose multi-services, déploiement reproductible', en: 'Containerization, multi-service docker-compose, reproducible deployment' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique S4 — module DevOps, conteneurisation applicative',          en: 'BUT Inf. S4 — DevOps module, application containerization' },
          { type: 'project', fr: 'SAE4 — 3 services orchestrés (PG18, PHP-FPM 8.4, Nginx) via docker-compose', en: 'SAE4 — 3 orchestrated services (PG18, PHP-FPM 8.4, Nginx) via compose' },
          { type: 'project', fr: 'WEAVE — orchestration Docker + CI/CD Pipeline Azure',                        en: 'WEAVE — Docker orchestration + Azure CI/CD Pipeline' }
      ], projects: ['sae4', 'weave', 'wirepas'] },

    { id: 'cicd', name: 'CI/CD', aliases: ['ci cd', 'github actions', 'gitlab ci', 'pipeline', 'integration continue', 'devops pipeline'], level: 68, category: 'devops', icon: '🔄',
      description: { fr: 'Pipelines automatisés, tests, build, déploiement continu', en: 'Automated pipelines, testing, build, continuous deployment' },
      origins: [
          { type: 'stage',   fr: 'Stage Wirepas 2025 — CI/CD GitHub Actions pour ExpoMiner',  en: 'Wirepas 2025 — GitHub Actions CI/CD for ExpoMiner', projectId: 'wirepas' },
          { type: 'project', fr: 'SAE4 — base CI/CD GitLab avec traçabilité Issue-Branche',   en: 'SAE4 — GitLab CI/CD base with Issue-Branch traceability', projectId: 'sae4' },
          { type: 'project', fr: 'WEAVE — CI/CD Azure, pipeline de test automatisé',          en: 'WEAVE — Azure CI/CD, automated test pipeline', projectId: 'weave' }
      ], projects: ['wirepas', 'sae4', 'weave'] },

    { id: 'git', name: 'Git', aliases: ['git', 'github', 'gitlab', 'versioning', 'branches', 'merge', 'pull request'], level: 87, category: 'devops', icon: '📦',
      description: { fr: 'Versioning, workflows en équipe, branches, revues de code', en: 'Versioning, team workflows, branching, code reviews' },
      origins: [
          { type: 'but', fr: 'BUT Informatique S1→S4 — utilisé sur tous les projets', en: 'BUT Inf. S1→S4 — used on every project' }
      ], projects: ['sae4', 'weave', 'wirepas', 'ml', 'cnn', 'javafx', 'web', 'game'] },

    { id: 'playwright', name: 'Playwright', aliases: ['playwright', 'scraping', 'web scraping', 'automation', 'scraper'], level: 75, category: 'tool', icon: '🎭',
      description: { fr: 'Scraping web, détection heuristique CSS, automatisation navigateur', en: 'Web scraping, heuristic CSS detection, browser automation' },
      origins: [
          { type: 'stage', fr: 'Stage Wirepas 2025 — scraping multi-site de 12+ salons professionnels', en: 'Wirepas 2025 — multi-site scraping for 12+ trade shows' }
      ], projects: ['wirepas'] },

    { id: 'cypress', name: 'Cypress', aliases: ['cypress', 'test e2e', 'end to end', 'tests ui'], level: 65, category: 'tool', icon: '🌲',
      description: { fr: 'Tests E2E, parcours utilisateur automatisés, CI', en: 'E2E testing, automated user flows, CI' },
      origins: [
          { type: 'project', fr: 'SAE4 — tests E2E du back-office Symfony, parcours administrateur', en: 'SAE4 — Symfony back-office E2E tests, admin flows' }
      ], projects: ['sae4'] },

    { id: 'agile', name: 'Agile / Scrum', aliases: ['agile', 'scrum', 'kanban', 'sprint', 'linear', 'gestion projet', 'chef de projet'], level: 78, category: 'tool', icon: '📋',
      description: { fr: 'Sprints, Kanban, pilotage d\'équipe, rétrospectives, Linear', en: 'Sprints, Kanban, team leadership, retrospectives, Linear' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique — méthodologie projet intégrée aux SAE',                   en: 'BUT Inf. — project methodology embedded in all SAEs' },
          { type: 'project', fr: 'SAE4 — chef de projet (6 devs), Kanban Linear, traçabilité Issue-Branche',  en: 'SAE4 — project lead (6 devs), Linear Kanban, Issue-Branch tracking' },
          { type: 'project', fr: 'WEAVE — sprints Agile bi-hebdomadaires, revues croisées (1ère promo)',      en: 'WEAVE — bi-weekly Agile sprints, cross reviews (1st ranked cohort)' }
      ], projects: ['sae4', 'weave'] },

    { id: 'architecture', name: 'Architecture logicielle', aliases: ['architecture', 'design pattern', 'microservices', 'mvc', 'patron', 'conception', 'monorepo'], level: 78, category: 'tool', icon: '🏗️',
      description: { fr: 'MVC, microservices, monorepo, patterns Factory/Observer/Builder', en: 'MVC, microservices, monorepo, Factory/Observer/Builder patterns' },
      origins: [
          { type: 'but',     fr: 'BUT Informatique — cours design patterns et architecture logicielle',          en: 'BUT Inf. — software architecture and design patterns courses' },
          { type: 'project', fr: 'WEAVE — architecture microservices (API, workers, dashboards)',                en: 'WEAVE — microservices architecture (API, workers, dashboards)' },
          { type: 'stage',   fr: 'Stage Wirepas — monorepo TypeScript, pipeline end-to-end 10h→30min',          en: 'Wirepas — TypeScript monorepo, end-to-end pipeline 10h→30min' }
      ], projects: ['weave', 'wirepas', 'javafx', 'game'] },

    // --- LANGUES ---
    { id: 'francais', name: 'Français', aliases: ['francais', 'french', 'fr'], level: 100, category: 'language', icon: '🇫🇷',
      description: { fr: 'Langue maternelle — natif', en: 'Native language' },
      origins: [{ type: 'personal', fr: 'Langue maternelle', en: 'Native language' }], projects: [] },

    { id: 'anglais', name: 'Anglais', aliases: ['anglais', 'english', 'b2', 'en'], level: 85, category: 'language', icon: '🇬🇧',
      description: { fr: 'Niveau B2 — communication professionnelle, documentation technique', en: 'B2 level — professional communication, technical documentation' },
      origins: [
          { type: 'but',      fr: 'BUT Informatique S1→S4 — cours d\'anglais professionnel', en: 'BUT Inf. S1→S4 — professional English courses' },
          { type: 'personal', fr: 'Documentation technique et projets en anglais au quotidien', en: 'Technical docs and projects in English daily' }
      ], projects: [] },

    { id: 'arabe', name: 'Arabe', aliases: ['arabe', 'arabic', 'ar'], level: 75, category: 'language', icon: '🇸🇦',
      description: { fr: 'Niveau B2 — arabe dialectal et standard', en: 'B2 level — dialectal and standard Arabic' },
      origins: [{ type: 'personal', fr: 'Bilingue familial', en: 'Family bilingual' }], projects: [] }
];

// --- PROJECTS DB ---
const PROJECTS_DB = [
    { id: 'weave', name: 'WEAVE — Plateforme d\'aide aux aidants', aliases: ['weave', 'aidant', 'plateforme'], category: 'project', icon: '🏆', 
      description: { fr: 'Projet élu meilleur de la promotion. Architecture data, modèle relationnel et flux d\'événements.', en: 'Best project award. Data architecture, relational model and event flows.' },
      tech: ['PostgreSQL', 'Docker', 'Architecture', 'Symfony'] },
    { id: 'sae4', name: 'Refonte qualité — Carnet de suivi de stage', aliases: ['sae4', 'stage', 'carnet', 'refonte'], category: 'project', icon: '📈',
      description: { fr: 'Refonte complète (back-office Symfony + app mobile Android + API REST + BDD PostgreSQL).', en: 'Complete refactoring (Symfony back-office + Android mobile app + REST API + PostgreSQL DB).' },
      tech: ['Symfony', 'Docker', 'PostgreSQL', 'Android', 'Cypress', 'K-Means'] },
    { id: 'wirepas', name: 'ExpoMiner - Plateforme IA Wirepas', aliases: ['expominer', 'wirepas', 'ia', 'scraping'], category: 'project', icon: '🤖',
      description: { fr: 'Automatisation qualification prospects B2B via scraping, enrichissement et scoring IA.', en: 'B2B prospect qualification automation via scraping, enrichment and AI scoring.' },
      tech: ['Node.js', 'TypeScript', 'React', 'Playwright'] },
    { id: 'ml', name: 'Classification de Dépêches', aliases: ['ml', 'classification', 'depeches', 'knn'], category: 'project', icon: '🧠',
      description: { fr: 'Système de classification automatique d\'articles avec NLP et KNN.', en: 'Automatic article classification system using NLP and KNN.' },
      tech: ['Java', 'NLP', 'TF-IDF'] },
    { id: 'cnn', name: 'Classification par CNN', aliases: ['cnn', 'deep learning', 'images', 'tensorflow'], category: 'project', icon: '🖼️',
      description: { fr: 'Réseau de neurones convolutifs pour classification d\'images.', en: 'Convolutional neural network for image classification.' },
      tech: ['Python', 'TensorFlow', 'Keras'] },
    { id: 'javafx', name: 'ERP Grand Prix', aliases: ['erp', 'grand prix', 'course', 'javafx'], category: 'project', icon: '🏎️',
      description: { fr: 'Application de gestion complète pour événements sportifs.', en: 'Complete management application for sporting events.' },
      tech: ['Java', 'JavaFX', 'MySQL'] },
    { id: 'web', name: 'Site Hardis Group', aliases: ['hardis', 'web', 'prototype'], category: 'project', icon: '🌐',
      description: { fr: 'Prototype d\'interface avec design responsive et interactions UI.', en: 'Interface prototype with responsive design and UI interactions.' },
      tech: ['HTML5', 'UI Design', 'Responsive'] },
    { id: 'game', name: 'Sort Game', aliases: ['game', 'jeu', 'sort'], category: 'project', icon: '🎮',
      description: { fr: 'Jeu de réflexion et stratégie avec interface Tkinter.', en: 'Puzzle and strategy game with Tkinter interface.' },
      tech: ['Python', 'Tkinter', 'POO'] }
];

// --- SEARCH LOGIC ---
function searchSkills(query) {
    if (!query) return [];
    const q = query.toLowerCase().trim();
    if (q.length < 1) return [];

    const scoredSkills = SKILLS_DB.map(s => {
        let score = 0;
        const name = s.name.toLowerCase();
        if (name === q) score = 100;
        else if (name.startsWith(q)) score = 80;
        else if (name.includes(q)) score = 60;
        if (s.aliases.some(a => a === q)) score = Math.max(score, 75);
        if (s.aliases.some(a => a.startsWith(q))) score = Math.max(score, 52);
        if (s.aliases.some(a => a.includes(q))) score = Math.max(score, 38);
        const desc = typeof s.description === 'object' ? s.description.fr : s.description;
        if (desc.toLowerCase().includes(q)) score = Math.max(score, 22);
        if (s.category.includes(q)) score = Math.max(score, 18);
        return { item: s, score, type: 'skill' };
    });

    const scoredProjects = PROJECTS_DB.map(p => {
        let score = 0;
        const name = p.name.toLowerCase();
        if (name === q) score = 100;
        else if (name.startsWith(q)) score = 80;
        else if (name.includes(q)) score = 60;
        if (p.aliases.some(a => a === q)) score = Math.max(score, 75);
        if (p.aliases.some(a => a.startsWith(q))) score = Math.max(score, 52);
        if (p.aliases.some(a => a.includes(q))) score = Math.max(score, 38);
        const desc = typeof p.description === 'object' ? p.description.fr : p.description;
        if (desc.toLowerCase().includes(q)) score = Math.max(score, 22);
        if (p.tech.some(t => t.toLowerCase().includes(q))) score = Math.max(score, 45);
        return { item: p, score, type: 'project' };
    });

    const allScored = [...scoredSkills, ...scoredProjects];

    return allScored
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map(x => x);
}

// --- RENDER ---
function renderSkillCard(skill) {
    const lang = (typeof i18n !== 'undefined') ? i18n.getCurrentLanguage() : 'fr';
    const color = CATEGORY_COLORS[skill.category] || '#00ff88';
    const catLabel = (CATEGORY_LABELS[skill.category] || {})[lang] || skill.category;
    const desc = typeof skill.description === 'object' ? skill.description[lang] : skill.description;
    const isFr = lang === 'fr';

    const originsHTML = skill.origins.map(o => {
        const meta = ORIGIN_META[o.type] || ORIGIN_META.personal;
        const metaLabel = meta[lang] || meta.fr;
        const oLabel = o[lang] || o.fr;
        const clickAttr = o.projectId ? ` onclick="if(window.projectsSystem){window.projectsSystem.openModal('${o.projectId}'); window.__search&&window.__search.close();}" style="cursor:pointer;" class="sr-origin sr-origin-clickable"` : ` class="sr-origin"`;
        return `<div${clickAttr} style="--o-col:${meta.color}">
            <span class="sr-origin-badge">${meta.icon} ${metaLabel}</span>
            <span class="sr-origin-text">${oLabel}</span>
        </div>`;
    }).join('');

    const projectsHTML = skill.projects.length
        ? skill.projects.map(p => `<button class="sr-proj-tag" data-pid="${p}" style="--p-col:${color}">${PROJECT_NAMES[p] || p}</button>`).join('')
        : `<span class="sr-no-proj">${isFr ? 'Aucun projet lié' : 'No linked project'}</span>`;

    return `
    <div class="search-result-card" style="--sc:${color}">
        <div class="src-header">
            <span class="src-icon">${skill.icon}</span>
            <div class="src-meta">
                <h3 class="src-name">${skill.name}</h3>
                <span class="src-cat" style="color:${color}">${catLabel}</span>
            </div>
            <div class="src-level">
                <span class="src-pct" style="color:${color}">${skill.level}%</span>
            </div>
        </div>
        <div class="src-bar-track">
            <div class="src-bar-fill" style="width:${skill.level}%;background:${color};box-shadow:0 0 10px ${color}88"></div>
        </div>
        <p class="src-desc">${desc}</p>
        <div class="src-section">
            <h4 class="src-section-title">${isFr ? "Où j'ai appris" : 'Where I learned'}</h4>
            <div class="src-origins">${originsHTML}</div>
        </div>
        <div class="src-section">
            <h4 class="src-section-title">${isFr ? 'Projets associés' : 'Related projects'}</h4>
            <div class="src-projects">${projectsHTML}</div>
        </div>
    </div>`;
}

function renderProjectCard(project) {
    const lang = (typeof i18n !== 'undefined') ? i18n.getCurrentLanguage() : 'fr';
    const color = '#3b82f6'; // Blue accent for projects
    const desc = typeof project.description === 'object' ? project.description[lang] : project.description;
    const isFr = lang === 'fr';

    const techHTML = project.tech.map(t => `<span class="sr-proj-tech">${t}</span>`).join('');

    return `
    <div class="search-result-card project-result" style="--sc:${color}; cursor: pointer;" data-pid="${project.id}" onclick="if(window.projectsSystem){window.projectsSystem.openModal('${project.id}'); window.__search.close();}">
        <div class="src-header">
            <span class="src-icon">${project.icon}</span>
            <div class="src-meta">
                <h3 class="src-name">${project.name}</h3>
                <span class="src-cat" style="color:${color}">Projet</span>
            </div>
            <div class="src-level">
                <span class="src-pct" style="color:${color}; font-size:0.8rem;">VOIR →</span>
            </div>
        </div>
        <p class="src-desc" style="margin-top:0.8rem;">${desc}</p>
        <div class="src-section" style="margin-top:1rem;">
            <div class="src-projects">${techHTML}</div>
        </div>
    </div>`;
}

function renderEmpty() {
    const lang = (typeof i18n !== 'undefined') ? i18n.getCurrentLanguage() : 'fr';
    const suggestions = ['Python', 'Docker', 'Machine Learning', 'React', 'PostgreSQL', 'Symfony', 'TypeScript', 'CI/CD'];
    return `<div class="sr-empty-state">
        <div class="sr-empty-hint">${lang === 'fr' ? 'Recherchez une compétence, un langage ou une technologie…' : 'Search for a skill, language or technology…'}</div>
        <div class="sr-suggestions">
            ${suggestions.map(s => `<button class="sr-sugg" onclick="document.getElementById('searchInput').value='${s}';window.__search&&window.__search.doSearch()">${s}</button>`).join('')}
        </div>
    </div>`;
}

// --- SYSTEM CLASS ---
class SearchSystem {
    constructor() {
        this.overlay = document.getElementById('searchOverlay');
        this.input   = document.getElementById('searchInput');
        this.results = document.getElementById('searchResults');
        this.trigger = document.getElementById('searchTrigger');
        this.mainTrigger = document.getElementById('mainSearchTrigger');
        if (!this.overlay) return;
        this.bind();
    }

    bind() {
        if (this.trigger) this.trigger.addEventListener('click', () => this.open());
        if (this.mainTrigger) this.mainTrigger.addEventListener('click', () => this.open());

        document.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); this.open(); }
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) this.close();
        });

        if (this.input) this.input.addEventListener('input', () => this.doSearch());

        this.overlay.addEventListener('click', e => {
            if (e.target === this.overlay) this.close();
        });

        if (this.results) {
            this.results.addEventListener('click', e => {
                const btn = e.target.closest('.sr-proj-tag');
                if (btn && window.projectsSystem) {
                    window.projectsSystem.openModal(btn.dataset.pid);
                    this.close();
                }
            });
        }

        window.addEventListener('languageChanged', () => {
            if (this.overlay.classList.contains('active')) this.doSearch();
        });
    }

    open() {
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        if (this.input) { this.input.value = ''; setTimeout(() => this.input.focus(), 60); }
        if (this.results) this.results.innerHTML = renderEmpty();
    }

    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    doSearch() {
        if (!this.input || !this.results) return;
        const q = this.input.value.trim();
        if (!q) { this.results.innerHTML = renderEmpty(); return; }
        const found = searchSkills(q);
        const lang = (typeof i18n !== 'undefined') ? i18n.getCurrentLanguage() : 'fr';
        if (!found.length) {
            this.results.innerHTML = `<div class="sr-empty-state"><div class="sr-empty-hint">${lang === 'fr' ? 'Aucun résultat pour' : 'No result for'} <strong>"${q}"</strong></div></div>`;
        } else {
            this.results.innerHTML = found.map(itemObj => {
                if (itemObj.type === 'project') return renderProjectCard(itemObj.item);
                return renderSkillCard(itemObj.item);
            }).join('');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.__search = new SearchSystem();
});
