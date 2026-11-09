export interface PolicySectionItem {
  id: string;
  title: string;
  status: 'editable_placeholder' | 'approved';
  summary: string;
}

/**
 * Centralised quotation notice and policy configuration.
 * Rule: Do not create detailed legal terms until the client approves them.
 */
export const POLICIES_CONFIG = {
  quotationNotice:
    'All quotations are subject to confirmation based on product availability, exchange rates, shipping costs, quantities, customs charges, and other applicable costs.',

  termsGuidanceRule:
    'Specific commercial terms are confirmed in writing on your official Slybest Ventures Global Hubs quotation prior to order confirmation. Detailed legal provisions for the sections below are maintained as client-editable policy modules.',

  editableSections: [
    {
      id: 'payment-process',
      title: 'Payment process',
      status: 'editable_placeholder',
      summary:
        'Approved payment channels, invoicing currency, and verification steps are provided directly on your official quotation document.',
    },
    {
      id: 'deposit-requirements',
      title: 'Deposit requirements',
      status: 'editable_placeholder',
      summary:
        'Deposit requirements for custom sourcing, factory production, or bulk purchasing are specified per order based on supplier terms and product category.',
    },
    {
      id: 'balance-payment',
      title: 'Balance payment',
      status: 'editable_placeholder',
      summary:
        'Schedules for balance settlement—including freight, clearing, and applicable charges—are outlined clearly before shipment dispatch or final handover.',
    },
    {
      id: 'warranty',
      title: 'Warranty',
      status: 'editable_placeholder',
      summary:
        'Manufacturer warranty coverage varies by product category and factory partner. Applicable warranty details are shared during the quotation stage.',
    },
    {
      id: 'returns',
      title: 'Returns',
      status: 'editable_placeholder',
      summary:
        'Because items are sourced to specific customer orders from manufacturers in China, return eligibility depends on supplier agreements confirmed prior to purchase.',
    },
    {
      id: 'damaged-goods',
      title: 'Damaged goods',
      status: 'editable_placeholder',
      summary:
        'Inspection procedures upon cargo arrival and claim reporting steps for transit-related issues are communicated as part of your shipping agreement.',
    },
    {
      id: 'delayed-shipments',
      title: 'Delayed shipments',
      status: 'editable_placeholder',
      summary:
        'Delivery timelines are provided as estimated ranges because supplier readiness, shipping schedules, customs processes, and other factors can vary.',
    },
    {
      id: 'cancelled-orders',
      title: 'Cancelled orders',
      status: 'editable_placeholder',
      summary:
        'Order cancellation terms depend on whether supplier payment, factory production, or freight booking has already been initiated.',
    },
    {
      id: 'product-availability',
      title: 'Product availability',
      status: 'editable_placeholder',
      summary:
        'Factory stock levels and production slots in China are dynamic and are verified at the time of quotation confirmation.',
    },
  ] as PolicySectionItem[],

  privacyOverview: [
    {
      title: 'Information We Collect',
      body:
        'When you submit an enquiry or request a quotation, we collect the contact and product details you provide—such as your name, company name, phone number, WhatsApp number, email address, product specifications, uploaded specification files, quantity, and destination in Nigeria.',
    },
    {
      title: 'How We Use Your Information',
      body:
        'Your information is used strictly to review your sourcing request, verify product availability with suppliers in China, prepare an accurate quotation, and communicate with you via phone, WhatsApp, or email regarding your order.',
    },
    {
      title: 'Data Protection & Confidentiality',
      body:
        'Slybest Ventures Global Hubs treats your business procurement specifications, supplier links, and contact details with confidentiality. We do not sell your personal or business contact details to third parties.',
    },
    {
      title: 'Contacting Us Regarding Privacy',
      body:
        'If you wish to update or remove the enquiry details you shared with us, please contact us at slybestventuresglobalhubs@gmail.com or call 08145159030.',
    },
  ],
};
