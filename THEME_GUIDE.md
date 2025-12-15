# 矩阵重构主题使用指南

这份文档详细说明了如何使用和定制矩阵重构的赛博朋克主题。

## 🎨 设计理念

矩阵重构主题的设计灵感来源于：

- **《黑客帝国》** - 标志性的矩阵数字雨效果
- **赛博朋克美学** - 霓虹灯、深色背景、科技感
- **未来主义** - 现代化的 UI 设计和交互

## 🎯 核心组件详解

### 1. MatrixRain（矩阵数字雨）

这是网站最具标志性的背景效果。

**特点：**

- 自动适应屏幕尺寸
- 使用 Canvas 渲染，性能优秀
- 包含中英文字符和特殊符号
- 渐变色效果（从亮绿到暗绿）
- 透明度可调，不影响内容阅读

**使用方式：**

```tsx
import { MatrixRain } from "@/components/MatrixRain";

<MatrixRain />;
```

**自定义：**

- 修改透明度：在 `MatrixRain.tsx` 中调整 `style={{ opacity: 0.3 }}`
- 修改字符集：编辑 `characters` 变量
- 修改速度：调整 `setInterval` 的延迟时间（默认 33ms）

### 2. NeonText（霓虹灯文字）

创建发光的霓虹灯文字效果。

**Props：**

- `color`: 颜色主题
  - `'cyan'` - 青色（默认）
  - `'pink'` - 粉色
  - `'green'` - 绿色
  - `'purple'` - 紫色
- `size`: 文字大小
  - `'sm'` - 小号 (2xl/3xl)
  - `'md'` - 中号 (4xl/5xl)
  - `'lg'` - 大号 (5xl/7xl)
  - `'xl'` - 特大号 (6xl/8xl)
- `className`: 自定义 CSS 类

**示例：**

```tsx
import { NeonText } from '@/components/NeonText';

<NeonText size="lg" color="green">
  矩阵重构
</NeonText>

<NeonText size="md" color="cyan">
  REMATRIX
</NeonText>
```

**效果说明：**

- 多层阴影形成发光效果
- 闪烁动画模拟霓虹灯特性
- 响应式字体大小

### 3. GlowCard（发光卡片）

带有发光边框的卡片容器组件。

**Props：**

- `glowColor`: 发光颜色
  - `'cyan'` - 青色（默认）
  - `'pink'` - 粉色
  - `'green'` - 绿色
  - `'purple'` - 紫色
- `className`: 自定义 CSS 类
- `children`: 卡片内容

**示例：**

```tsx
import { GlowCard } from "@/components/GlowCard";

<GlowCard glowColor="cyan">
  <h3>标题</h3>
  <p>内容描述</p>
</GlowCard>;
```

**交互效果：**

- hover 时发光强度增强
- 平滑的缩放动画（scale: 1.05）
- 背景模糊效果
- 内外双重光晕

## 🎨 CSS 样式系统

### 颜色变量

在 `global.css` 中定义了核心颜色变量：

```css
:root {
  --neon-cyan: #00ffff; /* 青色 */
  --neon-pink: #ff006e; /* 粉色 */
  --neon-green: #00ff41; /* 绿色 */
  --neon-purple: #b000ff; /* 紫色 */
  --dark-bg: #0a0a0f; /* 深色背景 */
  --darker-bg: #050508; /* 更深背景 */
}
```

### 实用 CSS 类

#### 霓虹灯文字类

```css
.neon-cyan    /* 青色霓虹灯文字 */
/* 青色霓虹灯文字 */
/* 青色霓虹灯文字 */
/* 青色霓虹灯文字 */
.neon-pink    /* 粉色霓虹灯文字 */
.neon-green   /* 绿色霓虹灯文字 */
.neon-purple; /* 紫色霓虹灯文字 */
```

#### 发光卡片类

```css
.glow-card-cyan    /* 青色发光卡片 */
/* 青色发光卡片 */
/* 青色发光卡片 */
/* 青色发光卡片 */
.glow-card-pink    /* 粉色发光卡片 */
.glow-card-green   /* 绿色发光卡片 */
.glow-card-purple; /* 紫色发光卡片 */
```

#### 特效类

```css
.scan-lines   /* 扫描线效果 */
/* 扫描线效果 */
/* 扫描线效果 */
/* 扫描线效果 */
.pulse-glow   /* 脉冲发光动画 */
.fade-in-up   /* 淡入上移动画 */
.cyber-grid; /* 赛博网格背景 */
```

#### 霓虹按钮

```css
.neon-button/* 霓虹灯风格按钮 */;
```

### 动画效果

