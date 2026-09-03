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
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-cyan-950/40 shadow-xl shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4'
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
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-slate-900 border border-cyan-500/30 p-1 overflow-hidden shadow-lg shadow-cyan-950/30 group-hover:border-pink-500/50 transition-colors">
              <img
                src={companyAssets.logo}
                alt="شعار تونافيكس للدهانات"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 pointer-events-none" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {companyInfo.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>حلول طلاء صناعي متخصصة</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
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
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-pink-600 text-white shadow-md shadow-cyan-950/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
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
              className="relative group overflow-hidden rounded-lg px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-900/30 transition-all duration-300 hover:shadow-cyan-500/25 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-pink-600 group-hover:opacity-90 transition-opacity"></span>
              <span className="relative z-10 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>تواصل معنا</span>
              </span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
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
          className="xl:hidden bg-slate-950/98 border-b border-cyan-900/40 px-5 pt-3 pb-6 space-y-2 backdrop-blur-xl shadow-2xl"
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
                      ? 'bg-gradient-to-l from-blue-600/30 via-cyan-600/20 to-transparent text-cyan-300 border-r-2 border-cyan-400'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-pink-600 shadow-lg shadow-cyan-950/50"
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
