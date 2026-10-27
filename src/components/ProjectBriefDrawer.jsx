import React, { useState } from 'react'
import { X, Trash2, Send, FileText, Briefcase, Zap, CheckCircle } from 'lucide-react'

export default function ProjectBriefDrawer({ isOpen, onClose, briefItems, onRemoveItem }) {
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  // Direct WhatsApp submission (Zero-Hustle)
  const handleWhatsAppSend = () => {
    if (briefItems.length === 0) {
      alert('Please add at least one case study, deliverable, or retainer to your brief!')
      return
    }

    const itemsText = briefItems
      .map((item, i) => `${i + 1}. ${item.title || item.name} (${item.category || item.categoryName || 'Module'})`)
      .join('\n')

    const message = `👋 Hey Welurik Media Team!

I reviewed your live portfolio website and want to explore onboarding for *${brand || 'My Brand'}*.

*Selected Scope & Deliverables:*
${itemsText}

*Contact Details:*
• Name: ${name || 'Founder'}
${phone ? `• WhatsApp / Phone: ${phone}` : ''}

Looking forward to reviewing your team's tactical scope and onboarding schedule!`

    const url = `https://wa.me/918421706305?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  // Submit to Node.js Backend API
  const handleSubmitBackend = async (e) => {
    e.preventDefault()
    if (!name || !phone) {
      alert('Please enter your Name and WhatsApp / Phone number.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          brand,
          phone,
          selectedItems: briefItems
        })
      })

      const data = await res.json()
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert(data.error || 'Submission failed. Please try again or WhatsApp us directly.')
      }
    } catch (err) {
      console.warn('Backend offline, using direct WhatsApp routing fallback:', err)
      handleWhatsAppSend()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      ></div>

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-brand-surface text-white h-full shadow-2xl flex flex-col z-10 border-l border-brand-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-brand-border flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <h3 className="font-heading text-sm font-extrabold tracking-widest uppercase text-white">
                YOUR PROJECT BRIEF
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 mt-0.5 block">
              Direct scope builder • 1-click consultation
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          
          {submitted ? (
            <div className="p-6 text-center my-auto flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand-lime/15 border border-brand-lime/40 text-brand-lime flex items-center justify-center mb-4">
                <CheckCircle size={28} />
              </div>
              <h4 className="font-heading text-lg font-black uppercase mb-2 text-white">
                BRIEF SUBMITTED!
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-6 font-normal">
                Thank you, {name}! Your brief with {briefItems.length} selected modules has been logged. We will reach out within 30 minutes with NDA and scope breakdown.
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-xl text-xs font-heading font-extrabold tracking-wider uppercase flex items-center gap-2 shadow-lg"
              >
                <Send size={15} />
                <span>OPEN IN WHATSAPP NOW</span>
              </button>
            </div>
          ) : briefItems.length === 0 ? (
            <div className="p-8 text-center my-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-white/40 mb-4">
                <Briefcase size={26} className="text-brand-lime" />
              </div>
              <p className="font-heading font-extrabold text-sm uppercase tracking-wide text-white">
                YOUR BRIEF IS EMPTY
              </p>
              <p className="text-xs text-white/50 mt-1 max-w-xs leading-relaxed font-normal">
                Browse our case studies, video reels, or monthly retainers and click <strong>&quot;＋ ADD BRIEF&quot;</strong> to assemble your custom scope without any hustle!
              </p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex flex-col gap-2.5">
                <div className="text-[10px] font-mono text-brand-lime uppercase tracking-wider font-semibold">
                  SELECTED DELIVERABLES ({briefItems.length}):
                </div>
                {briefItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-borderBright transition-colors"
                  >
                    <div className="flex flex-col pr-2">
                      <span className="font-heading font-bold text-xs leading-snug text-white">
                        {item.title || item.name}
                      </span>
                      <span className="text-[10px] font-mono text-brand-lime uppercase tracking-wider mt-0.5">
                        {item.category || item.categoryName || 'Tactical Module'} • {item.turnaround || 'Standard Deployment'}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-white/40 hover:text-red-400 p-1.5 transition-colors"
                      title="Remove from brief"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmitBackend} className="mt-4 flex flex-col gap-3.5 pt-4 border-t border-brand-border">
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  FOUNDER / CLIENT CONTACT:
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium uppercase tracking-wider mb-1 text-white/70">
                    Your Name / Title
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ketan / Founder"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-lime font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-medium uppercase tracking-wider mb-1 text-white/70">
                    Brand or Website URL
                  </label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. Apex E-Commerce / mybrand.in"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-lime font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-medium uppercase tracking-wider mb-1 text-white/70">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-lime font-mono"
                  />
                </div>
              </form>
            </>
          )}

        </div>

        {/* Footer Actions */}
        {briefItems.length > 0 && !submitted && (
          <div className="p-6 border-t border-brand-border bg-brand-dark flex flex-col gap-2.5">
            <button
              onClick={handleWhatsAppSend}
              className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Send size={15} />
              <span>SEND BRIEF VIA WHATSAPP (INSTANT)</span>
            </button>

            <button
              onClick={handleSubmitBackend}
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-brand-lime hover:bg-brand-limeDark text-black font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <FileText size={15} />
              <span>{loading ? 'LOGGING BRIEF...' : 'REQUEST FORMAL SCOPE & NDA'}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
