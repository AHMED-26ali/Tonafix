import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { TechnicalDocument } from '../types';

interface TechnicalModalProps {
  doc: TechnicalDocument | null;
  onClose: () => void;
  onRequestQuote: (docCode: string) => void;
}

export const TechnicalModal: React.FC<TechnicalModalProps> = ({
  doc,
  onClose,
  onRequestQuote,
}) => {
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#091438] border border-[#0066ff]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#060c24] border-b border-[#0066ff]/25 flex items-center justify-between text-right">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-[#0a1844] hover:bg-[#0052cc]/40 transition-colors cursor-pointer border border-[#0066ff]/25"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-0.5">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#061e38] text-cyan-300 border border-[#00c8ff]/40">
                {doc.code}
              </span>
              <span className="text-xs font-bold text-slate-400">{doc.category}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {doc.title}
            </h3>
          </div>
        </div>

        {/* Modal Body: Technical Data Sheet Template */}
        <div className="p-6 overflow-y-auto space-y-6 text-right text-xs sm:text-sm text-slate-200">
          
          {/* Doc Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-[#060c24] border border-[#0066ff]/25 text-center">
            <div>
              <span className="text-[11px] text-slate-400 block">نوع الوثيقة</span>
              <span className="font-bold text-white">{doc.type}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">الإصدار</span>
              <span className="font-mono text-[#00f0ff]">{doc.version}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">حجم الملف</span>
              <span className="text-slate-300 font-mono">{doc.fileSize}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">الشركة</span>
              <span className="text-[#ec4899] font-bold">تونافيكس</span>
            </div>
          </div>

          {/* Scope Description */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">الوصف الفني العام للنظام:</h4>
            <p className="text-slate-200 leading-relaxed bg-[#060c24] p-4 rounded-xl border border-[#0066ff]/20">
              {doc.description}
            </p>
          </div>

          {/* Technical Spec Placeholders (strictly formatted, non-fabricated) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">المواصفات الفنية المعتمدة في نشرة المعمل:</h4>
            
            <div className="divide-y divide-[#0066ff]/20 border border-[#0066ff]/25 rounded-xl bg-[#060c24] overflow-hidden">
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">الراتنج والأساس الكيميائي:</span>
                <span className="font-semibold text-white">[وفقاً للمنظومة المعتمدة للمنتج]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">نسبة المواد الصلبة بالحجم (% Solids by Volume):</span>
                <span className="font-mono text-[#00f0ff]">[معتمد في بطاقة التشغيلة TDS]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">سماكة الطبقة الجافة الموصى بها (DFT):</span>
                <span className="font-mono text-[#00f0ff]">[حسب الحسابات الهندسية ومخطط المشروع]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">معدل الفرد النظري (Theoretical Spreading Rate):</span>
                <span className="font-mono text-[#00f0ff]">[محدد بدقة في التقرير الفني]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">درجة الحرارة ونقطة الندى أثناء التطبيق:</span>
                <span className="font-semibold text-white">[أعلى من نقطة الندى بـ 3 درجات مئوية على الأقل]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">طريقة الرش والتطبيق الموصى بها:</span>
                <span className="font-semibold text-white">[Airless Spray / ماكينات الرش اللاهوائي أو الفرشاة]</span>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="p-4 rounded-xl bg-[#081b3d] border border-[#00c8ff]/30 text-xs space-y-1">
            <span className="font-bold text-[#00f0ff] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
              <span>إشعار التوريد للمشاريع الهندسية:</span>
            </span>
            <p className="text-slate-200 leading-relaxed">
              يتم تسليم النشرة الفنية المطبوعة والموقعة رسمياً مع شهادة تحليل الجودة (COA) لكل كمية يتم توريدها لموقع العمل لضمان مطابقتها للمواصفات الاستشارية.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-[#060c24] border-t border-[#0066ff]/25 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0a1844] hover:bg-[#0052cc]/40 text-slate-300 hover:text-white border border-[#0066ff]/30 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(doc.code);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            طلب عينات أو تسعير لهذا المنتج
          </button>
        </div>

      </div>
    </div>
  );
};
