import React, { useState } from 'react'
import { Menu, Home, Layers, Send, Sparkles, X, ArrowRight, Code2, Zap, PhoneCall, HelpCircle } from 'lucide-react'
import Logo from './Logo'
import { Link, useNavigation } from '../context/NavigationContext'

export default function MobileNav({
  onOpenCart,
  cartCount = 0
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { navigate, currentPath } = useNavigation()

  const handleNavClick = (target) => {
    setIsMenuOpen(false)
    if (target.startsWith('#')) {
      if (currentPath !== '/') {
        navigate(`/${target}`)
      } else {
        const id = target.replace('#', '')
        if (!id) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      navigate(target)
    }
  }

  return (
    <>
      {/* 1. Mobile Bottom Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-zinc-200 h-14 sm:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.06)] select-none"
      >
        <div className="grid grid-cols-4 h-full items-center">
          {/* Item 1: MENU */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            className="flex flex-col items-center justify-center gap-0.5 h-full text-zinc-900 hover:text-black active:scale-95 transition-all"
          >
            <Menu size={20} strokeWidth={2} />
            <span className="text-[10px] font-bold tracking-wider uppercase">MENU</span>
          </button>

          {/* Item 2: HOME */}
          <button
            onClick={() => handleNavClick('#')}
            aria-label="Go to top"
            className="flex flex-col items-center justify-center gap-0.5 h-full text-zinc-900 hover:text-black active:scale-95 transition-all"
          >
            <Home size={20} strokeWidth={2} />
            <span className="text-[10px] font-bold tracking-wider uppercase">HOME</span>
          </button>

          {/* Item 3: CALL US (DIALER) */}
          <a
            href="tel:+918421706305"
            aria-label="Call Welurik Media Studio"
            className="flex flex-col items-center justify-center gap-0.5 h-full text-zinc-900 hover:text-black active:scale-95 transition-all"
          >
            <PhoneCall size={20} strokeWidth={2} />
            <span className="text-[10px] font-bold tracking-wider uppercase">CALL US</span>
          </a>

          {/* Item 4: BRIEF */}
          <button
            onClick={() => handleNavClick('#contact')}
            aria-label="Submit project brief"
            className="flex flex-col items-center justify-center gap-0.5 h-full text-zinc-900 hover:text-black active:scale-95 transition-all"
          >
            <Send size={19} strokeWidth={2} />
            <span className="text-[10px] font-bold tracking-wider uppercase">BRIEF</span>
          </button>
        </div>
      </nav>

      {/* 2. Slide-out Mobile Menu Drawer when MENU is tapped */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-[85vw] max-w-[320px] bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
                <button onClick={() => handleNavClick('#')}>
                  <Logo variant="light" size="sm" />
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800"
                >
                  <X size={18} />
                </button>
              </div>

              {/* In-page Navigation Links */}
              <div className="mt-5 space-y-2">
                <button
                  onClick={() => handleNavClick('#services')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-left font-bold text-xs uppercase tracking-wider text-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Zap size={15} className="text-[#00D2B8]" />
                    <span>Our Services</span>
                  </div>
                  <ArrowRight size={14} className="text-zinc-400" />
                </button>

                <button
                  onClick={() => handleNavClick('#featured-work')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-left font-bold text-xs uppercase tracking-wider text-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} className="text-[#00D2B8]" />
                    <span>Featured Client Work</span>
                  </div>
                  <ArrowRight size={14} className="text-zinc-400" />
                </button>

                <button
                  onClick={() => handleNavClick('#top-collections')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-left font-bold text-xs uppercase tracking-wider text-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Code2 size={15} className="text-[#00D2B8]" />
                    <span>Commercial Showreels</span>
                  </div>
                  <ArrowRight size={14} className="text-zinc-400" />
                </button>

                <button
                  onClick={() => handleNavClick('#deliverables')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-left font-bold text-xs uppercase tracking-wider text-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Layers size={15} className="text-[#00D2B8]" />
                    <span>Engineered Web Platforms</span>
                  </div>
                  <ArrowRight size={14} className="text-zinc-400" />
                </button>

                <button
                  onClick={() => handleNavClick('#industries')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-left font-bold text-xs uppercase tracking-wider text-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} className="text-[#00D2B8]" />
                    <span>Client Reviews &amp; Metrics</span>
                  </div>
                  <ArrowRight size={14} className="text-zinc-400" />
                </button>

                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-left font-bold text-xs uppercase tracking-wider text-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <PhoneCall size={15} className="text-[#00D2B8]" />
                    <span>Submit Project Brief</span>
                  </div>
                  <ArrowRight size={14} className="text-zinc-400" />
                </button>
              </div>
            </div>

            {/* Bottom Direct Contact & Legal Pages */}
            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <a
                href="https://wa.me/918421706305?text=Hello%20Welurik%20Media,%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <PhoneCall size={14} />
                <span>WhatsApp (+91 8421706305)</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-500 font-medium pt-1">
                <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="hover:text-black">
                  Privacy Policy
                </Link>
                <span>&bull;</span>
                <Link href="/terms" onClick={() => setIsMenuOpen(false)} className="hover:text-black">
                  Terms of Engagement
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
