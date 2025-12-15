'use client';

import { type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'pink' | 'green' | 'purple';
}

export function GlowCard({ 
  children, 
  className = '',
  glowColor = 'cyan' 
}: GlowCardProps) {
  const glowClasses = {
    cyan: 'glow-card-cyan',
    pink: 'glow-card-pink',
    green: 'glow-card-green',
    purple: 'glow-card-purple',
  };

  return (
    <div 
      className={`${glowClasses[glowColor]} backdrop-blur-sm bg-black/40 border border-opacity-50 rounded-lg p-6 hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {children}
    </div>
  );
}


