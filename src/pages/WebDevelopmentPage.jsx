import React, { useState } from 'react'
import { 
  Code2, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  PhoneCall
} from 'lucide-react'
import { useNavigation } from '../context/NavigationContext'

export default function WebDevelopmentPage({ addToCart }) {
  const { navigate } = useNavigation()
  const [activeFilter, setActiveFilter] = useState('all')

  const techStack = [
    { name: 'React 19 & Next.js 15', desc: 'Modern server components and lightning hydration' },
    { name: 'Vite & Tailwind CSS', desc: 'Atomic zero-runtime styling with sub-second HMR' },
    { name: 'Shopify Liquid & Storefront API', desc: 'High-volume D2C checkout architecture' },
    { name: 'Supabase & PostgreSQL', desc: 'Realtime database, row-level security & instant auth' },
    { name: 'Node.js & FastAPI', desc: 'High-throughput lead webhooks and CRM integrations' },
    { name: '3D WebGL & Motion UI', desc: 'Cinema-grade interactive digital experiences' },
  ]

  const platforms = [
    {
      id: "voe-properties",
      title: "Vision of Excellence Dubai Luxury Realty",
      category: "Ultra-Luxury Real Estate & Advisory",
      url: "https://voeproperties.com/",
      domain: "voeproperties.com",
      coverImg: "/images/websites/voeproperties_widescreen.jpg",
      metricValue: "AED 165M+",
      metricLabel: "Trophy Portfolio Placements",
      techStack: ["Next.js / Canvas", "Yield Simulator", "Private Placement"],
      badge: "LUXURY REAL ESTATE",
      filterGroup: "d2c",
      description: "Dubai luxury advisory portal engineered with scroll-driven cinematic visuals, interactive net yield simulator, and discreet off-market placement desk."
    },
    {
      id: "sm-engineering",
      title: "SM Solar EPC & Industrial CleanTech",
      category: "Commercial B2B & Solar EPC",
      url: "https://smengineeringchandrapur.in/",
      domain: "smengineeringchandrapur.in",
      coverImg: "/images/websites/smengineering_widescreen.webp",
      metricValue: "₹1.8Cr+",
      metricLabel: "B2B Contract Pipeline",
      techStack: ["Vite React", "3D Interactive", "Lead CRM"],
      badge: "CLEANTECH B2B",
      filterGroup: "b2b",
      description: "Turnkey digital platform engineered for multi-crore industrial solar contracts. Features an interactive solar ROI calculator, net metering savings estimator, and zero-leakage enquiry routing."
    },
    {
      id: "export-easy-hai",
      title: "Export Easy Hai Global Portal",
      category: "EdTech & Global Trade Platform",
      url: "https://export-easy-hai.vercel.app/",
      domain: "export-easy-hai.vercel.app",
      coverImg: "/images/websites/exporteasyhai_widescreen.webp",
      metricValue: "155K+",
      metricLabel: "Qualified B2B Leads",
      techStack: ["Next.js", "Webinar Engine", "Razorpay"],
      badge: "EDTECH & TRADE",
      filterGroup: "saas",
      description: "High-ticket global export trade education portal with automated webinar funnel, passwordless lead validation, and multi-tier checkout infrastructure."
    },
    {
      id: "zorodoor-streetwear",
      title: "Zorodoor Luxury Streetwear",
      category: "Haute Streetwear E-Commerce",
      url: "https://zorodoor.vercel.app/",
      domain: "zorodoor.vercel.app",
      coverImg: "/images/websites/zorodoor_widescreen.webp",
      metricValue: "< 0.8s",
      metricLabel: "Global TTFB Load Speed",
      techStack: ["Next.js 15", "Supabase DB", "Tailwind CSS"],
      badge: "D2C APPAREL",
      filterGroup: "d2c",
      description: "High-velocity streetwear drop storefront engineered with sub-second server components, live inventory synchronization, and mobile-first lookbook checkout."
    },
    {
      id: "maps-studio",
      title: "M.A.P.S Sculpture Studio",
      category: "Contemporary Art & Fine Sculptures",
      url: "https://maps-woad-ten.vercel.app/#home",
      domain: "maps-woad-ten.vercel.app",
      coverImg: "/images/websites/maps_widescreen.webp",
      metricValue: "Global",
      metricLabel: "Collectors In 6 Countries",
      techStack: ["Editorial Layout", "Virtual Gallery", "Private RFP"],
      badge: "FINE ART STUDIO",
      filterGroup: "d2c",
      description: "Immersive architectural portfolio crafted for high-net-worth private art collectors and international luxury exhibitions with confidential acquisition inquiries."
    },
    {
      id: "das-dental",
      title: "Das Dental Advanced Clinic",
      category: "Healthcare & Patient Acquisition",
      url: "https://www.dasdentalclinic.com/",
      domain: "dasdentalclinic.com",
      coverImg: "/images/websites/dasdental_widescreen.webp",
      metricValue: "5.0 ★",
      metricLabel: "Verified Patient Rating",
      techStack: ["Instant Booking", "WhatsApp API", "Doctor CMS"],
      badge: "HEALTHCARE",
      filterGroup: "b2b",
      description: "Automated dental appointment acquisition engine with frictionless WhatsApp confirmation, dynamic doctor scheduling, and procedure breakdown guides."
    },
    {
      id: "calibers-nova",
      title: "Caliber's Nova Academy",
      category: "EdTech & Admissions Funnel",
      url: "https://nova-mu-liart.vercel.app/#",
      domain: "nova-mu-liart.vercel.app",
      coverImg: "/images/websites/nova_widescreen.webp",
      metricValue: "19+ Yrs",
      metricLabel: "Trusted Academic Legacy",
      techStack: ["Admissions Portal", "Course Modules", "Scholarship Test"],
      badge: "ACADEMIC EDTECH",
      filterGroup: "saas",
      description: "High-retention student enrollment platform with integrated syllabus preview, automated entrance test registration, and interactive faculty credentials."
    },
    {
      id: "reviewpilot",
      title: "ReviewPilot AI Reputation Engine",
      category: "AI SaaS & Review Automation",
      url: "https://review.welurik.com/",
      domain: "review.welurik.com",
      coverImg: "/images/websites/reviewpilot_widescreen.webp",
      metricValue: "4.9x",
      metricLabel: "Review Volume Multiplier",
      techStack: ["React 19", "FastAPI", "Google Places API"],
      badge: "SAAS PLATFORM",
      filterGroup: "saas",
      description: "AI-powered reputation automation SaaS that filters negative customer feedback privately and accelerates verified 5-star Google review velocity."
    }
  ]

  const webPackages = [
    {
      id: "pkg-landing-page",
      name: "HIGH-CONVERTING LANDING PAGE",
      price: "₹24,000",
      time: "4 to 6 Days Delivery",
      desc: "Engineered specifically to convert cold ad traffic into qualified leads or direct sales with zero drop-off.",
      features: [
        "Custom Figma UI/UX Architecture",
        "Sub-Second Mobile & Desktop Load Speed",
        "Direct WhatsApp / CRM Lead Integration",
        "Meta Pixel & Google Tag Manager Setup",
        "A/B Headline & Offer Variations",
        "100% Responsive Clean Code (No PageBuilder Bloat)"
      ],
      popular: false
    },
    {
      id: "pkg-ecommerce-storefront",
      name: "CUSTOM E-COMMERCE STOREFRONT",
      price: "₹48,000",
      time: "10 to 14 Days Delivery",
      desc: "Bespoke high-converting storefront built on Shopify Liquid or Next.js with optimized 1-click checkout flow.",
      features: [
        "Complete Store Catalog & Collection Architecture",
        "Passwordless WhatsApp / SMS OTP Checkout Flow",
        "Cart Upsell & Bundling Modules",
        "Klaviyo Retention & Abandoned Cart Integration",
        "Sub-Second Core Web Vitals Guaranteed",
        "Payment Gateway Setup (Razorpay, Stripe, COD)"
      ],
      popular: true
    },
    {
      id: "pkg-custom-platform",
      name: "FULL-STACK WEB APP / SAAS MVP",
      price: "₹85,000",
      time: "3 to 4 Weeks Delivery",
      desc: "End-to-end full-stack web application with authenticated dashboards, database architecture, and custom APIs.",
      features: [
        "React / Next.js 15 Full-Stack Architecture",
        "Supabase / PostgreSQL Database Modeling",
        "User Authentication & Role-Based Access",
        "Admin Dashboard & Realtime Analytics",
        "Automated Webhooks & Third-Party API Integrations",
        "Production Vercel / AWS Cloud Deployment"
      ],
      popular: false
    }
  ]

  const filteredPlatforms = platforms.filter(p => {
    if (activeFilter === 'all') return true
    return p.filterGroup === activeFilter
  })

  const b2bCount = platforms.filter(p => p.filterGroup === 'b2b').length
  const d2cCount = platforms.filter(p => p.filterGroup === 'd2c').length
  const saasCount = platforms.filter(p => p.filterGroup === 'saas').length

  const platformTabs = [
    { id: 'all', label: `ALL PLATFORMS (${platforms.length})` },
    { id: 'b2b', label: `COMMERCIAL B2B (${b2bCount})` },
    { id: 'd2c', label: `LUXURY & D2C (${d2cCount})` },
    { id: 'saas', label: `SAAS & EDTECH (${saasCount})` },
  ]

  return (
    <div className="py-8 sm:py-14 bg-[#FAF8F5] text-[#111111] select-none">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-mono">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors">HOME</button>
          <span>/</span>
          <span className="text-black font-semibold">WEB DEVELOPMENT</span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Code2 size={13} className="text-emerald-600" />
            <span>FULL-STACK WEB ENGINEERING & CRO</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-[1.08] mb-4">
            Custom Web Platforms Engineered For Sub-Second Speed & Direct Conversion
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            We don't assemble slow, cookie-cutter WordPress themes. We engineer bespoke, production-grade web applications and high-conversion e-commerce storefronts tailored to capture revenue and dominate your market.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#live-platforms"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            >
              <span>INSPECT LIVE PLATFORMS</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I%20want%20to%20commission%20a%20custom%20web%20development%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black border border-zinc-300 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-zinc-100 transition-all shadow-sm active:scale-95"
            >
              <PhoneCall size={15} className="text-emerald-600" />
              <span>CONSULT AN ENGINEER</span>
            </a>
          </div>

          {/* Key Engineering Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-zinc-200/80">
            <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center">
              <div className="text-xl sm:text-2xl font-black text-black tracking-tight">&lt; 0.8s</div>
              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">Global TTFB Speed</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center">
              <div className="text-xl sm:text-2xl font-black text-black tracking-tight">100%</div>
              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">Mobile Responsive</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center">
              <div className="text-xl sm:text-2xl font-black text-black tracking-tight">Zero</div>
              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">Template Bloat</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center">
              <div className="text-xl sm:text-2xl font-black text-black tracking-tight">48-Hour</div>
              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">Sprint Prototype</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Arsenal */}
        <div className="my-12 sm:my-16 bg-white p-6 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">MODERN ARCHITECTURE</span>
            <h2 className="text-xl sm:text-2xl font-bold text-black uppercase mt-1">Our Engineering Technology Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#FAF8F5] border border-zinc-200 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-black">{tech.name}</div>
                  <div className="text-xs text-zinc-600 font-light mt-0.5">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Platforms Section */}
        <div id="live-platforms" className="scroll-mt-20 my-12 sm:my-20">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">PRODUCTION CASE STUDIES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1 mb-3">
              Engineered Web Platforms In Production
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Every platform is custom-built with zero template baggage, rigorous Core Web Vitals optimization, and live conversion triggers. Click any platform to inspect the live site.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
              {platformTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border ${
                    activeFilter === tab.id
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white hover:bg-zinc-100 text-zinc-600 hover:text-black border-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlatforms.map((platform) => (
              <div
                key={platform.id}
                onClick={() => window.open(platform.url, '_blank')}
                className="group bg-white rounded-2xl border border-zinc-200/90 hover:border-black shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                {/* Browser Top Window Chrome */}
                <div className="h-10 bg-[#FBFBFA] px-4 flex items-center justify-between border-b border-zinc-200/70">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-zinc-400 transition-colors inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-[11px] font-mono text-zinc-600 shadow-xs max-w-[210px] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-zinc-800 font-medium truncate">{platform.domain}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider text-zinc-400 group-hover:text-black transition-colors">
                    <ExternalLink size={14} className="text-zinc-400 group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={platform.coverImg}
                    alt={platform.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-2xl">
                      <span>EXPLORE LIVE PLATFORM</span>
                      <ExternalLink size={13} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-500">{platform.category}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-zinc-200 text-[10px] font-mono font-bold tracking-wider text-zinc-700 uppercase">{platform.badge}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-zinc-800 transition-colors mb-2">
                      {platform.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-light mb-4">
                      {platform.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-black tracking-tight">{platform.metricValue}</span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-medium">{platform.metricLabel}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-wrap">
                      {platform.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-zinc-50 border border-zinc-200 text-[9px] font-mono text-zinc-600 uppercase font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Packages */}
        <div className="my-16 sm:my-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">TRANSPARENT INVESTMENT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1 mb-2">
              Web Engineering Packages
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">
              Clear scope, zero hidden markups, and turnkey delivery. All packages include source code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {webPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white border ${
                  pkg.popular 
                    ? 'border-2 border-black shadow-xl ring-1 ring-black/10 relative -translate-y-1' 
                    : 'border-zinc-200 hover:border-zinc-400 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Zap size={11} className="text-[#00D2B8]" />
                    <span>RECOMMENDED FOR BRANDS</span>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-sm tracking-wider uppercase text-black mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-black text-black tracking-tight mb-1">{pkg.price}</div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">{pkg.time}</div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light pb-6 border-b border-zinc-100 mb-6">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-100">
                  <button
                    onClick={() => {
                      if (addToCart) {
                        addToCart({
                          id: pkg.id,
                          title: pkg.name,
                          price: pkg.price,
                          img1: '/assets/curated/luxury_web.jpg'
                        }, pkg.name)
                      }
                    }}
                    className={`w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-black text-white hover:bg-zinc-800'
                        : 'bg-zinc-100 text-black hover:bg-zinc-200'
                    }`}
                  >
                    <span>ADD TO PROJECT SCOPE</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={`https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall size={12} />
                    <span>WhatsApp Instant Discussion</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-black text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto my-12">
          <Sparkles className="w-8 h-8 text-[#00D2B8] mx-auto mb-3" />
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight mb-3">
            Ready To Engineer Your Digital Platform?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto font-light leading-relaxed mb-6">
            Share your brand goals and feature requirements. Our engineering team prepares your initial roadmap within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-all active:scale-95"
            >
              SUBMIT A PROJECT BRIEF
            </button>
            <a
              href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I%20want%20to%20discuss%20a%20custom%20web%20application."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-widest uppercase hover:bg-emerald-500 transition-all active:scale-95"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
