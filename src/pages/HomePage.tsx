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
  Search,
  MapPin,
  Phone,
  Building2,
  PackageCheck,
  FileCheck2,
  Warehouse,
  Star,
  Globe2,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PRODUCT_CATEGORIES, CATALOGUE_ITEMS } from '../config/catalogueConfig';
import {
  CREDIBILITY_HIGHLIGHTS,
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
      'Hello Slybest, we need a reliable manufacturer in China for Smart TVs, sound systems, and solar inverters for our Lagos store.',
    deskResponse:
      'Welcome to Slybest Ventures Global Hubs. Share your target specifications or reference photos. We will identify suitable Chinese manufacturers, verify product options, and prepare a quotation covering procurement and freight to Nigeria.',
    nextStepTag: 'Stage 01 • Product Sourcing & Supplier Verification',
  },
  {
    id: 'shipping',
    label: 'Shipping & Clearing',
    buyerMessage:
      'We have goods ready with suppliers in China. Can you consolidate them, ship to Nigeria, and handle customs clearing?',
    deskResponse:
      'Yes. We coordinate warehousing and consolidation in China so items from multiple suppliers move as one organized shipment—either by Sea Freight (FCL/LCL) or Air Freight, including Nigerian customs clearing and Lagos delivery.',
    nextStepTag: 'Stage 03 • Warehousing, Shipping & Clearing',
  },
  {
    id: 'how',
    label: 'How Sourcing Works',
    buyerMessage:
      'How do we get started if we only have product pictures and a target budget?',
    deskResponse:
      'Simply send us the product name, pictures, specifications, and quantity on WhatsApp or our quote form. We source or verify factories in China, send your tailored quotation, and handle procurement, shipping, clearing, and delivery.',
    nextStepTag: '5-Step End-to-End Workflow',
  },
  {
    id: 'start',
    label: 'Start Enquiry',
    buyerMessage:
      'We want to source home appliances and automobile spare parts from China. Can we talk on WhatsApp or visit your Lagos office?',
    deskResponse:
      `Absolutely. You can message us directly on WhatsApp (${SITE_CONFIG.contacts.whatsapp.display}) or visit our Lagos Head Office at ${SITE_CONFIG.contacts.nigeriaLocation.address}.`,
    nextStepTag: 'Direct Quote Desk • Open 24/7',
  },
];

type CategoryFilterKey = 'top' | 'electronics' | 'solar' | 'appliances' | 'auto' | 'all';
type FeaturedStockTabKey = 'highlights' | 'cars' | 'fans' | 'speakers' | 'fridges' | 'all';

const SIX_CORE_SERVICES = [
  {
    number: '01',
    title: 'China Product Sourcing',
    subtitle: 'Direct Manufacturer Matching',
    description:
      'Tell us what you want to buy—by product name, photo, specification, or link. We identify genuine, high-capacity manufacturers in China that match your quality and target budget.',
    icon: Search,
    serviceParam: 'Product Sourcing from China',
  },
  {
    number: '02',
    title: 'Factory Verification & Procurement',
    subtitle: 'Safe Purchasing & Quality Checks',
    description:
      'We verify supplier credentials, confirm exact product specifications, negotiate factory-direct wholesale pricing, and coordinate bulk purchasing and private labeling.',
    icon: Building2,
    serviceParam: 'Factory Verification & Supplier Coordination',
  },
  {
    number: '03',
    title: 'Importation & Cargo Consolidation',
    subtitle: 'China Warehousing & Grouping',
    description:
      'Buying from multiple Chinese factories? We receive all your goods at our China consolidation warehouse, inspect the cartons, and combine them into one organized shipment.',
    icon: Warehouse,
    serviceParam: 'Warehousing & Consolidation',
  },
  {
    number: '04',
    title: 'Sea & Air Freight Shipping',
    subtitle: 'FCL, LCL & Priority Air Cargo',
    description:
      'We coordinate cost-effective Sea Freight (20ft/40ft FCL containers or LCL groupage) for heavy and bulk goods, plus fast Air Freight for urgent electronics and accessories.',
    icon: Ship,
    serviceParam: 'Sea Freight & Air Freight',
  },
  {
    number: '05',
    title: 'Customs Clearing in Nigeria',
    subtitle: 'Documentation & Port Clearance',
    description:
      'Our experienced clearing team handles export documentation, import compliance, and Nigerian port/airport customs clearance so your cargo moves without costly delays.',
    icon: FileCheck2,
    serviceParam: 'Customs Clearing & Documentation Coordination',
  },
  {
    number: '06',
    title: 'Lagos & Nationwide Delivery',
    subtitle: 'Alaba Hub or Door-to-Door Handover',
    description:
      'Receive your cleared goods directly at our Alaba International Market office in Lagos or have them dispatched safely to your warehouse anywhere in Nigeria.',
    icon: PackageCheck,
    serviceParam: 'Door-to-Door Delivery Coordination',
  },
];

