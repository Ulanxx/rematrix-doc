# Aceternity UI 组件使用指南

本项目基于 [Aceternity UI](https://ui.aceternity.com/) 构建，这是一个提供精美动画组件的现代 UI 库。

## 🎨 设计哲学

Aceternity UI 专注于：
- **流畅动画** - 基于 Framer Motion 的高性能动画
- **现代美学** - 符合当代设计趋势
- **易于使用** - 复制粘贴即可使用
- **高度可定制** - 灵活的参数配置

## 📦 已集成组件

### 1. Spotlight（聚光灯效果）

**作用：** 创建动态的背景聚光灯效果，吸引用户注意力到重要区域。

**使用场景：**
- Hero 区域背景
- 特色内容突出显示
- 引导用户视觉焦点

**代码示例：**
```tsx
import { Spotlight } from '@/components/ui/spotlight';

export default function Hero() {
  return (
    <div className="relative">
      {/* 聚光灯效果 */}
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill="rgba(59, 130, 246, 0.5)" // 蓝色光效
      />
      
      <div className="relative z-10">
        {/* 你的内容 */}
      </div>
    </div>
  );
}
```

**参数说明：**
- `className`: 控制位置和大小
- `fill`: 聚光灯颜色（RGBA 格式）

**自定义技巧：**
```tsx
// 粉色聚光灯
<Spotlight fill="rgba(236, 72, 153, 0.4)" />

// 绿色聚光灯
<Spotlight fill="rgba(34, 197, 94, 0.4)" />

// 多个聚光灯组合
<>
  <Spotlight className="-top-40 left-0" fill="rgba(59, 130, 246, 0.5)" />
  <Spotlight className="top-10 right-0" fill="rgba(168, 85, 247, 0.4)" />
</>
```

---

### 2. Text Generate Effect（文字生成效果）

**作用：** 文字逐字显示动画，创造打字机效果。

**使用场景：**
- 标语和口号
- 重要公告
- 引人注目的标题

**代码示例：**
```tsx
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Hero() {
  return (
    <TextGenerateEffect
      words="探索人工智能的无限可能，重构认知的矩阵边界"
      className="text-2xl md:text-3xl text-slate-400"
      duration={0.5}
      filter={true}
    />
  );
}
```

**参数说明：**
- `words`: 要显示的文字内容
- `className`: 自定义样式类
- `duration`: 每个字的动画时长（秒）
- `filter`: 是否使用模糊过渡效果

**实用技巧：**
```tsx
// 快速显示
<TextGenerateEffect words="快速文字" duration={0.2} />

// 无模糊效果
<TextGenerateEffect words="清晰文字" filter={false} />

// 大标题样式
<TextGenerateEffect
  words="矩阵重构"
  className="text-6xl font-bold gradient-text"
/>
```

---

### 3. Hover Card Effect（悬停卡片效果）

**作用：** 创建带有悬停动画的卡片网格，鼠标悬停时显示高亮效果。

**使用场景：**
- 功能特性展示
- 服务列表
- 团队成员介绍
- 产品目录

**代码示例：**
```tsx
import { HoverEffect } from '@/components/ui/hover-card';
import { Brain, Sparkles, Cpu } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "AI 前沿",
      description: "最新的人工智能技术动态和研究进展",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "深度解析",
      description: "深入浅出解读复杂的 AI 技术",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "技术实践",
      description: "从理论到应用的完整实践指南",
      icon: <Cpu className="w-8 h-8" />,
    },
  ];

  return (
    <HoverEffect items={features} className="max-w-5xl mx-auto" />
  );
}
```

**数据结构：**
```typescript
interface HoverItem {
  title: string;        // 卡片标题
  description: string;  // 卡片描述
  icon: React.ReactNode; // 图标组件
}
```

**自定义样式：**
```tsx
// 修改网格布局
<HoverEffect 
  items={features} 
  className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
/>

// 添加链接
const featuresWithLinks = [
  {
    title: "功能一",
    description: "描述",
    icon: <Icon />,
    link: "/feature-1", // 添加链接字段
  },
];
```

---

### 4. Moving Border Button（动态边框按钮）

**作用：** 创建带有流动光效边框的按钮，吸引用户点击。

**使用场景：**
- 主要 CTA 按钮
- 重要操作入口
- 突出显示的链接

**代码示例：**
```tsx
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import Link from 'next/link';

export default function CTA() {
  return (
    <Link href="/docs">
      <MovingBorderButton
        borderRadius="0.5rem"
        className="bg-slate-900 text-white font-semibold"
        containerClassName="h-14 w-48"
        duration={3000}
      >
        <span className="flex items-center gap-2">
          开始探索
          <ArrowRight className="w-4 h-4" />
        </span>
      </MovingBorderButton>
    </Link>
  );
}
```

**参数说明：**
- `borderRadius`: 圆角大小
- `className`: 按钮内部样式
- `containerClassName`: 容器样式（控制大小）
- `duration`: 边框动画速度（毫秒）
- `borderClassName`: 边框光效样式

**样式变体：**
```tsx
// 大按钮
<MovingBorderButton
  containerClassName="h-16 w-64"
  className="text-lg"
>
  大按钮
</MovingBorderButton>

// 不同颜色
<MovingBorderButton
  borderClassName="bg-[radial-gradient(purple_40%,transparent_60%)]"
  className="bg-purple-900/80"
>
  紫色按钮
</MovingBorderButton>

// 快速动画
<MovingBorderButton duration={1500}>
  快速动画
</MovingBorderButton>
```

---

## 🎯 组合使用示例

### Hero Section 完整示例

```tsx
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* 背景效果 */}
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill="rgba(59, 130, 246, 0.5)"
      />
      
      {/* 内容区域 */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="gradient-text">矩阵重构</span>
        </h1>
        
        <TextGenerateEffect
          words="探索人工智能的无限可能"
          className="text-2xl text-slate-400 mb-12"
        />
        
        <Link href="/docs">
          <MovingBorderButton
            borderRadius="0.5rem"
            className="bg-slate-900 text-white"
          >
            开始探索
          </MovingBorderButton>
        </Link>
      </div>
    </div>
  );
}
```

### Features Section 完整示例

```tsx
import { HoverEffect } from '@/components/ui/hover-card';
import { Brain, Sparkles, Cpu, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "AI 前沿",
      description: "最新的人工智能技术动态、研究进展与行业洞察",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "深度解析",
      description: "深入浅出解读复杂技术，让 AI 知识触手可及",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "技术实践",
      description: "从理论到实践，手把手教你掌握 AI 技术应用",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "快速更新",
      description: "紧跟 AI 发展步伐，第一时间获取最新资讯",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            为什么选择我们
          </h2>
          <p className="text-slate-400 text-lg">
            专业、深入、实用的内容平台
          </p>
        </div>
        
        <HoverEffect items={features} />
      </div>
    </section>
  );
}
```

---

## 🎨 配色建议

### 主色调组合

```tsx
// 蓝色系（专业、科技）
const blueTheme = {
  spotlight: "rgba(59, 130, 246, 0.5)",
  gradient: "from-blue-400 to-sky-400",
  border: "border-blue-500/30",
};

// 紫色系（创新、神秘）
const purpleTheme = {
  spotlight: "rgba(168, 85, 247, 0.4)",
  gradient: "from-purple-400 to-pink-400",
  border: "border-purple-500/30",
};

// 绿色系（生机、环保）
const greenTheme = {
  spotlight: "rgba(34, 197, 94, 0.4)",
  gradient: "from-green-400 to-emerald-400",
  border: "border-green-500/30",
};
```

### 组合使用

```tsx
// 蓝紫渐变（AI 主题推荐）
<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">

// 深色背景 + 蓝色光效
<div className="bg-slate-950">
  <Spotlight fill="rgba(59, 130, 246, 0.5)" />
</div>
```

---

## 🔧 性能优化建议

### 1. 动画性能
```tsx
// 减少同时运行的动画数量
// 使用 animationDelay 错开动画时间

<div style={{ animationDelay: '0.1s' }}>Component 1</div>
<div style={{ animationDelay: '0.2s' }}>Component 2</div>
```

### 2. 组件懒加载
```tsx
import dynamic from 'next/dynamic';

// 动态导入大型动画组件
const MovingBorderButton = dynamic(
  () => import('@/components/ui/moving-border').then(mod => mod.Button),
  { ssr: false }
);
```

### 3. 移动端优化
```tsx
// 移动端禁用复杂动画
const isMobile = window.innerWidth < 768;

{!isMobile && <Spotlight fill="rgba(59, 130, 246, 0.5)" />}
```

---

## 📚 更多资源

- [Aceternity UI 官网](https://ui.aceternity.com/)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [Tailwind CSS 文档](https://tailwindcss.com)

---

**提示：** 所有组件都可以通过 `className` 自定义样式，充分利用 Tailwind CSS 的功能来打造独特的设计。


