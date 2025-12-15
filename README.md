# 矩阵重构 · REMATRIX

> 探索人工智能的无限可能，重构认知的矩阵边界

基于 [Aceternity UI](https://ui.aceternity.com/) 的现代 AI 技术文档站点，采用专业优雅的设计风格。

![Preview](https://img.shields.io/badge/Next.js-16.0-black) ![React](https://img.shields.io/badge/React-19.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## ✨ 特色

- 🎨 **专业设计** - 基于 Aceternity UI，优雅的交互动画
- 🌊 **流畅动效** - Spotlight、Hover Effects、Text Generate 等特效
- 🎯 **AI 主题** - 深蓝、紫色渐变配色，专业科技感
- 📱 **响应式** - 完美适配各种设备
- ⚡ **高性能** - 优化的加载和渲染
- 🚀 **现代技术栈** - Next.js 16 + React 19 + Framer Motion

## 🎨 设计理念

### 配色方案
- **深蓝色系** (#2563eb, #3b82f6) - 主色调，专业沉稳
- **紫色系** (#7c3aed, #9333ea) - 点缀色，科技感
- **天蓝色** (#0ea5e9) - 强调色，现代活力
- **深色背景** (#020617) - 高级感，突出内容

### 视觉特效
- **Spotlight** - 聚光灯效果，引导视觉焦点
- **Text Generate Effect** - 文字逐字生成动画
- **Hover Card Effect** - 卡片悬停交互
- **Moving Border** - 动态边框按钮
- **Gradient Text** - 渐变色文字

## 🛠️ 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
rematrix-doc/
├── content/
│   └── docs/              # MDX 文档内容
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (home)/        # 落地页
│   │   └── docs/          # 文档页面
│   ├── components/
│   │   └── ui/            # Aceternity UI 组件
│   │       ├── spotlight.tsx
│   │       ├── text-generate-effect.tsx
│   │       ├── hover-card.tsx
│   │       └── moving-border.tsx
│   └── lib/
│       ├── utils.ts       # 工具函数
│       └── layout.shared.tsx
└── public/                # 静态资源
```

## 🎯 核心组件

### 1. Spotlight（聚光灯效果）

创建优雅的背景聚光灯效果。

```tsx
import { Spotlight } from '@/components/ui/spotlight';

<Spotlight
  className="-top-40 left-0"
  fill="rgba(59, 130, 246, 0.5)"
/>
```

**参数：**
- `className`: 自定义样式类
- `fill`: 聚光灯颜色（RGBA格式）

### 2. TextGenerateEffect（文字生成效果）

文字逐字显示动画。

```tsx
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

<TextGenerateEffect
  words="探索人工智能的未来"
  className="text-2xl text-slate-400"
/>
```

**参数：**
- `words`: 要显示的文字
- `className`: 自定义样式
- `filter`: 是否使用模糊过渡（默认 true）
- `duration`: 动画时长（默认 0.5s）

### 3. HoverEffect（悬停卡片效果）

带有悬停动画的卡片网格。

```tsx
import { HoverEffect } from '@/components/ui/hover-card';

const items = [
  {
    title: "标题",
    description: "描述文字",
    icon: <Icon className="w-8 h-8" />,
  },
  // ...更多项目
];

<HoverEffect items={items} />
```

### 4. Moving Border Button（动态边框按钮）

带有动态光效边框的按钮组件。

```tsx
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

<MovingBorderButton
  borderRadius="0.5rem"
  className="bg-slate-900 text-white"
  duration={3000}
>
  按钮文字
</MovingBorderButton>
```

## 📝 编写文档

在 `/content/docs` 目录下创建或编辑 `.mdx` 文件：

```mdx
---
title: 文章标题
description: 文章描述
---

# 标题

正文内容...

## 子标题

更多内容...
```

### 使用 React 组件

在 MDX 中可以直接使用 React 组件：

```mdx
import { Brain } from 'lucide-react';

<div className="p-6 rounded-lg border border-blue-500/30 bg-blue-950/20">
  <Brain className="w-8 h-8 text-blue-400" />
  <h3>特色内容</h3>
  <p>描述文字</p>
</div>
```

## 🎨 自定义样式

### CSS 工具类

项目提供了一些实用的 CSS 类：

```css
/* 渐变文字 */
.gradient-text        /* 蓝-紫-天蓝渐变 */
.gradient-text-blue   /* 蓝色系渐变 */

/* 背景图案 */
.dot-pattern          /* 点阵背景 */

/* 渐变边框 */
.gradient-border      /* 蓝-紫渐变边框 */
```

### 修改颜色主题

编辑 `src/app/global.css`：

```css
:root {
  --sky-500: #0ea5e9;
  --blue-600: #2563eb;
  --purple-600: #9333ea;
  /* ...更多变量 */
}
```

## 🚀 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动构建并部署

### 其他平台

```bash
# 构建生产版本
pnpm build

# 输出目录：.next
```

## 📚 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.0 | React 框架 |
| React | 19.2 | UI 库 |
| TypeScript | 5.9 | 类型安全 |
| Framer Motion | 12.23 | 动画库 |
| Tailwind CSS | 4.1 | 样式框架 |
| Fumadocs | 16.2 | 文档系统 |
| Lucide React | 0.556 | 图标库 |

## 📦 依赖说明

### 核心依赖
- `next` - Next.js 框架
- `react` / `react-dom` - React 库
- `framer-motion` - 动画效果核心
- `fumadocs-core` / `fumadocs-ui` - 文档系统
- `fumadocs-mdx` - MDX 支持

### 工具依赖
- `clsx` - 条件类名组合
- `tailwind-merge` - Tailwind 类名合并
- `lucide-react` - 图标库

## 🎯 最佳实践

### 1. 性能优化
- 合理使用动画效果
- 图片使用 `next/image` 优化
- 代码分割和懒加载

### 2. 可访问性
- 保持足够的颜色对比度
- 提供清晰的视觉层级
- 确保键盘导航可用

### 3. 内容组织
- 使用清晰的目录结构
- 合理使用标题层级
- 添加有意义的描述和元数据

## 📖 参考资源

- [Aceternity UI](https://ui.aceternity.com/) - 组件灵感来源
- [Fumadocs](https://fumadocs.dev) - 文档系统
- [Framer Motion](https://www.framer.com/motion/) - 动画库文档
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [Next.js](https://nextjs.org/docs) - Next.js 文档

## 📄 许可

MIT License

---

<div align="center">
  <p>重构认知 · 探索未来</p>
  <p>Built with ❤️ by REMATRIX</p>
  <p>Powered by <a href="https://ui.aceternity.com/">Aceternity UI</a></p>
</div>
