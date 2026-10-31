import React from 'react'
import { WELURIK_DATA } from '../data/welurikMediaData'

export default function AnnouncementBar() {
  const services = [
    { title: "VIDEO EDITING", detail: "MOTION & VFX CUTS", href: "#top-collections" },
    { title: "CONTENT CREATION", detail: "VIRAL 9:16 REELS & UGC", href: "#top-collections" },
    { title: "PAID ADS", detail: "META & GOOGLE SCALE", href: "#featured-work" },
    { title: "WEB DEVELOPMENT", detail: "CUSTOM & SHOPIFY CRO", href: "#deliverables" },
    { title: "GRAPHIC DESIGNING", detail: "BRAND IDENTITY & CREATIVES", href: "#featured-work" }
  ]

  // Duplicate for seamless 50% translation loop
  const loopItems = [...services, ...services, ...services, ...services]

  const handleScrollToServices = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href || '#services')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white border-b border-[#E8E3DC] text-[#111111] text-[11px] sm:text-[12px] font-medium tracking-widest uppercase overflow-hidden py-2.5 select-none relative z-40 group">
      <div 
        className="flex animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animationDuration: '6s' }}
      >
        {loopItems.map((service, idx) => (
          <div key={idx} className="flex items-center mx-5 sm:mx-8">
            <a
              href={service.href || "#services"}
              onClick={(e) => handleScrollToServices(e, service.href)}
              className="flex items-center gap-1.5 hover:text-[#00D2B8] transition-colors cursor-pointer"
            >
              <span className="font-bold tracking-widest">{service.title}</span>
              <span className="text-zinc-500 font-normal tracking-wider text-[10px] sm:text-[11px]">
                • {service.detail}
              </span>
            </a>
            <span className="ml-5 sm:ml-8 text-[#00D2B8] text-xs sm:text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

