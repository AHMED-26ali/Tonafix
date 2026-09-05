import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export const FloatingContactButtons: React.FC = () => {
  return (
    <aside
      id="floating-contact-actions"
      aria-label="خيارات الاتصال والواتساب السريعة"
      className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 items-start pointer-events-auto"
    >
      {/* WhatsApp Direct Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="محادثة واتساب مباشرة مع تونافيكس"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400/40"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100"></span>
          </span>
        </div>
        <span className="hidden sm:inline font-sans text-xs">واتساب مباشر</span>
      </a>

      {/* Phone Call Direct Floating Button */}
      <a
        id="floating-phone-call-btn"
        href={companyInfo.phoneTel}
        aria-label="اتصال هاتفي مباشر بشركة تونافيكس"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#0052cc] to-[#0099ff] text-white font-bold text-xs shadow-2xl shadow-[#0066ff]/40 hover:shadow-[#0099ff]/60 hover:scale-105 active:scale-95 transition-all duration-200 border border-[#00c8ff]/40"
      >
        <Phone className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-sans text-xs">اتصال مباشر</span>
      </a>
    </aside>
  );
};
