import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/Logo';
import { NavbarActions } from '@/components/NavbarActions';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Logo size={24} />
          <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
            矩阵重构
          </span>
        </div>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        text: '文档',
        url: '/docs',
        active: 'nested-url',
      },
    ],
    themeSwitch: {
      component: <NavbarActions />,
    },
  };
}
