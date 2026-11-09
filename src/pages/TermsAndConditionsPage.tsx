import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileEdit, ArrowRight } from 'lucide-react';
import { POLICIES_CONFIG } from '../config/policiesConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={PAGE_METADATA.termsAndConditions.title}
        description={PAGE_METADATA.termsAndConditions.description}
      />

      <section className="bg-brand-midnight text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
            QUOTATION &amp; PROCUREMENT POLICY FRAMEWORK
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3">
            Terms and Conditions
          </h1>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Important quotation notices and commercial policy modules for sourcing, purchasing, and
            shipping goods with Slybest Ventures Global Hubs.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-brand-softWhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Mandatory Verbatim Quotation Notice */}
          <div className="p-6 sm:p-8 rounded-md bg-brand-navy text-white border border-brand-cyan/30 shadow-premium">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-amber mb-2">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>OFFICIAL QUOTATION NOTICE</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
              {POLICIES_CONFIG.quotationNotice}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 pt-4 border-t border-white/10">
              {POLICIES_CONFIG.termsGuidanceRule}
            </p>
          </div>

          {/* 9 Editable Policy Sections (Obeys rule: "Do not create detailed legal terms until the client approves them.") */}
          <div>
            <h2 className="text-2xl font-display font-extrabold text-brand-midnight mb-6">
              Procurement &amp; Shipping Policy Sections
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {POLICIES_CONFIG.editableSections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-brand-cobalt mb-3">
                      <span className="inline-flex items-center gap-1">
                        <FileEdit className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>SECTION 0{idx + 1}</span>
                      </span>
                      <span className="text-slate-400">Confirmed Per Quote</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-brand-midnight">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {sec.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                    Editable in src/config/policiesConfig.ts
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-md bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-700">
              Need clarification on quotation terms for a specific product or shipment?
            </p>
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-cobalt text-white text-xs font-bold hover:bg-blue-600 shrink-0"
            >
              <span>Request a Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
