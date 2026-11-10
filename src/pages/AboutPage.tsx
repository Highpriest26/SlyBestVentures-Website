import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
  MessageCircle,
  Search,
  Globe2,
  Phone,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CREDIBILITY_HIGHLIGHTS } from '../config/projectsAndTestimonialsConfig';
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

      {/* 1. ABOUT HERO: OUR STORY & THE CHINA-NIGERIA CONNECTION */}
      <section className="relative bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
                <Globe2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>About Slybest Ventures Global Hubs</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-[0.95]">
                Your Trusted Bridge Between Chinese Factories &amp; Nigerian Business.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {SITE_CONFIG.business.description}
              </p>

              <div className="p-4 rounded-md bg-[#0B1F3A] border border-brand-cyan/30 text-sm text-slate-200 leading-relaxed">
                {SITE_CONFIG.business.positioning}
              </div>

              {/* 3 Prominent CTA Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-brand-cobalt hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/catalogue"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-brand-amber hover:bg-amber-400 text-brand-midnight text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                  <span>Source a Product</span>
                </Link>

                <a
                  href={SITE_CONFIG.contacts.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Contact Us on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-md overflow-hidden min-h-[360px] border border-white/15 shadow-2xl flex flex-col justify-end p-6">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                  alt="China to Nigeria supply chain coordination"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/65 to-transparent" />
                <div className="relative z-10 space-y-2.5">
                  <span className="inline-block px-3 py-1 rounded-md bg-brand-cobalt text-white font-mono text-xs font-bold uppercase">
                    China ↔ Nigeria Trade Bridge
                  </span>
                  <p className="text-base font-bold text-white uppercase tracking-tight">
                    Source &bull; Verify &bull; Procure &bull; Ship &bull; Clear &bull; Deliver
                  </p>
                  <p className="text-xs text-slate-300 font-light">
                    Head Office: {SITE_CONFIG.contacts.nigeriaLocation.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & THE CHINA-NIGERIA CONNECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-brand-midnight leading-[0.95]">
                Built to make importing from China safe, clear &amp; profitable.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For years, Nigerian importers, market wholesalers, contractors, and business owners
                faced a fragmented cross-border supply chain. Buying directly from China often
                meant dealing with unverified online sellers, receiving substandard goods, or
                losing track of cargo between Chinese warehouses and Nigerian ports.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-brand-midnight font-bold">
                  Slybest Ventures Global Hubs
                </strong>{' '}
                was established to bring structure, transparency, and local accountability to
                China–Nigeria trade. Whether you are sourcing a full container of Smart TVs, solar
                panels, lithium batteries, home appliances, sound systems, or automobile spare
                parts, we manage the entire corridor under one roof.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-md bg-brand-softWhite border border-slate-200">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-cobalt block mb-2">
                  01 • CHINA OPERATIONS
                </span>
                <h3 className="text-lg font-display font-black uppercase text-brand-midnight mb-2">
                  Direct Factory Network
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We work directly with vetted manufacturers across Guangzhou, Shenzhen, Foshan,
                  and Yiwu—performing supplier verification, specification checks, and cargo
                  consolidation before export.
                </p>
              </div>

              <div className="p-6 rounded-md bg-brand-midnight text-white border border-slate-800">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-2">
                  02 • NIGERIA HEAD OFFICE
                </span>
                <h3 className="text-lg font-display font-black uppercase text-white mb-2">
                  Alaba International Market Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Located at <strong className="text-white">{SITE_CONFIG.contacts.nigeriaLocation.address}</strong>,
                  our Nigerian office gives you a real local team you can visit in person or reach
                  24/7 on WhatsApp.
                </p>
              </div>

              <div className="sm:col-span-2 p-6 rounded-md bg-brand-softWhite border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-black uppercase tracking-wider text-brand-midnight flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-cobalt" aria-hidden="true" />
                    <span>Visit or Call Our Lagos Office Anytime</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {SITE_CONFIG.contacts.nigeriaLocation.address}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {SITE_CONFIG.contacts.phoneNumbers.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-brand-midnight hover:border-brand-cobalt"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-cobalt" aria-hidden="true" />
                      <span>{phone.display}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREDIBILITY & PROOF PILLARS */}
      <section className="py-16 sm:py-22 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block mb-2">
              Why trust Slybest Ventures Global Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-brand-midnight mb-8">
              Proven credibility across the China–Nigeria corridor.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CREDIBILITY_HIGHLIGHTS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-md p-6 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-brand-cobalt/10 text-brand-cobalt mb-4">
                      {item.badge}
                    </span>
                    <div className="text-2xl font-display font-black text-brand-midnight mb-1">
                      {item.metric}
                    </div>
                    <h3 className="text-sm font-bold uppercase text-brand-cobalt mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Audience Segments */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cobalt font-bold">
              WHO WE SERVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-brand-midnight mt-1 mb-6">
              Built for Wholesalers, Contractors, Retailers &amp; Individual Buyers.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SITE_CONFIG.business.primaryAudience.map((aud) => (
                <div
                  key={aud.title}
                  className="p-6 rounded-md bg-white border border-slate-200/90 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-md bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-display font-black uppercase text-brand-midnight">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Commitments */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cobalt font-bold">
              OUR PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-brand-midnight mt-1 mb-6">
              Mission, Vision &amp; Operational Standards.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SITE_CONFIG.aboutEditablePlaceholders.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-md bg-white border border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-brand-cobalt font-bold mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      {item.title}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.summary}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Slybest Global Hubs Standard</span>
                  </div>
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
