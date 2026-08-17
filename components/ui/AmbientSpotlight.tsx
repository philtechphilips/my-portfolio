"use client";

import React, { useEffect, useState } from 'react';

export const AmbientSpotlight: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only track on fine pointers (desktop mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {isHovered && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle, rgba(var(--c-fg), 0.045) 0%, rgba(var(--c-fg), 0.015) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Top Ambient Gradient Glow Orb Left */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/5 via-accent/10 to-transparent blur-3xl opacity-50 animate-float-slow" />

      {/* Right Mid Ambient Glow Orb */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-fg/5 to-transparent blur-3xl opacity-40 animate-float-slow" style={{ animationDelay: '-3s' }} />

      {/* Subtle Micro Mesh Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-40 dark:opacity-30 pointer-events-none" />
    </div>
  );
};

export default AmbientSpotlight;
