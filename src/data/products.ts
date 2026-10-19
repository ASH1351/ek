import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ── JEWELLERY ──
  {
    id: 'eou-j-01',
    name: 'The Empress Noor Polki Choker',
    tagline: '22K Hallmarked Gold with Uncut Polki Diamonds & Zambian Emeralds',
    price: 185000,
    originalPrice: 210000,
    category: 'jewellery',
    subcategory: 'Necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A regal masterpiece handcrafted by master artisans of the royal gharana. Set in 22K certified gold with uncut syndication polki diamonds and crowned with natural Zambian teardrop emerald drops. Finished with fine micro-meenakari detailing on the reverse.',
    materials: ['22K Hallmarked Yellow Gold', 'Uncut Polki Diamonds', 'Natural Emerald Drops', 'Silk Dori Cord'],
    careInstructions: 'Store in the provided velvet suede box. Avoid direct contact with perfumes, moisture, and harsh chemicals. Gently wipe with the included micro-polishing cloth.',
    dimensions: 'Adjustable length 14" to 18" with handcrafted gold-threaded dori',
    weight: '68.4 grams',
    rating: 5.0,
    reviewCount: 38,
    isBestseller: true,
    isLimitedEdition: true,
    inStock: true,
    occasion: ['Royal Wedding', 'Reception', 'Festive Gala'],
    crossSellIds: ['eou-h-01', 'eou-j-03'],
    reviews: [
      {
        id: 'rev-01',
        author: 'Gayatri Singhania',
        rating: 5,
        date: '14 Oct 2026',
        title: 'Beyond breathtaking craftsmanship',
        comment: 'Wore this for my brother\'s sangeet. The weight, the finish of the gold, and the shine of the polki stones in candlelight made heads turn the entire evening.',
        verified: true
      },
      {
        id: 'rev-02',
        author: 'Maharani Alankrita V.',
        rating: 5,
        date: '28 Sep 2026',
        title: 'Heirloom worthy',
        comment: 'The meenakari on the reverse side is as stunning as the face. Ek Omkar Uniq has preserved true royal craftsmanship.',
        verified: true
      }
    ]
  },
  {
    id: 'eou-j-02',
    name: 'Aethelgard Solitaire Signet Ring',
    tagline: '18K Satin-Brushed Gold with Certified Brilliant Cut Solitaire',
    price: 94000,
    originalPrice: 105000,
    category: 'jewellery',
    subcategory: 'Rings',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'An architectural tribute to modern royalty. A substantial band of 18K satin-finished warm gold set with an internally flawless 1.2ct lab-grown solitaire diamond, framed by hand-carved chamfered borders.',
    materials: ['18K Satin-Brushed Gold', '1.2ct VVS1 E-Color Diamond'],
    careInstructions: 'Clean gently using lukewarm soapy water and soft brush. Polish with dry microfiber cloth.',
    dimensions: 'Band width 6.8mm, Comfort Fit profile',
    weight: '14.2 grams',
    rating: 4.9,
    reviewCount: 24,
    isBestseller: true,
    isNew: false,
    inStock: true,
    occasion: ['Daily Elegance', 'Anniversary', 'Engagement'],
    crossSellIds: ['eou-j-04', 'eou-h-02'],
    reviews: [
      {
        id: 'rev-03',
        author: 'Vikramaditya Roy',
        rating: 5,
        date: '02 Oct 2026',
        title: 'Substantial, heavy, and extremely classy',
        comment: 'The satin gold texture has an understated richness that stands apart from shiny generic jewellery.',
        verified: true
      }
    ]
  },
  {
    id: 'eou-j-03',
    name: 'Chandramukhi Royal Jhumkas',
    tagline: 'Handcrafted Temple Gold Jhumkas with Basra Pearls & Rubies',
    price: 112000,
    originalPrice: 125000,
    category: 'jewellery',
    subcategory: 'Earrings',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Cascading tiers of antique-finished 22K gold inspired by the architectural pillars of southern temple dynasties. Adorned with natural untreated Burmese rubies and clusters of lustrous seed pearls.',
    materials: ['22K Antique Hallmarked Gold', 'Burmese Rubies', 'Natural Seed Pearls'],
    careInstructions: 'Protect pearls from perfumes and cosmetics. Store flat in the provided velvet pouch.',
    dimensions: 'Drop length: 6.2cm, Width: 2.8cm',
    weight: '32.6 grams',
    rating: 4.9,
    reviewCount: 19,
    isBestseller: false,
    isNew: true,
    inStock: true,
    occasion: ['Diwali', 'Weddings', 'Pooja Gala'],
    crossSellIds: ['eou-j-01', 'eou-h-03'],
    reviews: [
      {
        id: 'rev-04',
        author: 'Rhea Nambiar',
        rating: 5,
        date: '20 Sep 2026',
        title: 'Pure divine presence',
        comment: 'The movement of the pearl droplets and the antique gold patina is unmatched. Pure perfection.',
        verified: true
      }
    ]
  },
  {
    id: 'eou-j-04',
    name: 'Sovereign Twisted Gold Kada',
    tagline: 'Solid 22K Gold Hand-Twisted Bangle with Lion Head Finials',
    price: 145000,
    originalPrice: 160000,
    category: 'jewellery',
    subcategory: 'Bangles',
    images: [
      'https://images.unsplash.com/photo-1611591475155-4284ec28d351?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Hand-forged by generational goldsmiths, this solid Kada features heavy rope-twist braiding capped with meticulously engraved royal lion finials set with natural cabochon rubies.',
    materials: ['22K Solid Yellow Gold', 'Cabochon Ruby Eyes'],
    careInstructions: 'Polish with included jeweler cloth. Solid gold construction ensures lifetime heirloom durability.',
    dimensions: 'Internal diameter 60mm (Size 2.6), Spring lock mechanism',
    weight: '48.5 grams',
    rating: 5.0,
    reviewCount: 31,
    isBestseller: true,
    isNew: false,
    inStock: true,
    occasion: ['Festive', 'Everyday Royal', 'Milestones'],
    crossSellIds: ['eou-j-02', 'eou-h-04'],
    reviews: [
      {
        id: 'rev-05',
        author: 'Paramveer Singh',
        rating: 5,
        date: '08 Oct 2026',
        title: 'Bold, commanding presence',
        comment: 'The weight in the hand is undeniable. The locking mechanism is solid and clicks with reassuring precision.',
        verified: true
      }
    ]
  },
  {
    id: 'eou-j-05',
    name: 'The Celestia Diamond Tennis Bracelet',
    tagline: '18K White Gold with 6.5ct Round Brilliant Cut Solitaires',
    price: 215000,
    originalPrice: 240000,
    category: 'jewellery',
    subcategory: 'Bracelets',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1611591475155-4284ec28d351?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Continuous liquid radiance. 52 hand-matched VVS diamonds each held in a modern four-prong low-profile setting designed to glide smoothly against the wrist without catching.',
    materials: ['18K Solid White Gold', '6.5 Total Carat Weight EF/VVS Diamonds'],
    careInstructions: 'Store in individual anti-tarnish compartment.',
    dimensions: 'Length 7.0 inches (customizable upon request)',
    weight: '18.9 grams',
    rating: 4.8,
    reviewCount: 15,
    isBestseller: false,
    isNew: true,
    inStock: true,
    occasion: ['Black Tie', 'Cocktails', 'Gifting'],
    crossSellIds: ['eou-j-02', 'eou-h-02'],
    reviews: []
  },
  {
    id: 'eou-j-06',
    name: 'Rajwada Heritage Bridal Set',
    tagline: 'Complete 3-Piece Suite: Hasli Choker, Chandbalis & Matha Patti',
    price: 360000,
    originalPrice: 395000,
    category: 'jewellery',
    subcategory: 'Sets',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'The pinnacle of Ek Omkar Uniq haute joaillerie. Handcrafted hasli neckpiece encrusted with heritage uncut diamonds, accompanied by matching oversized statement chandbalis and a delicate pearl-fringed matha patti.',
    materials: ['22K Hallmarked Gold', 'Polki Uncut Diamonds', 'South Sea Pearls', 'Spinel Drops'],
    careInstructions: 'Professional cleaning recommended every 2 years. Keep away from humidity.',
    dimensions: 'Includes custom mahogany velvet jewel trunk',
    weight: '142 grams total',
    rating: 5.0,
    reviewCount: 12,
    isBestseller: true,
    isLimitedEdition: true,
    inStock: true,
    occasion: ['Royal Wedding', 'Bridal Troussseau'],
    crossSellIds: ['eou-h-01', 'eou-h-05'],
    reviews: []
  },

  // ── HOME ESSENTIALS ──
  {
    id: 'eou-h-01',
    name: 'Mayura Golden Brass Urli & Diya Ensemble',
    tagline: 'Heavy Cast Artisanal Brass with Hand-Carved Peacock Finials',
    price: 24500,
    originalPrice: 28000,
    category: 'home-essentials',
    subcategory: 'Festive & Pooja Essentials',
    images: [
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Infuse your foyer and sacred living spaces with sacred radiance. Hand-poured using heavy brass alloy and hand-chiselled with sacred peacock emblems. Designed for floating fresh jasmine, marigolds, and floating aromatic tea-lights.',
    materials: ['100% Solid Brass with Antique Golden Patina', 'Clear Protective Lacquer Coating'],
    careInstructions: 'Wipe with soft damp cloth. Avoid abrasive scrubs or pitambari on the exterior lacquer to preserve luster.',
    dimensions: 'Diameter: 14 inches, Height: 7 inches',
    weight: '5.2 kilograms',
    rating: 5.0,
    reviewCount: 42,
    isBestseller: true,
    isNew: false,
    inStock: true,
    occasion: ['Diwali', 'Griha Pravesh', 'Daily Sacred Décor'],
    crossSellIds: ['eou-j-01', 'eou-h-02'],
    reviews: [
      {
        id: 'rev-06',
        author: 'Ananya Mehra',
        rating: 5,
        date: '04 Oct 2026',
        title: 'Transformed our entire entryway',
        comment: 'The weight of solid brass is unmistakable. With water and fresh roses, it brings such peaceful royal warmth into the house.',
        verified: true
      }
    ]
  },
  {
    id: 'eou-h-02',
    name: 'Oud & Amber Scented Soy Candle in Brushed Gold Vessel',
    tagline: 'Hand-Poured Botanical Wax with Cambodian Agarwood & Gold Foil Lid',
    price: 6800,
    originalPrice: 7900,
    category: 'home-essentials',
    subcategory: 'Candles & Diffusers',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'An intoxicating fragrance crafted exclusively for Ek Omkar Uniq in Grasse, France. Rich Cambodian oud, golden benzoin amber, and smoky vetiver housed in a reusable brushed-gold brass vessel with engraved EOU crest.',
    materials: ['100% Natural Soy & Beeswax', 'Pure Essential Oil Infusion', 'Solid Brass Reusable Vessel'],
    careInstructions: 'Trim wick to 5mm before each burn. Burn for minimum 2 hours on first lighting to ensure an even melt pool.',
    dimensions: 'Weight: 420g wax, 85 hours approximate burn time',
    rating: 4.9,
    reviewCount: 56,
    isBestseller: true,
    isNew: true,
    inStock: true,
    occasion: ['Housewarming', 'Relaxation', 'Luxury Gifting'],
    crossSellIds: ['eou-h-01', 'eou-j-02'],
    reviews: [
      {
        id: 'rev-07',
        author: 'Dr. Devansh Kapoor',
        rating: 5,
        date: '11 Oct 2026',
        title: 'Unbelievably rich aroma throw',
        comment: 'Fills our high-ceiling living room in under 20 minutes with a subtle, non-headache inducing warmth. The brass canister is a work of art on its own.',
        verified: true
      }
    ]
  },
  {
    id: 'eou-h-03',
    name: 'Nero Marquina & Gold Inlay Serving Board',
    tagline: 'Hand-Selected Spanish Black Marble with 24K Gold-Leaf Brass Inlay',
    price: 16500,
    originalPrice: 19000,
    category: 'home-essentials',
    subcategory: 'Serveware',
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Each piece is individually carved from dense Spanish Nero Marquina black marble with natural stark white veining, accented with a hand-inlaid geometric gold brass chevron pattern.',
    materials: ['Nero Marquina Marble', 'Brushed Brass Inlay', 'Felt Anti-Scratch Base Pads'],
    careInstructions: 'Hand wash with mild organic soap. Marble is sensitive to acidic lemon and vinegar juices; wipe promptly.',
    dimensions: '18 inches x 10 inches x 0.8 inches thickness',
    weight: '4.8 kg',
    rating: 4.8,
    reviewCount: 22,
    isBestseller: false,
    isNew: false,
    inStock: true,
    occasion: ['Dinner Parties', 'Wine & Cheese Soirées', 'Gifting'],
    crossSellIds: ['eou-h-02', 'eou-j-02'],
    reviews: []
  },
  {
    id: 'eou-h-04',
    name: 'Suryavanshi Brass Pooja Thali & Bell Set',
    tagline: '11-Piece Handcrafted Pooja Set with Engraved Gayatri & Lotus Motifs',
    price: 32000,
    originalPrice: 36000,
    category: 'home-essentials',
    subcategory: 'Festive & Pooja Essentials',
    images: [
      'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Elevate your daily prayers with our ceremonial 11-piece gold brass pooja suite. Comprises the large engraved royal thali, ghanti with Nandi finial, pancha-deepak diya, kalash, incense burner, and kumkum vatis.',
    materials: ['Heavy Bell Metal Brass', '24K Gold Polish accents'],
    careInstructions: 'Clean with natural lemon and salt paste or soft cloth. Do not use chemical cleaners.',
    dimensions: 'Thali diameter: 15 inches',
    weight: '3.9 kilograms',
    rating: 5.0,
    reviewCount: 27,
    isBestseller: true,
    isNew: false,
    inStock: true,
    occasion: ['Diwali', 'Daily Prayers', 'Wedding Trousseau Gift'],
    crossSellIds: ['eou-h-01', 'eou-j-01'],
    reviews: []
  },
  {
    id: 'eou-h-05',
    name: 'Celestial Lotus Brass & Smoked Glass Chandelier Sconce',
    tagline: 'Sculptural Brass Wall Sconce with Hand-Blown Fluted Glass',
    price: 48000,
    originalPrice: 54000,
    category: 'home-essentials',
    subcategory: 'Wall Art',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A glowing marriage of sculpture and illumination. Cast brass petals curve around a ribbed amber smoked glass shade, casting hypnotic warm gold patterns across your walls.',
    materials: ['Solid Hand-Antiqued Brass', 'Hand-Blown Smoked Fluted Glass', 'E27 Warm LED fixture included'],
    careInstructions: 'Dust with soft feather duster. Disconnect power before cleaning glass.',
    dimensions: 'Height: 22 inches, Projection: 7.5 inches',
    weight: '6.4 kg',
    rating: 4.9,
    reviewCount: 18,
    isBestseller: false,
    isNew: true,
    inStock: true,
    occasion: ['Luxury Living Rooms', 'Master Bedroom', 'Powder Room'],
    crossSellIds: ['eou-h-03', 'eou-h-02'],
    reviews: []
  },
  {
    id: 'eou-h-06',
    name: 'The Royal Sovereign Leather & Brass Valet Box',
    tagline: 'Hand-Stitched Italian Saddle Leather with Gold Hardware & Velvet Slots',
    price: 18500,
    originalPrice: 22000,
    category: 'home-essentials',
    subcategory: 'Gifting',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Designed for the discerning collector. Compartments engineered specifically for luxury watches, rings, cufflinks, and heirloom necklaces, lined in plush champagne anti-tarnish micro-suede.',
    materials: ['Full-Grain Italian Leather', 'Gold-Plated Key Lock', 'Anti-Tarnish Champagne Suede'],
    careInstructions: 'Treat leather with specialized balm once a year. Keep in cool, dry environment.',
    dimensions: '14" x 10" x 5.5"',
    weight: '3.1 kg',
    rating: 5.0,
    reviewCount: 34,
    isBestseller: true,
    isLimitedEdition: false,
    inStock: true,
    occasion: ['Corporate Gift', 'Groomsmen Suite', 'Heirloom Storage'],
    crossSellIds: ['eou-j-02', 'eou-j-04'],
    reviews: []
  }
];

export const FEATURED_COLLECTIONS = [
  {
    id: 'col-01',
    title: 'The Royal Polki Suite',
    subtitle: 'Heirloom Uncut Diamonds in 22K Gold',
    description: 'Crafted for milestone celebrations and royal weddings, channeling centuries of Mughal and Rajputana jewelry heritage.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
    category: 'jewellery' as const,
    itemCount: '18 Bespoke Pieces'
  },
  {
    id: 'col-02',
    title: 'Sanctuary of Light',
    subtitle: 'Artisanal Brass & Scented Living',
    description: 'Warm the sanctuary of your home with hand-cast brass urlis, ceremonial diyas, and Cambodian oud candles.',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1200&q=85',
    category: 'home-essentials' as const,
    itemCount: '24 Curated Essentials'
  },
  {
    id: 'col-03',
    title: 'The Solitaire Sovereign',
    subtitle: 'Architectural Cuts & Satin Gold',
    description: 'Modern statement rings and tennis bracelets designed for everyday imperial presence and uncompromising quality.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
    category: 'jewellery' as const,
    itemCount: '14 Masterpieces'
  },
  {
    id: 'col-04',
    title: 'The Grand Festive Edit',
    subtitle: 'Diwali & Wedding Celebrations',
    description: 'Curated gift boxes combining ceremonial pooja brass with fine jewellery pieces for unforgettable gifting.',
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1200&q=85',
    category: 'home-essentials' as const,
    itemCount: 'Limited Festive Sets'
  }
];

export const BRAND_VALUES = [
  {
    icon: 'Crown',
    title: '22K & 18K Hallmarked',
    description: 'Every jewellery piece is certified with BIS hallmark and independent gemological reports.'
  },
  {
    icon: 'Sparkles',
    title: 'Handcrafted by Masters',
    description: 'Preserving 4th-generation artisan techniques, from intricate meenakari to solid lost-wax brass casting.'
  },
  {
    icon: 'Gift',
    title: 'Royal Velvet Packaging',
    description: 'Unboxing is an experience. Hand-wrapped in midnight black suede boxes with wax seals and gold ribbons.'
  },
  {
    icon: 'ShieldCheck',
    title: '100% Insured Transit',
    description: 'Complimentary tamper-proof door-to-door transit insurance on every domestic and international order.'
  },
  {
    icon: 'RefreshCw',
    title: '7-Day Concierge Exchange',
    description: 'Enjoy effortless 7-day doorstep exchange and lifetime buyback certification.'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'Princess Devika R. of Mewar',
    location: 'Udaipur & London',
    quote: 'The craftsmanship of the Noor Polki Choker rivals any heritage vault in our family. The gold finish has that warm antique glow that modern mass jewellery simply cannot replicate.',
    rating: 5,
    item: 'The Empress Noor Polki Choker'
  },
  {
    id: 't-2',
    author: 'Samarth & Tanya Singhal',
    location: 'Worli, Mumbai',
    quote: 'We commissioned our entire Diwali home décor and wedding gifting from Ek Omkar Uniq. The brass urlis and oud candles made our penthouse feel like an imperial palace.',
    rating: 5,
    item: 'Mayura Brass Urli & Oud Candle Set'
  },
  {
    id: 't-3',
    author: 'Arjun Singhania',
    location: 'New Delhi',
    quote: 'The sovereign kada is heavy, authoritative, and perfectly balanced. The luxury black velvet unboxing was a sensory delight from the moment the courier arrived.',
    rating: 5,
    item: 'Sovereign Twisted Gold Kada'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    likes: '2.4k',
    caption: 'Candlelight reflections on 22K pure uncut polki. #EkOmkarUniq'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80',
    likes: '1.9k',
    caption: 'Diwali evening sanctum with the Mayura Brass Urli. #EOULiving'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    likes: '3.1k',
    caption: 'Satin gold and pure solitaire lines. #TimelessJewellery'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
    likes: '1.7k',
    caption: 'Cambodian Oud & Golden Benzoin. Scent of the palace. #EOUHome'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    likes: '4.2k',
    caption: 'Temple motifs sculpted in gold. Chandramukhi Jhumkas. #Royalty'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    likes: '2.1k',
    caption: 'Spanish Nero Marquina meets 24K gold chevron inlay. #BespokeServeware'
  }
];
