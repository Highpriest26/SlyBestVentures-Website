import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FinalQuoteCtaSectionProps {
  title?: string;
  subtitle?: string;
  preselectedCategory?: string;
}

export const FinalQuoteCtaSection: React.FC<FinalQuoteCtaSectionProps> = ({
  title = 'Ready to source or ship from China?',
  subtitle = 'Share your product details, supplier links, or shipping requirements with Slybest Ventures Global Hubs for a tailored quotation.',
  preselectedCategory,
}) => {
  const quoteUrl = preselectedCategory
    ? `/request-a-quote?category=${encodeURIComponent(preselectedCategory)}`
    : '/request-a-quote';

  return (
    <section className="bg-white py-16 sm:py-24 text-brand-midnight overflow-hidden w-full max-w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-midnight text-white p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 rounded-md shadow-2xl border border-slate-800 w-full max-w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-brand-cobalt rounded-full" />
              <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
                Slybest Trade Corridor • Open 24/7
              </span>
            </div>
            <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl mb-3">
              {title}
            </h2>
            <p className="text-[15px] sm:text-base text-white/70 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to={quoteUrl}
              className="group inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-md bg-brand-cobalt hover:bg-blue-600 px-7 sm:px-8 text-xs font-black uppercase tracking-widest text-white shadow-sm transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <a
              href={SITE_CONFIG.contacts.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-md border border-white/35 hover:bg-white hover:text-brand-midnight px-7 sm:px-8 text-xs font-bold uppercase tracking-widest text-white transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
