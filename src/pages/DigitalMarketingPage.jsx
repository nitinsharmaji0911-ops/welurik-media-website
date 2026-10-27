import React from 'react'
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Video, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  Users,
  Eye
} from 'lucide-react'
import { useNavigation } from '../context/NavigationContext'
import { RETAINERS_DATA } from '../data/portfolioData'

export default function DigitalMarketingPage({ addToCart }) {
  const { navigate } = useNavigation()

  const marketingChannels = [
    {
      icon: Target,
      title: 'Meta Ads (Facebook & Instagram Scale)',
      desc: 'High-ROAS performance acquisition with rapid creative iteration, dynamic product ads, and aggressive negative audience hygiene to eliminate wasted spend.',
      metric: '4.8x Meta ROAS'
    },
    {
      icon: BarChart3,
      title: 'Google Search, Shopping & P-Max',
      desc: 'High-intent search keyword harvesting, strict exclusion of spam click-farms, and automated lead capture with zero budget bleed.',
      metric: '₹10.66 Avg CPL'
    },
    {
      icon: Video,
      title: 'Viral 9:16 Short-Form Creative Production',
      desc: 'Direct-response video hooks, native creator UGC shoots, and cinema-grade color grading engineered to hook attention in the first 1.5 seconds.',
      metric: '1.4M+ Views / Reel'
    },
    {
      icon: Zap,
      title: 'Meta Conversions API (CAPI) & Tracking',
      desc: 'Server-side tracking gateway via Cloudflare/Stape bypassing iOS ad-blockers and browser cookie restrictions with 100% data fidelity.',
      metric: 'Zero Data Loss'
    },
    {
      icon: TrendingUp,
      title: 'WhatsApp Automation & n8n Routing',
      desc: 'Sub-15 second lead qualification bots that instantly message new ad leads, deliver digital brochures, and book sales calls without human delay.',
      metric: '< 15s Latency'
    },
    {
      icon: Users,
      title: 'Retention & Email Automation (Klaviyo)',
      desc: 'High-converting welcome sequences, abandoned checkout recovery ladders, and VIP loyalty campaigns that maximize customer lifetime value.',
      metric: '32% Revenue Lift'
    }
  ]

  const proofMetrics = [
    { value: '4.8x', label: 'Average Meta Ad ROAS', sub: 'Across D2C & Retail Clients' },
    { value: '₹10.66', label: 'Average Cost Per Lead', sub: 'Verified 155,000+ Inquiries' },
    { value: '71.2M+', label: 'Total Ad Impressions', sub: 'Meta, Google & YouTube' },
    { value: '< 48h', label: 'Creative Sprint Velocity', sub: 'Concept to Live Ad Deploy' },
  ]

  const caseHighlights = [
    {
      client: "Export Easy Hai",
      category: "B2B Global Trade & EdTech",
      result: "155,000+ Leads at ₹10.66 CPL",
      desc: "Restructured multi-channel Google & Meta funnels with instant WhatsApp lead qualification, eliminating spam clicks and unlocking massive low-cost scale.",
      image: "/assets/curated/analytics_ipad.jpg"
    },
    {
      client: "Pohawala Nagpur",
      category: "Food & Beverage Retail",
      result: "1.4M Organic & Paid Views (4.8x ROAS)",
      desc: "Commercial reel production with sensory food cinematography and localized geo-targeted Meta ads doubling weekend walk-in footfalls.",
      image: "/assets/curated/reel_food.jpg"
    },
    {
      client: "Celibar Nova",
      category: "Fashion & Lifestyle D2C",
      result: "₹24.8L In First-Month Launch Revenue",
      desc: "High-retention commercial reels combined with lookbook catalog ads achieving sub-₹120 customer acquisition cost nationwide.",
      image: "/assets/curated/fashion_d2c.jpg"
    }
  ]

  return (
    <div className="py-8 sm:py-14 bg-[#FAF8F5] text-[#111111] select-none">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-mono">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors">HOME</button>
          <span>/</span>
          <span className="text-black font-semibold">DIGITAL MARKETING</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-xs">
            <TrendingUp size={13} className="text-emerald-600" />
            <span>PERFORMANCE PAID ACQUISITION & RETENTION</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-[1.08] mb-4">
            Performance Marketing Engineered For Verified Revenue & Scalable ROAS
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Stop burning budget on agencies celebrating vanity likes and empty impressions. We engineer complete acquisition engines combining cinema-grade video creatives, aggressive ad targeting, server-side CAPI tracking, and automated lead capture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#retainers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            >
              <span>EXPLORE GROWTH RETAINERS</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I%20want%20to%20audit%20and%20scale%20my%20ad%20accounts."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black border border-zinc-300 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-zinc-100 transition-all shadow-sm active:scale-95"
            >
              <PhoneCall size={15} className="text-emerald-600" />
              <span>CLAIM FREE AD AUDIT</span>
            </a>
          </div>

          {/* Proof Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-zinc-200/80">
            {proofMetrics.map((m, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-zinc-200 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-black tracking-tight">{m.value}</div>
                <div className="text-[11px] font-mono font-bold text-zinc-800 uppercase tracking-wider mt-1">{m.label}</div>
                <div className="text-[10px] text-zinc-500 font-light mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Capabilities */}
        <div className="my-14 sm:my-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">FULL-FUNNEL EXECUTION</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1 mb-2">
              Our Digital Marketing Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">
              Every channel is integrated into a single cohesive growth engine with zero lead leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel, i) => {
              const Icon = channel.icon
              return (
                <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black mb-4">
                      <Icon size={20} className="text-emerald-700" />
                    </div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wider mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-light mb-4">
                      {channel.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-500 uppercase font-medium">Standard Outcome</span>
                    <span className="font-bold text-emerald-700">{channel.metric}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Performance Case Highlights */}
        <div className="my-14 sm:my-20 bg-white p-6 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">VERIFIED CASE STUDIES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1">
              Real Performance Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseHighlights.map((cs, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-zinc-200 bg-[#FAF8F5] flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                    <img src={cs.image} alt={cs.client} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-1">{cs.category}</div>
                    <div className="text-base font-bold text-black uppercase mb-1">{cs.client}</div>
                    <div className="text-xs font-bold text-emerald-700 mb-2">{cs.result}</div>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">{cs.desc}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button
                    onClick={() => navigate('/case-studies')}
                    className="w-full py-2 rounded-lg bg-white border border-zinc-300 text-xs font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Growth Retainers */}
        <div id="retainers" className="scroll-mt-20 my-16 sm:my-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">TRANSPARENT PARTNERSHIPS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1 mb-2">
              Monthly Growth Retainers
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">
              High-octane dedicated marketing squads without the overhead of hiring an in-house team. No long-term lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {RETAINERS_DATA.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white border ${
                  plan.featured 
                    ? 'border-2 border-black shadow-xl ring-1 ring-black/10 relative -translate-y-1' 
                    : 'border-zinc-200 hover:border-zinc-400 shadow-sm'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Zap size={11} className="text-[#00D2B8]" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-sm tracking-wider uppercase text-black mb-1">{plan.name}</h3>
                  <div className="text-3xl font-black text-black tracking-tight mb-1">
                    {plan.price}
                    <span className="text-xs font-normal text-zinc-500 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-6 pb-4 border-b border-zinc-100">{plan.sub}</div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
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
                          id: plan.id,
                          title: plan.name,
                          price: plan.price + plan.period,
                          img1: '/assets/curated/hero_studio.jpg'
                        }, plan.name)
                      }
                    }}
                    className={`w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 ${
                      plan.featured
                        ? 'bg-black text-white hover:bg-zinc-800'
                        : 'bg-zinc-100 text-black hover:bg-zinc-200'
                    }`}
                  >
                    <span>SELECT THIS PLAN</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={`https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20monthly%20retainer.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall size={12} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-black text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto my-12">
          <Sparkles className="w-8 h-8 text-[#00D2B8] mx-auto mb-3" />
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight mb-3">
            Want A Free Audit Of Your Current Ad Accounts?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto font-light leading-relaxed mb-6">
            We will review your Meta & Google ad campaigns, uncover wasted spend, check your tracking hygiene, and deliver 3 actionable growth angles in 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-all active:scale-95"
            >
              REQUEST ACCOUNT AUDIT
            </button>
            <a
              href="https://wa.me/918421706305?text=Hi%20Welurik%20Team!%20I%20would%20like%20a%20free%20audit%20of%20my%20Meta%20and%20Google%20ad%20accounts."
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
