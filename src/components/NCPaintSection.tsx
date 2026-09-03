import React from 'react';
import { Zap, Wrench, Clock, FileCheck, CheckCircle2, Sliders } from 'lucide-react';
import { companyAssets } from '../data/companyData';

interface NCPaintSectionProps {
  onOpenSpecs: () => void;
}

export const NCPaintSection: React.FC<NCPaintSectionProps> = ({ onOpenSpecs }) => {
  return (
    <section
      id="nc-paints"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Electric blue / magenta accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/70 border border-blue-700/50 text-blue-400 text-xs font-bold mb-3">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>أنظمة النيتروسليلوز للورش والتطبيقات السريعة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            دهانات النيتروسليلوز (دهانات NC)
          </h2>
          <p className="mt-3 text-lg font-medium text-pink-400 font-mono">
            Nitrocellulose (NC) Fast-Drying Industrial Paints
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            أنظمة طلاء احترافية تعتمد على راتنجات النيتروسليلوز سريعة التصلب، تمنح تشطيباً ناعماً وسهولة بالغة في التطبيق بواسطة مسدسات الرش الهوائية في الورش الصناعية وخطوط الإنتاج السريعة التي تتطلب معدلات دوران فائقة للقطع المشغولة.
          </p>
        </div>

        {/* 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Technical Scope & Editable Placeholders */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <span>المزايا التشغيلية لأنظمة NC من تونافيكس</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                تتميز دهانات NC بخاصية التبخر السريع للمذيبات العضوية وتكوين فيلم دهان متماسك دون الحاجة إلى أفران تجفيف معقدة، مما يجعلها الخيار المفضل لتصنيع وتشطيب الأجزاء المعدنية، اللوحات، وقطع الغيار التي تحتاج إنتاجية متسارعة وجودة تشطيب متسقة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>سرعة جفاف مثالية ترفع كفاءة خطوط التجميع.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>سهولة الصنفرة وتعديل وإعادة الرش الفوري.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>مظهر نهائي فائق النعومة والانسجام البصري.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <FileCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>تنوع واسع في درجات اللمعان والمطفي.</span>
                </div>
              </div>
            </div>

            {/* Official Editable Placeholders Notice Box (Strict rule adherence) */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-dashed border-cyan-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800">
                  بيانات فنية قابلة للتعديل والاعتماد
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Tonavix Lab Template</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                التزاماً بالمعايير الهندسية وعدم وضع أرقام غير موثقة، تتيح تونافيكس إدراج القيم الفنية الدقيقة المعتمدة من مختبر الشركة:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">زمن الجفاف السطحي:</span>
                  <span className="font-mono text-cyan-300 font-semibold">[محدد في نشرة TDS الفنية]</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">نسبة التخفيف الموصى بها:</span>
                  <span className="font-mono text-cyan-300 font-semibold">[محدد في نشرة TDS الفنية]</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">سماكة الفيلم الجاف (DFT):</span>
                  <span className="font-mono text-cyan-300 font-semibold">[محدد في نشرة TDS الفنية]</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">معدل الفرد النظري (m²/L):</span>
                  <span className="font-mono text-cyan-300 font-semibold">[محدد في نشرة TDS الفنية]</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center gap-4">
              <button
                id="nc-paint-request-cta"
                onClick={onOpenSpecs}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-pink-600 shadow-xl shadow-cyan-950/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>طلب بطاقة البيانات الفنية (TDS) لدهانات NC</span>
              </button>
            </div>

          </div>

          {/* Visual Showcase: Industrial NC Spraying */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-950">
              <img
                src={companyAssets.ncCoating}
                alt="تطبيق دهانات NC في غرف الرش الصناعية الاحترافية"
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-right">
                <div className="inline-block px-3 py-1 rounded bg-blue-950/90 text-cyan-300 border border-cyan-700 text-xs font-bold mb-2">
                  غرف الرش الصناعية والورش
                </div>
                <h4 className="text-lg font-bold text-white">
                  إنتاجية عالية وتشطيب معدني فائق النعومة
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  مناسب للمنتجات التي تحتاج دورات تشغيل وتجميع فورية.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
