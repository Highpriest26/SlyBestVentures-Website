import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { POLICIES_CONFIG } from '../config/policiesConfig';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={PAGE_METADATA.privacyPolicy.title}
        description={PAGE_METADATA.privacyPolicy.description}
      />

      <section className="bg-brand-midnight text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
            PRIVACY &amp; ENQUIRY DATA HANDLING
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3">
            Privacy Policy
          </h1>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            How {SITE_CONFIG.business.name} handles the contact and product enquiry details you
            share with us.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-brand-softWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {POLICIES_CONFIG.privacyOverview.map((section) => (
            <div
              key={section.title}
              className="p-6 sm:p-8 rounded-md bg-white border border-slate-200/90 shadow-sm"
            >
              <h2 className="text-xl font-display font-bold text-brand-midnight">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          <div className="p-6 rounded-md bg-brand-midnight text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white block">Questions About Your Enquiry?</strong>
                Contact us at {SITE_CONFIG.contacts.email.display} or call{' '}
                {SITE_CONFIG.contacts.phoneNumbers[0].display}.
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:underline shrink-0"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
