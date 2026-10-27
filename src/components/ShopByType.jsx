import React from 'react'
import { Sparkles } from 'lucide-react'

export const CLIENT_LOGOS = [
  {
    id: 'zorodoor',
    name: 'Zorodoor',
    tagline: 'Luxury Architectural Doors',
    category: 'Manufacturing & Enterprise',
    logo: '/clients/zorodoor-logo.svg',
    verified: true
  },
  {
    id: 'tamtara',
    name: 'Tamtara Fine Dine',
    tagline: 'Artisan Cafe & Gourmet Lounge',
    category: 'F&B & Hospitality',
    logo: '/clients/tamtara-color.png',
    verified: true
  },
  {
    id: 'dr-das',
    name: 'Dr. Das Dental Clinic',
    tagline: 'Advanced Multispeciality Care',
    category: 'Healthcare & Dental',
    logo: '/clients/dr-das-color.png',
    verified: true
  },
  {
    id: 'voe-properties',
    name: 'VOE Properties',
    tagline: 'Vision of Excellence Realty',
    category: 'Real Estate & Properties',
    logo: '/clients/voe-properties-color.png',
    verified: true
  },
  {
    id: 'sm-engineering',
    name: 'SM Engineering',
    tagline: 'Complete Solar EPC Solutions',
    category: 'Solar & CleanTech',
    logo: '/clients/sm-engineering-logo.svg',
    verified: true
  },
  {
    id: 'heera-sweets',
    name: 'Shree Heera Sweets',
    tagline: 'Iconic Sweets Destination',
    category: 'F&B & Retail',
    logo: '/clients/heera-sweets-color.png',
    verified: true
  },
  {
    id: 'hgworld',
    name: 'HG World',
    tagline: 'Happy Gaming World Retail',
    category: 'Gaming & Consumer Tech',
    logo: '/clients/hgworld-color.png',
    verified: true
  },
  {
    id: 'haya-clothing',
    name: 'HAYA Clothing',
    tagline: 'Contemporary Luxury Apparel',
    category: 'D2C Fashion & Retail',
    logo: '/clients/haya-clothing-color.png',
    verified: true
  },
  {
    id: 'axon-accounting',
    name: 'Axon Accounting',
    tagline: 'Corporate Financial Advisory',
    category: 'Finance & Taxation',
    logo: '/clients/axon-color.png',
    verified: true
  },
  {
    id: 'raasta',
    name: 'Raasta Nagpur',
    tagline: 'Rooftop Lounge & Cafe',
    category: 'F&B & Hospitality',
    logo: '/clients/raasta-brand.svg',
    verified: true
  },
  {
    id: 'chandak-nx',
    name: 'Chandak NX',
    tagline: "Men's Ethnic & Designer Suits",
    category: 'Retail & Fashion',
    logo: '/clients/chandak-nx-brand.svg',
    verified: true
  },
  {
    id: 'ironcreed-gym',
    name: 'IRONCREED GYM',
    tagline: 'Strength & Athletic Performance',
    category: 'Fitness & Health',
    logo: '/clients/ironcreed-brand.svg',
    verified: true
  },
  {
    id: 'get-my-vastu',
    name: 'Get My Vastu',
    tagline: 'Architectural & Vastu Advisory',
    category: 'Consulting & Vastu',
    logo: '/clients/get-my-vastu-color.png',
    verified: true
  },
  {
    id: 'nova-education',
    name: 'Nova Education',
    tagline: 'Premier English Academy',
    category: 'Education & EdTech',
    logo: '/clients/nova-color.png',
    verified: true
  },
  {
    id: 'local-goa-kayaking',
    name: 'Local Goa Kayaking',
    tagline: 'Eco Mangrove Expeditions',
    category: 'Tourism & Adventure',
    logo: '/clients/local-goa-kayaking-brand.svg',
    verified: true
  },
  {
    id: 'switch-on-service',
    name: 'Switch On Service',
    tagline: 'Industrial & Domestic RO Systems',
    category: 'Services & Maintenance',
    logo: '/clients/switch-on-brand.svg',
    verified: true
  }
]

const marqueeRow1 = [
  CLIENT_LOGOS[0], // Zorodoor
  CLIENT_LOGOS[1], // Tamtara
  CLIENT_LOGOS[2], // Dr Das
  CLIENT_LOGOS[6], // HG World
  CLIENT_LOGOS[10], // Chandak NX
  CLIENT_LOGOS[4], // SM Engineering
  CLIENT_LOGOS[7], // HAYA
  CLIENT_LOGOS[15]  // Switch On Service
]

const marqueeRow2 = [
  CLIENT_LOGOS[9], // Raasta
  CLIENT_LOGOS[5], // Heera Sweets
  CLIENT_LOGOS[3], // VOE
  CLIENT_LOGOS[11], // Ironcreed
  CLIENT_LOGOS[8], // Axon
  CLIENT_LOGOS[14], // Local Goa Kayaking
  CLIENT_LOGOS[12], // Get My Vastu
  CLIENT_LOGOS[13]  // Nova Education
]

