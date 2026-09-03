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
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden pt-16 pb-12">
      {/* Decorative subtle border top gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 via-pink-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-right">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 p-1 overflow-hidden">
                <img
                  src={companyAssets.logo}
                  alt="شعار تونافيكس للدهانات"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white block">
                  {companyInfo.name}
                </span>
                <span className="text-xs text-cyan-400 font-semibold">
                  {companyInfo.nameEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              شركة رائدة في تصنيع الدهانات الصناعية المتقدمة، أنظمة مقاومة الحريق الإنشائية، ودهانات NC للورش والمصانع والهياكل الفولاذية في مصر والشرق الأوسط.
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
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
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
                  className="hover:text-pink-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Flame className="w-3.5 h-3.5 text-pink-400" />
                  <span>الدهانات النارية</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#industrial-paints')}
                  className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>الدهانات الصناعية</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#nc-paints')}
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Wrench className="w-3.5 h-3.5 text-blue-400" />
                  <span>دهانات NC السريعة</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#technical')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>بطاقات TDS و SDS</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white tracking-wider">
              المصنع والإدارة
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="dir-ltr">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs border-t border-slate-900/60 mt-4">
          <p className="text-slate-500 text-center md:text-right">
            © 2026 تونافيكس للدهانات — جميع الحقوق محفوظة
          </p>

          {/* Required Legal Links: "شروط وأحكام الاستخدام | سياسة الخصوصية" */}
          <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
            <button
              onClick={onNavigateTerms}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              شروط وأحكام الاستخدام
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onNavigatePrivacy}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-600 hidden sm:inline">
              صُنع بمواصفات صناعية وهندسية للمنشآت المصرية
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
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
