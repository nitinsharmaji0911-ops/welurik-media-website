import React, { useState } from 'react'
import { X, Check, Heart, ShoppingBag, ShieldCheck } from 'lucide-react'

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false
}) {
  if (!product) return null

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard Scope'
  )
  const [activeImg, setActiveImg] = useState(product.img1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, selectedSize)
      setAdded(true)
      setTimeout(() => setAdded(false), 2500)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white text-[#111111] rounded-[10px] shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center shadow transition"
        >
          <X size={20} />
        </button>

        {/* Left: Visual Asset */}
        <div className="w-full md:w-1/2 bg-zinc-100 p-4 flex flex-col items-center justify-center">
          <div className="relative aspect-[3/4] w-full rounded-[6px] overflow-hidden bg-white shadow-sm border border-zinc-200">
            <img
              src={activeImg}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {product.img2 && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setActiveImg(product.img1)}
                className={`w-12 h-14 rounded overflow-hidden border-2 transition ${
                  activeImg === product.img1 ? 'border-black' : 'border-transparent opacity-70'
                }`}
              >
                <img src={product.img1} alt="Thumb 1" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImg(product.img2)}
                className={`w-12 h-14 rounded overflow-hidden border-2 transition ${
                  activeImg === product.img2 ? 'border-black' : 'border-transparent opacity-70'
                }`}
              >
                <img src={product.img2} alt="Thumb 2" className="w-full h-full object-cover" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Details & Scope Selection */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-700">
                {product.tag || 'Performance Creative ⚡'}
              </span>
              <h2 className="text-xl font-serif uppercase tracking-wider text-black mt-1">
                {product.title}
              </h2>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                {product.metric && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {product.metric}
                  </span>
                )}
                {product.category && (
                  <span className="text-xs text-zinc-500 font-medium">
                    {product.category}
                  </span>
                )}
              </div>
            </div>

            {/* Scope / Deliverable Details */}
            {product.fabric && (
              <div className="text-xs text-zinc-600 bg-[#FAF8F5] p-3 rounded-md border border-zinc-200/60">
                <p><strong>Deliverables:</strong> {product.fabric}</p>
                {product.stats && <p className="mt-1"><strong>Metrics:</strong> <span className="text-emerald-700 font-bold">{product.stats}</span></p>}
                <p className="text-[11px] text-zinc-500 mt-1">Includes direct-response copywriting, creative direction & attribution tracking.</p>
              </div>
            )}

            {/* Scope Options */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="uppercase tracking-wider">Select Scope Tier</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-1.5 rounded text-xs font-bold transition border ${
                        selectedSize === size
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-zinc-800 border-zinc-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Agency Guarantees */}
            <div className="pt-2 border-t border-zinc-100 text-[11px] text-zinc-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>100% Owned Creative IP &amp; Ad Accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-600" />
                <span>Sprint Delivery within 48-72 Hours</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-2">
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                added 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-[#111111] hover:bg-black text-white'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  <span>ADDED TO BRIEF!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  <span>ADD TO PROJECT SCOPE</span>
                </>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist && onToggleWishlist(product.id)}
              className="w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-zinc-300 hover:border-black text-zinc-700 flex items-center justify-center gap-2 transition"
            >
              <Heart size={14} className={isWishlisted ? "fill-rose-500 text-rose-500" : ""} />
              <span>{isWishlisted ? "SAVED IN SHORTLIST" : "SAVE TO SHORTLIST"}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
