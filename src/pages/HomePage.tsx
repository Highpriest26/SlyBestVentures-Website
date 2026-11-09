import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Check,
  Plane,
  Ship,
  Activity,
  CornerDownRight,
  MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PRODUCT_CATEGORIES } from '../config/catalogueConfig';
import {
  PROJECT_MEDIA_SLOTS,
  APPROVED_TESTIMONIALS,
} from '../config/projectsAndTestimonialsConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { CategoryIcon } from '../components/CategoryIcon';
import { SlybestTradeBridgeSection } from '../components/SlybestTradeBridgeSection';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

interface TradeDeskScenario {
  id: string;
  label: string;
  buyerMessage: string;
  deskResponse: string;
  nextStepTag: string;
}

const TRADE_DESK_SCENARIOS: TradeDeskScenario[] = [
  {
    id: 'suppliers',
    label: 'Find Suppliers',
    buyerMessage:
      'Hello Slybest, we need a reliable manufacturer in China for 200 units of commercial kitchen equipment and solar inverters for our Lagos store.',
    deskResponse:
      'Welcome to Slybest Ventures Global Hubs. Share your target specifications or reference photos. We will identify suitable Chinese manufacturers, verify product options, and prepare a quotation covering procurement and freight to Nigeria.',
    nextStepTag: 'Stage 01 • Product Sourcing & Supplier Verification',
  },
  {
    id: 'shipping',
    label: 'Shipping Options',
    buyerMessage:
      'We have goods ready with two suppliers in China. Can you consolidate them and ship to Lagos?',
    deskResponse:
      'Yes. We coordinate warehousing and consolidation in China so items from multiple suppliers move as one organized shipment—either by Sea Freight (for bulk or heavy cargo) or Air Freight (for urgent items), including Nigerian customs clearing.',
    nextStepTag: 'Stage 03 • Warehousing, Consolidation & Freight',
  },
  {
    id: 'how',
    label: 'How Sourcing Works',
    buyerMessage:
      'How do we get started if we only have product pictures and a target budget?',
    deskResponse:
      'Simply send us the product name, pictures, specifications, and quantity. We source or verify suppliers in China, send your tailored quotation, and once confirmed, handle procurement, shipping, customs clearing, and delivery in Nigeria.',
    nextStepTag: '5-Step End-to-End Workflow',
  },
  {
    id: 'start',
    label: 'Start Enquiry',
    buyerMessage:
      'We want to request a quote for building materials and security doors for a project in Nigeria.',
    deskResponse:
      `You can submit your specification list through our Request a Quote form or here on WhatsApp (${SITE_CONFIG.contacts.whatsapp.display}). Our team will review your quantities, preferred shipping method, and destination to prepare your quotation.`,
    nextStepTag: 'Direct Quote Desk • Open 24/7',
  },
];

