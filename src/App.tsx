import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CataloguePage } from './pages/CataloguePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ChinaSourcingPage } from './pages/ChinaSourcingPage';
import { ShippingImportationPage } from './pages/ShippingImportationPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { RequestAQuotePage } from './pages/RequestAQuotePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';
import { SITE_CONFIG } from './config/siteConfig';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-softWhite text-brand-darkText overflow-x-hidden">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-brand-cobalt focus:text-white focus:font-bold"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/china-sourcing" element={<ChinaSourcingPage />} />
            <Route path="/shipping-importation" element={<ShippingImportationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-a-quote" element={<RequestAQuotePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Persistent Floating WhatsApp Quick Action Box (Positioned above mobile floating footer bar on <lg) */}
        <a
          href={SITE_CONFIG.contacts.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Slybest Ventures Global Hubs on WhatsApp"
          className="fixed bottom-24 right-3 lg:bottom-5 lg:right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-lg border border-emerald-400/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
