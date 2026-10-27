import React, { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const PORTFOLIO_SITES = [
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
    url: "https://www.zorodoor.store/",
    domain: "zorodoor.store",
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
  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const filterOptions = [
    { id: 'all', label: 'ALL PLATFORMS (7)' },
    { id: 'b2b', label: 'COMMERCIAL B2B (2)' },
    { id: 'd2c', label: 'LUXURY & D2C (2)' },
    { id: 'saas', label: 'SAAS & EDTECH (3)' }
  ]

  const filteredSites = PORTFOLIO_SITES.filter(site => {
    if (filter === 'all') return true
    if (filter === 'b2b') return site.badge.includes('B2B') || site.badge.includes('HEALTHCARE')
    if (filter === 'd2c') return site.badge.includes('D2C') || site.badge.includes('FINE ART')
    if (filter === 'saas') return site.badge.includes('SAAS') || site.badge.includes('EDTECH') || site.badge.includes('ACADEMIC')
    return true
  })

  // Reset scroll when filter changes
  useEffect(() => {
    setActiveIndex(0)
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [filter])

  // Track scroll position for active indicator
  const handleScroll = () => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const scrollLeft = container.scrollLeft
    const cards = container.getElementsByClassName('portfolio-card')
    if (cards.length === 0) return

    const cardWidth = cards[0].offsetWidth + 24 // card width + gap
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(Math.max(0, index), filteredSites.length - 1))
  }

  const scrollPrev = () => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const cards = container.getElementsByClassName('portfolio-card')
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 24 : 500
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  }

  const scrollNext = () => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const cards = container.getElementsByClassName('portfolio-card')
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 24 : 500
    container.scrollBy({ left: cardWidth, behavior: 'smooth' })
  }

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const cards = container.getElementsByClassName('portfolio-card')
    if (cards.length > index) {
      const cardWidth = cards[0].offsetWidth + 24
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
      setActiveIndex(index)
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
          

        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          
          {/* Side Chevron - Left (Desktop) */}
          <button
            onClick={scrollPrev}
            aria-label="Previous websites"
            className="hidden sm:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 border border-zinc-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.08)] items-center justify-center text-zinc-700 hover:text-black hover:bg-white hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Side Chevron - Right (Desktop) */}
          <button
            onClick={scrollNext}
            aria-label="Next websites"
            className="hidden sm:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 border border-zinc-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.08)] items-center justify-center text-zinc-700 hover:text-black hover:bg-white hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronRight size={22} />
          </button>

          {/* Horizontal Carousel Track: Snap, Smooth, Hardware Accelerated */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-1 sm:px-2 py-4"
          >
            {filteredSites.map((site) => (
              <div
                key={site.id}
                onClick={() => window.open(site.url, '_blank')}
                className="portfolio-card w-[86vw] sm:w-[540px] md:w-[620px] lg:w-[680px] flex-shrink-0 snap-center group bg-white rounded-2xl border border-zinc-200/90 hover:border-black shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                {/* Minimalist Top Browser Chrome */}
                <div className="h-10 bg-[#FBFBFA] px-4 flex items-center justify-between border-b border-zinc-200/70">
                  {/* Subtle Monochrome Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-zinc-400 transition-colors inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 inline-block" />
                  </div>

                  {/* Clean URL Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-[11px] font-mono text-zinc-600 shadow-xs max-w-[210px] sm:max-w-xs truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    <span className="text-zinc-400 font-light hidden sm:inline">https://</span>
                    <span className="text-zinc-800 font-medium truncate">{site.domain}</span>
                  </div>

                  {/* Live Link Badge */}
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider text-zinc-400 group-hover:text-black transition-colors">
                    <span className="hidden sm:inline">VISIT</span>
                    <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Website Desktop Preview Viewport */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={site.coverImg}
                    alt={site.title}
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Elegant Hover Action Overlay */}
                  <div className="absolute inset-0 bg-black/25 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <span>EXPLORE LIVE PLATFORM</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Card Meta & Impact Statistics */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <div className="mb-1.5">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-500">
                        {site.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-zinc-800 transition-colors">
                      {site.title}
                    </h3>
                  </div>

                  {/* Key Metric Divider */}
                  <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                    {/* Key Metric Callout */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-black tracking-tight">
                        {site.metricValue}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-medium">
                        {site.metricLabel}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots & Mobile Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="sm:hidden p-2 rounded-full bg-white border border-zinc-200 text-zinc-600 active:scale-95 shadow-xs"
            aria-label="Previous website"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5">
            {filteredSites.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to website ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-7 h-2 bg-black'
                    : 'w-2 h-2 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>

          <span className="text-[11px] font-mono text-zinc-500 font-medium ml-1">
            0{activeIndex + 1} / 0{filteredSites.length}
          </span>

          <button
            onClick={scrollNext}
            className="sm:hidden p-2 rounded-full bg-white border border-zinc-200 text-zinc-600 active:scale-95 shadow-xs"
            aria-label="Next website"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-10 sm:mt-14">
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
