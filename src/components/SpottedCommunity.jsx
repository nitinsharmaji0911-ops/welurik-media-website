import React from 'react'
import { WELURIK_DATA } from '../data/welurikMediaData'

export default function SpottedCommunity() {
  const photos = WELURIK_DATA.resultsProofWall

  return (
    <section id="proof-wall" className="py-8 sm:py-14 bg-[#FAF8F5]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-center font-bold tracking-[0.22em] text-sm sm:text-base md:text-lg text-[#111111] uppercase mb-6 sm:mb-8">
          #WELURIKRESULTS
        </h2>

        {/* 4 Proof Items Grid (2x2 on mobile, 4-col on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-4">
          {photos.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[5/7] rounded-[6px] overflow-hidden group bg-zinc-200 shadow-sm border border-zinc-200/60"
            >
              <img
                src={item.img}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
              
              {/* Subtle hover caption */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <span className="text-[11px] text-white font-semibold text-center leading-tight">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
