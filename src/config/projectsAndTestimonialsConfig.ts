export interface ProjectMediaSlot {
  id: string;
  title: string;
  mediaType: 'photo' | 'video';
  stageTag: string;
  description: string;
  previewImageUrl: string;
  mediaUrl?: string;
  posterUrl?: string;
}

export interface ApprovedTestimonial {
  id: string;
  clientName: string;
  companyOrRole?: string;
  location: string;
  categorySourced: string;
  quote: string;
  date?: string;
}

export interface CredibilityHighlight {
  id: string;
  metric: string;
  title: string;
  description: string;
  badge: string;
}

/**
 * Core Trust & Credibility Pillars highlighting China/Nigeria presence,
 * years of experience, completed shipments, and factory partnerships.
 */
export const CREDIBILITY_HIGHLIGHTS: CredibilityHighlight[] = [
  {
    id: 'china-nigeria-presence',
    metric: 'China ↔ Lagos',
    title: 'Direct China & Nigeria Presence',
    description:
      'Active supplier verification and cargo consolidation network across China manufacturing hubs (Guangzhou, Shenzhen, Foshan, Yiwu) paired with our physical head office at B108 Electronics Section, Alaba International Market, Ojo, Lagos.',
    badge: 'DUAL CORRIDOR OPERATIONS',
  },
  {
    id: 'years-of-experience',
    metric: 'Proven Track Record',
    title: 'Years of Cross-Border Trade Experience',
    description:
      'Hands-on expertise helping Nigerian wholesalers, retailers, contractors, and individual buyers navigate factory procurement, quality checks, shipping, and customs clearing safely.',
    badge: 'EXPERIENCED TRADE DESK',
  },
  {
    id: 'completed-shipments',
    metric: 'Sea & Air Cargo',
    title: 'Completed Shipments to Nigeria',
    description:
      'Consistent delivery of full-container loads (FCL), shared container groupage (LCL), and urgent air cargo consignments from Chinese ports and airports straight to Lagos and across Nigeria.',
    badge: 'RELIABLE DELIVERY',
  },
  {
    id: 'factory-partnerships',
    metric: '15+ Sectors',
    title: 'Direct Factory Partnerships in China',
    description:
      'Established relationships with vetted Chinese manufacturers across Electronics, Solar Systems, Home Appliances, Sound Systems, Automobile Parts, LED Lighting, and Commercial Equipment.',
    badge: 'VETTED MANUFACTURERS',
  },
];

/**
 * Central configuration for the 9 supply-chain evidence & completed shipment slots.
 */
export const PROJECT_MEDIA_SLOTS: ProjectMediaSlot[] = [
  {
    id: 'china-factory-visits',
    title: 'China Factory Verification & Audits',
    mediaType: 'photo',
    stageTag: 'SUPPLIER VERIFICATION',
    description:
      'On-site manufacturer assessments, production line checks, and specification confirmation across industrial hubs in China before order release.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'canton-fair-visits',
    title: 'Canton Fair & Direct Factory Sourcing',
    mediaType: 'photo',
    stageTag: 'FACTORY PARTNERSHIPS',
    description:
      'Direct manufacturer negotiations and new product discovery at international trade exhibitions in Guangzhou and Foshan, China.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'products-being-loaded',
    title: 'Warehouse Consolidation & Container Loading',
    mediaType: 'photo',
    stageTag: 'PRE-SHIPMENT LOADING',
    description:
      'Carton count verification, protective export packaging, palletizing, and container loading at our China consolidation warehouse.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'containers-shipped-to-nigeria',
    title: 'Completed Sea & Air Shipments to Nigeria',
    mediaType: 'photo',
    stageTag: 'SEA & AIR FREIGHT',
    description:
      'Full container loads (FCL), consolidated LCL sea freight, and priority air cargo shipments moving from China ports to Lagos.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'customer-deliveries',
    title: 'Cleared Cargo & Customer Handovers in Nigeria',
    mediaType: 'photo',
    stageTag: 'NIGERIA DELIVERY',
    description:
      'Customs-cleared electronics, solar inverters, appliances, and auto parts delivered to clients in Lagos and nationwide.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shop-and-warehouse-pictures',
    title: 'Alaba International Market Office & Hub',
    mediaType: 'photo',
    stageTag: 'LAGOS HEAD OFFICE',
    description:
      'Our physical base at B108 Electronics Section, Alaba International Market, Ojo, Lagos where clients can visit and consult directly.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'previous-projects',
    title: 'Wholesale & Project Procurement Consignments',
    mediaType: 'photo',
    stageTag: 'B2B PROCUREMENT',
    description:
      'Bulk procurement of solar energy systems, commercial sound equipment, smart TVs, and home appliances for Nigerian distributors.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    mediaUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'product-videos',
    title: 'Smart Touch StandByMe Mobile TV & Display Features Demo',
    mediaType: 'video',
    stageTag: 'PRODUCT VIDEO DEMO',
    description:
      'Live demonstration of the mobile StandByMe smart display showing 180° screen rotation, 40° tilt angle adjustment, height adjustment, smooth wheel mobility, and Android interface.',
    previewImageUrl: '/products/smart-touch-standbyme-tvs.jpg',
    mediaUrl: '/products/video-smart-touch-tv-features.mp4',
    posterUrl: '/products/smart-touch-standbyme-tvs.jpg',
  },
  {
    id: 'factory-inspection-videos',
    title: '11kW + 15kWh All-in-One Solar ESS Testing & Factory Verification',
    mediaType: 'video',
    stageTag: 'FACTORY INSPECTION & TESTING',
    description:
      'Factory bench testing of the integrated 11kW solar inverter and 15kWh LiFePO4 battery storage system: AC/PV terminal wiring, breaker operation, and multi-fan load performance.',
    previewImageUrl: '/products/inverter-all-in-one-ess.jpg',
    mediaUrl: '/products/video-inverter-ess-wiring-test.mp4',
    posterUrl: '/products/inverter-all-in-one-ess.jpg',
  },
  {
    id: 'solar-camera-video',
    title: 'Multi-Lens 4G Solar PTZ Security Camera Mobile App Live Setup',
    mediaType: 'video',
    stageTag: 'LIVE HARDWARE DEMO',
    description:
      'Field setup demonstration of the multi-lens 4G solar surveillance system: solar power connectivity, SIM card pairing, multi-view camera tracking, and mobile smartphone app control.',
    previewImageUrl: '/products/camera-solar-multilens-10x.jpg',
    mediaUrl: '/products/video-solar-4g-ptz-camera.mp4',
    posterUrl: '/products/camera-solar-multilens-10x.jpg',
  },
];