const column1 = [
  {
    id: 'c1-1',
    name: 'Rajesh Mandavkar',
    role: 'MD — SM Solar EPC & CleanTech',
    text: 'When we launched our industrial solar EPC vertical in Chandrapur, our pipeline relied solely on local references. Welurik stepped in and engineered our complete digital platform—including an interactive solar ROI calculator and direct enquiry workflows. Within 90 days, we generated over ₹1.8Cr in verified industrial enquiries. Their execution speed and technical depth are unmatched.'
  },
  {
    id: 'c1-2',
    name: 'Ankit Bhende',
    role: 'Founder & CEO — Pohawala Nagpur',
    text: 'We wanted our commercial to cut through the noise on Instagram and drive real walk-ins to our outlets. Welurik’s video production team scripted, shot, and color-graded our commercial reel. It hit 1.4M organic & paid views with an unbelievable 4.8x Meta ROAS. Weekend footfalls across all branches doubled. These guys know how to make content convert.'
  },
  {
    id: 'c1-3',
    name: 'Kunal Raut',
    role: 'Director — Apex Media & B2B Creator Network',
    text: 'Welurik’s turnaround time on creative sprints is insane. What normally takes legacy agencies 3 weeks is delivered by Nitin’s team in 48 hours with cinema-grade motion graphics and sound design. They are true growth partners who treat your brand like their own.'
  }
]

const column2 = [
  {
    id: 'c2-1',
    name: 'Sameer Kulkarni',
    role: 'Head of Growth — Export Easy Hai',
    text: 'Scaling B2B logistics leads on Meta was burning our ad budget until Welurik audited our entire funnels. They implemented negative audience hygiene, restructured our search ad exclusions, and automated WhatsApp routing. We acquired over 155,000 qualified business leads at ₹10.66 average CPL. The lead quality and zero-leakage workflow changed our unit economics.'
  },
  {
    id: 'c2-2',
    name: 'Ishma Sheikh',
    role: 'Founder — Haya by Ishma Couture',
    text: 'I was looking for an agency that understands luxury modesty and high-end aesthetics without compromising on speed. Welurik built our storefront with sub-second page loads, mobile-first lookbook navigation, and high-retention commercial reels. We’ve scaled past 8,400+ orders nationwide, and our customer retention rate has never been higher.'
  },
  {
    id: 'c2-3',
    name: 'Padmesh Joshi',
    role: 'Managing Partner — Horizon Wealth & Real Estate',
    text: 'High-ticket real estate in central India requires deep credibility and visual punch. Welurik produced our 4K cinematic site tours and digital pitch decks. The response from NRI investors was immediate. They don’t just edit videos—they build complete commercial acquisition engines.'
  }
]

const column3 = [
  {
    id: 'c3-1',
    name: 'Harish Gurram',
    role: 'Founder — HG World Gaming',
    text: 'In the competitive tech & gaming console space, trust and visual fidelity are everything. Welurik rendered high-end 3D product visuals and built our custom storefront checkout. Our catalog ads jumped to a 3.4x ROAS, and customer cart abandonment dropped significantly. Their technical standard is Silicon Valley tier.'
  },
  {
    id: 'c3-2',
    name: 'Dr. Amit Verma',
    role: 'Principal Consultant — Get My Vastu',
    text: 'Lead leakage was our biggest headache. Inquiries from Google and Instagram would sit for hours before anyone followed up. Welurik automated our WhatsApp booking engine with instant qualification. Response times dropped to under 15 seconds, and our consultation calendar filled up 3 weeks in advance.'
  },
  {
    id: 'c3-3',
    name: 'Satwik Deshmukh',
    role: 'Head of E-Commerce — Brewcraft Coffee Roasters',
    text: 'From artisanal bean subscription funnels to instant table QR ordering, Welurik designed an end-to-end hospitality experience. Our repeat customer order rate jumped by 3.4x within the first quarter. Truly exceptional attention to brand details.'
  }
]

const column4 = [
  {
    id: 'c4-1',
    name: 'Devendra Joshi',
    role: 'Operations Head — Central India Logistics',
    text: 'From CRM pipeline integration to high-intent Google Search campaigns, Welurik streamlined our regional corporate accounts. Their monthly data transparency and direct communication without corporate fluff make them our go-to team.'
  },
  {
    id: 'c4-2',
    name: 'Sneha Gupta',
    role: 'Co-Founder — Celibar Nova Lifestyle',
    text: 'Our D2C product launch needed a viral visual asset that could run profitably on Meta ads. Welurik’s creative sprint delivered 680K views and ₹24.8L in first-month revenue. They are hands down the best performance creative agency in the region.'
  },
  {
    id: 'c4-3',
    name: 'Rohan Agrawal',
    role: 'Director — Vidarbha Industrial Manufacturing',
    text: 'Welurik’s team audited our multi-state ad accounts and wiped out wasted ad spend in 48 hours. If you want verified ROI and modern digital architecture without agency excuses, Welurik is the only team you need.'
  }
]

