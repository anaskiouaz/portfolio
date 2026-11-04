import type { Metadata } from 'next';
import './globals.css';
import { MotionShell } from './components/motion-shell';

export const metadata: Metadata = {
  title: 'Anas KIOUAZ — Je construis, je teste, je livre.',
  description: 'Portfolio d’Anas KIOUAZ, développeur backend, data et IA à Grenoble.',
  metadataBase: new URL('https://anaskiouaz.github.io/portfolio'),
  icons: { icon: '/img/logo.png' },
  openGraph: {
    title: 'Anas KIOUAZ — Développeur backend, data & IA',
    description: 'Étudiant en 3ᵉ année de BUT Informatique. Prototypes rapides, systèmes fiables.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body><MotionShell>{children}</MotionShell></body>
    </html>
  );
}
