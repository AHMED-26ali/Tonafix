import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsOverview } from './components/ProductsOverview';
import { FirePaintSection } from './components/FirePaintSection';
import { IndustrialPaintSection } from './components/IndustrialPaintSection';
import { NCPaintSection } from './components/NCPaintSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { WhyTonavixSection } from './components/WhyTonavixSection';
import { TechnicalDocsSection } from './components/TechnicalDocsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TechnicalModal } from './components/TechnicalModal';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TechnicalDocument } from './types';
import { technicalDocsList, companyInfo } from './data/companyData';

type PageView = 'home' | 'terms' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedDoc, setSelectedDoc] = useState<TechnicalDocument | null>(null);
  const [contactProductType, setContactProductType] = useState<string>('fire');

  // Handle initial hash check and back/forward browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#terms' || hash === '#/terms') {
        setCurrentPage('terms');
      } else if (hash === '#privacy' || hash === '#/privacy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    if (page === 'terms') {
      window.location.hash = '#terms';
    } else if (page === 'privacy') {
      window.location.hash = '#privacy';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.pageYOffset - 75;
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectProductCategory = (catId: string) => {
    if (catId === 'fire-resistant') {
      scrollToSection('fire-paints');
    } else if (catId === 'industrial-coatings') {
      scrollToSection('industrial-paints');
    } else if (catId === 'nc-coatings') {
      scrollToSection('nc-paints');
    } else {
      scrollToSection('products');
    }
  };

  const handleRequestSpecs = (catId: string) => {
    if (catId.includes('fire')) {
      setContactProductType('fire');
    } else if (catId.includes('industrial') || catId.includes('ind')) {
      setContactProductType('industrial');
    } else if (catId.includes('nc')) {
      setContactProductType('nc');
    }
    scrollToSection('contact');
  };

  const handleOpenDoc = (doc: TechnicalDocument) => {
    setSelectedDoc(doc);
  };

  const handleRequestDocQuote = (docCode: string) => {
    if (docCode.toLowerCase().includes('fire')) {
      setContactProductType('fire');
    } else if (docCode.toLowerCase().includes('ind') || docCode.toLowerCase().includes('prime')) {
      setContactProductType('industrial');
    } else if (docCode.toLowerCase().includes('nc')) {
      setContactProductType('nc');
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#060b1e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden" dir="rtl">
      {/* Global Branded Ambient Light System matching Tonavix Logo */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-center Electric Blue & Cyan Horizon Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#0066ff]/20 via-[#00f0ff]/10 to-transparent blur-[140px] rounded-full" />
        {/* Right side Subtle Magenta & Hot Pink Glow */}
        <div className="absolute top-[30%] -right-48 w-[600px] h-[600px] bg-gradient-to-l from-[#ec4899]/12 via-[#8b5cf6]/10 to-transparent blur-[150px] rounded-full" />
        {/* Left side Deep Royal Blue & Cyan Glow */}
        <div className="absolute top-[65%] -left-48 w-[650px] h-[650px] bg-gradient-to-r from-[#0052cc]/15 via-[#00f0ff]/8 to-transparent blur-[160px] rounded-full" />
        {/* Bottom subtle magenta transition */}
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[400px] bg-gradient-to-t from-[#d946ef]/10 via-[#0052cc]/10 to-transparent blur-[140px] rounded-full" />
      </div>
      
      {/* Sticky Header */}
      <Header
        isLegalPage={currentPage !== 'home'}
        onNavigateHome={() => navigateTo('home')}
        onNavigateSection={(href) => scrollToSection(href.replace('#', ''))}
      />

      {/* Main Content Area: Conditional based on Page */}
      {currentPage === 'terms' ? (
        <main className="flex-1 pt-16 sm:pt-20">
          <TermsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigatePrivacy={() => navigateTo('privacy')}
            onContactClick={() => scrollToSection('contact')}
          />
        </main>
      ) : currentPage === 'privacy' ? (
        <main className="flex-1 pt-16 sm:pt-20">
          <PrivacyPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateTerms={() => navigateTo('terms')}
            onContactClick={() => scrollToSection('contact')}
          />
        </main>
      ) : (
        <main className="flex-1">
          
          {/* 1. Hero Section */}
          <Hero
            onExploreProducts={() => scrollToSection('products')}
            onContactClick={() => scrollToSection('contact')}
            onOpenTechnical={() => scrollToSection('technical')}
          />

          {/* 2. About Section */}
          <AboutSection />

          {/* 3. Products Categories Overview */}
          <ProductsOverview
            onSelectCategory={handleSelectProductCategory}
            onRequestSpecs={handleRequestSpecs}
          />

          {/* 4. Fire-Resistant Paints Section */}
          <FirePaintSection
            onRequestDetails={() => {
              setContactProductType('fire');
              scrollToSection('contact');
            }}
          />

          {/* 5. Industrial Paints Section */}
          <IndustrialPaintSection
            onRequestSpecs={() => {
              setContactProductType('industrial');
              scrollToSection('contact');
            }}
          />

          {/* 6. NC Paints Section */}
          <NCPaintSection
            onOpenSpecs={() => {
              setContactProductType('nc');
              scrollToSection('contact');
            }}
          />

          {/* 7. Applications / Industries Section */}
          <ApplicationsSection
            onConsultIndustry={(industryTitle) => {
              scrollToSection('contact');
            }}
          />

          {/* 8. Why Tonavix Section */}
          <WhyTonavixSection />

          {/* 9. Technical Information & Docs (TDS / SDS) */}
          <TechnicalDocsSection onSelectDoc={handleOpenDoc} />

          {/* 10. Contact Us Section */}
          <ContactSection initialProductType={contactProductType} />

        </main>
      )}

      {/* Footer */}
      <Footer
        onNavClick={(href) => scrollToSection(href.replace('#', ''))}
        onNavigateTerms={() => navigateTo('terms')}
        onNavigatePrivacy={() => navigateTo('privacy')}
      />

      {/* Technical Data Sheet Preview Modal */}
      <TechnicalModal
        doc={selectedDoc}
        onClose={() => setSelectedDoc(null)}
        onRequestQuote={handleRequestDocQuote}
      />

    </div>
  );
}
