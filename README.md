# Slybest Ventures Global Hubs Website

Official web platform for **Slybest Ventures Global Hubs** — connecting individuals and businesses in Nigeria with reliable manufacturers and suppliers in China through one coordinated sourcing, purchasing, shipping, importation, customs clearing, and delivery process.

## Creative Concept: "The Trade Bridge"
- **Palette**:
  - Midnight (`#07111F`)
  - Deep Navy (`#0B1F3A`)
  - Cobalt Blue (`#1264FF`)
  - Electric Cyan (`#19C3FF`)
  - Soft White (`#F5F8FC`)
  - Dark Text (`#111827`)
  - Amber Accent (`#F5A623`)
- **Typography**: `Manrope`, `Inter`, and `JetBrains Mono`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Centralised Editable Configuration

All business content, contact details, product categories, services, media slots, and policy sections are isolated in `src/config/` so they can be updated without modifying page components:

1. **`src/config/siteConfig.ts`**:
   - Business name, description, positioning, and primary audience segments
   - Phone numbers (`08145159030`, `0704 268 4587`), WhatsApp (`https://wa.me/2348145159030`), Email (`slybestventuresglobalhubs@gmail.com`), Instagram (`@slybest_ventures`), TikTok (`@Slybest_`), WhatsApp Channel, Business hours (`Open 24/7`), and Lagos address (`B108 Electronics Section, Alaba International Market, Ojo, Lagos, Nigeria`)
   - Official logo path (`brand.logoUrl`)
   - 5-stage sourcing-to-delivery process (`processSteps`)
   - 7-step China sourcing workflow (`chinaSourcingProcess`)
   - Shipping & Importation copy and 8 breakdown topics (`shippingAndImportation`)
   - Editable About Us corporate profile modules (`aboutEditablePlaceholders`)
   - Future feature flags (`futureFeatures`) for payment, tracking, accounts, and backend webhook URL

2. **`src/config/catalogueConfig.ts`**:
   - All 15 approved product categories (`PRODUCT_CATEGORIES`)
   - Representative sourcing items (`CATALOGUE_ITEMS`) with optional `imageUrl` and optional `approvedPrice` (kept quote-based by default)

3. **`src/config/servicesConfig.ts`**:
   - All 11 core services (`SERVICES_LIST`) with title, short explanation, target audience, required customer information, and Request-a-Quote CTAs

4. **`src/config/projectsAndTestimonialsConfig.ts`**:
   - 9 supply-chain media slots (`PROJECT_MEDIA_SLOTS`) ready for client-approved photographs and videos
   - `APPROVED_TESTIMONIALS` array (displays an honest "Coming Soon" verification notice until approved client testimonials are added)

5. **`src/config/policiesConfig.ts`**:
   - Official Quotation Notice and the 9 editable commercial policy modules (`Payment process`, `Deposit requirements`, `Balance payment`, `Warranty`, `Returns`, `Damaged goods`, `Delayed shipments`, `Cancelled orders`, `Product availability`)
