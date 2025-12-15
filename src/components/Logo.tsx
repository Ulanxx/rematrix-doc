interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      
      {/* 外围矩阵网格框架 */}
      <path
        d="M 20 20 L 80 20 L 80 80 L 20 80 Z"
        stroke="url(#logo-gradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      
      {/* 中心芯片图案 */}
      <rect
        x="35"
        y="35"
        width="30"
        height="30"
        fill="url(#logo-gradient)"
        opacity="0.8"
      />
      
      {/* 四个角的连接点 */}
      <circle cx="20" cy="20" r="4" fill="#3b82f6" />
      <circle cx="80" cy="20" r="4" fill="#8b5cf6" />
      <circle cx="20" cy="80" r="4" fill="#0ea5e9" />
      <circle cx="80" cy="80" r="4" fill="#3b82f6" />
      
      {/* 矩阵网格线（内部） */}
      <line x1="20" y1="50" x2="35" y2="50" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
      <line x1="65" y1="50" x2="80" y2="50" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" />
      <line x1="50" y1="20" x2="50" y2="35" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" />
      <line x1="50" y1="65" x2="50" y2="80" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
      
      {/* 中心点 */}
      <circle cx="50" cy="50" r="3" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={24} />
      <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
        矩阵重构
      </span>
    </div>
  );
}

