import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardCheck,
  Calculator,
  Ship,
  Truck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { POLICIES_CONFIG } from '../config/policiesConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { ChinaNigeriaRouteVisual } from '../components/ChinaNigeriaRouteVisual';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const HowItWorksPage: React.FC = () => {
  const faqItems = [
    {
      q: 'What do I need to submit a product request?',
      a: 'Share the product name or description, category, quantity, preferred shipping method (Sea, Air, or Not sure), and your destination city/state in Nigeria.',
    },
    {
      q: 'Why do you use quotations instead of fixed prices?',
      a: 'Factory pricing, exchange rates, freight charges, customs duties, and order quantities change dynamically. A tailored quotation ensures accurate pricing.',
    },
    {
      q: 'Should I choose sea freight or air freight?',
      a: 'Sea freight is ideal for bulk orders, heavy appliances, vehicles, and solar equipment. Air freight is suited for urgent, compact electronics and samples.',
    },
    {
      q: 'How are goods delivered in Nigeria?',
      a: 'We coordinate customs clearing and arrange collection at our Alaba International Market hub in Lagos or delivery to your agreed destination state.',
    },
  ];

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.howItWorks.title}
        description={PAGE_METADATA.howItWorks.description}
        structuredData={faqStructuredData}
      />

      {/* Sleek Hero */}
      <section className="relative bg-brand-midnight text-white py-16 sm:py-22 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
              5-STAGE WORKFLOW // THE TRADE BRIDGE
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
              How Slybest Helps You Move Goods From China to Nigeria
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Click through the five stages below to see how your order moves from initial product
              request to delivery in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 5-Stage Route Visual */}
      <section className="py-16 sm:py-22 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ChinaNigeriaRouteVisual />

          {/* 4 Concise Pillar Cards: Request, Quote, Shipping, Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-midnight text-brand-cyan flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-display font-extrabold text-brand-midnight">
                  1. Request Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Share product category, specs, link or photo, required quantity, and Nigerian
                  destination.
                </p>
              </div>
              <Link
                to="/request-a-quote"
                className="mt-5 text-xs font-bold text-brand-cobalt hover:underline inline-flex items-center gap-1"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-midnight text-brand-cyan flex items-center justify-center mb-4">
                  <Calculator className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-display font-extrabold text-brand-midnight">
                  2. Quotation Process
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {POLICIES_CONFIG.quotationNotice}
                </p>
              </div>
              <Link
                to="/china-sourcing"
                className="mt-5 text-xs font-bold text-brand-cobalt hover:underline inline-flex items-center gap-1"
              >
                <span>7-Step Sourcing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-midnight text-brand-cyan flex items-center justify-center mb-4">
                  <Ship className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-display font-extrabold text-brand-midnight">
                  3. Shipping Options
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Sea freight for bulk &amp; heavy cargo, or air freight for urgent electronics and
                  compact consignments.
                </p>
              </div>
              <Link
                to="/shipping-importation"
                className="mt-5 text-xs font-bold text-brand-cobalt hover:underline inline-flex items-center gap-1"
              >
                <span>Freight Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-midnight text-brand-cyan flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-display font-extrabold text-brand-midnight">
                  4. Nigeria Delivery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Customs clearing coordination with handover at our Lagos Alaba hub or doorstep
                  delivery nationwide.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-5 text-xs font-bold text-brand-cobalt hover:underline inline-flex items-center gap-1"
              >
                <span>Lagos Hub Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Concise FAQ Grid */}
          <div className="pt-4">
            <h2 className="text-2xl font-display font-extrabold text-brand-midnight mb-6">
              Common Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm"
                >
                  <h3 className="text-base font-display font-bold text-brand-midnight">
                    {item.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
