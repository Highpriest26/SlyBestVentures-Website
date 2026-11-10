import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Search, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FinalQuoteCtaSectionProps {
  title?: string;
  subtitle?: string;
  preselectedCategory?: string;
}

export const FinalQuoteCtaSection: React.FC<FinalQuoteCtaSectionProps> = ({
  title = 'Ready to source, import, or ship from China to Nigeria?',
  subtitle = 'Share your product details, supplier links, or shipping requirements with Slybest Ventures Global Hubs. Our team responds immediately on WhatsApp or through our quote form.',
  preselectedCategory,
}) => {
  const quoteUrl = preselectedCategory
    ? `/request-a-quote?category=${encodeURIComponent(preselectedCategory)}`
    : '/request-a-quote';

  return (
    <section className="bg-white py-14 sm:py-24 text-brand-midnight overflow-hidden w-full max-w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-midnight text-white p-6 sm:p-10 md:p-14 rounded-md shadow-2xl border border-slate-800 w-full max-w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-brand-cobalt rounded-full" />
                <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
                  Slybest Trade Corridor • China ↔ Nigeria • Open 24/7
                </span>
              </div>
              <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl mb-3">
                {title}
              </h2>
              <p className="text-[15px] sm:text-base text-white/75 font-light leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* 3 Prominent CTA Buttons Requested by Owner */}
            <div className="flex flex-col sm:flex-row flex-wrap w-full lg:w-auto items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to={quoteUrl}
                className="group inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-md bg-brand-cobalt hover:bg-blue-600 px-6 sm:px-7 text-xs font-black uppercase tracking-widest text-white shadow-sm transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/catalogue"
                className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-md bg-brand-amber hover:bg-amber-400 px-6 sm:px-7 text-xs font-black uppercase tracking-widest text-brand-midnight transition-all"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span>Source a Product</span>
              </Link>

              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 px-6 sm:px-7 text-xs font-black uppercase tracking-widest text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Direct Lagos Office & Phone Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-start sm:items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-amber shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
              <span>
                <strong className="text-white">Lagos Head Office:</strong>{' '}
                {SITE_CONFIG.contacts.nigeriaLocation.address}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {SITE_CONFIG.contacts.phoneNumbers.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-brand-cyan hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
