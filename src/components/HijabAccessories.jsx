import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { WELURIK_DATA } from '../data/welurikMediaData'

export default function HijabAccessories({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView
}) {
  const products = WELURIK_DATA.growthAudits
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section id="audits" className="py-8 sm:py-14 bg-[#FAF8F5]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center font-bold tracking-[0.22em] text-sm sm:text-base md:text-lg text-[#111111] uppercase mb-6 sm:mb-8">
          GROWTH ADD-ONS & AUDITS
        </h2>

        {/* Carousel / 4-Col Grid */}
        <div className="relative group/carousel">
          <button
            onClick={scrollLeft}
            aria-label="Previous audits"
            className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-50 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next audits"
            className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-50 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible no-scrollbar scroll-smooth snap-x snap-mandatory px-1 sm:px-0 pb-4"
          >
            {products.map((prod) => (
              <div 
                key={prod.id} 
                className="w-[75vw] max-w-[320px] sm:w-auto flex-shrink-0 snap-center sm:snap-none"
              >
                <ProductCard
                  product={prod}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds ? wishlistIds.has(prod.id) : false}
                  onQuickView={onQuickView}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Centered VIEW ALL Button */}
        <div className="text-center mt-6 sm:mt-10">
          <a
            href="#audits"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-2.5 sm:py-3 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow"
          >
            VIEW ALL ADD-ONS
          </a>
        </div>

      </div>
    </section>
  )
}
