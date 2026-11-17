import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Video,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECT_MEDIA_SLOTS } from '../config/projectsAndTestimonialsConfig';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const filteredSlots = PROJECT_MEDIA_SLOTS.filter((slot) =>
    filter === 'all' ? true : slot.mediaType === filter
  );

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.projects.title}
        description={PAGE_METADATA.projects.description}
      />

      {/* Editorial Hero */}
      <section className="bg-brand-midnight text-white py-16 sm:py-22 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-cyan font-bold block mb-3">
                CHINA-NIGERIA SUPPLY CHAIN
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Our Work Across the China-Nigeria Supply Chain
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
                From factory inspections and Canton Fair sourcing in China to cargo loading,
                container shipping, and customer deliveries in Nigeria.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-md bg-brand-navy border border-white/10 self-start">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-colors ${
                  filter === 'all'
                    ? 'bg-brand-cobalt text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                All (9)
              </button>
              <button
                type="button"
                onClick={() => setFilter('photo')}
                className={`px-4 py-2 rounded-md text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                  filter === 'photo'
                    ? 'bg-brand-cobalt text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Photos (7)</span>
              </button>
              <button
                type="button"
                onClick={() => setFilter('video')}
                className={`px-4 py-2 rounded-md text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                  filter === 'video'
                    ? 'bg-brand-cobalt text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Videos (2)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Replaceable Client Media Slots */}
      <section className="py-16 sm:py-24 bg-brand-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredSlots.map((slot, index) => (
              <article
                key={slot.id}
                className="group rounded-md bg-white border border-slate-200 hover:border-brand-cobalt overflow-hidden flex flex-col justify-between transition-all shadow-xs hover:shadow-lg"
              >
                <div>
                  {/* Clean, unobstructed high-visibility product media view */}
                  <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden flex items-center justify-center">
                    {slot.mediaUrl && /\.(mp4|webm|ogg)$/i.test(slot.mediaUrl) ? (
                      <video
                        src={slot.mediaUrl}
                        poster={slot.posterUrl || slot.previewImageUrl}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={slot.mediaUrl || slot.previewImageUrl}
                        alt={slot.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>

                  {/* Clean, simplified info so the product visual stays prominent */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span className="text-brand-cobalt font-bold uppercase tracking-wider">
                        {slot.stageTag}
                      </span>
                      <span>0{index + 1}</span>
                    </div>
                    <h2 className="text-base sm:text-lg font-display font-black text-brand-midnight tracking-tight">
                      {slot.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">
                    {slot.mediaType === 'video' ? 'Live Video Demo' : 'Factory/Shipment Proof'}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Official Channels Strip */}
          <div className="mt-14 p-8 rounded-md bg-brand-midnight text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                OFFICIAL SOCIAL CHANNELS
              </span>
              <h3 className="text-xl font-display font-bold mt-1">
                Follow Live Shipments &amp; Arrivals on Instagram, TikTok &amp; WhatsApp
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.contacts.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-xs font-bold"
              >
                <span>Instagram ({SITE_CONFIG.contacts.instagram.handle})</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONFIG.contacts.tiktok.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-xs font-bold"
              >
                <span>TikTok ({SITE_CONFIG.contacts.tiktok.handle})</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONFIG.contacts.whatsappChannel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-xs font-bold"
              >
                <span>WhatsApp Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
