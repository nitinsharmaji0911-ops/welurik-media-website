import React, { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function HeroSlider({ onExplore }) {
  const [isMobileMuted, setIsMobileMuted] = useState(true)
  const [isDesktopMuted, setIsDesktopMuted] = useState(true)
  const mobileVideoRef = useRef(null)
  const desktopVideoRef = useRef(null)

  useEffect(() => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = isMobileMuted
      const playPromise = mobileVideoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }, [isMobileMuted])

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = isDesktopMuted
      const playPromise = desktopVideoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }, [isDesktopMuted])

  return (
    <section className="relative w-full bg-[#FAF8F5] py-4 sm:py-8 lg:py-10 overflow-hidden select-none">
      <h1 className="sr-only">Welurik Media — Performance Marketing, Cinema-Grade Video Production &amp; Custom Web Platforms</h1>
      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-8 flex items-center justify-center">
        {/* Desktop / Laptop View: High-Impact Cinematic Video (Zero-Buffer FastStart) */}
        <div className="hidden sm:block w-full max-w-5xl lg:max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-[0_12px_45px_rgba(0,0,0,0.14)] border border-zinc-200/90 group">
            <video
              ref={desktopVideoRef}
              poster="/images/hero_laptop_poster.jpg"
              autoPlay
              loop
              muted={isDesktopMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero_laptop.webm" type="video/webm" />
              <source src="/videos/hero_laptop.mp4" type="video/mp4" />
            </video>

            {/* Audio Toggle Button for Desktop View */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsDesktopMuted(prev => !prev)
              }}
              aria-label={isDesktopMuted ? "Unmute audio" : "Mute audio"}
              className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center gap-2 hover:bg-black transition-all shadow-lg active:scale-95 text-xs font-medium tracking-wider uppercase border border-white/10"
            >
              {isDesktopMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span className="hidden md:inline">{isDesktopMuted ? "Unmute" : "Mute"}</span>
            </button>
          </div>
        </div>

        {/* Mobile View: High-Impact Vertical Hero Video (UNTOUCHED) */}
        <div className="block sm:hidden w-full max-w-[340px] xs:max-w-[360px] mx-auto">
          <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-zinc-200/90 group">
            <video
              ref={mobileVideoRef}
              src="/videos/hero_mobile.mp4"
              poster="/images/hero_mobile_poster.jpg"
              autoPlay
              loop
              muted={isMobileMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMuted(prev => !prev)
              }}
              aria-label={isMobileMuted ? "Unmute audio" : "Mute audio"}
              className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-all shadow-md active:scale-90"
            >
              {isMobileMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
