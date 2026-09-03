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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#060b1e]"
    >
      {/* Background Industrial Image with Branded Gradient & Lighting Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={companyAssets.heroBg}
          alt="منشأة صناعية وهياكل معدنية مطلية بدهانات تونافيكس"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        {/* Multilayered sophisticated lighting: Deep Blue base + Electric Blue + Cyan + Vibrant Magenta */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b1e] via-[#071131]/90 to-[#060b1e]/70" />
        
        {/* Visible Electric Blue & Cyan Paint Wave Glow (Top-Right) */}
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0066ff]/25 via-[#00f0ff]/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
        {/* Vibrant Magenta / Hot Pink Paint Swirl Glow (Bottom-Left & Center) */}
        <div className="absolute bottom-0 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-[#ec4899]/20 via-[#8b5cf6]/15 to-transparent blur-[130px] rounded-full pointer-events-none" />
        
        {/* Subtle Purple transitional field */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-[#6366f1]/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Industrial Grid Lines subtle overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#00c8ff 1px, transparent 1px), linear-gradient(90deg, #00c8ff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Industrial Category Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a153a]/90 border border-[#00c8ff]/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner shadow-[#0052cc]/30">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
              <Factory className="w-4 h-4 text-[#00f0ff]" />
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
                className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-l from-[#00f0ff] via-[#38bdf8] via-[#818cf8] to-[#ec4899] bg-clip-text text-transparent leading-relaxed"
              >
                {companyInfo.tagline}
              </h2>
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              نقدم حلولاً متقدمة لطلاء وحماية الأسطح في المنشآت الصناعية، الهياكل الفولاذية، خطوط الأنابيب، والماكينات الثقيلة. أنظمة مبتكرة تجمع بين أحدث تقنيات الدهانات المقاومة للحريق، والدهانات الصناعية عالية التحمل، ودهانات NC السريعة لبيئات العمل الاحترافية.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={onExploreProducts}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white shadow-xl shadow-[#0052cc]/40 overflow-hidden cursor-pointer active:scale-95 transition-all"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] group-hover:brightness-110 transition-all duration-300"></span>
                <span className="relative z-10">استكشف منتجاتنا</span>
                <ArrowLeft className="relative z-10 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-100 bg-[#091438]/90 border border-[#00c8ff]/50 hover:border-[#00f0ff] hover:bg-[#0e2056] hover:shadow-[0_0_25px_rgba(0,200,255,0.25)] transition-all cursor-pointer shadow-lg shadow-[#0052cc]/20"
              >
                <span>تواصل معنا</span>
              </button>

              <button
                id="hero-tech-cta"
                onClick={onOpenTechnical}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white hover:bg-[#0c1844]/60 border border-transparent hover:border-[#00c8ff]/30 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#00f0ff]" />
                <span>طلب الوثائق الفنية (TDS / SDS)</span>
              </button>
            </div>

            {/* Key Assurance Indicators */}
            <div className="pt-6 border-t border-[#0066ff]/25 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>مواصفات صناعية للمشاريع</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ec4899] shrink-0" />
                <span>حماية ضد الصدأ والحرارة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>استشارات ودعم فني ميداني</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card with Logo & Industrial Coating Focus */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Brand Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#0052cc] via-[#00f0ff] to-[#ec4899] opacity-35 blur-2xl -z-10"></div>

              {/* Main Visual Box */}
              <div className="bg-[#091438]/90 border border-[#00c8ff]/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                
                {/* Visual Header with Logo */}
                <div className="flex items-center justify-between pb-5 border-b border-[#0066ff]/25">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#060b1e] border border-[#00c8ff]/40 p-1 shadow-md shadow-[#0052cc]/30">
                      <img
                        src={companyAssets.logo}
                        alt="تونافيكس للدهانات"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">منظومة الحماية الشاملة</h3>
                      <p className="text-xs text-cyan-300">3 فئات رئيسية للقطاع الصناعي</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#0b1b4a] text-cyan-300 border border-[#00c8ff]/40">
                    Industrial Grade
                  </span>
                </div>

                {/* 3 Core Highlight Badges */}
                <div className="space-y-3.5 pt-5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#060c24]/80 border border-[#ec4899]/30 hover:border-[#ec4899]/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all">
                    <div className="p-2.5 rounded-lg bg-[#2e081f] text-[#ec4899] border border-[#ec4899]/40 shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white">الدهانات النارية (Fire Retardant)</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        حماية حرارية متقدمة للهياكل الفولاذية والمنشآت ضد مخاطر الحريق.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#060c24]/80 border border-[#00c8ff]/30 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all">
                    <div className="p-2.5 rounded-lg bg-[#061e38] text-[#00f0ff] border border-[#00c8ff]/40 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white">الدهانات الصناعية (Industrial Coatings)</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        مقاومة فائقة للتآكل والرطوبة والمواد الكيميائية في بيئات التشغيل الصعبة.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#060c24]/80 border border-[#0066ff]/30 hover:border-[#38bdf8]/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all">
                    <div className="p-2.5 rounded-lg bg-[#0a1a44] text-[#38bdf8] border border-[#0066ff]/40 shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white">دهانات النيتروسليلوز (NC Paints)</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        جفاف سريع وإنتاجية مضاعفة للمنتجات المعدنية وتشطيبات الورش.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Note */}
                <div className="mt-5 p-3 rounded-xl bg-[#060c24]/90 border border-[#00c8ff]/30 text-right">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-slate-200">توافق المعايير:</span>
                    <span className="text-[#00f0ff] font-mono">EN / ISO / ASTM Standards Alignment</span>
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
