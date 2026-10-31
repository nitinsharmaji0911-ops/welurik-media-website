import React, { useEffect } from 'react'
import { ArrowLeft, Home, Send, PhoneCall } from 'lucide-react'
import { useNavigation } from '../context/NavigationContext'
import Logo from '../components/Logo'

export default function NotFoundPage() {
  const { navigate } = useNavigation()

  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]')
    const original = meta ? meta.getAttribute('content') : 'index, follow'
    if (meta) {
      meta.setAttribute('content', 'noindex, nofollow')
    }
    return () => {
      if (meta) meta.setAttribute('content', original)
    }
  }, [])

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF8F5] text-[#111111] px-4 sm:px-8 py-20 select-none">
      <div className="max-w-xl w-full text-center">
        
        {/* Brand Logo */}
        <div className="flex justify-center mb-8">
          <button onClick={() => navigate('/')} aria-label="Welurik Media Home">
            <Logo variant="light" size="lg" />
          </button>
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#00D2B8] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
          <span>ERROR 404 // ROUTE NOT FOUND</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Lost in Production?
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 mb-8 max-w-md mx-auto leading-relaxed">
          The requested page or case study has been moved, renamed, or is currently inside our editing suite.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Home size={16} />
            <span>Back to Homepage</span>
          </button>

          <button
            onClick={() => navigate('/#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs uppercase tracking-wider border border-zinc-300 transition-all shadow-xs active:scale-95"
          >
            <Send size={16} />
            <span>Submit Project Brief</span>
          </button>

          <a
            href="tel:+918421706305"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200 transition-all active:scale-95"
          >
            <PhoneCall size={16} />
            <span>Call Studio</span>
          </a>
        </div>

      </div>
    </div>
  )
}
