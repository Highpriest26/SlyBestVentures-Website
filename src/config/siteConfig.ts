export interface NavItem {
  label: string;
  path: string;
  featuredInHeader?: boolean;
  subItems?: { label: string; path: string; description: string }[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  stageCode: string;
  locationTag: string;
}

export interface TradeBridgeStage {
  number: string;
  title: string;
  description: string;
  slybestServices: string[];
}

export interface EditablePlaceholderSection {
  id: string;
  title: string;
  status: 'pending_client_copy' | 'approved';
  summary: string;
  guidanceNote: string;
}

export const SITE_CONFIG = {
  business: {
    name: 'Slybest Ventures Global Hubs',
    shortName: 'Slybest Ventures',
    tagline: 'Slybest Trade Bridge: Source • Coordinate • Ship • Deliver',
    description:
      'Slybest Ventures Global Hubs connects customers and businesses in Nigeria with reliable manufacturers and suppliers in China. The company supports sourcing, purchasing, shipping, importation, customs coordination, and delivery.',
    positioning:
      'A dependable China-to-Nigeria sourcing and procurement partner that helps individuals and businesses move from product request to delivery with one coordinated process.',
    businessModelNote:
      'Quote-based sourcing and procurement. Product availability, supplier pricing, exchange rates, freight, customs, quantity, and destination can change.',
    primaryAudience: [
      {
        title: 'Individuals Sourcing Products from China',
        description:
          'Personal buyers sourcing appliances, electronics, solar systems, vehicles, or home equipment directly from verified suppliers.',
      },
      {
        title: 'Retailers and Wholesalers',
        description:
          'Market traders, shop owners, and regional wholesalers stocking high-demand electronics, appliances, and general merchandise.',
      },
      {
        title: 'Businesses Purchasing Equipment or Inventory',
        description:
          'Commercial enterprises acquiring operational machinery, POS hardware, digital signage, or specialized commercial assets.',
      },
      {
        title: 'Corporate Procurement Teams',
        description:
          'Organizations requiring structured supplier coordination, bulk quotation preparation, and consolidated freight to Nigeria.',
      },
      {
        title: 'Contractors and Project-Based Buyers',
        description:
          'Engineers, developers, and installers sourcing solar arrays, inverters, fuel station equipment, and building electricals.',
      },
      {
        title: 'Distributors and Resellers',
        description:
          'Distribution networks seeking recurring factory orders, bulk purchasing coordination, and predictable importation workflows.',
      },
    ],
  },

  brand: {
    conceptName: 'Slybest Trade Bridge',
    conceptIdea:
      'Present Slybest as the organised bridge between Nigerian buyers, Chinese suppliers, shipping partners, and final delivery.',
    storySequence: ['Source', 'Coordinate', 'Ship', 'Deliver'],
    logoUrl: '/logo-mark.png',
  },

  contacts: {
    phoneNumbers: [
      {
        display: '08145159030',
        href: 'tel:+2348145159030',
        label: 'Primary Line & Enquiries',
      },
      {
        display: '0704 268 4587',
        href: 'tel:+2347042684587',
        label: 'Direct Support Line',
      },
    ],
    whatsapp: {
      display: '08145159030',
      rawNumber: '2348145159030',
      href: 'https://wa.me/2348145159030',
    },
    email: {
      display: 'slybestventuresglobalhubs@gmail.com',
      href: 'mailto:slybestventuresglobalhubs@gmail.com',
    },
    instagram: {
      handle: '@slybest_ventures',
      href: 'https://instagram.com/slybest_ventures',
    },
    tiktok: {
      handle: '@Slybest_',
      href: 'https://tiktok.com/@Slybest_',
    },
    whatsappChannel: {
      label: 'Official WhatsApp Channel',
      href: 'https://whatsapp.com/channel/0029Vb9lZlRH5JM2HEHMTs0h',
    },
    businessHours: 'Open 24/7',
    nigeriaLocation: {
      label: 'Lagos Office & Showroom Hub',
      address: 'B108 Electronics Section, Alaba International Market, Ojo, Lagos, Nigeria',
      city: 'Lagos',
      country: 'Nigeria',
      mapEmbedQuery: 'Alaba+International+Market,Ojo,Lagos,Nigeria',
      mapDirectionsUrl:
        'https://www.google.com/maps/search/?api=1&query=B108+Electronics+Section+Alaba+International+Market+Ojo+Lagos+Nigeria',
    },
    chinaLocation: {
      status: 'Pending client confirmation',
      notice:
        'Supplier coordination and cargo consolidation are arranged across major manufacturing hubs in China. Specific collection or receiving warehouse details are shared directly with confirmed procurement orders.',
    },
  },

  navigation: {
    primary: [
      { label: 'Home', path: '/', featuredInHeader: false },
      { label: 'About Us', path: '/about', featuredInHeader: true },
      {
        label: 'Services',
        path: '/services',
        featuredInHeader: true,
        subItems: [
          {
            label: 'All Services',
            path: '/services',
            description: 'Explore all 11 sourcing, freight, and procurement services.',
          },
          {
            label: 'China Sourcing',
            path: '/china-sourcing',
            description: 'How we identify suppliers, verify factories, and source products.',
          },
          {
            label: 'Shipping & Importation',
            path: '/shipping-importation',
            description: 'Sea freight, air freight, customs clearing, and delivery options.',
          },
        ],
      },
      { label: 'Product Catalogue', path: '/catalogue', featuredInHeader: true },
      { label: 'How It Works', path: '/how-it-works', featuredInHeader: true },
      { label: 'Projects', path: '/projects', featuredInHeader: false },
      { label: 'Testimonials', path: '/testimonials', featuredInHeader: false },
      { label: 'Contact', path: '/contact', featuredInHeader: true },
    ] as NavItem[],
    primaryCta: {
      label: 'Request a Quote',
      path: '/request-a-quote',
    },
    secondaryCta: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/2348145159030',
    },
  },

  home: {
    hero: {
      headline: 'From Reliable Chinese Suppliers to Your Business in Nigeria',
      supportingText:
        'Slybest Ventures Global Hubs helps you source, coordinate, ship, import, and receive products from China through one clear process.',
      primaryCta: 'Request a Quote',
      secondaryCta: 'Chat on WhatsApp',
    },
    trustStrip: [
      'China sourcing',
      'Supplier coordination',
      'Sea and air freight',
      'Customs coordination',
      'Nigeria delivery',
    ],
  },

  tradeBridgeFourStages: [
    {
      number: '01',
      title: 'Source',
      description:
        'We help you find products and connect with suitable manufacturers or suppliers in China.',
      slybestServices: [
        'Product sourcing',
        'Factory verification',
        'Supplier coordination',
      ],
    },
    {
      number: '02',
      title: 'Coordinate',
      description:
        'We confirm specifications, quantities, supplier details, purchasing requirements, and quotation details.',
      slybestServices: [
        'Business procurement',
        'Bulk purchasing',
        'Trade consultation',
      ],
    },
    {
      number: '03',
      title: 'Ship',
      description:
        'We coordinate sea or air freight, customs processes, clearing, and shipment movement to Nigeria.',
      slybestServices: [
        'Sea freight',
        'Air freight',
        'Customs coordination',
      ],
    },
    {
      number: '04',
      title: 'Deliver',
      description:
        'We coordinate delivery or collection according to the agreed destination and shipment arrangement.',
      slybestServices: [
        'Door-to-door delivery',
        'Wholesale distribution',
        'Nigeria delivery coordination',
      ],
    },
  ] as TradeBridgeStage[],

  processSteps: [
    {
      number: 1,
      title: 'Tell us what you need',
      description: 'Submit a product request, specification, link, image, or quantity.',
      stageCode: 'STAGE 01 // REQUEST',
      locationTag: 'Nigeria / Online Request',
    },
    {
      number: 2,
      title: 'We source and verify',
      description: 'We identify suppliers, review product details, and coordinate with factories.',
      stageCode: 'STAGE 02 // VERIFY',
      locationTag: 'China Manufacturing Hubs',
    },
    {
      number: 3,
      title: 'Receive a quotation',
      description:
        'We prepare a quotation based on availability, quantity, freight, and applicable charges.',
      stageCode: 'STAGE 03 // QUOTATION',
      locationTag: 'Procurement Desk',
    },
    {
      number: 4,
      title: 'We ship and coordinate importation',
      description: 'We coordinate sea or air freight and support customs and clearing processes.',
      stageCode: 'STAGE 04 // FREIGHT & CLEARING',
      locationTag: 'Sea / Air Corridor to Nigeria',
    },
    {
      number: 5,
      title: 'Your goods are delivered',
      description: 'We coordinate delivery to the agreed destination in Nigeria.',
      stageCode: 'STAGE 05 // DELIVERY',
      locationTag: 'Lagos & Nationwide Nigeria',
    },
  ] as ProcessStep[],

  chinaSourcingProcess: [
    {
      step: 1,
      title: 'Customer submits a product request.',
      detail:
        'Share the product name, technical specifications, supplier link, reference photo, required quantity, and destination in Nigeria.',
    },
    {
      step: 2,
      title: 'Slybest reviews the requirement.',
      detail:
        'Our procurement team checks your specifications, clarifies any missing technical parameters, and aligns on your target use case.',
    },
    {
      step: 3,
      title: 'Suppliers or factories are identified.',
      detail:
        'We reach out to reliable manufacturers and verified supply partners in China suited to your product category and volume.',
    },
    {
      step: 4,
      title: 'Product details and availability are checked.',
      detail:
        'We confirm current production availability, model options, minimum order quantities, packaging details, and factory readiness.',
    },
    {
      step: 5,
      title: 'A quotation is prepared.',
      detail:
        'You receive a clear quotation reflecting product cost, exchange rate considerations, freight options, customs coordination, and applicable charges.',
    },
    {
      step: 6,
      title: 'The customer confirms the order.',
      detail:
        'Once you review and approve the quotation terms and specifications, your procurement instruction is confirmed.',
    },
    {
      step: 7,
      title: 'Purchasing and shipping coordination begins.',
      detail:
        'We coordinate supplier payment/purchasing, cargo preparation, sea or air shipment, customs clearing, and final delivery in Nigeria.',
    },
  ],

  shippingAndImportation: {
    title: 'Sea and Air Freight From China to Nigeria',
    approvedCopy:
      'Slybest Ventures Global Hubs offers sea freight and air freight options. Delivery options depend on the product, quantity, shipment size, and destination. Delivery timelines are provided as estimated ranges because supplier readiness, shipping schedules, customs processes, and other factors can vary.',
    promiseRuleNote:
      'Delivery timelines are shared as estimated ranges per shipment. Exact delivery dates are never promised without confirmed shipment and customs clearance information.',
    topics: [
      {
        id: 'sea-freight',
        title: 'Sea Freight',
        subtitle: 'Bulk orders, heavy appliances, vehicles, solar equipment, and containers',
        description:
          'Recommended when importing larger volumes, heavy machinery, commercial inventory, or full/shared container loads where cost efficiency per unit is a priority.',
        considerations: [
          'Suitable for bulk purchasing, wholesale inventory, and heavy cargo',
          'Supports both consolidated cargo and dedicated container shipments',
          'Cost-effective for large-volume electronics, appliances, and solar systems',
        ],
      },
      {
        id: 'air-freight',
        title: 'Air Freight',
        subtitle: 'Urgent consignments, compact electronics, and time-sensitive samples',
        description:
          'Provides faster transit from China to Nigeria for lighter shipments, high-priority business components, commercial samples, and compact electronics.',
        considerations: [
          'Recommended when speed is prioritized over volume capacity',
          'Ideal for smartphones, gadgets, POS terminals, and urgent spare parts',
          'Subject to airline cargo regulations (especially regarding batteries and hazardous items)',
        ],
      },
      {
        id: 'product-preparation',
        title: 'Product Preparation',
        subtitle: 'Supplier readiness, packaging review, and export documentation',
        description:
          'Before cargo leaves China, suppliers prepare and package goods according to order specifications and freight requirements so items are protected for international transit.',
        considerations: [
          'Coordination of supplier readiness and production completion',
          'Export crating or carton reinforcement where applicable',
          'Cargo labelling and packing list verification',
        ],
      },
      {
        id: 'shipment-coordination',
        title: 'Shipment Coordination',
        subtitle: 'Connecting factory dispatch with sea vessels or air cargo schedules',
        description:
          'We coordinate the movement of your goods from the supplier to the designated export terminal in China and schedule loading onto sea vessels or air cargo flights bound for Nigeria.',
        considerations: [
          'Alignment with vessel sailing windows or flight schedules',
          'Consolidation of multiple supplier packages when agreed',
          'Continuous coordination through transit milestones',
        ],
      },
      {
        id: 'customs-clearing',
        title: 'Customs and Clearing Coordination',
        subtitle: 'Structured support through Nigerian port and airport clearance processes',
        description:
          'Navigating importation procedures requires accurate documentation and clearing coordination. We support customs and clearing processes upon arrival in Nigeria.',
        considerations: [
          'Coordination of import documentation and cargo clearance',
          'Applicable customs duties and clearing charges factored into quotation workflows',
          'Minimizing avoidable delays through proper pre-shipment alignment',
        ],
      },
      {
        id: 'destination-delivery',
        title: 'Destination Delivery',
        subtitle: 'Collection or coordinated delivery to your agreed destination in Nigeria',
        description:
          'Once cleared, goods are coordinated for collection at our Lagos location (Alaba International Market) or dispatched directly to your agreed destination city and state in Nigeria.',
        considerations: [
          'Lagos hub access at Alaba International Market, Ojo',
          'Door-to-door or warehouse-to-buyer delivery coordination across Nigerian states',
          'Handover confirmation upon receipt of goods',
        ],
      },
      {
        id: 'estimated-ranges',
        title: 'Estimated Delivery Ranges',
        subtitle: 'Why we provide realistic estimated windows rather than fixed date promises',
        description:
          'Every quotation includes an estimated delivery range tailored to your chosen shipping method (sea or air), product readiness, and Nigerian destination.',
        considerations: [
          'Air freight generally offers shorter transit windows for eligible cargo',
          'Sea freight requires longer ocean transit and port clearing windows',
          'Updated timeline estimates are communicated once supplier dispatch is confirmed',
        ],
      },
      {
        id: 'timeline-factors',
        title: 'Reasons Delivery Timelines Can Vary',
        subtitle: 'Transparent communication on real-world international trade variables',
        description:
          'International trade between China and Nigeria involves multiple independent stages. Understanding these variables helps buyers plan inventory and project schedules responsibly.',
        considerations: [
          'Supplier production lead times and factory readiness',
          'International shipping line or airline schedule adjustments',
          'Weather conditions and port congestion along maritime routes',
          'Customs inspection procedures and regulatory clearance durations',
          'Inland logistics and final-mile transport conditions to destination states',
        ],
      },
    ],
  },

  aboutEditablePlaceholders: [
    {
      id: 'company_history',
      title: 'Company History',
      status: 'pending_client_copy',
      summary:
        'Slybest Ventures Global Hubs operates from Alaba International Market in Ojo, Lagos, serving individuals and businesses seeking dependable product sourcing and importation from China.',
      guidanceNote:
        'Editable Section: Ready for client-approved founding timeline and historical milestones in src/config/siteConfig.ts.',
    },
    {
      id: 'founder_information',
      title: 'Founder & Executive Leadership',
      status: 'pending_client_copy',
      summary:
        'Led by trade and procurement practitioners focused on bridging Nigerian buyers with verified Chinese manufacturers through transparent, quote-based coordination.',
      guidanceNote:
        'Editable Section: Ready for client-approved founder biography, portrait, and leadership message.',
    },
    {
      id: 'team_details',
      title: 'Our Coordination Team',
      status: 'pending_client_copy',
      summary:
        'Dedicated specialists supporting customer enquiries, supplier communication in China, freight scheduling, customs clearing coordination, and Nigerian delivery.',
      guidanceNote:
        'Editable Section: Ready for client-approved team structure and department profiles.',
    },
    {
      id: 'mission',
      title: 'Our Mission',
      status: 'pending_client_copy',
      summary:
        'To simplify China-to-Nigeria sourcing and procurement so individuals and businesses can acquire quality products with clarity, reliable coordination, and end-to-end support.',
      guidanceNote: 'Editable Section: Ready for official client-approved Mission Statement.',
    },
    {
      id: 'vision',
      title: 'Our Vision',
      status: 'pending_client_copy',
      summary:
        'To be a trusted trade bridge connecting Nigerian enterprises and households with global manufacturing supply chains.',
      guidanceNote: 'Editable Section: Ready for official client-approved Vision Statement.',
    },
    {
      id: 'core_values',
      title: 'Core Values',
      status: 'pending_client_copy',
      summary:
        'Dependable Coordination • Transparent Quotations • Supplier Verification • Responsive Communication • End-to-End Accountability.',
      guidanceNote: 'Editable Section: Ready for official client-approved Core Values list.',
    },
  ] as EditablePlaceholderSection[],

  futureFeatures: {
    enableOnlinePayment: false,
    enableOrderTracking: false,
    enableCustomerAccounts: false,
    enableExpandedProductManagement: false,
    quoteSubmissionEndpoint: '',
  },
};
