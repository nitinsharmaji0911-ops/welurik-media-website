import React from 'react'
import { Eye, Play, Film } from 'lucide-react'
import { REELS_DATA } from '../data/portfolioData'

export default function ReelsShowcase({ onPlayReel }) {
  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14" id="reels-showcase">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center my-10 text-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-brand-border"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
            <h2 className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white">
              VERTICAL COMMERCIAL CINEMA &amp; REELS
            </h2>
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          </div>
          <div className="flex-1 h-[1px] bg-brand-border"></div>
        </div>
        <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-2">
          TAP ANY REEL TO PLAY INSTANT HIGH-DEFINITION CINEMA PREVIEW
        </p>
      </div>

      {/* 5-Column Vertical Reels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {REELS_DATA.map((reel) => (
          <div
            key={reel.id}
            onClick={() => onPlayReel(reel.videoFile, reel.client)}
            className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer bg-black border border-brand-border hover:border-brand-lime shadow-xl hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* Poster / Preview */}
            <img 
              src={reel.previewImage} 
              alt={reel.client}
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
              loading="lazy"
            />

            {/* Views Badge */}
            <div className="absolute top-3 left-3 z-10 bg-black/80 backdrop-blur-md text-brand-lime font-mono text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-brand-lime/30">
              <Eye size={12} />
              <span>{reel.views}</span>
            </div>

            {/* Centered Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-lime text-black flex items-center justify-center shadow-xl shadow-brand-lime/30 transition-transform duration-300 group-hover:scale-115 z-10">
              <Play size={18} className="translate-x-0.5 fill-current" />
            </div>

            {/* Bottom Title Info */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white z-10">
              <div className="font-heading font-extrabold text-xs uppercase tracking-wide group-hover:text-brand-lime transition-colors">
                {reel.client}
              </div>
              <div className="font-mono text-[10px] text-white/60 mt-0.5">
                {reel.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
