import React from 'react'
import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react'

const CLIENT_CASES = [
  {
    id: "pohawala",
    client: "Pohawala Nagpur",
    badge: "F&B VIRAL COMMERCE",
    category: "Commercial Film & Meta Ads",
    metricValue: "4.8x",
    metricLabel: "VERIFIED META ROAS",
    highlight: "1.4M+ Organic Views • ₹14.8L Direct Revenue",
    description: "High-retention cinema commercial sprint paired with targeted local Meta ad funnels that scaled footfall and franchise inquiries across Central India.",
    image: "/assets/curated/reel_food.jpg",
    waText: "Hi Welurik Team, I reviewed the Pohawala case study and want to discuss scaling my F&B brand."
  },
  {
    id: "celibar",
    client: "Celibar Lifestyle",
    badge: "HAUTE D2C FASHION",
    category: "E-Commerce & Performance Media",
    metricValue: "₹24.8L",
    metricLabel: "REVENUE GENERATED",
    highlight: "680K Video Reach • <0.8s Global Storefront",
    description: "End-to-end launch sprint: cinema-grade product campaign reels, high-velocity Meta acquisition campaigns, and sub-second Next.js storefront architecture.",
    image: "/assets/curated/fashion_d2c.jpg",
    waText: "Hi Welurik Team, I reviewed the Celibar case study and want to discuss scaling my D2C fashion brand."
  },
  {
    id: "sm-engineering",
    client: "SM Solar EPC CleanTech",
    badge: "CLEANTECH B2B",
    category: "Commercial EPC & Enterprise Web",
    metricValue: "₹1.8Cr+",
    metricLabel: "QUALIFIED B2B PIPELINE",
    highlight: "42 Industrial Contracts • Interactive ROI Calculator",
    description: "Turnkey digital ecosystem engineered for multi-crore industrial solar contracts with net metering savings workflows and automated enterprise lead routing.",
    image: "/assets/curated/solar_epc.jpg",
    waText: "Hi Welurik Team, I reviewed the SM Solar case study and want to discuss enterprise B2B client acquisition."
  }
]

export default function EverydayEdit() {
  const handleCardClick = (waText) => {
    const url = `https://wa.me/918421706305?text=${encodeURIComponent(waText)}`
    window.open(url, '_blank')
  }

  return (
    <section id="featured-work" className="scroll-mt-20 py-12 sm:py-16 bg-[#FAF8F5] select-none border-t border-zinc-200/70">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[11px] font-mono font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles size={12} className="text-zinc-500" />
            <span>VERIFIED OUTCOMES</span>
          </div>

          <h2 className="font-bold tracking-[0.25em] text-base sm:text-lg md:text-xl text-black uppercase text-center mb-2">
            OUR CLIENTS &amp; CASE STUDIES
          </h2>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-lg mx-auto text-center leading-relaxed">
            Data-backed growth sprints engineered for measurable revenue scale and market authority.
          </p>
        </div>

        {/* 3 Minimal Editorial Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_CASES.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.waText)}
              className="bg-white rounded-2xl border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.08)] hover:border-black transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Crisp Cinema Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.client}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs">
                  {item.badge}
                </div>

                {/* Arrow Action on Hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight size={15} />
                </div>
              </div>

              {/* Card Meta Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1 font-medium">
                    {item.category}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mb-3 group-hover:text-zinc-700 transition-colors">
                    {item.client}
                  </h3>

                  {/* Highlight Metric */}
                  <div className="bg-[#FAF8F5] border border-zinc-200/70 rounded-xl p-3.5 mb-3.5">
                    <div className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-none mb-1">
                      {item.metricValue}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-500">
                      {item.metricLabel}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 font-medium mb-2">
                    {item.highlight}
                  </p>

                  <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-black group-hover:text-zinc-600 transition-colors">
                  <span>DISCUSS SIMILAR SPRINT</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist 3-Proof Metric Strip */}
        <div className="mt-8 sm:mt-12 py-5 px-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 gap-4 sm:gap-0 text-center">
          <div className="sm:px-4">
            <span className="block text-2xl sm:text-3xl font-black text-black tracking-tight">4.8x</span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Average Verified ROAS</span>
          </div>
          <div className="pt-3 sm:pt-0 sm:px-4">
            <span className="block text-2xl sm:text-3xl font-black text-black tracking-tight">₹4.2Cr+</span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Client Pipeline Scaled</span>
          </div>
          <div className="pt-3 sm:pt-0 sm:px-4">
            <span className="block text-2xl sm:text-3xl font-black text-black tracking-tight">100%</span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Client IP &amp; Code Ownership</span>
          </div>
        </div>

      </div>
    </section>
  )
}
