import React, { useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import TopCollections from '../components/TopCollections'
import PromoBanner from '../components/PromoBanner'
import EverydayEdit from '../components/EverydayEdit'
import FullCoverageEdit from '../components/FullCoverageEdit'
import ShopByType from '../components/ShopByType'
import GirliesMustHaves from '../components/GirliesMustHaves'
import GuaranteesPillars from '../components/GuaranteesPillars'
import { Send, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function HomePage({
  addToCart,
  toggleWishlist,
  wishlistIds,
  setQuickViewProduct,
  setActiveReel
}) {
  const [briefName, setBriefName] = useState('')
  const [briefBrand, setBriefBrand] = useState('')
  const [briefPhone, setBriefPhone] = useState('')
  const [briefService, setBriefService] = useState('Web Development & Platform')
  const [briefNotes, setBriefNotes] = useState('')
  const [briefSent, setBriefSent] = useState(false)

  const handleBriefSubmit = (e) => {
    e.preventDefault()
    const msg = `*NEW PROJECT INQUIRY — WELURIK MEDIA*
----------------------------------
👤 *Name:* ${briefName || 'Not specified'}
🏢 *Brand / Site:* ${briefBrand || 'Not specified'}
📱 *WhatsApp:* ${briefPhone || 'Not specified'}
🛠 *Service Required:* ${briefService}
📝 *Goals / Deliverables:*
${briefNotes || 'I would like to discuss my project scope.'}
----------------------------------
_Sent from Welurik Media Website_`

    const url = `https://wa.me/918421706305?text=${encodeURIComponent(msg)}`
    setBriefSent(true)
    window.open(url, '_blank')
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* 1. Hero Editorial Slider & Mobile Vertical Video */}
      <HeroSlider
        onExplore={() => scrollTo('featured-work')}
      />

      {/* 2. Core Disciplines / Services */}
      <TopCollections
        onSelectDiscipline={(colId) => {
          if (colId === 'web-development') {
            scrollTo('deliverables')
          } else if (colId === 'paid-ads') {
            scrollTo('turnkey-systems')
          } else {
            scrollTo('featured-work')
          }
        }}
        onPlayVideo={setActiveReel}
      />

      {/* 3. Editorial Promo Banner (Q4 Growth Sprints) */}
      <PromoBanner
        onCtaClick={(e) => {
          e.preventDefault()
          scrollTo('contact')
        }}
      />

      {/* 4. Featured Client Work (Carousel) */}
      <EverydayEdit
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        wishlistIds={wishlistIds}
        onQuickView={setQuickViewProduct}
      />

      {/* 5. Commercial Showreels (Video Carousel) */}
      <FullCoverageEdit
        onPlayVideo={setActiveReel}
      />

      {/* 6. Client Testimonials & Verified Outcome Marquee */}
      <ShopByType
        onSelectType={() => scrollTo('featured-work')}
      />

      {/* 7. Engineered Web Development Platforms Portfolio */}
      <GirliesMustHaves
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        wishlistIds={wishlistIds}
        onQuickView={setQuickViewProduct}
      />

      {/* 8. Agency Value Pillars & Guarantees */}
      <GuaranteesPillars />

      {/* 9. Direct Project Brief Desk (Single-Page In-Place Contact) */}
      <section id="contact" className="py-16 sm:py-24 bg-white border-t border-zinc-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FAF8F5] border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mb-1 text-center">
              Tell Us What You Want Built
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mb-6 text-center">
              Fill in the details below to dispatch your brief directly to our senior team on WhatsApp.
            </p>

              {briefSent && (
                <div className="mb-6 p-4 bg-emerald-100/70 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-emerald-900 text-xs sm:text-sm">
                  <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                  <span><strong>Inquiry dispatched!</strong> Check your WhatsApp window for the pre-formatted chat with our team.</span>
                </div>
              )}

              <form onSubmit={handleBriefSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={briefName}
                      onChange={(e) => setBriefName(e.target.value)}
                      placeholder="e.g. Ankit Sharma"
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Brand / Website *
                    </label>
                    <input
                      type="text"
                      required
                      value={briefBrand}
                      onChange={(e) => setBriefBrand(e.target.value)}
                      placeholder="e.g. brand.in"
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={briefPhone}
                      onChange={(e) => setBriefPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={briefService}
                      onChange={(e) => setBriefService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black"
                    >
                      <option>Web Development &amp; Custom Platform</option>
                      <option>Shopify Storefront &amp; CRO Funnel</option>
                      <option>Meta &amp; Google Ads Performance Scale</option>
                      <option>Viral 9:16 Video Production &amp; Reels</option>
                      <option>Complete Growth Retainer (Web + Ads)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Project Scope / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={briefNotes}
                    onChange={(e) => setBriefNotes(e.target.value)}
                    placeholder="Briefly describe what you want built or the metrics you want to scale..."
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Send Project Brief on WhatsApp</span>
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 mt-2">
                    <ShieldCheck size={12} />
                    <span>100% Confidential &bull; Direct Founder &amp; Media Lead Review</span>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </section>
    </>
  )
}
