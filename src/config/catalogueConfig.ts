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
    id: 'inverters-batteries',
    name: 'Inverters and Batteries',
    icon: 'battery',
    shortDescription:
      'All-in-One ESS integrated inverters & lithium storage (5kWh–15kWh), hybrid solar inverters, and LiFePO4 battery banks.',
    exampleItems: ['All-in-One ESS (5/7.5/10/15 kWh)', '11kW Hybrid Solar Inverters', 'LiFePO4 Lithium Battery Packs', 'Rack-Mount Storage Systems'],
    typicalBuyers: 'Renewable energy installers, corporate offices, and wholesale distributors',
    freightRecommendation: 'Sea freight',
    imageUrl: '/products/inverter-all-in-one-ess.jpg',
    featured: true,
  },
  {
    id: 'speakers-sound-systems',
    name: 'Speakers and Sound Systems',
    icon: 'speaker',
    shortDescription:
      'BAJ dual-15" & dual-12" party wireless speakers, home theatres, PA line arrays, and amplifiers.',
    exampleItems: ['BAJ BA-L2151 (15"×2) Party Speaker', 'BAJ BA-L2201 (12"×2) Wireless Speaker', 'Home Theatre & Soundbars', 'Professional PA & Line Arrays'],
    typicalBuyers: 'Audio equipment dealers, event centres, churches, and retail buyers',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: '/products/speaker-baj-ba-l2151.jpg',
    featured: true,
  },
  {
    id: 'refrigerators-freezers',
    name: 'Refrigerators and Freezers',
    icon: 'snowflake',
    shortDescription:
      '3-door multi-zone upright refrigerators, 2.0m commercial chest freezers, and solar DC chillers.',
    exampleItems: ['3-Door Upright Refrigerators', '2.0m Commercial Chest Freezers', 'Double-Door Refrigerators', 'Solar DC Freezers'],
    typicalBuyers: 'Appliance retailers, supermarkets, hospitality businesses, and households',
    freightRecommendation: 'Sea freight',
    imageUrl: '/products/refrigerator-3door-kitchen-1.jpg',
    featured: true,
  },
  {
    id: 'vehicles-auto-parts',
    name: 'Vehicles and Auto Parts',
    icon: 'car',
    shortDescription:
      'Jetour T2 & X70 Plus SUVs, Changan & Toyota executive sedans, EVs, commercial vans, tyres, and OEM auto parts direct from China.',
    exampleItems: ['Jetour T2 & X70 Plus SUVs', 'Changan & Toyota Sedans', 'Engine & Suspension Parts', 'Body Kits & Auto Lighting'],
    typicalBuyers: 'Auto dealers, fleet operators, spare parts distributors, and individual buyers',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: '/products/car-jetour-t2-suv.jpg',
    featured: true,
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
    id: 'washing-machines',
    name: 'Washing Machines',
    icon: 'washing-machine',
    shortDescription:
      'Midea 15kg heavy-duty automatic washers, Chigo 11kg tempered-glass washers, and commercial laundry units.',
    exampleItems: ['Midea 15KG Automatic Washers', 'Chigo 11KG Glass Lid Washers', 'Top-Load Digital Automatic Washers', 'Twin-Tub & Commercial Washers'],
    typicalBuyers: 'Electronics wholesalers, laundromats, hotels, and residential buyers',
    freightRecommendation: 'Sea freight',
    imageUrl: '/products/washer-midea-15kg.jpg',
    featured: true,
  },
  {
    id: 'fans-rechargeable-solar',
    name: 'Fans and Rechargeable/Solar Fans',
    icon: 'fan',
    shortDescription:
      '25W 16" AC/DC rechargeable solar standing fans, 3-in-1 copper-motor solar fans, and LED solar desk fans.',
    exampleItems: ['25W 16" Solar Standing Fans', '3-in-1 Copper Motor Solar Fans', 'Solar Desk Fans with LED Light', 'Digital Touch Rechargeable Fans'],
    typicalBuyers: 'Wholesale distributors, retail stores, schools, and households',
    freightRecommendation: 'Sea freight',
    imageUrl: '/products/fan-solar-copper-black.jpg',
    featured: true,
  },
  {
    id: 'led-displays-advertising',
    name: 'LED Displays and Digital Advertising Screens',
    icon: 'display',
    shortDescription:
      'Smart touch mobile StandByMe rotating displays, fine-pitch video walls, and outdoor LED billboards.',
    exampleItems: ['Smart Touch StandByMe Mobile Displays', 'Interactive Rotatable Touch Screens', 'Fine-Pitch Video Walls', 'Outdoor LED Billboards'],
    typicalBuyers: 'Advertising agencies, corporate offices, event venues, churches, and retail chains',
    freightRecommendation: 'Sea or Air freight',
    imageUrl: '/products/smart-touch-standbyme-tvs.jpg',
    featured: true,
  },
  {
    id: 'smart-home-products',
    name: 'Smart Home Products',
    icon: 'house',
    shortDescription:
      'Multi-lens 4G/solar 10X zoom security cameras, biometric smart door locks, and solar surveillance.',
    exampleItems: ['Multi-Lens 4G Solar PTZ Cameras', '10X Zoom Ultra-HD Security Kits', 'Biometric & Smart Door Locks', 'Smart Touch Switches'],
    typicalBuyers: 'Security installers, estate developers, commercial facilities, and homeowners',
    freightRecommendation: 'Air freight',
    imageUrl: '/products/camera-solar-multilens-10x.jpg',
    featured: true,
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
      'Tokheim & Huaxin dual-nozzle digital fuel dispensers, submersible pumps, flow meters, and fuel nozzles.',
    exampleItems: ['Tokheim Dual-Nozzle Fuel Dispensers', 'Huaxin Digital Fuel Dispensers', 'Submersible Pumps & Flow Meters', 'Hoses & Auto Shut-off Nozzles'],
    typicalBuyers: 'Petroleum marketers, filling station contractors, and petroleum engineers',
    freightRecommendation: 'Sea freight',
    imageUrl: '/products/fuel-dispenser-tokheim.jpg',
    featured: true,
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
    id: 'cat-item-inv-allinone-ess',
    name: 'All-in-One ESS Integrated Solar Inverter & LiFePO4 Storage System (5–15 kWh)',
    category: 'Inverters and Batteries',
    shortDescription:
      'Next-generation mobile home & commercial energy storage system integrating an 11kW pure sine-wave hybrid solar inverter with 5kWh, 7.5kWh, 10kWh, or 15kWh LiFePO4 lithium battery, color LCD touchscreen, and caster wheels.',
    specificationNote:
      'Capacity Options: 5kWh / 7.5kWh / 10kWh / 15kWh | Inverter: 5.5kW / 11kW Pure Sine Wave | Plug-and-Play Solar & AC In/Out | Caster Wheels for Effortless Mobility.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/inverter-all-in-one-ess.jpg',
  },
  {
    id: 'cat-item-camera-solar-multilens',
    name: 'Multi-Lens 4G / Wi-Fi Solar PTZ Security Camera with 10X Zoom & Solar Panel',
    category: 'Smart Home Products',
    shortDescription:
      'Commercial-grade outdoor multi-lens solar surveillance system with 3 panoramic lenses and a central PTZ camera. Delivers 360° coverage, 10X zoom, motion-tracking floodlights, 4G SIM / Wi-Fi connectivity, two-way audio, and solar charging panel.',
    specificationNote:
      'Multi-Lens Multi-View System | 10X Hybrid Zoom | High-Efficiency Solar Panel Kit | 4G SIM Card / Wi-Fi Support | Mobile App Live Remote Viewing.',
    recommendedFreight: 'Air freight',
    imageUrl: '/products/camera-solar-multilens-10x.jpg',
  },
  {
    id: 'cat-item-tv-standbyme',
    name: 'Smart Touch Mobile StandByMe Rotatable Floor-Standing TV & Display',
    category: 'LED Displays and Digital Advertising Screens',
    shortDescription:
      'Rollable smart touch screen display on a mobile weighted wheeled base. Features 180° rotation between portrait & landscape, 40° tilt angle adjustment, height adjustment, built-in battery, HD 1080P webcam, and Android smart ecosystem.',
    specificationNote:
      'Sizes: 27" / 32" Touch Screen | 180° Screen Rotation | Silent Universal Wheels | Built-in Rechargeable Battery & HD Camera | Ideal for Homes, Offices & Stores.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: '/products/smart-touch-standbyme-tvs.jpg',
  },
  {
    id: 'cat-item-washer-midea-15kg',
    name: 'Midea 15KG Heavy-Duty Automatic Top-Load Washing Machine',
    category: 'Washing Machines',
    shortDescription:
      'Extra-large 15kg commercial-capacity automatic top-load washer featuring dark-titanium stainless steel body, full tempered-glass soft-close lid, powerful high-torque copper motor, and whisper-quiet wash cycle.',
    specificationNote:
      'Capacity: 15 KG Large Load | Stainless Steel Inner Tub | Digital Touch Console | Easily Washes Heavy Blankets, Curtains & Duvets.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/washer-midea-15kg.jpg',
  },
  {
    id: 'cat-item-washer-chigo-11kg',
    name: 'CHIGO 11KG Top-Load Automatic Washing Machine with Tempered Glass Lid',
    category: 'Washing Machines',
    shortDescription:
      'Modern bronze-finish 11kg fully automatic washing machine with high-power copper motor, 10 automated wash programs, anti-tangling pulsator, and electronic water-level selection.',
    specificationNote:
      'Capacity: 11 KG | Pure Copper Motor | Dimensions: 480 × 475 × 800 mm | Air Dry & Blue Light Clean Functions.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/washer-chigo-11kg.jpg',
  },
  {
    id: 'cat-item-washer-topload-glass',
    name: 'Automatic Top-Load Washer with Transparent Blue Tempered-Glass Lid',
    category: 'Washing Machines',
    shortDescription:
      'Factory-fresh top-load washing machine with transparent ocean-blue panoramic glass lid, English digital control buttons, stainless honeycomb wash drum, and water inlet valve.',
    specificationNote:
      'English Digital Control Panel | Multi-Program Logic | Water-Level Selector | Factory-Direct Container Quantities.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/washer-topload-glass.jpg',
  },
  {
    id: 'cat-item-fuel-tokheim',
    name: 'Tokheim Dual-Nozzle Electronic Digital Fuel Dispenser',
    category: 'Fuel Station Equipment',
    shortDescription:
      'Commercial dual-nozzle heavy-duty fuel dispenser featuring high-precision electronic metering, bright digital LCD price/litre displays, dual auto shut-off nozzles, and explosion-proof internal pumping mechanism.',
    specificationNote:
      'Dual Product / Dual Nozzle | Flow Rate: 50–100 L/min | Heavy-Duty Steel Enclosure with Auto Retractable Hoses | Ideal for Fuel Stations Nationwide.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fuel-dispenser-tokheim.jpg',
  },
  {
    id: 'cat-item-fuel-forecourt',
    name: 'Logistics Station High-Speed Dual-Nozzle Fuel Dispenser',
    category: 'Fuel Station Equipment',
    shortDescription:
      'High-throughput dual-nozzle commercial fuel dispensing pump unit engineered for commercial logistics hubs, transport depots, and retail filling stations.',
    specificationNote:
      'Dual Hose System | Fast Dispensing Rate: Up to 100 L/min | Submersible Pump / Suction Pump Configuration Available.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fuel-dispenser-forecourt.jpg',
  },
  {
    id: 'cat-item-fuel-huaxin-specs',
    name: 'Huaxin 50–100L/min Commercial Fuel Dispenser (Complete Spec Sheet)',
    category: 'Fuel Station Equipment',
    shortDescription:
      'Verified commercial dual-nozzle dispenser with 750W–1100W pump power, 0.3‰ precision accuracy, 15m suction lift, and 30m delivery head.',
    specificationNote:
      'Voltage: 110V / 220V / 380V | Power: 750W–1100W | Flow Rate: 50–100 L/min | Dimensions: 90 × 45 × 210 cm | Weight: 260 kg.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fuel-dispenser-huaxin-specs.jpg',
  },
  {
    id: 'cat-item-fuel-arch-specs',
    name: 'Arch-Canopy Electronic Fuel Dispenser with Keypad Preset (Dual Nozzle)',
    category: 'Fuel Station Equipment',
    shortDescription:
      'Dual-nozzle electronic fuel dispenser featuring overhead canopy styling, integrated numeric preset keypad, clear dual LCDs, and heavy-duty flow meter.',
    specificationNote:
      'Voltage: 110V / 220V / 380V | Flow Rate: 50–100 L/min | Preset Volume/Price Function | Dimensions: 90 × 45 × 210 cm.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fuel-dispenser-arch-specs.jpg',
  },
  {
    id: 'cat-item-audio-baj-2151',
    name: 'BAJ BA-L2151 Portable Party Wireless Speaker (15" × 2 Dual Woofers)',
    category: 'Speakers and Sound Systems',
    shortDescription:
      'High-output 15"×2 dual-woofer portable party speaker featuring RGB Flash Lamp ring lighting, Extra Bass, Bluetooth/USB/TF/FM/AUX playback, LED display, and 2 wireless microphones.',
    specificationNote:
      'Model: BAJ BA-L2151 | Woofer: 15"×2 + 2" Tweeter | Battery: 12V/9Ah Rechargeable + 110–220V AC | Includes 2 Wireless Mics.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: '/products/speaker-baj-ba-l2151.jpg',
  },
  {
    id: 'cat-item-audio-baj-2201',
    name: 'BAJ BA-L2201 Portable Wireless Party Speaker (12" × 2 Dual Woofers)',
    category: 'Speakers and Sound Systems',
    shortDescription:
      'Powerful 12"×2 dual-bass portable wireless speaker with top DJ rotary control console, dynamic RGB Flash Lamp lighting, TWS wireless pairing, and 2 wireless karaoke microphones.',
    specificationNote:
      'Model: BAJ BA-L2201 | Woofer: 12"×2 + 2" Tweeter | Battery: 12V/7Ah Lithium + 110–220V AC | USB/TF/FM/AUX/Bluetooth.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: '/products/speaker-baj-ba-l2201.jpg',
  },
  {
    id: 'cat-item-fridge-chest-2m',
    name: '2.0m Commercial Single-Temperature Deep Chest Freezer',
    category: 'Refrigerators and Freezers',
    shortDescription:
      'Heavy-duty 2.0-metre commercial chest freezer with dual flip top doors, high-density foam insulation, smart temperature control, safety lock, and heavy-duty caster wheels.',
    specificationNote:
      'External Dimensions: 2000 × 760 × 850 mm | Internal Dimensions: 1850 × 635 × 650 mm | Fast Cooling+ & Cold-Lock Insulation.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/chest-freezer-2m.jpg',
  },
  {
    id: 'cat-item-fridge-3door-1',
    name: '3-Door Upright Multi-Zone Refrigerator & Freezer (Brushed Titanium)',
    category: 'Refrigerators and Freezers',
    shortDescription:
      'Modern 3-door upright refrigerator with dedicated upper fresh-food compartment, middle soft-freeze convertible drawer, and lower deep-freezer zone in brushed dark titanium finish.',
    specificationNote:
      '3-Door Multi-Temperature Design | Energy-Efficient Inverter Compressor | Low-Noise & Fast Cooling for Homes & Apartments.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/refrigerator-3door-kitchen-1.jpg',
  },
  {
    id: 'cat-item-fridge-3door-open',
    name: '3-Door Upright Refrigerator — Multi-Compartment Interior Storage',
    category: 'Refrigerators and Freezers',
    shortDescription:
      'Full interior view showing adjustable tempered-glass shelves, deep door bottle racks, crisper drawer, and 4 transparent pull-out freezer drawers for organized cold storage.',
    specificationNote:
      '3 Independent Cooling Zones | Tempered Glass Shelving | Transparent Freezer Drawers | Wholesale & Container Orders.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/refrigerator-3door-open.jpg',
  },
  {
    id: 'cat-item-fridge-3door-2',
    name: '3-Door Upright Refrigerator & Freezer — Modern Kitchen Edition',
    category: 'Refrigerators and Freezers',
    shortDescription:
      'Space-saving upright 3-door refrigerator engineered for modern Nigerian kitchens, hospitality suites, and retail appliance distribution.',
    specificationNote:
      'Sleek Flush-Handle Doors | Tropicalized Cooling Performance | Available in Bulk & Mixed-Container Shipments.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/refrigerator-3door-kitchen-2.jpg',
  },
  {
    id: 'cat-item-car-jetour-t2',
    name: 'Jetour T2 (Traveller) Rugged Luxury 4WD SUV',
    category: 'Vehicles and Auto Parts',
    shortDescription:
      'Boxy off-road luxury SUV featuring illuminated JETOUR front grille, matrix LED headlamps, high ground clearance, intelligent 4WD cockpit, and direct export from China to Lagos.',
    specificationNote:
      '2.0T Turbo / Plug-in Hybrid Options | Left-Hand Drive (LHD) | Full Export & Lagos Customs Clearing Available.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/car-jetour-t2-suv.jpg',
  },
  {
    id: 'cat-item-car-jetour-x70',
    name: 'Jetour X70 Plus / X90 Plus Executive 7-Seater SUV',
    category: 'Vehicles and Auto Parts',
    shortDescription:
      'Spacious executive SUV with bold vertical chrome grille, panoramic sunroof, triple-screen digital cockpit, and luxury leather seating built for Nigerian roads.',
    specificationNote:
      '5-Seater or 7-Seater Configuration | Turbocharged Engine | Direct China Sourcing & RoRo/Container Shipping.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/car-jetour-x70-suv.jpg',
  },
  {
    id: 'cat-item-car-changan-univ',
    name: 'Changan UNI-V Sporty Executive Fastback Sedan',
    category: 'Vehicles and Auto Parts',
    shortDescription:
      'Aerodynamic fastback sedan with borderless parametric front grille, sharp LED headlights, hidden door handles, and smart driver-assistance technology.',
    specificationNote:
      '1.5T / 2.0T BlueCore Turbo | Sporty Fastback Styling | Inspected & Shipped Direct from China to Nigeria.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/car-changan-univ-sedan.jpg',
  },
  {
    id: 'cat-item-car-toyota-camry',
    name: 'Toyota Camry Executive Sedan (Brand New / Verified China Spec)',
    category: 'Vehicles and Auto Parts',
    shortDescription:
      'GAC-Toyota Camry executive sedan combining legendary Toyota reliability, fuel efficiency, wide lower grille styling, and plush executive cabin comfort.',
    specificationNote:
      '2.0L Petrol or 2.5L Hybrid | Pre-Shipment Inspection in China | Container or RoRo Sea Freight to Lagos.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/car-toyota-camry-sedan.jpg',
  },
  {
    id: 'cat-item-fan-solar-copper',
    name: '25W 3-in-1 Copper-Motor Rechargeable Solar Standing Fan (Matte Black)',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'Premium 3-in-1 rechargeable standing fan with 100% copper motor, solar panel charging, AC adapter charging, mobile phone USB charging port, and remote control.',
    specificationNote:
      'Power: 25W | 3-in-1 (Solar Panel + AC Adapter + Phone USB Output) | Copper Motor | Wholesale Carton Orders.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-solar-copper-black.jpg',
  },
  {
    id: 'cat-item-fan-digital-solar-black',
    name: '25W Digital Touch Rechargeable Solar Standing Fan with Night Lamp',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      '5-blade high-airflow rechargeable standing fan with digital speed display, warm amber night lamp, remote control, and external solar panel.',
    specificationNote:
      'Power: 25W | Digital Speed Readout | Built-in Amber Night Light | Includes High-Efficiency Solar Panel.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-digital-solar-black.jpg',
  },
  {
    id: 'cat-item-fan-solar-remote-black',
    name: '25W 2-in-1 Rechargeable Solar Standing Fan with LED Bulb & Remote',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'Complete off-grid cooling kit featuring a 5-blade black pedestal fan, built-in warm LED lamp, detachable hanging LED bulb, remote control, and solar panel.',
    specificationNote:
      'Power: 25W | 2-in-1 AC/DC + Solar | External Hanging LED Bulb & Remote Included | Ideal for Wholesale.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-solar-remote-black.jpg',
  },
  {
    id: 'cat-item-fan-solar-16inch-white',
    name: '16" 25W 2-in-1 Rechargeable AC/DC Solar Standing Fan (White)',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      '16-inch white 5-blade rechargeable standing fan with multi-bar green LED battery indicator, built-in speaker/alarm grille, and external solar panel.',
    specificationNote:
      'Size: 16-Inch | Power: 25W | Multi-Level LED Indicator + USB Port | Includes Solar Panel.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-solar-16inch-white.jpg',
  },
  {
    id: 'cat-item-fan-solar-desk-orange',
    name: 'Portable Rechargeable Solar Table Fan with Bright LED Ring Light (Orange)',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'Compact high-visibility orange table fan featuring an ultra-bright center LED light ring, solar panel, multi-head phone charging cable, and remote control.',
    specificationNote:
      'Tabletop / Desk Design | Center LED Ring Lamp | Solar Panel + Multi-Pin Mobile Charging Cable + Remote.',
    recommendedFreight: 'Sea or Air freight',
    imageUrl: '/products/fan-solar-desk-orange.jpg',
  },
  {
    id: 'cat-item-fan-solar-standing-white-1',
    name: '25W 2-in-1 Rechargeable Solar Standing Fan with Ring Light & Bulb (White)',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'White 5-blade adjustable pedestal fan equipped with a red-rimmed LED emergency lamp, external hanging LED bulb, and wide solar charging panel.',
    specificationNote:
      'Power: 25W | 2-in-1 Solar & AC Charging | Built-in Emergency Lamp + External LED Bulb.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-solar-standing-white-1.jpg',
  },
  {
    id: 'cat-item-fan-solar-standing-black-1',
    name: '25W 2-in-1 Push-Button Rechargeable Solar Standing Fan (Black)',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'Durable 5-button manual control rechargeable solar standing fan with built-in upper LED spot torch and matching solar panel.',
    specificationNote:
      'Power: 25W | 5 Tactile Control Buttons + Built-in LED Torch | Includes Solar Panel.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-solar-standing-black-1.jpg',
  },
  {
    id: 'cat-item-fan-solar-table-white',
    name: 'Compact Rechargeable Solar Pedestal Fan with Dual External LED Bulbs',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'Low-stand rechargeable solar fan complete with two external hanging LED bulbs, remote control, AC charger, and portable solar panel.',
    specificationNote:
      'Includes 2 Hanging LED Bulbs + Solar Panel + Remote Control | Great for Homes, Shops & Hostels.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-solar-table-white.jpg',
  },
  {
    id: 'cat-item-fan-digital-standing-black',
    name: 'Heavy-Duty Digital Rechargeable Standing Fan with LED Display & Bulb',
    category: 'Fans and Rechargeable/Solar Fans',
    shortDescription:
      'Commercial-grade black standing fan with digital speed readout (up to level 30+), warm LED night lamp, external bulb output, and weighted round base.',
    specificationNote:
      'Digital LED Speed Display | Built-in Warm Lamp + Hanging LED Bulb | AC/DC Rechargeable.',
    recommendedFreight: 'Sea freight',
    imageUrl: '/products/fan-digital-standing-black.jpg',
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
