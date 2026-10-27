import React from 'react'

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp live chat concierge" className="fixed bottom-[74px] sm:bottom-6 right-4 sm:right-6 z-40 select-none">
      <a
        href="https://wa.me/918421706305?text=Hi%20Welurik%20Media,%20I%20would%20like%20to%20discuss%20a%20marketing%20campaign%20for%20my%20brand"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Welurik Media on WhatsApp"
        className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-[0_10px_22px_rgba(37,211,102,0.45)] group"
      >
        {/* Subtle breathing pulse ring */}
        <span className="absolute inset-2 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none -z-10" />

        {/* Official WhatsApp Logo */}
        <img
          src="/assets/whatsapp-official.svg"
          alt="WhatsApp Direct Concierge"
          className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:group-hover:block absolute right-20 bg-white text-zinc-800 text-xs font-semibold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap border border-zinc-200">
          Chat with Welurik on WhatsApp
        </span>
      </a>
    </aside>
  )
}
