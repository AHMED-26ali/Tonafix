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
    <section id="why-tonavix" className="py-24 bg-[#060b1e] border-t border-[#0066ff]/25 relative overflow-hidden">
      {/* Background accents matching logo */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0066ff]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0a1844] border border-[#00c8ff]/40 text-cyan-300 text-xs font-bold mb-3 shadow-sm">
            <span>ركائز التميز المؤسسي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            لماذا تختار تونافيكس للدهانات لمشروعك؟
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            نضع متطلبات المهندس والاستشاري الصناعي في صدارة أولوياتنا، ونوفر حلول حماية متكاملة تصمد أمام أصعب التحديات المناخية والصناعية.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyTonavixPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#091438]/90 border border-[#0066ff]/25 hover:border-[#00c8ff]/60 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] hover:bg-[#0c1b4a] transition-all duration-300 text-right space-y-3 shadow-lg backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a1844] border border-[#0066ff]/40 flex items-center justify-center shadow-sm">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Notice & Editable Certificate Placeholder */}
        <div className="mt-12 p-6 rounded-2xl bg-[#071336]/90 border border-[#00c8ff]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-right shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-[#00f0ff]">
              <FileCheck className="w-4 h-4" />
              <span>الشفافية الهندسية والاعتمادات الرسمية</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              تلتزم تونافيكس بعدم نشر شهادات أو نتائج معملية غير موثقة. تُسلَّم نتائج الاختبارات المعملية وشهادات المطابقة الرسمية لكل دفعة توريد صناعية معتمدة.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-xl bg-[#060c24] text-cyan-300 border border-[#00c8ff]/40 text-xs font-mono shadow-sm">
              [شهادات المطابقة المعملية متاحة حسب كود المشروع]
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
