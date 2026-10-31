import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { WELURIK_DATA } from '../data/welurikMediaData'

function ServiceCard({ item, onSelectDiscipline }) {
  const handleClick = () => {
    if (item.targetId) {
      const el = document.getElementById(item.targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (onSelectDiscipline) {
      onSelectDiscipline(item.id)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="flex-shrink-0 w-[110px] min-w-[110px] sm:w-[165px] sm:min-w-[165px] md:w-[190px] md:min-w-[190px] lg:w-[210px] lg:min-w-[210px] snap-start group cursor-pointer block select-none"
    >
      <div className="relative aspect-[2/3] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-200/80 hover:shadow-xl hover:border-black/20 transition-all duration-300">
        
        {/* Crisp Service Poster Artwork */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          decoding="async"
        />

        {/* Content Creation custom matching typography overlay */}
        {item.id === 'content-creation' && (
          <div className="absolute inset-0 flex flex-col justify-between items-center py-4 sm:py-5 px-2 text-center pointer-events-none bg-black/25">
            <div className="text-[7px] sm:text-[9px] font-bold text-white/95 tracking-[0.2em] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              INSTAGRAM · YOUTUBE · LINKEDIN
            </div>
            <div className="font-black text-white text-base sm:text-2xl md:text-3xl tracking-tighter uppercase leading-[0.92] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              CONTENT<br />CREATION
            </div>
            <div className="text-[6px] sm:text-[8px] font-bold text-white/95 tracking-[0.25em] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              WELURIK MEDIA
            </div>
          </div>
        )}

        {/* Paid Ads Welurik Media branding badge overlay */}
        {item.id === 'paid-ads' && (
          <div className="absolute bottom-2 sm:bottom-3 inset-x-0 flex justify-center pointer-events-none">
            <span className="bg-black/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[6px] sm:text-[8px] font-bold text-white/95 tracking-[0.25em] uppercase shadow-sm">
              WELURIK MEDIA
            </span>
          </div>
        )}

      </div>
    </div>
  )
}

export default function TopCollections({ onSelectDiscipline }) {
  const scrollContainerRef = useRef(null)
  const services = WELURIK_DATA.services || WELURIK_DATA.topDisciplines

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-6 sm:py-10 bg-[#FAF8F5] select-none relative">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="font-bold tracking-[0.25em] text-xs sm:text-sm md:text-base text-[#111111] uppercase">
            OUR SERVICES
          </h2>
        </div>

        {/* Carousel Container with Desktop Arrow Controls */}
        <div className="relative group/carousel">
          
          {/* Desktop Left Scroll Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-md border border-zinc-200 items-center justify-center text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Service Cards Snap Horizontal Row (Fits nicely on mobile and centered on desktop) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-2.5 sm:gap-4 lg:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 sm:px-0 pb-2 sm:justify-center lg:justify-center"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {services.map((item) => (
              <ServiceCard
                key={item.id}
                item={item}
                onPlayVideo={onPlayVideo}
                onSelectDiscipline={onSelectDiscipline}
              />
            ))}
          </div>

          {/* Desktop Right Scroll Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-md border border-zinc-200 items-center justify-center text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>
    </section>
  )
}
