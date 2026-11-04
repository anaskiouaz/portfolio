# Portfolio — The Lagoon Build

Portfolio Next.js App Router d’Anas KIOUAZ. Le site conserve les projets, liens, compétences et informations de contact de la version statique, mais les présente dans une architecture orientée storytelling.

## Développement

```bash
npm install
npm run dev
```

Le build de production est vérifié avec `npm run build`.

## Architecture

- `app/` : pages App Router, layout global, animations Lenis + GSAP/ScrollTrigger.
- `data/content.ts` : source unique des contenus et projets.
- `app/globals.css` : tokens Lagoon, responsive et composants visuels.
- `public/img` et `public/cv` : assets existants conservés.
- `components/ui` : primitives accessibles adaptées au design (inspiration shadcn/ui).

## Dépendances ajoutées

- `next`, `react`, `typescript` : socle App Router.
- `motion` : disponible pour les transitions de composants.
- `gsap` : reveals et ScrollTrigger.
- `@studio-freight/lenis` : smooth scroll.
- `lucide-react` : icônes SVG accessibles.
- `tailwindcss` : pipeline utilitaire et tokens CSS, avec le rendu principal écrit sur mesure.

Les interactions retenues sont la trace blueprint, le smooth scroll, le preloader, les reveals au scroll et la palette Cmd/Ctrl+K. Aucun composant externe n’a été importé brut ; les primitives UI sont adaptées localement.

## À renseigner ensuite

Les visuels actuellement utilisés sont les assets existants du portfolio. Les chiffres EventMiner et les images de démonstration peuvent être remplacés par des captures validées ou des métriques publiques avant mise en ligne.