#### neon-flicker（霓虹闪烁）

模拟真实霓虹灯的闪烁效果。

#### pulse-glow（脉冲发光）

```css
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}
```

#### fade-in-up（淡入上移）

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📝 在 MDX 中使用

在文档中使用主题组件：

```mdx
---
title: 你的文章标题
description: 文章描述
---

import { Brain, Sparkles } from "lucide-react";

<div className="mb-8 p-6 rounded-lg border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-transparent">
  <div className="flex items-center gap-3 mb-4">
    <Brain className="w-8 h-8 text-cyan-400" />
    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent m-0">
      标题
    </h2>
  </div>
  <p className="text-gray-300 leading-relaxed">内容文字</p>
</div>

## 普通标题

普通的 Markdown 内容...

<div className="mt-8 p-4 rounded-lg border border-green-500/30 bg-green-950/10">
  <p className="text-green-400 font-mono text-sm mb-0">
    💡 提示：这是一个提示框
  </p>
</div>
```

## 🎨 设计建议

### 配色方案

**主色调：**

- 青色 (#00ffff) - 用于主要标题和强调
- 绿色 (#00ff41) - 用于成功状态和矩阵效果
- 粉色 (#ff006e) - 用于次要强调和警告
- 紫色 (#b000ff) - 用于特殊标记

**文字颜色：**

- 纯白 (#ffffff) - 主标题
- 浅灰 (#f0f0f0) - 正文
- 中灰 (#a0a0aa) - 次要文字
- 深灰 (#60606a) - 辅助信息

### 排版建议

1. **标题层级**

   - H1: 使用 NeonText 组件，size="xl"
   - H2: 使用 NeonText 组件，size="lg" 或渐变色
   - H3-H6: 使用 Tailwind 类名

2. **卡片布局**

   - 使用 grid 布局，响应式列数
   - 卡片间距 gap-6
   - 使用 GlowCard 组件增强视觉效果

3. **动画时序**
   - 使用 `animationDelay` 创建错落感
   - 延迟间隔建议 0.1s - 0.2s
   - 避免过多同时动画

## 🔧 定制技巧

### 修改霓虹灯颜色

1. 在 `global.css` 中添加新颜色：

```css
:root {
  --neon-orange: #ff6600;
}
```

2. 添加对应的 CSS 类：

```css
.neon-orange {
  color: var(--neon-orange);
  text-shadow: 0 0 10px var(--neon-orange), 0 0 20px var(--neon-orange),
    0 0 40px var(--neon-orange), 0 0 80px var(--neon-orange);
  animation: neon-flicker 3s infinite alternate;
}
```

3. 在组件中添加类型支持：

```tsx
type NeonColor = "cyan" | "pink" | "green" | "purple" | "orange";
```

### 调整背景效果

**调整矩阵雨速度：**

```tsx
// 在 MatrixRain.tsx 中
const interval = setInterval(draw, 50); // 数字越大越慢
```

**调整矩阵雨密度：**

```tsx
// 在 MatrixRain.tsx 中
const fontSize = 16; // 数字越大密度越小
```

**调整背景透明度：**

```tsx
// 在使用 MatrixRain 的地方
<canvas style={{ opacity: 0.5 }} />
```

## 📱 响应式设计

所有组件都支持响应式设计：

- **断点**：遵循 Tailwind 的默认断点

  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

- **字体大小**：使用 `md:` 前缀适配桌面端
- **网格布局**：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **间距**：移动端较小，桌面端增大

## ⚡ 性能优化

### Canvas 优化

- 使用 `requestAnimationFrame` 替代 `setInterval`（可选）
- 降低帧率到 30fps
- 适当降低透明度减少重绘

### CSS 优化

- 使用 `will-change` 提示浏览器优化
- 避免过多同时动画
- 使用 `transform` 而非 `top/left`

### 加载优化

- 字体使用 `next/font` 预加载
- 图片使用 `next/image` 优化
- 组件懒加载（如需要）

## 🚀 最佳实践

1. **保持一致性**

   - 统一使用颜色主题
   - 保持组件使用规范
   - 统一动画时长和缓动函数

2. **性能考虑**

   - 避免过度使用动画效果
   - 合理使用背景特效
   - 注意移动端性能

3. **可访问性**

   - 保持足够的对比度
   - 提供清晰的视觉层级
   - 确保文字可读性

4. **可维护性**
   - 使用 CSS 变量统一管理颜色
   - 组件化可复用元素
   - 保持代码整洁

## 📚 更多资源

- [Fumadocs 文档](https://fumadocs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Next.js 文档](https://nextjs.org/docs)

---

Happy Coding! 🎨✨
