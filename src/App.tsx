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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white" dir="rtl">
      
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
