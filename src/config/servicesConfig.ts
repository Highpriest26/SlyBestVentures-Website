export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortExplanation: string;
  whoTheServiceIsFor: string;
  informationToProvide: string[];
  ctaText: string;
  relatedPagePath?: string;
  relatedPageLabel?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'product-sourcing-from-china',
    number: '01',
    title: 'Product sourcing from China',
    shortExplanation:
      'We locate dependable manufacturers and verified suppliers in China that match your exact product specifications, quality expectations, and target quantity.',
    whoTheServiceIsFor:
      'Individuals, retailers, wholesalers, contractors, and corporate buyers looking to buy directly from China without navigating language or supplier barriers alone.',
    informationToProvide: [
      'Product name, model, or detailed technical specifications',
      'Reference images, supplier links (if any), and target quantity',
      'Intended use case (personal, retail resale, or commercial project)',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/china-sourcing',
    relatedPageLabel: 'View China Sourcing Process',
  },
  {
    id: 'factory-verification-supplier-coordination',
    number: '02',
    title: 'Factory verification and supplier coordination',
    shortExplanation:
      'Before purchasing, we review supplier credentials, confirm product details and availability, and coordinate directly with factories to align on order specifications.',
    whoTheServiceIsFor:
      'Businesses, importers, and project buyers placing orders with new Chinese suppliers or requiring structured factory follow-up.',
    informationToProvide: [
      'Supplier contact details or product link (if you already found a vendor)',
      'Required product specifications, compliance standards, and packaging needs',
      'Order volume and target production schedule',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/china-sourcing',
    relatedPageLabel: 'Learn About Verification',
  },
  {
    id: 'bulk-purchasing',
    number: '03',
    title: 'Bulk purchasing',
    shortExplanation:
      'We coordinate high-volume and multi-carton orders with Chinese factories, managing supplier payments, order confirmation, and pre-shipment preparation.',
    whoTheServiceIsFor:
      'Wholesalers, distributors, market dealers, real estate developers, and organizations ordering inventory in bulk.',
    informationToProvide: [
      'Complete list of items and quantities per SKU or model',
      'Branding or OEM customization requirements (if applicable)',
      'Preferred shipping mode (Sea or Air) and destination in Nigeria',
    ],
    ctaText: 'Request a Quote',
  },
  {
    id: 'importation-from-china-to-nigeria',
    number: '04',
    title: 'Importation from China to Nigeria',
    shortExplanation:
      'End-to-end importation management moving your goods from factory dispatch in China through international transit and arrival in Nigeria.',
    whoTheServiceIsFor:
      'First-time and experienced Nigerian importers who want one coordinated team handling the China-to-Nigeria supply chain.',
    informationToProvide: [
      'Product description, weight/volume estimate (if known), and quantity',
      'Supplier readiness status or sourcing requirement',
      'Delivery city and state in Nigeria',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/shipping-importation',
    relatedPageLabel: 'Explore Importation Options',
  },
  {
    id: 'sea-freight',
    number: '05',
    title: 'Sea freight',
    shortExplanation:
      'Cost-effective ocean shipping from China to Nigeria for bulk cargo, heavy appliances, solar systems, vehicles, machinery, and full or shared container loads.',
    whoTheServiceIsFor:
      'Importers shipping large volumes, heavy equipment, commercial stock, or full/consolidated container consignments.',
    informationToProvide: [
      'Cargo description, carton count, estimated CBM (cubic metres) or weight',
      'Whether you require shared consolidation (LCL) or full container load (FCL)',
      'Target arrival window and destination in Nigeria',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/shipping-importation',
    relatedPageLabel: 'See Sea Freight Details',
  },
  {
    id: 'air-freight',
    number: '06',
    title: 'Air freight',
    shortExplanation:
      'Expedited air cargo coordination from China to Nigeria for time-sensitive consignments, compact electronics, POS hardware, and urgent spare parts.',
    whoTheServiceIsFor:
      'Businesses and individuals needing faster turnaround for lighter, high-priority, or sample shipments.',
    informationToProvide: [
      'Exact product type (including whether items contain batteries or liquids)',
      'Estimated gross weight (kg), carton dimensions, and quantity',
      'Target delivery timeframe and Nigerian destination',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/shipping-importation',
    relatedPageLabel: 'See Air Freight Details',
  },
  {
    id: 'clearing-and-customs-coordination',
    number: '07',
    title: 'Clearing and customs coordination',
    shortExplanation:
      'Structured coordination of import documentation and customs clearing procedures so your shipment moves smoothly through Nigerian ports or airports.',
    whoTheServiceIsFor:
      'Importers and corporate buyers who want customs and clearing handled as part of a coordinated procurement and shipping process.',
    informationToProvide: [
      'Detailed product description, HS code (if available), and commercial value',
      'Packing list details and shipment mode (Sea or Air)',
      'Final delivery or collection preference in Nigeria',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/shipping-importation',
    relatedPageLabel: 'Learn About Customs Coordination',
  },
  {
    id: 'door-to-door-delivery',
    number: '08',
    title: 'Door-to-door delivery',
    shortExplanation:
      'Complete coordination from supplier pickup in China to final delivery at your agreed residential, commercial, or warehouse address in Nigeria.',
    whoTheServiceIsFor:
      'Buyers across Lagos and other Nigerian states who prefer hassle-free delivery directly to their doorstep or project site.',
    informationToProvide: [
      'Product details, quantity, and preferred shipping method',
      'Full destination city, state, and delivery address specifics in Nigeria',
      'Contact person and active phone/WhatsApp number',
    ],
    ctaText: 'Request a Quote',
  },
  {
    id: 'wholesale-and-distribution',
    number: '09',
    title: 'Wholesale and distribution',
    shortExplanation:
      'Supply and distribution support for high-demand electronics, home appliances, solar products, fans, and sound systems from our Lagos hub and China network.',
    whoTheServiceIsFor:
      'Retailers, regional sub-distributors, electronics dealers, and trade resellers across Nigeria.',
    informationToProvide: [
      'Product categories of interest and target wholesale quantities',
      'Your business location and resale/distribution focus',
      'Preferred restock frequency or immediate stock enquiry',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/catalogue',
    relatedPageLabel: 'Browse Product Catalogue',
  },
  {
    id: 'business-procurement',
    number: '10',
    title: 'Business procurement',
    shortExplanation:
      'Dedicated B2B procurement support for companies, hotels, hospitals, schools, estates, and fuel stations acquiring operational equipment from China.',
    whoTheServiceIsFor:
      'Corporate procurement teams, contractors, facility managers, and project-based institutional buyers.',
    informationToProvide: [
      'Project bill of quantities (BOQ) or equipment specification list',
      'Company name, project location, and target delivery schedule',
      'Any specific technical or warranty requirements',
    ],
    ctaText: 'Request a Quote',
  },
  {
    id: 'china-nigeria-trade-consultation',
    number: '11',
    title: 'China-Nigeria trade consultation',
    shortExplanation:
      'Practical advisory on product selection, supplier verification, sea vs. air freight planning, landed cost estimation, and importation workflows.',
    whoTheServiceIsFor:
      'New importers, growing retail brands, and businesses planning a major procurement project from China.',
    informationToProvide: [
      'Brief overview of your business or planned import project',
      'Product categories you intend to source and estimated budget range',
      'Specific questions regarding sourcing, shipping, or customs coordination',
    ],
    ctaText: 'Request a Quote',
    relatedPagePath: '/contact',
    relatedPageLabel: 'Speak With Our Team',
  },
];
