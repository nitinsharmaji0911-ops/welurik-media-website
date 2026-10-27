import React, { useState } from 'react'
import { 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Play, 
  BarChart3, 
  Code2, 
  TrendingUp, 
  Video, 
  Layers,
  Sparkles,
  PhoneCall
} from 'lucide-react'
import { PORTFOLIO_ITEMS, REELS_DATA } from '../data/portfolioData'
import { useNavigation } from '../context/NavigationContext'

export default function CaseStudiesPage({ setActiveReel, addToCart }) {
  const { navigate } = useNavigation()
  const [activeFilter, setActiveFilter] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'web', label: 'Web Development & CRO' },
    { id: 'marketing', label: 'Paid Ads & Marketing' },
    { id: 'video', label: 'Commercial Video & Reels' },
    { id: 'b2b', label: 'B2B & Industrial' },
  ]

  const filteredItems = PORTFOLIO_ITEMS.filter(item => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'web') return item.category === 'cro' || item.category === 'brand'
    if (activeFilter === 'marketing') return item.category === 'performance' || item.category === 'automation'
    if (activeFilter === 'video') return item.category === 'video'
    if (activeFilter === 'b2b') return item.id === 'proj-3' || item.category === 'automation'
    return true
  })

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#111111] pb-24">
      {/* 1. Header Hero */}
      <section className="bg-black text-white pt-16 pb-20 px-4 sm:px-8 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,184,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1450px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#00D2B8] text-[11px] font-bold uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={14} /> Proven Performance Dossier
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.1] mb-6">
            Engineered Results. <br />
            <span className="font-semibold text-white">Documented &amp; Verified.</span>
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl leading-relaxed mb-8">
            Explore how Welurik Media pairs bespoke web engineering with performance acquisition to generate millions in documented pipeline for D2C brands, industrial contractors, and creators.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00D2B8]">71.2M+</div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Ad Impressions Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">155K+</div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Verified Client Inquiries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00D2B8]">₹10.66</div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Avg Lead Acquisition Cost</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">4.8x</div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Blended Meta/Google ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="sticky top-14 sm:top-20 z-30 bg-white/90 backdrop-blur-md border-b border-zinc-200 py-3 px-4 sm:px-8">
        <div className="max-w-[1450px] mx-auto flex items-center justify-between overflow-x-auto gap-2 no-scrollbar">
          <div className="flex items-center gap-2">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap rounded-full transition-all ${
                  activeFilter === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline text-xs text-zinc-400 font-medium">
            Showing {filteredItems.length} Verified Engagements
          </span>
        </div>
      </section>

      {/* 3. Detailed Case Studies Grid */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 pt-12">
        <div className="space-y-12">
          {filteredItems.map((study, idx) => (
            <div 
              key={study.id} 
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Media Preview Column */}
              <div className="lg:col-span-5 relative bg-zinc-900 min-h-[280px] lg:min-h-full flex items-center justify-center overflow-hidden group">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {study.videoFile && (
                  <button
                    onClick={() => setActiveReel && setActiveReel({
                      title: study.title,
                      client: study.subtitle,
                      videoFile: study.videoFile,
                      views: study.metricNum
                    })}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#00D2B8] transition-all"
                    aria-label="Play commercial breakdown"
                  >
                    <Play size={24} className="fill-current ml-1" />
                  </button>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                    {study.categoryName}
                  </span>
                  <span className="font-bold text-[#00D2B8] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    {study.badge}
                  </span>
                </div>
              </div>

              {/* Case Study Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
                    <span>CASE STUDY #{String(idx + 1).padStart(2, '0')}</span>
                    <span>•</span>
                    <span className="text-zinc-900">{study.turnaround}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-6">
                    {study.subtitle}
                  </p>

                  {/* Impact Metric Highlighters */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200/80 mb-6">
                    <div>
                      <div className="text-xs text-zinc-500 font-medium">{study.metricLabel}</div>
                      <div className="text-xl sm:text-2xl font-black text-black">{study.metricNum}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-medium">Outcome Focus</div>
                      <div className="text-xl sm:text-2xl font-black text-[#00D2B8]">{study.metricSecond}</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-zinc-500 font-medium">Deployment Sprint</div>
                      <div className="text-sm font-bold text-zinc-800 mt-1">{study.turnaround}</div>
                    </div>
                  </div>

                  {/* Problem & Solution Accordion-style layout */}
                  <div className="space-y-3 mb-6 text-xs sm:text-sm">
                    <div className="p-3.5 bg-red-50/50 rounded-lg border border-red-100">
                      <span className="font-bold text-red-900 uppercase tracking-wider text-[11px] block mb-1">
                        The Challenge:
                      </span>
                      <p className="text-zinc-700 leading-relaxed">{study.problem}</p>
                    </div>

                    <div className="p-3.5 bg-emerald-50/50 rounded-lg border border-emerald-100">
                      <span className="font-bold text-emerald-900 uppercase tracking-wider text-[11px] block mb-1">
                        The Welurik Execution:
                      </span>
                      <p className="text-zinc-700 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Verified Results Bullets */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase font-bold tracking-wider text-zinc-400 mb-2">
                      Verified Client Outcomes:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2 text-xs text-zinc-800 font-medium">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/918421706305?text=Hello%20Welurik%20Media,%20I%20reviewed%20your%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20system."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                    >
                      <span>Inquire On WhatsApp</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  <span className="text-[11px] font-semibold text-zinc-400">
                    Client Retainer Active &bull; Managed by Welurik Media
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Commercial Reels Showreel Wall */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-20">
        <div className="p-8 sm:p-12 bg-black text-white rounded-3xl border border-zinc-800 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="text-[#00D2B8] text-xs font-bold uppercase tracking-widest block mb-2">
              Viral Commercial Video Suite
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Instant Watch Lightbox.
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Tap any commercial reel below to review our sensory cinematography, motion title cuts, and audio pacing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {REELS_DATA.map((reel) => (
              <div 
                key={reel.id}
                onClick={() => setActiveReel && setActiveReel(reel)}
                className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900 shadow-md hover:border-[#00D2B8] transition-all"
              >
                <img 
                  src={reel.previewImage} 
                  alt={reel.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#00D2B8] text-white group-hover:text-black flex items-center justify-center transition-all">
                    <Play size={20} className="fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] text-[#00D2B8] font-bold uppercase tracking-wider">{reel.views} Views</div>
                  <div className="text-xs font-bold truncate mt-0.5">{reel.client}</div>
                  <div className="text-[10px] text-zinc-400 truncate">{reel.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Conversion CTA */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-16 text-center">
        <div className="bg-white border border-zinc-200 p-8 sm:p-14 rounded-3xl shadow-sm">
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            Ready to Build Your Own Revenue Case Study?
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your acquisition bottlenecks or web platform needs. Our lead technical strategist will reply with a customized sprint blueprint within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Submit Project Brief
            </button>
            <a
              href="https://wa.me/918421706305?text=Hello%20Nitin,%20I%20want%20to%20discuss%20a%20new%20case%20study%20project%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center gap-2"
            >
              <PhoneCall size={16} />
              <span>Direct WhatsApp (+91 8421706305)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
