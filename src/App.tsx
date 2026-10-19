import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { FeaturedCollections } from './components/FeaturedCollections';
import { BestSellers } from './components/BestSellers';
import { BrandDifference } from './components/BrandDifference';
import { BrandStory } from './components/BrandStory';
import { FestiveEdit } from './components/FestiveEdit';
import { Testimonials } from './components/Testimonials';
import { InstagramGrid } from './components/InstagramGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ToastContainer } from './components/Toast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { JewelleryPage } from './components/JewelleryPage';
import { HomeEssentialsPage } from './components/HomeEssentialsPage';
import { CollectionsPage } from './components/CollectionsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

const MainLayout: React.FC = () => {
  const { activePageView } = useCart();
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#111110] text-[#F6F1E7] flex flex-col relative selection:bg-[#D4AF37]/30 selection:text-[#F5D77A]">
      {/* 1. Animated Preloader */}
      {!loadingComplete && <Preloader onComplete={() => setLoadingComplete(true)} />}

      {/* Custom Desktop Gold Cursor */}
      <CustomCursor />

      {/* Floating Notifications */}
      <ToastContainer />

      {/* Top Sticky Navbar */}
      <Navbar />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {activePageView === 'home' && (
          <>
            <Hero />
            <CategoryShowcase />
            <FeaturedCollections />
            <BestSellers />
            <BrandDifference />
            <BrandStory />
            <FestiveEdit />
            <Testimonials />
            <InstagramGrid />
            <Newsletter />
          </>
        )}

        {activePageView === 'jewellery' && <JewelleryPage />}

        {activePageView === 'home-essentials' && <HomeEssentialsPage />}

        {activePageView === 'collections' && <CollectionsPage />}

        {activePageView === 'about' && <AboutPage />}

        {activePageView === 'contact' && <ContactPage />}
      </main>

      {/* Rich Multi-Column Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />

      {/* Slide-in & Modal Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <CheckoutModal />
      <ProductDetailModal />

      {/* Floating WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
