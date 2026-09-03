import React, { useState } from 'react';
import {
  FileText,
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
      className="py-24 bg-[#070e28] border-t border-[#0066ff]/25 relative overflow-hidden"
    >
      {/* Background glow matching logo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066ff]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#061e38] border border-[#00c8ff]/40 text-cyan-300 text-xs font-bold mb-3 shadow-sm">
            <FileText className="w-4 h-4 text-[#00f0ff]" />
            <span>المكتبة والبيانات الفنية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            المعلومات والوثائق الفنية (TDS & SDS)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
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
                    ? 'bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] text-white shadow-md'
                    : 'bg-[#091438] text-slate-300 hover:text-white border border-[#0066ff]/30 hover:border-[#00c8ff]/50'
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
              className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl pr-10 pl-4 py-2 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00c8ff] transition-colors text-right"
            />
          </div>
        </div>

        {/* Document Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const isTds = doc.type === 'TDS';
            const isSds = doc.type === 'SDS';
            const typeBadge = isTds
              ? 'bg-[#061e38] text-cyan-300 border-[#00c8ff]/40'
              : isSds
              ? 'bg-[#2e0820] text-[#f472b6] border-[#ec4899]/40'
              : 'bg-[#0a1844] text-blue-300 border-[#0066ff]/40';

            const Icon = isTds ? FileSpreadsheet : isSds ? ShieldCheck : BookOpen;

            return (
              <div
                key={doc.id}
                className="group p-6 rounded-2xl bg-[#091438]/90 border border-[#0066ff]/25 hover:border-[#00c8ff]/60 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] hover:bg-[#0c1b4a] transition-all duration-300 flex flex-col justify-between text-right shadow-lg backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${typeBadge}`}>
                      {doc.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{doc.code}</span>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <div className="p-2.5 rounded-xl bg-[#0a1844] border border-[#0066ff]/40 text-[#00f0ff] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">{doc.category}</span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors mt-0.5">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0066ff]/20 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-slate-400">
                    الإصدار: {doc.version}
                  </div>

                  <button
                    onClick={() => onSelectDoc(doc)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-[#081b3d] hover:bg-[#0c2859] border border-[#00c8ff]/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>استعراض البطاقة</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Notice Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#071336]/90 border border-[#00c8ff]/30 text-right space-y-2 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
            <span>تحضير الأسطح ومعدلات التغطية (Surface Preparation & Coverage):</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            يؤثر مستوى تجهيز السطح المعدني (مثل السفع بالرمال حتى درجة Sa 2.5 أو التنظيف الميكانيكي St 3) بشكل مباشر على قوة التصاق الطلاء وعمره الافتراضي. يمكنك التواصل مع الاستشاري الفني لتونافيكس لمراجعة خطة الدهان الخاصة بمشروعك.
          </p>
        </div>

      </div>
    </section>
  );
};
