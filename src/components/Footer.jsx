import React, { useState } from 'react'
import { Plus, Minus, ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import { Link, useNavigation } from '../context/NavigationContext'

export default function Footer() {
  const { navigate, currentPath } = useNavigation()

  const [openSections, setOpenSections] = useState({
    services: false,
    cases: false,
    company: false,
    chat: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        navigate(`/${href}`)
      } else {
        const targetId = href.replace('#', '')
        if (!targetId) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      navigate(href)
    }
  }

  const footerSections = [
    {
      id: 'services',
      title: 'DISCIPLINES',
      links: [
        { label: 'Web Development & Platforms', href: '#deliverables' },
        { label: 'Shopify CRO & Storefronts', href: '#deliverables' },
        { label: 'Meta & Google Ads Scale', href: '#services' },
        { label: 'Viral 9:16 Commercials & UGC', href: '#top-collections' },
      ]
    },
    {
      id: 'cases',
      title: 'PORTFOLIO',
      links: [
        { label: 'Featured Client Work', href: '#featured-work' },
        { label: 'Commercial Showreels', href: '#top-collections' },
        { label: 'Engineered Web Platforms', href: '#deliverables' },
        { label: 'Verified Client Results', href: '#industries' },
      ]
    },
    {
      id: 'company',
      title: 'AGENCY & LEGAL',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Engagement', href: '/terms' },
      ]
    },
    {
      id: 'chat',
      title: 'DIRECT CONTACT',
      links: [
        { label: 'WhatsApp (+91 8421706305)', href: 'https://wa.me/918421706305' },
        { label: 'Direct Call (+91 8421706305)', href: 'tel:+918421706305' },
        { label: 'Email: hello@welurikmedia.com', href: 'mailto:hello@welurikmedia.com' },
        { label: 'Submit Brief', href: '#contact' },
        { label: 'Instagram (@welurik_media)', href: 'https://www.instagram.com/welurik_media/' },
      ]
    }
  ]

  return (
    <footer className="bg-white border-t border-[#E8E3DC] text-[#111111] pt-12 sm:pt-16 pb-20 sm:pb-12">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Welurik Brand Logo Centered */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          <button onClick={() => handleLinkClick('#')} aria-label="Welurik Media Home">
            <Logo variant="light" size="lg" />
          </button>
          <p className="text-xs text-zinc-500 font-medium mt-3 max-w-md">
            The hybrid growth studio. Engineering high-converting web platforms and cinema-grade performance media from Nagpur, India.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-zinc-200 pb-8 sm:pb-12 gap-y-4 md:gap-y-0">
          {footerSections.map((sec) => (
            <div key={sec.id} className="border-b md:border-b-0 border-zinc-200 py-3 md:py-0 md:px-4">
              <button
                onClick={() => toggleSection(sec.id)}
                className="w-full flex items-center justify-between py-2 text-left md:pointer-events-none"
              >
                <h5 className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#111111] uppercase">
                  {sec.title}
                </h5>
                <span className="md:hidden text-zinc-500">
                  {openSections[sec.id] ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <ul className={`space-y-2.5 mt-2 md:mt-4 text-xs text-zinc-600 ${
                openSections[sec.id] ? 'block' : 'hidden md:block'
              }`}>
                {sec.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-black transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="hover:text-black transition-colors block py-0.5 text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} Welurik Media Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors font-medium">
              Terms of Engagement
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
