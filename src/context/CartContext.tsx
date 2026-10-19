import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageView, ToastMessage } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  activePageView: PageView;
  setActivePageView: (view: PageView) => void;
  selectedSubcategoryFilter: string | null;
  setSelectedSubcategoryFilter: (subcat: string | null) => void;
  activeProductModal: Product | null;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartSubtotal: number;
  cartTotalCount: number;
  promoCode: string;
  discountAmount: number;
  applyPromoCode: (code: string) => boolean;
  isGiftWrap: boolean;
  setIsGiftWrap: (val: boolean) => void;
  clearCart: () => void;
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'gold') => void;
  navigateTo: (page: PageView, subcategory?: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial cart & wishlist from localStorage if available
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('eou_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 },
        { product: PRODUCTS[7], quantity: 1 }
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('eou_wishlist');
      return saved ? JSON.parse(saved) : ['eou-j-01', 'eou-h-01'];
    } catch {
      return ['eou-j-01'];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePageView, setActivePageView] = useState<PageView>('home');
  const [selectedSubcategoryFilter, setSelectedSubcategoryFilter] = useState<string | null>(null);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isGiftWrap, setIsGiftWrap] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('eou_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('eou_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'gold' = 'gold') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openProductModal = (product: Product) => {
    setActiveProductModal(product);
  };

  const closeProductModal = () => {
    setActiveProductModal(null);
  };

  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, quantity, selectedSize }];
      }
    });
    showToast(
      'Added to Royal Bag',
      `${product.name} has been added to your bespoke collection.`,
      'gold'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Removed from Bag', 'Item removed from your cart.', 'info');
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const toggleWishlist = (productId: string) => {
    const exists = wishlist.includes(productId);
    const product = PRODUCTS.find((p) => p.id === productId);
    if (exists) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast('Removed from Wishlist', `${product?.name || 'Item'} removed from favorites.`, 'info');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast('Saved to Wishlist', `${product?.name || 'Item'} added to your royal vault.`, 'gold');
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ROYAL10' || clean === 'EOU10') {
      setPromoCode(clean);
      setDiscountPercent(10);
      showToast('Privilege Code Applied', '10% Royal Connoisseur Discount applied.', 'gold');
      return true;
    } else if (clean === 'FESTIVE15') {
      setPromoCode(clean);
      setDiscountPercent(15);
      showToast('Festive Privilege Applied', '15% Royal Festive Discount applied.', 'gold');
      return true;
    } else {
      showToast('Invalid Code', 'Please enter a valid royal privilege code (try: ROYAL10).', 'info');
      return false;
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);

  const clearCart = () => {
    setCart([]);
  };

  const navigateTo = (page: PageView, subcategory?: string) => {
    setActivePageView(page);
    if (subcategory) {
      setSelectedSubcategoryFilter(subcategory);
    } else {
      setSelectedSubcategoryFilter(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activePageView,
        setActivePageView,
        selectedSubcategoryFilter,
        setSelectedSubcategoryFilter,
        activeProductModal,
        openProductModal,
        closeProductModal,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        cartSubtotal,
        cartTotalCount,
        promoCode,
        discountAmount,
        applyPromoCode,
        isGiftWrap,
        setIsGiftWrap,
        clearCart,
        toasts,
        removeToast,
        showToast,
        navigateTo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
