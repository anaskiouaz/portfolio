'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dot = useRef<HTMLSpanElement>(null);
  const ring = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const move = (event: PointerEvent) => {
      if (dot.current) dot.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return <><span ref={dot} className="cursor-dot" aria-hidden="true" /><span ref={ring} className="cursor-ring" aria-hidden="true" /></>;
}
