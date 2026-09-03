import React from 'react';
import {
  Factory,
  Building2,
  Cog,
  GitCommit,
  Wrench,
  Warehouse,
  Shield,
  Flame,
  ArrowUpRight,
} from 'lucide-react';
import { industriesList } from '../data/companyData';

interface ApplicationsSectionProps {
  onConsultIndustry: (industryTitle: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  onConsultIndustry,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return <Factory className="w-6 h-6 text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'Cog':
        return <Cog className="w-6 h-6 text-pink-400" />;
      case 'GitCommit':
        return <GitCommit className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-400" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-pink-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-pink-400" />;
      default:
        return <Factory className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="applications"
      className="py-24 bg-slate-900/70 border-t border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-bold mb-3">
            <span>القطاعات والمجالات الصناعية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            مجالات استخدام وتطبيق دهانات تونافيكس
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            تمت صياغة منتجاتنا لتلائم بيئات التشغيل الثقيلة والمعايير الصارمة في مختلف القطاعات الهندسية والمصانع الإنتاجية في كافة محافظات مصر.
          </p>
        </div>

        {/* 8 Industry Application Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesList.map((ind) => (
            <div
              key={ind.id}
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between text-right shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                  {getIcon(ind.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-[11px] font-semibold text-cyan-400/90 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-900/50">
                  {ind.coatingsUsed}
                </div>
                <button
                  onClick={() => onConsultIndustry(ind.title)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="استشارة فنية لهذا القطاع"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
