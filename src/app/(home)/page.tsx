import Link from 'next/link';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { HoverEffect } from '@/components/ui/hover-card';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { Brain, Sparkles, Cpu, Zap, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';

export default function HomePage() {
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
    {
      title: "系统知识",
      description: "体系化的 AI 学习路径，构建完整知识图谱",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: "趋势洞察",
      description: "把握 AI 发展趋势，预见技术未来方向",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(59, 130, 246, 0.5)"
        />
      </div>

      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">探索 AI 的无限可能</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-slate-100 mb-2">矩阵重构</span>
            <span className="block gradient-text text-6xl md:text-8xl">
              REMATRIX
            </span>
          </h1>
          
          <TextGenerateEffect
            words="重构认知的矩阵边界 · 探索人工智能的未来"
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 mb-20">
          <Link href="/docs">
            <MovingBorderButton
              borderRadius="0.5rem"
              className="bg-slate-900 text-white border-slate-700 font-semibold cursor-pointer"
              containerClassName="h-14 w-48"
              borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
              duration={3000}
            >
              <span className="flex items-center gap-2">
                开始探索
                <ArrowRight className="w-4 h-4" />
              </span>
            </MovingBorderButton>
          </Link>

          <Link 
            href="/docs"
            className="group px-8 py-4 rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 font-semibold text-slate-200 hover:text-white"
          >
            <span className="flex items-center gap-2">
              查看文档
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              为什么选择矩阵重构
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              专业、深入、实用的 AI 技术内容平台
            </p>
          </div>

          <HoverEffect items={features} />
        </div>

        {/* Stats Section */}
        <div className="mt-32 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <div className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">
                100+
              </div>
              <div className="text-slate-400">精选文章</div>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                50+
              </div>
              <div className="text-slate-400">技术主题</div>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/20">
              <div className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">
                24/7
              </div>
              <div className="text-slate-400">持续更新</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32 pt-16 border-t border-slate-800">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700"></div>
            <Cpu className="w-5 h-5 text-blue-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700"></div>
          </div>
          <p className="text-slate-500 text-sm">
            重构认知 · 探索未来 · Powered by REMATRIX
          </p>
        </div>
      </div>
    </div>
  );
}
