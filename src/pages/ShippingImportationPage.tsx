import React from 'react';
import { Link } from 'react-router-dom';
import {
  Ship,
  Plane,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Clock,
  PackageCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const ShippingImportationPage: React.FC = () => {
  const { title, approvedCopy, promiseRuleNote, topics } =
    SITE_CONFIG.shippingAndImportation;

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.shippingImportation.title}
        description={PAGE_METADATA.shippingImportation.description}
      />

      {/* Hero with Verbatim Approved Copy */}
      <section className="bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
              <Ship className="w-4 h-4" aria-hidden="true" />
              <Plane className="w-4 h-4 text-brand-amber" aria-hidden="true" />
              <span>CHINA-TO-NIGERIA FREIGHT &amp; CLEARING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3 tracking-tight leading-tight">
              {title}
            </h1>

            {/* Verbatim Approved Copy Block */}
            <div className="mt-6 p-6 rounded-md bg-brand-navy border border-brand-cyan/30 text-base sm:text-lg text-slate-200 leading-relaxed">
              {approvedCopy}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/request-a-quote?service=Importation+from+China+to+Nigeria"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-bold text-white bg-brand-cobalt hover:bg-blue-600 shadow-glow-cobalt transition-all"
              >
                <span>Request a Shipping Quotation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Discuss Freight on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Rule Notice Banner */}
      <div className="bg-amber-50 border-b border-amber-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-amber-950">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p>
            <strong>Delivery Timeline Policy:</strong> {promiseRuleNote}
          </p>
        </div>
      </div>

      {/* All 8 Required Shipping & Importation Topics */}
      <section className="py-16 sm:py-24 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cobalt font-bold">
              COMPLETE IMPORTATION BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-midnight mt-2 tracking-tight">
              Understanding Sea Freight, Air Freight &amp; Clearing
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Review how each stage of shipping and importation works when moving goods from China
              to Nigeria with Slybest Ventures Global Hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topics.map((topic, idx) => (
              <article
                key={topic.id}
                id={topic.id}
                className="rounded-md bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-brand-cobalt px-2.5 py-1 rounded bg-brand-cobalt/10">
                      0{idx + 1} // {topic.title.toUpperCase()}
                    </span>
                    {topic.id === 'sea-freight' && (
                      <Ship className="w-5 h-5 text-brand-cobalt" aria-hidden="true" />
                    )}
                    {topic.id === 'air-freight' && (
                      <Plane className="w-5 h-5 text-brand-amber" aria-hidden="true" />
                    )}
                    {topic.id === 'customs-clearing' && (
                      <ShieldCheck className="w-5 h-5 text-brand-cobalt" aria-hidden="true" />
                    )}
                    {topic.id === 'estimated-ranges' && (
                      <Clock className="w-5 h-5 text-brand-cobalt" aria-hidden="true" />
                    )}
                    {topic.id !== 'sea-freight' &&
                      topic.id !== 'air-freight' &&
                      topic.id !== 'customs-clearing' &&
                      topic.id !== 'estimated-ranges' && (
                        <PackageCheck className="w-5 h-5 text-brand-cobalt" aria-hidden="true" />
                      )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-midnight mt-5">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">{topic.subtitle}</p>

                  <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                    {topic.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-700 bg-brand-softWhite p-4 rounded-md border border-slate-200/70">
                    {topic.considerations.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-brand-cobalt shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">China-to-Nigeria Importation</span>
                  <Link
                    to={`/request-a-quote?shipping=${encodeURIComponent(
                      topic.id === 'air-freight'
                        ? 'Air freight'
                        : topic.id === 'sea-freight'
                        ? 'Sea freight'
                        : ''
                    )}`}
                    className="text-xs font-bold text-brand-cobalt hover:underline inline-flex items-center gap-1"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
