# 内容管理指南

## 📁 当前文档结构

```
content/docs/
├── index.mdx                          # 首页/导航页
├── ai-agent-survival-guide.mdx        # AI Agent 工程生存法则
├── openspec-paradigm.mdx              # OpenSpec：AI时代的开发范式
└── prompt-engineering-pitfalls.mdx    # 为什么99%的Prompt一上线就跑偏？
```

## 📝 文档说明

### 1. AI Agent 工程生存法则
**文件**: `ai-agent-survival-guide.mdx`
**路由**: `/docs/ai-agent-survival-guide`
**主题**: AI Agent 开发实战经验和生存指南

### 2. OpenSpec：AI时代的开发范式
**文件**: `openspec-paradigm.mdx`
**路由**: `/docs/openspec-paradigm`
**主题**: AI 时代的新型开发范式和方法论

### 3. 为什么99%的Prompt一上线就跑偏？
**文件**: `prompt-engineering-pitfalls.mdx`
**路由**: `/docs/prompt-engineering-pitfalls`
**主题**: Prompt 工程中的常见陷阱和解决方案

## ✏️ 添加新文章

### 方式一：直接在 docs 目录下创建

```bash
# 创建新的 MDX 文件
touch content/docs/your-article-slug.mdx
```

### 方式二：创建子目录（如果需要分类）

```bash
# 例如创建 "AI 工程" 分类
mkdir -p content/docs/ai-engineering
touch content/docs/ai-engineering/your-article.mdx
```

## 📄 文章模板

```mdx
---
title: 你的文章标题
description: 简短的描述，会显示在搜索和预览中
---

# 你的文章标题

> 引言或摘要

## 章节一

内容...

## 章节二

内容...

---

_文章日期或版本信息_
```

## 🎨 推荐的 MDX 组件用法

### 使用图标

```mdx
import { Brain, Code2, Lightbulb } from 'lucide-react';

<Brain className="w-6 h-6 text-blue-400" />
```

### 提示框样式

```mdx
<div className="mt-8 p-4 rounded-lg border border-blue-500/30 bg-blue-950/10">
  <p className="text-blue-400 font-mono text-sm mb-0">
    💡 提示：这是一个提示框
  </p>
</div>
```

### 文章卡片样式

```mdx
<div className="my-6 p-5 rounded-lg border border-slate-700 bg-fd-card hover:border-blue-500/50 transition-all duration-300">
  <div className="flex items-start gap-4">
    <Icon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-bold text-slate-100 mb-2">
        <a href="/docs/your-link">标题</a>
      </h3>
      <p className="text-slate-400 text-sm">描述文字</p>
    </div>
  </div>
</div>
```

## 🔄 更新首页导航

当添加新文章时，记得在 `content/docs/index.mdx` 中添加对应的卡片：

```mdx
<div className="my-6 p-5 rounded-lg border border-slate-700 bg-fd-card hover:border-blue-500/50 transition-all duration-300">
  <div className="flex items-start gap-4">
    <YourIcon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-bold text-slate-100 mb-2">
        <a href="/docs/your-new-article">新文章标题</a>
      </h3>
      <p className="text-slate-400 text-sm">新文章的简短描述</p>
    </div>
  </div>
</div>
```

## 🎨 主题色说明

当前使用的卡片样式 `.bg-fd-card` 已适配主题色：

- **背景色**: 深蓝灰色渐变 (slate-800 到 slate-700)
- **边框**: 半透明灰色，悬停时变为蓝色
- **悬停效果**: 背景变亮，边框显示蓝色光晕

颜色主题：
- 主蓝色: `#3b82f6` (blue-500)
- 紫色: `#9333ea` (purple-600)
- 天蓝色: `#0ea5e9` (sky-500)
- 背景: `#020617` (slate-950)

## 📚 文档编写最佳实践

1. **标题层级**
   - H1 (`#`) - 文章标题（只用一次）
   - H2 (`##`) - 主要章节
   - H3 (`###`) - 子章节
   - H4 (`####`) - 细节点

2. **代码块**
   使用三个反引号包裹，并指定语言：
   ````mdx
   ```typescript
   const example = "code here";
   ```
   ````

3. **引用**
   使用 `>` 创建引用块：
   ```mdx
   > 这是一段引用文字
   ```

4. **列表**
   - 无序列表使用 `-` 或 `*`
   - 有序列表使用 `1.`, `2.` 等

5. **链接**
   ```mdx
   [链接文字](/docs/target-page)
   ```

## 🚀 预览和发布

```bash
# 本地预览
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 📊 文章组织建议

随着文章增多，可以考虑这样组织：

```
content/docs/
├── index.mdx                       # 首页
├── ai-agent/                       # AI Agent 相关
│   ├── survival-guide.mdx
│   └── best-practices.mdx
├── development/                    # 开发范式
│   ├── openspec.mdx
│   └── workflow.mdx
└── prompt-engineering/             # Prompt 工程
    ├── pitfalls.mdx
    └── optimization.mdx
```

---

**提示**: 修改文件后，开发服务器会自动重新加载，无需手动刷新。


