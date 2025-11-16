import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  alpha: number;
  size: number;
  vx: number;
  vy: number;
};

const ParticleCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationFrameId = useRef<number>();

  // Create new particle at mouse position
  const createParticle = () => {
    particles.current.push({
      x: mousePos.current.x,
      y: mousePos.current.y,
      alpha: 1,
      size: Math.random() * 10 + 2,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    });
  };

  const updateParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    particles.current.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.01;
      p.size *= 0.96;

      if (p.alpha <= 0 || p.size <= 0.5) {
        particles.current.splice(i, 1);
      } else {
        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`; // cyan glow color
        ctx.shadowColor = `rgba(0, 255, 255, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  const animate = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = canvasRef.current.width = window.innerWidth;
    const height = canvasRef.current.height = window.innerHeight;

    createParticle();
    updateParticles(ctx, width, height);

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default ParticleCursor;
