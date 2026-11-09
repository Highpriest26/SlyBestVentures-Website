import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquareQuote,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { APPROVED_TESTIMONIALS } from '../config/projectsAndTestimonialsConfig';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const TestimonialsPage: React.FC = () => {
  const hasTestimonials = APPROVED_TESTIMONIALS.length > 0;

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.testimonials.title}
        description={PAGE_METADATA.testimonials.description}
      />

      {/* Hero */}
      <section className="bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
              CUSTOMER FEEDBACK &amp; CLIENT EXPERIENCES
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3 tracking-tight leading-tight">
              What Customers Say
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
              We value long-term relationships with individuals, retailers, wholesalers,
              contractors, and businesses sourcing and importing goods from China to Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Content Area (Strictly Obeys: "Keep the section hidden, marked as coming soon, or populate it only after approved testimonials are supplied. Never display fake testimonials.") */}
      <section className="py-16 sm:py-24 bg-brand-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasTestimonials ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {APPROVED_TESTIMONIALS.map((t) => (
                <article
                  key={t.id}
                  className="p-6 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <MessageSquareQuote
                      className="w-8 h-8 text-brand-cobalt mb-4"
                      aria-hidden="true"
                    />
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="font-display font-bold text-brand-midnight">
                      {t.clientName}
                    </div>
                    {t.companyOrRole && (
                      <div className="text-xs text-slate-500">{t.companyOrRole}</div>
                    )}
                    <div className="text-xs font-mono text-brand-cobalt mt-1">
                      {t.location} &bull; {t.categorySourced}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto rounded-md bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center">
              <div className="w-14 h-14 rounded-md bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-7 h-7" aria-hidden="true" />
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-brand-midnight text-brand-cyan font-mono text-xs uppercase tracking-wider mb-3">
                Verified Client Stories // Coming Soon
              </span>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-midnight">
                Verified Customer Testimonials Are Being Compiled
              </h2>

              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                In line with our commitment to transparency, Slybest Ventures Global Hubs only
                publishes verified testimonials approved by our customers. Approved client reviews
                from completed China-to-Nigeria sourcing and shipping orders will be featured here
                soon.
              </p>

              <div className="mt-8 p-5 rounded-md bg-brand-softWhite border border-slate-200/80 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-cobalt shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-brand-midnight block">
                      Visit or Speak With Us Directly
                    </strong>
                    {SITE_CONFIG.contacts.nigeriaLocation.address} ({SITE_CONFIG.contacts.businessHours})
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="text-xs font-bold text-brand-cobalt hover:underline shrink-0 inline-flex items-center gap-1"
                >
                  <span>Contact Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/request-a-quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-brand-cobalt text-white text-sm font-bold hover:bg-blue-600 transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href={`${SITE_CONFIG.contacts.whatsapp.href}?text=${encodeURIComponent(
                    'Hello Slybest Ventures Global Hubs, I would like to share feedback / enquire about your sourcing and shipping services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-slate-100 text-brand-midnight text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
