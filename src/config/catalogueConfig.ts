export type CategoryIconKey =
  | 'car'
  | 'snowflake'
  | 'washing-machine'
  | 'tv'
  | 'sun'
  | 'battery'
  | 'fan'
  | 'speaker'
  | 'display'
  | 'house'
  | 'smartphone'
  | 'plug'
  | 'fuel'
  | 'printer'
  | 'package';

export interface ProductCategory {
  id: string;
  name: string;
  icon: CategoryIconKey;
  shortDescription: string;
  exampleItems: string[];
  typicalBuyers: string;
  freightRecommendation: 'Sea freight' | 'Air freight' | 'Sea or Air freight';
  imageUrl?: string;
  featured?: boolean;
}

export interface CatalogueItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  specificationNote: string;
  recommendedFreight: 'Sea freight' | 'Air freight' | 'Sea or Air freight';
  imageUrl?: string;
  approvedPrice?: string; // Leave undefined unless client provides approved fixed pricing
}

/**
 * Central editable configuration for all 15 approved product categories.
 * Includes curated high-impact imagery that can be replaced anytime with client photography.
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'vehicles-auto-parts',
    name: 'Vehicles and Auto Parts',
    icon: 'car',
    shortDescription:
      'SUVs, sedans, EVs, commercial vans, tyres, and OEM spare parts direct from China.',
    exampleItems: ['Passenger & Commercial Vehicles', 'Engine & Suspension Parts', 'Body Kits & Auto Lighting', 'Tyres & Workshop Tools'],
    typicalBuyers: 'Auto dealers, fleet operators, spare parts distributors, and individual buyers',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'solar-panels-systems',
    name: 'Solar Panels and Solar Systems',
    icon: 'sun',
    shortDescription:
      'Monocrystalline solar panels, off-grid commercial kits, and solar street lighting.',
    exampleItems: ['Monocrystalline Solar Panels', 'All-in-One Solar Street Lights', 'Complete Off-Grid Solar Kits', 'Mounting Rails & Cables'],
    typicalBuyers: 'Solar EPC contractors, energy distributors, businesses, and estates',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'tvs-home-appliances',
    name: 'TVs and Home Appliances',
    icon: 'tv',
    shortDescription:
      'Smart 4K/8K LED & QLED TVs, split air conditioners, cookers, and modern kitchen gear.',
    exampleItems: ['Smart 4K / UHD Televisions', 'Split & Standing Air Conditioners', 'Gas & Electric Cookers', 'Kitchen Appliances'],
    typicalBuyers: 'Alaba & nationwide electronics dealers, developers, and homeowners',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'inverters-batteries',
    name: 'Inverters and Batteries',
    icon: 'battery',
    shortDescription:
      'Hybrid solar inverters, LiFePO4 lithium battery banks, and rack-mount storage systems.',
    exampleItems: ['Hybrid Solar Inverters', 'LiFePO4 Lithium Battery Packs', 'Rack-Mount Storage Systems', 'Charge Controllers'],
    typicalBuyers: 'Renewable energy installers, corporate offices, and wholesale distributors',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'refrigerators-freezers',
    name: 'Refrigerators and Freezers',
    icon: 'snowflake',
    shortDescription:
      'Double-door refrigerators, deep chest freezers, solar DC chillers, and display coolers.',
    exampleItems: ['Chest & Deep Freezers', 'Side-by-Side Refrigerators', 'Commercial Beverage Chillers', 'Solar DC Freezers'],
    typicalBuyers: 'Appliance retailers, supermarkets, hospitality businesses, and households',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'led-displays-advertising',
    name: 'LED Displays and Digital Advertising Screens',
    icon: 'display',
    shortDescription:
      'Indoor and outdoor LED video walls, stage screens, and digital signage kiosks.',
    exampleItems: ['Outdoor Waterproof LED Billboards', 'Indoor Fine-Pitch Video Walls', 'Digital Kiosks', 'LED Controllers'],
    typicalBuyers: 'Advertising agencies, event venues, churches, and retail chains',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    icon: 'washing-machine',
    shortDescription:
      'Front-load automatic washers, twin-tub machines, and commercial laundry units.',
    exampleItems: ['Front-Load Automatic Washers', 'Twin-Tub Washing Machines', 'Washer-Dryer Combos', 'Commercial Laundry Units'],
    typicalBuyers: 'Electronics wholesalers, laundromats, hotels, and residential buyers',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'fans-rechargeable-solar',
    name: 'Fans and Rechargeable/Solar Fans',
    icon: 'fan',
    shortDescription:
      'AC/DC rechargeable standing fans, solar fans with panels, and industrial mist fans.',
    exampleItems: ['AC/DC Rechargeable Standing Fans', 'Solar Fans with Panel', 'Industrial Mist Fans', 'Modern Ceiling Fans'],
    typicalBuyers: 'Wholesale distributors, retail stores, schools, and households',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'speakers-sound-systems',
    name: 'Speakers and Sound Systems',
    icon: 'speaker',
    shortDescription:
      'Home theatres, professional PA line arrays, trolley speakers, and amplifiers.',
    exampleItems: ['Home Theatre & Soundbars', 'Portable Trolley Speakers', 'Professional PA & Line Arrays', 'Power Amplifiers'],
    typicalBuyers: 'Audio equipment dealers, event centres, churches, and retail buyers',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'smart-home-products',
    name: 'Smart Home Products',
    icon: 'house',
    shortDescription:
      'Biometric smart door locks, 4G/solar CCTV security cameras, and home automation.',
    exampleItems: ['Biometric & Smart Door Locks', 'Solar 4G / Wi-Fi CCTV Cameras', 'Smart Touch Switches', 'Video Doorbells'],
    typicalBuyers: 'Real estate developers, security installers, and homeowners',
    freightRecommendation: 'Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'electronics-gadgets',
    name: 'Electronics and Gadgets',
    icon: 'smartphone',
    shortDescription:
      'Power banks, smartwatches, tablets, audio buds, and high-turnover mobile accessories.',
    exampleItems: ['Power Banks & Charging Stations', 'Smartwatches & Audio Buds', 'Tablets & Accessories', 'Phone Accessories'],
    typicalBuyers: 'Tech retailers, gadget wholesalers, and corporate buyers',
    freightRecommendation: 'Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'electrical-appliances',
    name: 'Electrical Appliances',
    icon: 'plug',
    shortDescription:
      'Automatic voltage regulators (AVR), industrial breakers, cables, and LED lighting.',
    exampleItems: ['Automatic Voltage Stabilizers (AVR)', 'Breakers & Switchgear', 'Architectural LED Lighting', 'Armoured Cables'],
    typicalBuyers: 'Electrical contractors, building material dealers, and facility managers',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'fuel-station-equipment',
    name: 'Fuel Station Equipment',
    icon: 'fuel',
    shortDescription:
      'Digital fuel dispensers, submersible pumps, flow meters, nozzles, and LPG/CNG gear.',
    exampleItems: ['Multi-Nozzle Fuel Dispensers', 'Submersible Pumps & Meters', 'Hoses & Auto Nozzles', 'Tank Gauging Systems'],
    typicalBuyers: 'Petroleum marketers, fuel station contractors, and engineers',
    freightRecommendation: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'printers-pos-equipment',
    name: 'Printers and POS Equipment',
    icon: 'printer',
    shortDescription:
      'Touchscreen POS terminals, 80mm thermal printers, barcode scanners, and cash drawers.',
    exampleItems: ['All-in-One Touch POS Terminals', '80mm Thermal Receipt Printers', '2D Barcode Scanners', 'Label Printers'],
    typicalBuyers: 'Supermarkets, restaurants, pharmacies, and IT resellers',
    freightRecommendation: 'Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'general-china-sourcing',
    name: 'General China Sourcing',
    icon: 'package',
    shortDescription:
      'Any custom factory order, industrial machine, hospitality furniture, or OEM product.',
    exampleItems: ['Industrial & Processing Machinery', 'Hotel & Office Furniture', 'Custom Packaging', 'Project Procurement'],
    typicalBuyers: 'Manufacturers, project contractors, startups, and procurement teams',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
];

/**
 * Representative catalogue items across the 15 categories.
 * Rule: Do not show fixed prices unless the client later provides approved prices.
 */
