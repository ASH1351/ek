export type ProductCategory = 'jewellery' | 'home-essentials';

export type JewellerySubcategory = 
  | 'Necklaces' 
  | 'Earrings' 
  | 'Rings' 
  | 'Bracelets' 
  | 'Bangles' 
  | 'Sets';

export type HomeSubcategory = 
  | 'Décor' 
  | 'Candles & Diffusers' 
  | 'Serveware' 
  | 'Wall Art' 
  | 'Festive & Pooja Essentials' 
  | 'Gifting';

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  subcategory: JewellerySubcategory | HomeSubcategory;
  images: string[];
  description: string;
  materials: string[];
  careInstructions: string;
  dimensions?: string;
  weight?: string;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isLimitedEdition?: boolean;
  inStock: boolean;
  occasion?: string[];
  crossSellIds?: string[];
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export type PageView = 
  | 'home' 
  | 'jewellery' 
  | 'home-essentials' 
  | 'collections' 
  | 'about' 
  | 'contact';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'gold';
}
