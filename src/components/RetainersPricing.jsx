import React from 'react'
import { Check, Zap } from 'lucide-react'
import { RETAINERS_DATA } from '../data/portfolioData'

export default function RetainersPricing({ onAddPlan, briefItems }) {
  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14" id="retainers">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center my-10 text-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-brand-border"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
            <h2 className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white">
              MONTHLY GROWTH RETAINERS
            </h2>
            <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          </div>
          <div className="flex-1 h-[1px] bg-brand-border"></div>
        </div>
        <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-2">
          TRANSPARENT, HIGH-OCTANE MONTHLY PARTNERSHIPS WITH ZERO HIDDEN MARKUPS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {RETAINERS_DATA.map((plan) => {
          const isAdded = briefItems.some(b => b.id === plan.id)

          return (
            <div
              key={plan.id}
              className={`relative bg-brand-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border ${
                plan.featured 
                  ? 'border-2 border-brand-lime shadow-2xl shadow-brand-lime/15 ring-1 ring-brand-lime/30' 
                  : 'border-brand-border hover:border-brand-borderBright'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-lime text-black text-[10px] font-heading font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Zap size={11} className="fill-black" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-white/10 mb-6">
                  <h3 className="font-heading text-sm font-extrabold tracking-widest uppercase text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="font-heading text-4xl font-extrabold text-brand-lime tracking-tight">
                    {plan.price}
                    <span className="font-sans text-sm font-normal text-white/60 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <div className="text-xs uppercase font-mono text-white/60 tracking-wider mt-2">
                    {plan.sub}
                  </div>
                </div>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-white/80 leading-relaxed font-normal">
                      <Check size={16} className="text-brand-lime shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onAddPlan(plan)}
                className={`w-full py-4 rounded-xl text-xs font-heading font-extrabold tracking-widest uppercase transition-all duration-300 ${
                  isAdded
                    ? 'bg-brand-lime text-black font-black'
                    : plan.featured
                    ? 'bg-brand-lime hover:bg-brand-limeDark text-black shadow-lg shadow-brand-lime/20 hover:scale-105 active:scale-95'
                    : 'bg-brand-surface hover:bg-brand-lime hover:text-black border border-brand-border text-white hover:scale-105 active:scale-95'
                }`}
              >
                {isAdded ? '✓ PLAN INCLUDED IN BRIEF' : '＋ ADD PLAN TO BRIEF'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
