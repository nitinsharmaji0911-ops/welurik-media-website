import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { Link, useNavigation } from '../context/NavigationContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { navigate, currentPath } = useNavigation()

  const navLinks = [
    { name: 'OUR CLIENTS', href: '#featured-work' },
    { name: 'SHOWREELS', href: '#top-collections' },
    { name: 'WEB PLATFORMS', href: '#deliverables' },
    { name: 'CLIENT REVIEWS', href: '#industries' },
    { name: 'STUDIO BRIEF', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        navigate(`/${href}`)
      } else {
        const targetId = href.replace('#', '')
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(href)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#000000] text-white border-b border-zinc-900 shadow-md select-none">
        <div className="relative max-w-[1450px] mx-auto px-4 sm:px-8 h-14 sm:h-20 flex items-center justify-between">
          
          {/* Left: Mobile Toggle & Desktop Quick Nav */}
          <div className="flex items-center gap-4 z-10">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
              className="p-1.5 -ml-1 text-white hover:text-zinc-300 transition-colors focus:outline-none"
            >
              <Menu size={22} strokeWidth={1.75} />
            </button>

            {/* Desktop Quick Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-widest font-medium text-zinc-300">
              <button 
                onClick={() => handleNavClick('#featured-work')}
                className="hover:text-white transition-colors"
              >
                Clients
              </button>
              <button 
                onClick={() => handleNavClick('#top-collections')}
                className="hover:text-white transition-colors"
              >
                Showreels
              </button>
              <button 
                onClick={() => handleNavClick('#deliverables')}
                className="hover:text-white transition-colors"
              >
                Web Platforms
              </button>
              <button 
                onClick={() => handleNavClick('#industries')}
                className="hover:text-white transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Center: Real Welurik Media Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center text-center pointer-events-auto">
            <button onClick={() => handleNavClick('/')} aria-label="Welurik Media Home">
              <Logo variant="dark" size="md" />
            </button>
          </div>

          {/* Right: Direct WhatsApp CTA */}
          <div className="flex items-center justify-end z-10 gap-3">
            <a
              href="https://wa.me/918421706305?text=Hello%20Welurik%20Media,%20I%20want%20to%20discuss%20a%20project%20for%20my%20brand."
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-zinc-200 text-black text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              <span>WhatsApp Us</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-[85%] max-w-sm bg-white text-[#111111] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between p-5 border-b border-zinc-200 bg-[#FAF8F5]">
              <button onClick={() => handleNavClick('/')}>
                <Logo variant="light" size="sm" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full text-zinc-500 hover:text-black hover:bg-zinc-200 transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6 space-y-3">
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2">
                Portfolio Navigation
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left block text-sm font-medium tracking-wider uppercase py-2.5 text-[#111111] hover:text-[#00D2B8] border-b border-zinc-100 transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-6 space-y-3">
                <div className="pt-4 flex items-center justify-between text-xs text-zinc-500">
                  <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black">
                    Privacy Policy
                  </Link>
                  <span>&bull;</span>
                  <Link href="/terms" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black">
                    Terms &amp; Conditions
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-t border-zinc-200 text-center text-xs text-zinc-500 font-medium">
              Welurik Media
            </div>
          </div>
        </div>
      )}
    </>
  )
}
