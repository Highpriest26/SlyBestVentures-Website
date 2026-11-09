import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Share2,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={PAGE_METADATA.contact.title}
        description={PAGE_METADATA.contact.description}
      />

      {/* Page Hero */}
      <section className="bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
              CONTACT US // OPEN 24/7
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-3 tracking-tight leading-tight">
              Speak With Slybest Ventures Global Hubs
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
              Reach our team by phone, WhatsApp, email, or in person at our Lagos location in Alaba
              International Market. We are open 24/7 to assist with product sourcing, shipping, and
              quotation enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Cards & Channels */}
      <section className="py-16 sm:py-24 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Phone Numbers */}
            <div className="p-7 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-md bg-brand-midnight text-brand-cyan flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cobalt font-bold">
                  DIRECT VOICE LINES
                </span>
                <h2 className="text-xl font-display font-bold text-brand-midnight mt-1">
                  Call Our Procurement Team
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Speak directly with us regarding product sourcing, bulk orders, or shipping
                  coordination.
                </p>

                <div className="mt-5 space-y-3">
                  {SITE_CONFIG.contacts.phoneNumbers.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="flex items-center justify-between p-3.5 rounded-md bg-brand-softWhite hover:bg-brand-cobalt/10 border border-slate-200 transition-colors group"
                    >
                      <div>
                        <span className="text-xs text-slate-500 block">{phone.label}</span>
                        <span className="text-base font-mono font-bold text-brand-midnight group-hover:text-brand-cobalt">
                          {phone.display}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-brand-cobalt" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Business Hours: {SITE_CONFIG.contacts.businessHours}</span>
              </div>
            </div>

            {/* 2. WhatsApp & Email */}
            <div className="p-7 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-md bg-emerald-600 text-white flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                  WHATSAPP &amp; EMAIL
                </span>
                <h2 className="text-xl font-display font-bold text-brand-midnight mt-1">
                  Instant Messaging &amp; Written Specifications
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Send product photos, links, or specification sheets via WhatsApp or email.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href={SITE_CONFIG.contacts.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-md bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <div>
                      <span className="text-xs text-emerald-800 block font-medium">
                        Chat on WhatsApp
                      </span>
                      <span className="text-base font-mono font-bold text-emerald-950">
                        {SITE_CONFIG.contacts.whatsapp.display}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  </a>

                  <a
                    href={SITE_CONFIG.contacts.email.href}
                    className="flex items-center justify-between p-3.5 rounded-md bg-brand-softWhite hover:bg-brand-cobalt/10 border border-slate-200 transition-colors group"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="text-xs text-slate-500 block">Email Address</span>
                      <span className="text-sm font-semibold text-brand-midnight group-hover:text-brand-cobalt break-all">
                        {SITE_CONFIG.contacts.email.display}
                      </span>
                    </div>
                    <Mail className="w-4 h-4 text-brand-cobalt shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cobalt hover:underline"
                >
                  <span>Or use our structured Request a Quote form</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* 3. Social Media & WhatsApp Channel */}
            <div className="p-7 rounded-md bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-md bg-brand-midnight text-brand-cyan flex items-center justify-center mb-5">
                  <Share2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cobalt font-bold">
                  SOCIAL &amp; TRADE UPDATES
                </span>
                <h2 className="text-xl font-display font-bold text-brand-midnight mt-1">
                  Official Social Channels
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Follow our official channels for product showcases, shipment updates, and new
                  arrivals.
                </p>

                <div className="mt-5 space-y-2.5">
                  <a
                    href={SITE_CONFIG.contacts.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-md bg-brand-softWhite hover:bg-brand-cobalt/10 border border-slate-200 transition-colors"
                  >
                    <div>
                      <span className="text-xs text-slate-500 block">Instagram</span>
                      <span className="text-sm font-bold text-brand-midnight">
                        {SITE_CONFIG.contacts.instagram.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-brand-cobalt" aria-hidden="true" />
                  </a>

                  <a
                    href={SITE_CONFIG.contacts.tiktok.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-md bg-brand-softWhite hover:bg-brand-cobalt/10 border border-slate-200 transition-colors"
                  >
                    <div>
                      <span className="text-xs text-slate-500 block">TikTok</span>
                      <span className="text-sm font-bold text-brand-midnight">
                        {SITE_CONFIG.contacts.tiktok.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-brand-cobalt" aria-hidden="true" />
                  </a>

                  <a
                    href={SITE_CONFIG.contacts.whatsappChannel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-md bg-brand-softWhite hover:bg-brand-cobalt/10 border border-slate-200 transition-colors"
                  >
                    <div>
                      <span className="text-xs text-slate-500 block">Broadcast Updates</span>
                      <span className="text-sm font-bold text-brand-midnight">
                        {SITE_CONFIG.contacts.whatsappChannel.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-brand-cobalt" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Verified accounts of {SITE_CONFIG.business.name}
              </div>
            </div>
          </div>

          {/* Lagos Location & Embedded Map + China Location Status */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 rounded-md bg-brand-midnight text-white p-8 flex flex-col justify-between border border-white/10">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-amber mb-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>LAGOS LOCATION</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">
                    {SITE_CONFIG.contacts.nigeriaLocation.label}
                  </h2>
                  <p className="text-base text-slate-200 mt-2 leading-relaxed">
                    {SITE_CONFIG.contacts.nigeriaLocation.address}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-md">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Business Hours: {SITE_CONFIG.contacts.businessHours}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-cyan mb-2">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    <span>CHINA COORDINATION ({SITE_CONFIG.contacts.chinaLocation.status})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {SITE_CONFIG.contacts.chinaLocation.notice}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.contacts.nigeriaLocation.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-brand-cobalt hover:bg-blue-600 text-xs font-bold text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Embedded Google Map for Alaba International Market, Ojo, Lagos */}
            <div className="lg:col-span-7 rounded-md overflow-hidden bg-white border border-slate-200 shadow-sm min-h-[380px] flex flex-col">
              <iframe
                title="Slybest Ventures Global Hubs Lagos Location Map - B108 Electronics Section, Alaba International Market, Ojo, Lagos, Nigeria"
                src={`https://www.google.com/maps?q=${SITE_CONFIG.contacts.nigeriaLocation.mapEmbedQuery}&output=embed`}
                className="w-full flex-1 min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
