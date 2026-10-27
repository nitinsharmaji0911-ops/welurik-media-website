import React, { useState } from 'react'
import { ExternalLink, ArrowRight, Sparkles, Check } from 'lucide-react'

export default function ProductCard({
  product,
  isWebsite = false,
  onAddToCart,
  onQuickView
}) {
  const [isHovered, setIsHovered] = useState(false)
  const isWebItem = isWebsite || Boolean(product.domain)

  return (
    <div 
      className="group cursor-pointer text-left block select-none bg-white rounded-xl p-2.5 sm:p-3 border border-zinc-200/80 hover:border-zinc-400 hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView && onQuickView(product)}
    >
      {/* Visual Frame */}
      {isWebItem ? (
        /* 1. Browser Mockup Window for Websites */
        <div className="relative overflow-hidden rounded-lg mb-3 bg-zinc-950 shadow-sm border border-zinc-800">
          {/* Top Browser Chrome Bar */}
          <div className="h-6 sm:h-7 bg-[#1A1A1A] px-2.5 flex items-center justify-between border-b border-zinc-800 select-none">
            {/* 3 Mac Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>

            {/* Browser URL Pill */}
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 text-[9px] sm:text-[10px] font-mono text-zinc-400 max-w-[170px] sm:max-w-[200px] truncate">
              <span className="text-[#00D2B8]">https://</span>
              <span className="text-zinc-200 truncate">{product.domain || 'welurik.agency'}</span>
            </div>

            {/* Quick Inspect Icon */}
            <div className="text-zinc-500 group-hover:text-[#00D2B8] transition-colors">
              <ExternalLink size={11} />
            </div>
          </div>

          {/* Screenshot Container (16:10 aspect ratio for crisp website layout) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
            <img
              src={product.img1}
              alt={product.title}
              loading="lazy"
              className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Category / Discipline Pill at Top Left */}
            {product.badge && (
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-black/80 backdrop-blur-md text-white text-[9px] font-bold tracking-wider px-2 py-0.5 rounded uppercase border border-white/10 shadow-sm">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Subtle Desktop Hover Overlay */}
            <div className={`hidden sm:flex absolute inset-0 bg-black/40 backdrop-blur-[2px] items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <span className="px-3 py-1.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <span>View Case Study</span>
                <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* 2. Standard Aspect Ratio for Creative Systems / Deliverables */
        <div className="relative overflow-hidden rounded-lg mb-3 aspect-[4/5] bg-zinc-100 shadow-sm border border-zinc-200/50">
          <img
            src={product.img1}
            alt={product.title}
            loading="lazy"
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
              product.img2 && isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {product.img2 && (
            <img
              src={product.img2}
              alt={`${product.title} alternate view`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          )}

          {/* Top Badge */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="bg-[#111111]/90 backdrop-blur-md text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase shadow-sm">
                {product.badge}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Project Details Below Preview */}
      <div className="space-y-1.5 px-0.5">
        {/* Deliverables / Tech Stack Tag */}
        <p className="text-[10px] sm:text-[11px] font-semibold text-[#009688] tracking-wide truncate">
          {product.tag || 'Turnkey Growth Architecture ⚡'}
        </p>

        {/* Project Title */}
        <h3 className="text-xs sm:text-[13px] font-bold text-[#111111] tracking-wide uppercase line-clamp-1 group-hover:text-zinc-600 transition-colors">
          {product.title}
        </h3>

        {/* Key Metric & Deliverable Highlight (NO PRICES) */}
        <div className="flex items-center justify-between gap-2 pt-0.5 flex-wrap">
          {product.category && (
            <span className="text-[11px] font-medium text-zinc-500 truncate max-w-[180px]">
              {product.category}
            </span>
          )}
          {product.metric && (
            <span className="text-[10px] font-bold text-[#009688] bg-[#00D2B8]/15 px-2 py-0.5 rounded-full whitespace-nowrap ml-auto">
              {product.metric}
            </span>
          )}
        </div>

        {/* Action Button: View Case Study / Add to Scope */}
        <div className="pt-2">
          <div className="w-full py-1.5 px-3 rounded-lg bg-zinc-100 group-hover:bg-[#111111] group-hover:text-white text-zinc-800 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5">
            <span>Inspect Platform</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  )
}
