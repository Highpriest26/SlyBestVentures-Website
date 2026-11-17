import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Search,
  Globe2,
  Phone,
  User,
  Warehouse,
  Truck,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

interface TeamMemberSlot {
  id: string;
  role: string;
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  icon: typeof User;
  isLeadership?: boolean;
}

const TEAM_SLOTS: TeamMemberSlot[] = [
  {
    id: 'owner',
    role: 'Managing Director & Founder',
    title: 'Business Owner / Head of China ↔ Nigeria Trade',
    location: 'Lagos Head Office & China Corridors',
    description:
      'Directs bilateral factory procurement in China and oversees shipment integrity and delivery across Nigeria. Dedicated to giving Nigerian importers transparent, factory-direct pricing with dependable local accountability.',
    imageSrc: '/team/business-owner.jpg',
    icon: User,
    isLeadership: true,
  },
  {
    id: 'china-warehouse',
    role: 'China Sourcing & Warehousing',
    title: 'Consolidation & Quality Inspection Team',
    location: 'Guangzhou & Foshan, China',
    description:
      'Inspects factory production runs on-site, verifies specifications and carton integrity, consolidates multi-supplier cargo, and oversees secure container palletizing and loading.',
    imageSrc: '/team/china-warehouse-staff.jpg',
    icon: Warehouse,
  },
  {
    id: 'nigeria-logistics',
    role: 'Nigeria Operations & Logistics',
    title: 'Lagos Hub & Customs Logistics Staff',
    location: 'B108 Electronics Section, Alaba International Market, Lagos',
    description:
      'Coordinates swift customs clearance at Lagos seaports and airports, manages physical stock handovers at our Alaba office, and arranges secured inter-state delivery across Nigeria.',
    imageSrc: '/team/lagos-hub-staff.jpg',
    icon: Truck,
  },
];

export const AboutPage: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const ownerSlot = TEAM_SLOTS.find((m) => m.isLeadership) || TEAM_SLOTS[0];
  const staffSlots = TEAM_SLOTS.filter((m) => !m.isLeadership);

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.about.title}
        description={PAGE_METADATA.about.description}
      />

      {/* 1. HERO: CLEAN EDITORIAL INTRODUCTION */}
      <section className="relative bg-brand-midnight text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
              <Globe2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>About Slybest Ventures Global Hubs</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-[0.95]">
              Direct Chinese Factory Sourcing to Your Door in Nigeria.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We eliminate the uncertainty and middlemen in cross-border trade. With a verified factory
              network in China and our physical head office at Alaba International Market in Lagos, we handle
              procurement, quality inspection, cargo consolidation, shipping, and customs clearance end to end.
            </p>

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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-brand-softWhite hover:bg-slate-200 text-brand-midnight text-xs font-black uppercase tracking-widest transition-colors"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span>Browse Products</span>
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
        </div>
      </section>

      {/* 2. LEADERSHIP & OPERATIONS TEAM SHOWCASE (Ready for Business Owner & Staff Photos) */}
      <section className="py-16 sm:py-24 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block mb-2">
              Our Leadership &amp; Operational Team
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-brand-midnight leading-[0.95]">
              Real People on the Ground in China &amp; Nigeria.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light mt-3">
              Meet the leadership and warehouse teams who verify your suppliers, pack your containers,
              and safely deliver your goods to your warehouse in Nigeria.
            </p>
          </div>

          {/* Featured Spotlight: Business Owner / Managing Director */}
          <div className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-xs mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Photo Slot */}
              <div className="lg:col-span-5 relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-auto lg:h-full min-h-[340px] bg-brand-midnight flex items-center justify-center overflow-hidden">
                {!imageErrors[ownerSlot.id] ? (
                  <img
                    src={ownerSlot.imageSrc}
                    alt={ownerSlot.title}
                    onError={() => handleImageError(ownerSlot.id)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-8 text-center flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-cobalt/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-4">
                      <User className="w-10 h-10" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/10 text-brand-cyan border border-white/15 mb-2">
                      Photo Slot: Business Owner
                    </span>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Ready for business owner&apos;s picture ({ownerSlot.imageSrc})
                    </p>
                  </div>
                )}
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-4">
                <div className="inline-block px-3 py-1 rounded-md bg-brand-cobalt text-white font-mono text-xs font-bold uppercase tracking-wider">
                  {ownerSlot.role}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase text-brand-midnight tracking-tight">
                  {ownerSlot.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <MapPin className="w-4 h-4 text-brand-cobalt shrink-0" />
                  <span>{ownerSlot.location}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed pt-2">
                  {ownerSlot.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-md bg-brand-softWhite border border-slate-200 text-slate-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cobalt" />
                    Direct Supplier Negotiations
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-brand-softWhite border border-slate-200 text-slate-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cobalt" />
                    Alaba Market Walk-In Office
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-brand-softWhite border border-slate-200 text-slate-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cobalt" />
                    Bespoke Commercial Contracts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Operational & Warehouse Staff Slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staffSlots.map((slot) => {
              const SlotIcon = slot.icon;
              return (
                <div
                  key={slot.id}
                  className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  {/* Photo Slot */}
                  <div className="relative aspect-[16/10] bg-brand-midnight flex items-center justify-center overflow-hidden">
                    {!imageErrors[slot.id] ? (
                      <img
                        src={slot.imageSrc}
                        alt={slot.title}
                        onError={() => handleImageError(slot.id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-cobalt/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-3">
                          <SlotIcon className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/10 text-brand-cyan border border-white/15 mb-1.5">
                          Photo Slot: Warehouse Staff
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Ready for staff image ({slot.imageSrc})
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Caption & Responsibilities */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-cobalt block mb-1.5">
                      {slot.role}
                    </span>
                    <h3 className="text-xl font-display font-black uppercase text-brand-midnight mb-2">
                      {slot.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-brand-cobalt shrink-0" />
                      <span>{slot.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SIMPLIFIED CHINA-NIGERIA OPERATIONS & PHYSICAL LAGOS OFFICE */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block">
                Local Presence &amp; Accountability
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-brand-midnight leading-[0.95]">
                Physical Head Office at Alaba International Market, Lagos.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Unlike online-only brokers, Slybest Ventures Global Hubs maintains a physical office in Lagos
                where clients can walk in, review product samples, confirm procurement contracts, and pick up
                cleared shipments directly.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-midnight">
                  <Building2 className="w-4 h-4 text-brand-cobalt shrink-0" />
                  <span>{SITE_CONFIG.contacts.nigeriaLocation.address}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-softWhite border border-slate-200 rounded-md p-6 sm:p-8 space-y-5">
              <div className="text-xs font-black uppercase tracking-widest text-brand-midnight">
                Direct Communication Channels
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Speak directly with our trade desk regarding current factory quotations or container schedules:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {SITE_CONFIG.contacts.phoneNumbers.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-brand-midnight hover:border-brand-cobalt transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-cobalt" aria-hidden="true" />
                    <span>{phone.display}</span>
                  </a>
                ))}

                <a
                  href={SITE_CONFIG.contacts.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalQuoteCtaSection />
    </>
  );
};
