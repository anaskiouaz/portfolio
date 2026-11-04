'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Command, Copy, Search } from 'lucide-react';
import { content } from '@/data/content';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, []);

  const copy = async () => {
    await navigator.clipboard.writeText(content.identity.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <button className="command-trigger" onClick={() => setOpen(true)} aria-label="Ouvrir la palette de commandes">
        <Command size={14} /><span>Commander</span><kbd>⌘ K</kbd>
      </button>
      {open && (
        <div className="command-backdrop" onMouseDown={() => setOpen(false)}>
          <div className="command-panel" role="dialog" aria-modal="true" aria-label="Palette de commandes" onMouseDown={(e) => e.stopPropagation()}>
            <div className="command-search"><Search size={16} /><span>Que voulez-vous construire ?</span><kbd>ESC</kbd></div>
            <div className="command-group">
              <span className="command-label">Navigation</span>
              <a href="#projects" onClick={() => setOpen(false)}><ArrowUpRight size={16} />Voir les projets</a>
              <a href="#method" onClick={() => setOpen(false)}><ArrowUpRight size={16} />Ma méthode</a>
              <a href="#contact" onClick={() => setOpen(false)}><ArrowUpRight size={16} />Parlons d’un projet</a>
            </div>
            <div className="command-group">
              <span className="command-label">Action</span>
              <button onClick={copy}><Copy size={16} />{copied ? 'Email copié' : 'Copier mon email'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
