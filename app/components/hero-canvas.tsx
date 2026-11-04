'use client';

import { useEffect, useRef } from 'react';

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    let frame = 0;
    let pointer = { x: 0.5, y: 0.4 };
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: PointerEvent) => {
      pointer = { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight };
    };
    const render = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);
      context.strokeStyle = 'rgba(255, 77, 87, 0.08)';
      context.lineWidth = 1;
      const gap = 72;
      const drift = (time * 0.01) % gap;
      for (let x = -gap + drift; x < width + gap; x += gap) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = -gap + drift; y < height + gap; y += gap) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
      const glow = context.createRadialGradient(pointer.x * width, pointer.y * height, 0, pointer.x * width, pointer.y * height, 280);
      glow.addColorStop(0, 'rgba(255, 77, 87, 0.14)');
      glow.addColorStop(1, 'rgba(255, 77, 87, 0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
      frame = requestAnimationFrame(render);
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
