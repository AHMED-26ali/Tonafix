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
    <section id="products" className="py-24 bg-[#060c22] relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0a1844] border border-[#00c8ff]/40 text-cyan-300 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>منظومة المنتجات والحلول</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            فئات منتجات تونافيكس للدهانات
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
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
              ? 'hover:border-[#ec4899]/60 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]'
              : isIndustrial
              ? 'hover:border-[#00f0ff]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]'
              : 'hover:border-[#38bdf8]/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]';

            const badgeBg = isFire
              ? 'bg-[#2a061c]/90 text-[#f472b6] border-[#ec4899]/50'
              : isIndustrial
              ? 'bg-[#061d36]/90 text-cyan-300 border-[#00c8ff]/50'
              : 'bg-[#0a1844]/90 text-blue-300 border-[#0066ff]/50';

            const IconComponent = isFire ? Flame : isIndustrial ? Shield : Wrench;

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className={`group flex flex-col rounded-2xl bg-[#091438]/90 border border-[#0066ff]/25 overflow-hidden shadow-xl backdrop-blur-md transition-all duration-300 ${borderAccent}`}
              >
                {/* Image Section with badge */}
                <div className="relative h-56 w-full overflow-hidden bg-[#060b1e]">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091438] via-[#091438]/30 to-transparent" />
                  
                  {/* Category icon & badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${badgeBg}`}>
                      {product.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 p-2.5 rounded-xl bg-[#060b1e]/90 border border-[#00c8ff]/40 text-white shadow-lg">
                    <IconComponent className={`w-5 h-5 ${isFire ? 'text-[#ec4899]' : 'text-[#00f0ff]'}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col justify-between text-right space-y-5">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#00f0ff] tracking-wider block">
                      {product.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Technical Highlights list */}
                    <div className="pt-3 border-t border-[#0066ff]/20 space-y-2">
                      <div className="text-xs font-bold text-slate-300">الخصائص والمواصفات:</div>
                      {product.technicalHighlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFire ? 'text-[#ec4899]' : 'text-[#00f0ff]'}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#0066ff]/20 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCategory(product.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-300 hover:text-white group-hover:underline cursor-pointer"
                    >
                      <span>اكتشف المزيد</span>
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </button>

                    <button
                      onClick={() => onRequestSpecs(product.id)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#0e1d4d] hover:bg-[#132766] text-slate-100 hover:text-white border border-[#00c8ff]/40 transition-colors cursor-pointer shadow-sm"
                    >
                      طلب المواصفة
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
