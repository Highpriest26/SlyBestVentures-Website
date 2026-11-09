import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  SearchCheck,
  Factory,
  FileSpreadsheet,
  PackageSearch,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PRODUCT_CATEGORIES } from '../config/catalogueConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const ChinaSourcingPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={PAGE_METADATA.chinaSourcing.title}
        description={PAGE_METADATA.chinaSourcing.description}
      />

      {/* Hero */}
      <section className="bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-semibold">
              CHINA PRODUCT SOURCING &amp; FACTORY VERIFICATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3 tracking-tight leading-tight">
              Tell Us What You Need From China
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
              Slybest Ventures Global Hubs connects Nigerian individuals, retailers, wholesalers,
              contractors, and businesses with reliable manufacturers and suppliers in China. Share
              your specification and let our team handle the sourcing, verification, purchasing,
              and shipping coordination.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/request-a-quote?service=Product+sourcing+from+China"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-bold text-white bg-brand-cobalt hover:bg-blue-600 shadow-glow-cobalt transition-all"
              >
                <span>Submit a Sourcing Request</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step China Sourcing Workflow */}
      <section className="py-16 sm:py-24 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cobalt font-bold">
              STEP-BY-STEP SOURCING WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-midnight mt-2 tracking-tight">
              Our 7-Step China Sourcing Process
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Every sourcing enquiry follows a disciplined seven-stage progression from your initial
              request to confirmed purchasing and shipping coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.chinaSourcingProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-md bg-white border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-md bg-brand-midnight text-brand-cyan font-mono font-bold text-sm flex items-center justify-center">
                      0{item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      STAGE 0{item.step} / 07
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-midnight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono text-brand-cobalt">
                  <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Coordinated by Slybest Ventures</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Source With Us (No Supplier Yet vs Already Have a Link) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-md bg-brand-softWhite border border-slate-200/90">
              <div className="w-11 h-11 rounded-md bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center mb-4">
                <PackageSearch className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-midnight">
                Option A: You Need Us to Find Suppliers
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Tell us the product name, technical specifications, or upload a photo. We identify
                suitable factories in China, check product quality and availability, and prepare
                your quotation.
              </p>
            </div>

            <div className="p-7 rounded-md bg-brand-softWhite border border-slate-200/90">
              <div className="w-11 h-11 rounded-md bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-midnight">
                Option B: You Already Have a Product Link or Supplier
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Share the supplier contact or product link on our Request a Quote form. We verify
                the supplier, coordinate purchasing, and handle sea or air shipping to Nigeria.
              </p>
            </div>

            <div className="p-7 rounded-md bg-brand-softWhite border border-slate-200/90">
              <div className="w-11 h-11 rounded-md bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-midnight">
                Option C: Bulk &amp; Project Procurement
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Ordering equipment for a company, hotel, solar project, fuel station, or retail
                store? Upload your specification list for coordinated multi-item sourcing.
              </p>
            </div>
          </div>

          {/* Quick Category Pills Linking to Catalogue */}
          <div className="mt-12 p-6 sm:p-8 rounded-md bg-brand-midnight text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  15 PRODUCT SECTORS
                </span>
                <h3 className="text-xl font-display font-bold mt-1">
                  Categories We Regularly Source From China
                </h3>
              </div>
              <Link
                to="/catalogue"
                className="text-xs font-bold text-brand-cyan hover:underline inline-flex items-center gap-1"
              >
                <span>Open Full Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/request-a-quote?category=${encodeURIComponent(cat.name)}`}
                  className="px-3.5 py-2 rounded-md bg-white/5 hover:bg-brand-cobalt border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
