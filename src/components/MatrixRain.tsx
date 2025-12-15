'use client';

import { useEffect, useRef } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 矩阵字符
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`矩阵重构ＡＩＭＬ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // 每列的Y坐标
    const drops: number[] = Array(columns).fill(1);

    // 绘制矩阵雨
    const draw = () => {
      // 半透明黑色背景，产生拖尾效果
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // 随机字符
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // 渐变色：从亮绿到暗绿
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = '#00ff41'; // 亮绿色（头部）
        } else if (brightness > 0.9) {
          ctx.fillStyle = '#00dd33';
        } else if (brightness > 0.85) {
          ctx.fillStyle = '#00bb22';
        } else {
          ctx.fillStyle = '#008f11'; // 暗绿色（尾部）
        }

        // 绘制字符
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // 随机重置到顶部
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
}



