import React from 'react';
import { Flame, ShieldAlert, FileText, CheckCircle2, ChevronLeft, Building } from 'lucide-react';
import { companyAssets } from '../data/companyData';

interface FirePaintSectionProps {
  onRequestDetails: () => void;
}

export const FirePaintSection: React.FC<FirePaintSectionProps> = ({ onRequestDetails }) => {
  return (
    <section
      id="fire-paints"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background glow styling inspired by magenta/pink fire protection theme */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-950/70 border border-pink-700/50 text-pink-400 text-xs font-bold mb-3">
            <Flame className="w-4 h-4 text-pink-400" />
            <span>الأنظمة المتخصصة للحماية من الحريق</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            الدهانات النارية والمقاومة للحريق
          </h2>
          <p className="mt-3 text-lg font-medium text-cyan-400">
            Intumescent & Fire-Retardant Industrial Coating Systems
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            أنظمة طلاء هندسية متقدمة مصممة خصيصاً لتوفير حماية سلبية للمنشآت والهياكل المعدنية ضد تأثير درجات الحرارة المرتفعة أثناء حوادث الحريق، وتأخير وصول الصلب إلى درجة الانهيار الحراري وفقاً للمنظومة التطبيقية المحددة ووثائق المشروع الفنية.
          </p>
        </div>

        {/* Detailed Grid: Visuals + Engineering Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Engineering Mechanism Cards */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Mechanism Highlight Box */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-pink-500/20 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-950/80 text-pink-400 border border-pink-800/60">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  آلية عمل الدهان المنتفخ (Intumescent Mechanism)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                عند تعرض السطح لدرجات حرارة الحريق الشديدة، تتفاعل المكونات الكيميائية للدهان لتنتفخ مشكلة طبقة فحمية عازلة متعددة الخلايا بسماكة تفوق الطبقة الأصلية بأضعاف. هذا الحاجز الرغوي يحد بدرجة كبيرة من التوصيل الحراري إلى القلب الفولاذي، مما يحافظ على استقرار الهيكل الإنشائي لأطول فترة زمنية ممكنة لتمكين إجراءات الإخلاء والسلامة.
              </p>
            </div>

            {/* Scope of Use on Metal Structures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                  <Building className="w-4 h-4" />
                  <span>الكمرات والأعمدة الفولاذية</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  حماية عناصر الصلب الإنشائي الحاملة للأوزان داخل العنابر والمستودعات والمباني الصناعية.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>التوافق مع أنظمة التأسيس</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  إمكانية التطبيق فوق بادئات طلاء مضادة للتآكل متوافقة تماماً لمنع الصدأ والعزل في آن واحد.
                </p>
              </div>
            </div>

            {/* Technical Notice Box */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs sm:text-sm text-slate-300 space-y-1.5">
              <span className="font-bold text-cyan-300">ملاحظة هندسية وتطبيقية:</span>
              <p className="leading-relaxed">
                يعتمد تصنيف مقاومة الحريق الفعلي وعدد دقائق الحماية على المعامل المقطعي للقطاع الفولاذي (Hp/A)، وسماكة الفيلم الجاف (DFT) المطبقة طبقاً للمواصفات الفنية لكل مشروع. يرجى مراجعة فريقنا الهندسي لتحديد الحسابات الدقيقة.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="fire-paint-request-cta"
                onClick={onRequestDetails}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-pink-600 via-rose-600 to-blue-600 shadow-xl shadow-pink-950/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>اطلب التفاصيل الفنية وبطاقة TDS</span>
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400">
                متاح للمهندسين الاستشاريين والمقاولين الصناعيين
              </span>
            </div>

          </div>

          {/* Visual Showcase: Heavy Steel Structures */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl bg-slate-950">
              <img
                src={companyAssets.fireCoating}
                alt="تطبيق الدهانات النارية المقاومة للحريق على الهياكل الفولاذية"
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-right">
                <div className="inline-block px-3 py-1 rounded bg-pink-950/90 text-pink-300 border border-pink-700 text-xs font-bold mb-2">
                  الهياكل الإنشائية المعدنية
                </div>
                <h4 className="text-lg font-bold text-white">
                  عزل حراري فعال يحد من تداعي الفولاذ
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  تطبيق ميداني بواسطة معدات الرش اللاهوائي عالية الضغط.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
