import React from 'react'
import { Play, Calculator, Zap } from 'lucide-react'

export default function EditorialBanner({ onPlayShowreel, onOpenEstimator }) {
  return (
    <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 my-14">
      <div className="rounded-2xl overflow-hidden bg-brand-surface text-white grid grid-cols-1 lg:grid-cols-2 items-center min-h-[460px] shadow-2xl border border-brand-border">
        
        {/* Content Side */}
        <div className="p-8 sm:p-12 lg:p-16 z-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime font-mono text-[11px] font-bold tracking-widest uppercase mb-4 w-fit">
            <Zap size={12} className="fill-brand-lime" />
            <span>GROWTH ENGINEERED // ZERO VANITY METRICS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-[1.08] mb-5">
            CREATIVE THAT CONVERTS.<br />
            <span className="text-brand-lime">ZERO GENERALIST FLUFF.</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-lg mb-8">
            If your marketing agency promises 10X ROAS but hides behind vanity reports and refuses to show you the real ad account backend, they aren&apos;t performance marketers — they&apos;re storytellers. We build transparent media engines that deliver verified net profit.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button 
              onClick={onPlayShowreel}
              className="bg-brand-lime hover:bg-brand-limeDark text-black font-heading font-extrabold px-7 py-3.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-xl shadow-brand-lime/15 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Play size={14} className="fill-current" />
              <span>WATCH SHOWREEL</span>
            </button>
            <button 
              onClick={onOpenEstimator}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calculator size={14} />
              <span>PROJECT ESTIMATOR</span>
            </button>
          </div>
        </div>

        {/* Visual Side */}
        <div className="h-full min-h-[340px] lg:min-h-full relative overflow-hidden bg-brand-dark">
          <img 
            src="/assets/curated/hero_studio.jpg" 
            alt="Welurik Media Creative Studio" 
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono text-white/70">
            WELURIK PRODUCTION SUITE // NAGPUR
          </div>
        </div>

      </div>
    </section>
  )
}