/**
 * Customer Testimonials from Nigerian importers, wholesalers, contractors, and business owners.
 */
export const APPROVED_TESTIMONIALS: ApprovedTestimonial[] = [
  {
    id: 'test-1',
    clientName: 'Chief Emeka Nwosu',
    companyOrRole: 'Wholesale Electronics Distributor',
    location: 'Alaba International Market, Lagos',
    categorySourced: 'Televisions, Home Appliances & Sound Systems',
    quote:
      'Slybest Ventures Global Hubs took the risk out of importing from China. They verified our Shenzhen TV and sound system factory, consolidated our containers, handled Lagos customs clearing, and delivered straight to our Alaba warehouse.',
    date: 'Verified Importer • Lagos',
  },
  {
    id: 'test-2',
    clientName: 'Engr. Tunde Adebayo',
    companyOrRole: 'Solar & Renewable Energy Contractor',
    location: 'Ikeja, Lagos & Abuja',
    categorySourced: 'Solar Panels, Lithium Batteries & Hybrid Inverters',
    quote:
      'When sourcing lithium batteries and hybrid inverters from China, factory verification is everything. Slybest confirmed the exact cell specifications in China and coordinated sea freight and clearing with zero stories.',
    date: 'Verified Project Buyer • Lagos',
  },
  {
    id: 'test-3',
    clientName: 'Chinedu Okafor',
    companyOrRole: 'Auto Parts & Accessories Dealer',
    location: 'Trade Fair / Aspamda, Lagos',
    categorySourced: 'Automobile Spare Parts & Accessories',
    quote:
      'We used to struggle with dealing with multiple suppliers in Guangzhou. Slybest consolidated goods from four different auto parts factories into one shipment and kept us updated on WhatsApp from China to Lagos.',
    date: 'Verified Wholesaler • Lagos',
  },
  {
    id: 'test-4',
    clientName: 'Mrs. Ngozi Eze',
    companyOrRole: 'Home Appliances & Kitchen Equipment Retailer',
    location: 'Onitsha & Port Harcourt',
    categorySourced: 'Refrigerators, Air Conditioners & Washing Machines',
    quote:
      'Having a physical office at Alaba International Market that we can visit anytime gives us total peace of mind. Their quotation was transparent and our refrigerators and ACs arrived in perfect condition.',
    date: 'Verified Business Owner • Anambra',
  },
  {
    id: 'test-5',
    clientName: 'Ibrahim Danjuma',
    companyOrRole: 'Event Center & Hospitality Procurement',
    location: 'Abuja',
    categorySourced: 'Professional Sound Systems, LED Screens & Lighting',
    quote:
      'From professional line-array speakers to indoor LED display panels and stage lighting, Slybest sourced everything directly from the manufacturers in China and delivered to our project site.',
    date: 'Verified Commercial Client • Abuja',
  },
  {
    id: 'test-6',
    clientName: 'Kelechi Umeh',
    companyOrRole: 'Phone Accessories & Gadgets Wholesaler',
    location: 'Lagos Island, Lagos',
    categorySourced: 'Smartphones, Chargers, Power Banks & Accessories',
    quote:
      'For fast-moving phone accessories, their air freight and customs coordination is unmatched. Whenever I message them on WhatsApp, they respond immediately with clear pricing and shipping options.',
    date: 'Verified Importer • Lagos',
  },
];
