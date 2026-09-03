import React from 'react';
import { Shield, Droplets, Gauge, Cog, ArrowLeft, Layers, Wrench } from 'lucide-react';
import { companyAssets } from '../data/companyData';

interface IndustrialPaintSectionProps {
  onRequestSpecs: () => void;
}

export const IndustrialPaintSection: React.FC<IndustrialPaintSectionProps> = ({
  onRequestSpecs,
}) => {
  return (
    <section
      id="industrial-paints"
      className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Cyan / Electric blue ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-700/50 text-cyan-400 text-xs font-bold mb-3">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>الحماية الميكانيكية والكيميائية</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            الدهانات الصناعية وأنظمة الحماية المتقدمة
          </h2>
          <p className="mt-3 text-lg font-medium text-cyan-400">
            Heavy-Duty Industrial Coatings & Anti-Corrosion Systems
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            حلول متكاملة تهدف إلى منع تآكل المعادن والصلب تحت أقسى الظروف التشغيلية. تشمل منظومتنا بادئات طلاء مضادة للصدأ، ودهانات وسيطة عالية السماكة، ودهانات تشطيب صناعية ذات مقاومة فائقة للعوامل الجوية والمواد الكيميائية والأملاح.
          </p>
        </div>

        {/* Core Layout: Industrial Visual + Applications Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase: Industrial Piping & Heavy Machinery */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-950">
              <img
                src={companyAssets.indCoating}
                alt="دهانات صناعية لحماية خطوط الأنابيب والمعدات الثقيلة"
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-right">
                <div className="inline-block px-3 py-1 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-700 text-xs font-bold mb-2">
                  المعدات وخطوط الأنابيب
                </div>
                <h4 className="text-lg font-bold text-white">
                  عزل سطحي يطيل العمر الافتراضي للأصول
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  تركيبات تمنع تكون الصدأ الكهروكيميائي والتآكل الجوي.
                </p>
              </div>
            </div>

            {/* Quick Spec Badge */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-right flex items-center justify-between text-xs">
              <span className="text-slate-400">نطاق الاستخدام:</span>
              <span className="text-cyan-300 font-bold">المنشآت الكيماوية • محطات التوليد • مصانع الصلب</span>
            </div>
          </div>

          {/* Key Applications & Performance Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-right">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 text-cyan-400 border border-cyan-800/40 flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">مقاومة التآكل والصدأ (Anti-Corrosion)</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  حاجز كيميائي غير منفذ يمنع وصول الأكسجين والرطوبة إلى السطح المعدني لمنع تكوّن أكسيد الحديد.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-colors space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-950/70 text-blue-400 border border-blue-800/40 flex items-center justify-center">
                  <Cog className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">تحمل الآلات والمعدات الثقيلة</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  صلابة سطحية ممتازة تقاوم الخدش والاحتكاك الميكانيكي وتأثير الزيوت والشحوم الصناعية.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/40 transition-colors space-y-2">
                <div className="w-10 h-10 rounded-lg bg-pink-950/70 text-pink-400 border border-pink-800/40 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">التغطية والفرد الاقتصادي</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  كثافة صبغية عالية تضمن تغطية متجانسة بسماكات موحدة وتقلل استهلاك البويات في المشاريع الواسعة.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 text-cyan-400 border border-cyan-800/40 flex items-center justify-center">
                  <Gauge className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">ثبات الألوان في الهواء الطلق</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مقاومة متقدمة للأشعة فوق البنفسجية وتغيرات الطقس الموسمية دون تبهيت أو تقشر.
                </p>
              </div>

            </div>

            {/* Substrates Compatibility Checklist */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h5 className="text-sm font-bold text-white">
                الأسطح والمجالات المتوافقة:
              </h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  'الهياكل والجمالونات المعدنية',
                  'خطوط وشبكات الأنابيب',
                  'الصهاريج والخزانات الصناعية',
                  'معدات النقل والرافعات',
                  'ورش التشكيل والأعمال الفولاذية',
                  'الأبواب والمظلات الصناعية',
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center gap-4">
              <button
                id="ind-paint-request-cta"
                onClick={onRequestSpecs}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 shadow-xl shadow-cyan-950/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>طلب المواصفات الفنية للدهانات الصناعية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
