import React from 'react';
import { Shield, Flame, Wrench, ArrowLeft, Download, CheckCircle2, Factory } from 'lucide-react';
import { companyAssets, companyInfo } from '../data/companyData';

interface HeroProps {
  onExploreProducts: () => void;
  onContactClick: () => void;
  onOpenTechnical: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onContactClick,
  onOpenTechnical,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950"
    >
      {/* Background Industrial Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={companyAssets.heroBg}
          alt="منشأة صناعية وهياكل معدنية مطلية بدهانات تونافيكس"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        {/* Multilayered sophisticated industrial lighting: Dark Navy + Electric Blue + Subtle Magenta */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-blue-900/25 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[at_bottom_left] from-pink-900/15 via-transparent to-transparent pointer-events-none" />

        {/* Industrial Grid Lines subtle overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Industrial Category Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <Factory className="w-4 h-4 text-cyan-400" />
              <span>أنظمة طلاء صناعي وحماية إنشائية متخصصة</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-3">
              <h1
                id="hero-main-title"
                className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.15]"
              >
                <span className="text-white block">{companyInfo.name}</span>
              </h1>
              <h2
                id="hero-sub-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-l from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent leading-relaxed"
              >
                {companyInfo.tagline}
              </h2>
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              نقدم حلولاً متقدمة لطلاء وحماية الأسطح في المنشآت الصناعية، الهياكل الفولاذية، خطوط الأنابيب، والماكينات الثقيلة. أنظمة مبتكرة تجمع بين أحدث تقنيات الدهانات المقاومة للحريق، والدهانات الصناعية عالية التحمل، ودهانات NC السريعة لبيئات العمل الاحترافية.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={onExploreProducts}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white shadow-xl shadow-cyan-950/60 overflow-hidden cursor-pointer active:scale-95 transition-all"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-pink-600 group-hover:brightness-110 transition-all duration-300"></span>
                <span className="relative z-10">استكشف منتجاتنا</span>
                <ArrowLeft className="relative z-10 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer shadow-lg"
              >
                <span>تواصل معنا</span>
              </button>

              <button
                id="hero-tech-cta"
                onClick={onOpenTechnical}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>طلب الوثائق الفنية (TDS / SDS)</span>
              </button>
            </div>

            {/* Key Assurance Indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>مواصفات صناعية للمشاريع</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>حماية ضد الصدأ والحرارة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>استشارات ودعم فني ميداني</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card with Logo & Industrial Coating Focus */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Brand Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-pink-600 opacity-25 blur-2xl -z-10"></div>

              {/* Main Visual Box */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                
                {/* Visual Header with Logo */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 p-1">
                      <img
                        src={companyAssets.logo}
                        alt="تونافيكس للدهانات"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">منظومة الحماية الشاملة</h3>
                      <p className="text-xs text-cyan-400">3 فئات رئيسية للقطاع الصناعي</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Industrial Grade
                  </span>
                </div>

                {/* 3 Core Highlight Badges */}
                <div className="space-y-3.5 pt-5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-pink-500/30 transition-colors">
                    <div className="p-2.5 rounded-lg bg-pink-950/40 text-pink-400 border border-pink-900/40 shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white">الدهانات النارية (Fire Retardant)</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        حماية حرارية متقدمة للهياكل الفولاذية والمنشآت ضد مخاطر الحريق.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-900/40 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white">الدهانات الصناعية (Industrial Coatings)</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        مقاومة فائقة للتآكل والرطوبة والمواد الكيميائية في بيئات التشغيل الصعبة.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                    <div className="p-2.5 rounded-lg bg-blue-950/40 text-blue-400 border border-blue-900/40 shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white">دهانات النيتروسليلوز (NC Paints)</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        جفاف سريع وإنتاجية مضاعفة للمنتجات المعدنية وتشطيبات الورش.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Note */}
                <div className="mt-5 p-3 rounded-lg bg-slate-950/90 border border-cyan-900/40 text-right">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">توافق المعايير:</span>
                    <span className="text-cyan-400 font-mono">EN / ISO / ASTM Standards Alignment</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
