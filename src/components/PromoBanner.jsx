import React from 'react'
import { WELURIK_DATA } from '../data/welurikMediaData'

export default function PromoBanner({ onCtaClick }) {
  const promo = WELURIK_DATA.promoBanner

  return (
    <section className="w-full bg-[#FAF8F5] pb-10 sm:pb-16 pt-2">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200/90 bg-white group">
            <img
              src={promo.img}
              alt="Welurik Media Team"
              className="w-full h-auto object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
