import React from 'react'
import { Zap, ShieldCheck, Headphones, Award } from 'lucide-react'

export default function GuaranteesPillars() {
  const pillars = [
    {
      icon: Zap,
      title: '48-HOUR SPRINT DISPATCH',
      desc: 'Rapid creative iteration with first video drafts delivered in 48-72h'
    },
    {
      icon: ShieldCheck,
      title: 'TRANSPARENT AD SPEND',
      desc: 'You own 100% of ad accounts, pixel data, and creative IP'
    },
    {
      icon: Headphones,
      title: 'DEDICATED GROWTH LEAD',
      desc: 'Direct Slack & WhatsApp group with your senior media buying team'
    },
    {
      icon: Award,
      title: 'PERFORMANCE STANDARDS',
      desc: 'Cinema-grade Sony FX camera line & verified ROAS attribution'
    }
  ]

  return (
    <section className="py-10 sm:py-16 bg-[#FAF8F5] border-t border-[#E8E3DC]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8 text-center">
        
        {/* Top Link */}
        <div className="mb-10 sm:mb-12">
          <a
            href="https://wa.me/918421706305?text=Hi%20Welurik%20Media,%20I%20would%20like%20to%20schedule%20a%20strategy%20call%20for%20my%20brand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] text-[#111111] uppercase underline underline-offset-8 decoration-1 hover:text-[#00D2B8] transition-colors"
          >
            SCHEDULE A STRATEGY CALL
          </a>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center px-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-zinc-900 mb-3">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#111111] uppercase mb-1">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 max-w-[200px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