function ReviewCard({ review }) {
  return (
    <div className="rounded-xl sm:rounded-2xl bg-white border border-zinc-200/80 hover:border-black/30 p-4 sm:p-5 text-left transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md group flex flex-col justify-between">
      <p className="text-[12px] sm:text-[13px] text-zinc-700 leading-relaxed font-normal mb-3 sm:mb-4 whitespace-pre-line">
        {review.text}
      </p>

      <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-zinc-100 gap-1.5">
        <div className="min-w-0 flex-1">
          <div className="text-xs sm:text-sm font-bold text-black leading-tight group-hover:text-zinc-600 transition-colors truncate">
            {review.name}
          </div>
          <div className="text-[10px] sm:text-[10.5px] text-zinc-500 font-medium mt-0.5 truncate">
            {review.role}
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[9.5px] sm:text-[10px] font-mono text-emerald-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  )
}

export default function ShopByType() {
  return (
    <section id="industries" className="py-12 sm:py-20 bg-[#FAF8F5] text-black border-t border-zinc-200/60 select-none overflow-hidden relative">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-[10.5px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-3.5">
            <Sparkles size={12} className="text-amber-600" />
            <span>Trusted By Leading Businesses</span>
          </div>

          <h2 className="font-bold tracking-[0.22em] text-lg sm:text-2xl md:text-3xl text-black uppercase text-center">
            OUR CLIENTS &amp; TESTIMONIALS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2.5 max-w-xl mx-auto leading-relaxed">
            Powering reputation, digital platforms, and customer acquisition for 50+ leading brands across India.
          </p>
        </div>

        {/* 1. Sleek Dual-Row Infinite Logo Marquee in FULL VIBRANT COLOR */}
        <div className="relative overflow-hidden mask-marquee-horizontal py-2 mb-10 sm:mb-14">
          {/* Row 1 - Left Scrolling (Fast Ticker) */}
          <div className="flex gap-4 sm:gap-6 animate-marquee-left w-max pause-hover mb-4 sm:mb-6">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="shrink-0 h-[68px] sm:h-[76px] min-w-[190px] sm:min-w-[220px] px-6 bg-white border border-zinc-200/90 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-black/40 transition-all flex items-center justify-center group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-[38px] sm:max-h-[44px] max-w-[150px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Right Scrolling (Fast Ticker) */}
          <div className="flex gap-4 sm:gap-6 animate-marquee-right w-max pause-hover">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="shrink-0 h-[68px] sm:h-[76px] min-w-[190px] sm:min-w-[220px] px-6 bg-white border border-zinc-200/90 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-black/40 transition-all flex items-center justify-center group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-[38px] sm:max-h-[44px] max-w-[150px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Client Reviews (Directly after the logos!) */}
        <div className="relative h-[520px] sm:h-[600px] lg:h-[660px] overflow-hidden mask-marquee-vertical">
          {/* Top Gradient Fade Overlay */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20" />

          {/* Bottom Gradient Fade Overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20" />

          {/* 2-Column on Mobile, 4-Column on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 h-full items-start">
            
            {/* Column 1 - Moving Up */}
            <div className="animate-marquee-up-slow pause-hover flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
              {[...column1, ...column1].map((review, idx) => (
                <ReviewCard key={`col1-${review.id}-${idx}`} review={review} />
              ))}
            </div>

            {/* Column 2 - Moving Down */}
            <div className="animate-marquee-down-slow pause-hover flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
              {[...column2, ...column2].map((review, idx) => (
                <ReviewCard key={`col2-${review.id}-${idx}`} review={review} />
              ))}
            </div>

            {/* Column 3 - Moving Up (Desktop) */}
            <div className="animate-marquee-up-fast pause-hover hidden lg:flex flex-col gap-4 lg:gap-5">
              {[...column3, ...column3].map((review, idx) => (
                <ReviewCard key={`col3-${review.id}-${idx}`} review={review} />
              ))}
            </div>

            {/* Column 4 - Moving Down (Desktop) */}
            <div className="animate-marquee-down-fast pause-hover hidden lg:flex flex-col gap-4 lg:gap-5">
              {[...column4, ...column4].map((review, idx) => (
                <ReviewCard key={`col4-${review.id}-${idx}`} review={review} />
              ))}
            </div>

          </div>
        </div>

        {/* Centered CTA */}
        <div className="text-center mt-8 sm:mt-12 relative z-30">
          <a
            href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I'm%20interested%20in%20partnering%20with%20Welurik%20Media%20for%20our%20brand%20growth."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 active:scale-95 transition-all shadow-md"
          >
            VIEW ALL REVIEWS &amp; CASE STUDIES
          </a>
        </div>

      </div>
    </section>
  )
}
