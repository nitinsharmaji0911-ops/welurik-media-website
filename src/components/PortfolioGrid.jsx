import React from 'react'
import { Heart, ArrowUpRight, Zap } from 'lucide-react'
import { PORTFOLIO_ITEMS } from '../data/portfolioData'

export default function PortfolioGrid({ 
  onOpenQuickView, 
  onToggleBrief, 
  briefItems, 
  favoritedIds, 
  onToggleFavorite,
  selectedCategory,
  onSelectCategory
}) {
  const categories = [
    { id: 'all', label: 'ALL WORK' },
    { id: 'performance', label: 'PERFORMANCE ADS' },
    { id: 'video', label: 'VIRAL REELS & FILM' },
    { id: 'cro', label: 'SHOPIFY & CRO' },
    { id: 'automation', label: 'LEAD AUTOMATION' },
    { id: 'brand', label: 'BRAND SYSTEMS' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory)

  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14" id="featured-work">
      
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center my-10 text-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-brand-border"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
            <h2 className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white">
              PROVEN WORK &amp; CASE STUDIES
            </h2>
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          </div>
          <div className="flex-1 h-[1px] bg-brand-border"></div>
        </div>
        <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-2">
          PRESENTING VERIFIED CLIENT BACKENDS DIRECTLY WITHOUT HUSTLE
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 border ${
              selectedCategory === cat.id
                ? 'bg-brand-lime text-black border-brand-lime shadow-lg shadow-brand-lime/20 font-bold'
                : 'bg-brand-surface border-brand-border text-white/70 hover:border-brand-lime/50 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 4-Column Agency Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const isFavorited = favoritedIds.has(item.id)
          const isInBrief = briefItems.some(b => b.id === item.id)

          return (
            <div 
              key={item.id}
              onClick={() => onOpenQuickView(item.id)}
              className="group flex flex-col cursor-pointer bg-brand-card rounded-xl overflow-hidden border border-brand-border hover:border-brand-lime hover:shadow-2xl hover:shadow-brand-lime/10 transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative w-full aspect-[4/5] bg-black overflow-hidden">
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10 bg-black/85 border border-brand-lime/40 text-brand-lime text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5 shadow-md">
                  <Zap size={11} className="fill-brand-lime" />
                  <span>{item.badge}</span>
                </div>

                {/* Wishlist Heart */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleFavorite(item.id)
                  }}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 hover:bg-black border border-white/10 flex items-center justify-center transition-transform hover:scale-110"
                  aria-label="Wishlist"
                >
                  <Heart 
                    size={14} 
                    className={isFavorited ? "fill-red-500 text-red-500" : "text-white/80"} 
                  />
                </button>

                {/* Screenshot */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] transition-transform duration-500 group-hover:scale-105 group-hover:brightness-95"
                  loading="lazy"
                />

                {/* Hover Drawer Actions (1-Click Frictionless) */}
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-0 inset-x-0 bg-black/90 backdrop-blur-md p-3 flex items-center justify-between gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 border-t border-white/10"
                >
                  <button 
                    onClick={() => onOpenQuickView(item.id)}
                    className="flex-1 bg-white hover:bg-white/90 text-black text-[11px] font-heading font-extrabold tracking-wider uppercase py-2 rounded transition-colors flex items-center justify-center gap-1"
                  >
                    <span>QUICK VIEW</span>
                    <ArrowUpRight size={13} />
                  </button>
                  <button 
                    onClick={() => onToggleBrief(item.id)}
                    className={`flex-1 text-[11px] font-heading font-extrabold tracking-wider uppercase py-2 rounded transition-all border ${
                      isInBrief 
                        ? 'bg-brand-lime text-black border-brand-lime' 
                        : 'border-white/30 text-white hover:border-brand-lime hover:text-brand-lime'
                    }`}
                  >
                    {isInBrief ? '✓ IN BRIEF' : '＋ ADD BRIEF'}
                  </button>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="p-4 flex flex-col gap-1.5 bg-brand-card flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-lime mb-1">
                    <span>{item.categoryName}</span>
                    <span className="text-white/40">{item.turnaround}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-sm tracking-tight text-white group-hover:text-brand-lime transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-white">
                    {item.metricNum} <span className="text-white/60 font-normal">{item.metricLabel}</span>
                  </span>
                  <span className="text-brand-lime font-medium">
                    {item.metricSecond}
                  </span>
                </div>
              </div>

            </div>
          )
        })}
      </div>

      {/* Center View All Button */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={() => onSelectCategory('all')}
          className="bg-brand-surface hover:bg-brand-lime hover:text-black border border-brand-border text-white px-8 py-3 rounded-full text-xs font-heading font-extrabold tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-105"
        >
          VIEW ALL {PORTFOLIO_ITEMS.length} AGENCY DELIVERABLES
        </button>
      </div>

    </section>
  )
}
