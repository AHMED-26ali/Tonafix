import React from 'react';
import { ArrowLeft, Check, Flame, Shield, Wrench, Sparkles } from 'lucide-react';
import { productCategories } from '../data/companyData';

interface ProductsOverviewProps {
  onSelectCategory: (categoryId: string) => void;
  onRequestSpecs: (categoryId: string) => void;
}

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  onSelectCategory,
  onRequestSpecs,
}) => {
  return (
    <section id="products" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background visual elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>منظومة المنتجات والحلول</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            فئات منتجات تونافيكس للدهانات
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            أنظمة طلاء صناعية وحماية متطورة صُممت خصيصاً لتلبي احتياجات المنشآت الهندسية والمصانع والورش الإنتاجية، مع معايير أداء فائقة الدقة.
          </p>
        </div>

        {/* 3 Main Product Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((product) => {
            const isFire = product.category === 'fire';
            const isIndustrial = product.category === 'industrial';
            const isNc = product.category === 'nc';

            const borderAccent = isFire
              ? 'hover:border-pink-500/50 hover:shadow-pink-950/30'
              : isIndustrial
              ? 'hover:border-cyan-500/50 hover:shadow-cyan-950/30'
              : 'hover:border-blue-500/50 hover:shadow-blue-950/30';

            const badgeBg = isFire
              ? 'bg-pink-950/80 text-pink-300 border-pink-700/60'
              : isIndustrial
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60'
              : 'bg-blue-950/80 text-blue-300 border-blue-700/60';

            const IconComponent = isFire ? Flame : isIndustrial ? Shield : Wrench;

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className={`group flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl transition-all duration-300 ${borderAccent}`}
              >
                {/* Image Section with badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Category icon & badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${badgeBg}`}>
                      {product.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 p-2.5 rounded-xl bg-slate-950/80 border border-slate-700/60 text-white">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col justify-between text-right space-y-5">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-cyan-400 tracking-wider block">
                      {product.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Technical Highlights list */}
                    <div className="pt-3 border-t border-slate-800/80 space-y-2">
                      <div className="text-xs font-bold text-slate-400">الخصائص والمواصفات:</div>
                      {product.technicalHighlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCategory(product.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 group-hover:underline cursor-pointer"
                    >
                      <span>اكتشف المزيد</span>
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </button>

                    <button
                      onClick={() => onRequestSpecs(product.id)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    >
                      طلب المواصفات
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
