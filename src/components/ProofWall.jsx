import React from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'

export default function ProofWall({ onOpenCaseStudy }) {
  const proofItems = [
    {
      id: "proj-2",
      image: "/assets/curated/analytics_ipad.jpg",
      stat: "71,200,000+",
      label: "Verified Ad Impressions • ₹10.66 CPL (Google Ads Engine)"
    },
    {
      id: "proj-1",
      image: "/assets/proof/shopify_submissions.webp",
      stat: "18.8% CONVERSION",
      label: "Shopify OTP Funnel (313K+ Views • 9,980+ Leads)"
    },
    {
      id: "proj-3",
      image: "/assets/proof/sm_engineering.jpg",
      stat: "SOLAR EPC PLATFORM",
      label: "SM Engineering Central India Industrial Engine"
    },
    {
      id: "proj-5",
      image: "/assets/curated/automation_flow.jpg",
      stat: "< 10s LATENCY",
      label: "Serverless n8n WhatsApp Instant Lead Routing"
    }
  ]

  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14" id="proof-wall">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center my-10 text-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-brand-border"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
            <h2 className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white">
              #WELURIKRESULTS // LIVE PROOF WALL
            </h2>
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          </div>
          <div className="flex-1 h-[1px] bg-brand-border"></div>
        </div>
        <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-2">
          REAL CLIENT AD ACCOUNTS &amp; VERIFIED BACKENDS • ZERO STOCK MOCKUPS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proofItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenCaseStudy(item.id)}
            className="group relative rounded-2xl overflow-hidden bg-brand-dark border border-brand-border hover:border-brand-lime cursor-pointer aspect-[16/10] shadow-xl hover:shadow-2xl hover:shadow-brand-lime/10 transition-all duration-500"
          >
            <img 
              src={item.image} 
              alt={item.stat}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            
            {/* Dark glass overlay footer with arrow */}
            <div className="absolute bottom-5 left-5 right-5 z-10 bg-black/85 backdrop-blur-md text-white p-5 rounded-xl border border-white/10 flex items-center justify-between transition-all group-hover:border-brand-lime/50">
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-brand-lime">
                  {item.stat}
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-white/80 uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-brand-lime group-hover:text-black flex items-center justify-center transition-all shrink-0">
                <ArrowUpRight size={20} className="stroke-[2.5]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
