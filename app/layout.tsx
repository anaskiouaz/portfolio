import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { MotionShell } from './components/motion-shell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

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
      <body className={`${inter.variable} ${space.variable} ${mono.variable}`}><MotionShell>{children}</MotionShell></body>
    </html>
  );
}
