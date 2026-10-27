import React, { useState } from 'react'
import { 
  Send, 
  PhoneCall, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Logo from '../components/Logo'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    phone: '',
    service: 'Web Development & Custom Platform',
    budget: '₹50,000 - ₹1,00,000',
    timeline: 'Immediate (Within 2 Weeks)',
    scope: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const servicesList = [
    'Web Development & Custom Platform',
    'Shopify Storefront & CRO Funnel',
    'Meta & Google Ads Growth Retainer',
    'Commercial Video Production & 9:16 Reels',
    'Full-Funnel Growth Architecture (Web + Ads)',
    'Ad Account & Performance Audit'
  ]

  const budgetOptions = [
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹3,00,000',
    '₹3,00,000+ Enterprise'
  ]

  const timelineOptions = [
    'Immediate (Within 2 Weeks)',
    'This Month (2 - 4 Weeks)',
    'Planning Ahead (Q3 / Q4)'
  ]

  const faqs = [
    {
      q: 'How fast can Welurik Media deploy a live web platform or ad campaign?',
      a: 'We operate on agile 48-hour sprints. For landing pages and audit reports, deployment happens in 48-72 hours. For full custom platforms (like React/Shopify setups), turnaround is typically 10 to 14 days with continuous staging access.'
    },
    {
      q: 'Who owns the codebase, domain, and ad accounts?',
      a: 'You own 100% of your assets. We set up all Meta Pixels, Google Ads accounts, GitHub repositories, and server hosting under your company credentials. No agency hostage games.'
    },
    {
      q: 'What is the payment milestone structure?',
      a: 'For one-off development sprints, we work on 50% initial commitment upon agreement signing, and 50% upon verified staging completion and handover. Monthly retainers are billed at the start of each 30-day growth cycle.'
    },
    {
      q: 'Can we visit your physical production studio in Nagpur?',
      a: 'Yes! Our creative lab and color grading suite in Nagpur, Maharashtra welcomes brand founders by appointment. Alternatively, 90% of our enterprise clients work with us seamlessly across WhatsApp and Google Meet.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct rich formatted WhatsApp message
    const waText = `*NEW PROJECT BRIEF FOR WELURIK MEDIA*
---------------------------------------
👤 *Client Name:* ${formData.name || 'Not provided'}
🏢 *Brand / Domain:* ${formData.brand || 'Not provided'}
📱 *Phone / WhatsApp:* ${formData.phone || 'Not provided'}
🛠 *Service Required:* ${formData.service}
💰 *Target Budget:* ${formData.budget}
⏳ *Timeline:* ${formData.timeline}
📝 *Project Scope / Goals:*
${formData.scope || 'Looking to discuss growth options.'}
---------------------------------------
_Sent via Welurik Media Brief Builder_`

    const waUrl = `https://wa.me/918421706305?text=${encodeURIComponent(waText)}`
    
    setIsSubmitted(true)
    window.open(waUrl, '_blank')
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#111111] pb-24">
      {/* 1. Hero Header */}
      <section className="bg-black text-white pt-16 pb-20 px-4 sm:px-8 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,184,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1450px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#00D2B8] text-[11px] font-bold uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={14} /> Direct Agency Brief Desk
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.1] mb-6">
            Initiate a Project. <br />
            <span className="font-semibold text-white">Direct Line to Our Leadership.</span>
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl leading-relaxed mb-8">
            Tell us about your acquisition hurdles or engineering specifications. Our lead technical strategist will review your brief and respond within 2 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-300">
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <Clock size={14} className="text-[#00D2B8]" /> &lt; 2-Hour Response Time
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <PhoneCall size={14} className="text-[#00D2B8]" /> WhatsApp Direct (+91 8421706305)
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <MapPin size={14} className="text-[#00D2B8]" /> Nagpur Studio, Maharashtra
            </span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Project Brief Builder & Info Column */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form: Brief Submission */}
          <div className="lg:col-span-8 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="border-b border-zinc-100 pb-6 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Project Scope &amp; Growth Objectives
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Fill in the details below. This will pre-format a comprehensive brief sent directly to our lead developer &amp; media buyer on WhatsApp.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span>
                  <strong>Brief sent!</strong> Your inquiry has been routed to our WhatsApp desk. We will review your project requirements and follow up immediately.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  1. Which capability does your brand require?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData(p => ({ ...p, service: srv }))}
                      className={`p-3 text-left text-xs font-semibold rounded-xl border transition-all ${
                        formData.service === srv
                          ? 'border-black bg-black text-white shadow-sm'
                          : 'border-zinc-200 bg-[#FAF8F5] text-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Budget */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  2. Anticipated Investment Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((bgt) => (
                    <button
                      type="button"
                      key={bgt}
                      onClick={() => setFormData(p => ({ ...p, budget: bgt }))}
                      className={`p-2.5 text-center text-xs font-semibold rounded-xl border transition-all ${
                        formData.budget === bgt
                          ? 'border-black bg-black text-white'
                          : 'border-zinc-200 bg-[#FAF8F5] text-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      {bgt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  3. Deployment Speed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {timelineOptions.map((tml) => (
                    <button
                      type="button"
                      key={tml}
                      onClick={() => setFormData(p => ({ ...p, timeline: tml }))}
                      className={`p-2.5 text-center text-xs font-semibold rounded-xl border transition-all ${
                        formData.timeline === tml
                          ? 'border-black bg-black text-white'
                          : 'border-zinc-200 bg-[#FAF8F5] text-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      {tml}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Brand Name / Website URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData(p => ({ ...p, brand: e.target.value }))}
                    placeholder="e.g. Acme Solar / acme.in"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Brief Overview of What You Want Built or Scaled
                </label>
                <textarea
                  rows={4}
                  value={formData.scope}
                  onChange={(e) => setFormData(p => ({ ...p, scope: e.target.value }))}
                  placeholder="Outline your current bottlenecks: e.g. need a high-converting Shopify store with WhatsApp OTP, or want to scale Meta Ads from ₹50k to ₹5L/mo."
                  className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Submit Brief Directly to WhatsApp Desk</span>
                </button>
                <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                  🔒 Strictly confidential. 100% NDA protected. We never share client briefs with third parties.
                </p>
              </div>

            </form>
          </div>

          {/* Right Info Column: Studio Direct Details */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct WhatsApp Callout */}
            <div className="bg-emerald-600 text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Prefer an Immediate Direct Chat?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Skip the questionnaire. Click below to start a live WhatsApp session with Nitin Sharma and our senior creative media team.
              </p>
              <a
                href="https://wa.me/918421706305?text=Hello%20Nitin,%20I%20want%20to%20discuss%20a%20project%20brief%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="block text-center py-3 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Chat on WhatsApp (+91 8421706305)
              </a>
            </div>

            {/* Studio Headquarters */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-[#00D2B8] flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Welurik Production Lab</h4>
                  <p className="text-xs text-zinc-500">Nagpur HQ, Maharashtra, India</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-100 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-800">Operating Hours:</span>
                  <span>10:00 AM – 8:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-800">Response SLA:</span>
                  <span className="text-emerald-600 font-bold">&lt; 120 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-800">Sprint Delivery:</span>
                  <span>Pan-India &amp; Global</span>
                </div>
              </div>
            </div>

            {/* Agency Standards Recap */}
            <div className="bg-[#FAF8F5] border border-zinc-200/80 rounded-3xl p-6 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Studio Guarantees
              </span>
              <ul className="space-y-2 text-xs text-zinc-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>100% IP &amp; Codebase Client Retained</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Transparent Direct Ad Account Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Direct WhatsApp Channel with Dev Lead</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Agency FAQ Accordion */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              Clear Expectations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-zinc-900 hover:text-black"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-zinc-400 shrink-0" /> : <ChevronDown size={18} className="text-zinc-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
