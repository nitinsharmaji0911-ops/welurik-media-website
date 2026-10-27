import React from 'react'
import { X, Trash2, Layers, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react'

export default function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem
}) {
  if (!isOpen) return null

  const handleWhatsAppCheckout = () => {
    const itemsList = items.map((item, i) => `${i + 1}. *${item.title}* (${item.selectedSize || 'Selected Deliverable'})`).join('\n')
    const message = `👋 Hey Welurik Media team!\n\nI reviewed your portfolio and shortlisted these project scopes on your website:\n\n${itemsList}\n\nI would like to discuss deliverables, strategy, and execution timelines for my brand.`
    const url = `https://wa.me/918421706305?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white text-[#111111] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-200 bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Layers size={20} className="text-[#00D2B8]" />
            <h3 className="font-bold text-sm tracking-wider uppercase">
              PROJECT WORK SHORTLIST ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-zinc-500 hover:text-black hover:bg-zinc-200 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Agency Direct Channel Notice */}
        <div className="p-4 bg-zinc-900 text-white border-b border-zinc-800">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#00D2B8] font-bold uppercase tracking-wider text-[11px]">Direct Studio Concierge</span>
            <span className="text-zinc-400">&lt; 2-Hour Response</span>
          </div>
          <p className="text-xs text-zinc-300 mt-1">
            Shortlist the systems or case studies you want customized for your brand.
          </p>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-zinc-400">
              <Layers size={48} strokeWidth={1} className="mb-3 text-zinc-300" />
              <p className="text-sm font-medium text-zinc-600">Your scope shortlist is empty</p>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                Browse our featured client work, web platforms, and commercial showreels to assemble your brief.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-black transition"
              >
                EXPLORE WORK
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={`${item.id}-${item.selectedSize}-${index}`}
                className="flex gap-4 p-3.5 rounded-xl border border-zinc-200/80 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] transition"
              >
                {/* Thumb */}
                <img
                  src={item.img1}
                  alt={item.title}
                  className="w-16 h-20 object-cover rounded-lg border border-zinc-200 flex-shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] uppercase truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      Scope: <span className="font-semibold text-black">{item.selectedSize || 'Standard Deliverable'}</span>
                    </p>
                    <span className="inline-block text-[10px] font-bold text-[#009688] bg-[#00D2B8]/15 px-2 py-0.5 rounded-full mt-1">
                      Ready for Customization
                    </span>
                  </div>

                  <div className="flex items-center justify-end mt-2 pt-1.5 border-t border-zinc-200/50">
                    <button
                      onClick={() => onRemoveItem && onRemoveItem(index)}
                      className="text-zinc-400 hover:text-rose-500 transition text-xs flex items-center gap-1"
                      title="Remove item"
                    >
                      <Trash2 size={13} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / WhatsApp Brief Submission (NO PRICES) */}
        {items.length > 0 && (
          <div className="p-5 border-t border-zinc-200 bg-[#FAF8F5] space-y-3">
            <div className="flex justify-between items-center text-xs text-zinc-600">
              <span>Selected Deliverables:</span>
              <span className="font-bold text-sm text-zinc-900">
                {items.length} Project Scopes
              </span>
            </div>

            <p className="text-[11px] text-zinc-500 leading-tight">
              Submit your shortlist to our WhatsApp desk. Our senior technical director will review your requirements immediately.
            </p>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-black text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <PhoneCall size={16} />
              <span>DISCUSS SCOPE ON WHATSAPP</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
