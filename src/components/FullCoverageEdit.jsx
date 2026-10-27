import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Eye } from 'lucide-react'

const SHOWREEL_VIDEOS = [
  {
    id: "pohawala-commercial",
    title: "POHAWALA COMMERCIAL",
    client: "Pohawala Nagpur",
    category: "4.8x Meta ROAS • Food & Beverage",
    views: "1.4M Views",
    videoUrl: "/videos/POHAWALA.mp4",
    poster: "/assets/curated/reel_food.jpg"
  },
  {
    id: "before-after-vfx",
    title: "BEFORE / AFTER MOTION",
    client: "Welurik Post-Production",
    category: "High Retention • VFX Breakdown",
    views: "540K Views",
    videoUrl: "/videos/Before-After.mp4",
    poster: "/images/before_after_poster.jpg"
  },
  {
    id: "gadchiroli-narrative",
    title: "GADCHIROLI STATE FILM",
    client: "Regional Documentary Film",
    category: "Statewide Narrative • Cinema",
    views: "850K Views",
    videoUrl: "/videos/Gadchiroli.mp4",
    poster: "/images/gadchiroli_poster.jpg"
  },
  {
    id: "celibar-nova-launch",
    title: "CELIBAR NOVA 1 D2C",
    client: "Celibar Lifestyle",
    category: "₹24.8L Scale • Fashion Commercial",
    views: "680K Views",
    videoUrl: "/videos/celibar nova 1.mp4",
    poster: "/assets/curated/fashion_d2c.jpg"
  },
  {
    id: "ambani-special",
    title: "AMBANI VIRAL EDIT",
    client: "Creator Growth Special",
    category: "84K Shares • Cultural Edit",
    views: "4.2M Views",
    videoUrl: "/videos/Ambani.mp4",
    poster: "/assets/curated/creator_system.jpg"
  },
  {
    id: "bajaj-oil-commercial",
    title: "BAJAJ PURE OIL AD",
    client: "Bajaj Consumer Care",
    category: "3.8x Acquisition • FMCG Brand Film",
    views: "920K Views",
    videoUrl: "/videos/Bajaj Oil.mp4",
    poster: "/assets/curated/hero_studio.jpg"
  },
  {
    id: "hp-printer-commercial",
    title: "HP PRINTER 3D CGI",
    client: "Tech Hardware Campaign",
    category: "High Intent • 3D Commercial Film",
    views: "760K Views",
    videoUrl: "/videos/HP Printer.mp4",
    poster: "/assets/curated/hero_studio.jpg"
  }
]

export default function FullCoverageEdit() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchDelta, setTouchDelta] = useState(0)
  const videoRef = useRef(null)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWREEL_VIDEOS.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWREEL_VIDEOS.length) % SHOWREEL_VIDEOS.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [SHOWREEL_VIDEOS.length])

  // Reset and play center video whenever active index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled gracefully if browser pauses unmuted autoplay
        })
      }
    }
  }, [activeIndex])

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
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
  }

  // Compute slide position for 3-card peek carousel (Exact match to reference layout)
  const getSlideStyle = (index) => {
    const total = SHOWREEL_VIDEOS.length
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
    const translateX = offset * 106 // percentage offset
    const scale = isCenter ? 1 : 0.92
    const opacity = isCenter ? 1 : 0.65
    const zIndex = isCenter ? 20 : 10

    return {
      transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'transform 420ms cubic-bezier(0.25, 1, 0.5, 1), opacity 350ms ease'
    }
  }

  return (
    <section id="top-collections" className="scroll-mt-20 pt-8 sm:pt-14 pb-14 sm:pb-20 bg-white overflow-hidden select-none border-t border-zinc-100">
      <div id="turnkey-systems" className="scroll-mt-20" />
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading (Exact Haya Typography matching image) */}
        <h2 className="font-bold tracking-[0.25em] text-base sm:text-lg md:text-xl text-black uppercase text-center mb-6 sm:mb-8">
          COMMERCIAL SHOWREELS
        </h2>

        {/* Carousel Stage */}
        <div 
          className="relative w-full max-w-[900px] mx-auto h-[450px] sm:h-[530px] md:h-[560px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Side Desktop Chevron - Left */}
          <button
            onClick={prev}
            aria-label="Previous video"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-zinc-200 items-center justify-center text-zinc-700 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Side Desktop Chevron - Right */}
          <button
            onClick={next}
            aria-label="Next video"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-zinc-200 items-center justify-center text-zinc-700 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {SHOWREEL_VIDEOS.map((video, idx) => {
              const total = SHOWREEL_VIDEOS.length
              let offset = (idx - activeIndex + total) % total
              if (offset > total / 2) offset -= total
              const isCenter = offset === 0

              return (
                <div
                  key={video.id}
                  style={getSlideStyle(idx)}
                  onClick={() => {
                    if (offset === -1) prev()
                    else if (offset === 1) next()
                  }}
                  className="absolute left-1/2 top-0 w-[64vw] max-w-[250px] sm:max-w-[290px] md:max-w-[310px] flex flex-col items-center cursor-pointer select-none"
                >
                  {/* 9:16 Portrait Card Container */}
                  <div className="relative w-full aspect-[9/16] rounded-[18px] sm:rounded-2xl overflow-hidden bg-black shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-zinc-200/50 group">
                    
                    {isCenter ? (
                      /* Center Card: Video plays directly! */
                      <div className="relative w-full h-full">
                        <video
                          ref={videoRef}
                          src={video.videoUrl}
                          poster={video.poster}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover"
                        />

                        {/* Mute / Unmute Toggle Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setIsMuted(!isMuted)
                          }}
                          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                          className="absolute bottom-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-all shadow-md active:scale-90"
                        >
                          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                        </button>

                        {/* Views Badge (Exact match to user request) */}
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase border border-white/10 shadow-sm">
                          <Eye size={12} className="text-[#00D2B8]" />
                          <span>{video.views}</span>
                        </div>
                      </div>
                    ) : (
                      /* Side Peeking Cards: High-res poster with subtle play badge */
                      <div className="relative w-full h-full">
                        <img
                          src={video.poster}
                          alt={video.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
                            <Play size={16} className="fill-black ml-0.5" />
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Centered VIEW ALL Button (Exact match to reference image) */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I'd%20like%20to%20view%20all%20commercial%20showreels%20and%20video%20productions."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-2.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 active:scale-95 transition-all shadow-md"
          >
            VIEW ALL
          </a>
        </div>

      </div>
    </section>
  )
}