export const CATALOGUE_ITEMS: CatalogueItem[] = [
  {
    id: 'cat-item-auto-1',
    name: 'Passenger Vehicles, SUVs & Commercial Vans',
    category: 'Vehicles and Auto Parts',
    shortDescription:
      'Brand-new or verified sedans, SUVs, pickups, EVs, and commercial vans shipped from China to Lagos.',
    specificationNote: 'Preferred make/model, year, trim, and quantity.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-auto-2',
    name: 'OEM & Aftermarket Auto Spare Parts',
    category: 'Vehicles and Auto Parts',
    shortDescription:
      'Engine components, suspension kits, brake pads, body panels, headlamps, and heavy-duty truck spares.',
    specificationNote: 'Part numbers, chassis compatibility, and quantities.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-solar-1',
    name: 'Tier-1 Monocrystalline Solar Panels (450W–700W+)',
    category: 'Solar Panels and Solar Systems',
    shortDescription:
      'High-efficiency half-cut monocrystalline and bifacial solar panels in pallet and container quantities.',
    specificationNote: 'Target wattage per panel and pallet/container quantity.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-inv-1',
    name: 'Hybrid Solar Inverters & LiFePO4 Lithium Batteries',
    category: 'Inverters and Batteries',
    shortDescription:
      '3kVA to 100kVA+ hybrid inverters paired with wall-mounted or rack-mount LiFePO4 battery banks.',
    specificationNote: 'Inverter kVA rating, voltage (24V/48V), and kWh capacity.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-tv-1',
    name: 'Smart 4K UHD & Frameless LED Televisions',
    category: 'TVs and Home Appliances',
    shortDescription:
      '32-inch to 100-inch Smart Android/Google TVs and QLED panels for wholesale and projects.',
    specificationNote: 'Screen sizes, smart OS specs, and carton count.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-fridge-1',
    name: 'Chest Freezers & Double-Door Refrigerators',
    category: 'Refrigerators and Freezers',
    shortDescription:
      'Low-voltage inverter refrigerators, deep chest freezers, and solar DC cold-storage units.',
    specificationNote: 'Capacity (litres), AC or Solar DC, and order volume.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-wash-1',
    name: 'Front-Load Automatic & Twin-Tub Washing Machines',
    category: 'Washing Machines',
    shortDescription:
      'Durable domestic and commercial washing machines (6kg to 18kg+) direct from appliance factories.',
    specificationNote: 'Drum capacity (kg), front-load vs twin-tub, and units.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-fan-1',
    name: 'AC/DC Rechargeable & Solar Standing Fans',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      '16-inch and 18-inch rechargeable standing and mist fans with lithium battery and solar panels.',
    specificationNote: 'Battery type, solar panel option, and carton quantity.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-audio-1',
    name: 'Professional PA Sound Systems & Home Theatres',
    category: 'Speakers and Sound Systems',
    shortDescription:
      'High-output subwoofers, rechargeable trolley speakers, event line arrays, and power amplifiers.',
    specificationNote: 'Application (home or event), wattage, and quantity.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-led-1',
    name: 'Indoor & Outdoor LED Video Walls & Signage',
    category: 'LED Displays and Digital Advertising Screens',
    shortDescription:
      'P2.5, P3.91, P4, and P5 LED display cabinets, stage rental panels, and digital signage totems.',
    specificationNote: 'Target screen size (m), indoor/outdoor, and pixel pitch.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-smart-1',
    name: 'Smart Biometric Locks & 4G Solar CCTV Systems',
    category: 'Smart Home Products',
    shortDescription:
      'Fingerprint/face-recognition smart locks for hotels and homes, plus PTZ solar 4G security cameras.',
    specificationNote: 'Lock connectivity or camera type and unit count.',
    recommendedFreight: 'Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-gad-1',
    name: 'Fast-Charge Power Banks, Smartwatches & Gadgets',
    category: 'Electronics and Gadgets',
    shortDescription:
      'High-capacity power banks, GaN chargers, TWS earbuds, tablets, and mobile accessories in bulk.',
    specificationNote: 'Target specs, custom OEM branding needs, and cartons.',
    recommendedFreight: 'Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-elec-1',
    name: 'Automatic Voltage Stabilizers (AVR) & Switchgear',
    category: 'Electrical Appliances',
    shortDescription:
      'Single and three-phase servo voltage regulators (5kVA–200kVA+), breakers, and LED lighting.',
    specificationNote: 'kVA capacity, phase requirement, and project list.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-fuel-1',
    name: 'Digital Fuel Dispensers & Submersible Pumps',
    category: 'Fuel Station Equipment',
    shortDescription:
      'Multi-nozzle fuel dispensers, turbine pumps, flow meters, nozzles, and forecourt LED lighting.',
    specificationNote: 'Nozzle count, pump type, fuel type, and quantity.',
    recommendedFreight: 'Sea freight',
    imageUrl: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-pos-1',
    name: 'Touchscreen POS Terminals & Thermal Printers',
    category: 'Printers and POS Equipment',
    shortDescription:
      'Android/Windows touch POS systems, 80mm receipt printers, barcode scanners, and cash drawers.',
    specificationNote: 'OS preference, printer interface, and unit quantity.',
    recommendedFreight: 'Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-item-gen-1',
    name: 'Custom Factory Sourcing & Industrial Machinery',
    category: 'General China Sourcing',
    shortDescription:
      'Have a specific machine, furniture line, or Alibaba/1688 link? We verify, purchase, and ship.',
    specificationNote: 'Share your product photo, spec sheet, or supplier link.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
];
