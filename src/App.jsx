import React, { useState, useEffect } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import QuickViewModal from './components/QuickViewModal'
import VideoLightbox from './components/VideoLightbox'
import MobileNav from './components/MobileNav'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useNavigation } from './context/NavigationContext'

// Page Components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import DigitalMarketingPage from './pages/DigitalMarketingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const { currentPath } = useNavigation()

  const [cartItems, setCartItems] = useState([
    {
      id: "pohawala-commercial",
      title: "Pohawala Brand Commercial",
      selectedSize: "Viral Video Sprint",
      quantity: 1,
      img1: "/assets/curated/reel_food.jpg"
    }
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [wishlistIds, setWishlistIds] = useState(new Set(["bajaj-oil-creative", "system-01"]))
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [activeReel, setActiveReel] = useState(null)

  // Toggle item in wishlist/shortlist
  const toggleWishlist = (id) => {
    setWishlistIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // Add item to scope shortlist
  const addToCart = (product, size = "Standard Scope") => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      )
      if (existingIdx > -1) {
        return prev
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          selectedSize: size,
          quantity: 1,
          img1: product.img1
        }
      ]
    })
    setIsCartOpen(true)
  }

  // Update item quantity
  const updateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      removeItem(index)
    } else {
      setCartItems((prev) => {
        const copy = [...prev]
        copy[index].quantity = newQty
        return copy
      })
    }
  }

  // Remove item from scope
  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  const totalCartCount = cartItems.length

  // Single-Page Canonical Anchor Redirects
  const REDIRECT_TARGETS = {
    '/our-work': 'featured-work',
    '/work': 'featured-work',
    '/case-studies': 'featured-work',
    '/portfolio': 'featured-work',
    '/services': 'services',
    '/digital-marketing': 'services',
    '/performance-marketing': 'services',
    '/web-development': 'deliverables',
    '/about': 'featured-work',
    '/about-us': 'featured-work',
    '/founder': 'featured-work',
    '/nitin': 'featured-work',
    '/contact': 'contact',
    '/contact-us': 'contact',
  }

  // Auto-scroll and rewrite URL history if user lands on legacy/subpage routes
  useEffect(() => {
    const cleanPath = (currentPath || '').replace(/\/$/, '')
    if (REDIRECT_TARGETS[cleanPath]) {
      const anchor = REDIRECT_TARGETS[cleanPath]
      window.history.replaceState({}, '', `/#${anchor}`)
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else if (cleanPath === '/privacy-policy') {
      window.history.replaceState({}, '', '/privacy')
    }
  }, [currentPath])

  // Render Current Page (Single-Page Experience + Compliant Legal Pages)
  const renderCurrentPage = () => {
    const cleanPath = (currentPath || '').replace(/\/$/, '')

    // If it's a redirect route or home/anchor route, render HomePage
    if (
      REDIRECT_TARGETS[cleanPath] ||
      cleanPath === '/' ||
      cleanPath === '' ||
      cleanPath.startsWith('/#') ||
      cleanPath.startsWith('#')
    ) {
      return (
        <HomePage
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistIds={wishlistIds}
          setQuickViewProduct={setQuickViewProduct}
          setActiveReel={setActiveReel}
        />
      )
    }

    if (cleanPath === '/privacy' || cleanPath === '/privacy-policy') {
      return <PrivacyPolicyPage />
    }

    if (cleanPath === '/terms') {
      return <TermsPage />
    }

    return <NotFoundPage />
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] font-sans antialiased selection:bg-black selection:text-white">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Classic Luxury Header with In-Page Navigation */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsCartOpen(true)}
      />

      {/* Main Single-Page Content or PP/T&C */}
      <main>
        {renderCurrentPage()}
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Slide-out Project Scope Brief Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* 5. Quick-View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.has(quickViewProduct.id) : false}
      />

      {/* 6. Video Lightbox Reel Player */}
      <VideoLightbox
        reel={activeReel}
        onClose={() => setActiveReel(null)}
      />

      {/* 7. Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />

      {/* 8. Mobile Bottom Navigation Bar */}
      <MobileNav
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

    </div>
  )
}
