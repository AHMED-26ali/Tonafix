import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronLeft, ArrowUpRight } from 'lucide-react';
import { navLinks, companyAssets, companyInfo } from '../data/companyData';

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateSection?: (href: string) => void;
  isLegalPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateSection,
  isLegalPage = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (!isLegalPage) {
        // Simple active link spy
        const sections = navLinks.map(l => l.href.replace('#', ''));
        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLegalPage]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (isLegalPage && onNavigateHome && href === '#home') {
      onNavigateHome();
      return;
    }
    if (onNavigateSection) {
      onNavigateSection(href);
      return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060c24]/95 backdrop-blur-md border-b border-[#0066ff]/30 shadow-2xl shadow-[#040818]/80 py-2.5'
          : 'bg-gradient-to-b from-[#060c24]/90 via-[#060c24]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Logo on the Right (RTL Primary) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="header-brand-link"
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#0a1334] border border-[#00c8ff]/50 overflow-hidden shadow-lg shadow-[#0052cc]/20 group-hover:border-[#ec4899]/70 transition-all duration-300">
              <img
                src={companyAssets.logo}
                alt="شعار تونافيكس للدهانات"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {companyInfo.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-300 tracking-wider flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
                <span>حلول طلاء صناعي متخصصة</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center gap-1 bg-[#091438]/80 border border-[#0066ff]/25 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  id={`nav-link-${sectionId}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0052cc] via-[#0099ff] to-[#00f0ff] text-white shadow-md shadow-[#0066ff]/40'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-[#102256]/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Left Side Actions (CTA & Mobile Menu Trigger) */}
          <div className="flex items-center gap-2.5">
            <button
              id="header-cta-button"
              onClick={() => handleNavClick('#contact')}
              className="relative group overflow-hidden rounded-xl px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0066ff]/30 transition-all duration-300 hover:shadow-[#ec4899]/30 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] group-hover:brightness-110 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>تواصل معنا</span>
              </span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-[#091438] border border-[#0066ff]/30 text-slate-200 hover:text-cyan-300 hover:border-[#00f0ff]/50 transition-colors cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-[#070e28]/98 border-b border-[#0066ff]/30 px-5 pt-3 pb-6 space-y-2 backdrop-blur-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-right text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-l from-[#0052cc]/40 via-[#00f0ff]/20 to-transparent text-cyan-300 border-r-2 border-[#00f0ff]'
                      : 'text-slate-300 hover:bg-[#0e1a42] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#0066ff]/20 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] shadow-lg shadow-[#0066ff]/40 cursor-pointer hover:brightness-110 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>طلب عرض أسعار واستشارة فنية</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
