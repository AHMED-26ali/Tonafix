import React, { useState } from 'react';
import {
  FileText,
  Download,
  Search,
  ExternalLink,
  ShieldCheck,
  FileSpreadsheet,
  BookOpen,
} from 'lucide-react';
import { technicalDocsList } from '../data/companyData';
import { TechnicalDocument } from '../types';

interface TechnicalDocsSectionProps {
  onSelectDoc: (doc: TechnicalDocument) => void;
}

export const TechnicalDocsSection: React.FC<TechnicalDocsSectionProps> = ({
  onSelectDoc,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDocs = technicalDocsList.filter((doc) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'TDS' && doc.type === 'TDS') ||
      (activeFilter === 'SDS' && doc.type === 'SDS') ||
      (activeFilter === 'Guide' && doc.type === 'Guide');

    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="technical"
      className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-bold mb-3">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>المكتبة والبيانات الفنية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            المعلومات والوثائق الفنية (TDS & SDS)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            نوفر لمهندسي المشاريع ومقاولي الطلاء بطاقات البيانات الفنية الشاملة، تعليمات خلط وتطبيق الدهانات، معايير السفع الرملي وتجهيز الأسطح، وصحائف الأمان الصناعي والسلامة المهنية.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {[
              { id: 'all', label: 'جميع الوثائق' },
              { id: 'TDS', label: 'بطاقات البيانات الفنية (TDS)' },
              { id: 'SDS', label: 'صحائف بيانات السلامة (SDS)' },
              { id: 'Guide', label: 'أدلة التطبيق وتجهيز الأسطح' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم أو الكود الفني..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-10 pl-4 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-right"
            />
          </div>

        </div>

        {/* Document Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const isTds = doc.type === 'TDS';
            const isSds = doc.type === 'SDS';
            const typeBadge = isTds
              ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
              : isSds
              ? 'bg-pink-950 text-pink-300 border-pink-800'
              : 'bg-blue-950 text-blue-300 border-blue-800';

            const Icon = isTds ? FileSpreadsheet : isSds ? ShieldCheck : BookOpen;

            return (
              <div
                key={doc.id}
                className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between text-right shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${typeBadge}`}>
                      {doc.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{doc.code}</span>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">{doc.category}</span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-slate-500">
                    الإصدار: {doc.version}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDoc(doc)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>استعراض</span>
                    </button>

                    <button
                      onClick={() => onSelectDoc(doc)}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
                      title="تحميل الملف الفني"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Notice Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-right space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>تحضير الأسطح ومعدلات التغطية (Surface Preparation & Coverage):</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            يؤثر مستوى تجهيز السطح المعدني (مثل السفع بالرمال حتى درجة Sa 2.5 أو التنظيف الميكانيكي St 3) بشكل مباشر على قوة التصاق الطلاء وعمره الافتراضي. يمكنك التواصل مع الاستشاري الفني لتونافيكس لمراجعة خطة الدهان الخاصة بمشروعك.
          </p>
        </div>

      </div>
    </section>
  );
};
