import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function IndustrySolutions({ onSelectCategory }) {
  const industries = [
    {
      title: 'D2C E-COMMERCE & BRANDS',
      desc: 'Shopify CRO, Meta Ads Scaling & WhatsApp Abandonment Recovery',
      image: '/assets/proof/shopify_submissions.webp',
      filter: 'cro'
    },
    {
      title: 'EDTECH & CREATOR MEDIA IP',
      desc: 'YouTube Shopping, Student Portals & Intellectual Thought Leadership',
      image: '/assets/curated/creator_system.jpg',
      filter: 'brand'
    },
    {
      title: 'B2B CONTRACTING & SOLAR EPC',
      desc: 'High-Ticket B2B Portals, Drone Showcase & Instant RFPs',
      image: '/assets/curated/solar_epc.jpg',
      filter: 'brand'
    },
    {
      title: 'F&B & MULTI-UNIT RETAIL',
      desc: 'Sensory Food Cinema, Footfall Spikes & Hyper-Local Targeting',
      image: '/assets/curated/reel_food.jpg',
      filter: 'video'
    }
  ]

  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14" id="solutions">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center my-10 text-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-brand-border"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
            <h2 className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white">
              INDUSTRY SECTOR PLAYBOOKS
            </h2>
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          </div>
          <div className="flex-1 h-[1px] bg-brand-border"></div>
        </div>
        <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-2">
          SPECIALIZED REVENUE ENGINES TAILORED FOR HIGH-GROWTH MARKET VERTICALS
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind) => (
          <div
            key={ind.title}
            onClick={() => onSelectCategory(ind.filter)}
            className="group flex flex-col cursor-pointer bg-brand-card rounded-xl overflow-hidden border border-brand-border hover:border-brand-lime transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-lime/10"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
              <img 
                src={ind.image} 
                alt={ind.title}
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white group-hover:bg-brand-lime group-hover:text-black transition-colors">
                <ArrowUpRight size={15} />
              </div>
            </div>
            
            <div className="p-5 flex flex-col gap-1.5 flex-1 justify-between">
              <div>
                <h3 className="font-heading text-sm font-extrabold uppercase text-white group-hover:text-brand-lime transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-white/60 font-normal leading-relaxed mt-2">
                  {ind.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-brand-lime uppercase font-semibold">
                EXPLORE VERTICAL CASE STUDIES →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