export const HomePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeScenarioId, setActiveScenarioId] = useState<string>('suppliers');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterKey>('top');
  const [stockTab, setStockTab] = useState<FeaturedStockTabKey>('highlights');

  const activeScenario =
    TRADE_DESK_SCENARIOS.find((s) => s.id === activeScenarioId) || TRADE_DESK_SCENARIOS[0];

  const getFilteredCategories = () => {
    switch (categoryFilter) {
      case 'electronics':
        return PRODUCT_CATEGORIES.filter((c) =>
          [
            'tvs-home-appliances',
            'speakers-sound-systems',
            'electronics-gadgets',
            'led-displays-advertising',
            'smart-home-products',
            'printers-pos-equipment',
          ].includes(c.id)
        );
      case 'solar':
        return PRODUCT_CATEGORIES.filter((c) =>
          [
            'solar-panels-systems',
            'inverters-batteries',
            'fans-rechargeable-solar',
            'electrical-appliances',
          ].includes(c.id)
        );
      case 'appliances':
        return PRODUCT_CATEGORIES.filter((c) =>
          [
            'tvs-home-appliances',
            'refrigerators-freezers',
            'washing-machines',
            'fans-rechargeable-solar',
            'electrical-appliances',
          ].includes(c.id)
        );
      case 'auto':
        return PRODUCT_CATEGORIES.filter((c) =>
          [
            'vehicles-auto-parts',
            'fuel-station-equipment',
            'general-china-sourcing',
          ].includes(c.id)
        );
      case 'all':
        return PRODUCT_CATEGORIES;
      case 'top':
      default:
        return PRODUCT_CATEGORIES.slice(0, 6);
    }
  };

  const displayedCategories = getFilteredCategories();
  const allUploadedProducts = CATALOGUE_ITEMS.filter((item) =>
    item.imageUrl?.startsWith('/products/')
  );
  const getFilteredStockProducts = () => {
    switch (stockTab) {
      case 'cars':
        return allUploadedProducts.filter((i) => i.category === 'Vehicles and Auto Parts');
      case 'fans':
        return allUploadedProducts.filter(
          (i) => i.category === 'Fans and Rechargeable/Solar Fans'
        );
      case 'speakers':
        return allUploadedProducts.filter((i) => i.category === 'Speakers and Sound Systems');
      case 'fridges':
        return allUploadedProducts.filter((i) => i.category === 'Refrigerators and Freezers');
      case 'all':
        return allUploadedProducts;
      case 'highlights':
      default:
        return [
          'cat-item-car-jetour-t2',
          'cat-item-car-toyota-camry',
          'cat-item-car-changan-univ',
          'cat-item-fan-solar-copper',
          'cat-item-fan-digital-solar-black',
          'cat-item-fan-solar-desk-orange',
          'cat-item-audio-baj-2151',
          'cat-item-fridge-3door-1',
          'cat-item-fridge-chest-2m',
        ]
          .map((id) => allUploadedProducts.find((item) => item.id === id))
          .filter((item): item is NonNullable<typeof item> => Boolean(item));
    }
  };
  const featuredProducts = getFilteredStockProducts();
  const featuredProofSlots = PROJECT_MEDIA_SLOTS.slice(0, 6);

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.home.title}
        description={PAGE_METADATA.home.description}
      />

      {/* 1. HERO SECTION: IMMEDIATELY EXPLAIN WHAT SLYBEST DOES & WHY TO TRUST US */}
      <section className="relative min-h-[86dvh] sm:min-h-[92dvh] w-full max-w-full flex flex-col justify-end overflow-hidden bg-brand-midnight">
        {/* Full-Bleed Trade Corridor Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=85"
            alt="Container vessel and port logistics moving goods from China to Nigeria"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[1500ms]"
          />
          <div className="absolute inset-0 bg-brand-midnight/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/60 to-brand-midnight/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight/90 via-brand-midnight/45 to-transparent" />
        </div>

        {/* Lower-Anchored Editorial Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 lg:pb-20 pt-24 sm:pt-32">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            {/* Trust Eyebrow */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-xs border border-white/15 text-[11px] sm:text-xs font-bold tracking-widest text-brand-cyan uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Trusted China-to-Nigeria Sourcing, Procurement &amp; Shipping Partner</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.92] mb-5 sm:mb-6">
              Source Directly From Verified Chinese Factories to Your Door in Nigeria.
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-7 sm:mb-9 max-w-3xl">
              <strong className="font-bold text-white">Slybest Ventures Global Hubs</strong> helps
              Nigerian wholesalers, retailers, contractors, and buyers source genuine products in
              China, verify factories, handle bulk procurement, ship by sea or air, clear customs
              in Lagos, and receive goods safely across Nigeria.
            </p>

            {/* 3 Prominent CTA Buttons Requested by Owner */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5">
              <Link
                to="/request-a-quote"
                className="bg-brand-cobalt hover:bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 group shadow-lg"
              >
                <span>Request a Quote</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/catalogue"
                className="bg-brand-amber hover:bg-amber-400 text-brand-midnight px-6 sm:px-7 py-4 rounded-md font-black uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span>Source a Product</span>
              </Link>

              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 sm:px-7 py-4 rounded-md font-black uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>

            {/* Immediate Trust & Location Bar Inside Hero */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <Globe2 className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-white">China Network:</strong> Direct Factory Audits &amp; Consolidation
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-white">Lagos Office:</strong> B108 Alaba Int&apos;l Market, Ojo
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-white">24/7 WhatsApp &amp; Call:</strong>{' '}
                  <a href={SITE_CONFIG.contacts.whatsapp.href} className="underline hover:text-brand-cyan font-mono">
                    {SITE_CONFIG.contacts.whatsapp.display}
                  </a>
                </span>
              </div>
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

      {/* 2. WHY TRUST SLYBEST: 4 CREDIBILITY PILLARS (Presence, Experience, Shipments, Partnerships) */}
      <section
        aria-label="Why trust Slybest Ventures Global Hubs"
        className="bg-brand-softWhite border-b border-slate-200 py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block mb-2">
                Why Nigerian importers trust us
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-brand-midnight leading-[0.95]">
                Real presence in China &amp; Nigeria.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-light max-w-md">
              We bridge Chinese factory floors with your warehouse in Nigeria—backed by a physical
              Lagos office you can visit anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CREDIBILITY_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 hover:border-brand-cobalt rounded-md p-6 flex flex-col justify-between shadow-xs transition-all"
              >
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-brand-cobalt/10 text-brand-cobalt mb-4">
                    {item.badge}
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-black text-brand-midnight tracking-tight mb-1.5">
                    {item.metric}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-brand-cobalt mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EASY-TO-FIND PRODUCT CATEGORIES (Electronics, Solar, Appliances, Sound Systems, Auto Parts & All 15) */}
      <section
        id="products"
        className="bg-white py-16 sm:py-24 border-b border-slate-200 overflow-hidden w-full max-w-full scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="text-xs font-bold tracking-widest text-brand-cobalt uppercase mb-2.5">
                What we source &amp; import • 15 commercial categories
              </div>
              <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-midnight">
                Find your product category.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light mt-3 max-w-2xl">
                From Electronics, Solar Panels, Inverters, and Home Appliances to Sound Systems,
                Vehicles, and Auto Parts—we source directly from verified Chinese factories.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-midnight hover:bg-brand-cobalt text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <span>Open Full Catalogue</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Featured Real Products Showcase: Cars, Solar Fans, Speakers & Refrigerators */}
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 pb-4 border-b border-slate-200">
              <div>
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-brand-amber/20 text-brand-midnight mb-2">
                  Featured Factory-Direct Stock &amp; Arrivals
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-brand-midnight">
                  Cars, Solar Fans, Speakers &amp; Refrigerators
                </h3>
              </div>
              <Link
                to="/catalogue"
                className="text-xs font-black uppercase tracking-widest text-brand-cobalt hover:underline inline-flex items-center gap-1.5"
              >
                <span>See All Catalogue Products</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Filter Tabs for Featured Uploaded Products */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
              {[
                { key: 'highlights' as FeaturedStockTabKey, label: 'Top Highlights (9)' },
                { key: 'cars' as FeaturedStockTabKey, label: 'Cars & SUVs (4)' },
                { key: 'fans' as FeaturedStockTabKey, label: 'Solar & Rechargeable Fans (9)' },
                { key: 'speakers' as FeaturedStockTabKey, label: 'Speakers & Sound (2)' },
                { key: 'fridges' as FeaturedStockTabKey, label: 'Refrigerators & Freezers (4)' },
                { key: 'all' as FeaturedStockTabKey, label: `View All Stock (${allUploadedProducts.length})` },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setStockTab(tab.key)}
                  className={`shrink-0 px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    stockTab === tab.key
                      ? 'bg-brand-midnight text-brand-cyan shadow-xs'
                      : 'bg-brand-softWhite text-brand-midnight hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white border border-slate-200 hover:border-brand-cobalt rounded-md overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-brand-midnight/90 text-brand-cyan px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                      <span className="absolute bottom-3 right-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-brand-cobalt text-white px-2.5 py-1 rounded-md">
                        {item.recommendedFreight}
                      </span>
                    </div>

                    <div className="p-5">
                      <h4 className="text-lg font-display font-black uppercase tracking-tight text-brand-midnight group-hover:text-brand-cobalt transition-colors mb-2">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-3">
                        {item.shortDescription}
                      </p>
                      <div className="p-2.5 rounded-md bg-brand-softWhite border border-slate-200/80 text-[11px] text-slate-700 font-mono leading-relaxed">
                        {item.specificationNote}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 border-t border-slate-200 bg-brand-softWhite flex items-center justify-between gap-2">
                    <Link
                      to={`/request-a-quote?category=${encodeURIComponent(
                        item.category
                      )}&product=${encodeURIComponent(item.name)}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-md bg-brand-cobalt hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Request a Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.contacts.whatsapp.rawNumber}?text=${encodeURIComponent(
                        `Hello Slybest Ventures Global Hubs, I want to enquire about ordering "${item.name}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile-Friendly Quick Filter Tabs for Instant Product Discovery */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-slate-200">
            {[
              { key: 'top' as CategoryFilterKey, label: 'Popular Categories (6)' },
              { key: 'electronics' as CategoryFilterKey, label: 'Electronics, TVs & Sound' },
              { key: 'solar' as CategoryFilterKey, label: 'Solar, Inverters & Batteries' },
              { key: 'appliances' as CategoryFilterKey, label: 'Home Appliances & Fridges' },
              { key: 'auto' as CategoryFilterKey, label: 'Vehicles, Auto Parts & Industrial' },
              { key: 'all' as CategoryFilterKey, label: 'View All 15 Categories' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setCategoryFilter(tab.key)}
                className={`shrink-0 px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  categoryFilter === tab.key
                    ? 'bg-brand-cobalt text-white shadow-xs'
                    : 'bg-brand-softWhite text-brand-midnight hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedCategories.map((category, idx) => (
              <div
                key={category.id}
                className="group bg-brand-softWhite border border-slate-200 hover:border-brand-cobalt rounded-md overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/85 via-brand-midnight/25 to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-xs font-black bg-brand-midnight/90 text-brand-cyan px-2.5 py-1 rounded-md border border-white/10">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-md bg-white/95 text-brand-cobalt flex items-center justify-center shadow-xs">
                      <CategoryIcon icon={category.icon} className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-brand-cobalt text-white px-2.5 py-1 rounded-md font-bold">
                      {category.freightRecommendation}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-brand-midnight group-hover:text-brand-cobalt transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {category.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.exampleItems.map((sub) => (
                        <span
                          key={sub}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white border border-slate-200 text-slate-700 rounded-md"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-6 py-4 border-t border-slate-200 bg-white flex items-center justify-between gap-2">
                  <Link
                    to={`/request-a-quote?category=${encodeURIComponent(category.name)}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-md bg-brand-cobalt hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Source This Product</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.contacts.whatsapp.rawNumber}?text=${encodeURIComponent(
                      `Hello Slybest Ventures Global Hubs, I want to enquire about sourcing ${category.name} from China to Nigeria.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    aria-label={`Ask about ${category.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Complete 15-Category Quick-Jump Directory Pill Box */}
          <div className="mt-10 p-5 sm:p-6 rounded-md bg-brand-softWhite border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-midnight">
                Quick Directory: All 15 Product Categories We Import From China
              </span>
              <Link
                to="/request-a-quote"
                className="text-xs font-bold text-brand-cobalt hover:underline"
              >
                Don&apos;t see your item? Request Custom China Sourcing &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/catalogue?category=${encodeURIComponent(cat.name)}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-brand-cobalt text-brand-midnight hover:text-white border border-slate-200 text-xs font-semibold transition-colors"
                >
                  <CategoryIcon icon={cat.icon} className="w-3.5 h-3.5 text-brand-cobalt group-hover:text-white" />
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLEAR 6-PILLAR SERVICES SECTION (Sourcing, Procurement, Importation, Shipping, Clearing & Delivery) */}
      <section className="bg-brand-midnight text-white py-16 sm:py-24 border-b border-slate-900 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-2.5">
                End-to-end China-to-Nigeria services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-white">
                Sourcing, procurement, shipping, clearing &amp; delivery.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light mt-3 leading-relaxed">
                We handle every stage of your importation from China so you never have to juggle
                separate sourcing agents, freight forwarders, and clearing contacts.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-cobalt hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <span>View All 11 Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat With Our Team</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIX_CORE_SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.number}
                  className="bg-[#0B1F3A] border border-white/15 hover:border-brand-cyan/50 rounded-md p-6 sm:p-7 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-sm font-black text-brand-cyan">
                        {srv.number}
                      </span>
                      <div className="w-10 h-10 rounded-md bg-brand-cobalt/20 border border-brand-cobalt/40 text-brand-cyan flex items-center justify-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-wider text-brand-amber font-bold mb-1">
                      {srv.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <Link
                      to={`/request-a-quote?service=${encodeURIComponent(srv.serviceParam)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand-cyan hover:text-white transition-colors"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.contacts.whatsapp.rawNumber}?text=${encodeURIComponent(
                        `Hello Slybest, I need assistance with ${srv.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. "ONE PARTNER, FACTORY TO DOOR." 4-STAGE ASYMMETRIC BENTO GRID */}
      <SlybestTradeBridgeSection />

      {/* 6. ABOUT US & THE CHINA-NIGERIA CONNECTION STORY */}
      <section className="relative bg-brand-softWhite py-16 sm:py-24 text-brand-midnight border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Image with Offset Solid Cobalt Frame */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative"
            >
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 w-full h-full bg-brand-cobalt rounded-md"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-black/10 shadow-xl group bg-brand-midnight">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
                  alt="Slybest Ventures Global Hubs factory verification and China-Nigeria trade bridge"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-brand-midnight/95 text-white p-3.5 shadow-md border border-white/15 flex items-center justify-between gap-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-[11px] font-black uppercase tracking-widest">
                      China Factory Network ↔ Alaba Int&apos;l Market, Lagos
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-cyan font-bold shrink-0">
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Story & China-Nigeria Connection Narrative */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div className="text-xs font-bold tracking-widest text-brand-cobalt uppercase mb-3">
                About Slybest Ventures Global Hubs • Our Story
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter leading-[0.92] mb-5 text-brand-midnight">
                The trusted bridge between China &amp; Nigeria.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg font-light text-slate-700 mb-4 leading-relaxed">
                Importing from China to Nigeria should not feel like a gamble. Many Nigerian
                business owners face unverified online suppliers, wrong product specifications,
                delayed shipments, or complicated port clearing.
              </p>

              <p className="text-sm sm:text-base lg:text-lg font-light text-slate-700 mb-6 leading-relaxed">
                <strong className="font-bold text-brand-midnight">
                  Slybest Ventures Global Hubs
                </strong>{' '}
                was built to solve this end to end. By combining our supplier &amp; factory
                network across China&apos;s major production cities with our physical head office
                at <strong className="font-semibold text-brand-midnight">B108 Electronics Section, Alaba International Market, Ojo, Lagos</strong>,
                we give Nigerian buyers one accountable partner from factory floor to warehouse door.
              </p>

              <ul className="flex flex-col divide-y divide-black/10 border-y border-black/10 mb-7">
                <li className="flex items-center gap-3 py-3">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-brand-cobalt shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-xs sm:text-sm text-brand-midnight uppercase tracking-tight">
                    Direct Factory Relationships in Guangzhou, Shenzhen, Foshan &amp; Yiwu
                  </span>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-brand-cobalt shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-xs sm:text-sm text-brand-midnight uppercase tracking-tight">
                    Transparent Quotes, Quality Inspection &amp; Multi-Supplier Consolidation
                  </span>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-brand-cobalt shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-xs sm:text-sm text-brand-midnight uppercase tracking-tight">
                    Physical Lagos Office at Alaba Market for Walk-In Consultation &amp; Pickup
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-midnight hover:bg-brand-cobalt text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={SITE_CONFIG.contacts.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Speak With Us on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. COMPLETED SHIPMENTS, FACTORY PARTNERSHIPS & SUPPLY CHAIN PROOF */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block mb-2.5">
                Track record &amp; supply chain proof
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-brand-midnight leading-[0.95]">
                Completed shipments, factory audits &amp; Lagos operations.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light mt-3">
                See how we inspect factories in China, consolidate containers, ship by sea and air,
                and deliver to clients across Nigeria.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-softWhite hover:bg-brand-cobalt text-brand-midnight hover:text-white border border-slate-200 text-xs font-black uppercase tracking-widest transition-colors shrink-0 self-start lg:self-auto"
            >
              <span>View All 9 Proof Categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProofSlots.map((slot) => (
              <div
                key={slot.id}
                className="group rounded-md bg-brand-softWhite border border-slate-200 hover:border-brand-cobalt overflow-hidden flex flex-col justify-between transition-all hover:shadow-lg"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-brand-midnight">
                    <img
                      src={slot.mediaUrl || slot.previewImageUrl}
                      alt={slot.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-brand-midnight/90 text-brand-cyan font-mono text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {slot.stageTag}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-display font-black uppercase tracking-tight text-brand-midnight mb-2">
                      {slot.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS SECTION (Nigerian Importers, Wholesalers & Contractors) */}
      <section className="py-16 sm:py-24 bg-brand-softWhite border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cobalt block mb-2.5">
                Verified customer testimonials
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-brand-midnight leading-[0.95]">
                Trusted by Nigerian wholesalers, contractors &amp; buyers.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light mt-3">
                Feedback from businesses and importers who use Slybest Ventures Global Hubs to
                source and ship products from China to Nigeria.
              </p>
            </div>

            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cobalt border-b border-brand-cobalt pb-1 hover:text-brand-midnight transition-colors self-start lg:self-auto"
            >
              <span>Read All Customer Reviews</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPROVED_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-md p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-brand-midnight text-brand-cyan font-mono text-[10px] font-bold uppercase tracking-wider">
                      {item.categorySourced}
                    </span>
                    <div className="flex text-brand-amber gap-0.5 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-brand-midnight leading-relaxed font-normal mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-end justify-between gap-2">
                  <div>
                    <div className="font-display font-black text-sm text-brand-midnight uppercase">
                      {item.clientName}
                    </div>
                    {item.companyOrRole && (
                      <div className="text-xs text-brand-cobalt font-semibold">
                        {item.companyOrRole}
                      </div>
                    )}
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.location}</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md font-bold">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREIGHT, CLEARING & QUOTATION CORRIDOR SPLIT SECTION */}
      <section className="bg-brand-midnight text-white py-16 sm:py-24 border-b border-slate-900 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Narrative & Freight Badges */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">
              Sea freight, air cargo &amp; customs clearing
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] mb-5">
              Clear quotes &amp; reliable shipping to Nigeria.
            </h2>

            <p className="text-sm sm:text-lg font-light text-slate-300 mb-7 max-w-lg leading-relaxed">
              Every order is quoted transparently based on your product specifications, quantity,
              and preferred freight mode—whether full container (FCL), shared container groupage
              (LCL), or fast air cargo.
            </p>

            <div className="flex flex-wrap gap-3 mb-7">
              <div className="flex items-center gap-2.5 bg-[#0B1F3A] px-3.5 py-2.5 border border-white/15 rounded-md">
                <Plane className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" />
                <span className="font-black text-xs tracking-wider uppercase text-white">
                  AIR FREIGHT (EXPRESS CARGO)
                </span>
              </div>

              <div className="flex items-center gap-2.5 bg-[#0B1F3A] px-3.5 py-2.5 border border-white/15 rounded-md">
                <Ship className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" />
                <span className="font-black text-xs tracking-wider uppercase text-white">
                  SEA FREIGHT (FCL / LCL GROUPAGE)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-brand-cobalt hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <span>Request a Shipping Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Shipping Desk</span>
              </a>
            </div>
          </motion.div>

          {/* Right Quotation & Corridor Stage Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B1F3A] border border-white/15 p-5 sm:p-8 flex flex-col gap-5 max-w-md mx-auto lg:mx-0 shadow-2xl rounded-md w-full"
          >
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-300 border-b border-white/10 pb-4">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-cyan" aria-hidden="true" />
                China → Nigeria Corridor
              </span>
              <span className="text-emerald-400 flex items-center gap-1.5 text-xs font-black">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                End-to-End
              </span>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-brand-midnight border border-white/10 rounded-md">
                <div>
                  <div className="font-mono text-base sm:text-lg font-bold text-white">
                    01. CHINA ORIGIN HUB
                  </div>
                  <div className="text-xs text-slate-400">
                    Factory Inspection, Purchasing &amp; Consolidation
                  </div>
                </div>
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-brand-cyan">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-brand-midnight border border-brand-cobalt/50 rounded-md">
                <div>
                  <div className="font-mono text-base sm:text-lg font-bold text-brand-cyan">
                    02. SEA / AIR FREIGHT &amp; CLEARING
                  </div>
                  <div className="text-xs text-slate-300">
                    Export Docs, Container/Air Transit &amp; Customs Clearance
                  </div>
                </div>
                <div className="w-7 h-7 rounded-md bg-brand-cobalt/30 flex items-center justify-center text-brand-cyan">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-brand-midnight border border-white/10 rounded-md">
                <div>
                  <div className="font-mono text-base sm:text-lg font-bold text-emerald-400">
                    03. LAGOS &amp; NIGERIA DELIVERY
                  </div>
                  <div className="text-xs text-slate-400">
                    Alaba Market Hub Handover or Nationwide Dispatch
                  </div>
                </div>
                <div className="w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. STICKY SPLIT "HOW IT WORKS." SECTION */}
      <section
        id="how-it-works"
        className="bg-white py-16 sm:py-24 text-brand-midnight overflow-hidden border-b border-slate-200 w-full max-w-full scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Sticky Heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-brand-midnight">
                  How it works.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-sm">
                  Five simple steps from your initial product enquiry to delivery in Nigeria.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-cobalt text-white text-xs font-black uppercase tracking-widest"
                  >
                    <span>Start Step 01</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-brand-softWhite border border-slate-200 text-brand-midnight text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Full Process</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 5 Numbered Horizontal Ledger Rows */}
            <div className="lg:col-span-8 flex flex-col">
              {SITE_CONFIG.processSteps.map((step) => (
                <div
                  key={step.number}
                  className="group flex items-start gap-5 sm:gap-8 py-6 sm:py-7 border-t border-slate-300 first:border-t-0 lg:first:border-t lg:first:pt-7"
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

      {/* 11. INTERACTIVE WHATSAPP TRADE DESK & DIRECT CONTACT HUB */}
      <section className="py-16 sm:py-24 bg-brand-softWhite border-b border-slate-200 text-brand-midnight relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left Interactive Prompt Selector & Immediate WhatsApp Reachability */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-cobalt uppercase">
                Immediate WhatsApp &amp; Quote Desk • Open 24/7
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight leading-[0.95] text-brand-midnight">
              Reach us immediately on WhatsApp.
            </h2>

            <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
              Have a product photo, specification list, or shipping question? Tap below to chat
              directly with Slybest Ventures Global Hubs on WhatsApp or preview common buyer
              enquiries.
            </p>

            {/* Direct One-Tap WhatsApp & Call Box */}
            <div className="p-4 rounded-md bg-white border border-slate-200 space-y-3 shadow-xs">
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black uppercase tracking-widest transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat on WhatsApp ({SITE_CONFIG.contacts.whatsapp.display})</span>
              </a>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pt-1">
                <span>Direct Call Lines:</span>
                <div className="flex gap-3 font-mono font-bold text-brand-midnight">
                  {SITE_CONFIG.contacts.phoneNumbers.map((p) => (
                    <a key={p.href} href={p.href} className="hover:text-brand-cobalt underline">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                Tap to preview common customer enquiries:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {TRADE_DESK_SCENARIOS.map((scenario) => {
                  const isSelected = scenario.id === activeScenario.id;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => setActiveScenarioId(scenario.id)}
                      className={`h-11 px-3 border text-xs font-bold uppercase tracking-wider text-left transition-colors flex items-center justify-between rounded-md cursor-pointer ${
                        isSelected
                          ? 'border-brand-cobalt bg-brand-cobalt text-white'
                          : 'border-slate-200 hover:border-brand-cobalt bg-white text-brand-midnight'
                      }`}
                    >
                      <span className="truncate">{scenario.label}</span>
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
              <div className="bg-brand-midnight text-white p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo-mark.png"
                    alt="Slybest Global Hub Logo"
                    className="w-8 sm:w-9 h-8 sm:h-9 object-cover rounded-md border border-white/20"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      Slybest Ventures Global Hubs
                    </h3>
                    <span className="text-[10px] font-mono text-brand-cyan uppercase block">
                      WhatsApp &amp; Procurement Desk • {SITE_CONFIG.contacts.whatsapp.display}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Online 24/7
                  </span>
                </div>
              </div>

              {/* Conversation Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 bg-slate-50/70 min-h-[250px] justify-between">
                <div className="space-y-4">
                  {/* Buyer Message */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Customer Enquiry
                    </span>
                    <div className="bg-brand-midnight text-white p-4 rounded-md max-w-md text-xs sm:text-sm leading-relaxed shadow-xs">
                      {activeScenario.buyerMessage}
                    </div>
                  </div>

                  {/* Slybest Desk Response */}
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cobalt font-bold mb-1">
                      Slybest Trade Desk
                    </span>
                    <div className="bg-white border border-slate-200 text-brand-midnight p-4 rounded-md max-w-md text-xs sm:text-sm leading-relaxed shadow-xs">
                      {activeScenario.deskResponse}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-brand-cobalt">
                  <span>{activeScenario.nextStepTag}</span>
                  <a
                    href={SITE_CONFIG.contacts.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold uppercase tracking-wider text-emerald-700 hover:underline"
                  >
                    Continue on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CLOSING ARCHITECTURAL CTA BANNER */}
      <FinalQuoteCtaSection />
    </>
  );
};
