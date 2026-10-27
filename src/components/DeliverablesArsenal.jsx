import React from 'react'
import { Instagram, MessageSquare, ShoppingBag, Award, Zap } from 'lucide-react'
import { DELIVERABLES_DATA } from '../data/portfolioData'

export default function DeliverablesArsenal({ onAddDeliverable, briefItems }) {
  const getIcon = (id) => {
    switch (id) {
      case 'deliv-meta-ads': return <Instagram size={20} className="text-brand-lime" />
      case 'deliv-n8n-bot': return <MessageSquare size={20} className="text-brand-lime" />
      case 'deliv-shopify-otp': return <ShoppingBag size={20} className="text-brand-lime" />
      default: return <Award size={20} className="text-brand-lime" />
    }
  }

  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14" id="deliverables">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center my-10 text-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-brand-border"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
            <h2 className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white">
              TACTICAL DELIVERABLES &amp; INTEGRATIONS
            </h2>
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          </div>
          <div className="flex-1 h-[1px] bg-brand-border"></div>
        </div>
        <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-2">
          PLUG-AND-PLAY ARCHITECTURAL MODULES TO ACCELERATE YOUR GROWTH
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DELIVERABLES_DATA.map((item) => {
          const isAdded = briefItems.some(b => b.id === item.id)

          return (
            <div 
              key={item.id}
              className="bg-brand-card border border-brand-border rounded-xl p-6 flex flex-col justify-between hover:border-brand-lime hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-lime/10 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center mb-5">
                  {getIcon(item.id)}
                </div>
                <div className="text-[10px] font-mono text-brand-lime uppercase font-semibold mb-1">
                  {item.category}
                </div>
                <h3 className="font-heading font-extrabold text-base text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-white/50 uppercase">
                  {item.turnaround}
                </span>
                <button
                  onClick={() => onAddDeliverable(item)}
                  className={`text-xs font-heading font-extrabold tracking-wider uppercase px-4 py-2 rounded-full transition-all ${
                    isAdded
                      ? 'bg-brand-lime text-black font-black'
                      : 'bg-white/10 text-white hover:bg-brand-lime hover:text-black'
                  }`}
                >
                  {isAdded ? '✓ ADDED' : '＋ ADD TO BRIEF'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
