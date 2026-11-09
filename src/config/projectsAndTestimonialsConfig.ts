export interface ProjectMediaSlot {
  id: string;
  title: string;
  mediaType: 'photo' | 'video';
  stageTag: string;
  description: string;
  previewImageUrl: string; // Visual preview placeholder until client populates mediaUrl
  mediaUrl?: string; // Populate with approved client photograph or video path when supplied
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

/**
 * Central replaceable configuration for the 9 supply-chain evidence & media slots.
 * Rule: Use only client-approved media and descriptions. Do not fabricate project outcomes.
 */
export const PROJECT_MEDIA_SLOTS: ProjectMediaSlot[] = [
  {
    id: 'china-factory-visits',
    title: 'China factory visits',
    mediaType: 'photo',
    stageTag: 'SUPPLIER VERIFICATION',
    description:
      'On-site manufacturer assessments across production hubs in China.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'canton-fair-visits',
    title: 'Canton Fair visits',
    mediaType: 'photo',
    stageTag: 'TRADE EXHIBITIONS',
    description:
      'Direct sourcing with manufacturers at international trade exhibitions in China.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'products-being-loaded',
    title: 'Products being loaded',
    mediaType: 'photo',
    stageTag: 'PRE-SHIPMENT LOADING',
    description:
      'Carton verification, palletizing, and container loading prior to export dispatch.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'containers-shipped-to-nigeria',
    title: 'Containers shipped to Nigeria',
    mediaType: 'photo',
    stageTag: 'SEA & AIR FREIGHT',
    description:
      'Containerized sea freight and cargo consignments moving from China to Nigeria.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'customer-deliveries',
    title: 'Customer deliveries',
    mediaType: 'photo',
    stageTag: 'NIGERIA HANDOVER',
    description:
      'Coordinated dispatch and customer handovers across Lagos and Nigerian states.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shop-and-warehouse-pictures',
    title: 'Shop and warehouse pictures',
    mediaType: 'photo',
    stageTag: 'ALABA MARKET HUB',
    description:
      'Our physical showroom and warehouse operations at Alaba International Market, Lagos.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'previous-projects',
    title: 'Previous projects',
    mediaType: 'photo',
    stageTag: 'B2B PROCUREMENT',
    description:
      'Commercial sourcing and equipment importation engagements for Nigerian buyers.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'product-videos',
    title: 'Product videos',
    mediaType: 'video',
    stageTag: 'VIDEO SHOWCASE',
    description:
      'Visual walk-throughs of sourced appliances, solar equipment, and electronics.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'factory-inspection-videos',
    title: 'Factory inspection videos',
    mediaType: 'video',
    stageTag: 'QUALITY CHECKS',
    description:
      'Pre-shipment quality checks and production runs recorded at partner factories.',
    previewImageUrl:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80',
  },
];

/**
 * Approved client testimonials list.
 * Rule: Keep the section hidden, marked as coming soon, or populate it only after approved testimonials are supplied.
 */
export const APPROVED_TESTIMONIALS: ApprovedTestimonial[] = [];
