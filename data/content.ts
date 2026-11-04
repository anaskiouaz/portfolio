export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  problem: string;
  built: string;
  result: string;
  stack: string[];
  image: string;
  github?: string;
  featured?: boolean;
};

export const content = {
  identity: {
    name: 'Anas KIOUAZ',
    role: 'Développeur backend · data · IA',
    location: 'Grenoble, France',
    email: 'anas.kiouaz@gmail.com',
    github: 'https://github.com/anaskiouaz',
    linkedin: 'https://www.linkedin.com/in/anas-kiouaz-060689387/',
  },
  hero: {
    title: 'Je construis, je teste, je livre.',
    subtitle:
      "Étudiant en 3ᵉ année de BUT Informatique. J'apprends vite, je prototype encore plus vite, et je structure pour que ça tienne.",
  },
  about: {
    intro:
      "Je transforme des problèmes flous en systèmes qui tiennent la route. Du dashboard data à l'architecture backend, je passe du prototype à la version fiable sans perdre le fil.",
    method: [
      ['01', 'Tester', 'Rendre une idée tangible le plus tôt possible.'],
      ['02', 'Structurer', 'Modéliser les données, les flux et les responsabilités.'],
      ['03', 'Perfectionner', 'Mesurer, simplifier, livrer une base prête à évoluer.'],
    ],
  },
  projects: [
    {
      slug: 'eventminer',
      title: 'EventMiner',
      eyebrow: 'Stage · Wirepas France · 2026',
      year: '2026',
      summary: 'Pipeline IA pour transformer des listes de salons en prospects actionnables.',
      problem: 'La préparation commerciale de 12 salons annuels prenait jusqu’à trois jours de travail manuel.',
      built: 'Une application interne Node.js / TypeScript : ingestion CSV, PDF et web, enrichissement, scoring IA, dashboard et export CRM.',
      result: 'Un workflow ramené à moins de 30 minutes. Projet confidentiel, interface et architecture livrées pour la suite.',
      stack: ['Node.js 20', 'TypeScript', 'React', 'SQLite', 'Playwright', 'Claude API'],
      image: '/img/project_placeholder.svg',
      featured: true,
    },
    {
      slug: 'sae4',
      title: 'Carnet de suivi de stage',
      eyebrow: 'SAE S4 · Chef de projet · 2026',
      year: '2026',
      summary: 'Refonte qualité d’une application Symfony + Android pour une équipe de 6.',
      problem: 'Une VM lourde, un modèle de données fragile et des crashs Android ralentissaient toute l’équipe.',
      built: 'Conteneurisation Docker, schéma PostgreSQL en 3FN, tests E2E Cypress et pilotage Kanban avec traçabilité Git.',
      result: 'Démarrage local de 15 minutes à 1 minute. Requêtes par page : environ 30 à 3–4. Crashs critiques résolus.',
      stack: ['Symfony 7', 'PostgreSQL', 'Docker', 'Cypress', 'Android', 'GitLab CI'],
      image: '/img/sae4.svg',
      featured: true,
    },
    {
      slug: 'weave',
      title: 'WEAVE',
      eyebrow: 'Produit logiciel & data · 2025',
      year: '2025',
      summary: 'Plateforme de coordination autour d’une personne dépendante.',
      problem: 'Les aidants manquaient d’un espace commun pour synchroniser les informations et les actions.',
      built: 'Architecture microservices, API, workers, dashboards, modèle de données complexe et orchestration Docker.',
      result: 'Élu meilleur projet de la promotion et première équipe à livrer.',
      stack: ['PostgreSQL', 'Docker', 'API temps réel', 'CI/CD', 'Azure'],
      image: '/img/weave_dashboard.png',
      github: 'https://github.com/anaskiouaz/WEAVE',
      featured: true,
    },
    {
      slug: 'news-classification',
      title: 'Classification de dépêches',
      eyebrow: 'Machine learning · 2025',
      year: '2025',
      summary: 'Classification automatique d’articles avec NLP, TF-IDF et KNN.',
      problem: 'Organiser automatiquement des articles par catégorie sans annotation manuelle permanente.',
      built: 'Pipeline de préparation, représentation en sacs de mots et validation croisée.',
      result: 'Une base claire pour comparer les modèles et comprendre les compromis de classification.',
      stack: ['Java', 'NLP', 'TF-IDF', 'KNN'],
      image: '/img/ML1.png',
      github: 'https://github.com/Jolly-Ak/News-Classification-ML',
    },
    {
      slug: 'valorant-kill-detection',
      title: 'Kill detection',
      eyebrow: 'Computer vision · 2025',
      year: '2025',
      summary: 'Réseau convolutif pour détecter des événements critiques en temps réel.',
      problem: 'Identifier un événement visuel précis au milieu d’un flux de jeu.',
      built: 'Prétraitement, augmentation des données et entraînement d’un CNN avec TensorFlow/Keras.',
      result: 'Un pipeline complet, de l’image brute à la prédiction.',
      stack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'NumPy'],
      image: '/img/1745556736982.jpg',
      github: 'https://github.com/Jolly-Ak/Valorant-Kill-Detection',
    },
    {
      slug: 'erp-grand-prix',
      title: 'ERP Grand Prix',
      eyebrow: 'Application desktop · 2025',
      year: '2025',
      summary: 'Application de gestion d’événements sportifs pour 500+ participants.',
      problem: 'Centraliser participants, événements, résultats et classements avec une réponse immédiate.',
      built: 'Architecture MVC, 20+ écrans JavaFX et base MySQL normalisée.',
      result: 'Application stable, synchronisation des résultats et temps de réponse inférieur à 100 ms.',
      stack: ['Java', 'JavaFX', 'MySQL', 'MVC', 'JDBC'],
      image: '/img/JavaFX.png',
      github: 'https://gricad-gitlab.univ-grenoble-alpes.fr/iut2-info-stud/2025-s2/r2.01.03/d2/kiouazan',
    },
  ] satisfies Project[],
  skills: [
    { label: 'Backend & API', items: ['Node.js', 'TypeScript', 'Python', 'Java', 'Symfony'] },
    { label: 'Data & IA', items: ['PostgreSQL', 'SQLite', 'Prisma', 'NLP', 'TensorFlow'] },
    { label: 'Delivery', items: ['Docker', 'GitLab CI', 'GitHub Actions', 'Cypress', 'Playwright'] },
    { label: 'Exploration', items: ['DevSecOps', 'C++', 'Data engineering', 'Architecture'] },
  ],
  offCode: ['Course', 'Musculation', 'Jeux vidéo', 'Hardware', 'Montage vidéo'],
} as const;

export function getProject(slug: string) {
  return content.projects.find((project) => project.slug === slug);
}
