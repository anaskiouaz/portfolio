import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { notFound } from 'next/navigation';
import { content, getProject } from '@/data/content';

export function generateStaticParams() {
  return content.projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <main className="project-detail">
      <header className="site-header"><Link href="/" className="brand" aria-label="Retour accueil"><span>AK</span><em>BUILD LOG / 2026</em></Link><Link href="/#projects" className="back-link"><ArrowLeft size={16} /> Tous les projets</Link></header>
      <section className="detail-hero section-shell"><span className="section-index">{project.eyebrow}</span><h1>{project.title}</h1><p>{project.summary}</p><div className="detail-meta"><span>{project.year}</span><span>{project.stack.slice(0, 3).join(' · ')}</span>{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source</a>}</div></section>
      <section className="detail-visual section-shell"><Image src={project.image} alt={`Aperçu de ${project.title}`} fill priority sizes="(max-width: 900px) 100vw, 1100px" /></section>
      <section className="detail-story section-shell"><div className="detail-label">LE BUILD LOG</div><div className="story-grid"><article><span>01 / Problème</span><h2>Le point de départ.</h2><p>{project.problem}</p></article><article><span>02 / Construction</span><h2>Ce que j&apos;ai construit.</h2><p>{project.built}</p></article><article><span>03 / Résultat</span><h2>Ce qui a changé.</h2><p>{project.result}</p></article></div></section>
      <section className="detail-stack section-shell"><div><span className="section-index">STACK UTILISÉE</span><h2>Les bons outils,<br /><span>au bon endroit.</span></h2></div><div className="tag-cloud">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></section>
      <footer className="site-footer"><p>Fait à la main, optimisé jusqu&apos;au dernier octet.</p><Link href="/#contact">Parlons d&apos;un projet <ArrowUpRight size={16} /></Link></footer>
    </main>
  );
}