export const HomePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeScenarioId, setActiveScenarioId] = useState<string>('suppliers');

  const activeScenario =
    TRADE_DESK_SCENARIOS.find((s) => s.id === activeScenarioId) || TRADE_DESK_SCENARIOS[0];

  // Show 6 high-priority categories on the homepage per specification
  const priorityCategories = PRODUCT_CATEGORIES.slice(0, 6);

  // Proof rule: "Hide empty proof sections until media is supplied."
  const approvedMediaSlots = PROJECT_MEDIA_SLOTS.filter((slot) => Boolean(slot.mediaUrl));
  const hasApprovedProof =
    approvedMediaSlots.length > 0 || APPROVED_TESTIMONIALS.length > 0;

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.home.title}
        description={PAGE_METADATA.home.description}
      />

      {/* 1. FULL-SCREEN ARCHITECTURAL HERO (Rayex Layout Blueprint in Slybest Brand Palette) */}
      <section className="relative min-h-[88dvh] sm:min-h-[94dvh] w-full max-w-full flex flex-col justify-end overflow-hidden bg-brand-midnight">
        {/* Full-Bleed Trade Corridor Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=85"
            alt="Container vessel and port logistics moving goods from China to Nigeria"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[1500ms]"
          />
          <div className="absolute inset-0 bg-brand-midnight/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/50 to-brand-midnight/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight/85 via-brand-midnight/35 to-transparent" />
        </div>

        {/* Lower-Anchored Editorial Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24 pt-28 sm:pt-36">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-cyan uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-cobalt" />
              <span>China to Nigeria Sourcing, Shipping &amp; Procurement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.9] mb-5 sm:mb-6">
              {SITE_CONFIG.home.hero.headline}.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              {SITE_CONFIG.home.hero.supportingText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to={SITE_CONFIG.navigation.primaryCta.path}
                className="bg-brand-cobalt hover:bg-white hover:text-brand-midnight text-white px-7 sm:px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-3 group shadow-lg"
              >
                <span>{SITE_CONFIG.home.hero.primaryCta}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <a
                href={SITE_CONFIG.navigation.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/50 bg-white/10 backdrop-blur-xs hover:bg-white hover:text-brand-midnight text-white px-7 sm:px-8 py-4 rounded-md font-bold uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>{SITE_CONFIG.home.hero.secondaryCta}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Animated Cobalt Accent Bar */}
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute bottom-0 inset-x-0 h-1.5 sm:h-2 bg-brand-cobalt z-20 origin-left"
        />
      </section>

      {/* 2. MINIMALIST TRUST STRIP (Exact Rayex Horizontal Rail in Slybest Soft White) */}
      <section
        aria-label="Core capabilities"
        className="bg-brand-softWhite border-b border-slate-200 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-between gap-x-6 gap-y-2 overflow-x-auto no-scrollbar text-[13px] font-medium tracking-tight text-brand-midnight/75 whitespace-nowrap">
            {SITE_CONFIG.home.trustStrip.map((capability, index) => (
              <React.Fragment key={capability}>
                <span>{capability}</span>
                {index < SITE_CONFIG.home.trustStrip.length - 1 && (
                  <span aria-hidden="true" className="text-brand-midnight/25 select-none">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "ONE PARTNER, FACTORY TO DOOR." 4-STAGE ASYMMETRIC BENTO GRID */}
      <SlybestTradeBridgeSection />

      {/* 4. GIANT WATERMARK "01" SPLIT SECTION: PROCUREMENT & SOURCING */}
      <section className="relative bg-brand-softWhite py-20 sm:py-28 text-brand-midnight border-b border-slate-200 overflow-hidden w-full max-w-full">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 sm:-top-10 right-[-2%] text-[28vw] lg:text-[20vw] font-display font-black leading-none text-brand-midnight/[0.035] tracking-tighter"
        >
          01
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Image with Offset Solid Cobalt Frame */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative order-2 lg:order-1"
            >
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-full h-full bg-brand-cobalt rounded-md"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-black/10 shadow-xl group bg-brand-midnight">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
                  alt="Product sourcing and supplier verification in China"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-xs px-3 py-1.5 shadow-md border border-slate-200 flex items-center gap-2 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-midnight">
                    China Supplier Verification
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Editorial Narrative & Divided Checklist */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 lg:pl-6 order-1 lg:order-2"
            >
              <div className="text-xs font-bold tracking-widest text-brand-cobalt uppercase mb-4">
                Procurement &amp; sourcing
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-[0.88] mb-6 text-brand-midnight">
                Source with
                <br />
                reliable
                <br />
                suppliers.
              </h2>

              <p className="text-base sm:text-lg md:text-xl font-light text-slate-700 mb-8 max-w-lg leading-relaxed">
                We help businesses and buyers identify suitable manufacturers in China, verify
                supplier details, and confirm product specifications before procurement begins.
              </p>

              <ul className="flex flex-col divide-y divide-black/10 border-t border-black/10">
                <li className="flex items-center gap-3 py-3.5">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-brand-cobalt shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-sm sm:text-base text-brand-midnight uppercase tracking-tight">
                    Product sourcing &amp; supplier identification in China
                  </span>
                </li>
                <li className="flex items-center gap-3 py-3.5">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-brand-cobalt shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-sm sm:text-base text-brand-midnight uppercase tracking-tight">
                    Factory verification &amp; specification confirmation
                  </span>
                </li>
                <li className="flex items-center gap-3 py-3.5">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-brand-cobalt shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-sm sm:text-base text-brand-midnight uppercase tracking-tight">
                    Bulk purchasing, custom sourcing &amp; private labeling
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DARK SPLIT SECTION: QUOTATION & ORDER COORDINATION CORRIDOR */}
      <section className="bg-brand-midnight text-white py-20 sm:py-28 border-b border-slate-900 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Architectural Quotation Corridor Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 w-full max-w-full"
          >
            <div className="bg-[#0B1F3A] border border-white/15 p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 max-w-md mx-auto lg:mx-0 shadow-2xl rounded-md">
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
                <span>Quotation Corridor</span>
                <span className="text-emerald-400 flex items-center gap-1.5 text-xs font-black">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  Quote-Based
                </span>
              </div>

              <div className="flex flex-col gap-3.5 sm:gap-5">
                <div className="flex items-center justify-between p-3.5 sm:p-4 bg-brand-midnight border border-white/10 rounded-md">
                  <div>
                    <div className="font-mono text-lg sm:text-2xl font-bold text-white">
                      BUYER BRIEF
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400">
                      Specs, Quantity, Links &amp; Nigerian Destination
                    </div>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white/10 flex items-center justify-center text-slate-300">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-8 sm:h-10 w-px bg-slate-700 relative flex items-center justify-center">
                    <div className="absolute bg-brand-cobalt text-white text-[9px] sm:text-xs font-black px-2.5 py-1 uppercase tracking-widest rounded-md shadow-md whitespace-nowrap">
                      Slybest Trade Bridge
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 sm:p-4 bg-brand-midnight border border-white/10 rounded-md">
                  <div>
                    <div className="font-mono text-lg sm:text-2xl font-bold text-brand-cyan">
                      TAILORED QUOTE
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400">
                      Verified Supplier, Procurement &amp; Freight Options
                    </div>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="text-[10px] sm:text-[11px] text-slate-400 text-center border-t border-white/10 pt-3">
                Specification review • Supplier confirmation • Sea &amp; air options
              </div>
            </div>
          </motion.div>

          {/* Right Narrative */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3 sm:mb-4">
              Quotation &amp; order coordination
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] mb-5 sm:mb-6">
              Clear quotes
              <br />
              before you commit.
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 mb-7 sm:mb-8 max-w-lg leading-relaxed">
              Every product and shipment is quoted based on your specifications, quantity, supplier
              availability, and preferred freight option so you have clear details before
              confirming your order.
            </p>

            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 text-white border-b border-brand-cobalt pb-1 font-bold uppercase tracking-widest text-xs sm:text-sm hover:text-brand-cyan transition-colors"
            >
              <span>Request a tailored quotation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. LIGHT SPLIT SECTION: FREIGHT, CLEARING & CORRIDOR STAGE CARD */}
      <section className="bg-white py-20 sm:py-28 text-brand-midnight border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Narrative & Sharp Freight Badges */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-bold tracking-widest text-brand-cobalt uppercase mb-3 sm:mb-4">
              Freight &amp; clearing
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] mb-5 sm:mb-6">
              When it ships,
              <br />
              we coordinate.
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light text-slate-600 mb-7 sm:mb-8 max-w-lg leading-relaxed">
              From supplier warehouses in China to ports and cargo hubs in Nigeria, we coordinate
              consolidation, sea or air freight, customs clearing, and final delivery.
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-4">
              <div className="flex items-center gap-2.5 bg-brand-softWhite px-3.5 py-2.5 border border-slate-200 rounded-md">
                <Plane className="w-4 h-4 text-brand-cobalt shrink-0" aria-hidden="true" />
                <span className="font-black text-xs sm:text-sm tracking-wider uppercase">
                  AIR FREIGHT (URGENT CARGO)
                </span>
              </div>

              <div className="flex items-center gap-2.5 bg-brand-softWhite px-3.5 py-2.5 border border-slate-200 rounded-md">
                <Ship className="w-4 h-4 text-brand-cobalt shrink-0" aria-hidden="true" />
                <span className="font-black text-xs sm:text-sm tracking-wider uppercase">
                  SEA FREIGHT (FCL / LCL)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Dark Glass Logistics Corridor Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-md mx-auto w-full group overflow-hidden shadow-2xl rounded-md border border-slate-800"
          >
            <div className="absolute inset-0 bg-brand-midnight">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                alt="International sea and air freight corridor"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50"
              />
              <div className="absolute inset-0 bg-brand-midnight/75" />
            </div>

            <div className="relative z-10 p-5 sm:p-8 text-white backdrop-blur-xs">
              <div className="flex justify-between items-center mb-5 sm:mb-8 border-b border-white/20 pb-3 sm:pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" />
                  <span className="font-bold uppercase tracking-widest text-xs sm:text-sm">
                    Freight Corridor Stages
                  </span>
                </div>
                <span className="font-mono text-xs font-bold bg-white/10 px-2 py-0.5 sm:py-1 rounded-md text-brand-cyan">
                  CN &rarr; NG
                </span>
              </div>

              <div className="relative pl-6 space-y-5 sm:space-y-8 before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-white/20">
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-white/40 border-2 border-white/60" />
                  <div className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest mb-0.5">
                    China Origin
                  </div>
                  <div className="font-medium text-xs sm:text-base">
                    Supplier Handover &amp; Cargo Consolidation
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-brand-cobalt shadow-[0_0_0_4px_rgba(18,100,255,0.4)]" />
                  <div className="text-[10px] sm:text-xs font-bold text-brand-cyan uppercase tracking-widest mb-0.5">
                    Freight Transit
                  </div>
                  <div className="font-semibold text-white text-xs sm:text-base">
                    Sea Container or Air Cargo Movement
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                    Export documentation &amp; shipping coordination
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-transparent border-2 border-white/40" />
                  <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                    Nigeria Arrival
                  </div>
                  <div className="font-medium text-slate-300 text-xs sm:text-base">
                    Customs Clearing &amp; Lagos / Nationwide Delivery
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. PRIORITY PRODUCT CATEGORIES SHOWCASE (6 Featured Categories in Sharp Architectural Grid) */}
      <section className="bg-brand-softWhite py-20 sm:py-28 border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="text-xs font-bold tracking-widest text-brand-cobalt uppercase mb-3">
                Product catalogue • 15 categories
              </div>
              <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-midnight">
                Source products
                <br />
                for your business.
              </h2>
            </div>

            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-brand-cobalt border-b border-brand-cobalt pb-1 hover:text-brand-midnight transition-colors self-start sm:self-auto"
            >
              <span>View all 15 categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {priorityCategories.map((category, idx) => (
              <div
                key={category.id}
                className="group bg-white border border-slate-200 hover:border-brand-cobalt rounded-md overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-midnight border-b border-slate-200">
                    {category.imageUrl && (
                      <img
                        src={category.imageUrl}
                        alt={category.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/80 via-brand-midnight/20 to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-xs font-black bg-brand-midnight/90 text-brand-cyan px-2.5 py-1 rounded-md border border-white/10">
                      0{idx + 1}
                    </span>
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-md bg-white/95 text-brand-cobalt flex items-center justify-center shadow-xs">
                      <CategoryIcon icon={category.icon} className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-brand-cobalt text-white px-2.5 py-0.5 rounded-md font-bold">
                      {category.freightRecommendation}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-brand-midnight group-hover:text-brand-cobalt transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {category.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.exampleItems.slice(0, 3).map((sub) => (
                        <span
                          key={sub}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-brand-softWhite border border-slate-200 text-slate-700 rounded-md"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-brand-softWhite/50 flex items-center justify-between">
                  <Link
                    to={`/catalogue?category=${encodeURIComponent(category.name)}`}
                    className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-brand-midnight"
                  >
                    Explore Items
                  </Link>
                  <Link
                    to={`/request-a-quote?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-brand-cobalt group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Request a Quote</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STICKY SPLIT "HOW IT WORKS." SECTION (Exact Rayex Sticky 12-Col Layout) */}
      <section
        id="how-it-works"
        className="bg-white py-20 sm:py-28 text-brand-midnight overflow-hidden border-b border-slate-200 w-full max-w-full scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Sticky Heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-brand-midnight">
                  How it works.
                </h2>
                <p className="mt-5 text-base text-slate-600 font-light leading-relaxed max-w-sm">
                  One coordinated corridor from Chinese suppliers to your business in Nigeria, with
                  clear communication at every stage.
                </p>
                <Link
                  to="/how-it-works"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cobalt border-b border-brand-cobalt pb-1 hover:text-brand-midnight transition-colors"
                >
                  <span>Full 5-step breakdown</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right 5 Numbered Horizontal Ledger Rows */}
            <div className="lg:col-span-8 flex flex-col">
              {SITE_CONFIG.processSteps.map((step) => (
                <div
                  key={step.number}
                  className="group flex items-start gap-5 sm:gap-8 py-6 sm:py-8 border-t border-slate-300 first:border-t-0 lg:first:border-t lg:first:pt-8"
                >
                  <span className="font-mono text-2xl sm:text-4xl font-black text-brand-cobalt shrink-0 w-12 sm:w-16 leading-none pt-1">
                    0{step.number}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-display font-black uppercase tracking-tight text-brand-midnight mb-1.5 group-hover:text-brand-cobalt transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. "BUILT FOR CROSS-BORDER TRADE." 3-ROW EDITORIAL LEDGER */}
      <section className="bg-brand-softWhite py-20 sm:py-28 text-brand-midnight border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-brand-midnight max-w-2xl mb-10 sm:mb-14">
            Built for cross-border trade.
          </h2>

          <div className="border-t border-slate-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7 sm:py-9 border-b border-slate-300">
              <h3 className="lg:col-span-5 text-xl sm:text-2xl lg:text-3xl font-display font-black uppercase tracking-tight text-brand-midnight">
                Direct China supplier access
              </h3>
              <p className="lg:col-span-7 text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                We connect Nigerian businesses, retailers, wholesalers, contractors, and buyers
                with reliable Chinese manufacturers across 15 commercial product categories—whether
                you already have supplier links or need us to source from scratch.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7 sm:py-9 border-b border-slate-300">
              <h3 className="lg:col-span-5 text-xl sm:text-2xl lg:text-3xl font-display font-black uppercase tracking-tight text-brand-midnight">
                End-to-end coordination
              </h3>
              <p className="lg:col-span-7 text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                When you use separate contacts for product sourcing, warehousing, freight, and
                clearing, communication easily breaks down. Slybest Ventures Global Hubs
                coordinates your procurement, consolidation, sea or air shipping, and Nigerian
                customs clearing under one workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7 sm:py-9 border-b border-slate-300">
              <h3 className="lg:col-span-5 text-xl sm:text-2xl lg:text-3xl font-display font-black uppercase tracking-tight text-brand-midnight">
                Lagos office &amp; 24/7 enquiries
              </h3>
              <p className="lg:col-span-7 text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                With our Nigerian office at {SITE_CONFIG.contacts.nigeriaLocation.address}, you can
                reach our team directly by phone, WhatsApp, email, or in-person consultation
                whenever you are ready to plan a shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE SLYBEST TRADE DESK PREVIEW (Rayex Interactive Prompt Layout Adapted for Slybest) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200 text-brand-midnight relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left Interactive Prompt Selector */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-cobalt rounded-full" />
              <span className="text-xs font-bold tracking-widest text-brand-cobalt uppercase">
                Slybest Trade Desk
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-brand-midnight">
              Your sourcing desk,
              <br />
              right where you work.
            </h2>

            <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-md">
              Ask Slybest about product sourcing, supplier verification, cargo consolidation, and
              sea or air freight directly on WhatsApp or through our quote form.
            </p>

            <div className="mt-4 flex flex-col gap-2.5">
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Preview common buyer enquiries
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TRADE_DESK_SCENARIOS.map((scenario) => {
                  const isSelected = scenario.id === activeScenario.id;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => setActiveScenarioId(scenario.id)}
                      className={`h-11 px-3.5 border text-xs font-bold uppercase tracking-wider text-left transition-colors flex items-center justify-between rounded-md cursor-pointer ${
                        isSelected
                          ? 'border-brand-cobalt bg-brand-cobalt text-white'
                          : 'border-slate-200 hover:border-brand-cobalt bg-brand-softWhite text-brand-midnight'
                      }`}
                    >
                      <span>{scenario.label}</span>
                      <CornerDownRight
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isSelected ? 'text-white' : 'text-brand-cobalt'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Trade Desk Conversation Window */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col rounded-md">
              {/* Top Window Header */}
              <div className="bg-brand-softWhite p-3.5 sm:p-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-brand-cobalt text-white flex items-center justify-center font-black text-sm rounded-md">
                    S
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-midnight leading-tight">
                      Slybest Trade Desk
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block">
                      China to Nigeria sourcing &amp; freight
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Open 24/7
                  </span>
                </div>
              </div>

              {/* Conversation Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 bg-slate-50/70 min-h-[260px] justify-between">
                <div className="space-y-4">
                  {/* Buyer Message */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Buyer Enquiry
                    </span>
                    <div className="bg-brand-midnight text-white p-4 rounded-md max-w-md text-xs sm:text-sm leading-relaxed shadow-xs">
                      {activeScenario.buyerMessage}
                    </div>
                  </div>

                  {/* Slybest Desk Response */}
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cobalt font-bold mb-1">
                      Slybest Ventures Global Hubs
                    </span>
                    <div className="bg-white border border-slate-200 text-brand-midnight p-4 rounded-md max-w-md text-xs sm:text-sm leading-relaxed shadow-xs">
                      {activeScenario.deskResponse}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-brand-cobalt">
                  <span>{activeScenario.nextStepTag}</span>
                  <Link
                    to="/request-a-quote"
                    className="font-bold uppercase tracking-wider hover:underline"
                  >
                    Open Quote Form &rarr;
                  </Link>
                </div>
              </div>

              {/* Window Footer */}
              <div className="p-3 border-t border-slate-200 bg-white flex items-center justify-between text-[11px] text-slate-400">
                <span>Example enquiry workflow</span>
                <span className="font-bold text-brand-cobalt uppercase tracking-wider">
                  WhatsApp: {SITE_CONFIG.contacts.whatsapp.display}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Sub-Bar (Exact Rayex "From conversation to procurement" Bar) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-brand-midnight mb-1.5">
              From enquiry to delivery.
            </h3>
            <p className="text-slate-600 font-light text-xs sm:text-sm">
              Connect with Slybest Ventures Global Hubs on WhatsApp or submit a structured quote
              request online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={SITE_CONFIG.contacts.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 bg-brand-cobalt hover:bg-brand-midnight text-white px-6 sm:px-8 font-black uppercase tracking-widest text-xs transition-colors rounded-md shadow-xs"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <Link
              to="/request-a-quote"
              className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 border border-brand-midnight hover:bg-brand-midnight hover:text-white text-brand-midnight px-6 sm:px-8 font-black uppercase tracking-widest text-xs transition-all rounded-md"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. APPROVED EVIDENCE & PROJECTS (Conditionally Rendered per specification: "Hide empty proof sections until media is supplied.") */}
      {hasApprovedProof && (
        <section className="py-20 sm:py-28 bg-brand-softWhite border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block mb-3">
                  Verified supply chain evidence
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-brand-midnight">
                  Our work across the China-Nigeria corridor.
                </h2>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cobalt border-b border-brand-cobalt pb-1"
              >
                <span>View all projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approvedMediaSlots.slice(0, 3).map((slot) => (
                <div
                  key={slot.id}
                  className="rounded-md bg-white border border-slate-200 overflow-hidden"
                >
                  <img
                    src={slot.mediaUrl}
                    alt={slot.title}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-display font-black uppercase text-brand-midnight">
                      {slot.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5 font-light">
                      {slot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. CLOSING ARCHITECTURAL CTA BANNER */}
      <FinalQuoteCtaSection />
    </>
  );
};
