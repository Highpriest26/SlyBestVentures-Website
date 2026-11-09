import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
  FileEdit,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={PAGE_METADATA.about.title}
        description={PAGE_METADATA.about.description}
      />

      {/* Sleek Visual Hero */}
      <section className="relative bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
                ABOUT SLYBEST VENTURES GLOBAL HUBS
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Connecting Nigerian Buyers to{' '}
                <span className="text-gradient-cyan">Reliable Supply in China</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {SITE_CONFIG.business.description}
              </p>
              <div className="p-4 rounded-md bg-white/[0.05] border border-brand-cyan/30 text-sm text-slate-200">
                {SITE_CONFIG.business.positioning}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-md overflow-hidden min-h-[320px] border border-white/15 shadow-premium-dark flex flex-col justify-end p-6">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                  alt="China to Nigeria supply chain coordination"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/60 to-transparent" />
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-md bg-brand-cobalt text-white font-mono text-xs font-bold">
                    THE TRADE BRIDGE
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Source &bull; Verify &bull; Purchase &bull; Ship &bull; Import &bull; Deliver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Approach + Who We Serve */}
      <section className="py-16 sm:py-22 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 2-Card Bento Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-md bg-white border border-slate-200/90 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-cobalt font-bold">
                WHAT WE DO
              </span>
              <h2 className="text-2xl font-display font-extrabold text-brand-midnight mt-1.5">
                One Coordinated Procurement Partner
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Instead of managing separate sourcing agents, payment channels, freight forwarders,
                and clearing contacts on your own, we coordinate your order from factory
                verification in China to delivery in Nigeria.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-brand-midnight">
                <span className="flex items-center gap-2 p-2.5 rounded-md bg-brand-softWhite">
                  <CheckCircle2 className="w-4 h-4 text-brand-cobalt shrink-0" />
                  China Supplier Verification
                </span>
                <span className="flex items-center gap-2 p-2.5 rounded-md bg-brand-softWhite">
                  <CheckCircle2 className="w-4 h-4 text-brand-cobalt shrink-0" />
                  Bulk &amp; Project Purchasing
                </span>
                <span className="flex items-center gap-2 p-2.5 rounded-md bg-brand-softWhite">
                  <CheckCircle2 className="w-4 h-4 text-brand-cobalt shrink-0" />
                  Sea &amp; Air Freight
                </span>
                <span className="flex items-center gap-2 p-2.5 rounded-md bg-brand-softWhite">
                  <CheckCircle2 className="w-4 h-4 text-brand-cobalt shrink-0" />
                  Customs &amp; Nigeria Delivery
                </span>
              </div>
            </div>

            <div className="p-8 rounded-md bg-brand-midnight text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold">
                  LOCATIONS &amp; COORDINATION
                </span>
                <h2 className="text-2xl font-display font-extrabold text-white mt-1.5">
                  Lagos Hub &amp; China Supplier Network
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <div className="p-3.5 rounded-md bg-white/[0.05] border border-white/10 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-amber shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block text-xs uppercase font-mono">
                        Nigeria Hub (Open 24/7)
                      </strong>
                      {SITE_CONFIG.contacts.nigeriaLocation.address}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-md bg-white/[0.05] border border-white/10 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block text-xs uppercase font-mono">
                        China Coordination ({SITE_CONFIG.contacts.chinaLocation.status})
                      </strong>
                      <span className="text-xs text-slate-300">
                        {SITE_CONFIG.contacts.chinaLocation.notice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/contact"
                  className="text-xs font-bold text-brand-cyan hover:text-white inline-flex items-center gap-1"
                >
                  <span>View Map &amp; Contact Channels</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 6 Audience Segments */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cobalt font-bold">
              WHO WE SERVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-midnight mt-1 mb-6">
              Built for Individuals, Retailers &amp; Enterprises
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SITE_CONFIG.business.primaryAudience.map((aud) => (
                <div
                  key={aud.title}
                  className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-md bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-display font-extrabold text-brand-midnight">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Editable Corporate Profile Modules */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cobalt font-bold">
              CORPORATE PROFILE MODULES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-midnight mt-1 mb-6">
              Mission, Vision, Values &amp; Leadership
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SITE_CONFIG.aboutEditablePlaceholders.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-md bg-white border border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase text-brand-cobalt font-semibold mb-2">
                      <FileEdit className="w-3 h-3" />
                      {item.title}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.summary}</p>
                  </div>
                  <span className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                    Editable in src/config/siteConfig.ts
                  </span>
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
