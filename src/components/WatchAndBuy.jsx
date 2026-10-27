import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Eye, Play } from 'lucide-react'
import { WELURIK_DATA } from '../data/welurikMediaData'

export default function WatchAndBuy({ onPlayVideo }) {
  const reels = WELURIK_DATA.watchAndScale
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' })
    }
  }

  return (
    <section id="watch-and-scale" className="py-8 sm:py-14 bg-[#FAF8F5]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center font-bold tracking-[0.22em] text-sm sm:text-base md:text-lg text-[#111111] uppercase mb-6 sm:mb-8">
          WATCH & SCALE
        </h2>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <button
            onClick={scrollLeft}
            aria-label="Previous reels"
            className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-50 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next reels"
            className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-50 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-3"
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => onPlayVideo && onPlayVideo(reel)}
                className="w-[170px] sm:w-[220px] md:w-[250px] lg:w-[270px] flex-shrink-0 snap-center group cursor-pointer block select-none"
              >
                <div className="relative overflow-hidden rounded-[8px] bg-zinc-900 aspect-[9/16] shadow-sm border border-zinc-200/60">
                  {/* Poster Image */}
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 group-hover:opacity-80 transition-opacity" />

                  {/* Play Button Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/95 sm:backdrop-blur-sm flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={20} className="fill-black ml-0.5" />
                    </div>
                  </div>

                  {/* Top Views Chip */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 sm:bg-black/50 sm:backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    <Eye size={13} />
                    <span>{reel.views}</span>
                  </div>

                  {/* Bottom Campaign Info Chip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 p-1.5 bg-black/85 sm:bg-black/60 sm:backdrop-blur-md rounded-lg border border-white/10">
                    <img
                      src={reel.thumb}
                      alt={reel.title}
                      className="w-9 h-9 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                        {reel.title}
                      </p>
                      <p className="text-[10px] text-[#00D2B8] font-semibold">
                        {reel.metric || reel.price}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
