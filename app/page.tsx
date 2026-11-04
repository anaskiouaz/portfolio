'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Check, Copy, ExternalLink, Github, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';
import { content } from '@/data/content';
import { BlueprintTrace } from './components/blueprint-trace';
import { CommandMenu } from './components/command-menu';
import { CustomCursor } from './components/custom-cursor';
import { HeroCanvas } from './components/hero-canvas';
import { Preloader } from './components/preloader';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(content.identity.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Preloader />
      <CustomCursor />
      <BlueprintTrace />
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Accueil"><span>AK</span><em>BUILD LOG / 2026</em></Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#method">Méthode</a><a href="#projects">Projets</a><a href="#stack">Stack</a><a href="#contact">Contact</a>
        </nav>
        <CommandMenu />
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <HeroCanvas />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="kicker"><span className="status-dot" />Disponible pour une alternance · Septembre 2026</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-subtitle">{content.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="button button-primary magnetic" href="#projects">Voir ce que j&apos;ai construit <ArrowDownRight size={17} /></a>
              <a className="button button-ghost magnetic" href="#contact">Parlons de votre projet <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="terminal-card">
              <div className="terminal-top"><span /><span /><span /><small>anas@lagoon:~</small></div>
              <div className="terminal-body"><p><b>$</b> whoami</p><p className="terminal-accent">builder / debugger / teammate</p><p><b>$</b> location</p><p className="terminal-muted">Grenoble, France <MapPin size={13} /></p><p><b>$</b> focus</p><p className="terminal-accent">backend · data · IA</p><span className="cursor-blink" /></div>
            </div>
            <div className="hero-note">Un portfolio comme un atelier : chaque projet laisse une trace, chaque détail a une fonction.</div>
          </div>
          <div className="scroll-cue"><span>SCROLL TO BUILD</span><div /></div>
        </section>

        <section className="manifesto section-shell" id="method">
          <div className="section-intro" data-reveal><span className="section-index">01 / MANIFESTE</span><h2>Pas juste du code.<br /><span>Des systèmes qui tiennent.</span></h2></div>
          <div className="manifesto-copy" data-reveal><p>{content.about.intro}</p><p className="muted">Mon terrain de jeu : les backends propres, les données utiles et les produits qui font oublier leur complexité.</p></div>
          <div className="method-steps">
            {content.about.method.map(([number, title, description]) => <div className="method-step" data-reveal key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <div className="section-intro projects-heading" data-reveal><span className="section-index">02 / PROJETS</span><h2>Des idées mises<br /><span>en production.</span></h2><p>Une sélection de projets où l’architecture, la donnée et le produit se rencontrent.</p></div>
          <div className="project-list">
            {content.projects.map((project, index) => <Link href={`/projects/${project.slug}`} className="project-row" data-reveal key={project.slug}>
              <span className="project-number">0{index + 1}</span><div className="project-info"><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.summary}</p></div><div className="project-preview">{project.image.endsWith('.svg') ? <Image src={project.image} alt="" fill sizes="320px" /> : <Image src={project.image} alt="" fill sizes="320px" />}</div><ArrowUpRight className="project-arrow" size={22} />
            </Link>)}
          </div>
        </section>

        <section className="stack section-shell" id="stack">
          <div className="section-intro" data-reveal><span className="section-index">03 / STACK</span><h2>Polyvalent par<br /><span>construction.</span></h2></div>
          <div className="stack-grid">{content.skills.map((skill, index) => <article className={`stack-card stack-card-${index + 1}`} data-reveal key={skill.label}><span className="card-index">0{index + 1}</span><h3>{skill.label}</h3><div className="tag-cloud">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="off-code section-shell" data-reveal>
          <div><span className="section-index">04 / HORS-CODE</span><h2>Quand je ne code pas :<br /><span>je cours, je soulève,<br />je joue, je soude.</span></h2></div>
          <div className="off-code-list">{content.offCode.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
        </section>

        <section className="contact section-shell" id="contact">
          <span className="section-index">05 / CONTACT</span><h2 data-reveal>Un projet à<br /><span>mettre en mouvement ?</span></h2>
          <div className="contact-row"><a href={`mailto:${content.identity.email}`} className="email-link">{content.identity.email}<ArrowUpRight size={24} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <><Check size={16} /> Copié</> : <><Copy size={16} /> Copier</>}</button></div>
        </section>
      </main>

      <footer className="site-footer"><div><span className="brand"><span>AK</span></span><p>Fait à la main, optimisé jusqu&apos;au dernier octet.</p></div><div className="footer-links"><a href={content.identity.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={content.identity.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="/cv/CV-Anas-KIOUAZ.pdf" target="_blank"><ExternalLink size={16} /> CV</a></div><small>© 2026 Anas KIOUAZ · Grenoble</small></footer>
    </>
  );
}
