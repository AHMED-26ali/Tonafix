import React from 'react';
import { X, Download, FileText, CheckCircle2, ShieldAlert, Printer, Share2 } from 'lucide-react';
import { TechnicalDocument } from '../types';
import { companyInfo } from '../data/companyData';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-right">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-0.5">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
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
        <div className="p-6 overflow-y-auto space-y-6 text-right text-xs sm:text-sm text-slate-300">
          
          {/* Doc Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <div>
              <span className="text-[11px] text-slate-500 block">نوع الوثيقة</span>
              <span className="font-bold text-white">{doc.type}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">الإصدار</span>
              <span className="font-mono text-cyan-300">{doc.version}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">حجم الملف</span>
              <span className="text-slate-400 font-mono">{doc.fileSize}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">الجهة المصنعة</span>
              <span className="text-pink-400 font-bold">تونافيكس</span>
            </div>
          </div>

          {/* Scope Description */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">الوصف الفني العام للنظام:</h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {doc.description}
            </p>
          </div>

          {/* Technical Spec Placeholders (strictly formatted, non-fabricated) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">المواصفات الفنية المعتمدة في نشرة المعمل:</h4>
            
            <div className="divide-y divide-slate-800 border border-slate-800 rounded-xl bg-slate-950 overflow-hidden">
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">الراتنج والأساس الكيميائي:</span>
                <span className="font-semibold text-white">[وفقاً للمنظومة المعتمدة للمنتج]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">نسبة المواد الصلبة بالحجم (% Solids by Volume):</span>
                <span className="font-mono text-cyan-300">[معتمد في بطاقة التشغيلة TDS]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">سماكة الطبقة الجافة الموصى بها (DFT):</span>
                <span className="font-mono text-cyan-300">[حسب الحسابات الهندسية ومخطط المشروع]</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">معدل الفرد النظري (Theoretical Spreading Rate):</span>
                <span className="font-mono text-cyan-300">[محدد بدقة في التقرير الفني]</span>
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
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs space-y-1">
            <span className="font-bold text-cyan-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>إشعار التوريد للمشاريع الهندسية:</span>
            </span>
            <p className="text-slate-300 leading-relaxed">
              يتم تسليم النشرة الفنية المطبوعة والموقعة رسمياً مع شهادة تحليل الجودة (COA) لكل كمية يتم توريدها لموقع العمل لضمان مطابقتها للمواصفات الاستشارية.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`سيتم إتاحة تحميل ملف ${doc.code} فور اكتمال رفعه على الخادم.`);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>تحميل نسخة PDF</span>
            </button>
            <button
              onClick={() => window.print()}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
              title="طباعة"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(doc.code);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-pink-600 shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            طلب عينات أو تسعير لهذا المنتج
          </button>
        </div>

      </div>
    </div>
  );
};
