import React from 'react';
import {
  ShieldCheck,
  Layers,
  Gauge,
  Boxes,
  Headset,
  TrendingDown,
  FileCheck,
} from 'lucide-react';
import { whyTonavixPillars } from '../data/companyData';

export const WhyTonavixSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-pink-400" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-blue-400" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-cyan-400" />;
      case 'Headset':
        return <Headset className="w-6 h-6 text-pink-400" />;
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6 text-blue-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-tonavix" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-bold mb-3">
            <span>ركائز التميز المؤسسي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            لماذا تختار تونافيكس للدهانات لمشروعك؟
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            نضع متطلبات المهندس والاستشاري الصناعي في صدارة أولوياتنا، ونوفر حلول حماية متكاملة تصمد أمام أصعب التحديات المناخية والصناعية.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyTonavixPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 text-right space-y-3 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Notice & Editable Certificate Placeholder */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-400">
              <FileCheck className="w-4 h-4" />
              <span>الشفافية الهندسية والاعتمادات الرسمية</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              تلتزم تونافيكس بعدم نشر شهادات أو نتائج معملية غير موثقة. تُسلَّم نتائج الاختبارات المعملية وشهادات المطابقة الرسمية لكل دفعة توريد صناعية معتمدة.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-700 text-xs font-mono">
              [شهادات المطابقة المعملية متاحة حسب كود المشروع]
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
