import React, { useEffect } from 'react'
import { 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Camera, 
  Video, 
  Code2, 
  Award, 
  Clock, 
  MapPin, 
  ArrowRight, 
  PhoneCall,
  CheckCircle2,
  Users,
  Linkedin
} from 'lucide-react'
import { useNavigation } from '../context/NavigationContext'
import Logo from '../components/Logo'

export default function AboutPage() {
  const { navigate } = useNavigation()

  useEffect(() => {
    document.title = "Welurik Media Founder — Nitin | Leadership & Agency Dossier"
  }, [])

  const studioEquipment = [
    {
      category: 'Cinema Camera Rigs',
      items: ['Sony FX Cinema Line 4K Rigs', 'Sony G-Master & Sigma Art Prime Lenses', 'DJI Ronin RS3 Pro 3-Axis Stabilizers']
    },
    {
      category: 'Audio & Lighting',
      items: ['Aputure & Godox Continuous Studio Softboxes', 'Wireless Sennheiser & Rode Broadcast Lavaliers', 'Directional Boom Shotgun Mics for Sensory Audio']
    },
    {
      category: 'Post-Production Workstations',
      items: ['Custom Dual RTX 4090 GPU Render Nodes', 'DaVinci Resolve Studio Color-Graded Suite', '10Gbps Local High-Speed Fiber Storage RAID']
    },
    {
      category: 'Software & Cloud Stack',
      items: ['Next.js 15, React 19, Supabase, Tailwind CSS', 'Shopify Storefront & Liquid Architecture', 'n8n Workflow Automation & Meta CAPI Webhooks']
    }
  ]

  const operatingTenets = [
    {
      title: 'Full Client IP Ownership',
      desc: 'You own 100% of your codebase, repository commits, Meta/Google ad accounts, customer pixel data, and raw cinema footage. No lock-in, no hostages.',
      icon: ShieldCheck
    },
    {
      title: 'No Vanity Metrics',
      desc: 'We do not report "social engagement" or empty clicks as success. We report verified Cost Per Qualified Lead (CPL), Blended ROAS, and sub-1.2s web load speeds.',
      icon: Award
    },
    {
      title: '48-Hour Sprint Cadence',
      desc: 'Traditional agencies take 3 weeks to exchange emails. We deploy live staging links, ad iterations, and video rough cuts within 48 to 72 hours.',
      icon: Clock
    },
    {
      title: 'Direct Strategic Channel',
      desc: 'No account managers playing telephone. You communicate directly with technical directors and media buyers on a dedicated WhatsApp & Slack workspace.',
      icon: Users
    }
  ]

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#111111] pb-24">
      {/* 1. Hero Editorial Section */}
      <section className="bg-black text-white pt-16 pb-20 px-4 sm:px-8 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,184,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1450px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#00D2B8] text-[11px] font-bold uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={14} /> Agency Lab &amp; Studio Dossier
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.1] mb-6">
            We are Welurik Media. <br />
            <span className="font-semibold text-white">The Hybrid Growth Studio.</span>
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl leading-relaxed mb-8">
            Operating from Nagpur, India, Welurik Media was built to dismantle the wall between high-end software engineering and cinema-grade performance advertising.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-300">
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <MapPin size={14} className="text-[#00D2B8]" /> Nagpur HQ, Maharashtra
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <Code2 size={14} className="text-[#00D2B8]" /> 7+ Live Platforms Built
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <Video size={14} className="text-[#00D2B8]" /> 4K Sony FX Cinema Lab
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <ShieldCheck size={14} className="text-[#00D2B8]" /> 100% IP Client Retained
            </span>
          </div>
        </div>
      </section>

      {/* 2. The Studio Story */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              Why We Exist
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
              Traditional agencies give you pretty graphics. Software houses give you slow code. We build revenue infrastructure.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Most businesses face a recurring dilemma: their digital marketing agency doesn’t understand APIs, server-side tracking, or database performance; and their web development team has zero clue how Meta Ads, consumer hook psychology, or Conversion Rate Optimization (CRO) work.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              At Welurik Media, we united both disciplines under one roof. When we develop a web application or Shopify storefront, it is built from the ground up for sub-second load times, instant WhatsApp lead handoffs, and pixel-perfect Conversions API (CAPI) tracking.
            </p>
            
            <div className="pt-2">
              <button
                onClick={() => navigate('/case-studies')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
              >
                <span>Review Documented Case Studies</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <Logo variant="light" size="sm" />
                <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                  Active Agency Lab
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200/60">
                  <div className="text-2xl sm:text-3xl font-black text-black">155K+</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">Verified Inquiries</div>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200/60">
                  <div className="text-2xl sm:text-3xl font-black text-[#00D2B8]">71.2M</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">Ad Impressions</div>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200/60">
                  <div className="text-2xl sm:text-3xl font-black text-black">7 Live</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">Deployed Platforms</div>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200/60">
                  <div className="text-2xl sm:text-3xl font-black text-[#00D2B8]">₹10.66</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">Avg Lead Acquisition</div>
                </div>
              </div>

              <div className="p-4 bg-zinc-900 text-white rounded-xl text-xs space-y-2">
                <div className="font-bold text-[#00D2B8] uppercase tracking-wider text-[11px]">
                  Operating Philosophy
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  "If the website doesn't load in under 2 seconds, your ad spend is burned. If the ad creative lacks an intellectual hook, your product is invisible. We engineer both."
                </p>
                <div className="text-zinc-400 text-[10px] text-right font-medium">
                  — Nitin Sharma, Founder, Welurik Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Founder & Leadership Section (SEO Entity & Knowledge Graph) */}
      <section id="founder" className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-20" itemScope itemType="https://schema.org/Person">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-14 border border-zinc-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(0,210,184,0.12),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#00D2B8] text-[11px] font-bold uppercase tracking-widest rounded-full">
              <Sparkles size={14} /> Agency Leadership &amp; Founder
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Welurik Media was founded by <span className="text-[#00D2B8]" itemProp="name">Nitin</span>.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed" itemProp="description">
              As the Founder and Creative Director of Welurik Media, <strong>Nitin</strong> established the agency in Nagpur, Maharashtra, to solve a fundamental dilemma: the disconnect between high-converting software engineering and viral video production. Under Nitin's direction, Welurik Media has deployed 7+ custom platforms, directed 9:16 commercials generating millions of organic &amp; paid views, and engineered an average verified 4.8x ROAS across retail, D2C, and service brands.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="bg-white/10 px-4 py-2.5 rounded-xl text-zinc-200 border border-white/10">
                Founder: <span className="text-white font-bold" itemProp="alternateName">Nitin (Nitin Sharma)</span>
              </span>
              <span className="bg-white/10 px-4 py-2.5 rounded-xl text-zinc-200 border border-white/10">
                Studio HQ: <span className="text-white font-bold">Nagpur, India</span>
              </span>
              <a
                href="https://www.instagram.com/welurik_media/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#00D2B8] hover:bg-[#00bda6] text-black px-5 py-2.5 rounded-xl font-bold transition-all shadow-md"
                itemProp="sameAs"
              >
                <span>Instagram: @welurik_media</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/nitin-sharma-digital-marketer/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md"
                itemProp="sameAs"
              >
                <Linkedin size={14} />
                <span>LinkedIn: Nitin Sharma</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio Equipment & Lab Architecture */}
      <section id="studio" className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#00D2B8] bg-black px-3 py-1 rounded-full">
            In-House Arsenal
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 mt-4 mb-3">
            Production Studio &amp; Tech Architecture
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            We don’t outsource our creative shoots or our codebases to unvetted freelancers. Everything is directed, graded, and compiled inside our Nagpur studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioEquipment.map((eq, i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:border-black transition-colors">
              <div className="w-10 h-10 rounded-xl bg-black text-[#00D2B8] flex items-center justify-center mb-4">
                <Camera size={20} />
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-3">{eq.category}</h3>
              <ul className="space-y-2.5">
                {eq.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-zinc-600 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The 4 Operating Tenets */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-24">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-14 shadow-sm">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              Agency Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
              Four Non-Negotiable Client Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operatingTenets.map((tenet, idx) => {
              const Icon = tenet.icon
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black text-[#00D2B8] flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 mb-1">{tenet.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{tenet.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Contact & Visit Callout */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-8 mt-16 text-center">
        <div className="bg-black text-white p-8 sm:p-14 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl sm:text-4xl font-light tracking-tight mb-4">
            Want to Discuss a Project with Our Leadership?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Whether you want to commission a turnkey web platform or scale your performance advertising, connect directly with our production studio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Start Project Brief
            </button>
            <a
              href="https://wa.me/918421706305?text=Hello%20Welurik%20Media,%20I%20would%20like%20to%20schedule%20a%20discovery%20call%20for%20our%20brand."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#1ebd5a] text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center gap-2"
            >
              <PhoneCall size={16} />
              <span>WhatsApp Studio (+91 8421706305)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
