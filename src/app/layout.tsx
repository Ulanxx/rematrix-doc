import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: '矩阵重构 | REMATRIX',
  description: '探索人工智能的无限可能，重构认知的矩阵边界',
  keywords: ['AI', '人工智能', '机器学习', '深度学习', '矩阵重构', 'Prompt工程', 'AI Agent'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html 
      lang="zh-CN" 
      className={`${inter.variable} ${jetbrainsMono.variable} dark`} 
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider
          theme={{
            enabled: true,
            defaultTheme: 'dark',
            storageKey: 'rematrix-theme',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
