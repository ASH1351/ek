# EK OMKAR UNIQ (EOU) — Haute Joaillerie & Artisanal Living

> **"Timeless Luxury. For You & Your Home."**
> A premium, luxury, fully mobile-responsive e-commerce experience for **EK OMKAR UNIQ** (short brand mark: **EOU**).

---

## ⚜️ Brand Identity & Aesthetics

- **Primary Colors**:
  - `Rich Black`: `#111110` (Master Canvas)
  - `Charcoal Black`: `#1A1A17` (Cards & Sections)
  - `Primary Gold`: `#D4AF37`
  - `Light Gold Highlight`: `#F5D77A`
  - `Deep Antique Gold`: `#B8860B`
  - `Soft Ivory Text`: `#F6F1E7`
  - `Muted Warm Grey`: `#A8A18F`
- **Gold Metallic Gradient**: `linear-gradient(135deg, #B8860B 0%, #F5D77A 50%, #D4AF37 75%, #B8860B 100%)`
- **Typography**:
  - Headings: *Cormorant Garamond* & *Playfair Display*
  - Body & UI: *Montserrat* & *Inter*
  - Accents & Labels: Uppercase with wide letter spacing (`tracking-[0.25em]`), echoing **U N I Q**
- **Monogram & Motif**: The official high-resolution metallic gold **EOU** monogram is seamlessly integrated with the fluid gold swoosh curving through the crest.

---

## ✨ Features & Architecture

### 1. Cinematic Home Page
- **Animated Preloader**: Gold EOU monogram and swoosh sweeping across with a gold progress indicator (with skip option).
- **Sticky Glassmorphic Navbar**: Logo, desktop mega-menus with visual previews for Jewellery and Home Essentials, live Search, Wishlist badge, and Shopping Bag drawer.
- **Cinematic Split Hero**: Jewellery on one side, Home Essentials on the other, merging at the center with the glowing gold EOU swoosh divider and dual luxury CTAs.
- **Dual Category Showcase**: High-impact cards with hover zoom, gold hairline glow, and explore arrows.
- **Swipeable Featured Collections**: Horizontal scroll-snap carousel for curated edits.
- **Best Sellers Grid**: Tabbed by All / Jewellery / Home Décor with dual-image hover swap, quick view, and wishlist toggle.
- **The EOU Difference**: 5 hallmark pillars (BIS Hallmarked 22K/18K, Handcrafted Heritage, Velvet Jewel Packaging, 100% Insured Transit, 7-Day Concierge Exchange).
- **Brand Story Section**: Split editorial layout celebrating 4th-generation royal goldsmith lineages.
- **The Grand Festive & Wedding Suite Banner**: Highlighting Diwali and wedding gift boxes with coupon code `FESTIVE15`.
- **Voices of Connoisseurs**: Testimonial slider with 5 gold stars and royal client reviews.
- **@EkOmkarUniq Instagram Gallery Grid**: Shoppable social ledger with hover overlays.
- **Connoisseurs Circle VIP Newsletter**: Luxury glassmorphic form with instant feedback.
- **Rich Multi-Column Footer**: Brand narrative, quick links, flagship salon addresses, and encrypted payment security badges.

### 2. Dedicated Listing & Content Views
- **Jewellery Vault (`/jewellery`)**: Subcategories (Necklaces, Earrings, Rings, Bangles, Bracelets, Sets), price sorting, 2/3/4 grid switcher, and mobile bottom-sheet filter.
- **Home Essentials Vault (`/home-essentials`)**: Subcategories (Festive & Pooja Essentials, Candles & Diffusers, Serveware, Wall Art, Gifting, Décor).
- **Collections Anthology (`/collections`)**: Complete breakdown of royal suites.
- **Heritage Story (`/about`)**: In-depth philosophy of *Ek Omkar* (The One Supreme Divine) and the *EOU* monogram.
- **Atelier Concierge (`/contact`)**: Form with validation, direct WhatsApp chat link, Mumbai & Delhi salon details, and interactive FAQ accordion.

### 3. Shopping & Checkout Experience
- **Interactive Slide-In Cart Drawer**:
  - Dynamic free shipping progress bar (Complimentary insured delivery tracker).
  - Quantity steppers & remove button.
  - Bespoke velvet gift packaging toggle.
  - Promo code verification (`ROYAL10` for 10% off, `FESTIVE15` for 15% off).
- **1-Page Royal Encrypted Checkout**:
  - Shipping address and recipient details.
  - Calligraphed gift card message.
  - Payment method simulation: Instant UPI/QR, Cards & Amex, NetBanking, Cash on Delivery.
  - Gold celebratory confetti and order confirmation reference (e.g., `EOU-2026-XXXX`).
- **Product Detail & Quick View Modal**:
  - Multi-angle image gallery with thumbnail switcher.
  - BIS Hallmark & hallmark tags.
  - Size and variant selector.
  - Pincode delivery estimator.
  - Direct WhatsApp enquiry button with pre-filled product details.
  - Accordion for Heritage Narrative, Materials/Care, and Insured Transit.
  - **"Complete the Look" Cross-Sell Suite**: Recommends complementary jewellery or home décor pieces.
  - Verified client appraisals.
- **Mobile Sticky Bottom Navigation Bar**: One-handed navigation on phones (Home, Jewels, Living, Vault, Bag).
- **Desktop Custom Gold Cursor**: Smooth magnetic dot with trailing gold aura ring.
- **Floating WhatsApp Concierge Button**: Bottom-right with pulse animation and tooltip.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Or run production preview (active on port 5173)
npx vite preview --port 5173
```

---

## 📁 Swapping Products & Content
All products, prices, categories, and imagery are organized in:
`src/data/products.ts`
Simply edit the `PRODUCTS` array to add or modify items.
