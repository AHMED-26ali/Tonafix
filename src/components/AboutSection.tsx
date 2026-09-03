import React from 'react';
import { Target, Award, ShieldCheck, Cog, CheckCircle, Factory } from 'lucide-react';
import { companyInfo, companyAssets } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#081232]/80 border-t border-b border-[#0066ff]/25 relative overflow-hidden">
      {/* Decorative ambient gradients matching logo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066ff]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ec4899]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-72 h-72 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0a1844] border border-[#00c8ff]/40 text-cyan-300 text-xs font-bold mb-3 shadow-sm">
            <span>من نحن</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            شريكك المتخصص في حماية المنشآت والصناعات الوطنية
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            تأسست <strong className="text-[#00f0ff] font-bold">{companyInfo.name}</strong> برؤية هندسية واضحة تركز على تلبية المتطلبات الصارمة لقطاعات التصنيع، الإنشاءات المعدنية، والورش المتطورة. نحن لسنا شركة دهانات ديكورية للمنازل، بل نكرس كافة أبحاثنا وتطبيقاتنا للدهانات الفنية عالية الكفاءة.
          </p>
        </div>

        {/* 2-Column Industrial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#00c8ff]/30 shadow-2xl bg-[#060b1e]">
              <img
                src={companyAssets.indCoating}
                alt="تطبيقات الطلاء الصناعي في منشأة تونافيكس"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b1e] via-[#060b1e]/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#091740] text-[#00f0ff] border border-[#00c8ff]/40 text-xs font-semibold mb-2">
                  <Factory className="w-3.5 h-3.5" />
                  <span>تطبيقات ميدانية متينة</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  تركيبات كيميائية مصممة لظروف التشغيل الصعبة
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  حماية متواصلة ضد الرطوبة، الإجهاد الميكانيكي، والحرارة العالية.
                </p>
              </div>
            </div>

            {/* Float Highlight Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-xl bg-[#0a153a] border border-[#00c8ff]/50 shadow-2xl backdrop-blur-md text-right">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#0052cc] via-[#00c8ff] to-[#ec4899] text-white shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-300">التزام صارم</div>
                <div className="text-sm font-black text-white">بالمعايير الفنية والهندسية</div>
              </div>
            </div>
          </div>

          {/* Pillars & Facts */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-right">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-[#070e28]/90 border border-[#0066ff]/25 hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#0a1b48] border border-[#00c8ff]/30 flex items-center justify-center text-[#00f0ff] mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">حلول طلاء متخصصة</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  تطوير تركيبات نوعية تلبي احتياجات كل سطح، بدءاً من الهياكل الفولاذية وحتى أدق القطع الميكانيكية.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070e28]/90 border border-[#0066ff]/25 hover:border-[#ec4899]/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#2e0820] border border-[#ec4899]/30 flex items-center justify-center text-[#ec4899] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">جودة تصنيع متسقة</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  رقابة واختبارات معملية مستمرة لكل تشغيلة لضمان مطابقة اللزوجة، درجة الجفاف، وقوة الالتصاق.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070e28]/90 border border-[#0066ff]/25 hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#072440] border border-[#00c8ff]/30 flex items-center justify-center text-[#00f0ff] mb-3">
                  <Cog className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">كفاءة الأداء الفني</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  معدلات فرد وتغطية متقدمة تقلل من الفاقد وزمن الإنجاز للمشاريع الصناعية الكبرى.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070e28]/90 border border-[#0066ff]/25 hover:border-[#38bdf8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#0a1a44] border border-[#0066ff]/30 flex items-center justify-center text-[#38bdf8] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">دعم ومتابعة هندسية</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  توفير التوجيه المباشر لمقاولي الدهان وفرق الصيانة لضمان أقصى استفادة من خواص المنتج.
                </p>
              </div>

            </div>

            {/* Grounded Bullet Points */}
            <div className="p-4 rounded-xl bg-[#060c24]/90 border border-[#0066ff]/25 space-y-2.5 shadow-md">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>التركيز الحصري على قطاع الصناعة والورش الإنشائية دون تشعب في الدهانات المنزلية.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#ec4899] shrink-0" />
                <span>توفير بطاقات البيانات الفنية (TDS) وبيانات الأمان والسلامة (SDS) لكل منتج.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>مرونة في توفير كميات المشاريع وتوريد المنتجات لورش التصنيع والمقاولات.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
