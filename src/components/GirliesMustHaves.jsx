import React, { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, ArrowRight, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const PORTFOLIO_SITES = [
  {
    id: "voe-properties",
    title: "Vision of Excellence Dubai Luxury Realty",
    category: "Ultra-Luxury Real Estate & Advisory",
    url: "https://voeproperties.com/",
    domain: "voeproperties.com",
    coverImg: "/images/websites/voeproperties_widescreen.jpg",
    metricValue: "AED 165M+",
    metricLabel: "Trophy Portfolio Placements",
    techStack: ["Next.js / Canvas", "Yield Simulator", "Private Placement"],
    badge: "LUXURY REAL ESTATE",
    description: "Dubai luxury advisory portal engineered with scroll-driven cinematic visuals, interactive net yield simulator, and discreet off-market placement desk."
  },
  {
    id: "sm-engineering",
    title: "SM Solar EPC & Industrial CleanTech",
    category: "Commercial B2B & Solar EPC",
    url: "https://smengineeringchandrapur.in/",
    domain: "smengineeringchandrapur.in",
    coverImg: "/images/websites/smengineering_widescreen.webp",
    metricValue: "₹1.8Cr+",
    metricLabel: "B2B Contract Pipeline",
    techStack: ["Vite React", "3D Interactive", "Lead CRM"],
    badge: "CLEANTECH B2B",
    description: "Turnkey digital platform with solar ROI calculator, net metering workflows, and automated industrial enquiry routing."
  },
  {
    id: "export-easy-hai",
    title: "Export Easy Hai Global Portal",
    category: "EdTech & Global Trade Platform",
    url: "https://export-easy-hai.vercel.app/",
    domain: "export-easy-hai.vercel.app",
    coverImg: "/images/websites/exporteasyhai_widescreen.webp",
    metricValue: "155K+",
    metricLabel: "Qualified B2B Leads",
    techStack: ["Next.js", "Webinar Engine", "Razorpay"],
    badge: "EDTECH & TRADE",
    description: "High-ticket webinar acquisition funnel, automated lead verification, and multi-tier checkout infrastructure."
  },
  {
    id: "zorodoor-streetwear",
    title: "Zorodoor Luxury Streetwear",
    category: "Haute Streetwear E-Commerce",
    url: "https://zorodoor.vercel.app/",
    domain: "zorodoor.vercel.app",
    coverImg: "/images/websites/zorodoor_widescreen.webp",
    metricValue: "< 0.8s",
    metricLabel: "Global TTFB Load Speed",
    techStack: ["Next.js 15", "Supabase DB", "Tailwind CSS"],
    badge: "D2C APPAREL",
    description: "Sub-second server components, live inventory sync, and mobile-first lookbook checkout for high-velocity drops."
  },
  {
    id: "maps-studio",
    title: "M.A.P.S Sculpture Studio",
    category: "Contemporary Art & Fine Sculptures",
    url: "https://maps-woad-ten.vercel.app/#home",
    domain: "maps-woad-ten.vercel.app",
    coverImg: "/images/websites/maps_widescreen.webp",
    metricValue: "Global",
    metricLabel: "Collectors In 6 Countries",
    techStack: ["Editorial Layout", "Virtual Gallery", "Private RFP"],
    badge: "FINE ART STUDIO",
    description: "Immersive architectural portfolio crafted for high-net-worth private art collectors and international luxury exhibitions."
  },
  {
    id: "das-dental",
    title: "Das Dental Advanced Clinic",
    category: "Healthcare & Patient Acquisition",
    url: "https://www.dasdentalclinic.com/",
    domain: "dasdentalclinic.com",
    coverImg: "/images/websites/dasdental_widescreen.webp",
    metricValue: "5.0 ★",
    metricLabel: "Verified Patient Rating",
    techStack: ["Instant Booking", "WhatsApp API", "Doctor CMS"],
    badge: "HEALTHCARE",
    description: "Automated dental appointment acquisition funnel with frictionless WhatsApp confirmation and doctor consultation routing."
  },
  {
    id: "calibers-nova",
    title: "Caliber's Nova Academy",
    category: "EdTech & Admissions Funnel",
    url: "https://nova-mu-liart.vercel.app/#",
    domain: "nova-mu-liart.vercel.app",
    coverImg: "/images/websites/nova_widescreen.webp",
    metricValue: "19+ Yrs",
    metricLabel: "Trusted Academic Legacy",
    techStack: ["Admissions Portal", "Course Modules", "Scholarship Test"],
    badge: "ACADEMIC EDTECH",
    description: "High-retention student enrollment platform with integrated syllabus preview and automated entrance test registration."
  },
  {
    id: "reviewpilot",
    title: "ReviewPilot AI Reputation Engine",
    category: "AI SaaS & Review Automation",
    url: "https://review.welurik.com/",
    domain: "review.welurik.com",
    coverImg: "/images/websites/reviewpilot_widescreen.webp",
    metricValue: "4.9x",
    metricLabel: "Review Volume Multiplier",
    techStack: ["React 19", "FastAPI", "Google Places API"],
    badge: "SAAS PLATFORM",
    description: "AI-powered reputation automation engine that filters negative feedback and accelerates 5-star Google review velocity."
  }
]

export default function GirliesMustHaves() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchDelta, setTouchDelta] = useState(0)

  const filteredSites = PORTFOLIO_SITES

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % filteredSites.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredSites.length) % filteredSites.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filteredSites.length])

  // Smooth Autoplay (5.5s interval, automatically paused on hover or user interaction)
  useEffect(() => {
    if (isPaused || filteredSites.length <= 1) return
    const timer = setInterval(() => {
      next()
    }, 5500)
    return () => clearInterval(timer)
  }, [activeIndex, isPaused, filteredSites.length])

  // Mobile Touch Handlers
  const handleTouchStart = (e) => {
    setIsPaused(true)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchDelta(0)
  }

  const handleTouchMove = (e) => {
    if (touchStart !== null) {
      setTouchDelta(e.targetTouches[0].clientX - touchStart)
    }
  }

  const handleTouchEnd = () => {
    if (touchDelta > 45) {
      prev()
    } else if (touchDelta < -45) {
      next()
    }
    setTouchStart(null)
    setTouchDelta(0)
    setTimeout(() => setIsPaused(false), 2000)
  }

  // Compute slide position for luxury 3-card peek stage
  const getSlideStyle = (index) => {
    const total = filteredSites.length
    let offset = (index - activeIndex + total) % total
    if (offset > total / 2) offset -= total

    if (Math.abs(offset) > 1) {
      return {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none'
      }
    }

    const isCenter = offset === 0
    // Responsive percentage translation
    const translateX = offset * 92
    const scale = isCenter ? 1 : 0.88
    const opacity = isCenter ? 1 : 0.4
    const zIndex = isCenter ? 30 : 10

    return {
      transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease, box-shadow 400ms ease',
      cursor: isCenter ? 'default' : 'pointer'
    }
  }

  return (
    <section id="deliverables" className="scroll-mt-16 py-14 sm:py-20 bg-[#FAF8F5] text-[#111111] border-t border-zinc-200/70 select-none overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[11px] font-mono font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles size={12} className="text-zinc-500" />
            <span>ENGINEERED DIGITAL PLATFORMS</span>
          </div>

          <h2 className="font-bold tracking-[0.25em] text-base sm:text-xl md:text-2xl text-black uppercase text-center mb-3">
            WEB DEVELOPMENT PORTFOLIO
          </h2>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-xl text-center leading-relaxed">
            Bespoke web applications, high-converting Shopify storefronts, and conversion-engineered digital platforms.
          </p>


        </div>

        {/* Carousel Stage (Exact Aesthetic Match to EverydayEdit & FullCoverageEdit) */}
        <div
          className="relative w-full max-w-[1100px] mx-auto h-[460px] sm:h-[540px] md:h-[600px] lg:h-[640px] flex items-center justify-center my-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Side Desktop Chevron - Left */}
          <button
            onClick={prev}
            aria-label="Previous platform"
            className="hidden sm:flex absolute left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 border border-zinc-200 shadow-[0_6px_20px_rgba(0,0,0,0.08)] items-center justify-center text-zinc-700 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Side Desktop Chevron - Right */}
          <button
            onClick={next}
            aria-label="Next platform"
            className="hidden sm:flex absolute right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 border border-zinc-200 shadow-[0_6px_20px_rgba(0,0,0,0.08)] items-center justify-center text-zinc-700 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight size={22} />
          </button>

          {/* Animated 3D Peek Carousel Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {filteredSites.map((site, idx) => {
              const total = filteredSites.length
              let offset = (idx - activeIndex + total) % total
              if (offset > total / 2) offset -= total
              const isCenter = offset === 0

              return (
                <div
                  key={site.id}
                  style={getSlideStyle(idx)}
                  onClick={() => {
                    if (offset === -1) prev()
                    else if (offset === 1) next()
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-[92vw] sm:w-[560px] md:w-[680px] lg:w-[760px] bg-white rounded-2xl border ${
                    isCenter ? 'border-zinc-300 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.18)]' : 'border-zinc-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
                  } flex flex-col overflow-hidden will-change-transform`}
                >
                  {/* Top Luxury Browser Chrome */}
                  <div className="h-10 bg-[#FBFBFA] px-4 flex items-center justify-between border-b border-zinc-200/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 inline-block" />
                    </div>

                    {/* Live Domain Pill */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-[11px] font-mono text-zinc-700 shadow-xs max-w-[210px] sm:max-w-xs truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                      <span className="text-zinc-400 font-light hidden sm:inline">https://</span>
                      <span className="text-zinc-900 font-semibold truncate">{site.domain}</span>
                    </div>

                    {/* Live Visit Action */}
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault()
                          if (offset === -1) prev()
                          else if (offset === 1) next()
                        }
                      }}
                      className="flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider text-zinc-500 hover:text-black transition-colors"
                    >
                      <span className="hidden sm:inline">VISIT</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  {/* Widescreen Preview Viewport */}
                  <div 
                    onClick={() => {
                      if (isCenter) window.open(site.url, '_blank')
                    }}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 group cursor-pointer"
                  >
                    <img
                      src={site.coverImg}
                      alt={site.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Hover Overlay with Action Pill */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <span className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all">
                          <span>EXPLORE LIVE PLATFORM</span>
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Meta & Impact Metrics */}
                  <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                          {site.badge}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {site.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="hidden md:inline-block text-[10px] font-mono text-zinc-500 border border-zinc-200 px-1.5 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-base sm:text-xl font-bold text-black tracking-tight mb-1">
                        {site.title}
                      </h3>

                      <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                        {site.description}
                      </p>
                    </div>

                    {/* Key Metric Divider & Direct Link */}
                    <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-100 flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-2xl font-black text-black tracking-tight">
                          {site.metricValue}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-medium">
                          {site.metricLabel}
                        </span>
                      </div>

                      <button
                        onClick={() => window.open(site.url, '_blank')}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-black hover:text-zinc-600 transition-colors"
                      >
                        <span>LAUNCH</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Carousel Pagination & Indicator Controls */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
          <button
            onClick={prev}
            className="sm:hidden p-2 rounded-full bg-white border border-zinc-200 text-zinc-600 active:scale-95 shadow-xs"
            aria-label="Previous platform"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5">
            {filteredSites.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to platform ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-7 h-2 bg-black'
                    : 'w-2 h-2 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>

          <span className="text-[11px] font-mono text-zinc-500 font-bold ml-1">
            0{activeIndex + 1} / 0{filteredSites.length}
          </span>

          <button
            onClick={next}
            className="sm:hidden p-2 rounded-full bg-white border border-zinc-200 text-zinc-600 active:scale-95 shadow-xs"
            aria-label="Next platform"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Direct CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I%20reviewed%20your%20web%20platforms%20and%20want%20to%20engineer%20a%20custom%20high-converting%20website."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 rounded-full bg-black hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-all shadow-md hover:scale-[1.02] active:scale-95"
          >
            <span>COMMISSION A CUSTOM WEB PLATFORM</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
