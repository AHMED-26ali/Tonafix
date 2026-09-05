import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Flame,
  Shield,
  Wrench,
  ArrowUp,
  Globe,
  Share2,
  MessageSquare,
  Clock,
} from 'lucide-react';
import { companyAssets, companyInfo, navLinks } from '../data/companyData';

interface FooterProps {
  onNavClick: (href: string) => void;
  onNavigateTerms?: () => void;
  onNavigatePrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onNavigateTerms,
  onNavigatePrivacy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05091a] border-t border-[#0066ff]/25 text-slate-300 relative overflow-hidden pt-16 pb-12">
      {/* Decorative branded top border gradient matching logo */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00c8ff] via-[#ec4899] to-transparent" />

      {/* Subtle background ambient glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#0052cc]/15 via-[#00c8ff]/8 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#0066ff]/20 text-right">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#081335] border border-[#00c8ff]/40 overflow-hidden shadow-lg shadow-[#00c8ff]/10">
                <img
                  src={companyAssets.logo}
                  alt="شعار تونافيكس للدهانات"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white block">
                  {companyInfo.name}
                </span>
                <span className="text-xs text-[#00f0ff] font-semibold tracking-wide">
                  {companyInfo.nameEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              شركة رائدة متخصصة في حلول وتوريد الدهانات الصناعية المتقدمة، أنظمة مقاومة الحريق الإنشائية، ودهانات NC للورش والمصانع والهياكل الفولاذية بالمملكة العربية السعودية والشرق الأوسط.
            </p>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => onNavClick(link.href)}
                    className="hover:text-[#00f0ff] transition-colors cursor-pointer text-slate-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              أنظمة الطلاء
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('#fire-paints')}
                  className="hover:text-[#ec4899] flex items-center gap-1.5 transition-colors cursor-pointer text-slate-300"
                >
                  <Flame className="w-3.5 h-3.5 text-[#ec4899]" />
                  <span>الدهانات النارية</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#industrial-paints')}
                  className="hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors cursor-pointer text-slate-300"
                >
                  <Shield className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>الدهانات الصناعية</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#nc-paints')}
                  className="hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer text-slate-300"
                >
                  <Wrench className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>دهانات NC السريعة</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#technical')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-slate-300"
                >
                  <span>بطاقات TDS و SDS</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white tracking-wider">
              مقر الشركة والتواصل
            </h4>
            <div className="space-y-2.5">
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-300 hover:text-cyan-300 transition-colors group"
                title="فتح الموقع في خرائط Google"
              >
                <MapPin className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={companyInfo.phoneTel}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors group"
                title="انقر للاتصال المباشر"
              >
                <Phone className="w-4 h-4 text-[#00f0ff] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="dir-ltr font-mono font-bold">{companyInfo.phoneDisplay}</span>
              </a>

              {/* Direct WhatsApp */}
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors group"
                title="محادثة واتساب فورية"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span>واتساب مباشر: <strong className="font-mono text-emerald-400 dir-ltr inline-block">{companyInfo.whatsappDisplay}</strong></span>
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-pink-300 transition-colors group"
                title="إرسال بريد إلكتروني"
              >
                <Mail className="w-4 h-4 text-[#ec4899] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{companyInfo.email}</span>
              </a>

              {/* Working Hours */}
              <div className="flex items-start gap-2 text-slate-300 pt-1 border-t border-[#0066ff]/20">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-amber-300/90">{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs border-t border-[#0066ff]/20 mt-4">
          <p className="text-slate-400 text-center md:text-right">
            © 2026 تونافيكس للدهانات — جميع الحقوق محفوظة
          </p>

          {/* Required Legal Links: "شروط وأحكام الاستخدام | سياسة الخصوصية" */}
          <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
            <button
              onClick={onNavigateTerms}
              className="hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              شروط وأحكام الاستخدام
            </button>
            <span className="text-[#0066ff]/60">|</span>
            <button
              onClick={onNavigatePrivacy}
              className="hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              صُنع بمواصفات صناعية وهندسية للمنشآت والمشاريع بالمملكة العربية السعودية
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#081335] hover:bg-[#0c2054] text-slate-300 hover:text-[#00f0ff] border border-[#0066ff]/30 transition-colors cursor-pointer flex items-center gap-1"
              title="العودة لأعلى الصفحة"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
