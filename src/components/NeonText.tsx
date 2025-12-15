'use client';

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  color?: 'cyan' | 'pink' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function NeonText({ 
  children, 
  className = '', 
  color = 'cyan',
  size = 'md' 
}: NeonTextProps) {
  const colorClasses = {
    cyan: 'neon-cyan',
    pink: 'neon-pink',
    green: 'neon-green',
    purple: 'neon-purple',
  };

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-7xl',
    xl: 'text-6xl md:text-8xl',
  };

  return (
    <div className={`${colorClasses[color]} ${sizeClasses[size]} font-bold ${className}`}>
      {children}
    </div>
  );
}



