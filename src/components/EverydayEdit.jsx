import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { WELURIK_DATA } from '../data/welurikMediaData'

export default function EverydayEdit() {
  const clients = WELURIK_DATA.featuredWork || []
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchDelta, setTouchDelta] = useState(0)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [clients.length])

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchDelta(0)
  }

  const handleTouchMove = (e) => {
    if (touchStart !== null) {
      setTouchDelta(e.targetTouches[0].clientX - touchStart)
    }
  }

  const handleTouchEnd = () => {
    if (touchDelta > 45) {
      prev()
    } else if (touchDelta < -45) {
      next()
    }
    setTouchStart(null)
    setTouchDelta(0)
  }

  // Compute slide position for 3-card peek carousel (Exact match to reference image)
  const getSlideStyle = (index) => {
    const total = clients.length
    let offset = (index - activeIndex + total) % total
    if (offset > total / 2) offset -= total

    if (Math.abs(offset) > 1) {
      return {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none'
      }
    }

    // Offset -1: Left peek card
    // Offset 0: Center active card
    // Offset 1: Right peek card
    const isCenter = offset === 0
    const translateX = offset * 106 // percentage offset
    const scale = isCenter ? 1 : 0.92
    const opacity = isCenter ? 1 : 0.65
    const zIndex = isCenter ? 20 : 10

    return {
      transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'transform 420ms cubic-bezier(0.25, 1, 0.5, 1), opacity 350ms ease'
    }
  }

  return (
    <section id="featured-work" className="scroll-mt-20 pt-8 sm:pt-14 pb-14 sm:pb-20 bg-white overflow-hidden select-none">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">

        {/* Section Heading (Exact Haya Typography) */}
        <h2 className="font-bold tracking-[0.25em] text-base sm:text-lg md:text-xl text-black uppercase text-center mb-6 sm:mb-8">
          OUR CLIENTS
        </h2>

        {/* Carousel Stage */}
        <div 
          className="relative w-full max-w-[900px] mx-auto h-[450px] sm:h-[530px] md:h-[560px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Side Desktop Chevron - Left */}
          <button
            onClick={prev}
            aria-label="Previous client"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-zinc-200 items-center justify-center text-zinc-700 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Side Desktop Chevron - Right */}
          <button
            onClick={next}
            aria-label="Next client"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-zinc-200 items-center justify-center text-zinc-700 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {clients.map((client, idx) => {
              const total = clients.length
              let offset = (idx - activeIndex + total) % total
              if (offset > total / 2) offset -= total
              const isCenter = offset === 0

              return (
                <div
                  key={client.id}
                  style={getSlideStyle(idx)}
                  onClick={() => {
                    if (offset === -1) prev()
                    else if (offset === 1) next()
                    else {
                      window.open(`https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I'm%20interested%20in%20your%20growth%20systems%20for%20${encodeURIComponent(client.title)}.`, '_blank')
                    }
                  }}
                  className="absolute left-1/2 top-0 w-[64vw] max-w-[250px] sm:max-w-[290px] md:max-w-[310px] flex flex-col items-center cursor-pointer select-none"
                >
                  {/* Clean 9:16 Card Image (Exact 9:16 vertical ratio) */}
                  <div className="w-full aspect-[9/16] rounded-[18px] sm:rounded-2xl overflow-hidden bg-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-zinc-200/50 group">
                    <img
                      src={client.img1}
                      alt={client.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Centered VIEW ALL Button (Exact match to reference image) */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I'd%20like%20to%20view%20all%20client%20case%20studies."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-2.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 active:scale-95 transition-all shadow-md"
          >
            VIEW ALL
          </a>
        </div>

      </div>
    </section>
  )
}
