import React, { useEffect, useRef } from 'react';
import { TimeOfDay } from '../types';

interface SakuraPetalsProps {
  timeOfDay: TimeOfDay;
  density?: 'subtle' | 'normal' | 'cinematic';
  interactive?: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  swayAmplitude: number;
  swayFrequency: number;
  opacity: number;
  color: string;
  petalType: number;
  zDepth: number; // for optical depth
}

export const SakuraPetalsCanvas: React.FC<SakuraPetalsProps> = ({
  timeOfDay,
  density = 'normal',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  // Get petal colors based on time of day
  const getPetalColors = (time: TimeOfDay) => {
    switch (time) {
      case 'morning':
        return ['#F7B2C4', '#FFD9E4', '#FFAEC4', '#F49BB2'];
      case 'afternoon':
        return ['#FFAEC4', '#FFD9E4', '#F8A5BD', '#FFC2D1'];
      case 'sunset':
        return ['#FCA5A5', '#F472B6', '#FB923C', '#FDA4AF'];
      case 'night':
        return ['#E9D5FF', '#F472B6', '#C084FC', '#FBCFE8'];
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalCountMap = {
      subtle: 18,
      normal: 32,
      cinematic: 55,
    };

    const count = petalCountMap[density];
    const colors = getPetalColors(timeOfDay);

    // Initialize petals
    const newPetals: Petal[] = [];
    for (let i = 0; i < count; i++) {
      newPetals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 7, // 7px - 15px
        speedY: Math.random() * 0.8 + 0.6,
        speedX: Math.random() * 0.6 - 0.2 + 0.3, // slight drift to the right
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        swayAmplitude: Math.random() * 25 + 15,
        swayFrequency: Math.random() * 0.015 + 0.008,
        opacity: Math.random() * 0.45 + 0.45,
        color: colors[Math.floor(Math.random() * colors.length)],
        petalType: Math.floor(Math.random() * 3),
        zDepth: Math.random() * 0.6 + 0.7,
      });
    }
    petalsRef.current = newPetals;

    // Draw single petal shape
    const drawPetalShape = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number,
      type: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.scale(Math.sin(rotation * 0.7) * 0.4 + 0.6, 1); // 3D flipping effect
      context.globalAlpha = opacity;
      context.fillStyle = color;

      context.beginPath();
      if (type === 0) {
        // Classic notched sakura petal
        context.moveTo(0, 0);
        context.bezierCurveTo(-size / 2, -size * 0.6, -size * 0.7, -size * 1.3, -size * 0.2, -size * 1.6);
        context.lineTo(0, -size * 1.4);
        context.lineTo(size * 0.2, -size * 1.6);
        context.bezierCurveTo(size * 0.7, -size * 1.3, size / 2, -size * 0.6, 0, 0);
      } else if (type === 1) {
        // Smooth oval petal
        context.moveTo(0, 0);
        context.bezierCurveTo(-size * 0.6, -size * 0.5, -size * 0.5, -size * 1.4, 0, -size * 1.5);
        context.bezierCurveTo(size * 0.5, -size * 1.4, size * 0.6, -size * 0.5, 0, 0);
      } else {
        // Slender curved petal
        context.moveTo(0, 0);
        context.quadraticCurveTo(-size * 0.7, -size * 0.7, 0, -size * 1.6);
        context.quadraticCurveTo(size * 0.5, -size * 0.7, 0, 0);
      }
      context.fill();

      // Subtle translucent petal vein
      context.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      context.lineWidth = 0.8;
      context.beginPath();
      context.moveTo(0, -size * 0.1);
      context.lineTo(0, -size * 0.9);
      context.stroke();

      context.restore();
    };

    let step = 0;
    const render = () => {
      step++;
      ctx.clearRect(0, 0, width, height);

      const mouse = mousePosRef.current;

      petalsRef.current.forEach((petal) => {
        // Sway movement
        const sway = Math.sin(step * petal.swayFrequency) * petal.swayAmplitude * 0.05;
        petal.y += petal.speedY * petal.zDepth;
        petal.x += (petal.speedX + sway) * petal.zDepth;
        petal.rotation += petal.rotationSpeed;

        // Mouse repelling physics
        if (interactive && mouse.active) {
          const dx = petal.x - mouse.x;
          const dy = petal.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            petal.x += (dx / dist) * force * 4;
            petal.y += (dy / dist) * force * 4;
            petal.rotation += 0.08;
          }
        }

        // Reset if off-screen
        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
        }
        if (petal.x > width + 20) {
          petal.x = -20;
        } else if (petal.x < -20) {
          petal.x = width + 20;
        }

        drawPetalShape(
          ctx,
          petal.x,
          petal.y,
          petal.size * petal.zDepth,
          petal.rotation,
          petal.color,
          petal.opacity,
          petal.petalType
        );
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [timeOfDay, density, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    mousePosRef.current = {
      x: e.clientX,
      y: e.clientY,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mousePosRef.current.active = false;
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    const colors = getPetalColors(timeOfDay);
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Burst 6 extra fluttering petals on click
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.4;
      const speed = Math.random() * 3 + 2;
      petalsRef.current.push({
        x: clickX,
        y: clickY,
        size: Math.random() * 7 + 8,
        speedY: Math.sin(angle) * speed + 0.5,
        speedX: Math.cos(angle) * speed + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        swayAmplitude: 20,
        swayFrequency: 0.02,
        opacity: 0.9,
        color: colors[Math.floor(Math.random() * colors.length)],
        petalType: Math.floor(Math.random() * 3),
        zDepth: 1.1,
      });
    }

    // Keep max petals reasonable
    if (petalsRef.current.length > 70) {
      petalsRef.current.splice(0, 6);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      id="sakura-petals-canvas"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="fixed inset-0 pointer-events-auto z-10 opacity-90 transition-opacity duration-1000"
      style={{ pointerEvents: interactive ? 'auto' : 'none' }}
    />
  );
};
