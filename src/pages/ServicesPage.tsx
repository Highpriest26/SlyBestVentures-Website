import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Ship,
  SearchCheck,
} from 'lucide-react';
import { SERVICES_LIST } from '../config/servicesConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { SITE_CONFIG } from '../config/siteConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const ServicesPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES_LIST[0].id);

  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Slybest Ventures Global Hubs Services',
    itemListElement: SERVICES_LIST.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.shortExplanation,
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.business.name,
        },
        areaServed: 'Nigeria',
      },
    })),
  };

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.services.title}
        description={PAGE_METADATA.services.description}
        structuredData={servicesStructuredData}
      />

      {/* Sleek Visual Hero */}
      <section className="relative bg-brand-midnight text-white py-16 sm:py-22 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
              11 END-TO-END SERVICES
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3 tracking-tight">
              One Coordinated Process From Sourcing to Delivery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              From finding factories in China to sea/air shipping, customs clearing, and doorstep
              delivery in Nigeria.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-bold text-white bg-brand-cobalt hover:bg-blue-500 shadow-glow-cobalt transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/china-sourcing"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <SearchCheck className="w-4 h-4 text-brand-cyan" />
                <span>China Sourcing Process</span>
              </Link>
              <Link
                to="/shipping-importation"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <Ship className="w-4 h-4 text-brand-amber" />
                <span>Sea &amp; Air Freight Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Streamlined 11 Service Cards with Interactive Expandable Requirements */}
      <section className="py-16 sm:py-24 bg-brand-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="rounded-md bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-premium hover:border-brand-cobalt/40 transition-all flex flex-col justify-between scroll-mt-28"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-md bg-brand-midnight text-brand-cyan font-mono text-xs font-bold">
                        {service.number}
                      </span>
                      {service.relatedPagePath && (
                        <Link
                          to={service.relatedPagePath}
                          className="text-xs font-bold text-brand-cobalt hover:underline inline-flex items-center gap-1"
                        >
                          <span>{service.relatedPageLabel}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                    <h2 className="text-xl font-display font-extrabold text-brand-midnight">
                      {service.title}
                    </h2>

                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortExplanation}
                    </p>

                    {/* Collapsible Audience & Required Info Drawer */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : service.id)
                        }
                        className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-brand-cobalt py-1.5"
                        aria-expanded={isExpanded}
                      >
                        <span>Who it&apos;s for &amp; what to provide</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? 'rotate-180 text-brand-cobalt' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-3.5 rounded-md bg-brand-softWhite border border-slate-200/70 space-y-3 text-xs">
                          <div>
                            <strong className="text-brand-midnight block">
                              Who this service is for:
                            </strong>
                            <p className="text-slate-600 mt-0.5">{service.whoTheServiceIsFor}</p>
                          </div>
                          <div>
                            <strong className="text-brand-midnight block mb-1">
                              Information to provide:
                            </strong>
                            <ul className="space-y-1 text-slate-600">
                              {service.informationToProvide.map((info) => (
                                <li key={info} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-cobalt shrink-0 mt-0.5" />
                                  <span>{info}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <Link
                      to={`/request-a-quote?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-bold text-white bg-brand-cobalt hover:bg-blue-600 transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
