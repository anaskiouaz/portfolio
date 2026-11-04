'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <div className="preloader" aria-label="Chargement"><span className="preloader-line" /><span className="preloader-mark">AK</span></div>;
}
