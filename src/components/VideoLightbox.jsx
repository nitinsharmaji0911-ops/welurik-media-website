import React, { useRef, useState } from 'react'
import { X, Volume2, VolumeX, Eye } from 'lucide-react'

export default function VideoLightbox({
  reel,
  onClose
}) {
  if (!reel) return null

  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Video Container (Vertical 9:16) */}
      <div className="relative w-full max-w-sm rounded-[12px] overflow-hidden shadow-2xl bg-black z-10 aspect-[9/16] flex flex-col justify-between">
        
        {/* Top Controls */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Eye size={13} />
            <span>{typeof reel.views === 'string' && reel.views.toLowerCase().includes('view') ? reel.views : `${reel.views} views`}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition"
              aria-label="Toggle audio"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Element */}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          poster={reel.poster}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          onClick={toggleMute}
        />

      </div>
    </div>
  )
}
